import HoverContainer from "../../../../components/AdvancedContainers/hoverContainer.vue";
import SessionListItem from "../../../../components/AgendaManagement/Agenda.SessionListItem.vue";

export default {
	title: "APPS/SessionManager/SessionListItem",
    component: SessionListItem,
    subcomponents:{HoverContainer},
	parameters: {
		docs: {
			description: {
				component:
					"Chanel List Item",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<SessionListItem />`
			},

		},
	},
	argTypes:{
		type:{
			description:"", 
				control:{type:"select",options:[]}
			},
		}
};

const ListTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { SessionListItem },
	template: `<SessionListItem/>`,
});


export const SessionItem = ListTemplate.bind({});
SessionItem.args = {
};

