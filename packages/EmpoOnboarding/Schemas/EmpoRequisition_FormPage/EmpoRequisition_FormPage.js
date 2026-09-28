define("EmpoRequisition_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
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
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "EmpoRequisition"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "b71fcb7f-cf61-461f-802a-d29708dc090a",
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
				"operation": "insert",
				"name": "ComboBox_tj5on3q",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoStatus_eyrsyn8",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_EmpoStatus_eyrsyn8"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_qf1dhx4",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_qf1dhx4_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_tj5on3q",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_yn7cbmc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoCompany_g2sfo8b",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_EmpoCompany_g2sfo8b",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_r9ygtwb",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_r9ygtwb_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_yn7cbmc",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_yg16lkl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoRequestedBy_m86wl2q",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_EmpoRequestedBy_m86wl2q",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_36j2asq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_36j2asq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_yg16lkl",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_oxjwu1i",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoDepartment_z7ges5k",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_EmpoDepartment_z7ges5k",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_1i2oyub",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_1i2oyub_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_oxjwu1i",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_y1xz5fu",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoTeam_xbjbxst",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_EmpoTeam_xbjbxst",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_3evwdou",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_3evwdou_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_y1xz5fu",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_e5e2jxi",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoJobTitle_3josvn5",
					"control": "$PDS_EmpoJobTitle_3josvn5",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_ul55s1f",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoEmploymentType_9j42oa3",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_EmpoEmploymentType_9j42oa3",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_9zt9k7y",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_9zt9k7y_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ul55s1f",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_t50nmgy",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_EmpoPositions_nlhjkns",
					"control": "$PDS_EmpoPositions_nlhjkns",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_7m5wvrn",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoReason_v9l57p4",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_EmpoReason_v9l57p4",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_ejqy47e",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ejqy47e_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_7m5wvrn",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_fftr1et",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoReplacingEmployee_ybcv1tl",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_EmpoReplacingEmployee_ybcv1tl",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_3g30bs4",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_3g30bs4_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_fftr1et",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_cc5yo4f",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoHiringManager_iq5rmlq",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_EmpoHiringManager_iq5rmlq",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_l73ufxv",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_l73ufxv_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_cc5yo4f",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_on89pdo",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_EmpoTargetStartDate_xmlvtif",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_EmpoTargetStartDate_xmlvtif"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Input_458jy57",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoSalaryRange_bunk54u",
					"control": "$PDS_EmpoSalaryRange_bunk54u",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "RichTextEditor_xi663c3",
				"values": {
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.PDS_EmpoJobDescription_wozzqq5",
					"control": "$PDS_EmpoJobDescription_wozzqq5",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": true,
					"filesStorage": {
						"masterRecordColumnValue": "$Id",
						"entitySchemaName": "SysFile",
						"recordColumnName": "RecordId"
					}
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "Checkbox_d218743",
				"values": {
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_EmpoBudgeted_uxxoi2v",
					"ariaLabel": "",
					"labelPosition": "auto",
					"tooltip": "",
					"control": "$PDS_EmpoBudgeted_uxxoi2v"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "RichTextEditor_13dc98v",
				"values": {
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.PDS_EmpoRequirements_xyip365",
					"control": "$PDS_EmpoRequirements_xyip365",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": true,
					"filesStorage": {
						"masterRecordColumnValue": "$Id",
						"entitySchemaName": "SysFile",
						"recordColumnName": "RecordId",
						"recordEntitySchemaName": null
					}
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "TabContainer_d343zn6",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_d343zn6_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_7abd78k",
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
				"parentName": "TabContainer_d343zn6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_8lv3scq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoDecisionBy_844z16w",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_EmpoDecisionBy_844z16w",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_7abd78k",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_46022b0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_46022b0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_8lv3scq",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_tq68myj",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_EmpoDecisionDate_nwqd0xu",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$PDS_EmpoDecisionDate_nwqd0xu"
				},
				"parentName": "GridContainer_7abd78k",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_owrtbi4",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoDecisionComment_c943b61",
					"control": "$PDS_EmpoDecisionComment_c943b61",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "TabContainer_d343zn6",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_iujiwqx",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_iujiwqx_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_i1hlnwd",
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
				"parentName": "TabContainer_iujiwqx",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_dg3ru45",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoHiredCandidate_rnrhybn",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_EmpoHiredCandidate_rnrhybn",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_i1hlnwd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_4u49t20",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4u49t20_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_dg3ru45",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_ots2k91",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_EmpoActualStartDate_xfgkx9e",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_EmpoActualStartDate_xfgkx9e"
				},
				"parentName": "GridContainer_i1hlnwd",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_avxd3d6",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoOnboarding_e89azv1",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_EmpoOnboarding_e89azv1",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "TabContainer_iujiwqx",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_enb3tmh",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_enb3tmh_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_avxd3d6",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_2opn9wa",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_2opn9wa_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_f0n5s5b",
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
				"parentName": "TabContainer_2opn9wa",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_3jdxjwp",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_3jdxjwp_title)#",
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
				"parentName": "TabContainer_2opn9wa",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_uewsrai",
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
				"parentName": "ExpansionPanel_3jdxjwp",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_uf79ss0",
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
				"parentName": "GridContainer_uewsrai",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_jby4x4c",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_jby4x4c_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "EmpoJobAdvertisement"
						}
					}
				},
				"parentName": "FlexContainer_uf79ss0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_aj5nmoe",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_aj5nmoe_caption)#",
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
							"dataSourceName": "GridDetail_5nf3fgqDS"
						}
					}
				},
				"parentName": "FlexContainer_uf79ss0",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_5od242d",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_5od242d_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_uf79ss0",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_twhf09s",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_twhf09s_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_5nf3fgq"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_5od242d",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_8y5hq61",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_8y5hq61_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "EmpoJobAdvertisement"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_5od242d",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_4ctabi0",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_4ctabi0_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_4ctabi0_GridDetail_5nf3fgq",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_5nf3fgq"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_4ctabi0_SearchValue",
							"GridDetailSearchFilter_4ctabi0_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_uf79ss0",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_6rephh7",
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
				"parentName": "ExpansionPanel_3jdxjwp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_5nf3fgq",
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
					"items": "$GridDetail_5nf3fgq",
					"primaryColumnName": "GridDetail_5nf3fgqDS_Id",
					"columns": [
						{
							"id": "f7ec1ec1-fb29-4034-4002-2d51db585712",
							"code": "GridDetail_5nf3fgqDS_EmpoName",
							"caption": "#ResourceString(GridDetail_5nf3fgqDS_EmpoName)#",
							"dataValueType": 28
						},
						{
							"id": "a4ffb8bc-ed92-ca0e-88fc-d1c445480baf",
							"code": "GridDetail_5nf3fgqDS_EmpoChannel",
							"caption": "#ResourceString(GridDetail_5nf3fgqDS_EmpoChannel)#",
							"dataValueType": 10
						},
						{
							"id": "4b54a278-f2a0-b754-f32e-a76042f0e5ef",
							"code": "GridDetail_5nf3fgqDS_EmpoAdLink",
							"caption": "#ResourceString(GridDetail_5nf3fgqDS_EmpoAdLink)#",
							"dataValueType": 44
						},
						{
							"id": "5d7e9595-6578-9e5e-72a4-ca7454ff0f08",
							"code": "GridDetail_5nf3fgqDS_EmpoApplicants",
							"caption": "#ResourceString(GridDetail_5nf3fgqDS_EmpoApplicants)#",
							"dataValueType": 4
						},
						{
							"id": "75df1230-dbdb-ef44-0de2-73b21248fa00",
							"code": "GridDetail_5nf3fgqDS_EmpoClosingDate",
							"caption": "#ResourceString(GridDetail_5nf3fgqDS_EmpoClosingDate)#",
							"dataValueType": 8
						},
						{
							"id": "ff585ad0-1b12-b069-f28b-f8dd6ac178b6",
							"code": "GridDetail_5nf3fgqDS_EmpoPostingDate",
							"caption": "#ResourceString(GridDetail_5nf3fgqDS_EmpoPostingDate)#",
							"dataValueType": 8
						},
						{
							"id": "f497b1b9-b407-6d24-6582-295aa7e07d20",
							"code": "GridDetail_5nf3fgqDS_EmpoAdStatus",
							"caption": "#ResourceString(GridDetail_5nf3fgqDS_EmpoAdStatus)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_6rephh7",
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
					"PDS_EmpoStatus_eyrsyn8": {
						"modelConfig": {
							"path": "PDS.EmpoStatus"
						}
					},
					"PDS_EmpoStatus_eyrsyn8_List": {
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
					"PDS_EmpoCompany_g2sfo8b": {
						"modelConfig": {
							"path": "PDS.EmpoCompany"
						}
					},
					"PDS_EmpoCompany_g2sfo8b_List": {
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
					"PDS_EmpoRequestedBy_m86wl2q": {
						"modelConfig": {
							"path": "PDS.EmpoRequestedBy"
						}
					},
					"PDS_EmpoRequestedBy_m86wl2q_List": {
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
					"PDS_EmpoDepartment_z7ges5k": {
						"modelConfig": {
							"path": "PDS.EmpoDepartment"
						}
					},
					"PDS_EmpoDepartment_z7ges5k_List": {
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
					"PDS_EmpoTeam_xbjbxst": {
						"modelConfig": {
							"path": "PDS.EmpoTeam"
						}
					},
					"PDS_EmpoTeam_xbjbxst_List": {
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
					"PDS_EmpoJobTitle_3josvn5": {
						"modelConfig": {
							"path": "PDS.EmpoJobTitle"
						}
					},
					"PDS_EmpoPositions_nlhjkns": {
						"modelConfig": {
							"path": "PDS.EmpoPositions"
						}
					},
					"PDS_EmpoEmploymentType_9j42oa3": {
						"modelConfig": {
							"path": "PDS.EmpoEmploymentType"
						}
					},
					"PDS_EmpoEmploymentType_9j42oa3_List": {
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
					"PDS_EmpoReason_v9l57p4": {
						"modelConfig": {
							"path": "PDS.EmpoReason"
						}
					},
					"PDS_EmpoReason_v9l57p4_List": {
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
					"PDS_EmpoReplacingEmployee_ybcv1tl": {
						"modelConfig": {
							"path": "PDS.EmpoReplacingEmployee"
						}
					},
					"PDS_EmpoReplacingEmployee_ybcv1tl_List": {
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
					"PDS_EmpoHiringManager_iq5rmlq": {
						"modelConfig": {
							"path": "PDS.EmpoHiringManager"
						}
					},
					"PDS_EmpoHiringManager_iq5rmlq_List": {
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
					"PDS_EmpoTargetStartDate_xmlvtif": {
						"modelConfig": {
							"path": "PDS.EmpoTargetStartDate"
						}
					},
					"PDS_EmpoSalaryRange_bunk54u": {
						"modelConfig": {
							"path": "PDS.EmpoSalaryRange"
						}
					},
					"PDS_EmpoBudgeted_uxxoi2v": {
						"modelConfig": {
							"path": "PDS.EmpoBudgeted"
						}
					},
					"PDS_EmpoJobDescription_wozzqq5": {
						"modelConfig": {
							"path": "PDS.EmpoJobDescription"
						}
					},
					"PDS_EmpoRequirements_xyip365": {
						"modelConfig": {
							"path": "PDS.EmpoRequirements"
						}
					},
					"PDS_EmpoDecisionBy_844z16w": {
						"modelConfig": {
							"path": "PDS.EmpoDecisionBy"
						}
					},
					"PDS_EmpoDecisionBy_844z16w_List": {
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
					"PDS_EmpoDecisionDate_nwqd0xu": {
						"modelConfig": {
							"path": "PDS.EmpoDecisionDate"
						}
					},
					"PDS_EmpoDecisionComment_c943b61": {
						"modelConfig": {
							"path": "PDS.EmpoDecisionComment"
						}
					},
					"PDS_EmpoHiredCandidate_rnrhybn": {
						"modelConfig": {
							"path": "PDS.EmpoHiredCandidate"
						}
					},
					"PDS_EmpoHiredCandidate_rnrhybn_List": {
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
					"PDS_EmpoActualStartDate_xfgkx9e": {
						"modelConfig": {
							"path": "PDS.EmpoActualStartDate"
						}
					},
					"PDS_EmpoOnboarding_e89azv1": {
						"modelConfig": {
							"path": "PDS.EmpoOnboarding"
						}
					},
					"PDS_EmpoOnboarding_e89azv1_List": {
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
					"GridDetail_5nf3fgq": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_5nf3fgqDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_4ctabi0_GridDetail_5nf3fgq",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_5nf3fgqDS_EmpoName": {
									"modelConfig": {
										"path": "GridDetail_5nf3fgqDS.EmpoName"
									}
								},
								"GridDetail_5nf3fgqDS_EmpoChannel": {
									"modelConfig": {
										"path": "GridDetail_5nf3fgqDS.EmpoChannel"
									}
								},
								"GridDetail_5nf3fgqDS_EmpoAdLink": {
									"modelConfig": {
										"path": "GridDetail_5nf3fgqDS.EmpoAdLink"
									}
								},
								"GridDetail_5nf3fgqDS_EmpoApplicants": {
									"modelConfig": {
										"path": "GridDetail_5nf3fgqDS.EmpoApplicants"
									}
								},
								"GridDetail_5nf3fgqDS_EmpoClosingDate": {
									"modelConfig": {
										"path": "GridDetail_5nf3fgqDS.EmpoClosingDate"
									}
								},
								"GridDetail_5nf3fgqDS_EmpoPostingDate": {
									"modelConfig": {
										"path": "GridDetail_5nf3fgqDS.EmpoPostingDate"
									}
								},
								"GridDetail_5nf3fgqDS_EmpoAdStatus": {
									"modelConfig": {
										"path": "GridDetail_5nf3fgqDS.EmpoAdStatus"
									}
								},
								"GridDetail_5nf3fgqDS_Id": {
									"modelConfig": {
										"path": "GridDetail_5nf3fgqDS.Id"
									}
								}
							}
						}
					}
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
						"GridDetail_5nf3fgqDS": [
							{
								"attributePath": "EmpoRequisition",
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
							"entitySchemaName": "EmpoRequisition"
						},
						"scope": "page"
					},
					"GridDetail_5nf3fgqDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "EmpoJobAdvertisement",
							"attributes": {
								"EmpoName": {
									"path": "EmpoName"
								},
								"EmpoChannel": {
									"path": "EmpoChannel"
								},
								"EmpoAdLink": {
									"path": "EmpoAdLink"
								},
								"EmpoApplicants": {
									"path": "EmpoApplicants"
								},
								"EmpoClosingDate": {
									"path": "EmpoClosingDate"
								},
								"EmpoPostingDate": {
									"path": "EmpoPostingDate"
								},
								"EmpoAdStatus": {
									"path": "EmpoAdStatus"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});