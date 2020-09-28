import CreditLegend from "../../../components/Transcript/Transcript.CreditLegend.vue";

export default {
	title: "Transcript/Legend",
    component: CreditLegend,
    subcomponent:,
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<CreditLegend v-bind="$props"/>`
			},

		},
		argTypes:{
			creditTypes:{
				description:"", 
					control:{type:"",options:[]}
				},
			}
	}
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { CreditLegend },
	template: `<CreditLegend v-bind="$props"/>`,
});
export const Legend = Template.bind({});
Legend.args = {
	arg1:1
};