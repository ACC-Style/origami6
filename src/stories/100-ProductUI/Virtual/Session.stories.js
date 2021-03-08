import Session from "../../../components/Virtual/Virtual.Session.vue";
import Credits from "../../../components/subComponents/CreditChiclet.vue";
import Btn from "../../../components/subComponents/Btn.vue";

export default {
	title: "Virtual/Program/Session",
	component: Session,
	subcomponents: {Credits, Btn},
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
	template: `<Session></Session>`,
});
export const Live = Template.bind({});
Live.args = {
        
};
