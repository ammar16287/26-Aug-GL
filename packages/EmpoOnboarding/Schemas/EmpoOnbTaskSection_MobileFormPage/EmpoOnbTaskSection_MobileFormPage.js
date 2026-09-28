{
	"viewConfigDiff": [
		{
			"operation": "insert",
			"name": "EmpoName",
			"values": {
				"type": "crt.Input",
				"label": "$Resources.Strings.EmpoName",
				"control": "$EmpoName",
				"placeholder": "",
				"readonly": false,
				"multiline": false,
				"labelPosition": "above"
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "merge",
			"name": "Feed",
			"values": {
				"dataSourceName": "PDS",
				"entitySchemaName": "EmpoOnbTask"
			}
		}
	],
	"viewModelConfigDiff": [
		{
			"operation": "merge",
			"path": [
				"attributes"
			],
			"values": {
				"EmpoName": {
					"modelConfig": {
						"path": "PDS.EmpoName"
					}
				},
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				}
			}
		}
	],
	"modelConfigDiff": [
		{
			"operation": "merge",
			"path": [],
			"values": {
				"dataSources": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "EmpoOnbTask",
							"loadParameters": {
								"options": {
									"pagingConfig": {
										"rowCount": 1,
										"rowsOffset": -1
									},
									"sortingConfig": {
										"columns": []
									}
								}
							},
							"allowCopyingRecords": false
						}
					}
				},
				"primaryDataSourceName": "PDS"
			}
		}
	]
}