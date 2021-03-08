import Session from "../../../components/Virtual/Virtual.Session.vue";
import Credits from "../../../components/subComponents/CreditChiclet.vue";
import Btn from "../../../components/subComponents/Btn.vue";
import TabFlag from "../../../components/subComponents/TabFlag.vue";

export default {
	title: "Virtual/Program/Session",
	component: Session,
	subcomponents: {Credits, Btn, TabFlag},
	parameters: {
		docs: {
			description: {
				component: "Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Session class="max-w_70" v-bind="$props"/>`,
			},
		},
	},
	
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Session },
	template: `<div class="max-w_70 m-auto"><Session v-bind="$props" ></Session></div>`,
});
export const Live = Template.bind({});
Live.args = {
	
	isLive:true,	
	description:`	<p>
		This Core Knowledge in Action session features heart failure
		experts who will guide attendees through the basics of
		HF-pEF, echocardiographic assessment, screening for
		secondary causes, and review of the
	</p>
	<p>
		2017 ACC focused update on HF management. The session will
		conclude with a knowledge check-in and question and answer
		panel with the experts.
	</p>`

        
};
