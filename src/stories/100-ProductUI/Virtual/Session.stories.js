import Session from "../../../components/Virtual/Virtual.Session.vue";
import SessionV2 from "../../../components/Virtual/Virtual.Session.V2.vue";
import SessionV3 from "../../../components/Virtual/Virtual.Session.V3.vue";
import SessionAbstracts from "../../../components/Virtual/Virtual.Session.Abstracts.vue";
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
		showCategoryLabel: { control: { type: "boolean" } },
		categoryLabel:{ control: { type: "text" } },
		useModal: { control: { type: "boolean" } },
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
	description: `<p>
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
				"http://mtv.com/maecenas/rhoncus/aliquam/lacus/morbi.json?amet=dictumst",
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
			name: "Trippin",
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
const TemplateV2 = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { SessionV2 },
	template: `<div class="max-w_70 m-auto"><SessionV2 v-bind="$props" :startDate="new Date(startDate)" :endDate="new Date(endDate)" ></SessionV2></div>`,
});

export const VersionTwo = TemplateV2.bind({});
VersionTwo.args = {
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
			duration_minutes: 0,
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
			id: 1,
			name: "Virtual Moderator",
			duration_minutes: 0,
			attachement: "",
			author: [
				{
					full_name: "Dr. Valentin Fuster",
					id: "0820168548",
					location: { city: "New York", state: "New York", country: "USA" },
				}
			],
		},
		{
			id: 2,
			name: "Discussion",
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

const TemplateAbstract = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { SessionAbstracts },
	template: `<div class="max-w_70 m-auto"><SessionAbstracts v-bind="$props" :startDate="new Date(startDate)" :endDate="new Date(endDate)" ></SessionAbstracts></div>`,
});

export const VersionAbstract = TemplateAbstract.bind({});
VersionAbstract.args = {
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
			name: "Primary Author(s)",
			duration_minutes: 0,
			attachement:
				"http://mtv.com/maecenas/rhoncus/aliquam/lacus/morbi.json?amet=dictumst&consectetuer=aliquam&adipiscing=augue&elit=quam&proin=sollicitudin&risus=vitae&praesent=consectetuer&lectus=eget&vestibulum=rutrum&quam=at&sapien=lorem&varius=integer&ut=tincidunt&blandit=ante&non=vel&interdum=ipsum&in=praesent&ante=blandit&vestibulum=lacinia&ante=erat&ipsum=vestibulum&primis=sed&in=magna&faucibus=at&orci=nunc&luctus=commodo&et=placerat&ultrices=praesent&posuere=blandit&cubilia=nam&curae=nulla&duis=integer&faucibus=pede&accumsan=justo&odio=lacinia&curabitur=eget&convallis=tincidunt&duis=eget&consequat=tempus&dui=vel&nec=pede&nisi=morbi&volutpat=porttitor&eleifend=lorem&donec=id&ut=ligula&dolor=suspendisse&morbi=ornare&vel=consequat&lectus=lectus&in=in&quam=est&fringilla=risus&rhoncus=auctor&mauris=sed&enim=tristique",
			author: [
				{
					full_name: "Dr. Valentin Fuster",
					id: "0820168548",
					location: { city: "New York", state: "New York", country: "USA" },
				}
			],
		},
		{
			id: 1,
			name: "Co-authors",
			duration_minutes: 0,
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
			name: "Contributors",
			duration_minutes: 0,
			attachement:
				"",
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
		}
	],
};

const TemplateVersion3 = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { SessionV3 },
	template: `<div class="max-w_70 m-auto"><SessionV3 v-bind="$props" :startDate="new Date(startDate)" :endDate="new Date(endDate)" ></SessionV3></div>`,
});

export const Version3 = TemplateVersion3.bind({});
Version3.args = {
	SessionNumber: "808",
	title: " Core Knowledge in Action: What Everyone Ought To Know About HFpEF",
	isLive: true,
	startDate: "2021-12-09 01:59:00",
	endDate: "2021-12-30 02:59:00",
	showCategoryLabel: true,
	categoryLabel: "Core Knowledge in Action",
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
	credits: [
		{
			"type": "CME",
			"value": 1.7,
			"styleCode": "CME"
		  },
		{
		  "type": "CNE<sup>RX</sup>",
		  "value": 8,
		  "styleCode": "CNErx"
		},
		{
		  "type": "COP",
		  "value": 10,
		  "styleCode": "COP"
		}
	  ],
	  presentations: [
		{
			id: 1,
			name: "Panel Chairs",
			duration_minutes: 0,
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
				"http://mtv.com/maecenas/rhoncus/aliquam/lacus/morbi.json?amet=dictumst",
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
			name: "Trippin",
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
	categoryTags:{
		'Clinical Topic':'Heart Failure',
		'Professional Focus':'Clincian'
	}		
	,
	decoratorTags:{
		"Tag Category A":['Tag1','Tag2','Tag3'],
		"Tag Category B":['Tag1','Tag2','Tag3'],
	}
};