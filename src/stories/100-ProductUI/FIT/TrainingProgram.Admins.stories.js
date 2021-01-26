import Administrator from "../../../components/FIT/TrainingProgram.Admin.vue";
import  AdminList  from "../../../components/FIT/TrainingProgram.AdminList.vue";
import  { adminData }  from "./Data/adminData.js";


export default {
	title: "ACC/FIT/Administrator",
    component: Administrator,
    subcomponents:{ AdminList },
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
	id:"123532342",
    name:"John Smith",
    institution: "Fake Institution",
    adminType: "Director",
    readOnly:  false
};
const ListTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { AdminList },
	template: `<AdminList :admins="admins"/>`,
});
export const ListLoaded = ListTemplate.bind({});
ListLoaded.args = {
	admins:adminData
};

export const ListLoading = ListTemplate.bind({});
ListLoading.args = {
	admins:null
};
export const ListEmpty = ListTemplate.bind({});
ListEmpty.args = {
	admins:[]
};