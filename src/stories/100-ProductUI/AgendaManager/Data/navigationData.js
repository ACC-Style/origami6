export const NavProgramsAndCollections = {
	label: "Home",
	type: "home",
	pageID: -1,
	nodes: [
		{
			label: "Programs & Channels",
			type: "headline",
			pageID: 1351,
			nodes: [
				
				{
					label: "All Programs",
					type: "program",
					pageID: 1351
				},
				{ label: "Recently Modified", type: "sub-headline" },
				{
					label: "ACC 2021",
					type: "program",
					pageID: 1351,
					
					nodes: [
						{
							label: "Featured Sessions",
							type: "collection",
							pageID: 1351,isActive: true,
						},
						{
							label: "Pathway Collections",
							type: "collection",
							pageID: 1351,
							
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
				}
			],
		},
		{
					label: "New Program",
					type: "new",
					pageID: 1351,
				},
		{
			label: "Sessions",
			type: "headline",
			pageID: 1351,
			nodes: [
				{
					label: "Recently Modified",
					type: "sub-headline",
				},
				{
					label: "Bungul fuga illo odio.",
					type: "session",
					pageID: 1351,
				},
				{
					label:
						"Atque molestias repellendus vel sit perspiciatis modi.",
					type: "session",
					pageID: 2500,
				},
			],
		},
		{
			label: "New Session",
			type: "new",
		},
		{
			label: "Elements Library",
			type: "headline",
		},
		{
			label: "Presentations",
			type: "presentations",
			pageID: 1351,
		},
		{
			label: "New Presentation",
			type: "new",
		},
		{
			label: "Tags",
			type: "tags",
			pageID: 1351,
			nodes: [
				{ label: "Recently Modified", type: "sub-headline" },
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
		{
			label: "Attachments",
			type: "attachments",
			pageID: 1351,
		},
		{
			label: "Users",
			type: "headline",
			pageID: 1351,
			nodes: [
				{
					label: "Faculty & Authors",
					type: "user",
					pageID: 1351,
				},				{
					label: "Admins",
					type: "admin",
					pageID: 1351,
				},
			]
		},		{
			label: "New User",
			type: "new",
		},
		
	],
};
