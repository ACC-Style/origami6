import Result from "../../../../src/components/GLSearch/GLSearch.Result.vue";
import ResultContainer from "../../../../src/components/GLSearch/GLSearch.Result.Container.vue";
import ResultFooter from "../../../../src/components/GLSearch/GLSearch.Result.Footer.vue";
//Data Imports
import {results,resultRecommendation,sectionContent,resultTable,amendments} from "./Data/dataResultReturn.js";

export default {
	title: "Apps/GuidelineSearch/Result",
    component: Result,
	subcomponents:{ResultFooter,ResultContainer},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Result v-bind="$props" />`
			},

		},
	},
	argTypes:{
		cor:{
			description:"Only used with recommendations", 
				control:{type:"select",options:["1","2","3","3: harm","no-benefit"]}
			},
			loe:{
				description:"Only used with recommendations", 
					control:{type:"select",options:['A','B', 'B-R', 'B-NR', 'C-EO','C-LD']}
				},
		}
};

const ResultTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Result },
	template: `<Result  
		class="max-w_70 m-x_auto" 
		v-bind="result"
		:subtype="subtype"
		:itemtitle="itemtitle"
		:abs="abs"
		:gltitle="gltitle"
		:jacclink="jacclink"
		:pdflink="pdflink"
		:hub="hub"
		:sectiontitleformatted="sectiontitleformatted"
		:eid="eid"
		:loe="loe"
		:cor="cor"
		:pointofcare="pointofcare"
		:conditions="conditions"
		:amendments="amendments"
		:comments="comments"
		:refinfo="refinfo"
	/>`,
});


// const RecommendationResultTemplate = (args, { argTypes }) => ({
// 	props: Object.keys(argTypes),
// 	components: { Result },
// 	template: `<Result  
// 		class="max-w_70 m-x_auto" 
// 		v-bind="result"
// 		:subtype="subtype"
// 		:itemtitle="itemtitle"
// 		:abs="abs"
// 		:gltitle="gltitle"
// 		:jacclink="jacclink"
// 		:pdflink="pdflink"
// 		:hub="hub"
// 		:sectiontitleformatted="sectiontitleformatted"
// 		:eid="eid"
// 		:loe="loe"
// 		:cor="cor"
// 		:pointofcare="pointofcare"
// 		:conditions="conditions"
// 		:amendments="amendments"
// 		:comments="comments"
// 		:refinfo="refinfo"
// 	/>`,
// });
export const Recommendation = ResultTemplate.bind({});
Recommendation.args = {
	result:results[2],
	subtype: results[2].subtype,
	itemtitle: results[2].itemtitleFormatted,
	abs: results[2].abs,
	gltitle: results[2].gltitle,
	jacclink: results[2].jacclink,
	pdflink: results[2].pdflink,
	hub: results[2].hub,
	sectiontitleformatted: results[2].sectiontitleformatted,
	eid: results[2].eid,
	loe: results[2].loe,
	cor: results[2].cor,
	pointofcare: results[2].pointofcare,
	conditions: results[2].conditions,
	amendments: results[2].amendments,
	comments: results[2].comments,
	refinfo: results[2].refinfo,
};



export const Section = ResultTemplate.bind({});
Section.args = {
	result:results[1],
	result:results[1],
	subtype:results[1].subtype,
	summary:results[1].summary,
	results:results[1].results,
	gltitle:results[1].gltitle,
	jacclink:results[1].jacclink,
	pdflink:results[1].pdflink,
	hub:results[1].hub,
	eid:results[1].eid,
	loe:results[1].loe,
	cor:results[1].cor,
	pointofcare:results[1].pointofcare,
	conditions:results[1].conditions,
	amendments:results[1].amendments,
	itemtitle:results[1].itemtitleFormatted,
	sectiontitleformatted:results[1].sectiontitleformatted,
};

export const Table = ResultTemplate.bind({});
Table.args = {
	result:results[0],
	subtype:results[0].subtype,
	summary:results[0].summary,
	results:results[0].results,
	gltitle:results[0].gltitle,
	jacclink:results[0].jacclink,
	pdflink:results[0].pdflink,
	hub:results[0].hub,
	eid:results[0].eid,
	loe:results[0].loe,
	cor:results[0].cor,
	pointofcare:results[0].pointofcare,
	conditions:results[0].conditions,
	amendments:results[0].amendments,
	itemtitle:results[0].itemtitleFormatted,
	sectiontitleformatted:results[0].sectiontitleformatted,

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