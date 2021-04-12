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
		creditTypes:{
			description:"", 
				control:{type:"",options:[]}
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
		v-bind='result'
		:documentTitle ="result.gltitle"
		:content="result.abs[0]"
		:supportingText="result.comments[0]"
		:references="result.refinfo"
		:cor="result.cor"
		:loe="result.loe"
		:docURL="result.jacclink"
		:pdfURL="result.pdflink"
		:hubURL="'http://www.acc.org/'+result.hub"
		/>`,
});
export const Recommendation = RecResultTemplate.bind({});
Recommendation.args = {
	result: results[0],
};
