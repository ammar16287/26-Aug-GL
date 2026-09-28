 {
	"viewConfigDiff": [
		{
			"operation": "merge",
			"name": "FolderTreeActions",
			"values": {
				"rootSchemaName": "EmpoRequisition"
			}
		},
		{
			"operation": "merge",
			"name": "FolderTreeActions",
			"values": {
				"caption": "Folders"
			}
		},
		{
			"operation": "merge",
			"name": "ListItem",
			"values": {
				"title": "$PDS_EmpoName",
				"body": [
					{
						"value": "$PDS_CreatedOn"
					},
					{
						"value": "$PDS_CreatedBy"
					}
				]
			}
		}
	],
	"viewModelConfigDiff": [
		{
			"operation": "merge",
			"path": ["attributes", "Items", "viewModelConfig", "attributes"],
			"values": {
				"PDS_Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"PDS_EmpoName": {
					"modelConfig": {
						"path": "PDS.EmpoName"
					}
				},
				"PDS_CreatedOn": {
					"modelConfig": {
						"path": "PDS.CreatedOn"
					}
				},
				"PDS_CreatedBy": {
					"modelConfig": {
						"path": "PDS.CreatedBy"
					}
				}
			}
		}
	],
	"modelConfigDiff": [
		{
			"operation": "merge",
			"path": ["dataSources", "PDS", "config"],
			"values": {
				"entitySchemaName": "EmpoRequisition"
			}
		}
	]
}
 