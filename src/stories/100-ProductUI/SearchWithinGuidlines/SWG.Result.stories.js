import RecommendationResult from "../../../../src/components/GLSearch/GLSearch.Result.Recommendation.vue";
import ResultFooter from "../../../../src/components/GLSearch/GLSearch.Result.Footer.vue";
import {results} from "./Data/dataResultReturn.js";

export default {
	title: "Apps/GuidelineSearch/Result",
    component: RecommendationResult,
    subcomponents:{ResultFooter},
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
const FooterTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { ResultFooter },
	template: `<ResultFooter />`,
});
export const Footer = FooterTemplate.bind({});
Footer.args = {
};

const RecResultTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { RecommendationResult },
	template: `<RecommendationResult
		:documentTitle ="result.gltitle"
		:content="result.abs[0]"
		:supportingText="result.comments[0]"
		:references="result.refinfo"
		:cor="cor"
		:loe="loe"
		:docURL="result.jacclink"
		:pdfURL="result.pdflink"
		:hubURL="'http://www.acc.org/'+result.hub"
		:breadcrumb="result.sectiontitle.slice(1,-1)"
		:pointOfCare="result.pointofcare"
		:conditions="result.conditions"
		/>`,
});
export const Recommendation = RecResultTemplate.bind({});
Recommendation.args = {
	cor:results[0].cor,
	loe:results[0].loe,
	result: results[0],
};
