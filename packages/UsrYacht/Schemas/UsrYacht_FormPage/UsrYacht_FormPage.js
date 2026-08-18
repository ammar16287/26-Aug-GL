define("UsrYacht_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
					"labelPosition": "auto"
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
				"name": "ComboBox_yachtcaptain",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PageParameters_UsrLookupParameter1_2zp3mzl",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PageParameters_UsrLookupParameter1_2zp3mzl",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null,
					"mode": "SelectionWindow"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
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
				"name": "ComboBox_yachtmanager",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PageParameters_UsrLookupParameter1_byue37z",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PageParameters_UsrLookupParameter1_byue37z",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null,
					"mode": "SelectionWindow"
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
				"name": "GridContainer_x2lmzqt",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_yacht_comment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrColumn15_jozzekb",
					"control": "$PDS_UsrColumn15_jozzekb",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_x2lmzqt",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_yacht_drive_type",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PageParameters_UsrLookupParameter1_8vtfiaw",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PageParameters_UsrLookupParameter1_8vtfiaw",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null,
					"mode": "List"
				},
				"parentName": "GridContainer_x2lmzqt",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_qlamoru",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
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
				"parentName": "GridContainer_x2lmzqt",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_yacht_status",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PageParameters_UsrLookupParameter1_l2m49wx",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PageParameters_UsrLookupParameter1_l2m49wx",
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null,
					"mode": "List"
				},
				"parentName": "GridContainer_x2lmzqt",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_asuey2z",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_asuey2z_title)#",
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
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_9p7zuut",
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
				"parentName": "ExpansionPanel_asuey2z",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ni7e6ot",
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
				"parentName": "GridContainer_9p7zuut",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_at7x8d0",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_at7x8d0_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRentals"
						}
					}
				},
				"parentName": "FlexContainer_ni7e6ot",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_5zu1koj",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_5zu1koj_caption)#",
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
							"dataSourceName": "GridDetail_n9ac799DS"
						}
					}
				},
				"parentName": "FlexContainer_ni7e6ot",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_3rgx6g1",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_3rgx6g1_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_ni7e6ot",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_w6axqxj",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_w6axqxj_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_n9ac799"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_3rgx6g1",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_1bq3v3e",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_1bq3v3e_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRentals"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_3rgx6g1",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_4co8g2s",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_4co8g2s_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_4co8g2s_GridDetail_n9ac799",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_n9ac799"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_4co8g2s_SearchValue",
							"GridDetailSearchFilter_4co8g2s_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_ni7e6ot",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_k0hxgv7",
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
				"parentName": "ExpansionPanel_asuey2z",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_n9ac799",
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
					"items": "$GridDetail_n9ac799",
					"primaryColumnName": "GridDetail_n9ac799DS_Id",
					"columns": [
						{
							"id": "c2b9630e-32c1-82ba-a3f4-02e9729b423e",
							"code": "GridDetail_n9ac799DS_UsrRentalStart",
							"caption": "#ResourceString(GridDetail_n9ac799DS_UsrRentalStart)#",
							"dataValueType": 8,
							"width": 153
						},
						{
							"id": "7a387abd-2d0b-c3ad-4066-d90eccc7c562",
							"code": "GridDetail_n9ac799DS_UsrRentalEnd",
							"caption": "#ResourceString(GridDetail_n9ac799DS_UsrRentalEnd)#",
							"dataValueType": 8,
							"width": 128
						},
						{
							"id": "9de2072b-16f8-5240-0b6a-5634be80953f",
							"code": "GridDetail_n9ac799DS_UsrRentalTotalPrice",
							"caption": "#ResourceString(GridDetail_n9ac799DS_UsrRentalTotalPrice)#",
							"dataValueType": 32,
							"width": 144
						},
						{
							"id": "2b224705-533e-6905-1753-91daddc291f1",
							"code": "GridDetail_n9ac799DS_UsrRentalCustomer",
							"caption": "#ResourceString(GridDetail_n9ac799DS_UsrRentalCustomer)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true,
					"referenceSchema": "UsrYachtRentals"
				},
				"parentName": "GridContainer_k0hxgv7",
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
						}
					},
					"PDS_UsrYachtPricePerDay_90cnm7l": {
						"modelConfig": {
							"path": "PDS.UsrYachtPricePerDay"
						}
					},
					"undefined_List": {
						"isCollection": true,
						"modelConfig": {}
					},
					"PageParameters_UsrLookupParameter1_2zp3mzl": {
						"modelConfig": {
							"path": "PageParameters.UsrYachtCaptain"
						}
					},
					"PageParameters_UsrLookupParameter1_2zp3mzl_List": {
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
					"PageParameters_UsrLookupParameter1_byue37z": {
						"modelConfig": {
							"path": "PageParameters.UsrYachtManager"
						}
					},
					"PageParameters_UsrLookupParameter1_byue37z_List": {
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
					"PDS_UsrColumn15_jozzekb": {
						"modelConfig": {
							"path": "PDS.UsrColumn15"
						}
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
					"PageParameters_UsrLookupParameter1_8vtfiaw": {
						"modelConfig": {
							"path": "PageParameters.UsrYachtDriveType"
						}
					},
					"PageParameters_UsrLookupParameter1_8vtfiaw_List": {
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
					"PageParameters_UsrLookupParameter1_l2m49wx": {
						"modelConfig": {
							"path": "PageParameters.UsrYachtStatus"
						}
					},
					"PageParameters_UsrLookupParameter1_l2m49wx_List": {
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
					"PDS_UsrYachtNumber_4egbzyn": {
						"modelConfig": {
							"path": "PDS.UsrYachtNumber"
						}
					},
					"GridDetail_n9ac799": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_n9ac799DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_4co8g2s_GridDetail_n9ac799",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "UsrRentalStart"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_n9ac799DS_UsrRentalStart": {
									"modelConfig": {
										"path": "GridDetail_n9ac799DS.UsrRentalStart"
									}
								},
								"GridDetail_n9ac799DS_UsrRentalEnd": {
									"modelConfig": {
										"path": "GridDetail_n9ac799DS.UsrRentalEnd"
									}
								},
								"GridDetail_n9ac799DS_UsrRentalTotalPrice": {
									"modelConfig": {
										"path": "GridDetail_n9ac799DS.UsrRentalTotalPrice"
									}
								},
								"GridDetail_n9ac799DS_UsrRentalCustomer": {
									"modelConfig": {
										"path": "GridDetail_n9ac799DS.UsrRentalCustomer"
									}
								},
								"GridDetail_n9ac799DS_Id": {
									"modelConfig": {
										"path": "GridDetail_n9ac799DS.Id"
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
						"GridDetail_n9ac799DS": [
							{
								"attributePath": "Id",
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
					"GridDetail_n9ac799DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRentals",
							"attributes": {
								"UsrRentalStart": {
									"path": "UsrRentalStart"
								},
								"UsrRentalEnd": {
									"path": "UsrRentalEnd"
								},
								"UsrRentalTotalPrice": {
									"path": "UsrRentalTotalPrice"
								},
								"UsrRentalCustomer": {
									"path": "UsrRentalCustomer"
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