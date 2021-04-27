import Session from "../../../components/Virtual/Virtual.Session.vue";
import Credits from "../../../components/subComponents/CreditChiclet.vue";
import Btn from "../../../components/subComponents/Btn.vue";
import TabFlag from "../../../components/subComponents/TabFlag.vue";

export default {
	title: "Virtual/Program/Session",
	component: Session,
	subcomponents: { Credits, Btn, TabFlag },
	parameters: {
		docs: {
			description: {
				component: "The presentation block for sessions in the Program",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Session class="max-w_70" v-bind="$props"/>`,
			},
		},
	},
	argTypes: {
		startDate: { control: { type: "date" } },
		endDate: { control: { type: "date" } },
	},
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Session },
	template: `<div class="max-w_70 m-auto"><Session v-bind="$props" :startDate="new Date(startDate)" :endDate="new Date(endDate)" ></Session></div>`,
});
export const Live = Template.bind({});
Live.args = {
	isLive: true,
	startDate: "2021-04-09 01:59:00",
	endDate: "2021-04-30 02:59:00",
	description: `	<p>
		This Core Knowledge in Action session features heart failure
		experts who will guide attendees through the basics of
		HF-pEF, echocardiographic assessment, screening for
		secondary causes, and review of the
	</p>
	<p>
		2017 ACC focused update on HF management. The session will
		conclude with a knowledge check-in and question and answer
		panel with the experts.
	</p>`,
	presentations: [
		{
			id: 1,
			name: "Panel Chairs",
			duration_minutes: 15,
			attachement: "",
			author: [
				{
					full_name: "Dr. Valentin Fuster",
					id: "0820168548",
					location: { city: "New York", state: "New York", country: "USA" },
				},
				{
					full_name: "Daisey Janway",
					id: "3918594475",
					location: { city: "Lusaka", state: null, country: "Zambia" },
				},
				{
					full_name: "Alyosha Easson",
					id: "4604998256",
					location: { city: "Cikiruh", state: null, country: "Indonesia" },
				},
			],
		},
		{
			id: 2,
			name: "Can Mr. Smith Get to Washington Anymore?",
			duration_minutes: 30,
			attachement:
				"http://mtv.com/maecenas/rhoncus/aliquam/lacus/morbi.json?amet=dictumst&consectetuer=aliquam&adipiscing=augue&elit=quam&proin=sollicitudin&risus=vitae&praesent=consectetuer&lectus=eget&vestibulum=rutrum&quam=at&sapien=lorem&varius=integer&ut=tincidunt&blandit=ante&non=vel&interdum=ipsum&in=praesent&ante=blandit&vestibulum=lacinia&ante=erat&ipsum=vestibulum&primis=sed&in=magna&faucibus=at&orci=nunc&luctus=commodo&et=placerat&ultrices=praesent&posuere=blandit&cubilia=nam&curae=nulla&duis=integer&faucibus=pede&accumsan=justo&odio=lacinia&curabitur=eget&convallis=tincidunt&duis=eget&consequat=tempus&dui=vel&nec=pede&nisi=morbi&volutpat=porttitor&eleifend=lorem&donec=id&ut=ligula&dolor=suspendisse&morbi=ornare&vel=consequat&lectus=lectus&in=in&quam=est&fringilla=risus&rhoncus=auctor&mauris=sed&enim=tristique",
			author: [
				{
					full_name: "Giffie Studdal",
					id: "5232897551",
					location: { city: "Yantai", state: null, country: "China" },
				},
				{
					full_name: "Jan Lovel",
					id: "0035628278",
					location: { city: "Sidonganti", state: null, country: "Indonesia" },
				},
				{
					full_name: "Elaina Tolotti",
					id: "2797712471",
					location: { city: "Guohuan", state: null, country: "China" },
				},
			],
		},
		{
			id: 3,
			name: "Trippin'",
			duration_minutes: 10,
			attachement:
				"http://1688.com/nisi/venenatis/tristique/fusce/congue.html?amet=in&justo=libero&morbi=ut&ut=massa&odio=volutpat&cras=convallis&mi=morbi&pede=odio&malesuada=odio&in=elementum",
			author: [
				{
					full_name: "Carlynn Trobey",
					id: "8454342478",
					location: { city: "Bulakan", state: null, country: "Indonesia" },
				},
			],
		},
	],
};
