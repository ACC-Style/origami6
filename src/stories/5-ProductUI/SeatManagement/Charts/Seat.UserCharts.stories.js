
import ReadableChart from "../../../../components/SeatManagement/Charts/Seat.ReadableUserChart.vue";
// import MicroChart from "../../../../components/SeatManagement/Charts/Seat.MicroChart.vue";

import {UserData} from "../Data/userData.js";

export default {
	title: "APPS/SeatManagment/Charts/UserChart",
	component: {ReadableChart},
	subcomponents:{},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
		}	
	}
};
const Readable = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { ReadableChart },
	template: `<ReadableChart :users="users"/>`,
});
export const UserReadableChart = Readable.bind({});
UserReadableChart.args = {
    users: UserData
 };

// const Micro = (args, { argTypes }) => ({
// 	props: Object.keys(argTypes),
// 	components: { MicroChart },
// 	template: `<MicroChart v-bind="$props"/>`,
// });
// export const MicroChart = Micro.bind({});
// MicroChart.args = {
//     all: groupsData[0].bundles[0].all,
//     filled: groupsData[0].bundles[0].filled,
//     locked: groupsData[0].bundles[0].locked,
//     requested: groupsData[0].bundles[0].requested,
//  };

