define("EmpoOnbTaskSection_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "EmpoOnbTask"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"sourceSchemaName": "FolderTree",
					"rootSchemaName": "EmpoOnbTask"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "5b83fdd5-6cfc-4cb1-8a73-7f1526368668",
							"code": "PDS_EmpoName",
							"caption": "Task",
							"dataValueType": 1
						},
						{
							"id": "96ed8add-c21d-486a-bc9a-1b70a3067013",
							"code": "PDS_EmpoOnboarding",
							"caption": "Onboarding",
							"dataValueType": 10
						},
						{
							"id": "cf2d1884-9a3a-4cb7-a630-fe2059a46dfc",
							"code": "PDS_EmpoDepartment",
							"caption": "Responsible department",
							"dataValueType": 10
						},
						{
							"id": "b5c146d7-7873-4714-8f31-f54f38d56c0c",
							"code": "PDS_EmpoStage",
							"caption": "Stage",
							"dataValueType": 10
						},
						{
							"id": "9e0bdfc3-c97c-4188-ad91-0894c2fdf6bc",
							"code": "PDS_EmpoAssignee",
							"caption": "Assignee",
							"dataValueType": 10
						},
						{
							"id": "5187dc67-a499-403c-97cb-083445d48728",
							"code": "PDS_EmpoStatus",
							"caption": "Status",
							"dataValueType": 10
						},
						{
							"id": "3158677c-6792-4a2d-b7c5-ae748f967956",
							"code": "PDS_EmpoPriority",
							"caption": "Priority",
							"dataValueType": 10
						},
						{
							"id": "6092eea3-1a1c-4f20-8c64-2deb8064a632",
							"code": "PDS_EmpoDueDate",
							"caption": "Due date",
							"dataValueType": 7
						},
						{
							"id": "f71f5aff-39a9-4881-9e74-b59a5ec316ba",
							"code": "PDS_EmpoIsMandatory",
							"caption": "Mandatory",
							"dataValueType": 12
						},
						{
							"id": "14655478-0087-4336-92f2-db062ff451f4",
							"code": "PDS_EmpoSequence",
							"caption": "Sequence",
							"dataValueType": 4
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "EmpoOnbTask",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_EmpoName": {
						"modelConfig": {
							"path": "PDS.EmpoName"
						}
					},
					"PDS_EmpoOnboarding": {
						"modelConfig": {
							"path": "PDS.EmpoOnboarding"
						}
					},
					"PDS_EmpoDepartment": {
						"modelConfig": {
							"path": "PDS.EmpoDepartment"
						}
					},
					"PDS_EmpoStage": {
						"modelConfig": {
							"path": "PDS.EmpoStage"
						}
					},
					"PDS_EmpoAssignee": {
						"modelConfig": {
							"path": "PDS.EmpoAssignee"
						}
					},
					"PDS_EmpoStatus": {
						"modelConfig": {
							"path": "PDS.EmpoStatus"
						}
					},
					"PDS_EmpoPriority": {
						"modelConfig": {
							"path": "PDS.EmpoPriority"
						}
					},
					"PDS_EmpoDueDate": {
						"modelConfig": {
							"path": "PDS.EmpoDueDate"
						}
					},
					"PDS_EmpoIsMandatory": {
						"modelConfig": {
							"path": "PDS.EmpoIsMandatory"
						}
					},
					"PDS_EmpoSequence": {
						"modelConfig": {
							"path": "PDS.EmpoSequence"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "EmpoOnbTask"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
