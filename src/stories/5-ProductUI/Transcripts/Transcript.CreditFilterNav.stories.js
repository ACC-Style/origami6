import CreditFilterNav from "../../../components/Transcript/CreditFilterNav.vue";
import Btn from "../../../components/subComponents/Btn.vue";
import { creditTypes } from "./Data/creditTypes";

export default {
	title: "ACC/Transcript/CreditFilterNav",
	component: CreditFilterNav,
	subcomponents: { Btn },
	parameters: {
		docs: {
			description: {
				component: "Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<CreditFilterNav :creditTypesInDateRange="creditTypesInDateRange" 
                />`,
			},
		},
	},
	argTypes: {
		creditTypesInDateRange: { control: { type: "array" } },
		btnConfig: { control: { type: "object" } },
	},
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { CreditFilterNav },
	template: `<CreditFilterNav :creditTypesInDateRange="creditTypesInDateRange"  :btnConfig="btnConfig"
    />`,
});
export const Default = Template.bind({});
Default.args = {
	creditTypesInDateRange: creditTypes,
	btnConfig: {
		state: "black",
		size: "medium",
		shadow: false,
		corner: "square",
		classes: "",
		isActivatable: true,
	},
};
