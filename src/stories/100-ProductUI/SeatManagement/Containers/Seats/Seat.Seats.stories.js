import SeatList from "../../../../../components/SeatManagement/Containers/Seat.Seat.vue";
import SingleSeat from "../../../../../components/SeatManagement/Containers/Seat/Seat.SingleSeat.Overview.vue";
import SeatLoading from "../../../../../components/SeatManagement/Containers/Seat/Seat.SingleSeat.Loading.vue"
import {SeatData} from "../../Data/seatData.js"

export default {
	title: "APPS/SeatManagment/Seats",
    component: SingleSeat,
    subcomponents:{SeatList,SeatLoading},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<SeatList :users="[]"/>`
			},
            
        },
	},
    argTypes:{
        status:{
            description:"The state changes the data shown in the user container", 
                control:{type:"select",options:['empty','filled','requested','locked']}
            },
       
        }
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { SingleSeat },
	template: `<SingleSeat v-bind="$props"/>`,
});
export const SingleUser = Template.bind({});
SingleUser.args = {
user:SeatData[0].user,
id:SeatData[0].id,
date_invite:SeatData[0].date_invite,
date_accepted:SeatData[0].date_accepted,
date_lockedTill:SeatData[0].date_lockedTill,
date_removed: SeatData[0].date_removed,
status:SeatData[0].status,
user:SeatData[0].user,
bundles:SeatData[0].bundles,
};

const ListTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { SeatList },
	template: `<SeatList :seats="seats"/>`,
});
export const LoadedList = ListTemplate.bind({});
LoadedList.args = {
seats:SeatData
};
export const LoadingList = ListTemplate.bind({});
LoadingList.args = {
seats:undefined
};
export const EmptyList = ListTemplate.bind({});
EmptyList.args = {
seats:[]
};