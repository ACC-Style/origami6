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
	template: `<div class="max-w_70 m-auto"><Session></Session>
	<Session></Session>
	<Session></Session></div>`,
});
export const Live = Template.bind({});
Live.args = {
        
};
