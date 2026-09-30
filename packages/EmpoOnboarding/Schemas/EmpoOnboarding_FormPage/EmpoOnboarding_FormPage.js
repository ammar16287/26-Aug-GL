define("EmpoOnboarding_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
	{
		"operation": "merge",
		"name": "CancelButton",
		"values": {
			"color": "default",
			"size": "large",
			"iconPosition": "only-text"
		}
	},
	{
		"operation": "merge",
		"name": "Tabs",
		"values": {
			"styleType": "default",
			"mode": "tab",
			"bodyBackgroundColor": "primary-contrast-500",
			"selectedTabTitleColor": "auto",
			"tabTitleColor": "auto",
			"underlineSelectedTabColor": "auto",
			"headerBackgroundColor": "auto",
			"allowToggleClose": true
		}
	},
	{
		"operation": "merge",
		"name": "GeneralInfoTab",
		"values": {
			"caption": "Candidate",
			"iconPosition": "only-text"
		}
	},
	{
		"operation": "merge",
		"name": "GeneralInfoTabContainer",
		"values": {
			"gap": {
				"columnGap": "large",
				"rowGap": "none"
			},
			"visible": true,
			"padding": {
				"top": "none",
				"right": "none",
				"bottom": "none",
				"left": "none"
			},
			"color": "transparent",
			"borderRadius": "none",
			"alignItems": "stretch"
		}
	},
	{
		"operation": "merge",
		"name": "Feed",
		"values": {
			"dataSourceName": "PDS",
			"entitySchemaName": "EmpoOnboarding"
		}
	},
	{
		"operation": "merge",
		"name": "AttachmentList",
		"values": {
			"columns": [
				{
					"id": "d616d238-4a7c-49d2-b917-0d5d0d718fed",
					"code": "AttachmentListDS_Name",
					"caption": "#ResourceString(AttachmentListDS_Name)#",
					"dataValueType": 28,
					"width": 200
				}
			]
		}
	},
	{
		"operation": "insert",
		"name": "ComboBox_1sb0l89",
		"values": {
			"layoutConfig": {
				"column": 1,
				"colSpan": 1,
				"row": 1,
				"rowSpan": 1
			},
			"type": "crt.ComboBox",
			"label": "$Resources.Strings.PDS_EmpoCompany_f0s9nz1",
			"ariaLabel": "",
			"isAddAllowed": true,
			"showValueAsLink": true,
			"labelPosition": "auto",
			"controlActions": [],
			"listActions": [],
			"tooltip": "",
			"control": "$PDS_EmpoCompany_f0s9nz1",
			"visible": true,
			"readonly": false,
			"placeholder": "",
			"valueDetails": null
		},
		"parentName": "SideAreaProfileContainer",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "addRecord_23xlemc",
		"values": {
			"code": "addRecord",
			"type": "crt.ComboboxSearchTextAction",
			"icon": "combobox-add-new",
			"caption": "#ResourceString(addRecord_23xlemc_caption)#",
			"clicked": {
				"request": "crt.CreateRecordFromLookupRequest",
				"params": {}
			}
		},
		"parentName": "ComboBox_1sb0l89",
		"propertyName": "listActions",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "EmpoName",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 2,
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
		"index": 1
	},
	{
		"operation": "insert",
		"name": "ImageInput_0a9ydnr",
		"values": {
			"layoutConfig": {
				"column": 1,
				"colSpan": 1,
				"row": 3,
				"rowSpan": 1
			},
			"type": "crt.ImageInput",
			"label": "$Resources.Strings.PDS_EmpoPhoto_rt5edbd",
			"value": "$PDS_EmpoPhoto_rt5edbd",
			"readonly": false,
			"placeholder": "",
			"labelPosition": "auto",
			"size": "large",
			"borderRadius": "large",
			"positioning": "cover",
			"visible": true,
			"tooltip": ""
		},
		"parentName": "SideAreaProfileContainer",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "SideStatus",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 4,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.ComboBox",
			"label": "Onboarding status",
			"labelPosition": "auto",
			"control": "$PDS_EmpoStatus",
			"listActions": [],
			"showValueAsLink": true,
			"controlActions": []
		},
		"parentName": "SideAreaProfileContainer",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "SidePhase",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 5,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.ComboBox",
			"label": "Onboarding phase",
			"labelPosition": "auto",
			"control": "$PDS_EmpoPhase",
			"listActions": [],
			"showValueAsLink": true,
			"controlActions": []
		},
		"parentName": "SideAreaProfileContainer",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "SideJoiningDate",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 6,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.DateTimePicker",
			"label": "Joining date",
			"labelPosition": "auto",
			"control": "$PDS_EmpoStartDate",
			"pickerType": "date"
		},
		"parentName": "SideAreaProfileContainer",
		"propertyName": "items",
		"index": 5
	},
	{
		"operation": "insert",
		"name": "PanelEmployee",
		"values": {
			"type": "crt.ExpansionPanel",
			"tools": [],
			"items": [],
			"title": "Employee details",
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
			"alignItems": "stretch",
			"layoutConfig": {
				"column": 1,
				"colSpan": 1,
				"row": 1,
				"rowSpan": 1
			}
		},
		"parentName": "GeneralInfoTabContainer",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "GridEmployee",
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
		"parentName": "PanelEmployee",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "EmpoEmployee",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.ComboBox",
			"label": "Employee",
			"labelPosition": "auto",
			"control": "$PDS_EmpoEmployee",
			"listActions": [],
			"showValueAsLink": true,
			"controlActions": []
		},
		"parentName": "GridEmployee",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "EmpoJobTitle",
		"values": {
			"layoutConfig": {
				"column": 2,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Input",
			"label": "Job title",
			"labelPosition": "auto",
			"control": "$PDS_EmpoJobTitle"
		},
		"parentName": "GridEmployee",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "EmpoDepartment",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.ComboBox",
			"label": "Department",
			"labelPosition": "auto",
			"control": "$PDS_EmpoDepartment",
			"listActions": [],
			"showValueAsLink": true,
			"controlActions": []
		},
		"parentName": "GridEmployee",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "EmpoLocation",
		"values": {
			"layoutConfig": {
				"column": 2,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Input",
			"label": "Location",
			"labelPosition": "auto",
			"control": "$PDS_EmpoLocation"
		},
		"parentName": "GridEmployee",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "EmpoStartDate",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 3,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.DateTimePicker",
			"label": "Start date",
			"labelPosition": "auto",
			"control": "$PDS_EmpoStartDate",
			"pickerType": "date"
		},
		"parentName": "GridEmployee",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "EmpoWorkPhone",
		"values": {
			"layoutConfig": {
				"column": 2,
				"row": 3,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.PhoneInput",
			"label": "Work phone",
			"labelPosition": "auto",
			"control": "$PDS_EmpoWorkPhone"
		},
		"parentName": "GridEmployee",
		"propertyName": "items",
		"index": 5
	},
	{
		"operation": "insert",
		"name": "Input_hm46gvf",
		"values": {
			"layoutConfig": {
				"column": 1,
				"colSpan": 1,
				"row": 4,
				"rowSpan": 1
			},
			"type": "crt.Input",
			"label": "$Resources.Strings.PDS_EmpoRole_hss5ige",
			"control": "$PDS_EmpoRole_hss5ige",
			"placeholder": "",
			"tooltip": "",
			"readonly": false,
			"multiline": false,
			"labelPosition": "auto"
		},
		"parentName": "GridEmployee",
		"propertyName": "items",
		"index": 6
	},
	{
		"operation": "insert",
		"name": "ComboBox_l60wl56",
		"values": {
			"layoutConfig": {
				"column": 2,
				"colSpan": 1,
				"row": 4,
				"rowSpan": 1
			},
			"type": "crt.ComboBox",
			"label": "$Resources.Strings.PDS_EmpoTeam_bxr09df",
			"ariaLabel": "",
			"isAddAllowed": true,
			"showValueAsLink": true,
			"labelPosition": "auto",
			"controlActions": [],
			"listActions": [],
			"tooltip": "",
			"control": "$PDS_EmpoTeam_bxr09df",
			"visible": true,
			"readonly": false,
			"placeholder": "",
			"valueDetails": null
		},
		"parentName": "GridEmployee",
		"propertyName": "items",
		"index": 7
	},
	{
		"operation": "insert",
		"name": "addRecord_z0ti6cs",
		"values": {
			"code": "addRecord",
			"type": "crt.ComboboxSearchTextAction",
			"icon": "combobox-add-new",
			"caption": "#ResourceString(addRecord_z0ti6cs_caption)#",
			"clicked": {
				"request": "crt.CreateRecordFromLookupRequest",
				"params": {}
			}
		},
		"parentName": "ComboBox_l60wl56",
		"propertyName": "listActions",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "EmpoWorkEmail",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 5,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.EmailInput",
			"label": "Work email",
			"labelPosition": "auto",
			"control": "$PDS_EmpoWorkEmail"
		},
		"parentName": "GridEmployee",
		"propertyName": "items",
		"index": 8
	},
	{
		"operation": "insert",
		"name": "ComboBox_sd2cjv9",
		"values": {
			"layoutConfig": {
				"column": 2,
				"colSpan": 1,
				"row": 5,
				"rowSpan": 1
			},
			"type": "crt.ComboBox",
			"label": "$Resources.Strings.PDS_EmpoLineManager_m1xx8pz",
			"ariaLabel": "",
			"isAddAllowed": true,
			"showValueAsLink": true,
			"labelPosition": "auto",
			"controlActions": [],
			"listActions": [],
			"tooltip": "",
			"control": "$PDS_EmpoLineManager_m1xx8pz",
			"visible": true,
			"readonly": false,
			"placeholder": "",
			"valueDetails": null
		},
		"parentName": "GridEmployee",
		"propertyName": "items",
		"index": 9
	},
	{
		"operation": "insert",
		"name": "addRecord_2f2x0we",
		"values": {
			"code": "addRecord",
			"type": "crt.ComboboxSearchTextAction",
			"icon": "combobox-add-new",
			"caption": "#ResourceString(addRecord_2f2x0we_caption)#",
			"clicked": {
				"request": "crt.CreateRecordFromLookupRequest",
				"params": {}
			}
		},
		"parentName": "ComboBox_sd2cjv9",
		"propertyName": "listActions",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "PanelTeam",
		"values": {
			"type": "crt.ExpansionPanel",
			"tools": [],
			"items": [],
			"title": "Onboarding team",
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
			"alignItems": "stretch",
			"layoutConfig": {
				"column": 1,
				"colSpan": 1,
				"row": 2,
				"rowSpan": 1
			}
		},
		"parentName": "GeneralInfoTabContainer",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "GridTeam",
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
		"parentName": "PanelTeam",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "EmpoHiringManager",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.ComboBox",
			"label": "Hiring manager",
			"labelPosition": "auto",
			"control": "$PDS_EmpoHiringManager",
			"listActions": [],
			"showValueAsLink": true,
			"controlActions": []
		},
		"parentName": "GridTeam",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "EmpoHrPartner",
		"values": {
			"layoutConfig": {
				"column": 2,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.ComboBox",
			"label": "HR partner",
			"labelPosition": "auto",
			"control": "$PDS_EmpoHrPartner",
			"listActions": [],
			"showValueAsLink": true,
			"controlActions": []
		},
		"parentName": "GridTeam",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "EmpoBuddy",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.ComboBox",
			"label": "Buddy",
			"labelPosition": "auto",
			"control": "$PDS_EmpoBuddy",
			"listActions": [],
			"showValueAsLink": true,
			"controlActions": []
		},
		"parentName": "GridTeam",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "PanelProgress",
		"values": {
			"type": "crt.ExpansionPanel",
			"tools": [],
			"items": [],
			"title": "Status and progress",
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
			"alignItems": "stretch",
			"layoutConfig": {
				"column": 1,
				"colSpan": 1,
				"row": 3,
				"rowSpan": 1
			}
		},
		"parentName": "GeneralInfoTabContainer",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "GridProgress",
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
		"parentName": "PanelProgress",
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
		"parentName": "GridProgress",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "EmpoStage",
		"values": {
			"layoutConfig": {
				"column": 2,
				"row": 1,
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
		"parentName": "GridProgress",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "EmpoTasksGenerated",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Checkbox",
			"label": "Tasks generated",
			"labelPosition": "auto",
			"control": "$PDS_EmpoTasksGenerated"
		},
		"parentName": "GridProgress",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "EmpoCompletedOn",
		"values": {
			"layoutConfig": {
				"column": 2,
				"row": 2,
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
		"parentName": "GridProgress",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "TaskChartBlock",
		"values": {
			"type": "crt.FlexContainer",
			"direction": "column",
			"items": [],
			"fitContent": true,
			"visible": true,
			"color": "transparent",
			"borderRadius": "none",
			"padding": {
				"top": "small",
				"right": "none",
				"bottom": "small",
				"left": "none"
			},
			"gap": "small",
			"alignItems": "stretch",
			"justifyContent": "start",
			"wrap": "nowrap",
			"layoutConfig": {
				"column": 1,
				"row": 3,
				"colSpan": 2,
				"rowSpan": 1
			}
		},
		"parentName": "GridProgress",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "TaskChartTitle",
		"values": {
			"type": "crt.Label",
			"caption": "Tasks",
			"labelType": "caption",
			"labelThickness": "default",
			"labelEllipsis": false,
			"labelColor": "#757575",
			"labelBackgroundColor": "transparent",
			"labelTextAlign": "start",
			"visible": true
		},
		"parentName": "TaskChartBlock",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "TaskChartRow",
		"values": {
			"type": "crt.FlexContainer",
			"direction": "row",
			"items": [],
			"fitContent": true,
			"visible": true,
			"color": "transparent",
			"borderRadius": "none",
			"padding": {
				"top": "none",
				"right": "none",
				"bottom": "none",
				"left": "none"
			},
			"gap": "large",
			"alignItems": "center",
			"justifyContent": "start",
			"wrap": "nowrap"
		},
		"parentName": "TaskChartBlock",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "TaskDonut",
		"values": {
			"type": "crt.FlexContainer",
			"direction": "row",
			"items": [],
			"fitContent": true,
			"visible": true,
			"borderRadius": "none",
			"padding": {
				"top": "none",
				"right": "none",
				"bottom": "none",
				"left": "none"
			},
			"gap": "small",
			"alignItems": "center",
			"justifyContent": "center",
			"wrap": "nowrap",
			"styles": "$TaskDonutStyle"
		},
		"parentName": "TaskChartRow",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "TaskDonutHole",
		"values": {
			"type": "crt.FlexContainer",
			"direction": "column",
			"items": [],
			"fitContent": true,
			"visible": true,
			"borderRadius": "none",
			"padding": {
				"top": "none",
				"right": "none",
				"bottom": "none",
				"left": "none"
			},
			"gap": "none",
			"alignItems": "center",
			"justifyContent": "center",
			"wrap": "nowrap",
			"styles": {
				"width": "76px",
				"height": "76px",
				"min-width": "76px",
				"border-radius": "50%",
				"background-color": "#FFFFFF"
			}
		},
		"parentName": "TaskDonut",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "TaskDonutTotal",
		"values": {
			"type": "crt.Label",
			"caption": "$TaskDonutTotalCaption",
			"labelType": "headline-2",
			"labelThickness": "bold",
			"labelEllipsis": false,
			"labelColor": "auto",
			"labelBackgroundColor": "transparent",
			"labelTextAlign": "center",
			"visible": true
		},
		"parentName": "TaskDonutHole",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "TaskDonutTotalText",
		"values": {
			"type": "crt.Label",
			"caption": "Total tasks",
			"labelType": "caption",
			"labelThickness": "default",
			"labelEllipsis": false,
			"labelColor": "#757575",
			"labelBackgroundColor": "transparent",
			"labelTextAlign": "center",
			"visible": true
		},
		"parentName": "TaskDonutHole",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "TaskLegend",
		"values": {
			"type": "crt.FlexContainer",
			"direction": "column",
			"items": [],
			"fitContent": true,
			"visible": true,
			"borderRadius": "none",
			"padding": {
				"top": "none",
				"right": "none",
				"bottom": "none",
				"left": "none"
			},
			"gap": "small",
			"alignItems": "start",
			"justifyContent": "start",
			"wrap": "nowrap",
			"styles": {
				"min-width": "180px"
			}
		},
		"parentName": "TaskChartRow",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "TaskLegendCompletedRow",
		"values": {
			"type": "crt.FlexContainer",
			"direction": "row",
			"items": [],
			"fitContent": true,
			"visible": true,
			"color": "transparent",
			"borderRadius": "none",
			"padding": {
				"top": "none",
				"right": "none",
				"bottom": "none",
				"left": "none"
			},
			"gap": "small",
			"alignItems": "center",
			"justifyContent": "start",
			"wrap": "nowrap"
		},
		"parentName": "TaskLegend",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "TaskLegendCompletedSwatch",
		"values": {
			"type": "crt.FlexContainer",
			"direction": "row",
			"items": [],
			"fitContent": true,
			"visible": true,
			"borderRadius": "none",
			"padding": {
				"top": "none",
				"right": "none",
				"bottom": "none",
				"left": "none"
			},
			"gap": "small",
			"alignItems": "center",
			"justifyContent": "start",
			"wrap": "nowrap",
			"styles": {
				"width": "12px",
				"height": "12px",
				"min-width": "12px",
				"border-radius": "3px",
				"background-color": "#2E9E5B"
			}
		},
		"parentName": "TaskLegendCompletedRow",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "TaskLegendCompletedLabel",
		"values": {
			"type": "crt.Label",
			"caption": "$TaskLegendCompletedCaption",
			"labelType": "body",
			"labelThickness": "default",
			"labelEllipsis": false,
			"labelColor": "auto",
			"labelBackgroundColor": "transparent",
			"labelTextAlign": "start",
			"visible": true
		},
		"parentName": "TaskLegendCompletedRow",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "TaskLegendOverdueRow",
		"values": {
			"type": "crt.FlexContainer",
			"direction": "row",
			"items": [],
			"fitContent": true,
			"visible": true,
			"color": "transparent",
			"borderRadius": "none",
			"padding": {
				"top": "none",
				"right": "none",
				"bottom": "none",
				"left": "none"
			},
			"gap": "small",
			"alignItems": "center",
			"justifyContent": "start",
			"wrap": "nowrap"
		},
		"parentName": "TaskLegend",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "TaskLegendOverdueSwatch",
		"values": {
			"type": "crt.FlexContainer",
			"direction": "row",
			"items": [],
			"fitContent": true,
			"visible": true,
			"borderRadius": "none",
			"padding": {
				"top": "none",
				"right": "none",
				"bottom": "none",
				"left": "none"
			},
			"gap": "small",
			"alignItems": "center",
			"justifyContent": "start",
			"wrap": "nowrap",
			"styles": {
				"width": "12px",
				"height": "12px",
				"min-width": "12px",
				"border-radius": "3px",
				"background-color": "#E0463A"
			}
		},
		"parentName": "TaskLegendOverdueRow",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "TaskLegendOverdueLabel",
		"values": {
			"type": "crt.Label",
			"caption": "$TaskLegendOverdueCaption",
			"labelType": "body",
			"labelThickness": "default",
			"labelEllipsis": false,
			"labelColor": "auto",
			"labelBackgroundColor": "transparent",
			"labelTextAlign": "start",
			"visible": true
		},
		"parentName": "TaskLegendOverdueRow",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "TaskLegendOpenRow",
		"values": {
			"type": "crt.FlexContainer",
			"direction": "row",
			"items": [],
			"fitContent": true,
			"visible": true,
			"color": "transparent",
			"borderRadius": "none",
			"padding": {
				"top": "none",
				"right": "none",
				"bottom": "none",
				"left": "none"
			},
			"gap": "small",
			"alignItems": "center",
			"justifyContent": "start",
			"wrap": "nowrap"
		},
		"parentName": "TaskLegend",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "TaskLegendOpenSwatch",
		"values": {
			"type": "crt.FlexContainer",
			"direction": "row",
			"items": [],
			"fitContent": true,
			"visible": true,
			"borderRadius": "none",
			"padding": {
				"top": "none",
				"right": "none",
				"bottom": "none",
				"left": "none"
			},
			"gap": "small",
			"alignItems": "center",
			"justifyContent": "start",
			"wrap": "nowrap",
			"styles": {
				"width": "12px",
				"height": "12px",
				"min-width": "12px",
				"border-radius": "3px",
				"background-color": "#4A7FD4"
			}
		},
		"parentName": "TaskLegendOpenRow",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "TaskLegendOpenLabel",
		"values": {
			"type": "crt.Label",
			"caption": "$TaskLegendOpenCaption",
			"labelType": "body",
			"labelThickness": "default",
			"labelEllipsis": false,
			"labelColor": "auto",
			"labelBackgroundColor": "transparent",
			"labelTextAlign": "start",
			"visible": true
		},
		"parentName": "TaskLegendOpenRow",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "ProgressBlock",
		"values": {
			"type": "crt.FlexContainer",
			"direction": "column",
			"items": [],
			"fitContent": true,
			"visible": true,
			"borderRadius": "none",
			"padding": {
				"top": "small",
				"right": "none",
				"bottom": "small",
				"left": "none"
			},
			"gap": "small",
			"alignItems": "stretch",
			"justifyContent": "start",
			"wrap": "nowrap",
			"layoutConfig": {
				"column": 1,
				"row": 4,
				"colSpan": 2,
				"rowSpan": 1
			},
			"styles": {
				"max-width": "520px"
			}
		},
		"parentName": "GridProgress",
		"propertyName": "items",
		"index": 5
	},
	{
		"operation": "insert",
		"name": "ProgressHeader",
		"values": {
			"type": "crt.FlexContainer",
			"direction": "row",
			"items": [],
			"fitContent": true,
			"visible": true,
			"color": "transparent",
			"borderRadius": "none",
			"padding": {
				"top": "none",
				"right": "none",
				"bottom": "none",
				"left": "none"
			},
			"gap": "small",
			"alignItems": "center",
			"justifyContent": "space-between",
			"wrap": "nowrap"
		},
		"parentName": "ProgressBlock",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "ProgressTitle",
		"values": {
			"type": "crt.Label",
			"caption": "Progress, %",
			"labelType": "caption",
			"labelThickness": "default",
			"labelEllipsis": false,
			"labelColor": "#757575",
			"labelBackgroundColor": "transparent",
			"labelTextAlign": "start",
			"visible": true
		},
		"parentName": "ProgressHeader",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "ProgressValue",
		"values": {
			"type": "crt.Label",
			"caption": "$ProgressCaption",
			"labelType": "body",
			"labelThickness": "bold",
			"labelEllipsis": false,
			"labelColor": "auto",
			"labelBackgroundColor": "transparent",
			"labelTextAlign": "start",
			"visible": true
		},
		"parentName": "ProgressHeader",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "ProgressTrack",
		"values": {
			"type": "crt.FlexContainer",
			"direction": "row",
			"items": [],
			"fitContent": true,
			"visible": true,
			"borderRadius": "none",
			"padding": {
				"top": "none",
				"right": "none",
				"bottom": "none",
				"left": "none"
			},
			"gap": "none",
			"alignItems": "center",
			"justifyContent": "start",
			"wrap": "nowrap",
			"styles": {
				"width": "100%",
				"height": "14px",
				"border-radius": "7px",
				"background-color": "#E4E7EC",
				"overflow": "hidden"
			}
		},
		"parentName": "ProgressBlock",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "ProgressFill",
		"values": {
			"type": "crt.FlexContainer",
			"direction": "row",
			"items": [],
			"fitContent": true,
			"visible": true,
			"borderRadius": "none",
			"padding": {
				"top": "none",
				"right": "none",
				"bottom": "none",
				"left": "none"
			},
			"gap": "small",
			"alignItems": "center",
			"justifyContent": "start",
			"wrap": "nowrap",
			"styles": "$ProgressFillStyle"
		},
		"parentName": "ProgressTrack",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "ProgressSubText",
		"values": {
			"type": "crt.Label",
			"caption": "$ProgressSubCaption",
			"labelType": "caption",
			"labelThickness": "default",
			"labelEllipsis": false,
			"labelColor": "#757575",
			"labelBackgroundColor": "transparent",
			"labelTextAlign": "start",
			"visible": true
		},
		"parentName": "ProgressBlock",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "PanelNotes",
		"values": {
			"type": "crt.ExpansionPanel",
			"tools": [],
			"items": [],
			"title": "Notes",
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
			"alignItems": "stretch",
			"layoutConfig": {
				"column": 1,
				"colSpan": 1,
				"row": 4,
				"rowSpan": 1
			}
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
		"name": "EmpoNotes",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 1,
				"colSpan": 2,
				"rowSpan": 3
			},
			"type": "crt.Input",
			"label": "Notes",
			"labelPosition": "auto",
			"control": "$PDS_EmpoNotes",
			"multiline": true
		},
		"parentName": "GridNotes",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "OfferTab",
		"values": {
			"type": "crt.TabContainer",
			"caption": "Offer",
			"items": [],
			"iconPosition": "only-text",
			"visible": true
		},
		"parentName": "Tabs",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "PanelOffer",
		"values": {
			"type": "crt.ExpansionPanel",
			"tools": [],
			"items": [],
			"title": "Job offer & acceptance",
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
		"parentName": "OfferTab",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "PanelOfferGrid",
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
		"parentName": "PanelOffer",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "OfferStatus",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.ComboBox",
			"label": "Offer status",
			"labelPosition": "auto",
			"control": "$PDS_EmpoOfferStatus",
			"listActions": [],
			"showValueAsLink": true,
			"controlActions": []
		},
		"parentName": "PanelOfferGrid",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "OfferDate",
		"values": {
			"layoutConfig": {
				"column": 2,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.DateTimePicker",
			"label": "Offer date",
			"labelPosition": "auto",
			"control": "$PDS_EmpoOfferDate",
			"pickerType": "date"
		},
		"parentName": "PanelOfferGrid",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "OfferSentOn",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.DateTimePicker",
			"label": "Offer sent on",
			"labelPosition": "auto",
			"control": "$PDS_EmpoOfferSentOn",
			"pickerType": "date"
		},
		"parentName": "PanelOfferGrid",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "OfferAcceptedOn",
		"values": {
			"layoutConfig": {
				"column": 2,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.DateTimePicker",
			"label": "Offer accepted on",
			"labelPosition": "auto",
			"control": "$PDS_EmpoOfferAcceptedOn",
			"pickerType": "date"
		},
		"parentName": "PanelOfferGrid",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "OfferPosition",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 3,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Input",
			"label": "Position",
			"labelPosition": "auto",
			"control": "$PDS_EmpoJobTitle"
		},
		"parentName": "PanelOfferGrid",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "OfferJoiningDate",
		"values": {
			"layoutConfig": {
				"column": 2,
				"row": 3,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.DateTimePicker",
			"label": "Confirmed joining date",
			"labelPosition": "auto",
			"control": "$PDS_EmpoStartDate",
			"pickerType": "date"
		},
		"parentName": "PanelOfferGrid",
		"propertyName": "items",
		"index": 5
	},
	{
		"operation": "insert",
		"name": "OfferSalary",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 4,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Input",
			"label": "Offered salary",
			"labelPosition": "auto",
			"control": "$PDS_EmpoOfferedSalary"
		},
		"parentName": "PanelOfferGrid",
		"propertyName": "items",
		"index": 6
	},
	{
		"operation": "insert",
		"name": "OfferNotes",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 5,
				"colSpan": 2,
				"rowSpan": 1
			},
			"type": "crt.Input",
			"label": "Offer notes",
			"labelPosition": "auto",
			"control": "$PDS_EmpoOfferNotes",
			"multiline": true
		},
		"parentName": "PanelOfferGrid",
		"propertyName": "items",
		"index": 7
	},
	{
		"operation": "insert",
		"name": "EmployeeInfoTab",
		"values": {
			"type": "crt.TabContainer",
			"caption": "#ResourceString(EmployeeInfoTab_caption)#",
			"items": [],
			"iconPosition": "only-text",
			"visible": true
		},
		"parentName": "Tabs",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "PanelPersonal",
		"values": {
			"type": "crt.ExpansionPanel",
			"tools": [],
			"items": [],
			"title": "Personal & contact information",
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
		"parentName": "EmployeeInfoTab",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "PanelPersonalGrid",
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
		"parentName": "PanelPersonal",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "PersonalEmail",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.EmailInput",
			"label": "Personal email",
			"labelPosition": "auto",
			"control": "$PDS_EmpoPersonalEmail"
		},
		"parentName": "PanelPersonalGrid",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "PersonalPhone",
		"values": {
			"layoutConfig": {
				"column": 2,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.PhoneInput",
			"label": "Personal phone",
			"labelPosition": "auto",
			"control": "$PDS_EmpoPersonalPhone"
		},
		"parentName": "PanelPersonalGrid",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "BirthDate",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.DateTimePicker",
			"label": "Date of birth",
			"labelPosition": "auto",
			"control": "$PDS_EmpoBirthDate",
			"pickerType": "date"
		},
		"parentName": "PanelPersonalGrid",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "Cnic",
		"values": {
			"layoutConfig": {
				"column": 2,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Input",
			"label": "National ID / CNIC",
			"labelPosition": "auto",
			"control": "$PDS_EmpoCnic"
		},
		"parentName": "PanelPersonalGrid",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "Address",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 3,
				"colSpan": 2,
				"rowSpan": 1
			},
			"type": "crt.Input",
			"label": "Address",
			"labelPosition": "auto",
			"control": "$PDS_EmpoAddress"
		},
		"parentName": "PanelPersonalGrid",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "PanelEmergency",
		"values": {
			"type": "crt.ExpansionPanel",
			"tools": [],
			"items": [],
			"title": "Emergency contact",
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
		"parentName": "EmployeeInfoTab",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "PanelEmergencyGrid",
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
		"parentName": "PanelEmergency",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "EmergencyName",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Input",
			"label": "Contact name",
			"labelPosition": "auto",
			"control": "$PDS_EmpoEmergencyName"
		},
		"parentName": "PanelEmergencyGrid",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "EmergencyPhone",
		"values": {
			"layoutConfig": {
				"column": 2,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.PhoneInput",
			"label": "Contact phone",
			"labelPosition": "auto",
			"control": "$PDS_EmpoEmergencyPhone"
		},
		"parentName": "PanelEmergencyGrid",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "EmergencyRelation",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Input",
			"label": "Relationship",
			"labelPosition": "auto",
			"control": "$PDS_EmpoEmergencyRelation"
		},
		"parentName": "PanelEmergencyGrid",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "PanelBank",
		"values": {
			"type": "crt.ExpansionPanel",
			"tools": [],
			"items": [],
			"title": "Bank / payroll information",
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
		"parentName": "EmployeeInfoTab",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "BankListRefreshBtn",
		"values": {
			"type": "crt.Button",
			"caption": "",
			"icon": "reload-icon",
			"iconPosition": "only-icon",
			"color": "default",
			"size": "medium",
			"clickMode": "default",
			"clicked": {
				"request": "crt.LoadDataRequest",
				"params": {
					"config": {
						"loadType": "reload",
						"useLastLoadParameters": true
					},
					"dataSourceName": "BankListDS"
				}
			},
			"visible": true
		},
		"parentName": "PanelBank",
		"propertyName": "tools",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "PanelBankGrid",
		"values": {
			"type": "crt.GridContainer",
			"rows": "minmax(max-content, 32px)",
			"columns": [
				"minmax(32px, 1fr)"
			],
			"gap": {
				"columnGap": "large",
				"rowGap": "none"
			},
			"items": []
		},
		"parentName": "PanelBank",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "BankList",
		"values": {
			"type": "crt.DataGrid",
			"layoutConfig": {
				"colSpan": 1,
				"column": 1,
				"row": 1,
				"rowSpan": 6
			},
			"features": {
				"rows": {
					"selection": {
						"enable": true,
						"multiple": true
					}
				},
				"editable": {
					"enable": true,
					"itemsCreation": true,
					"floatingEditPanel": false
				}
			},
			"items": "$BankList",
			"primaryColumnName": "BankListDS_Id",
			"columns": [
				{
					"id": "27fb3661-38f6-44e9-9a87-f619b1473306",
					"code": "BankListDS_EmpoName",
					"caption": "Bank name",
					"dataValueType": 28,
					"width": 170
				},
				{
					"id": "7175ea65-7334-4d90-96ca-416ec0a248b2",
					"code": "BankListDS_EmpoAccountTitle",
					"caption": "Account title",
					"dataValueType": 28,
					"width": 170
				},
				{
					"id": "751a1b36-e044-4167-9879-caa39c56b0fd",
					"code": "BankListDS_EmpoAccountNumber",
					"caption": "Account number",
					"dataValueType": 28,
					"width": 170
				},
				{
					"id": "3546a25f-62ca-4153-9e6c-1fc3846d0d1a",
					"code": "BankListDS_EmpoIban",
					"caption": "IBAN",
					"dataValueType": 28,
					"width": 170
				},
				{
					"id": "df19b80a-97eb-4969-8700-b0d15dc698e0",
					"code": "BankListDS_EmpoTaxNumber",
					"caption": "Tax number (NTN)",
					"dataValueType": 28,
					"width": 170
				},
				{
					"id": "e47d3187-40fb-4a47-98af-da7cfdea3829",
					"code": "BankListDS_EmpoIsPrimary",
					"caption": "Primary",
					"dataValueType": 12,
					"width": 170
				}
			],
			"placeholder": false,
			"visible": true,
			"fitContent": true
		},
		"parentName": "PanelBankGrid",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "DocumentsTab",
		"values": {
			"type": "crt.TabContainer",
			"caption": "Documents",
			"items": [],
			"iconPosition": "only-text",
			"visible": true
		},
		"parentName": "Tabs",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "PanelDocuments",
		"values": {
			"type": "crt.ExpansionPanel",
			"tools": [],
			"items": [],
			"title": "Onboarding documents",
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
		"parentName": "DocumentsTab",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "DocumentsListRefreshBtn",
		"values": {
			"type": "crt.Button",
			"caption": "",
			"icon": "reload-icon",
			"iconPosition": "only-icon",
			"color": "default",
			"size": "medium",
			"clickMode": "default",
			"clicked": {
				"request": "crt.LoadDataRequest",
				"params": {
					"config": {
						"loadType": "reload",
						"useLastLoadParameters": true
					},
					"dataSourceName": "DocumentsListDS"
				}
			},
			"visible": true
		},
		"parentName": "PanelDocuments",
		"propertyName": "tools",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "PanelDocumentsGrid",
		"values": {
			"type": "crt.GridContainer",
			"rows": "minmax(max-content, 32px)",
			"columns": [
				"minmax(32px, 1fr)"
			],
			"gap": {
				"columnGap": "large",
				"rowGap": "none"
			},
			"items": []
		},
		"parentName": "PanelDocuments",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "DocumentsList",
		"values": {
			"type": "crt.DataGrid",
			"layoutConfig": {
				"colSpan": 1,
				"column": 1,
				"row": 1,
				"rowSpan": 6
			},
			"features": {
				"rows": {
					"selection": {
						"enable": true,
						"multiple": true
					}
				},
				"editable": {
					"enable": true,
					"itemsCreation": true,
					"floatingEditPanel": false
				}
			},
			"items": "$DocumentsList",
			"primaryColumnName": "DocumentsListDS_Id",
			"columns": [
				{
					"id": "29092fa1-6eda-4dc3-880a-4a34a0920807",
					"code": "DocumentsListDS_EmpoName",
					"caption": "Document",
					"dataValueType": 28,
					"width": 170
				},
				{
					"id": "ba99d6fd-530a-4f78-8a94-91c6e27bf561",
					"code": "DocumentsListDS_EmpoDocumentType",
					"caption": "Document type",
					"dataValueType": 10,
					"width": 170
				},
				{
					"id": "e7280ef4-1922-438f-9c04-f953e31af88b",
					"code": "DocumentsListDS_EmpoStatus",
					"caption": "Status",
					"dataValueType": 10,
					"width": 170
				},
				{
					"id": "3f4394e1-42f0-4dd9-9463-413b4591eef3",
					"code": "DocumentsListDS_EmpoUploadDate",
					"caption": "Upload date",
					"dataValueType": 8,
					"width": 170
				},
				{
					"id": "c267012a-541b-4895-a05f-7bec40cc9f73",
					"code": "DocumentsListDS_EmpoVerifiedBy",
					"caption": "Verified by",
					"dataValueType": 10,
					"width": 170
				},
				{
					"id": "b14cdfd1-8e71-4c6d-b7c8-87f941c1ac09",
					"code": "DocumentsListDS_EmpoNotes",
					"caption": "Notes",
					"dataValueType": 29,
					"width": 170
				}
			],
			"placeholder": false,
			"visible": true,
			"fitContent": true
		},
		"parentName": "PanelDocumentsGrid",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "PanelDocCheck",
		"values": {
			"type": "crt.ExpansionPanel",
			"tools": [],
			"items": [],
			"title": "Verification",
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
		"parentName": "DocumentsTab",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "PanelDocCheckGrid",
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
		"parentName": "PanelDocCheck",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "DocsVerified",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Checkbox",
			"label": "All documents verified",
			"labelPosition": "auto",
			"control": "$PDS_EmpoDocsVerified"
		},
		"parentName": "PanelDocCheckGrid",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "ExpansionPanel_fs6y1ia",
		"values": {
			"type": "crt.ExpansionPanel",
			"tools": [],
			"items": [],
			"title": "#ResourceString(ExpansionPanel_fs6y1ia_title)#",
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
		"parentName": "DocumentsTab",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "GridContainer_89jdin2",
		"values": {
			"type": "crt.GridContainer",
			"rows": "minmax(max-content, 24px)",
			"columns": [
				"minmax(32px, 1fr)"
			],
			"gap": {
				"columnGap": "large",
				"rowGap": 0
			},
			"styles": {
				"overflow-x": "hidden"
			},
			"items": []
		},
		"parentName": "ExpansionPanel_fs6y1ia",
		"propertyName": "tools",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "FlexContainer_231ow6e",
		"values": {
			"type": "crt.FlexContainer",
			"direction": "row",
			"gap": "none",
			"alignItems": "center",
			"items": [],
			"layoutConfig": {
				"colSpan": 1,
				"column": 1,
				"row": 1,
				"rowSpan": 1
			}
		},
		"parentName": "GridContainer_89jdin2",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "GridDetailAddBtn_0b3h5b4",
		"values": {
			"type": "crt.Button",
			"caption": "#ResourceString(GridDetailAddBtn_0b3h5b4_caption)#",
			"icon": "upload-button-icon",
			"iconPosition": "only-icon",
			"color": "default",
			"size": "medium",
			"clicked": {
				"request": "crt.UploadFileRequest",
				"params": {
					"viewElementName": "FileList_lwebd7m"
				}
			}
		},
		"parentName": "FlexContainer_231ow6e",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "GridDetailRefreshBtn_lzhoz47",
		"values": {
			"type": "crt.Button",
			"caption": "#ResourceString(GridDetailRefreshBtn_lzhoz47_caption)#",
			"icon": "reload-icon",
			"iconPosition": "only-icon",
			"color": "default",
			"size": "medium",
			"clicked": {
				"request": "crt.LoadDataRequest",
				"params": {
					"config": {
						"loadType": "reload"
					},
					"dataSourceName": "FileList_lwebd7mDS"
				}
			}
		},
		"parentName": "FlexContainer_231ow6e",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "GridDetailSearchFilter_j8qj4sa",
		"values": {
			"type": "crt.SearchFilter",
			"placeholder": "#ResourceString(GridDetailSearchFilter_j8qj4sa_placeholder)#",
			"_filterOptions": {
				"expose": [
					{
						"attribute": "GridDetailSearchFilter_j8qj4sa_FileList_lwebd7m",
						"converters": [
							{
								"converter": "crt.SearchFilterAttributeConverter",
								"args": [
									"FileList_lwebd7m"
								]
							}
						]
					}
				],
				"from": [
					"GridDetailSearchFilter_j8qj4sa_SearchValue",
					"GridDetailSearchFilter_j8qj4sa_FilteredColumnsGroups"
				]
			}
		},
		"parentName": "FlexContainer_231ow6e",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "GridContainer_2qwbmyl",
		"values": {
			"type": "crt.GridContainer",
			"rows": "minmax(max-content, 32px)",
			"columns": [
				"minmax(32px, 1fr)",
				"minmax(32px, 1fr)"
			],
			"gap": {
				"columnGap": "large",
				"rowGap": 0
			},
			"styles": {
				"overflow-x": "hidden"
			},
			"items": []
		},
		"parentName": "ExpansionPanel_fs6y1ia",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "FileList_lwebd7m",
		"values": {
			"type": "crt.FileList",
			"masterRecordColumnValue": "$Id",
			"recordColumnName": "RecordId",
			"layoutConfig": {
				"colSpan": 2,
				"column": 1,
				"row": 1,
				"rowSpan": 10
			},
			"items": "$FileList_lwebd7m",
			"primaryColumnName": "FileList_lwebd7mDS_Id",
			"columns": [
				{
					"id": "cb734f6e-a315-d8d8-a81b-aa71e4743e3f",
					"code": "FileList_lwebd7mDS_Name",
					"caption": "#ResourceString(FileList_lwebd7mDS_Name)#",
					"dataValueType": 28
				},
				{
					"id": "773c334e-6e06-630a-bd2b-40550668e4c5",
					"code": "FileList_lwebd7mDS_CreatedOn",
					"caption": "#ResourceString(FileList_lwebd7mDS_CreatedOn)#",
					"dataValueType": 7
				},
				{
					"id": "b699731c-c17c-d2e9-f89f-7d621cab7445",
					"code": "FileList_lwebd7mDS_CreatedBy",
					"caption": "#ResourceString(FileList_lwebd7mDS_CreatedBy)#",
					"dataValueType": 10
				},
				{
					"id": "a74e29a3-1f4c-45db-e0ef-e9cc00416f60",
					"code": "FileList_lwebd7mDS_Size",
					"caption": "#ResourceString(FileList_lwebd7mDS_Size)#",
					"dataValueType": 4
				}
			]
		},
		"parentName": "GridContainer_2qwbmyl",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "TabContainer_kb4mgfl",
		"values": {
			"type": "crt.TabContainer",
			"items": [],
			"caption": "#ResourceString(TabContainer_kb4mgfl_caption)#",
			"iconPosition": "only-text",
			"visible": true
		},
		"parentName": "Tabs",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "GridContainer_hf5erhp",
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
		"parentName": "TabContainer_kb4mgfl",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "ExpansionPanel_ro9ngwo",
		"values": {
			"type": "crt.ExpansionPanel",
			"tools": [],
			"items": [],
			"title": "#ResourceString(ExpansionPanel_ro9ngwo_title)#",
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
			"fitContent": true
		},
		"parentName": "TabContainer_kb4mgfl",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "GridContainer_2di1kko",
		"values": {
			"type": "crt.GridContainer",
			"rows": "minmax(max-content, 24px)",
			"columns": [
				"minmax(32px, 1fr)"
			],
			"gap": {
				"columnGap": "large",
				"rowGap": 0
			},
			"styles": {
				"overflow-x": "hidden"
			},
			"items": []
		},
		"parentName": "ExpansionPanel_ro9ngwo",
		"propertyName": "tools",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "FlexContainer_u5hocv1",
		"values": {
			"type": "crt.FlexContainer",
			"direction": "row",
			"gap": "none",
			"alignItems": "center",
			"items": [],
			"layoutConfig": {
				"colSpan": 1,
				"column": 1,
				"row": 1,
				"rowSpan": 1
			}
		},
		"parentName": "GridContainer_2di1kko",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "GridDetailAddBtn_u4wrtcm",
		"values": {
			"type": "crt.Button",
			"caption": "#ResourceString(GridDetailAddBtn_u4wrtcm_caption)#",
			"icon": "add-button-icon",
			"iconPosition": "only-icon",
			"color": "default",
			"size": "medium",
			"clicked": {
				"request": "crt.CreateRecordRequest",
				"params": {
					"entityName": "EmpoEmployeeInventory"
				}
			}
		},
		"parentName": "FlexContainer_u5hocv1",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "GridDetailRefreshBtn_hj9gurw",
		"values": {
			"type": "crt.Button",
			"caption": "#ResourceString(GridDetailRefreshBtn_hj9gurw_caption)#",
			"icon": "reload-icon",
			"iconPosition": "only-icon",
			"color": "default",
			"size": "medium",
			"clicked": {
				"request": "crt.LoadDataRequest",
				"params": {
					"config": {
						"loadType": "reload"
					},
					"dataSourceName": "GridDetail_8fmxllxDS"
				}
			}
		},
		"parentName": "FlexContainer_u5hocv1",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "GridDetailSettingsBtn_0hib2aq",
		"values": {
			"type": "crt.Button",
			"caption": "#ResourceString(GridDetailSettingsBtn_0hib2aq_caption)#",
			"icon": "actions-button-icon",
			"iconPosition": "only-icon",
			"color": "default",
			"size": "medium",
			"clickMode": "menu",
			"menuItems": []
		},
		"parentName": "FlexContainer_u5hocv1",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "GridDetailExportDataBtn_3m5du3u",
		"values": {
			"type": "crt.MenuItem",
			"caption": "#ResourceString(GridDetailExportDataBtn_3m5du3u_caption)#",
			"icon": "export-button-icon",
			"color": "default",
			"size": "medium",
			"clicked": {
				"request": "crt.ExportDataGridToExcelRequest",
				"params": {
					"viewName": "GridDetail_8fmxllx"
				}
			}
		},
		"parentName": "GridDetailSettingsBtn_0hib2aq",
		"propertyName": "menuItems",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "GridDetailImportDataBtn_s06p11d",
		"values": {
			"type": "crt.MenuItem",
			"caption": "#ResourceString(GridDetailImportDataBtn_s06p11d_caption)#",
			"icon": "import-button-icon",
			"color": "default",
			"size": "medium",
			"clicked": {
				"request": "crt.ImportDataRequest",
				"params": {
					"entitySchemaName": "EmpoEmployeeInventory"
				}
			}
		},
		"parentName": "GridDetailSettingsBtn_0hib2aq",
		"propertyName": "menuItems",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "GridDetailSearchFilter_ru721jm",
		"values": {
			"type": "crt.SearchFilter",
			"placeholder": "#ResourceString(GridDetailSearchFilter_ru721jm_placeholder)#",
			"iconOnly": true,
			"_filterOptions": {
				"expose": [
					{
						"attribute": "GridDetailSearchFilter_ru721jm_GridDetail_8fmxllx",
						"converters": [
							{
								"converter": "crt.SearchFilterAttributeConverter",
								"args": [
									"GridDetail_8fmxllx"
								]
							}
						]
					}
				],
				"from": [
					"GridDetailSearchFilter_ru721jm_SearchValue",
					"GridDetailSearchFilter_ru721jm_FilteredColumnsGroups"
				]
			}
		},
		"parentName": "FlexContainer_u5hocv1",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "GridContainer_x2m87vm",
		"values": {
			"type": "crt.GridContainer",
			"rows": "minmax(max-content, 32px)",
			"columns": [
				"minmax(32px, 1fr)",
				"minmax(32px, 1fr)"
			],
			"gap": {
				"columnGap": "large",
				"rowGap": 0
			},
			"styles": {
				"overflow-x": "hidden"
			},
			"items": []
		},
		"parentName": "ExpansionPanel_ro9ngwo",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "GridDetail_8fmxllx",
		"values": {
			"type": "crt.DataGrid",
			"layoutConfig": {
				"colSpan": 2,
				"column": 1,
				"row": 1,
				"rowSpan": 6
			},
			"features": {
				"rows": {
					"selection": {
						"enable": true,
						"multiple": true
					}
				}
			},
			"items": "$GridDetail_8fmxllx",
			"primaryColumnName": "GridDetail_8fmxllxDS_Id",
			"columns": [
				{
					"id": "1680f126-946c-aee3-192e-dc7570b25d0b",
					"code": "GridDetail_8fmxllxDS_EmpoName",
					"caption": "#ResourceString(GridDetail_8fmxllxDS_EmpoName)#",
					"dataValueType": 28
				},
				{
					"id": "4be11a92-9908-ad8a-90e9-49d3cd2e49a8",
					"code": "GridDetail_8fmxllxDS_EmpoItemType",
					"caption": "#ResourceString(GridDetail_8fmxllxDS_EmpoItemType)#",
					"dataValueType": 10
				},
				{
					"id": "166f016e-c000-c18e-3a5e-f3728dd88452",
					"code": "GridDetail_8fmxllxDS_EmpoSerialNumber",
					"caption": "#ResourceString(GridDetail_8fmxllxDS_EmpoSerialNumber)#",
					"dataValueType": 28
				},
				{
					"id": "4990f23b-dbb2-6aea-82f7-610a4a7ce060",
					"code": "GridDetail_8fmxllxDS_EmpoAssignedDate",
					"caption": "#ResourceString(GridDetail_8fmxllxDS_EmpoAssignedDate)#",
					"dataValueType": 8
				},
				{
					"id": "edcfbc4c-a944-d0a5-0d42-db1fa64d07b6",
					"code": "GridDetail_8fmxllxDS_EmpoItemStatus",
					"caption": "#ResourceString(GridDetail_8fmxllxDS_EmpoItemStatus)#",
					"dataValueType": 10
				}
			],
			"placeholder": false
		},
		"parentName": "GridContainer_x2m87vm",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "PreparationTab",
		"values": {
			"type": "crt.TabContainer",
			"caption": "Preparation",
			"items": [],
			"iconPosition": "only-text",
			"visible": true
		},
		"parentName": "Tabs",
		"propertyName": "items",
		"index": 5
	},
	{
		"operation": "insert",
		"name": "PanelPrep",
		"values": {
			"type": "crt.ExpansionPanel",
			"tools": [],
			"items": [],
			"title": "Pre-joining preparation checklist",
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
		"parentName": "PreparationTab",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "PanelPrepGrid",
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
		"parentName": "PanelPrep",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "Prep_EmpoAccountCreated",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Checkbox",
			"label": "Employee account created",
			"labelPosition": "auto",
			"control": "$PDS_EmpoAccountCreated"
		},
		"parentName": "PanelPrepGrid",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "Prep_EmpoEquipmentReady",
		"values": {
			"layoutConfig": {
				"column": 2,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Checkbox",
			"label": "Laptop / equipment prepared",
			"labelPosition": "auto",
			"control": "$PDS_EmpoEquipmentReady"
		},
		"parentName": "PanelPrepGrid",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "Prep_EmpoSystemAccess",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Checkbox",
			"label": "Email & system access created",
			"labelPosition": "auto",
			"control": "$PDS_EmpoSystemAccess"
		},
		"parentName": "PanelPrepGrid",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "Prep_EmpoWorkspaceAssigned",
		"values": {
			"layoutConfig": {
				"column": 2,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Checkbox",
			"label": "Workspace assigned",
			"labelPosition": "auto",
			"control": "$PDS_EmpoWorkspaceAssigned"
		},
		"parentName": "PanelPrepGrid",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "Prep_EmpoScheduleReady",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 3,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Checkbox",
			"label": "Onboarding schedule prepared",
			"labelPosition": "auto",
			"control": "$PDS_EmpoScheduleReady"
		},
		"parentName": "PanelPrepGrid",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "PrepBuddy",
		"values": {
			"layoutConfig": {
				"column": 2,
				"row": 3,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.ComboBox",
			"label": "Buddy",
			"labelPosition": "auto",
			"control": "$PDS_EmpoBuddy",
			"listActions": [],
			"showValueAsLink": true,
			"controlActions": []
		},
		"parentName": "PanelPrepGrid",
		"propertyName": "items",
		"index": 5
	},
	{
		"operation": "insert",
		"name": "FirstDayTab",
		"values": {
			"type": "crt.TabContainer",
			"caption": "First Day",
			"items": [],
			"iconPosition": "only-text",
			"visible": true
		},
		"parentName": "Tabs",
		"propertyName": "items",
		"index": 6
	},
	{
		"operation": "insert",
		"name": "PanelFirstDay",
		"values": {
			"type": "crt.ExpansionPanel",
			"tools": [],
			"items": [],
			"title": "First day welcome",
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
		"parentName": "FirstDayTab",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "PanelFirstDayGrid",
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
		"parentName": "PanelFirstDay",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "Day1_EmpoWelcomed",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Checkbox",
			"label": "Employee welcomed",
			"labelPosition": "auto",
			"control": "$PDS_EmpoWelcomed"
		},
		"parentName": "PanelFirstDayGrid",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "Day1_EmpoHrIntroduced",
		"values": {
			"layoutConfig": {
				"column": 2,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Checkbox",
			"label": "HR & manager introduced",
			"labelPosition": "auto",
			"control": "$PDS_EmpoHrIntroduced"
		},
		"parentName": "PanelFirstDayGrid",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "Day1_EmpoTeamIntroduced",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Checkbox",
			"label": "Team members introduced",
			"labelPosition": "auto",
			"control": "$PDS_EmpoTeamIntroduced"
		},
		"parentName": "PanelFirstDayGrid",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "Day1_EmpoPoliciesExplained",
		"values": {
			"layoutConfig": {
				"column": 2,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Checkbox",
			"label": "Company policies & culture explained",
			"labelPosition": "auto",
			"control": "$PDS_EmpoPoliciesExplained"
		},
		"parentName": "PanelFirstDayGrid",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "PanelCompletion",
		"values": {
			"type": "crt.ExpansionPanel",
			"tools": [],
			"items": [],
			"title": "Onboarding completion",
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
		"parentName": "FirstDayTab",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "PanelCompletionGrid",
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
		"parentName": "PanelCompletion",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "Comp_Active",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.Checkbox",
			"label": "Employee active",
			"labelPosition": "auto",
			"control": "$PDS_EmpoEmployeeActive"
		},
		"parentName": "PanelCompletionGrid",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "Comp_On",
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
			"pickerType": "date"
		},
		"parentName": "PanelCompletionGrid",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "Comp_Progress",
		"values": {
			"layoutConfig": {
				"column": 1,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			},
			"type": "crt.NumberInput",
			"label": "Progress, %",
			"labelPosition": "auto",
			"control": "$PDS_EmpoProgressPercent"
		},
		"parentName": "PanelCompletionGrid",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "TasksTab",
		"values": {
			"type": "crt.TabContainer",
			"caption": "Tasks",
			"items": [],
			"iconPosition": "only-text",
			"visible": true
		},
		"parentName": "Tabs",
		"propertyName": "items",
		"index": 7
	},
	{
		"operation": "insert",
		"name": "PanelTasks",
		"values": {
			"type": "crt.ExpansionPanel",
			"tools": [],
			"items": [],
			"title": "Onboarding tasks",
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
		"parentName": "TasksTab",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "TasksListAddBtn",
		"values": {
			"type": "crt.Button",
			"caption": "",
			"icon": "add-button-icon",
			"iconPosition": "only-icon",
			"color": "default",
			"size": "medium",
			"clickMode": "default",
			"clicked": {
				"request": "crt.CreateRecordRequest",
				"params": {
					"entityName": "EmpoOnbTask",
					"defaultValues": [
						{
							"attributeName": "EmpoOnboarding",
							"value": "$Id"
						}
					]
				}
			},
			"visible": true
		},
		"parentName": "PanelTasks",
		"propertyName": "tools",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "TasksListRefreshBtn",
		"values": {
			"type": "crt.Button",
			"caption": "",
			"icon": "reload-icon",
			"iconPosition": "only-icon",
			"color": "default",
			"size": "medium",
			"clickMode": "default",
			"clicked": {
				"request": "crt.LoadDataRequest",
				"params": {
					"config": {
						"loadType": "reload",
						"useLastLoadParameters": true
					},
					"dataSourceName": "TasksListDS"
				}
			},
			"visible": true
		},
		"parentName": "PanelTasks",
		"propertyName": "tools",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "PanelTasksGrid",
		"values": {
			"type": "crt.GridContainer",
			"rows": "minmax(max-content, 32px)",
			"columns": [
				"minmax(32px, 1fr)"
			],
			"gap": {
				"columnGap": "large",
				"rowGap": "none"
			},
			"items": []
		},
		"parentName": "PanelTasks",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "TasksList",
		"values": {
			"type": "crt.DataGrid",
			"layoutConfig": {
				"colSpan": 1,
				"column": 1,
				"row": 1,
				"rowSpan": 6
			},
			"features": {
				"rows": {
					"selection": {
						"enable": true,
						"multiple": true
					}
				}
			},
			"items": "$TasksList",
			"primaryColumnName": "TasksListDS_Id",
			"columns": [
				{
					"id": "e8619483-761a-4b73-afd7-00c9dd696c9f",
					"code": "TasksListDS_EmpoName",
					"caption": "Task",
					"dataValueType": 28,
					"width": 170
				},
				{
					"id": "71adf2af-dca9-4b28-b62a-a9bfd7e3dc10",
					"code": "TasksListDS_EmpoDepartment",
					"caption": "Department",
					"dataValueType": 10,
					"width": 170
				},
				{
					"id": "067cfbbe-e278-458b-b6bf-fefa95555617",
					"code": "TasksListDS_EmpoAssignee",
					"caption": "Responsible",
					"dataValueType": 10,
					"width": 170
				},
				{
					"id": "8fc12e0f-bdb1-4e1b-897c-6f49dad17b7d",
					"code": "TasksListDS_EmpoDueDate",
					"caption": "Due date",
					"dataValueType": 8,
					"width": 170
				},
				{
					"id": "9ef9e982-f1b6-44e5-8d7a-d719ac42e112",
					"code": "TasksListDS_EmpoStatus",
					"caption": "Status",
					"dataValueType": 10,
					"width": 170
				},
				{
					"id": "64163af7-16c1-4ac8-a84d-ed86bcaa1345",
					"code": "TasksListDS_EmpoStage",
					"caption": "Stage",
					"dataValueType": 10,
					"width": 170
				}
			],
			"placeholder": false,
			"visible": true,
			"fitContent": true
		},
		"parentName": "PanelTasksGrid",
		"propertyName": "items",
		"index": 0
	}
]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
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
			"PDS_EmpoEmployee": {
				"modelConfig": {
					"path": "PDS.EmpoEmployee"
				},
				"validators": {
					"required": {
						"type": "crt.Required"
					}
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
			"PDS_EmpoLocation": {
				"modelConfig": {
					"path": "PDS.EmpoLocation"
				}
			},
			"PDS_EmpoStartDate": {
				"modelConfig": {
					"path": "PDS.EmpoStartDate"
				},
				"validators": {
					"required": {
						"type": "crt.Required"
					}
				}
			},
			"PDS_EmpoWorkEmail": {
				"modelConfig": {
					"path": "PDS.EmpoWorkEmail"
				}
			},
			"PDS_EmpoWorkPhone": {
				"modelConfig": {
					"path": "PDS.EmpoWorkPhone"
				}
			},
			"PDS_EmpoHiringManager": {
				"modelConfig": {
					"path": "PDS.EmpoHiringManager"
				}
			},
			"PDS_EmpoHrPartner": {
				"modelConfig": {
					"path": "PDS.EmpoHrPartner"
				}
			},
			"PDS_EmpoBuddy": {
				"modelConfig": {
					"path": "PDS.EmpoBuddy"
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
			"PDS_EmpoTasksGenerated": {
				"modelConfig": {
					"path": "PDS.EmpoTasksGenerated"
				}
			},
			"PDS_EmpoCompletedOn": {
				"modelConfig": {
					"path": "PDS.EmpoCompletedOn"
				}
			},
			"PDS_EmpoTaskTotalCount": {
				"modelConfig": {
					"path": "PDS.EmpoTaskTotalCount"
				}
			},
			"PDS_EmpoTaskCompletedCount": {
				"modelConfig": {
					"path": "PDS.EmpoTaskCompletedCount"
				}
			},
			"PDS_EmpoTaskOverdueCount": {
				"modelConfig": {
					"path": "PDS.EmpoTaskOverdueCount"
				}
			},
			"PDS_EmpoProgressPercent": {
				"modelConfig": {
					"path": "PDS.EmpoProgressPercent"
				}
			},
			"PDS_EmpoNotes": {
				"modelConfig": {
					"path": "PDS.EmpoNotes"
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
			},
			"PDS_EmpoOfferDate": {
				"modelConfig": {
					"path": "PDS.EmpoOfferDate"
				}
			},
			"PDS_EmpoOfferSentOn": {
				"modelConfig": {
					"path": "PDS.EmpoOfferSentOn"
				}
			},
			"PDS_EmpoOfferAcceptedOn": {
				"modelConfig": {
					"path": "PDS.EmpoOfferAcceptedOn"
				}
			},
			"PDS_EmpoOfferedSalary": {
				"modelConfig": {
					"path": "PDS.EmpoOfferedSalary"
				}
			},
			"PDS_EmpoOfferNotes": {
				"modelConfig": {
					"path": "PDS.EmpoOfferNotes"
				}
			},
			"PDS_EmpoPersonalEmail": {
				"modelConfig": {
					"path": "PDS.EmpoPersonalEmail"
				}
			},
			"PDS_EmpoPersonalPhone": {
				"modelConfig": {
					"path": "PDS.EmpoPersonalPhone"
				}
			},
			"PDS_EmpoBirthDate": {
				"modelConfig": {
					"path": "PDS.EmpoBirthDate"
				}
			},
			"PDS_EmpoCnic": {
				"modelConfig": {
					"path": "PDS.EmpoCnic"
				}
			},
			"PDS_EmpoAddress": {
				"modelConfig": {
					"path": "PDS.EmpoAddress"
				}
			},
			"PDS_EmpoEmergencyName": {
				"modelConfig": {
					"path": "PDS.EmpoEmergencyName"
				}
			},
			"PDS_EmpoEmergencyPhone": {
				"modelConfig": {
					"path": "PDS.EmpoEmergencyPhone"
				}
			},
			"PDS_EmpoEmergencyRelation": {
				"modelConfig": {
					"path": "PDS.EmpoEmergencyRelation"
				}
			},
			"BankList": {
				"isCollection": true,
				"modelConfig": {
					"path": "BankListDS",
					"sortingConfig": {
						"default": [
							{
								"direction": "asc",
								"columnName": "EmpoName"
							}
						]
					}
				},
				"viewModelConfig": {
					"attributes": {
						"BankListDS_EmpoName": {
							"modelConfig": {
								"path": "BankListDS.EmpoName"
							}
						},
						"BankListDS_EmpoAccountTitle": {
							"modelConfig": {
								"path": "BankListDS.EmpoAccountTitle"
							}
						},
						"BankListDS_EmpoAccountNumber": {
							"modelConfig": {
								"path": "BankListDS.EmpoAccountNumber"
							}
						},
						"BankListDS_EmpoIban": {
							"modelConfig": {
								"path": "BankListDS.EmpoIban"
							}
						},
						"BankListDS_EmpoTaxNumber": {
							"modelConfig": {
								"path": "BankListDS.EmpoTaxNumber"
							}
						},
						"BankListDS_EmpoIsPrimary": {
							"modelConfig": {
								"path": "BankListDS.EmpoIsPrimary"
							}
						},
						"BankListDS_Id": {
							"modelConfig": {
								"path": "BankListDS.Id"
							}
						}
					}
				}
			},
			"DocumentsList": {
				"isCollection": true,
				"modelConfig": {
					"path": "DocumentsListDS",
					"sortingConfig": {
						"default": [
							{
								"direction": "asc",
								"columnName": "EmpoName"
							}
						]
					}
				},
				"viewModelConfig": {
					"attributes": {
						"DocumentsListDS_EmpoName": {
							"modelConfig": {
								"path": "DocumentsListDS.EmpoName"
							}
						},
						"DocumentsListDS_EmpoDocumentType": {
							"modelConfig": {
								"path": "DocumentsListDS.EmpoDocumentType"
							}
						},
						"DocumentsListDS_EmpoStatus": {
							"modelConfig": {
								"path": "DocumentsListDS.EmpoStatus"
							}
						},
						"DocumentsListDS_EmpoUploadDate": {
							"modelConfig": {
								"path": "DocumentsListDS.EmpoUploadDate"
							}
						},
						"DocumentsListDS_EmpoVerifiedBy": {
							"modelConfig": {
								"path": "DocumentsListDS.EmpoVerifiedBy"
							}
						},
						"DocumentsListDS_EmpoNotes": {
							"modelConfig": {
								"path": "DocumentsListDS.EmpoNotes"
							}
						},
						"DocumentsListDS_Id": {
							"modelConfig": {
								"path": "DocumentsListDS.Id"
							}
						}
					}
				}
			},
			"PDS_EmpoDocsVerified": {
				"modelConfig": {
					"path": "PDS.EmpoDocsVerified"
				}
			},
			"PDS_EmpoAccountCreated": {
				"modelConfig": {
					"path": "PDS.EmpoAccountCreated"
				}
			},
			"PDS_EmpoEquipmentReady": {
				"modelConfig": {
					"path": "PDS.EmpoEquipmentReady"
				}
			},
			"PDS_EmpoSystemAccess": {
				"modelConfig": {
					"path": "PDS.EmpoSystemAccess"
				}
			},
			"PDS_EmpoWorkspaceAssigned": {
				"modelConfig": {
					"path": "PDS.EmpoWorkspaceAssigned"
				}
			},
			"PDS_EmpoScheduleReady": {
				"modelConfig": {
					"path": "PDS.EmpoScheduleReady"
				}
			},
			"PDS_EmpoWelcomed": {
				"modelConfig": {
					"path": "PDS.EmpoWelcomed"
				}
			},
			"PDS_EmpoHrIntroduced": {
				"modelConfig": {
					"path": "PDS.EmpoHrIntroduced"
				}
			},
			"PDS_EmpoTeamIntroduced": {
				"modelConfig": {
					"path": "PDS.EmpoTeamIntroduced"
				}
			},
			"PDS_EmpoPoliciesExplained": {
				"modelConfig": {
					"path": "PDS.EmpoPoliciesExplained"
				}
			},
			"PDS_EmpoEmployeeActive": {
				"modelConfig": {
					"path": "PDS.EmpoEmployeeActive"
				}
			},
			"TasksList": {
				"isCollection": true,
				"modelConfig": {
					"path": "TasksListDS",
					"sortingConfig": {
						"default": [
							{
								"direction": "asc",
								"columnName": "EmpoDueDate"
							}
						]
					}
				},
				"viewModelConfig": {
					"attributes": {
						"TasksListDS_EmpoName": {
							"modelConfig": {
								"path": "TasksListDS.EmpoName"
							}
						},
						"TasksListDS_EmpoDepartment": {
							"modelConfig": {
								"path": "TasksListDS.EmpoDepartment"
							}
						},
						"TasksListDS_EmpoAssignee": {
							"modelConfig": {
								"path": "TasksListDS.EmpoAssignee"
							}
						},
						"TasksListDS_EmpoDueDate": {
							"modelConfig": {
								"path": "TasksListDS.EmpoDueDate"
							}
						},
						"TasksListDS_EmpoStatus": {
							"modelConfig": {
								"path": "TasksListDS.EmpoStatus"
							}
						},
						"TasksListDS_EmpoStage": {
							"modelConfig": {
								"path": "TasksListDS.EmpoStage"
							}
						},
						"TasksListDS_Id": {
							"modelConfig": {
								"path": "TasksListDS.Id"
							}
						}
					}
				}
			},
			"PDS_EmpoTeam_bxr09df": {
				"modelConfig": {
					"path": "PDS.EmpoTeam"
				}
			},
			"PDS_EmpoTeam_bxr09df_List": {
				"isCollection": true,
				"modelConfig": {
					"sortingConfig": {
						"default": [
							{
								"columnName": "Name",
								"direction": "asc"
							}
						]
					}
				}
			},
			"PDS_EmpoRole_hss5ige": {
				"modelConfig": {
					"path": "PDS.EmpoRole"
				}
			},
			"PDS_EmpoPhoto_rt5edbd": {
				"modelConfig": {
					"path": "PDS.EmpoPhoto"
				}
			},
			"FileList_lwebd7m": {
				"isCollection": true,
				"modelConfig": {
					"path": "FileList_lwebd7mDS",
					"sortingConfig": {
						"default": [
							{
								"columnName": "CreatedOn",
								"direction": "desc"
							}
						]
					},
					"filterAttributes": [
						{
							"name": "GridDetailSearchFilter_j8qj4sa_FileList_lwebd7m",
							"loadOnChange": true
						}
					]
				},
				"viewModelConfig": {
					"attributes": {
						"FileList_lwebd7mDS_Name": {
							"modelConfig": {
								"path": "FileList_lwebd7mDS.Name"
							}
						},
						"FileList_lwebd7mDS_CreatedOn": {
							"modelConfig": {
								"path": "FileList_lwebd7mDS.CreatedOn"
							}
						},
						"FileList_lwebd7mDS_CreatedBy": {
							"modelConfig": {
								"path": "FileList_lwebd7mDS.CreatedBy"
							}
						},
						"FileList_lwebd7mDS_Size": {
							"modelConfig": {
								"path": "FileList_lwebd7mDS.Size"
							}
						},
						"FileList_lwebd7mDS_Id": {
							"modelConfig": {
								"path": "FileList_lwebd7mDS.Id"
							}
						}
					}
				}
			},
			"GridDetail_8fmxllx": {
				"isCollection": true,
				"modelConfig": {
					"path": "GridDetail_8fmxllxDS",
					"filterAttributes": [
						{
							"name": "GridDetailSearchFilter_ru721jm_GridDetail_8fmxllx",
							"loadOnChange": true
						}
					]
				},
				"viewModelConfig": {
					"attributes": {
						"GridDetail_8fmxllxDS_EmpoName": {
							"modelConfig": {
								"path": "GridDetail_8fmxllxDS.EmpoName"
							}
						},
						"GridDetail_8fmxllxDS_EmpoItemType": {
							"modelConfig": {
								"path": "GridDetail_8fmxllxDS.EmpoItemType"
							}
						},
						"GridDetail_8fmxllxDS_EmpoSerialNumber": {
							"modelConfig": {
								"path": "GridDetail_8fmxllxDS.EmpoSerialNumber"
							}
						},
						"GridDetail_8fmxllxDS_EmpoAssignedDate": {
							"modelConfig": {
								"path": "GridDetail_8fmxllxDS.EmpoAssignedDate"
							}
						},
						"GridDetail_8fmxllxDS_EmpoItemStatus": {
							"modelConfig": {
								"path": "GridDetail_8fmxllxDS.EmpoItemStatus"
							}
						},
						"GridDetail_8fmxllxDS_Id": {
							"modelConfig": {
								"path": "GridDetail_8fmxllxDS.Id"
							}
						}
					}
				}
			},
			"PDS_EmpoLineManager_m1xx8pz": {
				"modelConfig": {
					"path": "PDS.EmpoLineManager"
				}
			},
			"PDS_EmpoLineManager_m1xx8pz_List": {
				"isCollection": true,
				"modelConfig": {
					"sortingConfig": {
						"default": [
							{
								"columnName": "Name",
								"direction": "asc"
							}
						]
					}
				}
			},
			"PDS_EmpoCompany_f0s9nz1": {
				"modelConfig": {
					"path": "PDS.EmpoCompany"
				}
			},
			"PDS_EmpoCompany_f0s9nz1_List": {
				"isCollection": true,
				"modelConfig": {
					"sortingConfig": {
						"default": [
							{
								"columnName": "EmpoName",
								"direction": "asc"
							}
						]
					}
				}
			},
			"TaskDonutStyle": {},
			"TaskDonutTotalCaption": {},
			"TaskLegendCompletedCaption": {},
			"TaskLegendOverdueCaption": {},
			"TaskLegendOpenCaption": {},
			"ProgressCaption": {},
			"ProgressFillStyle": {},
			"ProgressSubCaption": {}
		}
	},
	{
		"operation": "merge",
		"path": [
			"attributes",
			"Id",
			"modelConfig"
		],
		"values": {
			"path": "PDS.Id"
		}
	}
]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"BankListDS": [
							{
								"attributePath": "EmpoOnboarding",
								"relationPath": "PDS.Id"
							}
						],
						"DocumentsListDS": [
							{
								"attributePath": "EmpoOnboarding",
								"relationPath": "PDS.Id"
							}
						],
						"TasksListDS": [
							{
								"attributePath": "EmpoOnboarding",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "EmpoOnboarding"
						},
						"scope": "page"
					},
					"BankListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "EmpoOnbBankInfo",
							"attributes": {
								"EmpoName": {
									"path": "EmpoName"
								},
								"EmpoAccountTitle": {
									"path": "EmpoAccountTitle"
								},
								"EmpoAccountNumber": {
									"path": "EmpoAccountNumber"
								},
								"EmpoIban": {
									"path": "EmpoIban"
								},
								"EmpoTaxNumber": {
									"path": "EmpoTaxNumber"
								},
								"EmpoIsPrimary": {
									"path": "EmpoIsPrimary"
								}
							}
						}
					},
					"DocumentsListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "EmpoOnbDocument",
							"attributes": {
								"EmpoName": {
									"path": "EmpoName"
								},
								"EmpoDocumentType": {
									"path": "EmpoDocumentType"
								},
								"EmpoStatus": {
									"path": "EmpoStatus"
								},
								"EmpoUploadDate": {
									"path": "EmpoUploadDate"
								},
								"EmpoVerifiedBy": {
									"path": "EmpoVerifiedBy"
								},
								"EmpoNotes": {
									"path": "EmpoNotes"
								}
							}
						}
					},
					"TasksListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "EmpoOnbTask",
							"attributes": {
								"EmpoName": {
									"path": "EmpoName"
								},
								"EmpoDepartment": {
									"path": "EmpoDepartment"
								},
								"EmpoAssignee": {
									"path": "EmpoAssignee"
								},
								"EmpoDueDate": {
									"path": "EmpoDueDate"
								},
								"EmpoStatus": {
									"path": "EmpoStatus"
								},
								"EmpoStage": {
									"path": "EmpoStage"
								}
							}
						}
					},
					"FileList_lwebd7mDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysFile",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"Size": {
									"path": "Size"
								}
							}
						}
					},
					"GridDetail_8fmxllxDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "EmpoEmployeeInventory",
							"attributes": {
								"EmpoName": {
									"path": "EmpoName"
								},
								"EmpoItemType": {
									"path": "EmpoItemType"
								},
								"EmpoSerialNumber": {
									"path": "EmpoSerialNumber"
								},
								"EmpoAssignedDate": {
									"path": "EmpoAssignedDate"
								},
								"EmpoItemStatus": {
									"path": "EmpoItemStatus"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
	{
		request: "crt.HandleViewModelAttributeChangeRequest",
		handler: async (request, next) => {
			const watched = ["PDS_EmpoTaskTotalCount", "PDS_EmpoTaskCompletedCount", "PDS_EmpoTaskOverdueCount", "PDS_EmpoProgressPercent"];
			if (watched.indexOf(request.attributeName) >= 0) {
				const ctx = request.$context;
				const num = (v) => { const n = Number(v); return isFinite(n) && n > 0 ? n : 0; };
				const total = num(await ctx.PDS_EmpoTaskTotalCount);
				const completed = Math.min(num(await ctx.PDS_EmpoTaskCompletedCount), total);
				const overdue = Math.min(num(await ctx.PDS_EmpoTaskOverdueCount), Math.max(total - completed, 0));
				const open = Math.max(total - completed - overdue, 0);
				const pct = (x) => total > 0 ? (x * 100 / total) : 0;
				const c1 = pct(completed), c2 = c1 + pct(overdue);
				const gradient = total > 0
					? "conic-gradient(#2E9E5B 0% " + c1 + "%, #E0463A " + c1 + "% " + c2 + "%, #4A7FD4 " + c2 + "% 100%)"
					: "conic-gradient(#E4E7EC 0% 100%)";
				ctx.TaskDonutStyle = { "width": "116px", "height": "116px", "min-width": "116px", "border-radius": "50%", "background": gradient };
				ctx.TaskDonutTotalCaption = String(total);
				ctx.TaskLegendCompletedCaption = "Completed: " + completed;
				ctx.TaskLegendOverdueCaption = "Overdue: " + overdue;
				ctx.TaskLegendOpenCaption = "Open (on track): " + open;
				let progress = Number(await ctx.PDS_EmpoProgressPercent);
				if (!isFinite(progress)) { progress = 0; }
				progress = Math.max(0, Math.min(100, Math.round(progress)));
				const barColor = progress >= 100 ? "#2E9E5B" : (overdue > 0 ? "#F0A030" : "#4A7FD4");
				ctx.ProgressFillStyle = { "width": progress + "%", "height": "100%", "min-width": progress > 0 ? "4px" : "0", "border-radius": "7px", "background-color": barColor, "transition": "width 0.4s ease" };
				ctx.ProgressCaption = progress + "%";
				ctx.ProgressSubCaption = completed + " of " + total + " tasks completed";
			}
			return next?.handle(request);
		}
	}
]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});