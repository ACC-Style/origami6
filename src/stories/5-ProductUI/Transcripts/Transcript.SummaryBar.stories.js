import SummaryBar from "../../../components/Transcript/SummaryBar.vue";
import {creditDictionary} from "./Data/CreditCountDictionary.js"

export default {
	title: "ACC/Transcript/SummaryBar",
    component: SummaryBar,
    subcomponents:{},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code:  `<SummaryBar
				:endDate="endDate"
				:startDate="startDate"
				:filteredCreditCountDictionary="filteredCreditCountDictionary"
				:totalCreditCountInDateRange="totalCreditCountInDateRange"
					
					/>`
			},

		},
	},
	argTypes:{
		startDate:{
			 control:{type:"date"}
			},
			endDate:{
					control:{type:"date"}
			},
		}
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { SummaryBar },
	template: `<SummaryBar
:endDate="endDate"
:startDate="startDate"
:filteredCreditCountDictionary="filteredCreditCountDictionary"
:totalCreditCountInDateRange="totalCreditCountInDateRange"
	
	/>`,
});
export const Default = Template.bind({});
Default.args = {
	endDate:null,
	startDate:1539521172000,
	filteredCreditCountDictionary:creditDictionary,
	totalCreditCountInDateRange:25

};