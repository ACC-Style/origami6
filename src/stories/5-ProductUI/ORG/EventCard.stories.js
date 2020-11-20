import EventCard from "../../../components/ORG/ORG.EventCard.vue";
import Credits from "../../../components/subComponents/CreditChiclet.vue";
import Btn from "../../../components/subComponents/Btn.vue";
import HeaderImage from "../../../components/ORG/subComponent/HeaderImage.vue";

export default {
	title: "ACC/Home/EventCard",
	component: EventCard,
	subcomponents: {HeaderImage,Credits, Btn},
	parameters: {
		docs: {
			description: {
				component: "Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `</div><div><EventCard class="max-w_70" v-bind="$props"/>`,
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
	components: { EventCard },
	template: `<div class="flex gap-x_5">

			<EventCard 
			class="flex_auto w_30"
			:title="title" 
			:startDate="new Date(startDate)" 
			:endDate="new Date(endDate)" 
			:onDemandDate="new Date(onDemandDate)"
			:credits="credits" 
			:eventType="eventType" 
			:timezone="timezone" 
			:registerForEvent="registerForEvent" 
        	:imgLG="imgLG1"
        	:imgMD="imgMD1"
			:imgSM="imgSM1"
			:corner="corner"
			:shortText="shortText"
		/>
		<EventCard 
		class="flex_auto w_30"
		:title="title" 
		:startDate="new Date('2020-12-03T20:37:24Z')" 
		:endDate="new Date('2020-12-04T20:37:24Z')" 
		:onDemandDate="new Date(onDemandDate)"
		:credits="undefined" 
		:eventType="eventType" 
		:timezone="timezone" 
		:registerForEvent="registerForEvent" 
		:imgLG="imgLG3"
		:imgMD="imgMD3"
		:imgSM="imgSM3"
		:corner="corner"
		:shortText="shortText"
	/>
	<EventCard 
	class="flex_auto w_30"
	:title="'A Celebration of Heros of the Frontline'" 
	:startDate="new Date('2020-12-25T20:37:24Z')" 
	:endDate="new Date('2020-12-25T20:37:24Z')" 
	:onDemandDate="new Date(onDemandDate)"
	:credits="credits" 
	:eventType="eventType" 
	:timezone="timezone" 
	:registerForEvent="false" 
	:imgLG="imgLG2"
	:imgMD="imgMD2"
	:imgSM="imgSM2"
	:corner="corner"
	:shortText="shortText"
/>
</div>`,
});
export const Live = Template.bind({});
Live.args = {
    id:15605484,
	title:"ACC Cardiovascular Overview and Board Prep Virtual Experience",
	shortText:undefined,
    startDate: "2020-11-27T20:37:24Z",
	endDate: "2020-11-27T23:37:24Z",
	onDemandDate: "2020-12-31T23:37:24Z",
    credits: [{"id":1,"type":"CNE","value":3},{"id":2,"type":"COP","value":3}],
    eventType:"In Person Meeting",
    registerForEvent:true,
	timezone:'America/Los_Angeles',
	imgLG1:"https://picsum.photos/id/1018/900/80",
	imgMD1:"https://picsum.photos/id/1018/600/80",
	imgSM1:"https://picsum.photos/id/1018/300/80",
	imgLG2:"https://picsum.photos/id/620/900/80",
	imgMD2:"https://picsum.photos/id/620/600/80",
	imgSM2:"https://picsum.photos/id/620/300/80",
	imgLG3:"https://picsum.photos/id/905/900/80",
	imgMD3:"https://picsum.photos/id/905/600/80",
	imgSM3:"https://picsum.photos/id/905/300/80",
	corner:"radius"
    
};
