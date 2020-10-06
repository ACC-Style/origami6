import TranscriptItem from "../../../components/Transcript/TranscriptItem.vue";
import {originalObject} from "./Data/originalObject.js";
import {creditTypes} from "./Data/creditTypes.js";

export default {
	title: "ACC/Transcript/Item",
    component: TranscriptItem,
    subcomponents:{},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code:  `<TranscriptItem/>`
			},

		},
	},
	
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TranscriptItem },
	template: `<TranscriptItem  v-bind="$props" />`,
});
export const Default = Template.bind({});
Default.args = {
    originalObject:originalObject,
    id:originalObject.id,
    isExternal:originalObject.isExternal,
    isLegacyExternal:originalObject.isLegacyExternal,
    activityFormat:originalObject.activityFormat,
    activity:originalObject.activity,
    activityDateClaimed:originalObject.activityDateClaimed,
    vnrNumber:originalObject.vnrNumber,
    credits:originalObject.credits,
    activityLocation:originalObject.activityLocation,
    selectedCreditFilters:["None"],
    creditTypes:creditTypes,
    selectedSort:"Date",
    customerId:"15612166",
    itemLoadLimit:20,
    itemIndex:0,
    transcriptsApiUrl:'',

};








// let newActivity = {
//     activityFormat: 'Online Learning',
//     activity: 'Name of the Activity',
//     activityDateClaimed: new Date(),
//     credits: [{
//         id: 1,
//         // CE is the old/retired code for CNE. In our system, the code is still CE. We will process CE as CNE.
//         type: "CNE",
//         amount: 3,
//         maxAmount: 3,
//         creditDateClaimed: new Date(),
//         certId: 1354,
//         certFileName: 'CertB.pdf'
//         }],
//     vnrNumber: '',
//     activityLocation: 'Washington DC',
//     isExternal: false,
//     isLegacyExternal: false
//     };
//     let creditObj = {
//     id: transcript.transcriptid,
//     // CE is the old/retired code for CNE. In our system, the code is still CE. We will process CE as CNE.
//     type: transcript.cecredittypecode === "CE" ? "CNE" : transcript.cecredittypecode,
//     amount: transcript.cecredits,
//     maxAmount: transcript.maxcredits,
//     creditDateClaimed: new Date(transcript.cecreditdate),
//     certId: transcript.attachmentId,
//     certFileName: transcript.attachmentName
//     };



// let newActivity = {
//     activityFormat: transcript.accmeactivityformat,
//     activity: transcript.programtitle,
//     activityDateClaimed: new Date(transcript.cecreditdate),
//     credits: [creditObj],
//     vnrNumber: transcript.vnrNumber,
//     activityLocation: transcript.activityLocation,
//     isExternal: typeof transcript.accmeactivityformat === "string" && transcript.accmeactivityformat.toUpperCase() === "EXTERNAL",
//     isLegacyExternal: typeof transcript.accmeactivityformat === "string" && transcript.accmeactivityformat.toUpperCase() === "EXTERNAL" &&
//     typeof transcript.comments === "string" && (transcript.comments.toUpperCase() === "SENT BY YMLEARNING" || transcript.comments.toUpperCase() === "SENT BY OASIS LMS TO ACC INTEGRATION")
//     };
//     let creditObj = {
//     id: transcript.transcriptid,
//     // CE is the old/retired code for CNE. In our system, the code is still CE. We will process CE as CNE.
//     type: transcript.cecredittypecode === "CE" ? "CNE" : transcript.cecredittypecode,
//     amount: transcript.cecredits,
//     maxAmount: transcript.maxcredits,
//     creditDateClaimed: new Date(transcript.cecreditdate),
//     certId: transcript.attachmentId,
//     certFileName: transcript.attachmentName
//     };