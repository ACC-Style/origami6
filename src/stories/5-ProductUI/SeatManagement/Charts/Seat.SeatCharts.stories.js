import ReadableSeatChart from "../../../../components/SeatManagement/Charts/Seat.ReadableSeatChart.vue";
import MicroSeatChart from "../../../../components/SeatManagement/Charts/Seat.MicroSeatChart.vue";

import {groupsData} from "../Data/groupData.js";

export default {
	title: "SeatManagment/Charts/SeatChart",
	component: {ReadableSeatChart},
	subcomponents:{MicroSeatChart},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Group v-bind="$props"/>`
			},

	},
	argTypes:{
        creditTypes:{
            description:"", 
                control:{type:"",options:[]}
            },
		}
	}
};
const Readable = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { ReadableSeatChart },
	template: `<ReadableSeatChart :bundles="bundles"/>`,
});
export const ReadableChart = Readable.bind({});
ReadableChart.args = {
    bundles: groupsData[0].bundles
 };

const Micro = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { MicroSeatChart },
	template: `<MicroSeatChart v-bind="$props"/>`,
});
export const MicroChart = Micro.bind({});
MicroChart.args = {
    all: groupsData[0].bundles[0].all,
    filled: groupsData[0].bundles[0].filled,
    locked: groupsData[0].bundles[0].locked,
    requested: groupsData[0].bundles[0].requested,
 };


