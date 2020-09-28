import Group from "../../../../../components/SeatManagement/Containers/Group/Seat.Group.Overview.vue";
import {groupsData} from "../../Data/groupData.js";

export default {
	title: "SeatManagment/Groups",
    component: {Group},
	parameters: {
		docs: {
			description: {
				component:
					"Group",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Group :groups="group"/>`
			},
		},
		argTypes:{

			},
		
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

