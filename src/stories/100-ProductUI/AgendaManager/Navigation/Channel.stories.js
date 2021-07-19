import HoverContainer from "../../../../components/AdvancedContainers/hoverContainer.vue";
import Channel from "../../../../components/AgendaManagement/Agenda.ChannelListItem";
import StateChart from "../../../../components/AgendaManagement/SubComponents/Agenda.StateChart.vue";
import Btn from "../../../../components/subComponents/Btn.vue";
import ListLoader from "../../../../components/subComponents/ListLoader.vue";
import LoadingText from "../../../../components/subComponents/LoadingText.vue";
import {channelListData} from "../Data/channelList.js";

export default {
	title: "APPS/SessionManager/Channel/List",
    component: Channel,
    subcomponents:{HoverContainer,StateChart,ListLoader,Btn,LoadingText},
	parameters: {
		docs: {
			description: {
				component:
					"Channels are a grouping of sessions",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Channel />`
			},

		},
	},
	argTypes:{
		releaseMode:{
			description:"This toggles the time collection from the entire channel on the On Demand to per session if release mode is set to Scheduled", 
				control:{type:"select",options:['On Demand', 'Scheduled']}
			},
		}
};
const chartData = [{
	color: "success",
	label: "completed",
	count: 85,
},
{
	color: "warning",
	label: "incomplete",
	count: 9,
},
{
	color: "alert",
	label: "missing",
	count: 8,
}];
const ItemTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Channel },
	template: `<Channel :chartData="chartData" :credits="credits" :label="label" :releaseMode="releaseMode" />`,
});


export const Item = ItemTemplate.bind({});
Item.args = {
	id:"5a14af04-2d86-4400-88ab-fa9422f54420",
	label:'label for this channel',
	chartData:chartData,
	credits:["cme", "cne"],
	releaseMode:"On Demand",
};

const ListTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { ListLoader, Btn, LoadingText,Channel },
	template: `
        <div class="max-w_80 font_0">
        <h3>Channels</h3>
		<div class="bg_black-2 br_1 br_black-2 br_solid">
		<ListLoader :list="list">
			<template v-slot:listNull><div class="p_4 bg_black-1 br_solid br_black-3 br_1"><LoadingText/></div></template>
			<template v-slot:listEmpty>
				<article class="m_4 p_4 shadow_2 br_radius br_solid br_2 br_white-9 bg_shade-5 font_ui" >
					<h1 class="font_regular p_3 font_2 text_center br-b_1 br_solid br_shade-4" >
						<i class="far fa-exclamation-triangle"></i> You have no channels
						<i class="far fa-exclamation-triangle"></i>
					</h1>
					<p class="font_0 p-y_3 lh_3 text_center">
						Channels are a great way to organize. Click the new button to add your first channel to this program. 
					</p>
				</article>
			</template>
			<template v-slot:listLoaded >
				<Channel v-for="(channel, index) in list" v-bind="channel" :key="'channel'+index" />
			</template>
		</ListLoader>
        </div>
		</div>`,
});

//ChannelListData
export const Loading = ListTemplate.bind({});
Loading.args = {
	list:null
};
export const Empty = ListTemplate.bind({});
Empty.args = {
	list:[]
};
export const Loaded = ListTemplate.bind({});
Loaded.args = {
	list:channelListData
};