export const NavApplicationData = {
	label: "Home",
	type: "home",
	pageID: -1,
	nodes: [
		
		{
			label: "Educational Products",
			type: "headline",
			pageID: 0,
		},
		{
			label: "All Bundles",
			type: "bundles",
			pageID: 0,
			nodes: [
				{
					label: "EchoSap",
					type: "bundle",
					pageID: 12345,
					nodes: [
						{
							label: "ClickSap",
							type: "subbundle",
							pageID: 12345,
						},
						{
							label: "PopSap",
							type: "subbundle",
							pageID: 12345,
							isActive: true,
						},
					],
				},
				{
					label: "CathSap",
					type: "bundle",
					pageID: 12345,
				},
			],
		},
		{
			label: "Subscription Management",
			type: "headline",
			pageID: 0,
		},
		{
			label: "All Groups",
			type: "groups",
			pageID: 0,
			nodes: [
                {
                    label: "Default",
                    type: "group",
                    pageID: 12345,
                },
                {
					label: "Eastern Hospitals",
					type: "group",
					pageID: 12345,
				},
				{
					label: "Western Hospitals",
					type: "group",
					pageID: 12345,
				},
				{
					label: "Central Hospitals",
					type: "group",
					pageID: 12345,
				}
				
			],
		},{
            label: "Group Admin",
            type: "group-admin",
            pageID: 1351,
        },
		{
			label: "Subscription Users",
			type: "user",
			pageID: 1351,
		},
		{ label: "Subscription Users", type: "new" },
        {
			label: "Account",
			type: "headline",
			pageID: 0,
		},
		{
			label: "Company Profile",
			type: "companyprofile",
			pageID: 0,
            nodes:[
                {
                    label: "Admin",
                    type: "admin",
                    pageID: 1351,
                },{
                label: "Subscription Contracts",
                type: "contracts",
                pageID: 0,
                nodes: [
                    {
                        label: "CardioSource+",
                        type: "contract",
                        pageID: 12345,
                    },
                ],
            }               
            ]
		},
		{
			label: "My Profile",
			type: "profile",
			pageID: 0,
		},
	],
};

