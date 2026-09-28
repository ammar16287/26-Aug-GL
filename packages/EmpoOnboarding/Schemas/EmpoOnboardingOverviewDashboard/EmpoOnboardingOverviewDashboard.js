define("EmpoOnboardingOverviewDashboard", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
		"name": "IndicatorWidget_rec1twkndh",
		"values": {
			"layoutConfig": {
				"column": 1,
				"colSpan": 4,
				"row": 22,
				"rowSpan": 3
			},
			"type": "crt.IndicatorWidget",
			"config": {
				"title": "#ResourceString(IndicatorWidget_rec1twkndh_title)#",
				"theme": "without-fill",
				"layout": {
					"color": "blue"
				},
				"text": {
					"template": "#ResourceString(IndicatorWidget_rec1twkndh_config_text_template)#",
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
						"attribute": "IndicatorWidget_rec1twkndh_Data",
						"schemaName": "EmpoRequisition",
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
				"hint": "#ResourceString(IndicatorWidget_rec1twkndh_hint)#"
			},
			"visible": true
		},
		"parentName": "Main",
		"propertyName": "items",
		"index": 7
	},
	{
		"operation": "insert",
		"name": "IndicatorWidget_recvj24jbu",
		"values": {
			"layoutConfig": {
				"column": 5,
				"colSpan": 4,
				"row": 22,
				"rowSpan": 3
			},
			"type": "crt.IndicatorWidget",
			"config": {
				"title": "#ResourceString(IndicatorWidget_recvj24jbu_title)#",
				"theme": "without-fill",
				"layout": {
					"color": "orange"
				},
				"text": {
					"template": "#ResourceString(IndicatorWidget_recvj24jbu_config_text_template)#",
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
						"attribute": "IndicatorWidget_recvj24jbu_Data",
						"schemaName": "EmpoApplication",
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
				"hint": "#ResourceString(IndicatorWidget_recvj24jbu_hint)#"
			},
			"visible": true
		},
		"parentName": "Main",
		"propertyName": "items",
		"index": 8
	},
	{
		"operation": "insert",
		"name": "IndicatorWidget_rec945g3s3",
		"values": {
			"layoutConfig": {
				"column": 9,
				"colSpan": 4,
				"row": 22,
				"rowSpan": 3
			},
			"type": "crt.IndicatorWidget",
			"config": {
				"title": "#ResourceString(IndicatorWidget_rec945g3s3_title)#",
				"theme": "without-fill",
				"layout": {
					"color": "purple"
				},
				"text": {
					"template": "#ResourceString(IndicatorWidget_rec945g3s3_config_text_template)#",
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
						"attribute": "IndicatorWidget_rec945g3s3_Data",
						"schemaName": "EmpoInterview",
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
				"hint": "#ResourceString(IndicatorWidget_rec945g3s3_hint)#"
			},
			"visible": true
		},
		"parentName": "Main",
		"propertyName": "items",
		"index": 9
	},
	{
		"operation": "insert",
		"name": "ChartWidget_recfioiw84",
		"values": {
			"layoutConfig": {
				"column": 1,
				"colSpan": 4,
				"row": 25,
				"rowSpan": 9
			},
			"type": "crt.ChartWidget",
			"config": {
				"title": "#ResourceString(ChartWidget_recfioiw84_title)#",
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
						"color": "blue",
						"type": "bar",
						"label": "#ResourceString(ChartWidget_recfioiw84_series_0)#",
						"legend": {
							"enabled": false
						},
						"data": {
							"providing": {
								"attribute": "ChartWidget_recfioiw84_SeriesData_3ju443k",
								"schemaName": "EmpoRequisition",
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
										"rootSchemaName": "EmpoRequisition"
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
							"display": true
						}
					}
				],
				"seriesOrder": {
					"type": "by-grouping-value",
					"direction": 1
				},
				"layout": {}
			}
		},
		"parentName": "Main",
		"propertyName": "items",
		"index": 10
	},
	{
		"operation": "insert",
		"name": "ChartWidget_rec4bkug8m",
		"values": {
			"layoutConfig": {
				"column": 5,
				"colSpan": 4,
				"row": 25,
				"rowSpan": 9
			},
			"type": "crt.ChartWidget",
			"config": {
				"title": "#ResourceString(ChartWidget_rec4bkug8m_title)#",
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
						"color": "orange",
						"type": "bar",
						"label": "#ResourceString(ChartWidget_rec4bkug8m_series_0)#",
						"legend": {
							"enabled": false
						},
						"data": {
							"providing": {
								"attribute": "ChartWidget_rec4bkug8m_SeriesData_3ju443k",
								"schemaName": "EmpoApplication",
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
										"rootSchemaName": "EmpoApplication"
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
			}
		},
		"parentName": "Main",
		"propertyName": "items",
		"index": 11
	},
	{
		"operation": "insert",
		"name": "ChartWidget_recgo6lgna",
		"values": {
			"layoutConfig": {
				"column": 9,
				"colSpan": 4,
				"row": 25,
				"rowSpan": 9
			},
			"type": "crt.ChartWidget",
			"config": {
				"title": "#ResourceString(ChartWidget_recgo6lgna_title)#",
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
						"type": "doughnut",
						"label": "#ResourceString(ChartWidget_recgo6lgna_series_0)#",
						"legend": {
							"enabled": false
						},
						"data": {
							"providing": {
								"attribute": "ChartWidget_recgo6lgna_SeriesData_3ju443k",
								"schemaName": "EmpoInterview",
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
										"rootSchemaName": "EmpoInterview"
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
							"display": true
						}
					}
				],
				"seriesOrder": {
					"type": "by-grouping-value",
					"direction": 1
				},
				"layout": {}
			}
		},
		"parentName": "Main",
		"propertyName": "items",
		"index": 12
	}
]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"attributes": {}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {},
					"loadingConfig": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});