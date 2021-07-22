import HoverContainer from "../../../components/AdvancedContainers/hoverContainer.vue";
import Program from "../../../components/AgendaManagement/Agenda.ProgramListItem";
import StateChart from "../../../components/AgendaManagement/SubComponents/Agenda.StateChart.vue";
import Btn from "../../../components/subComponents/Btn.vue";
import ListLoader from "../../../components/subComponents/ListLoader.vue";
import LoadingText from "../../../components/subComponents/LoadingText.vue";
import SearchBar from "../../../components/BasicForms/Input.SearchBar.vue";
import {programListData} from "./Data/programList.js";

export default {
	title: "APPS/SessionManager/Program/List",
    component: Program,
    subcomponents:{HoverContainer,StateChart,ListLoader,Btn,LoadingText,SearchBar},
	parameters: {
		docs: {
			description: {
				component:
					"Programs are the main structure of agendas",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `
<div class="max-w_80 font_0">
	<div class="flex flex_row">
		<h3 class="font_3 c_black-9 flex_auto">Program</h3>
		<div class="self_center"><Btn
		@onClick="onNewObject"
		class="lh_1 p-x_3"
		:state="'secondary'"
		:size="'tiny'"
		:shadow="false"
		:corner="'round'"
		><i class="far p-r_3 p_1 fa-plus" ></i> new
		</Btn>
		</div>
	</div>
	<div class="bg_black-2 br_1 br_black-2 br_solid">
	<ListLoader :list="list">
		<template v-slot:listNull><div class="p_4 bg_black-_05 br_solid br_black-1 br_1 font_1">Pulling in Programs for this Program ... <LoadingText class="inline font_bold font_1"/></div></template>
		<template v-slot:listEmpty>
			<article class="m_4 p_4 shadow_2 br_radius br_solid br_2 br_white-9 bg_shade-5 font_ui" >
				<h1 class="font_regular p_3 font_2 text_center br-b_1 br_solid br_shade-4" >
					<i class="far fa-exclamation-triangle"></i> You have no Programs
					<i class="far fa-exclamation-triangle"></i>
				</h1>
				<p class="font_0 p-y_3 lh_3 text_center">
					You need to have at least one Program to put sessions into. Click the Add Program Button or the new button to add your first Program to this program. 
				</p>
				<div class="text_center"><Btn>Add Program</Btn></div>
			</article>
		</template>
		<template v-slot:listLoaded >
			<Program v-for="(program, index) in list" v-bind="programs" :key="'Program'+index" />
		</template>
	</ListLoader>
	</div>
</div>`
			},

		},
	},
	argTypes:{
		releaseMode:{
			description:"This toggles the time collection from the entire Program on the On Demand to per session if release mode is set to Scheduled", 
				control:{type:"select",options:['On Demand', 'Scheduled']}
			},
		}
};

const ItemTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Program },
	template: `<Program :chartData="chartData" :credits="credits" :label="label" :startDate="startDate" :endDate="endDate" :type="type"/>`,
});


export const Item = ItemTemplate.bind({});
Item.args = {
	id:programListData[0].id,
	label:programListData[0].label,
	chartData:programListData[0].chartData,
	credits:programListData[0].credits,
    startDate:programListData[0].startDate,
    endDate:programListData[0].endDate,
    type:programListData[0].type,
};

const ListTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { ListLoader, Btn, LoadingText,Program ,SearchBar},
	template: `
        <div class="max-w_95 font_0 ">
        <div class="flex flex_row gap-x_3">
        <h3 class="font_3 c_black-9 flex_auto">
		Programs
		</h3>
        <div class="flex flex_auto max-w_15 font_n2 self_center"><span class="font_bold self_center">Type:</span>
        <select class="lh_1 font_n2 p_2 p-y_0 font_n1 m-l_3"><option label="all"/><option label="completed"/><option label="alert"/><option label="warning"/></select>
    </div>
        <div class="flex flex_auto max-w_15 font_n2 self_center"><span class="font_bold self_center">Status:</span>
        <select class="lh_1 font_n2 p_2 p-y_0 font_n1 m-l_3"><option label="all"/><option label="completed"/><option label="alert"/><option label="warning"/></select>
    </div>
		<div class="self_center"><Btn
		@onClick="onNewObject"
		class="lh_1 p-x_3"
		:state="'secondary'"
		:size="'tiny'"
		:shadow="false"
		:corner="'round'"
		><i class="far p-r_3 p_1 fa-plus" ></i> new Program
		</Btn></div>
		</div> 
        <SearchBar :placeholder="'Search By Program Title'" class="m-b_3" />
		<div class="bg_black-2 br_1 br_black-2 br_solid">
		<ListLoader :list="list">
			<template v-slot:listNull><div class="p_4 bg_black-_05 br_solid br_black-1 br_1 font_1">Pulling in Programs for this Program ... <LoadingText class="inline font_bold font_1"/></div></template>
			<template v-slot:listEmpty>
				<article class="m_4 p_4 shadow_2 br_radius br_solid br_2 br_white-9 bg_shade-5 font_ui" >
					<h1 class="font_regular p_3 font_2 text_center br-b_1 br_solid br_shade-4" >
						<i class="far fa-exclamation-triangle"></i> You have no Programs
						<i class="far fa-exclamation-triangle"></i>
					</h1>
					<p class="font_0 p-y_3 lh_3 text_center">
						You need to have at least one Program to put sessions into. Click the Add Program Button or the new button to add your first Program to this program. 
					</p>
					<div class="text_center"><Btn>Add Program</Btn></div>
				</article>
			</template>
			<template v-slot:listLoaded >
				<Program v-for="(program, index) in list" v-bind="program" :key="'program'+index" />
			</template>
		</ListLoader>
        </div>
		</div>`,
});

//programListData
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
	list:programListData.sort((a,b)=>{
		return a.label < b.label ? -1 : 1;
		}
	)
};