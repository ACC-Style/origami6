import SortBar from "../../../components/Transcript/Transcript.Sort";

export default {
	title: "Transcript/Sort",
	component: SortBar,
	parameters: {
		docs: {
			description: {
				component:
					"A block area that shows the totals of credits and the amount that has be accumlated over time.",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Sort :sortTypes="sortTypes" :selectedSort="selectedSort" @updateselectedsort="updateselectedsort"></Sort>`,
			},
		},
	},
	argTypes: {
		sortTypes: {
			description:
				"The labels and types of sort this widget will display",
		},
		selectedSort: {
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
	components: { SortBar },
	template: `<SortBar v-bind="$props"/>`,
});
export const Legend = Template.bind({});
Legend.args = {
	sortTypes: ["Date", "Activity", "Product"],
    selectedSort: "Date",
    buttonDecorations:{shadow:false,corner:"square",size:"small",state:"secondary",isActivatable:true}
};
