export const commonArgs = {
	icon: {
		description:
			"font-awesome icon for use with decorating the input like a dollar sign, or user",
		control: {
			type: "select",
			options: [
				"",
				"fa-lock",
				"fa-user",
				"fa-heart",
				"fa-cog",
				"fa-key",
				"fa-dollar-sign",
			],
		},
	},
	state: {
		control: {
			type: "select",
			options: [
				"",
				"alert",
				"requiredAlert",
				"warning",
				"success",
				"info",
				"accent",
				"disabled",
			],
		},
	},
	type: {
		control: { type: "select", options: ["text", "email", "password","number","date",'time'] },
	},
};
