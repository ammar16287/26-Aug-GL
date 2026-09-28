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

	#region Class: EmpoRecInterviewUpdateProcessMethodsWrapper

	/// <exclude/>
	public class EmpoRecInterviewUpdateProcessMethodsWrapper : ProcessModel
	{

		public EmpoRecInterviewUpdateProcessMethodsWrapper(Process process)
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
				// ===== Interview changed: keep the calendar activity in sync =====
				Guid recordId = Get<Guid>("StartSignal1.RecordId");
				var interview = Load("EmpoInterview", recordId);
				if (interview == null) {
					return true;
				}
				var activity = Load("Activity", interview.GetTypedColumnValue<Guid>("EmpoActivityId"));
				if (activity == null) {
					return true;
				}
				// Snapshot of the calendar activity before sync = previous interviewer / time / status
				Guid oldOwnerId = activity.GetTypedColumnValue<Guid>("OwnerId");
				DateTime oldStart = activity.GetTypedColumnValue<DateTime>("StartDate");
				Guid oldActStatusId = activity.GetTypedColumnValue<Guid>("StatusId");
				bool actChanged = false;
				DateTime start = interview.GetTypedColumnValue<DateTime>("EmpoStartDate");
				DateTime end = interview.GetTypedColumnValue<DateTime>("EmpoEndDate");
				if (start != DateTime.MinValue) {
					actChanged |= SetValue(activity, "StartDate", start);
					actChanged |= SetValue(activity, "DueDate", end > start ? end : start.AddHours(1));
				}
				if (!IsEmptyGuid(interview, "EmpoInterviewerId")) {
					actChanged |= SetValue(activity, "OwnerId", interview.GetTypedColumnValue<Guid>("EmpoInterviewerId"));
				}
				string subject = "Interview: " + interview.GetTypedColumnValue<string>("EmpoName");
				actChanged |= SetValue(activity, "Title", subject.Length > 500 ? subject.Substring(0, 500) : subject);
				string location = interview.GetTypedColumnValue<string>("EmpoLocation") ?? string.Empty;
				actChanged |= SetValue(activity, "Location", location.Length > 250 ? location.Substring(0, 250) : location);
				string status = LookupName("EmpoInterviewStatus", interview.GetTypedColumnValue<Guid>("EmpoStatusId"));
				Guid activityStatusId = ActNotStartedId;
				if (status == "Completed") {
					activityStatusId = ActCompletedId;
				} else if (status == "Cancelled" || status == "No-show") {
					activityStatusId = ActCanceledId;
				}
				actChanged |= SetValue(activity, "StatusId", activityStatusId);
				string result = LookupName("EmpoInterviewResult", interview.GetTypedColumnValue<Guid>("EmpoResultId"));
				if (!string.IsNullOrEmpty(result)) {
					string feedback = interview.GetTypedColumnValue<string>("EmpoFeedback") ?? string.Empty;
					int rating = interview.GetTypedColumnValue<int>("EmpoRating");
					string detailed = "Result: " + result + (rating > 0 ? " | Rating: " + rating + "/5" : "") + (feedback.Length > 0 ? "\n" + feedback : "");
					actChanged |= SetValue(activity, "DetailedResult", detailed);
					if (status != "Cancelled" && status != "No-show") {
						actChanged |= SetValue(activity, "StatusId", ActCompletedId);
						if (status != "Completed") {
							interview.SetColumnValue("EmpoStatusId", LookupId("EmpoInterviewStatus", "Completed"));
							interview.Save(false);
						}
					}
				}
				Guid interviewerId = interview.GetTypedColumnValue<Guid>("EmpoInterviewerId");
				bool isOpen = status != "Completed" && status != "Cancelled" && status != "No-show" && string.IsNullOrEmpty(result);
				bool reassigned = interviewerId != Guid.Empty && interviewerId != oldOwnerId;
				bool rescheduled = start != DateTime.MinValue && start != oldStart;
				bool cancelled = (status == "Cancelled" || status == "No-show") && oldActStatusId != ActCanceledId;
				if (isOpen && (reassigned || rescheduled)) {
					SetActivityReminder(activity, start);
					actChanged = true;
				} else if (!isOpen && activity.GetTypedColumnValue<bool>("RemindToOwner")) {
					activity.SetColumnValue("RemindToOwner", false);
					actChanged = true;
				}
				if (actChanged) {
					activity.Save(false);
				}
				if (isOpen && reassigned) {
					NotifyInterviewer(interview, "New interview assigned");
				} else if (isOpen && rescheduled) {
					NotifyInterviewer(interview, "Interview rescheduled");
				} else if (status == "Cancelled" && cancelled) {
					NotifyInterviewer(interview, "Interview cancelled");
				}
				return true;
			}
			return Run();
		}

		#endregion

	}

	#endregion

}

