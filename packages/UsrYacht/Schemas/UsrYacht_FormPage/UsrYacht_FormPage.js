define("UsrYacht_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
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
					"entitySchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "9f8c678c-f243-423c-9471-35d550e33157",
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
				"name": "Button_tuln1sp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_tuln1sp_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "right-icon",
					"menuItems": [],
					"clickMode": "menu",
					"visible": true,
					"icon": "actions-button-icon"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_hand9hm",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_hand9hm_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrProcess_771e97c",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "ProcessYachtID"
						}
					}
				},
				"parentName": "Button_tuln1sp",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_2u5vqyg",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_2u5vqyg_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrProcess_AVG_Price",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "ProcessYachtID"
						}
					}
				},
				"parentName": "Button_tuln1sp",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_yacht_length",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrYachtLength_1l2ip29",
					"control": "$PDS_UsrYachtLength_1l2ip29",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_yacht_price_perday",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrYachtPricePerDay_90cnm7l",
					"control": "$PDS_UsrYachtPricePerDay_90cnm7l",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_yacht_ticket_price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrYachtTicketPrice_7dqopag",
					"control": "$PDS_UsrYachtTicketPrice_7dqopag",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_5cges87",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCaptain_kj4asuw",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCaptain_kj4asuw",
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
				"name": "addRecord_sz2cv23",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_sz2cv23_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_5cges87",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_yacht_crew_count",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrYachtCrewCount_rxk2bz4",
					"control": "$PDS_UsrYachtCrewCount_rxk2bz4",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_0no2qob",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_oz6urld",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_oz6urld",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_passenger_count",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrYachtPassengerCount_iwymxcl",
					"control": "$PDS_UsrYachtPassengerCount_iwymxcl",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_qlamoru",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrYachtNumber_4egbzyn",
					"control": "$PDS_UsrYachtNumber_4egbzyn",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_w9onydx",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_qzrbkof",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrDriveType_qzrbkof",
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Input_omisakp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrYachtComment_3mgbpvm",
					"control": "$PDS_UsrYachtComment_3mgbpvm",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ComboBox_snneb88",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrYachtStatus_w5emk50",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrYachtStatus_w5emk50",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "GridContainer_p7bthx5",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Categories",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(Categories_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrPatentYacht",
					"selectSchemaName": "UsrCategoryInYacht",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "left",
					"placeholder": "",
					"tooltip": "",
					"required": false,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_p7bthx5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_mt4dqiq",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_mt4dqiq_title)#",
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
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_4cy2yym",
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
				"parentName": "ExpansionPanel_mt4dqiq",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_kzh4aus",
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
				"parentName": "GridContainer_4cy2yym",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_abbulca",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_abbulca_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRental"
						}
					}
				},
				"parentName": "FlexContainer_kzh4aus",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_ta0tmf8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_ta0tmf8_caption)#",
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
							"dataSourceName": "GridDetail_gyxpzg6DS"
						}
					}
				},
				"parentName": "FlexContainer_kzh4aus",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_pczf9an",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_pczf9an_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_kzh4aus",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_upo40o3",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_upo40o3_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_gyxpzg6"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_pczf9an",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_29697zy",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_29697zy_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_pczf9an",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_3radg1j",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_3radg1j_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_3radg1j_GridDetail_gyxpzg6",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_gyxpzg6"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_3radg1j_SearchValue",
							"GridDetailSearchFilter_3radg1j_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_kzh4aus",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_p6z528s",
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
				"parentName": "ExpansionPanel_mt4dqiq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_gyxpzg6",
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
					"items": "$GridDetail_gyxpzg6",
					"primaryColumnName": "GridDetail_gyxpzg6DS_Id",
					"columns": [
						{
							"id": "b84106d3-f009-5c11-4fb8-2e5cf24c0357",
							"code": "GridDetail_gyxpzg6DS_UsrYachtRentalStart",
							"caption": "#ResourceString(GridDetail_gyxpzg6DS_UsrYachtRentalStart)#",
							"dataValueType": 8,
							"width": 194
						},
						{
							"id": "648f26c0-84dc-dfe4-bbe2-6e922766c88f",
							"code": "GridDetail_gyxpzg6DS_UsrYachtRentalEnd",
							"caption": "#ResourceString(GridDetail_gyxpzg6DS_UsrYachtRentalEnd)#",
							"dataValueType": 8,
							"width": 171
						},
						{
							"id": "bb0027c0-81d7-d47e-9919-98706a7f660e",
							"code": "GridDetail_gyxpzg6DS_UsrYachtParent",
							"caption": "#ResourceString(GridDetail_gyxpzg6DS_UsrYachtParent)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_p6z528s",
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
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrYachtLength_1l2ip29": {
						"modelConfig": {
							"path": "PDS.UsrYachtLength"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"maxValue": 5000,
									"message": "“Length” must be shorter than 5,000"
								}
							}
						}
					},
					"PDS_UsrYachtPricePerDay_90cnm7l": {
						"modelConfig": {
							"path": "PDS.UsrYachtPricePerDay"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"maxValue": 100000,
									"message": "Price must be lower than 100,000"
								}
							}
						}
					},
					"undefined_List": {
						"isCollection": true,
						"modelConfig": {}
					},
					"PDS_UsrYachtCrewCount_rxk2bz4": {
						"modelConfig": {
							"path": "PDS.UsrYachtCrewCount"
						}
					},
					"PDS_UsrYachtPassengerCount_iwymxcl": {
						"modelConfig": {
							"path": "PDS.UsrYachtPassengerCount"
						}
					},
					"PDS_UsrYachtNumber_4egbzyn": {
						"modelConfig": {
							"path": "PDS.UsrYachtNumber"
						}
					},
					"PDS_UsrYachtComment_3mgbpvm": {
						"modelConfig": {
							"path": "PDS.UsrYachtComment"
						}
					},
					"PDS_UsrCaptain_kj4asuw": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrCaptain_kj4asuw_List": {
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
					"PDS_UsrManager_oz6urld": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_oz6urld_List": {
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
					"PDS_UsrDriveType_qzrbkof": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrDriveType_qzrbkof_List": {
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
					"PDS_UsrYachtStatus_w5emk50": {
						"modelConfig": {
							"path": "PDS.UsrYachtStatus"
						}
					},
					"PDS_UsrYachtStatus_w5emk50_List": {
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
					"PDS_UsrYachtTicketPrice_7dqopag": {
						"modelConfig": {
							"path": "PDS.UsrYachtTicketPrice"
						}
					},
					"GridDetail_gyxpzg6": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_gyxpzg6DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_3radg1j_GridDetail_gyxpzg6",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrYachtRentalEnd"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_gyxpzg6DS_UsrYachtRentalStart": {
									"modelConfig": {
										"path": "GridDetail_gyxpzg6DS.UsrYachtRentalStart"
									}
								},
								"GridDetail_gyxpzg6DS_UsrYachtRentalEnd": {
									"modelConfig": {
										"path": "GridDetail_gyxpzg6DS.UsrYachtRentalEnd"
									}
								},
								"GridDetail_gyxpzg6DS_UsrYachtParent": {
									"modelConfig": {
										"path": "GridDetail_gyxpzg6DS.UsrYachtParent"
									}
								},
								"GridDetail_gyxpzg6DS_Id": {
									"modelConfig": {
										"path": "GridDetail_gyxpzg6DS.Id"
									}
								}
							}
						}
					},
					"Categories_List_Items_Predefined_Filter": {
						"value": null
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
						"GridDetail_gyxpzg6DS": [
							{
								"attributePath": "UsrYachtParent",
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
							"entitySchemaName": "UsrYacht"
						},
						"scope": "page"
					},
					"GridDetail_gyxpzg6DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"UsrYachtRentalStart": {
									"path": "UsrYachtRentalStart"
								},
								"UsrYachtRentalEnd": {
									"path": "UsrYachtRentalEnd"
								},
								"UsrYachtParent": {
									"path": "UsrYachtParent"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			/*
			PDS_UsrYachtTicketPrice_7dqopag PDS_UsrYachtPricePerDay_90cnm7l  PDS_UsrYachtPassengerCount_iwymxcl
			*/
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				// The custom implementation of the system query handler. 
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_UsrYachtPricePerDay_90cnm7l' || 
					   request.attributeName === 'PDS_UsrYachtPassengerCount_iwymxcl'  ) { 		// or Passenger count changed
						let price = await request.$context.PDS_UsrYachtPricePerDay_90cnm7l;
						let passengers = await request.$context.PDS_UsrYachtPassengerCount_iwymxcl;
						let ticket_price = price / passengers;
						request.$context.PDS_UsrYachtTicketPrice_7dqopag = ticket_price;
					}
					// Call the next handler if it exists and return its result. 
					return next?.handle(request);
				}
			},
			{
					request: "usr.RunWebServiceRequest",
					// Implementation of the custom query handler. 
					handler: async (request, next) => {
						console.log("Run web service button works...");
						
						// get id from drive type lookup type object
						var typeObject = await request.$context.PDS_UsrDriveType_qzrbkof;
						var UsrDriveTypeId = "";
						if (typeObject) {
							UsrDriveTypeId = typeObject.value;
						}
						// Create an instance of the HTTP client from @creatio-devkit/common. 
						const httpClientService = new sdk.HttpClientService();
						// Specify the URL to run web service method. 
						const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
						const transferName = "rest";
						const serviceName = "YachtService";
						const methodName = "GetAvgPriceByDriveTypeId";
						const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
						
						//const endpoint = "http://localhost/D1_Studio/0/rest/YachtService/GetMaxPriceByDriveTypeId";
						// Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. /
						/*var params = {
							UsrDriveType: UsrDriveTypeId
						};*/
						var params = {
							UsrDriveTypeId: UsrDriveTypeId
						};
						
						const response = await httpClientService.post(endpoint, params);
						console.log("UsrDriveTypeId: = " + UsrDriveTypeId);
						console.log("Response avg price: = " + response.body.GetAvgPriceByDriveTypeId);
						
						// Call the next handler if it exists and return its result. 
						return next?.handle(request);
					}
		}
		
			
			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
		"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let maxValue = config.maxValue;
						let valueIsCorrect = value < maxValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "maxValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		
			
		}
		
		/**SCHEMA_VALIDATORS*/
	};
});