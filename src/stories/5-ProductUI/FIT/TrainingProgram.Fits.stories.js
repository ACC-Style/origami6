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
	template: `<Fit v-bind="data" :birthday="birthday" :endDate="endDate" @onUpdateBirthday="" @onUpdateEndeDate="" @onRemove=""/>`,
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
export const MissingBirthday = Template.bind({});
MissingBirthday.args = {
    data:fitData[0],
    id:fitData[0].id,
    birthday:null,
    endDate:fitData[0].endDate,

};
export const MissingEndDate = Template.bind({});
MissingEndDate.args = {
    data:fitData[0],
    id:fitData[0].id,
    birthday:fitData[0].birthday,
    endDate:fitData[0].null,

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
ListLoaded.args = {
    data:null
};