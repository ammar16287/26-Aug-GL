define("EmpoInterviews_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
	{
		"operation": "merge",
		"name": "MenuItem_ImportFromExcel",
		"values": {
			"clicked": {
				"request": "crt.ImportDataRequest",
				"params": {
					"entitySchemaName": "EmpoInterview"
				}
			}
		}
	},
	{
		"operation": "merge",
		"name": "FolderTree",
		"values": {
			"sourceSchemaName": "FolderTree",
			"rootSchemaName": "EmpoInterview"
		}
	},
	{
		"operation": "merge",
		"name": "DataTable",
		"values": {
			"columns": [
				{
					"id": "5229c77a-0c2d-4994-bbd9-17c6fa82c64e",
					"code": "PDS_EmpoName",
					"caption": "Subject",
					"dataValueType": 28,
					"width": 240
				},
				{
					"id": "1285ec00-6386-4c2e-a61d-f2706175c67a",
					"code": "PDS_EmpoCandidate",
					"caption": "Candidate",
					"dataValueType": 10,
					"width": 180
				},
				{
					"id": "e3b546fa-22eb-4082-959e-70a0fa7dc893",
					"code": "PDS_EmpoApplication",
					"caption": "Application",
					"dataValueType": 10,
					"width": 180
				},
				{
					"id": "4558186a-fbd4-4c34-b701-1464f7051870",
					"code": "PDS_EmpoInterviewType",
					"caption": "Type",
					"dataValueType": 10,
					"width": 180
				},
				{
					"id": "bcd7816d-419d-41cc-bb00-973f7cae1b59",
					"code": "PDS_EmpoStartDate",
					"caption": "Start",
					"dataValueType": 7,
					"width": 140
				},
				{
					"id": "e2d65cc3-e3bb-4bda-bf1f-ba92afab71a5",
					"code": "PDS_EmpoInterviewer",
					"caption": "Interviewer",
					"dataValueType": 10,
					"width": 180
				},
				{
					"id": "bbe35fb7-86ab-4a11-8f17-3bccb637dfd3",
					"code": "PDS_EmpoStatus",
					"caption": "Status",
					"dataValueType": 10,
					"width": 180
				},
				{
					"id": "a31ac90e-b456-4418-ab7f-1491bd1f2ea7",
					"code": "PDS_EmpoResult",
					"caption": "Result",
					"dataValueType": 10,
					"width": 180
				}
			]
		}
	},
	{
		"operation": "merge",
		"name": "Dashboards",
		"values": {
			"_designOptions": {
				"entitySchemaName": "EmpoInterview",
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
			"PDS_EmpoCandidate": {
				"modelConfig": {
					"path": "PDS.EmpoCandidate"
				}
			},
			"PDS_EmpoApplication": {
				"modelConfig": {
					"path": "PDS.EmpoApplication"
				}
			},
			"PDS_EmpoInterviewType": {
				"modelConfig": {
					"path": "PDS.EmpoInterviewType"
				}
			},
			"PDS_EmpoStartDate": {
				"modelConfig": {
					"path": "PDS.EmpoStartDate"
				}
			},
			"PDS_EmpoInterviewer": {
				"modelConfig": {
					"path": "PDS.EmpoInterviewer"
				}
			},
			"PDS_EmpoStatus": {
				"modelConfig": {
					"path": "PDS.EmpoStatus"
				}
			},
			"PDS_EmpoResult": {
				"modelConfig": {
					"path": "PDS.EmpoResult"
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
					"entitySchemaName": "EmpoInterview"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
