import BtnBar from "../../components/subComponents/BtnBar.vue";
import Btn from "../../components/subComponents/Btn.vue";

export default {
	title: "Basic/Button/BtnBar",
	component: BtnBar,
	subcomponents: { Btn },
	parameters: {
		docs: {
			description: {
				component:
					"A block area that shows the totals of credits and the amount that has be accumulated over time.",
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
            "Array of labels for the buttons",
        },
        btnConfig: {
			description:"Optional Object of Button props to alter the decoration of the buttons used.",
			control:{type:'object'}
		}
	},
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { BtnBar },
	template: `<BtnBar  v-bind="$props">Optional Label</BtnBar>`,
});
export const Default = Template.bind({});
Default.args = {
	options: [{label:"Date",isActive:true},{label:"Product",isActive:false},{label:"Activity",isActive:false}],
    btnConfig:{
		state: "black",
		size: "medium",
		shadow: false,
		corner: "square",
		classes: "",
		isActivatable: true,
	},
    multiselect:false,
};
