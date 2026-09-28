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

	#region Class: EmpoRecInterviewScheduledProcessMethodsWrapper

	/// <exclude/>
	public class EmpoRecInterviewScheduledProcessMethodsWrapper : ProcessModel
	{

		public EmpoRecInterviewScheduledProcessMethodsWrapper(Process process)
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
			
			// ===== Interviewer notifications =====
			Guid NotificationTypeId = new Guid("685e7149-c015-4a4d-b4a6-2e5625a6314c");
			Guid RemindingSourceOwnerId = new Guid("a76d08e1-2e2d-e011-ac0a-00155d043205");
			Guid InterviewEntitySchemaUId = new Guid("7c19d06a-597d-4c35-915e-884e2344575e");
			int ReminderMinutesBefore = 30;
			void NotifyInterviewer(Terrasoft.Core.Entities.Entity interview, string headline) {
				Guid contactId = interview.GetTypedColumnValue<Guid>("EmpoInterviewerId");
				if (contactId == Guid.Empty) {
					return;
				}
				DateTime start = interview.GetTypedColumnValue<DateTime>("EmpoStartDate");
				DateTime end = interview.GetTypedColumnValue<DateTime>("EmpoEndDate");
				string candidate = LookupName("EmpoCandidate", interview.GetTypedColumnValue<Guid>("EmpoCandidateId"));
				string location = interview.GetTypedColumnValue<string>("EmpoLocation");
				string when = start.ToString("ddd dd MMM yyyy, h:mm tt") + (end > start ? " - " + end.ToString("h:mm tt") : "");
				string interviewName = interview.GetTypedColumnValue<string>("EmpoName") ?? string.Empty;
				string message = headline + ". When: " + when
					+ (string.IsNullOrEmpty(candidate) ? "" : ". Candidate: " + candidate)
					+ (string.IsNullOrEmpty(location) ? "" : ". Location: " + location);
				string caption = headline + ": " + interviewName + " — " + when;
				var reminding = uc.EntitySchemaManager.GetInstanceByName("Reminding").CreateEntity(uc);
				reminding.SetDefColumnValues();
				reminding.SetColumnValue("Id", Guid.NewGuid());
				reminding.SetColumnValue("AuthorId", CurrentContactId);
				reminding.SetColumnValue("ContactId", contactId);
				reminding.SetColumnValue("SourceId", RemindingSourceOwnerId);
				reminding.SetColumnValue("RemindTime", Now);
				reminding.SetColumnValue("Description", message.Length > 500 ? message.Substring(0, 500) : message);
				reminding.SetColumnValue("SubjectCaption", caption.Length > 250 ? caption.Substring(0, 250) : caption);
				reminding.SetColumnValue("PopupTitle", "Interview");
				reminding.SetColumnValue("SubjectId", interview.PrimaryColumnValue);
				reminding.SetColumnValue("SysEntitySchemaId", InterviewEntitySchemaUId);
				reminding.SetColumnValue("NotificationTypeId", NotificationTypeId);
				reminding.Save(false);
			}
			void SetActivityReminder(Terrasoft.Core.Entities.Entity activity, DateTime start) {
				if (start <= Now) {
					activity.SetColumnValue("RemindToOwner", false);
					return;
				}
				DateTime remindAt = start.AddMinutes(-ReminderMinutesBefore);
				activity.SetColumnValue("RemindToOwner", true);
				activity.SetColumnValue("RemindToOwnerDate", remindAt > Now ? remindAt : Now);
			}
			
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
				SetActivityReminder(activity, start);
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
				// ===== Interview scheduled: fill defaults, book calendar activity, move application to Interviewing =====
				Guid recordId = Get<Guid>("StartSignal1.RecordId");
				var interview = Load("EmpoInterview", recordId);
				if (interview == null) {
					return true;
				}
				var app = Load("EmpoApplication", interview.GetTypedColumnValue<Guid>("EmpoApplicationId"));
				bool intChanged = false;
				if (IsEmptyGuid(interview, "EmpoCandidateId") && app != null && !IsEmptyGuid(app, "EmpoCandidateId")) {
					intChanged |= SetValue(interview, "EmpoCandidateId", app.GetTypedColumnValue<Guid>("EmpoCandidateId"));
				}
				if (IsEmptyGuid(interview, "EmpoStatusId")) {
					intChanged |= SetValue(interview, "EmpoStatusId", LookupId("EmpoInterviewStatus", "Planned"));
				}
				if (IsEmptyGuid(interview, "EmpoInterviewerId") && CurrentContactId != Guid.Empty) {
					intChanged |= SetValue(interview, "EmpoInterviewerId", CurrentContactId);
				}
				if (interview.GetTypedColumnValue<int>("EmpoRound") <= 0 && app != null) {
					intChanged |= SetValue(interview, "EmpoRound", CountBy("EmpoInterview", "EmpoApplicationId", app.PrimaryColumnValue));
				}
				DateTime start = interview.GetTypedColumnValue<DateTime>("EmpoStartDate");
				if (start == DateTime.MinValue) {
					start = Now.Date.AddDays(1).AddHours(10);
					intChanged |= SetValue(interview, "EmpoStartDate", start);
				}
				DateTime end = interview.GetTypedColumnValue<DateTime>("EmpoEndDate");
				if (end == DateTime.MinValue || end <= start) {
					end = start.AddHours(1);
					intChanged |= SetValue(interview, "EmpoEndDate", end);
				}
				Guid candidateId = interview.GetTypedColumnValue<Guid>("EmpoCandidateId");
				string candidateName = LookupName("EmpoCandidate", candidateId);
				string typeName = LookupName("EmpoInterviewType", interview.GetTypedColumnValue<Guid>("EmpoInterviewTypeId"));
				if (IsEmptyText(interview, "EmpoName")) {
					string subject = (string.IsNullOrEmpty(typeName) ? "Interview" : typeName) + " - " + candidateName;
					intChanged |= SetValue(interview, "EmpoName", subject.Length > 250 ? subject.Substring(0, 250) : subject);
				}
				if (IsEmptyGuid(interview, "EmpoActivityId")) {
					Guid candContactId = EnsureCandidateContact(candidateId);
					string activityNotes = "Candidate: " + candidateName
						+ (app != null ? "\nApplication: " + app.GetTypedColumnValue<string>("EmpoName") : "")
						+ "\nRound: " + interview.GetTypedColumnValue<int>("EmpoRound")
						+ "\nRecord feedback, rating and result on the interview record.";
					Guid activityId = CreateActivity("Interview: " + interview.GetTypedColumnValue<string>("EmpoName"), start, end,
						interview.GetTypedColumnValue<Guid>("EmpoInterviewerId"), CategoryMeetingId, candContactId,
						interview.GetTypedColumnValue<string>("EmpoLocation"), activityNotes);
					intChanged |= SetValue(interview, "EmpoActivityId", activityId);
				}
				if (intChanged) {
					interview.Save(false);
				}
			NotifyInterviewer(interview, "New interview assigned");
				if (app != null) {
					string stage = LookupName("EmpoApplicationStage", app.GetTypedColumnValue<Guid>("EmpoStageId"));
					if (stage == "" || stage == "New inquiry" || stage == "Acknowledged" || stage == "Prescreening" || stage == "AI evaluation" || stage == "Shortlisted") {
						app.SetColumnValue("EmpoStageId", LookupId("EmpoApplicationStage", "Interviewing"));
						app.Save(false);
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

