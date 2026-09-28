define("EmpoCandidates_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
					"id": "bc90a571-c59d-4819-8999-43696dcda204",
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
			"entitySchemaName": "EmpoCandidate"
		},
		"parentName": "FeedTabContainer",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "F_EmpoEmail",
		"values": {
			"type": "crt.Input",
			"label": "$Resources.Strings.PDS_EmpoEmail",
			"control": "$PDS_EmpoEmail",
			"labelPosition": "auto",
			"placeholder": "",
			"tooltip": "",
			"multiline": false,
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
		"name": "F_EmpoPhone",
		"values": {
			"type": "crt.Input",
			"label": "$Resources.Strings.PDS_EmpoPhone",
			"control": "$PDS_EmpoPhone",
			"labelPosition": "auto",
			"placeholder": "",
			"tooltip": "",
			"multiline": false,
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
		"name": "F_EmpoContact",
		"values": {
			"type": "crt.ComboBox",
			"label": "$Resources.Strings.PDS_EmpoContact",
			"control": "$PDS_EmpoContact",
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
		"operation": "merge",
		"name": "GeneralInfoTab",
		"values": {
			"caption": "#ResourceString(GeneralInfoTab_caption)#"
		}
	},
	{
		"operation": "insert",
		"name": "Grid_Profile",
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
		"name": "F_EmpoLinkedIn",
		"values": {
			"type": "crt.Input",
			"label": "$Resources.Strings.PDS_EmpoLinkedIn",
			"control": "$PDS_EmpoLinkedIn",
			"labelPosition": "auto",
			"placeholder": "",
			"tooltip": "",
			"multiline": false,
			"layoutConfig": {
				"column": 1,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			}
		},
		"parentName": "Grid_Profile",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "F_EmpoLocation",
		"values": {
			"type": "crt.Input",
			"label": "$Resources.Strings.PDS_EmpoLocation",
			"control": "$PDS_EmpoLocation",
			"labelPosition": "auto",
			"placeholder": "",
			"tooltip": "",
			"multiline": false,
			"layoutConfig": {
				"column": 2,
				"row": 1,
				"colSpan": 1,
				"rowSpan": 1
			}
		},
		"parentName": "Grid_Profile",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "F_EmpoCurrentPosition",
		"values": {
			"type": "crt.Input",
			"label": "$Resources.Strings.PDS_EmpoCurrentPosition",
			"control": "$PDS_EmpoCurrentPosition",
			"labelPosition": "auto",
			"placeholder": "",
			"tooltip": "",
			"multiline": false,
			"layoutConfig": {
				"column": 1,
				"row": 2,
				"colSpan": 1,
				"rowSpan": 1
			}
		},
		"parentName": "Grid_Profile",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "F_EmpoCurrentEmployer",
		"values": {
			"type": "crt.Input",
			"label": "$Resources.Strings.PDS_EmpoCurrentEmployer",
			"control": "$PDS_EmpoCurrentEmployer",
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
		"parentName": "Grid_Profile",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "F_EmpoYearsExperience",
		"values": {
			"type": "crt.NumberInput",
			"label": "$Resources.Strings.PDS_EmpoYearsExperience",
			"control": "$PDS_EmpoYearsExperience",
			"labelPosition": "auto",
			"placeholder": "",
			"tooltip": "",
			"layoutConfig": {
				"column": 1,
				"row": 3,
				"colSpan": 1,
				"rowSpan": 1
			}
		},
		"parentName": "Grid_Profile",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "F_EmpoSkills",
		"values": {
			"type": "crt.Input",
			"label": "$Resources.Strings.PDS_EmpoSkills",
			"control": "$PDS_EmpoSkills",
			"labelPosition": "auto",
			"placeholder": "",
			"tooltip": "",
			"multiline": true,
			"layoutConfig": {
				"column": 1,
				"row": 4,
				"colSpan": 2,
				"rowSpan": 1
			}
		},
		"parentName": "Grid_Profile",
		"propertyName": "items",
		"index": 5
	},
	{
		"operation": "insert",
		"name": "F_EmpoResumeText",
		"values": {
			"type": "crt.Input",
			"label": "$Resources.Strings.PDS_EmpoResumeText",
			"control": "$PDS_EmpoResumeText",
			"labelPosition": "auto",
			"placeholder": "",
			"tooltip": "",
			"multiline": true,
			"layoutConfig": {
				"column": 1,
				"row": 5,
				"colSpan": 2,
				"rowSpan": 1
			}
		},
		"parentName": "Grid_Profile",
		"propertyName": "items",
		"index": 6
	},
	{
		"operation": "insert",
		"name": "F_EmpoNotes",
		"values": {
			"type": "crt.Input",
			"label": "$Resources.Strings.PDS_EmpoNotes",
			"control": "$PDS_EmpoNotes",
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
		"parentName": "Grid_Profile",
		"propertyName": "items",
		"index": 7
	},
	{
		"operation": "insert",
		"name": "Tab_Applications",
		"values": {
			"type": "crt.TabContainer",
			"items": [],
			"caption": "#ResourceString(Tab_Applications_caption)#",
			"iconPosition": "only-text",
			"visible": true
		},
		"parentName": "Tabs",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "Grid_Applications",
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
		"parentName": "Tab_Applications",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "DetailTools_Applications",
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
		"parentName": "Grid_Applications",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "Detail_Applications_Add",
		"values": {
			"type": "crt.Button",
			"caption": "#ResourceString(Detail_Applications_Add_caption)#",
			"icon": "add-button-icon",
			"iconPosition": "left-icon",
			"color": "default",
			"size": "medium",
			"clicked": {
				"request": "crt.CreateRecordRequest",
				"params": {
					"entityName": "EmpoApplication",
					"defaultValues": [
						{
							"attributeName": "EmpoCandidate",
							"value": "$Id"
						}
					]
				}
			}
		},
		"parentName": "DetailTools_Applications",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "Detail_Applications_Refresh",
		"values": {
			"type": "crt.Button",
			"caption": "#ResourceString(Detail_Applications_Refresh_caption)#",
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
					"dataSourceName": "Detail_ApplicationsDS"
				}
			}
		},
		"parentName": "DetailTools_Applications",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "Detail_Applications",
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
			"items": "$Detail_Applications",
			"primaryColumnName": "Detail_ApplicationsDS_Id",
			"columns": [
				{
					"id": "ab095059-4a82-4e49-b2fe-dfa836666b1a",
					"code": "Detail_ApplicationsDS_EmpoName",
					"caption": "Application",
					"dataValueType": 28
				},
				{
					"id": "35d7d35a-b883-405d-8a29-86963c269e78",
					"code": "Detail_ApplicationsDS_EmpoJobAdvertisement",
					"caption": "Job advertisement",
					"dataValueType": 10
				},
				{
					"id": "12fcaef6-260c-4938-acd7-9244c316b28a",
					"code": "Detail_ApplicationsDS_EmpoStage",
					"caption": "Stage",
					"dataValueType": 10
				},
				{
					"id": "93f3b384-84a2-42e3-8ba9-2d3d11a9b4a6",
					"code": "Detail_ApplicationsDS_EmpoPrescreenResult",
					"caption": "Prescreening",
					"dataValueType": 10
				},
				{
					"id": "8ff34415-15a0-4d2b-bd44-b38254c5a384",
					"code": "Detail_ApplicationsDS_EmpoAIScore",
					"caption": "AI score",
					"dataValueType": 4
				},
				{
					"id": "64b037fb-7c74-41b6-9ab9-f7b698b2d132",
					"code": "Detail_ApplicationsDS_EmpoAIRecommendation",
					"caption": "AI recommendation",
					"dataValueType": 10
				}
			]
		},
		"parentName": "Grid_Applications",
		"propertyName": "items",
		"index": 1
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
		"index": 2
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
							"attributeName": "EmpoCandidate",
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
					"id": "f3c32954-26ab-4afe-a133-e4e2900fb7c6",
					"code": "Detail_InterviewsDS_EmpoName",
					"caption": "Subject",
					"dataValueType": 28
				},
				{
					"id": "d5e7059e-3827-4fc6-9eac-70454612bc63",
					"code": "Detail_InterviewsDS_EmpoApplication",
					"caption": "Application",
					"dataValueType": 10
				},
				{
					"id": "227334f1-a150-459e-82d5-15986dd04744",
					"code": "Detail_InterviewsDS_EmpoStartDate",
					"caption": "Start",
					"dataValueType": 7
				},
				{
					"id": "35427019-d6e7-4df5-8a5d-d43da69fe91b",
					"code": "Detail_InterviewsDS_EmpoInterviewer",
					"caption": "Interviewer",
					"dataValueType": 10
				},
				{
					"id": "907c1291-1fe8-4e7c-8e8e-4938c2fd0b17",
					"code": "Detail_InterviewsDS_EmpoStatus",
					"caption": "Status",
					"dataValueType": 10
				},
				{
					"id": "2cf34344-f7f1-49b8-a064-5eafe2206586",
					"code": "Detail_InterviewsDS_EmpoResult",
					"caption": "Result",
					"dataValueType": 10
				}
			]
		},
		"parentName": "Grid_Interviews",
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
		"PDS_EmpoEmail": {
			"modelConfig": {
				"path": "PDS.EmpoEmail"
			}
		},
		"PDS_EmpoPhone": {
			"modelConfig": {
				"path": "PDS.EmpoPhone"
			}
		},
		"PDS_EmpoSource": {
			"modelConfig": {
				"path": "PDS.EmpoSource"
			}
		},
		"PDS_EmpoContact": {
			"modelConfig": {
				"path": "PDS.EmpoContact"
			}
		},
		"PDS_EmpoLinkedIn": {
			"modelConfig": {
				"path": "PDS.EmpoLinkedIn"
			}
		},
		"PDS_EmpoLocation": {
			"modelConfig": {
				"path": "PDS.EmpoLocation"
			}
		},
		"PDS_EmpoCurrentPosition": {
			"modelConfig": {
				"path": "PDS.EmpoCurrentPosition"
			}
		},
		"PDS_EmpoCurrentEmployer": {
			"modelConfig": {
				"path": "PDS.EmpoCurrentEmployer"
			}
		},
		"PDS_EmpoYearsExperience": {
			"modelConfig": {
				"path": "PDS.EmpoYearsExperience"
			}
		},
		"PDS_EmpoSkills": {
			"modelConfig": {
				"path": "PDS.EmpoSkills"
			}
		},
		"PDS_EmpoResumeText": {
			"modelConfig": {
				"path": "PDS.EmpoResumeText"
			}
		},
		"PDS_EmpoNotes": {
			"modelConfig": {
				"path": "PDS.EmpoNotes"
			}
		},
		"Detail_Applications": {
			"isCollection": true,
			"modelConfig": {
				"path": "Detail_ApplicationsDS",
				"sortingConfig": {
					"default": [
						{
							"direction": "desc",
							"columnName": "CreatedOn"
						}
					]
				}
			},
			"viewModelConfig": {
				"attributes": {
					"Detail_ApplicationsDS_EmpoName": {
						"modelConfig": {
							"path": "Detail_ApplicationsDS.EmpoName"
						}
					},
					"Detail_ApplicationsDS_EmpoJobAdvertisement": {
						"modelConfig": {
							"path": "Detail_ApplicationsDS.EmpoJobAdvertisement"
						}
					},
					"Detail_ApplicationsDS_EmpoStage": {
						"modelConfig": {
							"path": "Detail_ApplicationsDS.EmpoStage"
						}
					},
					"Detail_ApplicationsDS_EmpoPrescreenResult": {
						"modelConfig": {
							"path": "Detail_ApplicationsDS.EmpoPrescreenResult"
						}
					},
					"Detail_ApplicationsDS_EmpoAIScore": {
						"modelConfig": {
							"path": "Detail_ApplicationsDS.EmpoAIScore"
						}
					},
					"Detail_ApplicationsDS_EmpoAIRecommendation": {
						"modelConfig": {
							"path": "Detail_ApplicationsDS.EmpoAIRecommendation"
						}
					},
					"Detail_ApplicationsDS_Id": {
						"modelConfig": {
							"path": "Detail_ApplicationsDS.Id"
						}
					}
				}
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
					"Detail_InterviewsDS_EmpoApplication": {
						"modelConfig": {
							"path": "Detail_InterviewsDS.EmpoApplication"
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
					"Detail_InterviewsDS_Id": {
						"modelConfig": {
							"path": "Detail_InterviewsDS.Id"
						}
					}
				}
			}
		}
	}
}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
	"dataSources": {
		"PDS": {
			"type": "crt.EntityDataSource",
			"config": {
				"entitySchemaName": "EmpoCandidate"
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
		},
		"Detail_ApplicationsDS": {
			"type": "crt.EntityDataSource",
			"scope": "viewElement",
			"config": {
				"entitySchemaName": "EmpoApplication",
				"attributes": {
					"EmpoName": {
						"path": "EmpoName"
					},
					"EmpoJobAdvertisement": {
						"path": "EmpoJobAdvertisement"
					},
					"EmpoStage": {
						"path": "EmpoStage"
					},
					"EmpoPrescreenResult": {
						"path": "EmpoPrescreenResult"
					},
					"EmpoAIScore": {
						"path": "EmpoAIScore"
					},
					"EmpoAIRecommendation": {
						"path": "EmpoAIRecommendation"
					}
				}
			}
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
					"EmpoApplication": {
						"path": "EmpoApplication"
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
					}
				}
			}
		}
	},
	"primaryDataSourceName": "PDS",
	"dependencies": {
		"Detail_ApplicationsDS": [
			{
				"attributePath": "EmpoCandidate",
				"relationPath": "PDS.Id"
			}
		],
		"Detail_InterviewsDS": [
			{
				"attributePath": "EmpoCandidate",
				"relationPath": "PDS.Id"
			}
		]
	}
}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
