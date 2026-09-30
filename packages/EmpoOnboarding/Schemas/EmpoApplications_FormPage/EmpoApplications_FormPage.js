define("EmpoApplications_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "EmpoApplication"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "d32ded2b-6aaa-4d40-bef5-a548e65b5b8b",
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
				"name": "F_EmpoStage",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoStage",
					"control": "$PDS_EmpoStage",
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
				"name": "F_EmpoJobAdvertisement",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoJobAdvertisement",
					"control": "$PDS_EmpoJobAdvertisement",
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
				"name": "F_EmpoRequisition",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoRequisition",
					"control": "$PDS_EmpoRequisition",
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
				"name": "F_EmpoCompany",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoCompany",
					"control": "$PDS_EmpoCompany",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"ariaLabel": "",
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
				"name": "F_EmpoRecruiter",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoRecruiter",
					"control": "$PDS_EmpoRecruiter",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"ariaLabel": "",
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
				"name": "F_EmpoAIScore",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_EmpoAIScore",
					"control": "$PDS_EmpoAIScore",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
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
				"operation": "insert",
				"name": "F_EmpoAIRecommendation",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoAIRecommendation",
					"control": "$PDS_EmpoAIRecommendation",
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
						"row": 9,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Grid_Inquiry",
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
				"name": "F_EmpoSource",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoSource",
					"control": "$PDS_EmpoSource",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"ariaLabel": "",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_Inquiry",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "F_EmpoInquiryDate",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_EmpoInquiryDate",
					"control": "$PDS_EmpoInquiryDate",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"pickerType": "datetime",
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_Inquiry",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "F_EmpoAcknowledged",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_EmpoAcknowledged",
					"control": "$PDS_EmpoAcknowledged",
					"labelPosition": "auto",
					"tooltip": "",
					"ariaLabel": "",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_Inquiry",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "F_EmpoRejectionReason",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoRejectionReason",
					"control": "$PDS_EmpoRejectionReason",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"multiline": false,
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_Inquiry",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "F_EmpoInquiryMessage",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoInquiryMessage",
					"control": "$PDS_EmpoInquiryMessage",
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
				"parentName": "Grid_Inquiry",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "F_EmpoOnboarding",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoOnboarding",
					"control": "$PDS_EmpoOnboarding",
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
				"parentName": "Grid_Inquiry",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_da51fjf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_da51fjf_title)#",
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
				"parentName": "Grid_Inquiry",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "GridContainer_145geyc",
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
				"parentName": "ExpansionPanel_da51fjf",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_zqzk6wa",
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
				"parentName": "GridContainer_145geyc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_tfakofv",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_tfakofv_caption)#",
					"icon": "upload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.UploadFileRequest",
						"params": {
							"viewElementName": "FileList_ymj2wmi"
						}
					}
				},
				"parentName": "FlexContainer_zqzk6wa",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_rxrk5zo",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_rxrk5zo_caption)#",
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
							"dataSourceName": "FileList_ymj2wmiDS"
						}
					}
				},
				"parentName": "FlexContainer_zqzk6wa",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_rmfh5o0",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_rmfh5o0_placeholder)#",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_rmfh5o0_FileList_ymj2wmi",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"FileList_ymj2wmi"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_rmfh5o0_SearchValue",
							"GridDetailSearchFilter_rmfh5o0_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_zqzk6wa",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_dnl9c3i",
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
				"parentName": "ExpansionPanel_da51fjf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FileList_ymj2wmi",
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
					"items": "$FileList_ymj2wmi",
					"primaryColumnName": "FileList_ymj2wmiDS_Id",
					"columns": [
						{
							"id": "bc37e61b-09a8-b18e-58fd-27f2f0fefc99",
							"code": "FileList_ymj2wmiDS_Name",
							"caption": "#ResourceString(FileList_ymj2wmiDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "c87ee7af-29e3-0f45-bc43-ac7342a4f215",
							"code": "FileList_ymj2wmiDS_CreatedOn",
							"caption": "#ResourceString(FileList_ymj2wmiDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "af82492d-d61a-8591-9b2f-fcbc19b21961",
							"code": "FileList_ymj2wmiDS_CreatedBy",
							"caption": "#ResourceString(FileList_ymj2wmiDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "4d41813d-bbdc-1f4a-1fd2-2bdbaa71bbda",
							"code": "FileList_ymj2wmiDS_Size",
							"caption": "#ResourceString(FileList_ymj2wmiDS_Size)#",
							"dataValueType": 4
						}
					]
				},
				"parentName": "GridContainer_dnl9c3i",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab_Prescreen",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(Tab_Prescreen_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Grid_Prescreen",
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
				"parentName": "Tab_Prescreen",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "F_EmpoPrescreenResult",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoPrescreenResult",
					"control": "$PDS_EmpoPrescreenResult",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"ariaLabel": "",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_Prescreen",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "F_EmpoPrescreenDate",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_EmpoPrescreenDate",
					"control": "$PDS_EmpoPrescreenDate",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"pickerType": "datetime",
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_Prescreen",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "F_EmpoPrescreenedBy",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoPrescreenedBy",
					"control": "$PDS_EmpoPrescreenedBy",
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
				"parentName": "Grid_Prescreen",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "F_EmpoMeetsMinRequirements",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_EmpoMeetsMinRequirements",
					"control": "$PDS_EmpoMeetsMinRequirements",
					"labelPosition": "auto",
					"tooltip": "",
					"ariaLabel": "",
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_Prescreen",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "F_EmpoWorkAuthorized",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_EmpoWorkAuthorized",
					"control": "$PDS_EmpoWorkAuthorized",
					"labelPosition": "auto",
					"tooltip": "",
					"ariaLabel": "",
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_Prescreen",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "F_EmpoWillingToRelocate",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_EmpoWillingToRelocate",
					"control": "$PDS_EmpoWillingToRelocate",
					"labelPosition": "auto",
					"tooltip": "",
					"ariaLabel": "",
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_Prescreen",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "F_EmpoExpectedSalary",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoExpectedSalary",
					"control": "$PDS_EmpoExpectedSalary",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"multiline": false,
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_Prescreen",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "F_EmpoNoticePeriodDays",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_EmpoNoticePeriodDays",
					"control": "$PDS_EmpoNoticePeriodDays",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_Prescreen",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "F_EmpoAvailableFrom",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_EmpoAvailableFrom",
					"control": "$PDS_EmpoAvailableFrom",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"pickerType": "date",
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_Prescreen",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "F_EmpoPrescreenNotes",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoPrescreenNotes",
					"control": "$PDS_EmpoPrescreenNotes",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"multiline": true,
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 2,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_Prescreen",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "Tab_AIEval",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(Tab_AIEval_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Grid_AIEval",
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
				"parentName": "Tab_AIEval",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "F_EmpoAIScore_GridAIEval",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_EmpoAIScore",
					"control": "$PDS_EmpoAIScore",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_AIEval",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "F_EmpoAIRecommendation_GridAIEval",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoAIRecommendation",
					"control": "$PDS_EmpoAIRecommendation",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"ariaLabel": "",
					"readonly": true,
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_AIEval",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "F_EmpoAIEvaluatedOn",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_EmpoAIEvaluatedOn",
					"control": "$PDS_EmpoAIEvaluatedOn",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"pickerType": "datetime",
					"readonly": true,
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_AIEval",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "F_EmpoAISummary",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoAISummary",
					"control": "$PDS_EmpoAISummary",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"multiline": true,
					"readonly": true,
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_AIEval",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "F_EmpoAIStrengths",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoAIStrengths",
					"control": "$PDS_EmpoAIStrengths",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"multiline": true,
					"readonly": true,
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_AIEval",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "F_EmpoAIConcerns",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoAIConcerns",
					"control": "$PDS_EmpoAIConcerns",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"multiline": true,
					"readonly": true,
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 2,
						"rowSpan": 1
					}
				},
				"parentName": "Grid_AIEval",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tab_Interviews",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(Tab_Interviews_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Grid_Interviews",
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
				"parentName": "Tab_Interviews",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DetailTools_Interviews",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					},
					"justifyContent": "end"
				},
				"parentName": "Grid_Interviews",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Detail_Interviews_Add",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Detail_Interviews_Add_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "left-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "EmpoInterview",
							"defaultValues": [
								{
									"attributeName": "EmpoApplication",
									"value": "$Id"
								}
							]
						}
					}
				},
				"parentName": "DetailTools_Interviews",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Detail_Interviews_Refresh",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Detail_Interviews_Refresh_caption)#",
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
							"dataSourceName": "Detail_InterviewsDS"
						}
					}
				},
				"parentName": "DetailTools_Interviews",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Detail_Interviews",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 2,
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
					"items": "$Detail_Interviews",
					"primaryColumnName": "Detail_InterviewsDS_Id",
					"columns": [
						{
							"id": "f8c661ea-e293-4777-b950-e8fe21aaf136",
							"code": "Detail_InterviewsDS_EmpoName",
							"caption": "Subject",
							"dataValueType": 28
						},
						{
							"id": "7e52ad76-f3ad-445b-a2d9-3b140da29d2c",
							"code": "Detail_InterviewsDS_EmpoInterviewType",
							"caption": "Type",
							"dataValueType": 10
						},
						{
							"id": "18356100-48a3-4103-8aec-04ac377aecf9",
							"code": "Detail_InterviewsDS_EmpoStartDate",
							"caption": "Start",
							"dataValueType": 7
						},
						{
							"id": "033e8088-6fc7-40be-bfbe-4d435e712d76",
							"code": "Detail_InterviewsDS_EmpoInterviewer",
							"caption": "Interviewer",
							"dataValueType": 10
						},
						{
							"id": "3d8d7646-cf9a-4912-a9a0-93ba7e74bf8b",
							"code": "Detail_InterviewsDS_EmpoStatus",
							"caption": "Status",
							"dataValueType": 10
						},
						{
							"id": "c9334aba-5ebb-40a4-900a-3d8b4b848ebf",
							"code": "Detail_InterviewsDS_EmpoResult",
							"caption": "Result",
							"dataValueType": 10
						},
						{
							"id": "ed33b663-3c4f-4863-96b6-205d90aa4149",
							"code": "Detail_InterviewsDS_EmpoRating",
							"caption": "Rating",
							"dataValueType": 4
						}
					]
				},
				"parentName": "Grid_Interviews",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab_BgCheck",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(Tab_BgCheck_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Grid_BgCheck",
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
				"parentName": "Tab_BgCheck",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "F_EmpoBgCheckStatus",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoBgCheckStatus",
					"control": "$PDS_EmpoBgCheckStatus",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"isAddAllowed": false,
					"showValueAsLink": true,
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_BgCheck",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "F_EmpoBgCheckAssignedTo",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoBgCheckAssignedTo",
					"control": "$PDS_EmpoBgCheckAssignedTo",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"isAddAllowed": false,
					"showValueAsLink": true,
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_BgCheck",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "F_EmpoBgCheckProvider",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoBgCheckProvider",
					"control": "$PDS_EmpoBgCheckProvider",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"placeholder": "",
					"multiline": false,
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_BgCheck",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "F_EmpoBgCheckDueDate",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_EmpoBgCheckDueDate",
					"control": "$PDS_EmpoBgCheckDueDate",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"placeholder": "",
					"pickerType": "date",
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_BgCheck",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "F_EmpoBgCheckCompletedOn",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_EmpoBgCheckCompletedOn",
					"control": "$PDS_EmpoBgCheckCompletedOn",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"placeholder": "",
					"pickerType": "datetime",
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_BgCheck",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "F_EmpoBgIdentityVerified",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_EmpoBgIdentityVerified",
					"control": "$PDS_EmpoBgIdentityVerified",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_BgCheck",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "F_EmpoBgEducationVerified",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_EmpoBgEducationVerified",
					"control": "$PDS_EmpoBgEducationVerified",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_BgCheck",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "F_EmpoBgEmploymentVerified",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_EmpoBgEmploymentVerified",
					"control": "$PDS_EmpoBgEmploymentVerified",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_BgCheck",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "F_EmpoBgCriminalRecordCleared",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_EmpoBgCriminalRecordCleared",
					"control": "$PDS_EmpoBgCriminalRecordCleared",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 2,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_BgCheck",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "F_EmpoBgReferencesChecked",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_EmpoBgReferencesChecked",
					"control": "$PDS_EmpoBgReferencesChecked",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_BgCheck",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "F_EmpoBgCheckResult",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoBgCheckResult",
					"control": "$PDS_EmpoBgCheckResult",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 2,
						"rowSpan": 1
					},
					"placeholder": "",
					"multiline": true,
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_BgCheck",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Tab_Offer",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(Tab_Offer_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Grid_Offer",
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
				"parentName": "Tab_Offer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "F_EmpoOfferStatus",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoOfferStatus",
					"control": "$PDS_EmpoOfferStatus",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"isAddAllowed": false,
					"showValueAsLink": true,
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_Offer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "F_EmpoOfferApprovedBy",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmpoOfferApprovedBy",
					"control": "$PDS_EmpoOfferApprovedBy",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"isAddAllowed": false,
					"showValueAsLink": true,
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_Offer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "F_EmpoOfferJobTitle",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoOfferJobTitle",
					"control": "$PDS_EmpoOfferJobTitle",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"placeholder": "",
					"multiline": false,
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_Offer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "F_EmpoOfferedSalary",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoOfferedSalary",
					"control": "$PDS_EmpoOfferedSalary",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"placeholder": "",
					"multiline": false,
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_Offer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "F_EmpoOfferStartDate",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_EmpoOfferStartDate",
					"control": "$PDS_EmpoOfferStartDate",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"placeholder": "",
					"pickerType": "date",
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_Offer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "F_EmpoOfferResponseDue",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_EmpoOfferResponseDue",
					"control": "$PDS_EmpoOfferResponseDue",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"placeholder": "",
					"pickerType": "date",
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_Offer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "F_EmpoOfferSentOn",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_EmpoOfferSentOn",
					"control": "$PDS_EmpoOfferSentOn",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"placeholder": "",
					"pickerType": "datetime",
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_Offer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "F_EmpoOfferRespondedOn",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_EmpoOfferRespondedOn",
					"control": "$PDS_EmpoOfferRespondedOn",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"placeholder": "",
					"pickerType": "datetime",
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_Offer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "F_EmpoOfferDeclineReason",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoOfferDeclineReason",
					"control": "$PDS_EmpoOfferDeclineReason",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 2,
						"rowSpan": 1
					},
					"placeholder": "",
					"multiline": false,
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_Offer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "F_EmpoOfferLetter",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoOfferLetter",
					"control": "$PDS_EmpoOfferLetter",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 2,
						"rowSpan": 1
					},
					"placeholder": "",
					"multiline": true,
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_Offer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "F_EmpoOfferNotes",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoOfferNotes",
					"control": "$PDS_EmpoOfferNotes",
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 2,
						"rowSpan": 1
					},
					"placeholder": "",
					"multiline": true,
					"tooltip": "",
					"ariaLabel": ""
				},
				"parentName": "Grid_Offer",
				"propertyName": "items",
				"index": 10
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
					"PDS_EmpoCandidate": {
						"modelConfig": {
							"path": "PDS.EmpoCandidate"
						}
					},
					"PDS_EmpoStage": {
						"modelConfig": {
							"path": "PDS.EmpoStage"
						}
					},
					"PDS_EmpoJobAdvertisement": {
						"modelConfig": {
							"path": "PDS.EmpoJobAdvertisement"
						}
					},
					"PDS_EmpoRequisition": {
						"modelConfig": {
							"path": "PDS.EmpoRequisition"
						}
					},
					"PDS_EmpoCompany": {
						"modelConfig": {
							"path": "PDS.EmpoCompany"
						}
					},
					"PDS_EmpoRecruiter": {
						"modelConfig": {
							"path": "PDS.EmpoRecruiter"
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
					"PDS_EmpoSource": {
						"modelConfig": {
							"path": "PDS.EmpoSource"
						}
					},
					"PDS_EmpoInquiryDate": {
						"modelConfig": {
							"path": "PDS.EmpoInquiryDate"
						}
					},
					"PDS_EmpoAcknowledged": {
						"modelConfig": {
							"path": "PDS.EmpoAcknowledged"
						}
					},
					"PDS_EmpoRejectionReason": {
						"modelConfig": {
							"path": "PDS.EmpoRejectionReason"
						}
					},
					"PDS_EmpoInquiryMessage": {
						"modelConfig": {
							"path": "PDS.EmpoInquiryMessage"
						}
					},
					"PDS_EmpoOnboarding": {
						"modelConfig": {
							"path": "PDS.EmpoOnboarding"
						}
					},
					"PDS_EmpoPrescreenResult": {
						"modelConfig": {
							"path": "PDS.EmpoPrescreenResult"
						}
					},
					"PDS_EmpoPrescreenDate": {
						"modelConfig": {
							"path": "PDS.EmpoPrescreenDate"
						}
					},
					"PDS_EmpoPrescreenedBy": {
						"modelConfig": {
							"path": "PDS.EmpoPrescreenedBy"
						}
					},
					"PDS_EmpoMeetsMinRequirements": {
						"modelConfig": {
							"path": "PDS.EmpoMeetsMinRequirements"
						}
					},
					"PDS_EmpoWorkAuthorized": {
						"modelConfig": {
							"path": "PDS.EmpoWorkAuthorized"
						}
					},
					"PDS_EmpoWillingToRelocate": {
						"modelConfig": {
							"path": "PDS.EmpoWillingToRelocate"
						}
					},
					"PDS_EmpoExpectedSalary": {
						"modelConfig": {
							"path": "PDS.EmpoExpectedSalary"
						}
					},
					"PDS_EmpoNoticePeriodDays": {
						"modelConfig": {
							"path": "PDS.EmpoNoticePeriodDays"
						}
					},
					"PDS_EmpoAvailableFrom": {
						"modelConfig": {
							"path": "PDS.EmpoAvailableFrom"
						}
					},
					"PDS_EmpoPrescreenNotes": {
						"modelConfig": {
							"path": "PDS.EmpoPrescreenNotes"
						}
					},
					"PDS_EmpoAIEvaluatedOn": {
						"modelConfig": {
							"path": "PDS.EmpoAIEvaluatedOn"
						}
					},
					"PDS_EmpoAISummary": {
						"modelConfig": {
							"path": "PDS.EmpoAISummary"
						}
					},
					"PDS_EmpoAIStrengths": {
						"modelConfig": {
							"path": "PDS.EmpoAIStrengths"
						}
					},
					"PDS_EmpoAIConcerns": {
						"modelConfig": {
							"path": "PDS.EmpoAIConcerns"
						}
					},
					"Detail_Interviews": {
						"isCollection": true,
						"modelConfig": {
							"path": "Detail_InterviewsDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "EmpoStartDate"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"Detail_InterviewsDS_EmpoName": {
									"modelConfig": {
										"path": "Detail_InterviewsDS.EmpoName"
									}
								},
								"Detail_InterviewsDS_EmpoInterviewType": {
									"modelConfig": {
										"path": "Detail_InterviewsDS.EmpoInterviewType"
									}
								},
								"Detail_InterviewsDS_EmpoStartDate": {
									"modelConfig": {
										"path": "Detail_InterviewsDS.EmpoStartDate"
									}
								},
								"Detail_InterviewsDS_EmpoInterviewer": {
									"modelConfig": {
										"path": "Detail_InterviewsDS.EmpoInterviewer"
									}
								},
								"Detail_InterviewsDS_EmpoStatus": {
									"modelConfig": {
										"path": "Detail_InterviewsDS.EmpoStatus"
									}
								},
								"Detail_InterviewsDS_EmpoResult": {
									"modelConfig": {
										"path": "Detail_InterviewsDS.EmpoResult"
									}
								},
								"Detail_InterviewsDS_EmpoRating": {
									"modelConfig": {
										"path": "Detail_InterviewsDS.EmpoRating"
									}
								},
								"Detail_InterviewsDS_Id": {
									"modelConfig": {
										"path": "Detail_InterviewsDS.Id"
									}
								}
							}
						}
					},
					"PDS_EmpoBgCheckStatus": {
						"modelConfig": {
							"path": "PDS.EmpoBgCheckStatus"
						}
					},
					"PDS_EmpoBgCheckAssignedTo": {
						"modelConfig": {
							"path": "PDS.EmpoBgCheckAssignedTo"
						}
					},
					"PDS_EmpoBgCheckProvider": {
						"modelConfig": {
							"path": "PDS.EmpoBgCheckProvider"
						}
					},
					"PDS_EmpoBgCheckDueDate": {
						"modelConfig": {
							"path": "PDS.EmpoBgCheckDueDate"
						}
					},
					"PDS_EmpoBgCheckCompletedOn": {
						"modelConfig": {
							"path": "PDS.EmpoBgCheckCompletedOn"
						}
					},
					"PDS_EmpoBgIdentityVerified": {
						"modelConfig": {
							"path": "PDS.EmpoBgIdentityVerified"
						}
					},
					"PDS_EmpoBgEducationVerified": {
						"modelConfig": {
							"path": "PDS.EmpoBgEducationVerified"
						}
					},
					"PDS_EmpoBgEmploymentVerified": {
						"modelConfig": {
							"path": "PDS.EmpoBgEmploymentVerified"
						}
					},
					"PDS_EmpoBgCriminalRecordCleared": {
						"modelConfig": {
							"path": "PDS.EmpoBgCriminalRecordCleared"
						}
					},
					"PDS_EmpoBgReferencesChecked": {
						"modelConfig": {
							"path": "PDS.EmpoBgReferencesChecked"
						}
					},
					"PDS_EmpoBgCheckResult": {
						"modelConfig": {
							"path": "PDS.EmpoBgCheckResult"
						}
					},
					"PDS_EmpoOfferStatus": {
						"modelConfig": {
							"path": "PDS.EmpoOfferStatus"
						}
					},
					"PDS_EmpoOfferApprovedBy": {
						"modelConfig": {
							"path": "PDS.EmpoOfferApprovedBy"
						}
					},
					"PDS_EmpoOfferJobTitle": {
						"modelConfig": {
							"path": "PDS.EmpoOfferJobTitle"
						}
					},
					"PDS_EmpoOfferedSalary": {
						"modelConfig": {
							"path": "PDS.EmpoOfferedSalary"
						}
					},
					"PDS_EmpoOfferStartDate": {
						"modelConfig": {
							"path": "PDS.EmpoOfferStartDate"
						}
					},
					"PDS_EmpoOfferResponseDue": {
						"modelConfig": {
							"path": "PDS.EmpoOfferResponseDue"
						}
					},
					"PDS_EmpoOfferSentOn": {
						"modelConfig": {
							"path": "PDS.EmpoOfferSentOn"
						}
					},
					"PDS_EmpoOfferRespondedOn": {
						"modelConfig": {
							"path": "PDS.EmpoOfferRespondedOn"
						}
					},
					"PDS_EmpoOfferDeclineReason": {
						"modelConfig": {
							"path": "PDS.EmpoOfferDeclineReason"
						}
					},
					"PDS_EmpoOfferLetter": {
						"modelConfig": {
							"path": "PDS.EmpoOfferLetter"
						}
					},
					"PDS_EmpoOfferNotes": {
						"modelConfig": {
							"path": "PDS.EmpoOfferNotes"
						}
					},
					"FileList_ymj2wmi": {
						"isCollection": true,
						"modelConfig": {
							"path": "FileList_ymj2wmiDS",
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
									"name": "GridDetailSearchFilter_rmfh5o0_FileList_ymj2wmi",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"FileList_ymj2wmiDS_Name": {
									"modelConfig": {
										"path": "FileList_ymj2wmiDS.Name"
									}
								},
								"FileList_ymj2wmiDS_CreatedOn": {
									"modelConfig": {
										"path": "FileList_ymj2wmiDS.CreatedOn"
									}
								},
								"FileList_ymj2wmiDS_CreatedBy": {
									"modelConfig": {
										"path": "FileList_ymj2wmiDS.CreatedBy"
									}
								},
								"FileList_ymj2wmiDS_Size": {
									"modelConfig": {
										"path": "FileList_ymj2wmiDS.Size"
									}
								},
								"FileList_ymj2wmiDS_Id": {
									"modelConfig": {
										"path": "FileList_ymj2wmiDS.Id"
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
						"Detail_InterviewsDS": [
							{
								"attributePath": "EmpoApplication",
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
							"entitySchemaName": "EmpoApplication"
						},
						"scope": "page"
					},
					"Detail_InterviewsDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "EmpoInterview",
							"attributes": {
								"EmpoName": {
									"path": "EmpoName"
								},
								"EmpoInterviewType": {
									"path": "EmpoInterviewType"
								},
								"EmpoStartDate": {
									"path": "EmpoStartDate"
								},
								"EmpoInterviewer": {
									"path": "EmpoInterviewer"
								},
								"EmpoStatus": {
									"path": "EmpoStatus"
								},
								"EmpoResult": {
									"path": "EmpoResult"
								},
								"EmpoRating": {
									"path": "EmpoRating"
								}
							}
						}
					},
					"FileList_ymj2wmiDS": {
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
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});