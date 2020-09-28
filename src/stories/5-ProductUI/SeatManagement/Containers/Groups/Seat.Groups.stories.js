import Groups from "../../../../../components/SeatManagement/Containers/Seat.Group.vue";
import {groupsData} from "../../Data/groupData.js";

export default {
	title: "SeatManagment/Groups",
    component: {Groups},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Groups v-bind="$props"/>`
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
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Groups },
	template: `<Groups :groups="groups"/>`,
});
export const ListLoaded = Template.bind({});
ListLoaded.args = {
	groups:groupsData
};

export const ListEmpty = Template.bind({});
ListEmpty.args = {
	groups:[]
};
export const ListLoading = Template.bind({});
ListLoading.args = {
	groups:null
};