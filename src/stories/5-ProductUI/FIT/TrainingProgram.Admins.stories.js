import Administrator from "../../../components/FIT/TrainingProgram.administrator.vue";

export default {
	title: "ACC/FIT/ADMIN",
    component: Administrator,
    subcomponents:{},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Administrator v-bind="$props"/>`
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
	components: { Administrator },
	template: `<Administrator v-bind="$props"/>`,
});
export const Admin = Template.bind({});
Admin.args = {
    name:"John Smith",
    institution: "Fake Institution",
    adminType: "Director",
    readOnly:  false
};