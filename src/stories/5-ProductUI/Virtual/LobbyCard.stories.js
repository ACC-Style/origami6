import LobbyCard from "../../../components/Virtual/Virtual.LobbyCard.vue";
import Credits from "../../../components/subComponents/CreditChiclet.vue";
import Btn from "../../../components/subComponents/Btn.vue";

export default {
	title: "Virtual/Lobby/LobbyCard",
	component: LobbyCard,
	subcomponents: {Credits, Btn},
	parameters: {
		docs: {
			description: {
				component: "Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<LobbyCard class="max-w_70" v-bind="$props"/>`,
			},
		},
	},
	argTypes: {
        startDate:{control:{type:"date"}},
		endDate:{control:{type:"date"}},
		onDemandDate:{control:{type:"date"}},
		timezone:{description:"uses moment time zone https://momentjs.com/timezone/"},
		corner:{control:{type:"select", options:["radius", "round", "square"]}}
	},
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { LobbyCard },
	template: `<div class="max-w_30">
		<LobbyCard 
			:title="title" 
			:startDate="new Date(startDate)" 
			:endDate="new Date(endDate)" 
			:onDemandDate="new Date(onDemandDate)"
			:credits="credits" 
			:eventType="eventType" 
			:timezone="timezone" 
			:registerForEvent="registerForEvent" 
        	:imgLG="imgLG"
        	:imgMD="imgMD"
			:imgSM="imgSM"
			:corner="corner"
			:shortText="shortText"
		/>
	</div>`,
});
export const Live = Template.bind({});
Live.args = {
    id:15605484,
	title:"ACC Cardiovascular Overview and Board Prep Virtual Experience",
	shortText:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius quisquam, exercitationem neque explicabo animi asperiores aliquam? Eum, enim porro!",
    startDate: "2020-11-27T20:37:24Z",
	endDate: "2020-11-27T23:37:24Z",
	onDemandDate: "2020-12-31T23:37:24Z",
    credits: [{"id":1,"type":"CNE","value":3},{"id":2,"type":"COP","value":3}],
    eventType:"In Person Meeting",
    registerForEvent:true,
	timezone:'America/Los_Angeles',
	imgLG:"https://picsum.photos/id/1018/900/80",
	imgMD:"https://picsum.photos/id/1018/600/80",
	imgSM:"https://picsum.photos/id/1018/300/80",
	corner:"radius"
    
};
