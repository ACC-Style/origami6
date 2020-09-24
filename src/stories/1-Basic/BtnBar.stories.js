import BtnBar from "../../components/subComponents/BtnBar.vue";

export default {
	title: "Basic/BtnBar",
	component: BtnBar,
	parameters: {
		docs: {
			description: {
				component:
					"A block area that shows the totals of credits and the amount that has be accumlated over time.",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<BtnBar :sortTypes="sortTypes" :selectedSort="selectedSort" @updateselectedsort="updateselectedsort">Optional Label</BtnBar>`,
			},
		},
	},
	argTypes: {
		sortTypes: {
			description:
				"The labels and types of sort this widget will display",
		},
		options: {
            description:
            "Current and Default Activated Sort Button",
			control: {
				type: "select",
				options: ["Date", "Activity", "Product"],
			},
        },
        buttonDecorations: {description:
            "Optional Object of Button props to alter the decoration of the buttons used."}
	},
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { BtnBar },
	template: `<BtnBar  v-bind="$props">Optional Label</BtnBar>`,
});
export const Sort = Template.bind({});
Sort.args = {
	options: [{label:"Date",isActive:true},{label:"Product",isActive:false},{label:"Activity",isActive:false}],
    buttonDecorations:{shadow:false,corner:"square",size:"small",state:"secondary",
    isActivatable:true,
    multiselect:false}
};
