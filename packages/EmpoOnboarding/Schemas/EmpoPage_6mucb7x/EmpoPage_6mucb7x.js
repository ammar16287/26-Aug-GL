define("EmpoPage_6mucb7x", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Input_0vutgs4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.EmpoJobAdvertisementDS_EmpoName_0ygdnlc",
					"control": "$EmpoJobAdvertisementDS_EmpoName_0ygdnlc",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_hfpcj8m",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.EmpoJobAdvertisementDS_EmpoRequisition_dbv4a2r",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$EmpoJobAdvertisementDS_EmpoRequisition_dbv4a2r",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_xdyrbhv",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_xdyrbhv_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_hfpcj8m",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_71qgwp8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.EmpoJobAdvertisementDS_EmpoChannel_fxqwlgw",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$EmpoJobAdvertisementDS_EmpoChannel_fxqwlgw",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_mlzm5yd",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_mlzm5yd_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_71qgwp8",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_2fz6eo0",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.EmpoJobAdvertisementDS_EmpoAdStatus_3n4za3c",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$EmpoJobAdvertisementDS_EmpoAdStatus_3n4za3c",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_2e6g7h8",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_2e6g7h8_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_2fz6eo0",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_sk56xcr",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.EmpoJobAdvertisementDS_EmpoPostingDate_ljd9c5o",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "date",
					"control": "$EmpoJobAdvertisementDS_EmpoPostingDate_ljd9c5o"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_996cxpt",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.EmpoJobAdvertisementDS_EmpoClosingDate_7bm7sdd",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "date",
					"control": "$EmpoJobAdvertisementDS_EmpoClosingDate_7bm7sdd"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "WebInput_al8gnwc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 7,
						"rowSpan": 1
					},
					"type": "crt.WebInput",
					"label": "$Resources.Strings.EmpoJobAdvertisementDS_EmpoAdLink_y1pnzxa",
					"control": "$EmpoJobAdvertisementDS_EmpoAdLink_y1pnzxa",
					"labelPosition": "above",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "NumberInput_ryqkmya",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 8,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.EmpoJobAdvertisementDS_EmpoApplicants_8x5uth1",
					"control": "$EmpoJobAdvertisementDS_EmpoApplicants_8x5uth1",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Input_aa2fo8c",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 9,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.EmpoJobAdvertisementDS_EmpoNotes_l00annr",
					"control": "$EmpoJobAdvertisementDS_EmpoNotes_l00annr",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 8
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"EmpoJobAdvertisementDS_EmpoName_0ygdnlc": {
						"modelConfig": {
							"path": "EmpoJobAdvertisementDS.EmpoName"
						}
					},
					"EmpoJobAdvertisementDS_EmpoRequisition_dbv4a2r": {
						"modelConfig": {
							"path": "EmpoJobAdvertisementDS.EmpoRequisition"
						}
					},
					"EmpoJobAdvertisementDS_EmpoRequisition_dbv4a2r_List": {
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
					"EmpoJobAdvertisementDS_EmpoChannel_fxqwlgw": {
						"modelConfig": {
							"path": "EmpoJobAdvertisementDS.EmpoChannel"
						}
					},
					"EmpoJobAdvertisementDS_EmpoChannel_fxqwlgw_List": {
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
					"EmpoJobAdvertisementDS_EmpoAdStatus_3n4za3c": {
						"modelConfig": {
							"path": "EmpoJobAdvertisementDS.EmpoAdStatus"
						}
					},
					"EmpoJobAdvertisementDS_EmpoAdStatus_3n4za3c_List": {
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
					"EmpoJobAdvertisementDS_EmpoPostingDate_ljd9c5o": {
						"modelConfig": {
							"path": "EmpoJobAdvertisementDS.EmpoPostingDate"
						}
					},
					"EmpoJobAdvertisementDS_EmpoClosingDate_7bm7sdd": {
						"modelConfig": {
							"path": "EmpoJobAdvertisementDS.EmpoClosingDate"
						}
					},
					"EmpoJobAdvertisementDS_EmpoAdLink_y1pnzxa": {
						"modelConfig": {
							"path": "EmpoJobAdvertisementDS.EmpoAdLink"
						}
					},
					"EmpoJobAdvertisementDS_EmpoApplicants_8x5uth1": {
						"modelConfig": {
							"path": "EmpoJobAdvertisementDS.EmpoApplicants"
						}
					},
					"EmpoJobAdvertisementDS_EmpoNotes_l00annr": {
						"modelConfig": {
							"path": "EmpoJobAdvertisementDS.EmpoNotes"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"EmpoJobAdvertisementDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "EmpoJobAdvertisement",
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
					"primaryDataSourceName": "EmpoJobAdvertisementDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});