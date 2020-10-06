import Request from "../../../components/FIT/TrainingProgram.Request.vue";
import RequestList from "../../../components/FIT/TrainingProgram.RequestList.vue";
import { requestData } from "./Data/requestData.js";

export default {
	title: "ACC/FIT/Request",
    component: Request,
    subcomponents:{RequestList},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Request v-bind="$props"/>`
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
	components: { Request },
	template: `<Request v-bind="$props"/>`,
});
export const Default = Template.bind({});
Default.args = {
    id:requestData[0].id,
    email:requestData[0].email,
    dateRequestSent:requestData[0].dateRequestSent,
};

const ListTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { RequestList },
	template: `<RequestList :requests="requests"/>`,
});
export const ListLoaded = ListTemplate.bind({});
ListLoaded.args = {
	requests:requestData
};

export const ListLoading = ListTemplate.bind({});
ListLoading.args = {
	requests:null
};
export const ListEmpty = ListTemplate.bind({});
ListEmpty.args = {
	requests:[]
};