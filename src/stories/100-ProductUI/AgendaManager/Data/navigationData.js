export const NavProgramsAndCollections = {
	label: "Root",
	type: "",
	pageID: -1,
	nodes: [
		{
			label: "All Programs",
			type: "programs",
			pageID: 1351,nodes: [{label: "Active Programs",
			type: "headline",},
				{
					label: "ACC 2021",
					type: "program",
					pageID: 1351,
					nodes: [
						{
							label: "Featured Sessions",
							type: "collection",
							pageID: 1351,
						},
						{
							label: "Pathway Collections",
							type: "collection",
							pageID: 1351,
							isActive: true,
						},
					],
				},
				{
					label: "Athletic Heart 2021",
					type: "program",
					pageID: 2500,
					nodes: [
						{
							label: "Featured Sessions",
							type: "collection",
							pageID: 2510,
						},
						{
							label: "Pathway Collections",
							type: "collection",
							pageID: 251,
						},
					],
				},
                {
                    label: "New Program",
                    type: "new",
                    pageID: 1351,
                }
			],
		},
		{
			label: "Library & Tags",
			type: "headline",

		},{
            label: "All Sessions",
            type: "sessions",
            pageID: 1351,
        },
        {
            label: "New Session",
            type: "new",
        },{
            label: "All Tags",
            type: "tags",
            pageID: 1351,
            nodes: [
                {
                    label: "Learning Pathway",
                    type: "tag",
                    pageID: 1351,
                },
                {
                    label: "Session Format",
                    type: "tag",
                    pageID: 1351,
                },
                {
                    label: "Session Type",
                    type: "tag",
                    pageID: 1351,
                },
            ],
        },
        {
            label: "New Tag",
            type: "new",
        },
	],
};
