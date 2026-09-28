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

	#region Class: EmpoOnbStageProgressionProcessMethodsWrapper

	/// <exclude/>
	public class EmpoOnbStageProgressionProcessMethodsWrapper : ProcessModel
	{

		public EmpoOnbStageProgressionProcessMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			// ===== Employee Onboarding automation (shared helpers) =====
			var uc = UserConnection;
			Guid NotificationTypeId = new Guid("685e7149-c015-4a4d-b4a6-2e5625a6314c");
			Guid RemindingSourceOwnerId = new Guid("a76d08e1-2e2d-e011-ac0a-00155d043205");
			Guid OnboardingModuleEntityId = new Guid("32ba265e-bfd6-45b4-857e-372e1bb248a6");
			string Phase1 = "1. Hire & create record";
			string Phase2 = "2. Job offer & acceptance";
			string Phase3 = "3. Collect employee information";
			string Phase4 = "4. Pre-joining preparation";
			string Phase5 = "5. First day welcome";
			string Phase6 = "6. Onboarding completed";
			
			Guid LookupId(string schemaName, string name) {
				var select = new Terrasoft.Core.DB.Select(uc).Top(1).Column("Id").From(schemaName)
					.Where("Name").IsEqual(Terrasoft.Core.DB.Column.Parameter(name)) as Terrasoft.Core.DB.Select;
				return select.ExecuteScalar<Guid>();
			}
			int CountBy(string schemaName, string column, Guid value) {
				var select = new Terrasoft.Core.DB.Select(uc).Column(Terrasoft.Core.DB.Func.Count("Id")).From(schemaName)
					.Where(column).IsEqual(Terrasoft.Core.DB.Column.Parameter(value)) as Terrasoft.Core.DB.Select;
				return select.ExecuteScalar<int>();
			}
			int CountByText(string schemaName, string column, string value) {
				var select = new Terrasoft.Core.DB.Select(uc).Column(Terrasoft.Core.DB.Func.Count("Id")).From(schemaName)
					.Where(column).IsEqual(Terrasoft.Core.DB.Column.Parameter(value)) as Terrasoft.Core.DB.Select;
				return select.ExecuteScalar<int>();
			}
			Terrasoft.Core.Entities.Entity Load(string schemaName, Guid id) {
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
			bool SetLookup(Terrasoft.Core.Entities.Entity entity, string column, Guid value) {
				if (value == Guid.Empty) {
					return false;
				}
				return SetValue(entity, column + "Id", value);
			}
			void Notify(Guid contactId, Guid onboardingId, string caption, string message) {
				if (contactId == Guid.Empty) {
					return;
				}
				var reminding = uc.EntitySchemaManager.GetInstanceByName("Reminding").CreateEntity(uc);
				reminding.SetDefColumnValues();
				reminding.SetColumnValue("Id", Guid.NewGuid());
				reminding.SetColumnValue("AuthorId", uc.CurrentUser.ContactId);
				reminding.SetColumnValue("ContactId", contactId);
				reminding.SetColumnValue("SourceId", RemindingSourceOwnerId);
				reminding.SetColumnValue("RemindTime", DateTime.UtcNow);
				reminding.SetColumnValue("Description", message);
				reminding.SetColumnValue("SubjectCaption", caption);
				reminding.SetColumnValue("PopupTitle", "Employee onboarding");
				reminding.SetColumnValue("SubjectId", onboardingId);
				reminding.SetColumnValue("SysEntitySchemaId", OnboardingModuleEntityId);
				reminding.SetColumnValue("NotificationTypeId", NotificationTypeId);
				reminding.Save(false);
			}
			void NotifyTeam(Terrasoft.Core.Entities.Entity onboarding, string message) {
				var sent = new System.Collections.Generic.HashSet<Guid>();
				foreach (string col in new[] { "EmpoHiringManagerId", "EmpoHrPartnerId" }) {
					Guid contactId = onboarding.GetTypedColumnValue<Guid>(col);
					if (contactId != Guid.Empty && sent.Add(contactId)) {
						Notify(contactId, onboarding.PrimaryColumnValue, onboarding.GetTypedColumnValue<string>("EmpoName"), message);
					}
				}
			}
			void Recalc(Guid onboardingId) {
				if (onboardingId == Guid.Empty) {
					return;
				}
				Guid completed = LookupId("EmpoOnbTaskStatus", "Completed");
				Guid skipped = LookupId("EmpoOnbTaskStatus", "Skipped");
				var esq = new Terrasoft.Core.Entities.EntitySchemaQuery(uc.EntitySchemaManager, "EmpoOnbTask");
				esq.AddColumn("EmpoStatus");
				esq.AddColumn("EmpoDueDate");
				esq.Filters.Add(esq.CreateFilterWithParameters(Terrasoft.Core.Entities.FilterComparisonType.Equal, "EmpoOnboarding", onboardingId));
				var tasks = esq.GetEntityCollection(uc);
				int total = tasks.Count, done = 0, overdue = 0;
				DateTime today = DateTime.UtcNow.Date;
				foreach (var task in tasks) {
					Guid status = task.GetTypedColumnValue<Guid>("EmpoStatusId");
					if (status == completed || status == skipped) {
						done++;
					} else {
						DateTime due = task.GetTypedColumnValue<DateTime>("EmpoDueDate");
						if (due != DateTime.MinValue && due.Date < today) {
							overdue++;
						}
					}
				}
				int percent = total > 0 ? (int)Math.Round(done * 100.0 / total) : 0;
				var update = new Terrasoft.Core.DB.Update(uc, "EmpoOnboarding")
					.Set("EmpoTaskTotalCount", Terrasoft.Core.DB.Column.Parameter(total))
					.Set("EmpoTaskCompletedCount", Terrasoft.Core.DB.Column.Parameter(done))
					.Set("EmpoTaskOverdueCount", Terrasoft.Core.DB.Column.Parameter(overdue))
					.Set("EmpoProgressPercent", Terrasoft.Core.DB.Column.Parameter(percent))
					.Where("Id").IsEqual(Terrasoft.Core.DB.Column.Parameter(onboardingId)) as Terrasoft.Core.DB.Update;
				update.Execute();
			}
			
			// ===== Steps 2-6: offer, information, preparation, first day, completion =====
			Guid recordId = Get<Guid>("StartSignal1.RecordId");
			var ob = Load("EmpoOnboarding", recordId);
			if (ob == null) {
				return true;
			}
			bool obChanged = false;
			var messages = new System.Collections.Generic.List<string>();
			Guid offerStatus = ob.GetTypedColumnValue<Guid>("EmpoOfferStatusId");
			Guid obStatus = ob.GetTypedColumnValue<Guid>("EmpoStatusId");
			Guid offerSent = LookupId("EmpoOnbOfferStatus", "Sent");
			Guid offerAccepted = LookupId("EmpoOnbOfferStatus", "Accepted");
			Guid offerDeclined = LookupId("EmpoOnbOfferStatus", "Declined");
			Guid stNotStarted = LookupId("EmpoOnbStatus", "Not started");
			Guid stOfferSent = LookupId("EmpoOnbStatus", "Offer sent");
			Guid stOfferAccepted = LookupId("EmpoOnbStatus", "Offer accepted");
			Guid stInProgress = LookupId("EmpoOnbStatus", "In progress");
			Guid stCompleted = LookupId("EmpoOnbStatus", "Completed");
			Guid stCancelled = LookupId("EmpoOnbStatus", "Cancelled");
			DateTime now = DateTime.UtcNow.Date;
			
			// Step 2 - Job offer & acceptance
			if (offerStatus == offerSent) {
				if (ob.GetTypedColumnValue<DateTime>("EmpoOfferSentOn") == DateTime.MinValue) {
					obChanged |= SetValue(ob, "EmpoOfferSentOn", now);
					// Offer letter e-mail (draft activity for the candidate)
					string cand = ob.GetTypedColumnValue<string>("EmpoName");
					string title = "Offer letter - " + cand;
					if (CountByText("Activity", "Title", title) == 0) {
						Guid candId = ob.GetTypedColumnValue<Guid>("EmpoEmployeeId");
						string mail = ob.GetTypedColumnValue<string>("EmpoPersonalEmail");
						DateTime start = ob.GetTypedColumnValue<DateTime>("EmpoStartDate");
						string position = ob.GetTypedColumnValue<string>("EmpoJobTitle");
						string salary = ob.GetTypedColumnValue<string>("EmpoOfferedSalary");
						string body = "<p>Dear " + cand + ",</p>"
							+ "<p>We are pleased to offer you the position of <b>" + (string.IsNullOrEmpty(position) ? "(position)" : position) + "</b>.</p>"
							+ "<p>Your joining date will be <b>" + (start == DateTime.MinValue ? "(to be confirmed)" : start.ToString("dd-MMM-yyyy")) + "</b>."
							+ (string.IsNullOrEmpty(salary) ? string.Empty : " Offered compensation: <b>" + salary + "</b>.") + "</p>"
							+ "<p>Please reply to this email to confirm your acceptance of this offer.</p>"
							+ "<p>Kind regards,<br/>Human Resources</p>";
						var act = uc.EntitySchemaManager.GetInstanceByName("Activity").CreateEntity(uc);
						act.SetDefColumnValues();
						act.SetColumnValue("Id", Guid.NewGuid());
						act.SetColumnValue("Title", title);
						act.SetColumnValue("TypeId", new Guid("e2831dec-cfc0-df11-b00f-001d60e938c6"));
						act.SetColumnValue("ActivityCategoryId", new Guid("8038a396-7825-e011-8165-00155d043204"));
						act.SetColumnValue("StatusId", new Guid("384d4b84-58e6-df11-971b-001d60e938c6"));
						act.SetColumnValue("MessageTypeId", new Guid("7f6d3f94-f36b-1410-068c-20cf30b39373"));
						act.SetColumnValue("Recepient", mail ?? string.Empty);
						act.SetColumnValue("Body", body);
						act.SetColumnValue("IsHtmlBody", true);
						act.SetColumnValue("OwnerId", uc.CurrentUser.ContactId);
						act.SetColumnValue("AuthorId", uc.CurrentUser.ContactId);
						if (candId != Guid.Empty) {
							act.SetColumnValue("ContactId", candId);
						}
						act.SetColumnValue("StartDate", DateTime.UtcNow);
						act.SetColumnValue("DueDate", DateTime.UtcNow.AddMinutes(30));
						act.Save(false);
						messages.Add("Offer letter e-mail prepared for the candidate (see Activities).");
					}
				}
				if (ob.GetTypedColumnValue<DateTime>("EmpoOfferDate") == DateTime.MinValue) {
					obChanged |= SetValue(ob, "EmpoOfferDate", now);
				}
				if (obStatus == stNotStarted || obStatus == Guid.Empty) {
					obStatus = stOfferSent;
				}
			}
			if (offerStatus == offerAccepted) {
				if (ob.GetTypedColumnValue<DateTime>("EmpoOfferAcceptedOn") == DateTime.MinValue) {
					obChanged |= SetValue(ob, "EmpoOfferAcceptedOn", now);
					messages.Add("Candidate accepted the offer - please collect employee information.");
				}
				if (obStatus == stNotStarted || obStatus == stOfferSent || obStatus == Guid.Empty) {
					obStatus = stOfferAccepted;
				}
			}
			if (offerStatus == offerDeclined && obStatus != stCancelled) {
				obStatus = stCancelled;
				messages.Add("Candidate declined the offer - onboarding cancelled.");
			}
			
			// Step 3 - Employee information
			bool hasBank = CountBy("EmpoOnbBankInfo", "EmpoOnboardingId", recordId) > 0;
			bool hasContact = !string.IsNullOrEmpty(ob.GetTypedColumnValue<string>("EmpoPersonalEmail"))
				|| !string.IsNullOrEmpty(ob.GetTypedColumnValue<string>("EmpoPersonalPhone"));
			bool hasEmergency = !string.IsNullOrEmpty(ob.GetTypedColumnValue<string>("EmpoEmergencyName"));
			int docTotal = CountBy("EmpoOnbDocument", "EmpoOnboardingId", recordId);
			var verifiedSelect = new Terrasoft.Core.DB.Select(uc).Column(Terrasoft.Core.DB.Func.Count("Id")).From("EmpoOnbDocument")
				.Where("EmpoOnboardingId").IsEqual(Terrasoft.Core.DB.Column.Parameter(recordId))
				.And("EmpoStatusId").IsEqual(Terrasoft.Core.DB.Column.Parameter(LookupId("EmpoOnbDocStatus", "Verified"))) as Terrasoft.Core.DB.Select;
			if (docTotal > 0 && verifiedSelect.ExecuteScalar<int>() == docTotal) {
				obChanged |= SetValue(ob, "EmpoDocsVerified", true);
			}
			bool infoDone = hasBank && hasContact && hasEmergency && ob.GetTypedColumnValue<bool>("EmpoDocsVerified");
			
			// Step 4 / 5 checklists
			bool prepDone = ob.GetTypedColumnValue<bool>("EmpoAccountCreated") && ob.GetTypedColumnValue<bool>("EmpoEquipmentReady")
				&& ob.GetTypedColumnValue<bool>("EmpoSystemAccess") && ob.GetTypedColumnValue<bool>("EmpoWorkspaceAssigned")
				&& ob.GetTypedColumnValue<bool>("EmpoScheduleReady");
			bool dayDone = ob.GetTypedColumnValue<bool>("EmpoWelcomed") && ob.GetTypedColumnValue<bool>("EmpoHrIntroduced")
				&& ob.GetTypedColumnValue<bool>("EmpoTeamIntroduced") && ob.GetTypedColumnValue<bool>("EmpoPoliciesExplained");
			
			string phase = Phase1;
			if (offerStatus == offerSent) {
				phase = Phase2;
			}
			if (offerStatus == offerAccepted) {
				phase = Phase3;
				if (infoDone) {
					phase = Phase4;
					if (prepDone) {
						phase = Phase5;
						if (dayDone) {
							phase = Phase6;
						}
					}
				}
			}
			if (obStatus == stCompleted) {
				phase = Phase6;
			}
			if ((phase == Phase4 || phase == Phase5) && (obStatus == stOfferAccepted || obStatus == stNotStarted || obStatus == stOfferSent)) {
				obStatus = stInProgress;
			}
			// Step 6 - Onboarding completed
			if (phase == Phase6 && obStatus != stCancelled) {
				obStatus = stCompleted;
				if (ob.GetTypedColumnValue<DateTime>("EmpoCompletedOn") == DateTime.MinValue) {
					obChanged |= SetValue(ob, "EmpoCompletedOn", now);
					messages.Add("Onboarding completed - the employee is now active.");
				}
				obChanged |= SetValue(ob, "EmpoEmployeeActive", true);
				obChanged |= SetValue(ob, "EmpoDocsVerified", true);
			}
			if (phase == Phase5) {
				obChanged |= SetLookup(ob, "EmpoStage", LookupId("EmpoOnbStage", "Day 1"));
			}
			if (obStatus != Guid.Empty) {
				obChanged |= SetLookup(ob, "EmpoStatus", obStatus);
			}
			if (SetLookup(ob, "EmpoPhase", LookupId("EmpoOnbPhase", phase))) {
				obChanged = true;
				messages.Add("Onboarding moved to phase: " + phase + ".");
			}
			if (obChanged) {
				ob.Save(false);
			}
			Recalc(recordId);
			if (messages.Count > 0) {
				NotifyTeam(ob, string.Join(" ", messages));
			}
			return true;
		}

		#endregion

	}

	#endregion

}

