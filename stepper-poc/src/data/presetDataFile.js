//presetdata
const dataForPresets = {
    preset1Data: {
      title: "Build Creatives",
      modules: [
        "notifications",
        "campaignPlanning",
        "conceptManagement",
        "reporting",
        "translateAuto",
        "campaignConcepts",
        "conceptGallery",
        "campaignChat",
        "supportChat",
        "helpdesk",
        "translateAuto",
        "feedManagement",
        "assetLibrary",
        "assetsUnsplash",
        "subAccounts",
        "brandManagement",
        "lookupManagement",
        "tour",
      ],
      channels: ["social", "email"],
      campaignformatTitle: "BuildCreatives",
      iconClass: "icon-build-creatives",
      presetInfo: {
        title: "Build Creatives",
        subTitle:
          "Create template based creatives in Cape and download them locally.",
        modules: [
          "notifications",
          "campaignPlanning",
          "conceptManagement",
          "reporting",
          "translateAuto",
          "campaignConcepts",
          "conceptGallery",
          "campaignChat",
          "supportChat",
          "helpdesk",
          "translateAuto",
          "feedManagement",
          "assetLibrary",
          "assetsUnsplash",
          "subAccounts",
          "brandManagement",
          "lookupManagement",
        ],
        about:
          "Now they can manage all campaign types, budgets, and creatives in one place. This includes validation checks and the ability to publish campaigns to the right audience at the platform of choice, and all the necessary campaign build-up, targeting and naming conventions. Expedia needs a way to orchestrate their retail media services by collecting information from their advertisers.",
      },

      interfaceSetup: {
        pages: [
          {
            key: crypto.randomUUID(),
            templateTitle: "Settings",
            type: "page",
            title: "Settings",
            path: "settings",
            showLanguageSelector: false,
            multiLanguage: false,
            tour: false,
            tabs: [
              {
                key: crypto.randomUUID(),
                title: "General",
                path: "general",
                type: "page",
                showLanguageSelector: false,
                multiLanguage: false,
                tour: false,
                blocks: [
                  {
                    title: "General settings",
                    itemType: "block",
                    type: "multiInput",
                    opened: true,
                    items: [
                      {
                        key: crypto.randomUUID(),
                        type: "assetGalleryInput",
                        title: "image",
                        fileType: "image",
                        itemType: "input",
                        label: "Image icon",
                        model: "settings.image",
                        sourceDataModel: "settings.imageLibrary",
                        format: "Square",
                        outputWidth: 600,
                        outputHeight: 600,
                      },
                      {
                        key: crypto.randomUUID(),
                        type: "text",
                        title: "title",
                        model: "settings.title",
                        itemType: "input",
                        label: "Title",
                        readOnly: "{{{auth.type=='user'}}}",
                        maxLength: 50,
                        useValueObject: false,
                        validators: [
                          {
                            type: "length",
                            max: 20,
                            severity: "warning",
                            message:
                              "Text over 20 characters is allowed, but can cause displaing issues",
                          },
                        ],
                      },
                      {
                        key: crypto.randomUUID(),
                        type: "richtext",
                        title: "Description",
                        model: "settings.description",
                        itemType: "input",
                        label: "Description",
                        includedOptions: [
                          "heading",
                          "|",
                          "bold",
                          "italic",
                          "link",
                          "bulletedList",
                          "numberedList",
                        ],
                      },
                      {
                        key: crypto.randomUUID(),
                        label: "Status",
                        type: "select",
                        itemType: "input",
                        model: "concept.status",
                        options: {
                          unpublished: "Unpublished",
                          published: "Published",
                        },
                      },
                    ],
                    key: crypto.randomUUID(),
                  },
                  {
                    title: "Planning",
                    itemType: "block",
                    type: "planning",
                    opened: true,
                    items: [
                      {
                        key: crypto.randomUUID(),
                        type: "dateRange",
                        model: "settings.planning",
                        label: "Planning",
                        minDate: "",
                        itemType: "input",
                        maxDate: "",
                      },
                    ],
                    key: crypto.randomUUID(),
                  },
                ],
              },
            ],
          },
          {
            key: crypto.randomUUID(),
            templateTitle: "Generic page",
            type: "page",
            title: "Display",
            path: "display",
            showLanguageSelector: false,
            multiLanguage: false,
            tour: false,
            tabs: [
              {
                key: crypto.randomUUID(),
                title: "General",
                path: "general",
                type: "page",
                showLanguageSelector: false,
                multiLanguage: false,
                tour: false,
                blocks: [
                  {
                    title: "Creative Builder",
                    type: "creativeBuilder",
                    itemType: "block",
                    multilanguage: true,
                    review: true,
                    model: "creativeBuilder.setup",
                    dataModel: "creativeBuilder.data",
                    templateTypes: ["displayAd", "displayAdDesigned"],
                    hasMuiIcon: true,
                    icon: "design_services",
                    key: crypto.randomUUID(),
                  },
                ],
              },
            ],
          },
          {
            key: crypto.randomUUID(),
            templateTitle: "Generic page",
            type: "page",
            title: "Social",
            path: "social",
            showLanguageSelector: false,
            multiLanguage: false,
            tour: false,
            tabs: [
              {
                key: crypto.randomUUID(),
                title: "General",
                path: "general",
                type: "page",
                showLanguageSelector: false,
                multiLanguage: false,
                tour: false,
                blocks: [
                  {
                    title: "Creative Builder",
                    type: "creativeBuilder",
                    itemType: "block",
                    multilanguage: true,
                    review: true,
                    model: "creativeBuilderSocial.setup",
                    dataModel: "creativeBuilderSocial.data",
                    templateTypes: ["socialChannelItem"],
                    hasMuiIcon: true,
                    icon: "design_services",
                    key: crypto.randomUUID(),
                  },
                ],
              },
            ],
          },
          {
            path: "email",
            title: "Email",
            blockModelBase: "email",
            blockModel: "email",
            preview: {
              type: "multi-email",
              multiLanguage: true,
              model: "multiEmailBuilder.setup",
              dataModel: "multiEmailBuilder.data",
            },
            blocks: [
              {
                type: "multiEmailBuilder",
                title: "Email content",
                review: true,
                model: "multiEmailBuilder.setup",
                dataModel: "multiEmailBuilder.data",
                canEdit: true,
                planning: true,
                planningMax: 5,
                editorData: {
                  lockedLevel: 7,
                  canAdd: true,
                  canMove: true,
                  canRemove: true,
                  canEdit: true,
                  maxBlocks: 13,
                },
                settingsInterfaceSetup: [
                  {
                    type: "textMultiLanguage",
                    model: "subject",
                    readOnly: "{{{auth.type=='user'}}}",
                    label: "Subject",
                  },
                  {
                    type: "divider",
                  },
                  {
                    type: "textMultiLanguage",
                    model: "snippet",
                    readOnly: "{{{auth.type=='user'}}}",
                    label: "Snippet",
                  },
                  {
                    type: "select",
                    model: "settings.utmContent",
                    label: "UTM content",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    selectType: "single",
                    options: {
                      NOTSET: "Select..",
                      teaser: "Teaser",
                      initial: "Initial",
                      reminder: "Reminder",
                      reminder2: "Reminder 2",
                      reminder3: "Reminder 3",
                    },
                  },
                  {
                    type: "divider",
                  },
                  {
                    type: "select",
                    model: "info.identifierChannel",
                    label: "Variant identifier",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    defaultValue: "z",
                    options: {
                      z: "z",
                      a: "a",
                      b: "b",
                      c: "c",
                      d: "d",
                      e: "e",
                    },
                  },
                  {
                    type: "hidden",
                    model: "settings.identifierChannel",
                    parseValue: "{{{[[blockModel]].info.identifierChannel}}}",
                  },
                  {
                    type: "select",
                    model: "info.identifierTarget",
                    label: "Audience identifier",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    defaultValue: "z",
                    options: {
                      1: "1",
                      2: "2",
                      3: "3",
                      4: "4",
                      5: "5",
                      z: "z",
                    },
                  },
                  {
                    type: "hidden",
                    model: "settings.identifierTarget",
                    parseValue: "{{{[[blockModel]].info.identifierTarget}}}",
                  },
                  {
                    type: "display",
                    model: "info.campaignCode",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    label: "Campaign code",
                    condition:
                      "blockData.info.identifierChannel && blockData.info.identifierTarget",
                    displayValue:
                      "{{{campaign.settings.identifier+'em'+[[blockModel]].info.identifierChannel+[[blockModel]].info.identifierTarget+'00'}}}",
                  },
                  {
                    type: "divider",
                  },
                  {
                    type: "text",
                    model: "info.reportingName",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    tooltip:
                      "This is a measurement that will be shown in the report",
                    label: "Reporting name",
                  },
                  {
                    type: "display",
                    model: "info.reportingString",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    label: "Campaign reporting string",
                    condition:
                      "blockData.info.identifierChannel && blockData.info.identifierTarget && blockData.info.reportingName",
                    displayValue:
                      "{{{campaign.settings.identifier+'em'+[[blockModel]].info.identifierChannel+[[blockModel]].info.identifierTarget+'00'+'_'+campaign.settings.titleInput+'_'+[[blockModel]].info.reportingName.value}}}",
                  },
                  {
                    type: "display",
                    model: "targetAudience",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    label: "Campaign target audience",
                    displayValue: "{{{campaign.settings.targetAudience}}}",
                  },
                  {
                    type: "text",
                    model: "info.targetAudience",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    tooltip:
                      "Denk aan SOK, personeel, voorspelmodel en ontdubbelen, Huishouden en emailadres.",
                    label: "Target Audience",
                    multiline: true,
                  },
                  {
                    type: "assetSelector",
                    model: "info.emailPdf",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    label: "Definitive version email",
                    sourceDataModel: "email.pdfLibrary",
                    fileType: "pdf",
                  },
                  {
                    type: "number",
                    model: "kpi.openrate",
                    label: "Open rate",
                    condition:
                      "{{{auth.type!='user' && auth.type!='marketManager' && auth.type!='campaignManagerDepartment'}}}",
                    valueLabelDisplay: "on",
                    startAdornment: "%",
                    defaultValue: 50,
                  },
                  {
                    type: "display",
                    label: "Open rate",
                    condition:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    displayValue: "{{{[[blockModel]].kpi.openrate}}}",
                    model: "kpi.openrateDisplay",
                  },
                  {
                    type: "number",
                    model: "kpi.cto",
                    condition:
                      "{{{auth.type!='user' && auth.type!='marketManager' && auth.type!='campaignManagerDepartment'}}}",
                    valueLabelDisplay: "on",
                    label: "Click To Open",
                    startAdornment: "%",
                    defaultValue: 50,
                  },
                  {
                    type: "display",
                    label: "Click To Open",
                    condition:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    displayValue: "{{{[[blockModel]].kpi.cto}}}",
                    model: "kpi.ctoDisplay",
                  },
                  {
                    type: "number",
                    model: "kpi.optout",
                    condition:
                      "{{{auth.type!='user' && auth.type!='marketManager' && auth.type!='campaignManagerDepartment'}}}",
                    valueLabelDisplay: "on",
                    label: "Opt Out",
                    startAdornment: "%",
                    defaultValue: 50,
                  },
                  {
                    type: "display",
                    label: "Opt Out",
                    condition:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    displayValue: "{{{[[blockModel]].kpi.optout}}}",
                    model: "kpi.optoutDisplay",
                  },
                  {
                    type: "number",
                    model: "kpi.closeAlert",
                    condition:
                      "{{{auth.type!='user' && auth.type!='marketManager' && auth.type!='campaignManagerDepartment'}}}",
                    valueLabelDisplay: "on",
                    label: "Close Alert",
                    defaultValue: 0,
                  },
                  {
                    type: "display",
                    label: "Close Alert",
                    condition:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    displayValue: "{{{[[blockModel]].kpi.closeAlert}}}",
                    model: "kpi.closeAlertDisplay",
                  },
                  {
                    type: "number",
                    label: "Annual Premium Equivalent (APE)",
                    condition:
                      "{{{auth.type!='user' && auth.type!='marketManager' && auth.type!='campaignManagerDepartment'}}}",
                    maxLength: 10,
                    model: "kpi.ape",
                    useValueObject: false,
                    helperText: "numbers only in this APE",
                  },
                  {
                    type: "display",
                    label: "Annual Premium Equivalent (APE)",
                    condition:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    displayValue: "{{{[[blockModel]].kpi.ape}}}",
                    model: "kpi.apeDisplay",
                  },
                  {
                    type: "number",
                    model: "kpi.obligo",
                    condition:
                      "{{{auth.type!='user' && auth.type!='marketManager' && auth.type!='campaignManagerDepartment'}}}",
                    label: "Obligo",
                    maxLength: 10,
                    useValueObject: false,
                  },
                  {
                    type: "display",
                    label: "Obligo",
                    condition:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    displayValue: "{{{[[blockModel]].kpi.obligo}}}",
                    model: "kpi.obligoDisplay",
                  },
                ],
                key: "89c1fa0c-bff1-4951-87f4-8756de208de9",
                itemType: "block",
              },
            ],
            key: "5327d2a2-9780-4627-8db4-17a036fd6fd3",
          },
          {
            key: "28823406-e30d-487a-b827-efe1c94ec541",
            templateTitle: "Generic page",
            type: "page",
            title: "Publish",
            path: "publish",
            showLanguageSelector: false,
            multiLanguage: false,
            tour: false,
            tabs: [
              {
                key: "c1ec4a9a-5c94-4a30-8a59-1ef52c1210e5",
                title: "General",
                path: "general",
                type: "page",
                showLanguageSelector: false,
                multiLanguage: false,
                tour: false,
                blocks: [
                  {
                    title: "Publish",
                    itemType: "block",
                    opened: true,
                    type: "publish",
                    model: "publish.results",
                    hasMuiIcon: true,
                    icon: "publish",
                    key: "5537b9bc-38f0-4608-b13e-ce9033a7502b",
                  },
                ],
              },
            ],
          },
        ],
      },

      publishProfiles: {
        export: {
          title: "Export video",
          tasks: [
            {
              processingFunction: "creativeBuilder",
              model: "creativeBuilder.setup",
              dataModel: "creativeBuilder.data",
              assetTypes: ["dynamicVideo", "dynamicVideoDesigned"],
              type: "export",
            },
          ],
        },
        exportAds: {
          title: "Export display",
          tasks: [
            {
              processingFunction: "creativeBuilder",
              model: "creativeBuilder.setup",
              dataModel: "creativeBuilder.data",
              assetTypes: ["displayAd", "displayAdDesigned"],
              type: "export",
              enablePartial: true,
            },
          ],
        },
        exportAdsGIF: {
          title: "Export display to GIF",
          tasks: [
            {
              processingFunction: "creativeBuilder",
              model: "creativeBuilder.setup",
              dataModel: "creativeBuilder.data",
              assetTypes: ["displayAd"],
              type: "export",
              exportType: "gif",
            },
          ],
        },
        exportImage: {
          title: "Export dynamic image",
          tasks: [
            {
              processingFunction: "creativeBuilder",
              model: "creativeBuilder.setup",
              dataModel: "creativeBuilder.data",
              assetTypes: ["dynamicImage", "dynamicImageDesigned"],
              type: "export",
              enablePartial: true,
            },
          ],
        },
        exportPDF: {
          title: "Export POS pdf",
          tasks: [
            {
              processingFunction: "creativeBuilder",
              model: "creativeBuilderPOS.setup",
              dataModel: "creativeBuilderPOS.data",
              assetTypes: ["dynamicPDF"],
              type: "export",
            },
          ],
        },
      },
    },

    preset2Data: {
      title: "Publish campaigns",
      modules: ["multiMarket",
          "templateDesigner",
          "Accounts analytics",
          "publish Manager",
          "Campaign Concepts",
          "Multi Department",
          "Multi Market",
          "Dashboard Notifications",
          "Campaign Planning"],
      channels: ["landingspage", "radio"],
      campaignformatTitle: "Publish campaigns",
      iconClass: "icon-publish-campaigns",
      presetInfo: {
        title: "Publish campaigns",
        subTitle:
          "Create template based creatives and publish to ad platforms.",
        modules: [
          "multiMarket",
          "templateDesigner",
          "Accounts analytics",
          "publish Manager",
          "Campaign Concepts",
          "Multi Department",
          "Multi Market",
          "Dashboard Notifications",
          "Campaign Planning",
        ],
        about:
          "Now they can manage all campaign types, budgets, and creatives in one place. This includes validation checks and the ability to publish campaigns to the right audience at the platform of choice, and all the necessary campaign build-up, targeting and naming conventions. Expedia needs a way to orchestrate their retail media services by collecting information from their advertisers.",
      },

      interfaceSetup: {
        pages: [
          {
            key: crypto.randomUUID(),
            templateTitle: "Settings",
            type: "page",
            title: "Settings",
            path: "settings",
            showLanguageSelector: false,
            multiLanguage: false,
            tour: false,
            tabs: [
              {
                key: crypto.randomUUID(),
                title: "General",
                path: "general",
                type: "page",
                showLanguageSelector: false,
                multiLanguage: false,
                tour: false,
                blocks: [
                  {
                    title: "General settings",
                    itemType: "block",
                    type: "multiInput",
                    opened: true,
                    items: [
                      {
                        key: crypto.randomUUID(),
                        type: "assetGalleryInput",
                        title: "image",
                        fileType: "image",
                        itemType: "input",
                        label: "Image icon",
                        model: "settings.image",
                        sourceDataModel: "settings.imageLibrary",
                        format: "Square",
                        outputWidth: 600,
                        outputHeight: 600,
                      },
                      {
                        key: crypto.randomUUID(),
                        type: "text",
                        title: "title",
                        model: "settings.title",
                        itemType: "input",
                        label: "Title",
                        readOnly: "{{{auth.type=='user'}}}",
                        maxLength: 50,
                        useValueObject: false,
                        validators: [
                          {
                            type: "length",
                            max: 20,
                            severity: "warning",
                            message:
                              "Text over 20 characters is allowed, but can cause displaing issues",
                          },
                        ],
                      },
                      {
                        key: crypto.randomUUID(),
                        type: "richtext",
                        title: "Description",
                        model: "settings.description",
                        itemType: "input",
                        label: "Description",
                        includedOptions: [
                          "heading",
                          "|",
                          "bold",
                          "italic",
                          "link",
                          "bulletedList",
                          "numberedList",
                        ],
                      },
                      {
                        key: crypto.randomUUID(),
                        label: "Status",
                        type: "select",
                        itemType: "input",
                        model: "concept.status",
                        options: {
                          unpublished: "Unpublished",
                          published: "Published",
                        },
                      },
                    ],
                    key: crypto.randomUUID(),
                  },
                  {
                    title: "Planning",
                    itemType: "block",
                    type: "planning",
                    opened: true,
                    items: [
                      {
                        key: crypto.randomUUID(),
                        type: "dateRange",
                        model: "settings.planning",
                        label: "Planning",
                        minDate: "",
                        itemType: "input",
                        maxDate: "",
                      },
                    ],
                    key: crypto.randomUUID(),
                  },
                ],
              },
            ],
          },
          {
            key: crypto.randomUUID(),
            templateTitle: "Generic page",
            type: "page",
            title: "Display",
            path: "display",
            showLanguageSelector: false,
            multiLanguage: false,
            tour: false,
            tabs: [
              {
                key: crypto.randomUUID(),
                title: "General",
                path: "general",
                type: "page",
                showLanguageSelector: false,
                multiLanguage: false,
                tour: false,
                blocks: [
                  {
                    title: "Creative Builder",
                    type: "creativeBuilder",
                    itemType: "block",
                    multilanguage: true,
                    review: true,
                    model: "creativeBuilder.setup",
                    dataModel: "creativeBuilder.data",
                    templateTypes: ["displayAd", "displayAdDesigned"],
                    hasMuiIcon: true,
                    icon: "design_services",
                    key: crypto.randomUUID(),
                  },
                ],
              },
            ],
          },
          {
            key: crypto.randomUUID(),
            templateTitle: "Generic page",
            type: "page",
            title: "Social",
            path: "social",
            showLanguageSelector: false,
            multiLanguage: false,
            tour: false,
            tabs: [
              {
                key: crypto.randomUUID(),
                title: "General",
                path: "general",
                type: "page",
                showLanguageSelector: false,
                multiLanguage: false,
                tour: false,
                blocks: [
                  {
                    title: "Creative Builder",
                    type: "creativeBuilder",
                    itemType: "block",
                    multilanguage: true,
                    review: true,
                    model: "creativeBuilderSocial.setup",
                    dataModel: "creativeBuilderSocial.data",
                    templateTypes: ["socialChannelItem"],
                    hasMuiIcon: true,
                    icon: "design_services",
                    key: crypto.randomUUID(),
                  },
                ],
              },
            ],
          },
          {
            path: "email",
            title: "Email",
            blockModelBase: "email",
            blockModel: "email",
            preview: {
              type: "multi-email",
              multiLanguage: true,
              model: "multiEmailBuilder.setup",
              dataModel: "multiEmailBuilder.data",
            },
            blocks: [
              {
                type: "multiEmailBuilder",
                title: "Email content",
                review: true,
                model: "multiEmailBuilder.setup",
                dataModel: "multiEmailBuilder.data",
                canEdit: true,
                planning: true,
                planningMax: 5,
                editorData: {
                  lockedLevel: 7,
                  canAdd: true,
                  canMove: true,
                  canRemove: true,
                  canEdit: true,
                  maxBlocks: 13,
                },
                settingsInterfaceSetup: [
                  {
                    type: "textMultiLanguage",
                    model: "subject",
                    readOnly: "{{{auth.type=='user'}}}",
                    label: "Subject",
                  },
                  {
                    type: "divider",
                  },
                  {
                    type: "textMultiLanguage",
                    model: "snippet",
                    readOnly: "{{{auth.type=='user'}}}",
                    label: "Snippet",
                  },
                  {
                    type: "select",
                    model: "settings.utmContent",
                    label: "UTM content",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    selectType: "single",
                    options: {
                      NOTSET: "Select..",
                      teaser: "Teaser",
                      initial: "Initial",
                      reminder: "Reminder",
                      reminder2: "Reminder 2",
                      reminder3: "Reminder 3",
                    },
                  },
                  {
                    type: "divider",
                  },
                  {
                    type: "select",
                    model: "info.identifierChannel",
                    label: "Variant identifier",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    defaultValue: "z",
                    options: {
                      z: "z",
                      a: "a",
                      b: "b",
                      c: "c",
                      d: "d",
                      e: "e",
                    },
                  },
                  {
                    type: "hidden",
                    model: "settings.identifierChannel",
                    parseValue: "{{{[[blockModel]].info.identifierChannel}}}",
                  },
                  {
                    type: "select",
                    model: "info.identifierTarget",
                    label: "Audience identifier",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    defaultValue: "z",
                    options: {
                      1: "1",
                      2: "2",
                      3: "3",
                      4: "4",
                      5: "5",
                      z: "z",
                    },
                  },
                  {
                    type: "hidden",
                    model: "settings.identifierTarget",
                    parseValue: "{{{[[blockModel]].info.identifierTarget}}}",
                  },
                  {
                    type: "display",
                    model: "info.campaignCode",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    label: "Campaign code",
                    condition:
                      "blockData.info.identifierChannel && blockData.info.identifierTarget",
                    displayValue:
                      "{{{campaign.settings.identifier+'em'+[[blockModel]].info.identifierChannel+[[blockModel]].info.identifierTarget+'00'}}}",
                  },
                  {
                    type: "divider",
                  },
                  {
                    type: "text",
                    model: "info.reportingName",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    tooltip:
                      "This is a measurement that will be shown in the report",
                    label: "Reporting name",
                  },
                  {
                    type: "display",
                    model: "info.reportingString",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    label: "Campaign reporting string",
                    condition:
                      "blockData.info.identifierChannel && blockData.info.identifierTarget && blockData.info.reportingName",
                    displayValue:
                      "{{{campaign.settings.identifier+'em'+[[blockModel]].info.identifierChannel+[[blockModel]].info.identifierTarget+'00'+'_'+campaign.settings.titleInput+'_'+[[blockModel]].info.reportingName.value}}}",
                  },
                  {
                    type: "display",
                    model: "targetAudience",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    label: "Campaign target audience",
                    displayValue: "{{{campaign.settings.targetAudience}}}",
                  },
                  {
                    type: "text",
                    model: "info.targetAudience",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    tooltip:
                      "Denk aan SOK, personeel, voorspelmodel en ontdubbelen, Huishouden en emailadres.",
                    label: "Target Audience",
                    multiline: true,
                  },
                  {
                    type: "assetSelector",
                    model: "info.emailPdf",
                    readOnly:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    label: "Definitive version email",
                    sourceDataModel: "email.pdfLibrary",
                    fileType: "pdf",
                  },
                  {
                    type: "number",
                    model: "kpi.openrate",
                    label: "Open rate",
                    condition:
                      "{{{auth.type!='user' && auth.type!='marketManager' && auth.type!='campaignManagerDepartment'}}}",
                    valueLabelDisplay: "on",
                    startAdornment: "%",
                    defaultValue: 50,
                  },
                  {
                    type: "display",
                    label: "Open rate",
                    condition:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    displayValue: "{{{[[blockModel]].kpi.openrate}}}",
                    model: "kpi.openrateDisplay",
                  },
                  {
                    type: "number",
                    model: "kpi.cto",
                    condition:
                      "{{{auth.type!='user' && auth.type!='marketManager' && auth.type!='campaignManagerDepartment'}}}",
                    valueLabelDisplay: "on",
                    label: "Click To Open",
                    startAdornment: "%",
                    defaultValue: 50,
                  },
                  {
                    type: "display",
                    label: "Click To Open",
                    condition:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    displayValue: "{{{[[blockModel]].kpi.cto}}}",
                    model: "kpi.ctoDisplay",
                  },
                  {
                    type: "number",
                    model: "kpi.optout",
                    condition:
                      "{{{auth.type!='user' && auth.type!='marketManager' && auth.type!='campaignManagerDepartment'}}}",
                    valueLabelDisplay: "on",
                    label: "Opt Out",
                    startAdornment: "%",
                    defaultValue: 50,
                  },
                  {
                    type: "display",
                    label: "Opt Out",
                    condition:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    displayValue: "{{{[[blockModel]].kpi.optout}}}",
                    model: "kpi.optoutDisplay",
                  },
                  {
                    type: "number",
                    model: "kpi.closeAlert",
                    condition:
                      "{{{auth.type!='user' && auth.type!='marketManager' && auth.type!='campaignManagerDepartment'}}}",
                    valueLabelDisplay: "on",
                    label: "Close Alert",
                    defaultValue: 0,
                  },
                  {
                    type: "display",
                    label: "Close Alert",
                    condition:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    displayValue: "{{{[[blockModel]].kpi.closeAlert}}}",
                    model: "kpi.closeAlertDisplay",
                  },
                  {
                    type: "number",
                    label: "Annual Premium Equivalent (APE)",
                    condition:
                      "{{{auth.type!='user' && auth.type!='marketManager' && auth.type!='campaignManagerDepartment'}}}",
                    maxLength: 10,
                    model: "kpi.ape",
                    useValueObject: false,
                    helperText: "numbers only in this APE",
                  },
                  {
                    type: "display",
                    label: "Annual Premium Equivalent (APE)",
                    condition:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    displayValue: "{{{[[blockModel]].kpi.ape}}}",
                    model: "kpi.apeDisplay",
                  },
                  {
                    type: "number",
                    model: "kpi.obligo",
                    condition:
                      "{{{auth.type!='user' && auth.type!='marketManager' && auth.type!='campaignManagerDepartment'}}}",
                    label: "Obligo",
                    maxLength: 10,
                    useValueObject: false,
                  },
                  {
                    type: "display",
                    label: "Obligo",
                    condition:
                      "{{{auth.type=='user' || auth.type=='marketManager' || auth.type=='campaignManagerDepartment'}}}",
                    displayValue: "{{{[[blockModel]].kpi.obligo}}}",
                    model: "kpi.obligoDisplay",
                  },
                ],
                key: "89c1fa0c-bff1-4951-87f4-8756de208de9",
                itemType: "block",
              },
            ],
            key: "5327d2a2-9780-4627-8db4-17a036fd6fd3",
          },
          {
            key: "28823406-e30d-487a-b827-efe1c94ec541",
            templateTitle: "Generic page",
            type: "page",
            title: "Publish",
            path: "publish",
            showLanguageSelector: false,
            multiLanguage: false,
            tour: false,
            tabs: [
              {
                key: "c1ec4a9a-5c94-4a30-8a59-1ef52c1210e5",
                title: "General",
                path: "general",
                type: "page",
                showLanguageSelector: false,
                multiLanguage: false,
                tour: false,
                blocks: [
                  {
                    title: "Publish",
                    itemType: "block",
                    opened: true,
                    type: "publish",
                    model: "publish.results",
                    hasMuiIcon: true,
                    icon: "publish",
                    key: "5537b9bc-38f0-4608-b13e-ce9033a7502b",
                  },
                ],
              },
            ],
          },
        ],
      },

      publishProfiles: {
        export: {
          title: "Export video",
          tasks: [
            {
              processingFunction: "creativeBuilder",
              model: "creativeBuilder.setup",
              dataModel: "creativeBuilder.data",
              assetTypes: ["dynamicVideo", "dynamicVideoDesigned"],
              type: "export",
            },
          ],
        },
        exportAds: {
          title: "Export display",
          tasks: [
            {
              processingFunction: "creativeBuilder",
              model: "creativeBuilder.setup",
              dataModel: "creativeBuilder.data",
              assetTypes: ["displayAd", "displayAdDesigned"],
              type: "export",
              enablePartial: true,
            },
          ],
        },
        exportAdsGIF: {
          title: "Export display to GIF",
          tasks: [
            {
              processingFunction: "creativeBuilder",
              model: "creativeBuilder.setup",
              dataModel: "creativeBuilder.data",
              assetTypes: ["displayAd"],
              type: "export",
              exportType: "gif",
            },
          ],
        },
        exportImage: {
          title: "Export dynamic image",
          tasks: [
            {
              processingFunction: "creativeBuilder",
              model: "creativeBuilder.setup",
              dataModel: "creativeBuilder.data",
              assetTypes: ["dynamicImage", "dynamicImageDesigned"],
              type: "export",
              enablePartial: true,
            },
          ],
        },
        exportPDF: {
          title: "Export POS pdf",
          tasks: [
            {
              processingFunction: "creativeBuilder",
              model: "creativeBuilderPOS.setup",
              dataModel: "creativeBuilderPOS.data",
              assetTypes: ["dynamicPDF"],
              type: "export",
            },
          ],
        },
      },
    },
  }

  export default dataForPresets

