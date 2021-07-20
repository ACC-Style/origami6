import StateChart from "../../../components/AgendaManagement/SubComponents/Agenda.StateChart.vue";
import Btn from "../../../components/subComponents/Btn.vue";
import SwitchToggle from "../../../components/subComponents/SwitchToggle.vue";

import {programChart,creditList} from "./Data/charts.js";
export default {
	title: "APPS/SessionManager/Session/Layout",
    component: StateChart,
    subcomponents:{Btn,SwitchToggle},
	parameters: {
		docs: {
			description: {
				component:
					"Sidebar for the All sessions page",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<div></div>`
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


const SideBarTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { StateChart, Btn, SwitchToggle },
	template: `
        <div class="max-w_20 font_0">
          <h3 class="font_display font-size_up-2">Overview</h3>
            <StateChart :chartData="chartData" :allLabel="'all sessions'" :allColor="'black'"  class="m-b_5" />
            <h3 class="font_display font-size_up-2">Release Mode</h3>
            <p class="font-size_down-1 c_black-6">how are the sessions release?  Are they all at once or are they scheduled at different times.</p>
            <ul class="ul_none m-b_5 font-size_up ">
            <li  class="lh_2 p-y_2 flex flex_row justify_start">
                <SwitchToggle :size="'tiny'" :corner="'round'" :isActive="true" :activeState="'primary'" :notActiveState="'secondary'">Scheduled</SwitchToggle>
            </li>
            <li  class="lh_2 p-y_2 flex flex_row justify_start">
            <SwitchToggle :size="'tiny'" :corner="'round'" :isActive="false" :activeState="'primary'" :notActiveState="'secondary'">Simultaneously</SwitchToggle>
            </li>
            </ul>
            <h3 class="font_display font-size_up-2">Grant Credit Access</h3>
            <p class="font-size_down-1 c_black-6">Credit types are calculated from the credits available from the associated sessions</p>
            <ul class="list-group ul_none m-b_5 font-size_up ">
              <li v-for="(key,value,index) in creditList" :key="'c_'+index" class="lh_2 p-y_2 br_0 br_solid br_black-2 flex flex_row justify_start" :class="{'br-t_1': index >0}">
              <SwitchToggle :size="'tiny'" :corner="'radius'" :notActiveIcon="'fa-times'" :activeState="'primary'" :activeIcon="'fa-check'" :notActiveState="'secondary'">{{value}} <span class="c_primary font-size_down">({{key}})</span></SwitchToggle>
                </li>
            </ul>
        </div>`,
});


export const Sidebar = SideBarTemplate.bind({});
Sidebar.args = {
    chartData:programChart,
    
    creditList:creditList
};


