define("EmpoOnboardingDashboard", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "IndicatorWidget_jf0smgf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 3,
						"row": 1,
						"rowSpan": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_jf0smgf_title)#",
						"theme": "without-fill",
						"layout": {
							"color": "green"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_jf0smgf_config_text_template)#",
							"metricMacros": "{0}",
							"labelPosition": "above-under",
							"fontSizeMode": "medium"
						},
						"data": {
							"formatting": {
								"type": "number",
								"decimalPrecision": 0,
								"decimalSeparator": ".",
								"thousandSeparator": ","
							},
							"providing": {
								"attribute": "IndicatorWidget_jf0smgf_Data",
								"schemaName": "EmpoOnboarding",
								"filters": null,
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "DashboardDS.Id"
									}
								]
							}
						},
						"comparison": {
							"type": null,
							"text": ""
						},
						"hint": "#ResourceString(IndicatorWidget_jf0smgf_hint)#"
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_kpsoz1i",
				"values": {
					"layoutConfig": {
						"column": 4,
						"colSpan": 3,
						"row": 1,
						"rowSpan": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_kpsoz1i_title)#",
						"theme": "without-fill",
						"layout": {
							"color": "green"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_kpsoz1i_config_text_template)#",
							"metricMacros": "{0}",
							"labelPosition": "above-under",
							"fontSizeMode": "medium"
						},
						"data": {
							"formatting": {
								"type": "number",
								"decimalPrecision": 0,
								"decimalSeparator": ".",
								"thousandSeparator": ","
							},
							"providing": {
								"attribute": "IndicatorWidget_kpsoz1i_Data",
								"schemaName": "EmpoOnbTask",
								"filters": null,
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": []
							}
						},
						"comparison": {
							"type": null,
							"text": ""
						},
						"hint": "#ResourceString(IndicatorWidget_kpsoz1i_hint)#"
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_wbd9w1x",
				"values": {
					"layoutConfig": {
						"column": 7,
						"colSpan": 3,
						"row": 1,
						"rowSpan": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_wbd9w1x_title)#",
						"theme": "without-fill",
						"layout": {
							"color": "green"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_wbd9w1x_config_text_template)#",
							"metricMacros": "{0}",
							"labelPosition": "above-under",
							"fontSizeMode": "medium"
						},
						"data": {
							"formatting": {
								"type": "number",
								"decimalPrecision": 0,
								"decimalSeparator": ".",
								"thousandSeparator": ","
							},
							"providing": {
								"attribute": "IndicatorWidget_wbd9w1x_Data",
								"schemaName": "EmpoOnboarding",
								"filters": {
									"filter": {
										"items": {
											"88b2eda4-9617-4665-ab2f-4b1b5e6bcef7": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "EmpoStatus"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "EmpoOnbStatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "In progress",
																"Id": "41531e3c-732c-4fa6-99b4-86daf2be1af1",
																"value": "41531e3c-732c-4fa6-99b4-86daf2be1af1",
																"displayValue": "In progress"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "EmpoOnboarding"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "DashboardDS.Id"
									}
								]
							}
						},
						"comparison": {
							"type": null,
							"text": ""
						},
						"hint": "#ResourceString(IndicatorWidget_wbd9w1x_hint)#"
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_frfzqmo",
				"values": {
					"layoutConfig": {
						"column": 10,
						"colSpan": 3,
						"row": 1,
						"rowSpan": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_frfzqmo_title)#",
						"theme": "without-fill",
						"layout": {
							"color": "green"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_frfzqmo_config_text_template)#",
							"metricMacros": "{0}",
							"labelPosition": "above-under",
							"fontSizeMode": "medium"
						},
						"data": {
							"formatting": {
								"type": "number",
								"decimalPrecision": 0,
								"decimalSeparator": ".",
								"thousandSeparator": ","
							},
							"providing": {
								"attribute": "IndicatorWidget_frfzqmo_Data",
								"schemaName": "EmpoOnbTask",
								"filters": {
									"filter": {
										"items": {
											"cd3cf098-d948-4226-96c2-a9404deb38e5": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "EmpoStatus"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "EmpoOnbTaskStatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Completed",
																"Id": "6cf3759a-59b7-47f0-b1c3-066cac12d299",
																"value": "6cf3759a-59b7-47f0-b1c3-066cac12d299",
																"displayValue": "Completed"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "EmpoOnbTask"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": []
							}
						},
						"comparison": {
							"type": null,
							"text": ""
						},
						"hint": "#ResourceString(IndicatorWidget_frfzqmo_hint)#"
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ChartWidget_aw3usg0",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 6,
						"row": 4,
						"rowSpan": 9
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_aw3usg0_title)#",
						"color": "dark-blue",
						"theme": "without-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "burnt-coral",
								"type": "horizontal-bar",
								"label": "#ResourceString(ChartWidget_aw3usg0_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_aw3usg0_SeriesData_3ju443k",
										"schemaName": "EmpoOnboarding",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "EmpoDepartment"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "EmpoOnboarding"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [
											{
												"attributePath": "Id",
												"relationPath": "DashboardDS.Id"
											}
										],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "EmpoDepartment"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ChartWidget_dkm5b7k",
				"values": {
					"layoutConfig": {
						"column": 7,
						"colSpan": 6,
						"row": 4,
						"rowSpan": 9
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_dkm5b7k_title)#",
						"color": "dark-blue",
						"theme": "without-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"type": "doughnut",
								"label": "#ResourceString(ChartWidget_dkm5b7k_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_dkm5b7k_SeriesData_a4ix34l",
										"schemaName": "EmpoOnboarding",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "EmpoStatus"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "EmpoOnboarding"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [
											{
												"attributePath": "Id",
												"relationPath": "DashboardDS.Id"
											}
										],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "EmpoStatus"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": false
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ChartWidget_inffian",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 12,
						"row": 13,
						"rowSpan": 9
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_inffian_title)#",
						"color": "dark-blue",
						"theme": "without-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "purple",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_inffian_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_inffian_SeriesData_d5jfh9h",
										"schemaName": "EmpoOnbTask",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "EmpoStage"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "EmpoOnbTask"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "EmpoStage"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "MyInterviewsLabel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 12,
						"row": 22,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "My interviews (upcoming, assigned to me)",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "MyInterviewsList",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 12,
						"row": 23,
						"rowSpan": 8
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$MyInterviewsList",
					"primaryColumnName": "MyInterviewsListDS_Id",
					"columns": [
						{
							"id": "b6a1f0c2-0000-4c8e-9d7a-5e2f3a1b0c90",
							"code": "MyInterviewsListDS_EmpoName",
							"caption": "Interview",
							"dataValueType": 1
						},
						{
							"id": "b6a1f0c2-0001-4c8e-9d7a-5e2f3a1b0c91",
							"code": "MyInterviewsListDS_EmpoStartDate",
							"caption": "Start",
							"dataValueType": 7
						},
						{
							"id": "b6a1f0c2-0002-4c8e-9d7a-5e2f3a1b0c92",
							"code": "MyInterviewsListDS_EmpoEndDate",
							"caption": "End",
							"dataValueType": 7
						},
						{
							"id": "b6a1f0c2-0003-4c8e-9d7a-5e2f3a1b0c93",
							"code": "MyInterviewsListDS_EmpoCandidate",
							"caption": "Candidate",
							"dataValueType": 10
						},
						{
							"id": "b6a1f0c2-0004-4c8e-9d7a-5e2f3a1b0c94",
							"code": "MyInterviewsListDS_EmpoApplication",
							"caption": "Application",
							"dataValueType": 10
						},
						{
							"id": "b6a1f0c2-0005-4c8e-9d7a-5e2f3a1b0c95",
							"code": "MyInterviewsListDS_EmpoInterviewType",
							"caption": "Type",
							"dataValueType": 10
						},
						{
							"id": "b6a1f0c2-0006-4c8e-9d7a-5e2f3a1b0c96",
							"code": "MyInterviewsListDS_EmpoLocation",
							"caption": "Location",
							"dataValueType": 1
						},
						{
							"id": "b6a1f0c2-0007-4c8e-9d7a-5e2f3a1b0c97",
							"code": "MyInterviewsListDS_EmpoStatus",
							"caption": "Status",
							"dataValueType": 10
						}
					],
					"visible": true,
					"fitContent": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 8
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"attributes": {
						"MyInterviewsList": {
							"isCollection": true,
							"modelConfig": {
								"path": "MyInterviewsListDS",
								"sortingConfig": {
									"default": [
										{
											"direction": "asc",
											"columnName": "EmpoStartDate"
										}
									]
								},
								"filterAttributes": [
									{
										"loadOnChange": true,
										"name": "MyInterviewsList_PredefinedFilter"
									}
								]
							},
							"viewModelConfig": {
								"attributes": {
									"MyInterviewsListDS_EmpoName": {
										"modelConfig": {
											"path": "MyInterviewsListDS.EmpoName"
										}
									},
									"MyInterviewsListDS_EmpoStartDate": {
										"modelConfig": {
											"path": "MyInterviewsListDS.EmpoStartDate"
										}
									},
									"MyInterviewsListDS_EmpoEndDate": {
										"modelConfig": {
											"path": "MyInterviewsListDS.EmpoEndDate"
										}
									},
									"MyInterviewsListDS_EmpoCandidate": {
										"modelConfig": {
											"path": "MyInterviewsListDS.EmpoCandidate"
										}
									},
									"MyInterviewsListDS_EmpoApplication": {
										"modelConfig": {
											"path": "MyInterviewsListDS.EmpoApplication"
										}
									},
									"MyInterviewsListDS_EmpoInterviewType": {
										"modelConfig": {
											"path": "MyInterviewsListDS.EmpoInterviewType"
										}
									},
									"MyInterviewsListDS_EmpoLocation": {
										"modelConfig": {
											"path": "MyInterviewsListDS.EmpoLocation"
										}
									},
									"MyInterviewsListDS_EmpoStatus": {
										"modelConfig": {
											"path": "MyInterviewsListDS.EmpoStatus"
										}
									},
									"MyInterviewsListDS_Id": {
										"modelConfig": {
											"path": "MyInterviewsListDS.Id"
										}
									}
								}
							}
						},
						"MyInterviewsList_PredefinedFilter": {
							"value": {
								"items": {
									"d1f5a0e1-1111-4a1a-9c1e-000000000001": {
										"filterType": 1,
										"comparisonType": 3,
										"isEnabled": true,
										"trimDateTimeParameterToDate": false,
										"leftExpression": {
											"expressionType": 0,
											"columnPath": "EmpoInterviewer"
										},
										"isAggregative": false,
										"dataValueType": 10,
										"referenceSchemaName": "Contact",
										"rightExpression": {
											"expressionType": 1,
											"functionType": 1,
											"macrosType": 2
										}
									},
									"d1f5a0e1-1111-4a1a-9c1e-000000000002": {
										"filterType": 1,
										"comparisonType": 4,
										"isEnabled": true,
										"trimDateTimeParameterToDate": false,
										"leftExpression": {
											"expressionType": 0,
											"columnPath": "EmpoStatus"
										},
										"isAggregative": false,
										"dataValueType": 10,
										"referenceSchemaName": "EmpoInterviewStatus",
										"rightExpression": {
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Completed",
													"Id": "f25e4e13-d059-4d73-9a73-e0c5c2544bdd",
													"value": "f25e4e13-d059-4d73-9a73-e0c5c2544bdd",
													"displayValue": "Completed"
												}
											}
										}
									},
									"d1f5a0e1-1111-4a1a-9c1e-000000000003": {
										"filterType": 1,
										"comparisonType": 4,
										"isEnabled": true,
										"trimDateTimeParameterToDate": false,
										"leftExpression": {
											"expressionType": 0,
											"columnPath": "EmpoStatus"
										},
										"isAggregative": false,
										"dataValueType": 10,
										"referenceSchemaName": "EmpoInterviewStatus",
										"rightExpression": {
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Cancelled",
													"Id": "8c7c6cc6-da89-4cd9-a258-d7e88d98c35d",
													"value": "8c7c6cc6-da89-4cd9-a258-d7e88d98c35d",
													"displayValue": "Cancelled"
												}
											}
										}
									},
									"d1f5a0e1-1111-4a1a-9c1e-000000000004": {
										"filterType": 1,
										"comparisonType": 4,
										"isEnabled": true,
										"trimDateTimeParameterToDate": false,
										"leftExpression": {
											"expressionType": 0,
											"columnPath": "EmpoStatus"
										},
										"isAggregative": false,
										"dataValueType": 10,
										"referenceSchemaName": "EmpoInterviewStatus",
										"rightExpression": {
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "No-show",
													"Id": "c2f279c8-8cef-4313-be99-ec93678df5d6",
													"value": "c2f279c8-8cef-4313-be99-ec93678df5d6",
													"displayValue": "No-show"
												}
											}
										}
									}
								},
								"logicalOperation": 0,
								"isEnabled": true,
								"filterType": 6,
								"rootSchemaName": "EmpoInterview"
							}
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
						"MyInterviewsListDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "EmpoInterview",
								"attributes": {
									"EmpoName": {
										"path": "EmpoName"
									},
									"EmpoStartDate": {
										"path": "EmpoStartDate"
									},
									"EmpoEndDate": {
										"path": "EmpoEndDate"
									},
									"EmpoCandidate": {
										"path": "EmpoCandidate"
									},
									"EmpoApplication": {
										"path": "EmpoApplication"
									},
									"EmpoInterviewType": {
										"path": "EmpoInterviewType"
									},
									"EmpoLocation": {
										"path": "EmpoLocation"
									},
									"EmpoStatus": {
										"path": "EmpoStatus"
									}
								}
							}
						}
					},
					"loadingConfig": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});