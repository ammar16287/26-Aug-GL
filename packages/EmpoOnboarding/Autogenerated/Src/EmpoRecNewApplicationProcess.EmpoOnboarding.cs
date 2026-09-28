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

	#region Class: EmpoRecNewApplicationProcessMethodsWrapper

	/// <exclude/>
	public class EmpoRecNewApplicationProcessMethodsWrapper : ProcessModel
	{

		public EmpoRecNewApplicationProcessMethodsWrapper(Process process)
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
				// ===== New application / inquiry received =====
				Guid recordId = Get<Guid>("StartSignal1.RecordId");
				var app = Load("EmpoApplication", recordId);
				if (app == null) {
					return true;
				}
				bool appChanged = ApplyApplicationDefaults(app);
				if (IsEmptyDate(app, "EmpoInquiryDate")) {
					appChanged |= SetValue(app, "EmpoInquiryDate", Now);
				}
				if (IsEmptyGuid(app, "EmpoStageId")) {
					appChanged |= SetValue(app, "EmpoStageId", LookupId("EmpoApplicationStage", "New inquiry"));
				}
				if (IsEmptyGuid(app, "EmpoPrescreenResultId")) {
					appChanged |= SetValue(app, "EmpoPrescreenResultId", LookupId("EmpoPrescreenResult", "Pending"));
				}
				if (IsEmptyGuid(app, "EmpoRecruiterId") && CurrentContactId != Guid.Empty) {
					appChanged |= SetValue(app, "EmpoRecruiterId", CurrentContactId);
				}
				if (appChanged) {
					app.Save(false);
				}
				RecalcApplicants(app.GetTypedColumnValue<Guid>("EmpoJobAdvertisementId"));
				// Follow-up task for the recruiter: respond to the inquiry and prescreen the candidate
				var cand = Load("EmpoCandidate", app.GetTypedColumnValue<Guid>("EmpoCandidateId"));
				Guid candContactId = cand != null ? cand.GetTypedColumnValue<Guid>("EmpoContactId") : Guid.Empty;
				string candidateName = cand != null ? cand.GetTypedColumnValue<string>("EmpoName") : app.GetTypedColumnValue<string>("EmpoName");
				string taskNotes = "Application: " + app.GetTypedColumnValue<string>("EmpoName")
					+ "\nSend an acknowledgement, then complete the Prescreening tab (result, availability, salary expectations).";
				CreateActivity("Respond & prescreen: " + candidateName, Now, Now.AddDays(1), app.GetTypedColumnValue<Guid>("EmpoRecruiterId"),
					CategoryToDoId, candContactId, null, taskNotes);
				return true;
			}
			return Run();
		}

		#endregion

	}

	#endregion

}

