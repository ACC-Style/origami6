export const NavApplicationData = {
    "label": "Root",
    "type": "",
    "pageID": -1,
    "nodes": [
        {
            "label": "Company Profile",
            "type": "companyprofile",
            "pageID": 0
        },
        {
            "label": "Contracts",
            "type": "contracts",
            "pageID": 0,
            "nodes": [
                {
                    "label": "CardioSource+",
                    "type": "contract",
                    "pageID": 12345
                }
            ]
        },
        {
            "label": "Bundles",
            "type": "bundles",
            "pageID": 0,
            "nodes": [
                {
                    "label": "EchoSap",
                    "type": "bundle",
                    "pageID": 12345,
                    "nodes": [
                        {
                            "label": "ClickSap",
                            "type": "subbundle",
                            "pageID": 12345
                        },
                        {
                            "label": "PopSap",
                            "type": "subbundle",
                            "pageID": 12345,
                            "isActive": true
                        }
                    ]
                },
                {
                    "label": "CathSap",
                    "type": "bundle",
                    "pageID": 12345,
                }
            ]
        },
        {
            "label": "Groups",
            "type": "groups",
            "pageID": 0,
            "nodes": [
                {
                    "label": "Default",
                    "type": "group",
                    "pageID": 12345,

                },
                {
                    "label": "Eastern Hospitals",
                    "type": "group",
                    "pageID": 12345,

                },
                {
                    "label": "Western Hospitals",
                    "type": "group",
                    "pageID": 12345,

                },
                {
                    "label": "Central Hospitals",
                    "type": "group",
                    "pageID": 12345,

                }
            ]
        },
        {
            "label": "My Profile",
            "type": "profile",
            "pageID": 0
        },
    ]
};
export const NavUsersData = {
    label: "Root",
    type: "",
    pageID: -1,
    nodes: [
        {
            label: "All",
            type: "users-all",
            pageID: 1351,
        },
        {
            label: "Admin",
            type: "admin",
            pageID: 1351,
        },
        {
            label: "Group Admin",
            type: "group-admin",
            pageID: 1351,
        },
        {
            label: "Subscription Holders",
            type: "user",
            pageID: 1351,
        }
    ],
};

export const NavProgramsAndCollections = {
    label: "Root",
    type: "",
    pageID: -1,
    nodes: [
        {
            label: "All Programs",
            type: "programs",
            pageID: 1351,
        },
        {
            label: "ACC 2021",
            type: "program",
            pageID: 1351,
            nodes: [
                {
                    label: "Featured Sessions",
                    type: "collection",
                    pageID: 1351,
                }, {
                    label: "Pathway Collections",
                    type: "collection",
                    pageID: 1351,
                    isActive: true
                }
            ]
        }, {
            label: "Athletic Heart 2021",
            type: "program",
            pageID: 2500,
            nodes: [
                {
                    label: "Featured Sessions",
                    type: "collection",
                    pageID: 2510,
                }, {
                    label: "Pathway Collections",
                    type: "collection",
                    pageID: 251,
                }
            ]
        },
        {
            label: "New Program",
            type: "new",
            pageID: 1351,
        }

    ],
};