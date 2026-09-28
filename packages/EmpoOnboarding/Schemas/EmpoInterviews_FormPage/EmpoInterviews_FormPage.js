define("EmpoInterviews_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
	{
		"operation": "insert",
		"name": "EmpoName",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Input",
			"label": "$Resources.Strings.EmpoName",
			"control": "$EmpoName",
			"labelPosition": "auto"
		},
		"parentName": "SideAreaProfileContainer",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "merge",
		"name": "AttachmentList",
		"values": {
			"type": "crt.FileList",
			"masterRecordColumnValue": "$Id",
			"recordColumnName": "RecordId",
			"layoutConfig": {
				"colSpan": 2,
				"column": 1,
				"row": 1,
				"rowSpan": 6
			},
			"items": "$AttachmentList",
			"primaryColumnName": "AttachmentListDS_Id",
			"columns": [
				{
					"id": "52a810be-7c87-4e02-94f4-71ffa82fa8b8",
					"code": "AttachmentListDS_Name",
					"caption": "#ResourceString(AttachmentListDS_Name)#",
					"dataValueType": 28,
					"width": 200
				}
			],
			"viewType": "gallery",
			"tileSize": "small"
		},
		"parentName": "AttachmentsTabContainer",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "merge",
		"name": "Feed",
		"values": {
			"type": "crt.Feed",
			"feedType": "Record",
			"primaryColumnValue": "$Id",
			"cardState": "$CardState",
			"dataSourceName": "PDS",
			"entitySchemaName": "EmpoInterview"
		},
		"parentName": "FeedTabContainer",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "F_EmpoApplication",
		"values": {
			"type": "crt.ComboBox",
			"label": "$Resources.Strings.PDS_EmpoApplication",
			"control": "$PDS_EmpoApplication",
			"isAddAllowed": true,
			"showValueAsLink": true,
			"labelPosition": "auto",
			"controlActions": [],
			"listActions": [],
			"tooltip": "",
			"ariaLabel": "",
			"required": true,
			"layoutConfig": {
				"column": 1,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			}
		},
		"parentName": "SideAreaProfileContainer",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "F_EmpoCandidate",
		"values": {
			"type": "crt.ComboBox",
			"label": "$Resources.Strings.PDS_EmpoCandidate",
			"control": "$PDS_EmpoCandidate",
			"isAddAllowed": true,
			"showValueAsLink": true,
			"labelPosition": "auto",
			"controlActions": [],
			"listActions": [],
			"tooltip": "",
			"ariaLabel": "",
			"layoutConfig": {
				"column": 1,
				"row": 3,
				"colSpan": 1,
				"rowSpan": 1
			}
		},
		"parentName": "SideAreaProfileContainer",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "F_EmpoInterviewType",
		"values": {
			"type": "crt.ComboBox",
			"label": "$Resources.Strings.PDS_EmpoInterviewType",
			"control": "$PDS_EmpoInterviewType",
			"isAddAllowed": true,
			"showValueAsLink": true,
			"labelPosition": "auto",
			"controlActions": [],
			"listActions": [],
			"tooltip": "",
			"ariaLabel": "",
			"layoutConfig": {
				"column": 1,
				"row": 4,
				"colSpan": 1,
				"rowSpan": 1
			}
		},
		"parentName": "SideAreaProfileContainer",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "F_EmpoStatus",
		"values": {
			"type": "crt.ComboBox",
			"label": "$Resources.Strings.PDS_EmpoStatus",
			"control": "$PDS_EmpoStatus",
			"isAddAllowed": true,
			"showValueAsLink": true,
			"labelPosition": "auto",
			"controlActions": [],
			"listActions": [],
			"tooltip": "",
			"ariaLabel": "",
			"layoutConfig": {
				"column": 1,
				"row": 5,
				"colSpan": 1,
				"rowSpan": 1
			}
		},
		"parentName": "SideAreaProfileContainer",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "F_EmpoStartDate",
		"values": {
			"type": "crt.DateTimePicker",
			"label": "$Resources.Strings.PDS_EmpoStartDate",
			"control": "$PDS_EmpoStartDate",
			"labelPosition": "auto",
			"placeholder": "",
			"tooltip": "",
			"pickerType": "datetime",
			"required": true,
			"layoutConfig": {
				"column": 1,
				"row": 6,
				"colSpan": 1,
				"rowSpan": 1
			}
		},
		"parentName": "SideAreaProfileContainer",
		"propertyName": "items",
		"index": 5
	},
	{
		"operation": "insert",
		"name": "F_EmpoEndDate",
		"values": {
			"type": "crt.DateTimePicker",
			"label": "$Resources.Strings.PDS_EmpoEndDate",
			"control": "$PDS_EmpoEndDate",
			"labelPosition": "auto",
			"placeholder": "",
			"tooltip": "",
			"pickerType": "datetime",
			"layoutConfig": {
				"column": 1,
				"row": 7,
				"colSpan": 1,
				"rowSpan": 1
			}
		},
		"parentName": "SideAreaProfileContainer",
		"propertyName": "items",
		"index": 6
	},
	{
		"operation": "insert",
		"name": "F_EmpoInterviewer",
		"values": {
			"type": "crt.ComboBox",
			"label": "$Resources.Strings.PDS_EmpoInterviewer",
			"control": "$PDS_EmpoInterviewer",
			"isAddAllowed": true,
			"showValueAsLink": true,
			"labelPosition": "auto",
			"controlActions": [],
			"listActions": [],
			"tooltip": "",
			"ariaLabel": "",
			"layoutConfig": {
				"column": 1,
				"row": 8,
				"colSpan": 1,
				"rowSpan": 1
			}
		},
		"parentName": "SideAreaProfileContainer",
		"propertyName": "items",
		"index": 7
	},
	{
		"operation": "merge",
		"name": "GeneralInfoTab",
		"values": {
			"caption": "#ResourceString(GeneralInfoTab_caption)#"
		}
	},
	{
		"operation": "insert",
		"name": "Grid_Details",
		"values": {
			"type": "crt.GridContainer",
			"items": [],
			"rows": "minmax(32px, max-content)",
			"columns": [
				"minmax(32px, 1fr)",
				"minmax(32px, 1fr)"
			],
			"gap": {
				"columnGap": "large",
				"rowGap": 0
			}
		},
		"parentName": "GeneralInfoTab",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "F_EmpoRound",
		"values": {
			"type": "crt.NumberInput",
			"label": "$Resources.Strings.PDS_EmpoRound",
			"control": "$PDS_EmpoRound",
			"labelPosition": "auto",
			"placeholder": "",
			"tooltip": "",
			"layoutConfig": {
				"column": 1,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			}
		},
		"parentName": "Grid_Details",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "F_EmpoLocation",
		"values": {
			"type": "crt.Input",
			"label": "$Resources.Strings.PDS_EmpoLocation",
			"control": "$PDS_EmpoLocation",
			"labelPosition": "auto",
			"placeholder": "",
			"tooltip": "",
			"multiline": false,
			"layoutConfig": {
				"column": 2,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			}
		},
		"parentName": "Grid_Details",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "F_EmpoResult",
		"values": {
			"type": "crt.ComboBox",
			"label": "$Resources.Strings.PDS_EmpoResult",
			"control": "$PDS_EmpoResult",
			"isAddAllowed": true,
			"showValueAsLink": true,
			"labelPosition": "auto",
			"controlActions": [],
			"listActions": [],
			"tooltip": "",
			"ariaLabel": "",
			"layoutConfig": {
				"column": 1,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			}
		},
		"parentName": "Grid_Details",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "F_EmpoRating",
		"values": {
			"type": "crt.NumberInput",
			"label": "$Resources.Strings.PDS_EmpoRating",
			"control": "$PDS_EmpoRating",
			"labelPosition": "auto",
			"placeholder": "",
			"tooltip": "",
			"layoutConfig": {
				"column": 2,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			}
		},
		"parentName": "Grid_Details",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "F_EmpoFeedback",
		"values": {
			"type": "crt.Input",
			"label": "$Resources.Strings.PDS_EmpoFeedback",
			"control": "$PDS_EmpoFeedback",
			"labelPosition": "auto",
			"placeholder": "",
			"tooltip": "",
			"multiline": true,
			"layoutConfig": {
				"column": 1,
				"row": 3,
				"colSpan": 2,
				"rowSpan": 1
			}
		},
		"parentName": "Grid_Details",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "F_EmpoActivity",
		"values": {
			"type": "crt.ComboBox",
			"label": "$Resources.Strings.PDS_EmpoActivity",
			"control": "$PDS_EmpoActivity",
			"isAddAllowed": true,
			"showValueAsLink": true,
			"labelPosition": "auto",
			"controlActions": [],
			"listActions": [],
			"tooltip": "",
			"ariaLabel": "",
			"readonly": true,
			"layoutConfig": {
				"column": 1,
				"row": 4,
				"colSpan": 1,
				"rowSpan": 1
			}
		},
		"parentName": "Grid_Details",
		"propertyName": "items",
		"index": 5
	}
]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
	"attributes": {
		"EmpoName": {
			"modelConfig": {
				"path": "PDS.EmpoName"
			}
		},
		"Id": {
			"modelConfig": {
				"path": "PDS.Id"
			}
		},
		"PDS_EmpoApplication": {
			"modelConfig": {
				"path": "PDS.EmpoApplication"
			}
		},
		"PDS_EmpoCandidate": {
			"modelConfig": {
				"path": "PDS.EmpoCandidate"
			}
		},
		"PDS_EmpoInterviewType": {
			"modelConfig": {
				"path": "PDS.EmpoInterviewType"
			}
		},
		"PDS_EmpoStatus": {
			"modelConfig": {
				"path": "PDS.EmpoStatus"
			}
		},
		"PDS_EmpoStartDate": {
			"modelConfig": {
				"path": "PDS.EmpoStartDate"
			}
		},
		"PDS_EmpoEndDate": {
			"modelConfig": {
				"path": "PDS.EmpoEndDate"
			}
		},
		"PDS_EmpoInterviewer": {
			"modelConfig": {
				"path": "PDS.EmpoInterviewer"
			}
		},
		"PDS_EmpoRound": {
			"modelConfig": {
				"path": "PDS.EmpoRound"
			}
		},
		"PDS_EmpoLocation": {
			"modelConfig": {
				"path": "PDS.EmpoLocation"
			}
		},
		"PDS_EmpoResult": {
			"modelConfig": {
				"path": "PDS.EmpoResult"
			}
		},
		"PDS_EmpoRating": {
			"modelConfig": {
				"path": "PDS.EmpoRating"
			}
		},
		"PDS_EmpoFeedback": {
			"modelConfig": {
				"path": "PDS.EmpoFeedback"
			}
		},
		"PDS_EmpoActivity": {
			"modelConfig": {
				"path": "PDS.EmpoActivity"
			}
		}
	}
}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
	"dataSources": {
		"PDS": {
			"type": "crt.EntityDataSource",
			"config": {
				"entitySchemaName": "EmpoInterview"
			},
			"scope": "page"
		},
		"AttachmentListDS": {
			"type": "crt.EntityDataSource",
			"scope": "viewElement",
			"config": {
				"entitySchemaName": "SysFile",
				"attributes": {
					"Name": {
						"path": "Name"
					}
				}
			}
		}
	},
	"primaryDataSourceName": "PDS"
}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
