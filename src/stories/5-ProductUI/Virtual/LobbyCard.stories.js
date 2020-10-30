import Card from "../../../components/Virtual/Virtual.LobbyCard.vue";
import Credits from "../../../components/subComponents/CreditChiclet.vue";
import Btn from "../../../components/subComponents/Btn.vue";

export default {
	title: "Virtual/Lobby/Card",
	component: Card,
	subcomponents: {Credits, Btn},
	parameters: {
		docs: {
			description: {
				component: "Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Card class="max-w_70" v-bind="$props"/>`,
			},
		},
	},
	argTypes: {
		actions: {
			onSaveToLibrary: { action: "addToLibrary" },
			onRemoveFromLibrary: { action: "remove this from user library" },
			onNavigateToArticle: { action: "navigate page to article" },
			onNavigateToAuthor: {
				action:
					"navigate page to author bio or articles from the same author",
			},
        },
        startDate:{control:{type:"date"}},
        endDate:{control:{type:"date"}},
        timezone:{description:"uses moment time zone https://momentjs.com/timezone/"}
	},
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Card },
	template: `<div class="max-w_30">
		<Card :title="title" :startDate="new Date(startDate)" :endDate="new Date(endDate)" :credits="credits" :eventType="eventType" :timezone="timezone" :registerForEvent="registerForEvent"/>
	</div>`,
});
export const Live = Template.bind({});
Live.args = {
    id:15605484,
    title:"ACC Cardiovascular Overview and Board Prep Virtual Experience",
    startDate: "2020-11-27T20:37:24Z",
    endDate: "2020-11-27T23:37:24Z",
    credits: [{"id":1,"type":"CNE","value":3},{"id":2,"type":"COP","value":3}],
    eventType:"In Person Meeting",
    registerForEvent:true,
	timezone:'America/Los_Angeles',
	headerImage_lg: ""
    
};
