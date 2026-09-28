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

	#region Class: EmpoRecAIGetApplicationProcessMethodsWrapper

	/// <exclude/>
	public class EmpoRecAIGetApplicationProcessMethodsWrapper : ProcessModel
	{

		public EmpoRecAIGetApplicationProcessMethodsWrapper(Process process)
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
				Guid FindApplication(string appRef) {
					Guid parsed;
					if (Guid.TryParse(appRef, out parsed)) {
						return CountBy("EmpoApplication", "Id", parsed) > 0 ? parsed : Guid.Empty;
					}
					if (string.IsNullOrWhiteSpace(appRef)) {
						return Guid.Empty;
					}
					var byName = new Terrasoft.Core.DB.Select(uc).Top(1).Column("Id").From("EmpoApplication")
						.OrderByDesc("CreatedOn") as Terrasoft.Core.DB.Select;
					byName.Where("EmpoName").IsLike(Terrasoft.Core.DB.Column.Parameter("%" + appRef + "%"));
					return byName.ExecuteScalar<Guid>();
				}
				// ===== AI tool: return everything the evaluator needs about one application =====
				string reference = (Get<string>("ApplicationReference") ?? string.Empty).Trim();
				Guid appId = FindApplication(reference);
				var app = Load("EmpoApplication", appId);
				if (app == null) {
					Set("ApplicationDetails", "No application found for '" + reference + "'. Ask the user for the application name or open the application record.");
					return true;
				}
				var sb = new System.Text.StringBuilder();
				void Line(string label, string value) {
					if (!string.IsNullOrWhiteSpace(value)) {
						sb.AppendLine(label + ": " + value.Trim());
					}
				}
				string Html(string value) {
					if (string.IsNullOrEmpty(value)) {
						return string.Empty;
					}
					string text = System.Text.RegularExpressions.Regex.Replace(value, "<[^>]+>", " ");
					return System.Net.WebUtility.HtmlDecode(System.Text.RegularExpressions.Regex.Replace(text, "\\s+", " ")).Trim();
				}
				string YesNo(Terrasoft.Core.Entities.Entity e, string column) {
					return e.GetTypedColumnValue<bool>(column) ? "Yes" : "No";
				}
				string DateText(Terrasoft.Core.Entities.Entity e, string column) {
					DateTime value = e.GetTypedColumnValue<DateTime>(column);
					return value == DateTime.MinValue ? string.Empty : value.ToString("yyyy-MM-dd");
				}
				sb.AppendLine("APPLICATION");
				Line("Application Id", app.PrimaryColumnValue.ToString());
				Line("Application", app.GetTypedColumnValue<string>("EmpoName"));
				Line("Stage", LookupName("EmpoApplicationStage", app.GetTypedColumnValue<Guid>("EmpoStageId")));
				Line("Source", LookupName("EmpoCandidateSource", app.GetTypedColumnValue<Guid>("EmpoSourceId")));
				Line("Job advertisement", LookupName("EmpoJobAdvertisement", app.GetTypedColumnValue<Guid>("EmpoJobAdvertisementId")));
				Line("Inquiry / cover letter", app.GetTypedColumnValue<string>("EmpoInquiryMessage"));
				sb.AppendLine();
				var cand = Load("EmpoCandidate", app.GetTypedColumnValue<Guid>("EmpoCandidateId"));
				if (cand != null) {
					sb.AppendLine("CANDIDATE");
					Line("Name", cand.GetTypedColumnValue<string>("EmpoName"));
					Line("Location", cand.GetTypedColumnValue<string>("EmpoLocation"));
					Line("Current position", cand.GetTypedColumnValue<string>("EmpoCurrentPosition"));
					Line("Current employer", cand.GetTypedColumnValue<string>("EmpoCurrentEmployer"));
					Line("Years of experience", cand.GetTypedColumnValue<int>("EmpoYearsExperience").ToString());
					Line("Key skills", cand.GetTypedColumnValue<string>("EmpoSkills"));
					Line("LinkedIn", cand.GetTypedColumnValue<string>("EmpoLinkedIn"));
					Line("Resume / CV", cand.GetTypedColumnValue<string>("EmpoResumeText"));
					Line("Recruiter notes", cand.GetTypedColumnValue<string>("EmpoNotes"));
					sb.AppendLine();
				}
				sb.AppendLine("PRESCREENING");
				Line("Result", LookupName("EmpoPrescreenResult", app.GetTypedColumnValue<Guid>("EmpoPrescreenResultId")));
				Line("Meets minimum requirements", YesNo(app, "EmpoMeetsMinRequirements"));
				Line("Authorized to work", YesNo(app, "EmpoWorkAuthorized"));
				Line("Willing to relocate", YesNo(app, "EmpoWillingToRelocate"));
				Line("Expected salary", app.GetTypedColumnValue<string>("EmpoExpectedSalary"));
				Line("Notice period (days)", app.GetTypedColumnValue<int>("EmpoNoticePeriodDays").ToString());
				Line("Available from", DateText(app, "EmpoAvailableFrom"));
				Line("Prescreening notes", app.GetTypedColumnValue<string>("EmpoPrescreenNotes"));
				sb.AppendLine();
				var req = Load("EmpoRequisition", app.GetTypedColumnValue<Guid>("EmpoRequisitionId"));
				if (req != null) {
					sb.AppendLine("POSITION (REQUISITION)");
					Line("Requisition", req.GetTypedColumnValue<string>("EmpoName"));
					Line("Job title", req.GetTypedColumnValue<string>("EmpoJobTitle"));
					Line("Company", LookupName("EmpoCompany", req.GetTypedColumnValue<Guid>("EmpoCompanyId")));
					Line("Department", LookupName("EmpoOnbDepartment", req.GetTypedColumnValue<Guid>("EmpoDepartmentId")));
					Line("Employment type", LookupName("EmpoEmploymentType", req.GetTypedColumnValue<Guid>("EmpoEmploymentTypeId")));
					Line("Salary range", req.GetTypedColumnValue<string>("EmpoSalaryRange"));
					Line("Requirements", Html(req.GetTypedColumnValue<string>("EmpoRequirements")));
					Line("Job description", Html(req.GetTypedColumnValue<string>("EmpoJobDescription")));
					sb.AppendLine();
				} else {
					sb.AppendLine("POSITION: no requisition linked - evaluate against the job advertisement title only.");
					sb.AppendLine();
				}
				var esq = new Terrasoft.Core.Entities.EntitySchemaQuery(uc.EntitySchemaManager, "EmpoInterview");
				esq.AddColumn("EmpoName");
				esq.AddColumn("EmpoStartDate");
				esq.AddColumn("EmpoRating");
				esq.AddColumn("EmpoFeedback");
				var resultCol = esq.AddColumn("EmpoResult.Name");
				esq.Filters.Add(esq.CreateFilterWithParameters(Terrasoft.Core.Entities.FilterComparisonType.Equal, "EmpoApplication", app.PrimaryColumnValue));
				var interviews = esq.GetEntityCollection(uc);
				if (interviews.Count > 0) {
					sb.AppendLine("INTERVIEWS");
					foreach (var interview in interviews) {
						string resultName = interview.GetTypedColumnValue<string>(resultCol.Name);
						sb.AppendLine("- " + interview.GetTypedColumnValue<string>("EmpoName")
							+ " | result: " + (string.IsNullOrEmpty(resultName) ? "pending" : resultName)
							+ " | rating: " + interview.GetTypedColumnValue<int>("EmpoRating")
							+ " | feedback: " + interview.GetTypedColumnValue<string>("EmpoFeedback"));
					}
				}
				Set("ApplicationDetails", sb.ToString());
				return true;
			}
			return Run();
		}

		#endregion

	}

	#endregion

}

