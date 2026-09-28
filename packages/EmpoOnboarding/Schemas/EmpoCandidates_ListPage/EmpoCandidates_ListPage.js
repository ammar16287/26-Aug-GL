define("EmpoCandidates_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
	{
		"operation": "merge",
		"name": "MenuItem_ImportFromExcel",
		"values": {
			"clicked": {
				"request": "crt.ImportDataRequest",
				"params": {
					"entitySchemaName": "EmpoCandidate"
				}
			}
		}
	},
	{
		"operation": "merge",
		"name": "FolderTree",
		"values": {
			"sourceSchemaName": "FolderTree",
			"rootSchemaName": "EmpoCandidate"
		}
	},
	{
		"operation": "merge",
		"name": "DataTable",
		"values": {
			"columns": [
				{
					"id": "76b0a454-7b63-4665-bda7-c8fb6faf8782",
					"code": "PDS_EmpoName",
					"caption": "Full name",
					"dataValueType": 28,
					"width": 240
				},
				{
					"id": "9fb916e9-f2d0-44f1-aa31-ccb8e159686e",
					"code": "PDS_EmpoEmail",
					"caption": "Email",
					"dataValueType": 45,
					"width": 140
				},
				{
					"id": "a30d1f85-6d8c-46c0-8c98-906ef7688f19",
					"code": "PDS_EmpoPhone",
					"caption": "Phone",
					"dataValueType": 42,
					"width": 140
				},
				{
					"id": "ecc77e85-8bf3-4a13-8715-077621e60fd0",
					"code": "PDS_EmpoCurrentPosition",
					"caption": "Current position",
					"dataValueType": 28,
					"width": 140
				},
				{
					"id": "acb40789-ef6d-4f96-b828-f5eb24859988",
					"code": "PDS_EmpoYearsExperience",
					"caption": "Years of experience",
					"dataValueType": 4,
					"width": 140
				},
				{
					"id": "b1583fb5-3cdc-443d-9401-78f1afb94c80",
					"code": "PDS_EmpoLocation",
					"caption": "Location",
					"dataValueType": 28,
					"width": 140
				},
				{
					"id": "44d650ab-db53-4345-8481-60607655a8eb",
					"code": "PDS_EmpoSource",
					"caption": "Source",
					"dataValueType": 10,
					"width": 180
				},
				{
					"id": "a860cd6a-34fb-4753-9eb4-b90ff6896790",
					"code": "PDS_CreatedOn",
					"caption": "Created on",
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
				"entitySchemaName": "EmpoCandidate",
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
			"PDS_EmpoEmail": {
				"modelConfig": {
					"path": "PDS.EmpoEmail"
				}
			},
			"PDS_EmpoPhone": {
				"modelConfig": {
					"path": "PDS.EmpoPhone"
				}
			},
			"PDS_EmpoCurrentPosition": {
				"modelConfig": {
					"path": "PDS.EmpoCurrentPosition"
				}
			},
			"PDS_EmpoYearsExperience": {
				"modelConfig": {
					"path": "PDS.EmpoYearsExperience"
				}
			},
			"PDS_EmpoLocation": {
				"modelConfig": {
					"path": "PDS.EmpoLocation"
				}
			},
			"PDS_EmpoSource": {
				"modelConfig": {
					"path": "PDS.EmpoSource"
				}
			},
			"PDS_CreatedOn": {
				"modelConfig": {
					"path": "PDS.CreatedOn"
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
					"entitySchemaName": "EmpoCandidate"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
