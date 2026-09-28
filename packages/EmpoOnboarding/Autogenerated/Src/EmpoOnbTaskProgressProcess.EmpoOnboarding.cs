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

	#region Class: EmpoOnbTaskProgressProcessMethodsWrapper

	/// <exclude/>
	public class EmpoOnbTaskProgressProcessMethodsWrapper : ProcessModel
	{

		public EmpoOnbTaskProgressProcessMethodsWrapper(Process process)
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
			
			// ===== Keep progress counters in sync when an onboarding task changes =====
			Guid recordId = Get<Guid>("StartSignal1.RecordId");
			var sel = new Terrasoft.Core.DB.Select(uc).Top(1).Column("EmpoOnboardingId").From("EmpoOnbTask")
				.Where("Id").IsEqual(Terrasoft.Core.DB.Column.Parameter(recordId)) as Terrasoft.Core.DB.Select;
			Recalc(sel.ExecuteScalar<Guid>());
			return true;
		}

		#endregion

	}

	#endregion

}

