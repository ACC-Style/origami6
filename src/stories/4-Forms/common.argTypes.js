export const commonArgTypes = {
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
	required: { control: { type: "boolean", label: "Required" } },
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
		control: {
			type: "select",
			options: ["text", "email", "password", "number", "date", "time"],
		},
	},
	postLabel: {
		type: "string",
		control: { label: "Post Label", type: "text" },
	},
	onClickPostLabel: { action: "onClickPostLabel" },
	defaultSlot: {
		type: "string",
		control: { type: "text",meta_description: "slot content" },
		
	},
	hint: { type: "string",
	control: { type: "text" }, meta_description: "hint content" },
	alertMessage: {
		type: "string",
		control: { type: "text",meta_description: "slot content" },
		
	},
	successMessage: {
		type: "string",
		control: { type: "text",meta_description: "slot content" },
		
	},
	warningMessage: {
		type: "string",
		control: { type: "text",meta_description: "slot content" },
		
	},
	accentMessage: {
		type: "string",
		control: { type: "text",meta_description: "slot content" },
		
	},
	infoMessage: {
		type: "string",
		control: { type: "text",meta_description: "slot content" },
		
	},
};
export const commonArgs = {
	inputId: null,
	icon: "",
	state: "",
	postLabel: "",
	required: false,
	hint: "",
	defaultSlot: "Input label",
	alertMessage: "Alert This is Wrong",
	warningMessage: "Warning Will Robinson",
	successMessage: "Congratulations you can follow instructions",
	infoMessage: "This is some info about your value",
	accentMessage: "This is a note about the value entered",
};
