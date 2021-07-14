import HoverContainer from "../../../../components/AdvancedContainers/hoverContainer.vue";
import Channel from "../../../../components/AgendaManagement/channel.vue";


export default {
	title: "APPS/SessionManager/Channel",
    component: Channel,
    subcomponents:{HoverContainer},
	parameters: {
		docs: {
			description: {
				component:
					"Chanel List Item",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Channel />`
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
	components: { Channel },
	template: `<Channel/>`,
});


export const channelItem = ListTemplate.bind({});
channelItem.args = {
};