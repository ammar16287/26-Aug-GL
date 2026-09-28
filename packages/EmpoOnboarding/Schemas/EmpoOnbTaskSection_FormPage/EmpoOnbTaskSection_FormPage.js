define("EmpoOnbTaskSection_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
							"id": "398c9408-17be-4974-9e89-fb88e3fc58b7",
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
					"entitySchemaName": "EmpoOnbTask"
				},
				"parentName": "FeedTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PanelTask",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "Task details",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridTask",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-wrap": "anywhere"
					},
					"items": []
				},
				"parentName": "PanelTask",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmpoOnboarding",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "Onboarding",
					"labelPosition": "auto",
					"control": "$PDS_EmpoOnboarding",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridTask",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmpoDepartment",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "Responsible department",
					"labelPosition": "auto",
					"control": "$PDS_EmpoDepartment",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridTask",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EmpoStage",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "Stage",
					"labelPosition": "auto",
					"control": "$PDS_EmpoStage",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridTask",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "EmpoPriority",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "Priority",
					"labelPosition": "auto",
					"control": "$PDS_EmpoPriority",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridTask",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "EmpoSequence",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "Sequence",
					"labelPosition": "auto",
					"control": "$PDS_EmpoSequence"
				},
				"parentName": "GridTask",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "EmpoIsMandatory",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "Mandatory",
					"labelPosition": "auto",
					"control": "$PDS_EmpoIsMandatory"
				},
				"parentName": "GridTask",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "EmpoDueDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "Due date",
					"labelPosition": "auto",
					"control": "$PDS_EmpoDueDate",
					"pickerType": "date"
				},
				"parentName": "GridTask",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "EmpoTemplate",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "Template",
					"labelPosition": "auto",
					"control": "$PDS_EmpoTemplate",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": true
				},
				"parentName": "GridTask",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "PanelAssign",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "Assignment",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridAssign",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-wrap": "anywhere"
					},
					"items": []
				},
				"parentName": "PanelAssign",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmpoAssignee",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "Assignee",
					"labelPosition": "auto",
					"control": "$PDS_EmpoAssignee",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridAssign",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmpoAssigneeRole",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "Assignee role",
					"labelPosition": "auto",
					"control": "$PDS_EmpoAssigneeRole",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridAssign",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PanelStatus",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "Status and completion",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridStatus",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-wrap": "anywhere"
					},
					"items": []
				},
				"parentName": "PanelStatus",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmpoStatus",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "Status",
					"labelPosition": "auto",
					"control": "$PDS_EmpoStatus",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridStatus",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmpoCompletedOn",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "Completed on",
					"labelPosition": "auto",
					"control": "$PDS_EmpoCompletedOn",
					"pickerType": "date",
					"readonly": true
				},
				"parentName": "GridStatus",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EmpoCompletedBy",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "Completed by",
					"labelPosition": "auto",
					"control": "$PDS_EmpoCompletedBy",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": true
				},
				"parentName": "GridStatus",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "EmpoBlockedReason",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 3
					},
					"type": "crt.Input",
					"label": "Blocked reason",
					"labelPosition": "auto",
					"control": "$PDS_EmpoBlockedReason",
					"multiline": true
				},
				"parentName": "GridStatus",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PanelNotes",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "Description and result",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridNotes",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-wrap": "anywhere"
					},
					"items": []
				},
				"parentName": "PanelNotes",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmpoDescription",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 3
					},
					"type": "crt.Input",
					"label": "Description",
					"labelPosition": "auto",
					"control": "$PDS_EmpoDescription",
					"multiline": true
				},
				"parentName": "GridNotes",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmpoResultComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 3
					},
					"type": "crt.Input",
					"label": "Result comment",
					"labelPosition": "auto",
					"control": "$PDS_EmpoResultComment",
					"multiline": true
				},
				"parentName": "GridNotes",
				"propertyName": "items",
				"index": 1
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
				"PDS_EmpoOnboarding": {
					"modelConfig": {
						"path": "PDS.EmpoOnboarding"
					},
					"validators": {
						"required": {
							"type": "crt.Required"
						}
					}
				},
				"PDS_EmpoDepartment": {
					"modelConfig": {
						"path": "PDS.EmpoDepartment"
					},
					"validators": {
						"required": {
							"type": "crt.Required"
						}
					}
				},
				"PDS_EmpoStage": {
					"modelConfig": {
						"path": "PDS.EmpoStage"
					}
				},
				"PDS_EmpoPriority": {
					"modelConfig": {
						"path": "PDS.EmpoPriority"
					}
				},
				"PDS_EmpoSequence": {
					"modelConfig": {
						"path": "PDS.EmpoSequence"
					}
				},
				"PDS_EmpoIsMandatory": {
					"modelConfig": {
						"path": "PDS.EmpoIsMandatory"
					}
				},
				"PDS_EmpoDueDate": {
					"modelConfig": {
						"path": "PDS.EmpoDueDate"
					}
				},
				"PDS_EmpoTemplate": {
					"modelConfig": {
						"path": "PDS.EmpoTemplate"
					}
				},
				"PDS_EmpoAssignee": {
					"modelConfig": {
						"path": "PDS.EmpoAssignee"
					}
				},
				"PDS_EmpoAssigneeRole": {
					"modelConfig": {
						"path": "PDS.EmpoAssigneeRole"
					}
				},
				"PDS_EmpoStatus": {
					"modelConfig": {
						"path": "PDS.EmpoStatus"
					},
					"validators": {
						"required": {
							"type": "crt.Required"
						}
					}
				},
				"PDS_EmpoCompletedOn": {
					"modelConfig": {
						"path": "PDS.EmpoCompletedOn"
					}
				},
				"PDS_EmpoCompletedBy": {
					"modelConfig": {
						"path": "PDS.EmpoCompletedBy"
					}
				},
				"PDS_EmpoBlockedReason": {
					"modelConfig": {
						"path": "PDS.EmpoBlockedReason"
					}
				},
				"PDS_EmpoDescription": {
					"modelConfig": {
						"path": "PDS.EmpoDescription"
					}
				},
				"PDS_EmpoResultComment": {
					"modelConfig": {
						"path": "PDS.EmpoResultComment"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "EmpoOnbTask"
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
