define("EmpoApplications_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
	{
		"operation": "merge",
		"name": "MenuItem_ImportFromExcel",
		"values": {
			"clicked": {
				"request": "crt.ImportDataRequest",
				"params": {
					"entitySchemaName": "EmpoApplication"
				}
			}
		}
	},
	{
		"operation": "merge",
		"name": "FolderTree",
		"values": {
			"sourceSchemaName": "FolderTree",
			"rootSchemaName": "EmpoApplication"
		}
	},
	{
		"operation": "merge",
		"name": "DataTable",
		"values": {
			"columns": [
				{
					"id": "b319430c-2508-4b9a-b6ba-29661ddfd319",
					"code": "PDS_EmpoName",
					"caption": "Application",
					"dataValueType": 28,
					"width": 240
				},
				{
					"id": "dd5a69e5-57e9-4f03-91c6-5f02cbe350a0",
					"code": "PDS_EmpoCandidate",
					"caption": "Candidate",
					"dataValueType": 10,
					"width": 180
				},
				{
					"id": "72ddfaa4-4f11-43d6-a99a-3bc120a02815",
					"code": "PDS_EmpoJobAdvertisement",
					"caption": "Job advertisement",
					"dataValueType": 10,
					"width": 180
				},
				{
					"id": "fda01296-9e6f-4a44-9918-4c627f53d00d",
					"code": "PDS_EmpoStage",
					"caption": "Stage",
					"dataValueType": 10,
					"width": 180
				},
				{
					"id": "831be5f0-4ab4-4c3c-814e-22e69d98de86",
					"code": "PDS_EmpoPrescreenResult",
					"caption": "Prescreening",
					"dataValueType": 10,
					"width": 180
				},
				{
					"id": "bb1c9429-a5cc-4122-8be0-d9228d215530",
					"code": "PDS_EmpoAIScore",
					"caption": "AI score",
					"dataValueType": 4,
					"width": 140
				},
				{
					"id": "f6608f70-02f2-478f-b7c4-5fb8e19b7885",
					"code": "PDS_EmpoAIRecommendation",
					"caption": "AI recommendation",
					"dataValueType": 10,
					"width": 180
				},
				{
					"id": "4138b53e-801d-42cc-b157-5ac35baa09a7",
					"code": "PDS_EmpoRecruiter",
					"caption": "Recruiter",
					"dataValueType": 10,
					"width": 180
				},
				{
					"id": "7fa66dae-ca8c-4797-b1ff-4020e3a813c9",
					"code": "PDS_EmpoInquiryDate",
					"caption": "Received on",
					"dataValueType": 7,
					"width": 140
				}
			]
		}
	},
	{
		"operation": "merge",
		"name": "Dashboards",
		"values": {
			"_designOptions": {
				"entitySchemaName": "EmpoApplication",
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
			"PDS_EmpoJobAdvertisement": {
				"modelConfig": {
					"path": "PDS.EmpoJobAdvertisement"
				}
			},
			"PDS_EmpoStage": {
				"modelConfig": {
					"path": "PDS.EmpoStage"
				}
			},
			"PDS_EmpoPrescreenResult": {
				"modelConfig": {
					"path": "PDS.EmpoPrescreenResult"
				}
			},
			"PDS_EmpoAIScore": {
				"modelConfig": {
					"path": "PDS.EmpoAIScore"
				}
			},
			"PDS_EmpoAIRecommendation": {
				"modelConfig": {
					"path": "PDS.EmpoAIRecommendation"
				}
			},
			"PDS_EmpoRecruiter": {
				"modelConfig": {
					"path": "PDS.EmpoRecruiter"
				}
			},
			"PDS_EmpoInquiryDate": {
				"modelConfig": {
					"path": "PDS.EmpoInquiryDate"
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
					"entitySchemaName": "EmpoApplication"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
