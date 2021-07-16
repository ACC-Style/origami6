import HoverContainer from "../../../../components/AdvancedContainers/hoverContainer.vue";
import Channel from "../../../../components/AgendaManagement/Agenda.ChannelListItem";
import ChanelChart from "../../../../components/AgendaManagement/SubComponents/Agenda.ChannelChart.vue";

export default {
	title: "APPS/SessionManager/Channel/Item",
    component: Channel,
    subcomponents:{HoverContainer,ChanelChart},
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


export const ChannelItem = ListTemplate.bind({});
ChannelItem.args = {
};

