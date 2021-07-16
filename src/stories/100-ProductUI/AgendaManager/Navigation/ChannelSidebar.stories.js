import ChanelChart from "../../../../components/AgendaManagement/SubComponents/Agenda.ChannelChart.vue";
import UserEmailSimple from "../../../../components/subComponents/User/User.EmailListItem.vue";
import Btn from "../../../../components/subComponents/Btn.vue";
import {programChart,creditList} from "../Data/charts.js";
export default {
	title: "APPS/SessionManager/Channel/Sidebar",
    component: ChanelChart,
    subcomponents:{UserEmailSimple,Btn},
	parameters: {
		docs: {
			description: {
				component:
					"Chanel List Item",
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
const emailList = [{
    "id": "9fea071d-c9e1-4587-92f8-e7cc38db9713",
    "fullName": "Rozella Padilla",
    "email": "rpadilla0@unc.edu",
    "showEdit": false,
    "showRemove": true
  }, {
    "id": "7db7915e-a613-4fd6-bdde-a3ca44ecc2ec",
    "fullName": "Miguelita Brasener",
    "email": "mbrasener1@lulu.com",
    "showEdit": false,
    "showRemove": true
  }, {
    "id": "05167f41-015a-4fd6-b34f-0de742e9561d",
    "fullName": "Clerissa Pollendine",
    "email": "cpollendine2@instagram.com",
    "showEdit": false,
    "showRemove": true
  }, {
    "id": "185f7f84-8391-448e-95b4-2eaa3e197ad9",
    "fullName": "Celestine Singers",
    "email": "csingers3@diigo.com",
    "showEdit": false,
    "showRemove": true
  }, {
    "id": "f9fc195b-399e-4c0c-9083-617c985707d1",
    "fullName": "Bourke Juan",
    "email": "bjuan4@vistaprint.com",
    "showEdit": false,
    "showRemove": true
  }, {
    "id": "6b022517-d451-42a6-b63d-57e84a63cef7",
    "fullName": "Freddie Bootherstone",
    "email": "fbootherstone5@unicef.org",
    "showEdit": false,
    "showRemove": true
  }];


const ListTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { ChanelChart, UserEmailSimple, Btn },
	template: `
        <div class="max-w_20 font_0">
          <h3 class="font_display font-size_up-2">Overview</h3>
            <ChanelChart :chart="chart" :allLabel="'all sessions'" :allColor="'black'"  class="m-b_5" />
            <h3 class="font_display font-size_up-2">
              <i class="far fa-fa-users-crown"></i>
              Editorial Staff
              <Btn
              @onClick="onNewEditor()"
              class="lh_0 p-x_3 float_right"
              :state="'secondary'"
              :size="'tiny'"
              :shadow="false"
              :corner="'round'"
              ><i class="far p-r_3 p_1 fa-plus"></i> new
            </Btn>
              </h3>
            <ul class="list-group ul_none m-b_5 br_1 br_solid br_black-2 br_radius">
                <li v-for="(email,index) in emails" :key="email.id" class="p_2 br_0 br_solid br_black-2 " :class="{'br-t_1': index >0}">
                    <UserEmailSimple v-bind="email"/>
                </li>
            </ul>
            <h3 class="font_display font-size_up-2">Available Credits</h3>
            <ul class="list-group ul_none m-b_5 font-size_up ">
              <li v-for="(key,value,index) in creditList" :key="'c_'+index" class="lh_2 p-y_2 br_0 br_solid br_black-2" :class="{'br-t_1': index >0}"><strong>{{value}}: </strong><span class="c_primary">{{key}}</span></li>
            </ul>
        </div>`,
});


export const ChannelSidebar = ListTemplate.bind({});
ChannelSidebar.args = {
    chart:programChart,
    emails:emailList,
    creditList:creditList
};

