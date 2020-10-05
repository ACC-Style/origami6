import CreditFilterNav from "../../../components/Transcript/CreditFilterNav.vue";
import { creditTypes } from "./Data/creditTypes";

export default {
	title: "ACC/Transcript/CreditFilterNav",
    component: CreditFilterNav,
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code:  `<CreditFilterNav :creditTypesInDateRange="creditTypesInDateRange" 
                />`
			},

		},
	},
	argTypes:{
        onUpdatefilter:{action:'update with array'},
        creditTypesInDateRange:{control:{type:"array"}},
        creditTypeObject:{control:{type:"object"}},
		}
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { CreditFilterNav },
	template: `<CreditFilterNav :creditTypesInDateRange="creditTypesInDateRange" 
    />`,
});
export const Default = Template.bind({});
Default.args = {
    creditTypesInDateRange:creditTypes,
    creditTypeObject:creditTypes[0]
};