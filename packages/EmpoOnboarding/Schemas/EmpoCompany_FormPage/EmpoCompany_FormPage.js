define("EmpoCompany_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "EmpoCompany"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "f1b40bc6-3bc5-4e8d-b0f2-d7100f7c8bf8",
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
				"name": "ImageInput_bbbtn98",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ImageInput",
					"label": "$Resources.Strings.PDS_EmpoLogo_y0kufga",
					"value": "$PDS_EmpoLogo_y0kufga",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"size": "large",
					"borderRadius": "medium",
					"positioning": "cover"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Switch_xpqt2tk",
				"values": {
					"type": "crt.Switch",
					"checked": true,
					"labelPosition": "auto",
					"label": "$Resources.Strings.PDS_EmpoActive_9kxbks9",
					"control": "$PDS_EmpoActive_9kxbks9"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_v4kg05e",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoCode_wixm90q",
					"control": "$PDS_EmpoCode_wixm90q",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PhoneInput_m3uh40m",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.PDS_EmpoPhone_f1okq4i",
					"control": "$PDS_EmpoPhone_f1okq4i",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EmailInput_9yeuefw",
				"values": {
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.PDS_EmpoEmail_63kxw73",
					"control": "$PDS_EmpoEmail_63kxw73",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WebInput_30b7ddk",
				"values": {
					"type": "crt.WebInput",
					"label": "$Resources.Strings.PDS_EmpoWebsite_orbkaw5",
					"control": "$PDS_EmpoWebsite_orbkaw5",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_09i7apy",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_EmpoAddress_uf8nw4y",
					"control": "$PDS_EmpoAddress_uf8nw4y",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_t7tvki3",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_t7tvki3_title)#",
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_4z4mmx9",
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
				"parentName": "ExpansionPanel_t7tvki3",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_3ixupz6",
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
				"parentName": "GridContainer_4z4mmx9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_9wfr942",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_9wfr942_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "EmpoTeams"
						}
					}
				},
				"parentName": "FlexContainer_3ixupz6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_zjm5mwb",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_zjm5mwb_caption)#",
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
							"dataSourceName": "GridDetail_ilgpnyiDS"
						}
					}
				},
				"parentName": "FlexContainer_3ixupz6",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_a93ajag",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_a93ajag_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_3ixupz6",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_1txfsg6",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_1txfsg6_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_ilgpnyi"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_a93ajag",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_x81j38y",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_x81j38y_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "EmpoTeams"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_a93ajag",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_y4fshhj",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_y4fshhj_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_y4fshhj_GridDetail_ilgpnyi",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_ilgpnyi"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_y4fshhj_SearchValue",
							"GridDetailSearchFilter_y4fshhj_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_3ixupz6",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_7mbgttf",
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
				"parentName": "ExpansionPanel_t7tvki3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_ilgpnyi",
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
					"items": "$GridDetail_ilgpnyi",
					"primaryColumnName": "GridDetail_ilgpnyiDS_Id",
					"columns": [
						{
							"id": "f5020fd3-757e-71ce-3899-962fe3fa1b64",
							"code": "GridDetail_ilgpnyiDS_Name",
							"caption": "#ResourceString(GridDetail_ilgpnyiDS_Name)#",
							"dataValueType": 28
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_7mbgttf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_up6t181",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_up6t181_title)#",
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_gds5npa",
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
				"parentName": "ExpansionPanel_up6t181",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_4al2jkm",
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
				"parentName": "GridContainer_gds5npa",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_mshbg7d",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_mshbg7d_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "EmpoOnboarding"
						}
					}
				},
				"parentName": "FlexContainer_4al2jkm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_sa1t8we",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_sa1t8we_caption)#",
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
							"dataSourceName": "GridDetail_v61ihyaDS"
						}
					}
				},
				"parentName": "FlexContainer_4al2jkm",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_zm8dcac",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_zm8dcac_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_4al2jkm",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_fz1rjbw",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_fz1rjbw_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_v61ihya"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_zm8dcac",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_4a98p18",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_4a98p18_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "EmpoOnboarding"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_zm8dcac",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_nair3h5",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_nair3h5_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_nair3h5_GridDetail_v61ihya",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_v61ihya"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_nair3h5_SearchValue",
							"GridDetailSearchFilter_nair3h5_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_4al2jkm",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_30ynpxe",
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
				"parentName": "ExpansionPanel_up6t181",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_v61ihya",
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
					"items": "$GridDetail_v61ihya",
					"primaryColumnName": "GridDetail_v61ihyaDS_Id",
					"columns": [
						{
							"id": "5cd1def2-dabf-da9d-f3f3-2d95d2a02b2c",
							"code": "GridDetail_v61ihyaDS_EmpoName",
							"caption": "#ResourceString(GridDetail_v61ihyaDS_EmpoName)#",
							"dataValueType": 28
						},
						{
							"id": "eec4f253-d06e-d004-b539-126af0152517",
							"code": "GridDetail_v61ihyaDS_EmpoJobTitle",
							"caption": "#ResourceString(GridDetail_v61ihyaDS_EmpoJobTitle)#",
							"dataValueType": 28
						},
						{
							"id": "2d931d52-dc34-fd2c-6dd1-73cc0175e52e",
							"code": "GridDetail_v61ihyaDS_EmpoStatus",
							"caption": "#ResourceString(GridDetail_v61ihyaDS_EmpoStatus)#",
							"dataValueType": 10
						},
						{
							"id": "59cc9159-3d05-592e-0bad-0aced8cd5749",
							"code": "GridDetail_v61ihyaDS_EmpoTeam",
							"caption": "#ResourceString(GridDetail_v61ihyaDS_EmpoTeam)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_30ynpxe",
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
					"PDS_EmpoLogo_y0kufga": {
						"modelConfig": {
							"path": "PDS.EmpoLogo"
						}
					},
					"PDS_EmpoActive_9kxbks9": {
						"modelConfig": {
							"path": "PDS.EmpoActive"
						}
					},
					"PDS_EmpoCode_wixm90q": {
						"modelConfig": {
							"path": "PDS.EmpoCode"
						}
					},
					"PDS_EmpoPhone_f1okq4i": {
						"modelConfig": {
							"path": "PDS.EmpoPhone"
						}
					},
					"PDS_EmpoEmail_63kxw73": {
						"modelConfig": {
							"path": "PDS.EmpoEmail"
						}
					},
					"PDS_EmpoWebsite_orbkaw5": {
						"modelConfig": {
							"path": "PDS.EmpoWebsite"
						}
					},
					"PDS_EmpoAddress_uf8nw4y": {
						"modelConfig": {
							"path": "PDS.EmpoAddress"
						}
					},
					"GridDetail_ilgpnyi": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_ilgpnyiDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_y4fshhj_GridDetail_ilgpnyi",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_ilgpnyiDS_Name": {
									"modelConfig": {
										"path": "GridDetail_ilgpnyiDS.Name"
									}
								},
								"GridDetail_ilgpnyiDS_Id": {
									"modelConfig": {
										"path": "GridDetail_ilgpnyiDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_v61ihya": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_v61ihyaDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_nair3h5_GridDetail_v61ihya",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_v61ihyaDS_EmpoName": {
									"modelConfig": {
										"path": "GridDetail_v61ihyaDS.EmpoName"
									}
								},
								"GridDetail_v61ihyaDS_EmpoJobTitle": {
									"modelConfig": {
										"path": "GridDetail_v61ihyaDS.EmpoJobTitle"
									}
								},
								"GridDetail_v61ihyaDS_EmpoStatus": {
									"modelConfig": {
										"path": "GridDetail_v61ihyaDS.EmpoStatus"
									}
								},
								"GridDetail_v61ihyaDS_EmpoTeam": {
									"modelConfig": {
										"path": "GridDetail_v61ihyaDS.EmpoTeam"
									}
								},
								"GridDetail_v61ihyaDS_Id": {
									"modelConfig": {
										"path": "GridDetail_v61ihyaDS.Id"
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
						"GridDetail_ilgpnyiDS": [
							{
								"attributePath": "EmpoCompany",
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
							"entitySchemaName": "EmpoCompany"
						},
						"scope": "page"
					},
					"GridDetail_ilgpnyiDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "EmpoTeams",
							"attributes": {
								"Name": {
									"path": "Name"
								}
							}
						}
					},
					"GridDetail_v61ihyaDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "EmpoOnboarding",
							"attributes": {
								"EmpoName": {
									"path": "EmpoName"
								},
								"EmpoJobTitle": {
									"path": "EmpoJobTitle"
								},
								"EmpoStatus": {
									"path": "EmpoStatus"
								},
								"EmpoTeam": {
									"path": "EmpoTeam"
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