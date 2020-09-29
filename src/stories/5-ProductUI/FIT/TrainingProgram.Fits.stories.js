import Fit from "../../../components/FIT/TrainingProgram.FIT.vue";
import FitList from "../../../components/FIT/TrainingProgram.FITList.vue";
import { fitData } from "./Data/fitData.js";


export default {
	title: "FIT/FellowInTraining",
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
				code: `<Fit v-bind="$props"/>`
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
	template: `<Fit v-bind="data" :birthday="birthday" :endDate="endDate"/>`,
});
export const FIT = Template.bind({});
FIT.args = {
    data:fitData[0],
    id:Number(fitData[0].id),
    birthday:Number(fitData[0].birthday),
    endDate:Number(fitData[0].endDate),

};