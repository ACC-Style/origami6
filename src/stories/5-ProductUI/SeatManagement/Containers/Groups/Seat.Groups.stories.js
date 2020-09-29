import GroupList from "../../../../../components/SeatManagement/Containers/Seat.Group.vue";
import Group from "../../../../../components/SeatManagement/Containers/Group/Seat.Group.Overview.vue";
import {groupsData} from "../../Data/groupData.js";

export default {
	title: "SeatManagment/Groups",
	component: {Group},
	subcomponents:{GroupList},
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
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Group },
	template: `<Group v-bind="$props"/>`,
});
export const Single = Template.bind({});
Single.args = {
	name: groupsData[0].name,
    id:groupsData[0].id,
    admin: groupsData[0].admin,
    bundles: groupsData[0].bundles
 };


const List = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { GroupList },
	template: `<GroupList :groups="groups"/>`,
});
export const ListLoaded = List.bind({});
ListLoaded.args = {
	groups:groupsData
};

export const ListEmpty = List.bind({});
ListEmpty.args = {
	groups:[]
};
export const ListLoading = List.bind({});
ListLoading.args = {
	groups:null
};