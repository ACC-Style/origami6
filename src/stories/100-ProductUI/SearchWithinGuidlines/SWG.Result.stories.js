import RecommendationResult from "../../../../src/components/GLSearch/GLSearch.Result.Recommendation.vue";
import TableResult from "../../../../src/components/GLSearch/GLSearch.Result.Table.vue";
import SectionResult from "../../../../src/components/GLSearch/GLSearch.Result.Section.vue";
import ResultFooter from "../../../../src/components/GLSearch/GLSearch.Result.Footer.vue";
import ResultContainer from "../../../../src/components/GLSearch/GLSearch.Result.Container.vue";
import {results,resultRecommendation,sectionContent,resultTable,amendments} from "./Data/dataResultReturn.js";

export default {
	title: "Apps/GuidelineSearch/Result",
    component: RecommendationResult,
	subcomponents:{ResultFooter,ResultContainer},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<RecommendationResult v-bind="$props" />`
			},

		},
	},
	argTypes:{
		cor:{
			description:"", 
				control:{type:"select",options:["1","2","3","harm","no-benefit"]}
			},
			loe:{
				description:"", 
					control:{type:"select",options:['A', 'B-R', 'B-NR', 'C-EO','C-LD']}
				},
		}
};


const RecResultTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { RecommendationResult },
	template: `<RecommendationResult  class="max-w_70 m-x_auto" v-bind="result" />`,
});
export const Recommendation = RecResultTemplate.bind({});
Recommendation.args = {
	result:results[2]
};

const SecResultTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { SectionResult },
	template: `<SectionResult class="max-w_70 m-x_auto" v-bind="result" />`,
});

export const Section = SecResultTemplate.bind({});
Section.args = {
	result:results[1]
};

const TableResultTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TableResult },
	template: `<TableResult class="max-w_70 m-x_auto" v-bind="result" />`,
});
export const Table = TableResultTemplate.bind({});
Table.args = {
	result:results[0]

};

const FooterTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { ResultFooter },
	template: `<ResultFooter
	v-bind="result"
	/>`,
});
export const Footer = FooterTemplate.bind({});
Footer.args = {
	result:results[2]
};
export const FooterWithHistory = FooterTemplate.bind({});
FooterWithHistory.args = {
	result:results[0]
};