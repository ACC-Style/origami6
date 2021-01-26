import Fit from "../../../components/FIT/TrainingProgram.FIT.vue";
import FitList from "../../../components/FIT/TrainingProgram.FITList.vue";
import { fitData } from "./Data/fitData.js";


export default {
	title: "ACC/FIT/FellowInTraining",
    component: Fit,
    subcomponents:{FitList},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Fit v-bind="data" :birthday="birthday" :endDate="endDate" @onUpdateBirthday="" @onUpdateEndeDate="" @onRemove=""/>`
			},

		},
    },
    argTypes:{
        birthday:{control:{type:"date"}},
        endDate:{control:{type:"date"}}

    }
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Fit },
	template: `<Fit 
	:fullName="fullName"
	:email ="email"
	:address ="address"
	:pendingReview ="pendingReview"
	:id ="id"
	:birthday="birthday"
	:endDate="endDate"
	@onUpdateBirthday=""
	@onUpdateEndeDate=""
	@onRemove=""/>`,
});
const vBind = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Fit },
	template: `<Fit v-bind="$props"	/>`,
});
export const FIT = Template.bind({});
FIT.args = {
	fullName:fitData[0].fullName,  
	email:fitData[0].email,
	address:fitData[0].address,
	pendingReview:fitData[0].pendingReview,
	id:fitData[0].id,
    birthday:fitData[0].birthday,
    endDate:fitData[0].endDate,

};
export const MissingBirthday = vBind.bind({});
MissingBirthday.args = {
	fullName:fitData[0].fullName,  
	email:fitData[0].email,
	address:fitData[0].address,
	pendingReview:fitData[0].pendingReview,
	id:fitData[0].id,
    endDate:fitData[0].endDate,

};
export const MissingEndDate = Template.bind({});
MissingEndDate.args = {
	fullName:fitData[0].fullName,  
	email:fitData[0].email,
	address:fitData[0].address,
	pendingReview:false,
	id:fitData[0].id,

};
const ListTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { FitList },
	template: `<FitList :fits="data"/>`,
});
export const ListLoaded = ListTemplate.bind({});
ListLoaded.args = {
    data:fitData
};
export const ListEmpty= ListTemplate.bind({});
ListEmpty.args = {
    data:[]
};
export const ListLoading= ListTemplate.bind({});
ListLoading.args = {
data:null
};