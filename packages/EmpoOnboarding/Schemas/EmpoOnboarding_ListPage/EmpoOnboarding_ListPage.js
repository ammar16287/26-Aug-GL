define("EmpoOnboarding_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "EmpoOnboarding"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "EmpoOnboarding"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "913d2c17-a44f-421a-acc0-3f03a007f308",
							"code": "PDS_EmpoName",
							"caption": "Name",
							"dataValueType": 1
						},
						{
							"id": "de0f841a-c576-4026-8361-d33aa91d33f2",
							"code": "PDS_EmpoEmployee",
							"caption": "Candidate (contact)",
							"dataValueType": 10
						},
						{
							"id": "7bc3e375-bcca-4104-b44f-49b4b05f08a9",
							"code": "PDS_EmpoJobTitle",
							"caption": "Position",
							"dataValueType": 1
						},
						{
							"id": "26707bf3-6546-4da1-bdc2-5f5ac2cec8d9",
							"code": "PDS_EmpoDepartment",
							"caption": "Department",
							"dataValueType": 10
						},
						{
							"id": "a8fd1509-c77e-49b1-9375-e5cba4046ee0",
							"code": "PDS_EmpoStartDate",
							"caption": "Joining date",
							"dataValueType": 8
						},
						{
							"id": "eeb1f1b3-6a90-4144-b01f-032655026618",
							"code": "PDS_EmpoStatus",
							"caption": "Status",
							"dataValueType": 10
						},
						{
							"id": "87c98a6f-b9ac-430b-a5c6-b5b2e12d5f89",
							"code": "PDS_EmpoPhase",
							"caption": "Onboarding phase",
							"dataValueType": 10
						},
						{
							"id": "557e81d5-eb54-4093-8e54-926ea48b8994",
							"code": "PDS_EmpoOfferStatus",
							"caption": "Offer status",
							"dataValueType": 10
						},
						{
							"id": "4f54c2ca-2c78-408f-b1ea-5bd0e43064da",
							"code": "PDS_EmpoHiringManager",
							"caption": "Hiring manager",
							"dataValueType": 10
						},
						{
							"id": "11737636-fe99-4ca6-af02-87316bc98108",
							"code": "PDS_EmpoProgressPercent",
							"caption": "Progress, %",
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
						"entitySchemaName": "EmpoOnboarding",
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
					"PDS_EmpoEmployee": {
						"modelConfig": {
							"path": "PDS.EmpoEmployee"
						}
					},
					"PDS_EmpoJobTitle": {
						"modelConfig": {
							"path": "PDS.EmpoJobTitle"
						}
					},
					"PDS_EmpoDepartment": {
						"modelConfig": {
							"path": "PDS.EmpoDepartment"
						}
					},
					"PDS_EmpoStartDate": {
						"modelConfig": {
							"path": "PDS.EmpoStartDate"
						}
					},
					"PDS_EmpoStatus": {
						"modelConfig": {
							"path": "PDS.EmpoStatus"
						}
					},
					"PDS_EmpoStage": {
						"modelConfig": {
							"path": "PDS.EmpoStage"
						}
					},
					"PDS_EmpoProgressPercent": {
						"modelConfig": {
							"path": "PDS.EmpoProgressPercent"
						}
					},
					"PDS_EmpoTaskOverdueCount": {
						"modelConfig": {
							"path": "PDS.EmpoTaskOverdueCount"
						}
					},
					"PDS_EmpoHiringManager": {
						"modelConfig": {
							"path": "PDS.EmpoHiringManager"
						}
					},
					"PDS_EmpoPhase": {
						"modelConfig": {
							"path": "PDS.EmpoPhase"
						}
					},
					"PDS_EmpoOfferStatus": {
						"modelConfig": {
							"path": "PDS.EmpoOfferStatus"
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
					"entitySchemaName": "EmpoOnboarding"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});