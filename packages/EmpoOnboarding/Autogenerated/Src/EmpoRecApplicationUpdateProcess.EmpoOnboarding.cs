namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: EmpoRecApplicationUpdateProcessMethodsWrapper

	/// <exclude/>
	public class EmpoRecApplicationUpdateProcessMethodsWrapper : ProcessModel
	{

		public EmpoRecApplicationUpdateProcessMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			// ===== Recruitment automation (shared helpers) =====
			var uc = UserConnection;
			Guid TaskTypeId = new Guid("fbe0acdc-cfc0-df11-b00f-001d60e938c6");
			Guid CategoryToDoId = new Guid("f51c4643-58e6-df11-971b-001d60e938c6");
			Guid CategoryMeetingId = new Guid("42c74c49-58e6-df11-971b-001d60e938c6");
			Guid ActNotStartedId = new Guid("384d4b84-58e6-df11-971b-001d60e938c6");
			Guid ActCompletedId = new Guid("4bdbb88f-58e6-df11-971b-001d60e938c6");
			Guid ActCanceledId = new Guid("201cfba8-58e6-df11-971b-001d60e938c6");
			Guid PriorityMediumId = new Guid("ab96fa02-7fe6-df11-971b-001d60e938c6");
			Guid CurrentContactId = uc.CurrentUser.ContactId;
			DateTime Now = uc.CurrentUser.GetCurrentDateTime();
			
			string DisplayColumn(string schemaName) {
				return uc.EntitySchemaManager.GetInstanceByName(schemaName).PrimaryDisplayColumn.ColumnValueName;
			}
			Guid LookupId(string schemaName, string name) {
				var select = new Terrasoft.Core.DB.Select(uc).Top(1).Column("Id").From(schemaName)
					.Where(DisplayColumn(schemaName)).IsEqual(Terrasoft.Core.DB.Column.Parameter(name)) as Terrasoft.Core.DB.Select;
				return select.ExecuteScalar<Guid>();
			}
			string LookupName(string schemaName, Guid id) {
				if (id == Guid.Empty) {
					return string.Empty;
				}
				var select = new Terrasoft.Core.DB.Select(uc).Top(1).Column(DisplayColumn(schemaName)).From(schemaName)
					.Where("Id").IsEqual(Terrasoft.Core.DB.Column.Parameter(id)) as Terrasoft.Core.DB.Select;
				return select.ExecuteScalar<string>() ?? string.Empty;
			}
			Terrasoft.Core.Entities.Entity Load(string schemaName, Guid id) {
				if (id == Guid.Empty) {
					return null;
				}
				var entity = uc.EntitySchemaManager.GetInstanceByName(schemaName).CreateEntity(uc);
				return entity.FetchFromDB(id) ? entity : null;
			}
			bool SetValue(Terrasoft.Core.Entities.Entity entity, string column, object value) {
				object current = entity.GetColumnValue(column);
				if (Equals(current, value)) {
					return false;
				}
				entity.SetColumnValue(column, value);
				return true;
			}
			bool IsEmptyGuid(Terrasoft.Core.Entities.Entity entity, string column) {
				return entity.GetTypedColumnValue<Guid>(column) == Guid.Empty;
			}
			bool IsEmptyText(Terrasoft.Core.Entities.Entity entity, string column) {
				return string.IsNullOrWhiteSpace(entity.GetTypedColumnValue<string>(column));
			}
			bool IsEmptyDate(Terrasoft.Core.Entities.Entity entity, string column) {
				return entity.GetTypedColumnValue<DateTime>(column) == DateTime.MinValue;
			}
			int CountBy(string schemaName, string column, Guid value) {
				var select = new Terrasoft.Core.DB.Select(uc).Column(Terrasoft.Core.DB.Func.Count("Id")).From(schemaName)
					.Where(column).IsEqual(Terrasoft.Core.DB.Column.Parameter(value)) as Terrasoft.Core.DB.Select;
				return select.ExecuteScalar<int>();
			}
			void RecalcApplicants(Guid jobAdId) {
				if (jobAdId == Guid.Empty) {
					return;
				}
				var update = new Terrasoft.Core.DB.Update(uc, "EmpoJobAdvertisement")
					.Set("EmpoApplicants", Terrasoft.Core.DB.Column.Parameter(CountBy("EmpoApplication", "EmpoJobAdvertisementId", jobAdId)))
					.Where("Id").IsEqual(Terrasoft.Core.DB.Column.Parameter(jobAdId)) as Terrasoft.Core.DB.Update;
				update.Execute();
			}
			// Fills Requisition / Company / Source / Name defaults. Returns true when something changed.
			bool ApplyApplicationDefaults(Terrasoft.Core.Entities.Entity app) {
				bool changed = false;
				Guid jobAdId = app.GetTypedColumnValue<Guid>("EmpoJobAdvertisementId");
				if (IsEmptyGuid(app, "EmpoRequisitionId") && jobAdId != Guid.Empty) {
					var ad = Load("EmpoJobAdvertisement", jobAdId);
					if (ad != null && ad.GetTypedColumnValue<Guid>("EmpoRequisitionId") != Guid.Empty) {
						changed |= SetValue(app, "EmpoRequisitionId", ad.GetTypedColumnValue<Guid>("EmpoRequisitionId"));
					}
				}
				Guid reqId = app.GetTypedColumnValue<Guid>("EmpoRequisitionId");
				if (IsEmptyGuid(app, "EmpoCompanyId") && reqId != Guid.Empty) {
					var req = Load("EmpoRequisition", reqId);
					if (req != null && req.GetTypedColumnValue<Guid>("EmpoCompanyId") != Guid.Empty) {
						changed |= SetValue(app, "EmpoCompanyId", req.GetTypedColumnValue<Guid>("EmpoCompanyId"));
					}
				}
				var candidate = Load("EmpoCandidate", app.GetTypedColumnValue<Guid>("EmpoCandidateId"));
				if (candidate != null && IsEmptyGuid(app, "EmpoSourceId") && candidate.GetTypedColumnValue<Guid>("EmpoSourceId") != Guid.Empty) {
					changed |= SetValue(app, "EmpoSourceId", candidate.GetTypedColumnValue<Guid>("EmpoSourceId"));
				}
				if (IsEmptyText(app, "EmpoName") && candidate != null) {
					string position = LookupName("EmpoJobAdvertisement", jobAdId);
					if (string.IsNullOrEmpty(position)) {
						position = LookupName("EmpoRequisition", reqId);
					}
					string name = candidate.GetTypedColumnValue<string>("EmpoName") + (string.IsNullOrEmpty(position) ? "" : " - " + position);
					changed |= SetValue(app, "EmpoName", name.Length > 250 ? name.Substring(0, 250) : name);
				}
				return changed;
			}
			// Makes sure the candidate has a Contact record; returns its Id.
			Guid EnsureCandidateContact(Guid candidateId) {
				var candidate = Load("EmpoCandidate", candidateId);
				if (candidate == null) {
					return Guid.Empty;
				}
				Guid contactId = candidate.GetTypedColumnValue<Guid>("EmpoContactId");
				if (contactId != Guid.Empty) {
					return contactId;
				}
				var contact = uc.EntitySchemaManager.GetInstanceByName("Contact").CreateEntity(uc);
				contact.SetDefColumnValues();
				contactId = Guid.NewGuid();
				contact.SetColumnValue("Id", contactId);
				contact.SetColumnValue("Name", candidate.GetTypedColumnValue<string>("EmpoName"));
				contact.SetColumnValue("Email", candidate.GetTypedColumnValue<string>("EmpoEmail"));
				contact.SetColumnValue("MobilePhone", candidate.GetTypedColumnValue<string>("EmpoPhone"));
				contact.SetColumnValue("JobTitle", candidate.GetTypedColumnValue<string>("EmpoCurrentPosition"));
				contact.Save(false);
				candidate.SetColumnValue("EmpoContactId", contactId);
				candidate.Save(false);
				return contactId;
			}
			Guid CreateActivity(string title, DateTime start, DateTime due, Guid ownerId, Guid categoryId, Guid contactId, string location, string notes) {
				var activity = uc.EntitySchemaManager.GetInstanceByName("Activity").CreateEntity(uc);
				activity.SetDefColumnValues();
				Guid id = Guid.NewGuid();
				activity.SetColumnValue("Id", id);
				activity.SetColumnValue("Title", title.Length > 500 ? title.Substring(0, 500) : title);
				activity.SetColumnValue("StartDate", start);
				activity.SetColumnValue("DueDate", due);
				activity.SetColumnValue("OwnerId", ownerId != Guid.Empty ? ownerId : CurrentContactId);
				activity.SetColumnValue("AuthorId", CurrentContactId);
				activity.SetColumnValue("TypeId", TaskTypeId);
				activity.SetColumnValue("ActivityCategoryId", categoryId);
				activity.SetColumnValue("StatusId", ActNotStartedId);
				activity.SetColumnValue("PriorityId", PriorityMediumId);
				activity.SetColumnValue("ShowInScheduler", true);
				if (contactId != Guid.Empty) {
					activity.SetColumnValue("ContactId", contactId);
				}
				if (!string.IsNullOrEmpty(location)) {
					activity.SetColumnValue("Location", location.Length > 250 ? location.Substring(0, 250) : location);
				}
				if (!string.IsNullOrEmpty(notes)) {
					activity.SetColumnValue("Notes", notes);
				}
				activity.Save(false);
				return id;
			}
			
			bool Run() {
				// ===== Application changed: acknowledgement, prescreening, hire =====
				Guid recordId = Get<Guid>("StartSignal1.RecordId");
				var app = Load("EmpoApplication", recordId);
				if (app == null) {
					return true;
				}
				bool appChanged = ApplyApplicationDefaults(app);
				string stage = LookupName("EmpoApplicationStage", app.GetTypedColumnValue<Guid>("EmpoStageId"));
				string prescreen = LookupName("EmpoPrescreenResult", app.GetTypedColumnValue<Guid>("EmpoPrescreenResultId"));
				bool isEarly = stage == "" || stage == "New inquiry" || stage == "Acknowledged" || stage == "Prescreening";
				bool isClosed = stage == "Rejected" || stage == "Hired" || stage == "Withdrawn";
				// Inquiry acknowledged -> Acknowledged stage
				if (app.GetTypedColumnValue<bool>("EmpoAcknowledged") && (stage == "" || stage == "New inquiry")) {
					stage = "Acknowledged";
					appChanged |= SetValue(app, "EmpoStageId", LookupId("EmpoApplicationStage", stage));
				}
				// Prescreening outcome
				if (prescreen != "" && prescreen != "Pending") {
					if (IsEmptyDate(app, "EmpoPrescreenDate")) {
						appChanged |= SetValue(app, "EmpoPrescreenDate", Now);
					}
					if (IsEmptyGuid(app, "EmpoPrescreenedById") && CurrentContactId != Guid.Empty) {
						appChanged |= SetValue(app, "EmpoPrescreenedById", CurrentContactId);
					}
				}
				if (prescreen == "Passed" && isEarly) {
					stage = "AI evaluation";
					appChanged |= SetValue(app, "EmpoStageId", LookupId("EmpoApplicationStage", stage));
				} else if (prescreen == "Failed" && !isClosed) {
					stage = "Rejected";
					appChanged |= SetValue(app, "EmpoStageId", LookupId("EmpoApplicationStage", stage));
					if (IsEmptyText(app, "EmpoRejectionReason")) {
						appChanged |= SetValue(app, "EmpoRejectionReason", "Did not pass prescreening");
					}
				} else if (prescreen == "On hold" && (stage == "New inquiry" || stage == "Acknowledged")) {
					stage = "Prescreening";
					appChanged |= SetValue(app, "EmpoStageId", LookupId("EmpoApplicationStage", stage));
				}
				if (appChanged) {
					app.Save(false);
				}
				RecalcApplicants(app.GetTypedColumnValue<Guid>("EmpoJobAdvertisementId"));
				Guid candidateIdForChecks = app.GetTypedColumnValue<Guid>("EmpoCandidateId");
				// ===== Background check (fields on the application) =====
				bool stepChanged = false;
				string bgStatus = LookupName("EmpoBgCheckStatus", app.GetTypedColumnValue<Guid>("EmpoBgCheckStatusId"));
				if (stage == "Background check" && string.IsNullOrEmpty(bgStatus)) {
					bgStatus = "Not started";
					stepChanged |= SetValue(app, "EmpoBgCheckStatusId", LookupId("EmpoBgCheckStatus", bgStatus));
				}
				if (!string.IsNullOrEmpty(bgStatus)) {
					if (IsEmptyGuid(app, "EmpoBgCheckAssignedToId") && !IsEmptyGuid(app, "EmpoRecruiterId")) {
						stepChanged |= SetValue(app, "EmpoBgCheckAssignedToId", app.GetTypedColumnValue<Guid>("EmpoRecruiterId"));
					}
					if (IsEmptyDate(app, "EmpoBgCheckDueDate")) {
						stepChanged |= SetValue(app, "EmpoBgCheckDueDate", Now.Date.AddDays(7));
					}
					string[] bgItems = new string[] { "EmpoBgIdentityVerified", "EmpoBgEducationVerified", "EmpoBgEmploymentVerified", "EmpoBgCriminalRecordCleared", "EmpoBgReferencesChecked" };
					int bgDone = 0;
					foreach (string bgItem in bgItems) {
						if (app.GetTypedColumnValue<bool>(bgItem)) {
							bgDone++;
						}
					}
					if (bgStatus == "Not started" && bgDone > 0) {
						bgStatus = "In progress";
						stepChanged |= SetValue(app, "EmpoBgCheckStatusId", LookupId("EmpoBgCheckStatus", bgStatus));
					}
					if ((bgStatus == "Not started" || bgStatus == "In progress") && bgDone == bgItems.Length) {
						bgStatus = "Cleared";
						stepChanged |= SetValue(app, "EmpoBgCheckStatusId", LookupId("EmpoBgCheckStatus", bgStatus));
					}
					bool bgFinished = bgStatus == "Cleared" || bgStatus == "Flagged" || bgStatus == "Failed";
					if (bgFinished && IsEmptyDate(app, "EmpoBgCheckCompletedOn")) {
						stepChanged |= SetValue(app, "EmpoBgCheckCompletedOn", Now);
						if (bgStatus == "Flagged" || bgStatus == "Failed") {
							CreateActivity("Review background check (" + bgStatus + "): " + app.GetTypedColumnValue<string>("EmpoName"),
								Now, Now.AddDays(1), app.GetTypedColumnValue<Guid>("EmpoRecruiterId"), CategoryToDoId, Guid.Empty, null,
								"Findings: " + app.GetTypedColumnValue<string>("EmpoBgCheckResult"));
						}
					}
					// Background check cleared -> Offer stage
					if (bgStatus == "Cleared" && stage == "Background check") {
						stage = "Offer";
						stepChanged |= SetValue(app, "EmpoStageId", LookupId("EmpoApplicationStage", stage));
					}
				}
				// ===== Offer (fields on the application) =====
				string offerStatus = LookupName("EmpoOnbOfferStatus", app.GetTypedColumnValue<Guid>("EmpoOfferStatusId"));
				if (stage == "Offer" && string.IsNullOrEmpty(offerStatus)) {
					offerStatus = "Not sent";
					stepChanged |= SetValue(app, "EmpoOfferStatusId", LookupId("EmpoOnbOfferStatus", offerStatus));
				}
				if (!string.IsNullOrEmpty(offerStatus)) {
					var offerReq = Load("EmpoRequisition", app.GetTypedColumnValue<Guid>("EmpoRequisitionId"));
					var offerCand = Load("EmpoCandidate", app.GetTypedColumnValue<Guid>("EmpoCandidateId"));
					string offerCandName = offerCand != null ? offerCand.GetTypedColumnValue<string>("EmpoName") : app.GetTypedColumnValue<string>("EmpoName");
					if (IsEmptyText(app, "EmpoOfferJobTitle") && offerReq != null && !IsEmptyText(offerReq, "EmpoJobTitle")) {
						stepChanged |= SetValue(app, "EmpoOfferJobTitle", offerReq.GetTypedColumnValue<string>("EmpoJobTitle"));
					}
					if (IsEmptyText(app, "EmpoOfferedSalary")) {
						string offerSalary = !IsEmptyText(app, "EmpoExpectedSalary") ? app.GetTypedColumnValue<string>("EmpoExpectedSalary")
							: (offerReq != null ? offerReq.GetTypedColumnValue<string>("EmpoSalaryRange") : string.Empty);
						if (!string.IsNullOrEmpty(offerSalary)) {
							stepChanged |= SetValue(app, "EmpoOfferedSalary", offerSalary);
						}
					}
					if (IsEmptyDate(app, "EmpoOfferStartDate")) {
						DateTime proposedStart = Now.Date.AddDays(14);
						if (!IsEmptyDate(app, "EmpoAvailableFrom") && app.GetTypedColumnValue<DateTime>("EmpoAvailableFrom") > proposedStart) {
							proposedStart = app.GetTypedColumnValue<DateTime>("EmpoAvailableFrom");
						}
						if (offerReq != null && !IsEmptyDate(offerReq, "EmpoTargetStartDate") && offerReq.GetTypedColumnValue<DateTime>("EmpoTargetStartDate") > proposedStart) {
							proposedStart = offerReq.GetTypedColumnValue<DateTime>("EmpoTargetStartDate");
						}
						stepChanged |= SetValue(app, "EmpoOfferStartDate", proposedStart);
					}
					if (IsEmptyText(app, "EmpoOfferLetter")) {
						Guid offerCompanyId = app.GetTypedColumnValue<Guid>("EmpoCompanyId");
						if (offerCompanyId == Guid.Empty && offerReq != null) {
							offerCompanyId = offerReq.GetTypedColumnValue<Guid>("EmpoCompanyId");
						}
						string offerCompany = LookupName("EmpoCompany", offerCompanyId);
						string offerTitle = app.GetTypedColumnValue<string>("EmpoOfferJobTitle");
						string letter = "Dear " + offerCandName + ",\n\n"
							+ "We are pleased to offer you the position of " + (string.IsNullOrEmpty(offerTitle) ? "[job title]" : offerTitle)
							+ (string.IsNullOrEmpty(offerCompany) ? "" : " at " + offerCompany) + ".\n\n"
							+ "Proposed start date: " + app.GetTypedColumnValue<DateTime>("EmpoOfferStartDate").ToString("dd MMM yyyy") + "\n"
							+ "Compensation: " + (IsEmptyText(app, "EmpoOfferedSalary") ? "[salary]" : app.GetTypedColumnValue<string>("EmpoOfferedSalary")) + "\n\n"
							+ "This offer is subject to the satisfactory completion of background checks and the documents required for onboarding "
							+ "(signed contract/NDA, national ID or passport, educational certificates).\n\n"
							+ "Please confirm your acceptance by the response date stated in this offer.\n\n"
							+ "Kind regards,\nHR Team";
						stepChanged |= SetValue(app, "EmpoOfferLetter", letter);
					}
					if (offerStatus == "Sent" && IsEmptyDate(app, "EmpoOfferSentOn")) {
						stepChanged |= SetValue(app, "EmpoOfferSentOn", Now);
					}
					if (offerStatus == "Sent" && IsEmptyDate(app, "EmpoOfferResponseDue")) {
						stepChanged |= SetValue(app, "EmpoOfferResponseDue", Now.Date.AddDays(7));
					}
					if ((offerStatus == "Accepted" || offerStatus == "Declined") && IsEmptyDate(app, "EmpoOfferRespondedOn")) {
						stepChanged |= SetValue(app, "EmpoOfferRespondedOn", Now);
						if (IsEmptyDate(app, "EmpoOfferSentOn")) {
							stepChanged |= SetValue(app, "EmpoOfferSentOn", Now);
						}
					}
					// Offer accepted -> Hired; declined -> Withdrawn
					if (offerStatus == "Accepted" && stage != "Hired") {
						stage = "Hired";
						stepChanged |= SetValue(app, "EmpoStageId", LookupId("EmpoApplicationStage", stage));
					} else if (offerStatus == "Declined" && stage != "Withdrawn" && stage != "Hired") {
						stage = "Withdrawn";
						stepChanged |= SetValue(app, "EmpoStageId", LookupId("EmpoApplicationStage", stage));
						if (IsEmptyText(app, "EmpoRejectionReason")) {
							string declineReason = app.GetTypedColumnValue<string>("EmpoOfferDeclineReason");
							stepChanged |= SetValue(app, "EmpoRejectionReason", "Offer declined" + (string.IsNullOrEmpty(declineReason) ? "" : ": " + declineReason));
						}
					}
				}
				if (stepChanged) {
					app.Save(false);
				}
				// Hired -> create the Employee Onboarding record
				if (stage == "Hired" && IsEmptyGuid(app, "EmpoOnboardingId")) {
					Guid candidateId = app.GetTypedColumnValue<Guid>("EmpoCandidateId");
					Guid employeeId = EnsureCandidateContact(candidateId);
					var cand = Load("EmpoCandidate", candidateId);
					var req = Load("EmpoRequisition", app.GetTypedColumnValue<Guid>("EmpoRequisitionId"));
					var onb = uc.EntitySchemaManager.GetInstanceByName("EmpoOnboarding").CreateEntity(uc);
					onb.SetDefColumnValues();
					Guid onbId = Guid.NewGuid();
					onb.SetColumnValue("Id", onbId);
					string empName = cand != null ? cand.GetTypedColumnValue<string>("EmpoName") : app.GetTypedColumnValue<string>("EmpoName");
					onb.SetColumnValue("EmpoName", empName);
					if (employeeId != Guid.Empty) {
						onb.SetColumnValue("EmpoEmployeeId", employeeId);
					}
					if (!IsEmptyGuid(app, "EmpoCompanyId")) {
						onb.SetColumnValue("EmpoCompanyId", app.GetTypedColumnValue<Guid>("EmpoCompanyId"));
					}
					DateTime startDate = Now.Date.AddDays(14);
					if (!IsEmptyDate(app, "EmpoAvailableFrom")) {
						startDate = app.GetTypedColumnValue<DateTime>("EmpoAvailableFrom");
					}
					if (req != null) {
						if (!IsEmptyDate(req, "EmpoTargetStartDate") && req.GetTypedColumnValue<DateTime>("EmpoTargetStartDate") > startDate) {
							startDate = req.GetTypedColumnValue<DateTime>("EmpoTargetStartDate");
						}
						if (!IsEmptyGuid(req, "EmpoDepartmentId")) {
							onb.SetColumnValue("EmpoDepartmentId", req.GetTypedColumnValue<Guid>("EmpoDepartmentId"));
						}
						if (!IsEmptyGuid(req, "EmpoHiringManagerId")) {
							onb.SetColumnValue("EmpoHiringManagerId", req.GetTypedColumnValue<Guid>("EmpoHiringManagerId"));
							onb.SetColumnValue("EmpoLineManagerId", req.GetTypedColumnValue<Guid>("EmpoHiringManagerId"));
						}
						if (!IsEmptyGuid(req, "EmpoTeamId")) {
							onb.SetColumnValue("EmpoTeamId", req.GetTypedColumnValue<Guid>("EmpoTeamId"));
						}
						if (!IsEmptyText(req, "EmpoJobTitle")) {
							onb.SetColumnValue("EmpoJobTitle", req.GetTypedColumnValue<string>("EmpoJobTitle"));
						}
						if (IsEmptyGuid(app, "EmpoCompanyId") && !IsEmptyGuid(req, "EmpoCompanyId")) {
							onb.SetColumnValue("EmpoCompanyId", req.GetTypedColumnValue<Guid>("EmpoCompanyId"));
						}
					}
					onb.SetColumnValue("EmpoStartDate", startDate);
					if (cand != null) {
						onb.SetColumnValue("EmpoPersonalEmail", cand.GetTypedColumnValue<string>("EmpoEmail"));
						onb.SetColumnValue("EmpoPersonalPhone", cand.GetTypedColumnValue<string>("EmpoPhone"));
						onb.SetColumnValue("EmpoLocation", cand.GetTypedColumnValue<string>("EmpoLocation"));
					}
					onb.SetColumnValue("EmpoOfferedSalary", app.GetTypedColumnValue<string>("EmpoExpectedSalary"));
					// Offer details now live on the application
					if (!IsEmptyText(app, "EmpoOfferedSalary")) {
						onb.SetColumnValue("EmpoOfferedSalary", app.GetTypedColumnValue<string>("EmpoOfferedSalary"));
					}
					if (!IsEmptyText(app, "EmpoOfferJobTitle")) {
						onb.SetColumnValue("EmpoJobTitle", app.GetTypedColumnValue<string>("EmpoOfferJobTitle"));
					}
					if (!IsEmptyDate(app, "EmpoOfferStartDate")) {
						startDate = app.GetTypedColumnValue<DateTime>("EmpoOfferStartDate");
					}
					if (!IsEmptyGuid(app, "EmpoOfferStatusId")) {
						onb.SetColumnValue("EmpoOfferStatusId", app.GetTypedColumnValue<Guid>("EmpoOfferStatusId"));
					}
					if (!IsEmptyDate(app, "EmpoOfferSentOn")) {
						onb.SetColumnValue("EmpoOfferSentOn", app.GetTypedColumnValue<DateTime>("EmpoOfferSentOn"));
						onb.SetColumnValue("EmpoOfferDate", app.GetTypedColumnValue<DateTime>("EmpoOfferSentOn"));
					}
					if (!IsEmptyDate(app, "EmpoOfferRespondedOn")) {
						onb.SetColumnValue("EmpoOfferAcceptedOn", app.GetTypedColumnValue<DateTime>("EmpoOfferRespondedOn"));
					}
					if (!IsEmptyText(app, "EmpoOfferNotes")) {
						onb.SetColumnValue("EmpoOfferNotes", app.GetTypedColumnValue<string>("EmpoOfferNotes"));
					}
					onb.SetColumnValue("EmpoStartDate", startDate);
					Guid statusId = LookupId("EmpoOnbStatus", "Not started");
					if (statusId != Guid.Empty) {
						onb.SetColumnValue("EmpoStatusId", statusId);
					}
					Guid stageId = LookupId("EmpoOnbStage", "Pre-boarding");
					if (stageId != Guid.Empty) {
						onb.SetColumnValue("EmpoStageId", stageId);
					}
					Guid phaseId = LookupId("EmpoOnbPhase", "1. Hire & create record");
					if (phaseId != Guid.Empty) {
						onb.SetColumnValue("EmpoPhaseId", phaseId);
					}
					onb.SetColumnValue("EmpoNotes", "Created from recruitment application: " + app.GetTypedColumnValue<string>("EmpoName"));
					onb.Save(false);
					app.SetColumnValue("EmpoOnboardingId", onbId);
					app.Save(false);
					if (req != null) {
						bool reqChanged = false;
						if (IsEmptyGuid(req, "EmpoHiredCandidateId") && employeeId != Guid.Empty) {
							reqChanged |= SetValue(req, "EmpoHiredCandidateId", employeeId);
						}
						if (IsEmptyGuid(req, "EmpoOnboardingId")) {
							reqChanged |= SetValue(req, "EmpoOnboardingId", onbId);
						}
						if (IsEmptyDate(req, "EmpoActualStartDate")) {
							reqChanged |= SetValue(req, "EmpoActualStartDate", startDate);
						}
						int positions = req.GetTypedColumnValue<int>("EmpoPositions");
						var hiredSelect = new Terrasoft.Core.DB.Select(uc).Column(Terrasoft.Core.DB.Func.Count("Id")).From("EmpoApplication")
							.Where("EmpoRequisitionId").IsEqual(Terrasoft.Core.DB.Column.Parameter(req.PrimaryColumnValue))
							.And("EmpoStageId").IsEqual(Terrasoft.Core.DB.Column.Parameter(LookupId("EmpoApplicationStage", "Hired"))) as Terrasoft.Core.DB.Select;
						int hired = hiredSelect.ExecuteScalar<int>();
						if (hired >= Math.Max(positions, 1)) {
							Guid filledId = LookupId("EmpoRequisitionStatus", "Filled");
							if (filledId != Guid.Empty) {
								reqChanged |= SetValue(req, "EmpoStatusId", filledId);
							}
						}
						if (reqChanged) {
							req.Save(false);
						}
					}
				}
				return true;
			}
			return Run();
		}

		#endregion

	}

	#endregion

}

