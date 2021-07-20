import HoverContainer from "../../../components/AdvancedContainers/hoverContainer.vue";
import Session from "../../../components/AgendaManagement/Agenda.SessionListItem.vue";
import Btn from "../../../components/subComponents/Btn.vue";
import ListLoader from "../../../components/subComponents/ListLoader.vue";
import LoadingText from "../../../components/subComponents/LoadingText.vue";
import {sessionListData} from "./Data/sessionList.js";

export default {
	title: "APPS/SessionManager/Session",
    component: Session,
    subcomponents:{HoverContainer},
	parameters: {
		docs: {
			description: {
				component:
					"Chanel List Item",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Session />`
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

const ItemTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Session },
	template: `<Session v-bind="$props"/>`,
});


export const Item = ItemTemplate.bind({});
Item.args = {
	id: sessionListData[0].id,
	sessionId: sessionListData[0].sessionId,
	label: sessionListData[0].label,
	state: sessionListData[0].state,
	stateLabel: sessionListData[0].stateLabel,
	activeTime: '12:00',
	activeDate: '2018-01-01',
	credits:  [
		{
		  "label": "CNE<sub>rx</sub>",
		  "count": 8,
		  "cssClass": "CME"
		},
		{
		  "label": "COP",
		  "count": 25,
		  "cssClass": "CME"
		},
		{
		  "label": "CNE",
		  "count": 11,
		  "cssClass": "CNE"
		}
	  ]
};
const ListTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { ListLoader, Btn, LoadingText,Session },
	template: `
        <div class="max-w_75 font_0">
        <div class="flex flex_row gap-x_3">
		<h3 class="font_3 c_black-9 flex_auto">
			Sessions
		</h3>
		<div class="flex flex_auto max-w_15 font_n2 self_center"><span class="font_bold self_center">Status:</span>
			<select class="lh_1 font_n2 p_2 p-y_0 font_n1 m-l_3"><option label="all"/><option label="completed"/><option label="alert"/><option label="warning"/></select>
		</div>
		<div class="flex flex_auto max-w_15 font_n2 self_center"><span class="font_bold self_center">Sort:</span><select class="lh_1 font_n2 p_2 p-y_0 font_n1 m-l_3"><option label="all"/></select></div>
		<div class="flex flex_shrink max-w_15 font_n2 self_center">
		<Btn
		class="lh_1 p-x_3 h:bg_primary h:c_white"
		:state="'none'"
		:size="'tiny'"
		:shadow="false"
		:corner="'round'"
		><i class="far p-r_3 p_1 fa-search" ></i> Search
		</Btn>
		</div>
		<div class="self_center"><Btn
		class="lh_1 p-x_3"
		:state="'secondary'"
		:size="'tiny'"
		:shadow="false"
		:corner="'round'"
		><i class="far p-r_3 p_1 fa-plus" ></i> new sessions
		</Btn></div>
		</div>
		<div class="bg_black-2 br_1 br_black-2 br_solid">
		<ListLoader :list="list">
			<template v-slot:listNull><div class="p_4 bg_black-_05 br_solid br_black-1 br_1 font_1">Pulling in Sessions for this Program ... <LoadingText class="inline font_bold font_1"/></div></template>
			<template v-slot:listEmpty>
				<article class="m_4 p_4 shadow_2 br_radius br_solid br_2 br_white-9 bg_shade-5 font_ui" >
					<h1 class="font_regular p_3 font_2 text_center br-b_1 br_solid br_shade-4" >
						<i class="far fa-exclamation-triangle"></i> You have no Sessions
						<i class="far fa-exclamation-triangle"></i>
					</h1>
					<p class="font_0 p-y_3 lh_3 text_center">
						Click the Add Sessions button or the new button to add your first sessions to this program. 
					</p>
					<div class="text_center"><Btn>Add Sessions</Btn></div>
				</article>
			</template>
			<template v-slot:listLoaded >
				<Session v-for="(session, index) in list" v-bind="session" :key="'session'+index" />
			</template>
		</ListLoader>
        </div>
		</div>`,
});
export const ListLoading = ListTemplate.bind({});
ListLoading.args = {
	list:null
};
export const ListEmpty = ListTemplate.bind({});
ListEmpty.args = {
	list:[]
};
export const ListLoaded = ListTemplate.bind({});
ListLoaded.args = {
	list: sessionListData.sort((a,b)=>{ 
		return a.sessionId < b.sessionId ? -1 : 1;
		})
};