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
	template: `<RecommendationResult  class="max-w_70 m-x_auto"
		:eid="eid"	
		:documentTitle ="documentTitle"
		:content="content"
		:supportingText="supportingText"
		:references="references"
		:cor="cor"
		:loe="loe"
		:docURL="docURL"
		:pdfURL="pdfURL"
		:hubURL="hubURL"
		:breadcrumb="breadcrumb"
		:pointOfCare="pointOfCare"
		:conditions="conditions"
		:sectionTitle="sectionTitle"
		:amendments="amendments"
		/>`,
});
export const Recommendation = RecResultTemplate.bind({});
Recommendation.args = {
	eid:resultRecommendation[0].eid,
	cor:resultRecommendation[0].cor,
	loe:resultRecommendation[0].loe,
	result: resultRecommendation[0],
	documentTitle:resultRecommendation[0].gltitle,
	sectionTitle:resultRecommendation[0].itemtitle,
	content:resultRecommendation[0].abs[0],
	docURL:resultRecommendation[0].jacclink,
	pdfURL:resultRecommendation[0].pdflink,
	hubURL: 'http://www.acc.org/'+resultRecommendation[0].hub,
	breadcrumb:resultRecommendation[0].sectiontitle.slice(0,-0),
	pointOfCare:resultRecommendation[0].pointofcare,
	conditions:resultRecommendation[0].conditions,
	references:resultRecommendation[0].refinfo,
	supportingText:resultRecommendation[0].comments[0],
	amendments:null,
};

const SecResultTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { SectionResult },
	template: `<SectionResult class="max-w_70 m-x_auto"
	:eid="eid"	
	:documentTitle ="documentTitle"
		:content="content"
		:supportingText="supportingText"
		:references="references"
		:cor="cor"
		:loe="loe"
		:docURL="docURL"
		:pdfURL="pdfURL"
		:hubURL="hubURL"
		:breadcrumb="breadcrumb"
		:pointOfCare="pointOfCare"
		:conditions="conditions"
		:sectionTitle="sectionTitle"
		:summary="summary"
		:amendments="amendments"
		/>`,
});

export const Section = SecResultTemplate.bind({});
Section.args = {
	eid:results[0].eid,
	cor:results[0].cor,
	loe:results[0].loe,
	result: results[0],
	documentTitle:results[0].gltitle,
	sectionTitle:results[0].itemtitle,
	summary:results[0].summary,
	content:sectionContent[1].results,
	docURL:results[0].jacclink,
	pdfURL:results[0].pdflink,
	hubURL: 'http://www.acc.org/'+results[0].hub,
	breadcrumb:results[0].sectiontitle.slice(1,-1),
	pointOfCare:null,
	conditions:null,
	amendments:amendments,
};

const TableResultTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TableResult },
	template: `<TableResult class="max-w_70 m-x_auto"
		:eid="eid"
		:documentTitle ="documentTitle"
		:content="content"
		:supportingText="supportingText"
		:references="references"
		:docURL="docURL"
		:pdfURL="pdfURL"
		:hubURL="hubURL"
		:breadcrumb="breadcrumb"
		:sectionTitle="sectionTitle"
		:summary="summary"
		:amendments="amendments"
		/>`,
});
export const Table = TableResultTemplate.bind({});
Table.args = {
	eid: resultTable[0].eid,
	result: resultTable[0],
	documentTitle:resultTable[0].gltitle,
	sectionTitle:resultTable[0].itemtitle,
	summary:resultTable[0].summary,
	content:sectionContent[2].results,
	docURL:resultTable[0].jacclink,
	pdfURL:resultTable[0].pdflink,
	hubURL: 'http://www.acc.org/'+results[0].hub,
	breadcrumb:resultTable[0].sectiontitle.slice(1,-1),
	amendments:amendments,

};

const FooterTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { ResultFooter },
	template: `<ResultFooter
	:eid="eid"
	:documentTitle ="documentTitle"
	:docURL="docURL"
	:pdfURL="pdfURL"
	:hubURL="hubURL"
	:breadcrumb="breadcrumb"
	:pointOfCare="pointOfCare"
	:conditions="conditions"
	:amendments="amendments"
	/>`,
});
export const Footer = FooterTemplate.bind({});
Footer.args = {
	eid:results[0].eid,
	cor:results[0].cor,
	loe:results[0].loe,
	result: results[0],
	documentTitle:results[0].gltitle,
	sectionTitle:results[0].sectiontitle.pop(),
	content:results[0].abs[0],
	docUR:results[0].jacclink,
	pdfUR:results[0].pdflink,
	hubURL: 'http://www.acc.org/'+results[0].hub,
	breadcrumb:results[0].sectiontitle.slice(1,-1),
	pointOfCare:results[0].pointofcare,
	conditions:results[0].conditions,
	references:results[0].refinfo,
	supportingText:results[0].comments[0],
	amendments:amendments,
};