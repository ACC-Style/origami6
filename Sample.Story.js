import VueComp from "../../../components/VueComp.vue";

export default {
	title: "Transcript/Legend",
    component: VueComp,
    subcomponents:{},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<VueComp v-bind="$props"/>`
			},

		},
	},
	argTypes:{
		creditTypes:{
			description:"", 
				control:{type:"",options:[]}
			},
		}
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { VueComp },
	template: `<VueComp v-bind="$props"/>`,
});
export const Default = Template.bind({});
Default.args = {
	arg1:1
};