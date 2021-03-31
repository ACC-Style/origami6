import NavItem from "../../../../components/SeatManagement/Navigation/Seat.SideNav.NavItem.vue";
import NavItemList from "../../../../components/SeatManagement/Navigation/Seat.SideNav.SideNavList.vue";
import {NavUsersData,NavApplicationData,NavProgramsAndCollections} from "../Data/navigationData.js"

export default {
	title: "APPS/SeatManagment/Navigation",
    component: NavItem,
    subcomponents:{NavItemList},
	parameters: {
		docs: {
			description: {
				component:
					"Tree Navigation ",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<NavItemList v-bind="$Array"/>`
			},

		},
	},
	argTypes:{
		type:{
			description:"", 
				control:{type:"select",options:["groups","group","contract","contracts","profile","bundles","bundle","subbundle","admin","group-admin","user","users-all", "sessions", "session", "programs", "program","tags","tag","collection"]}
			},
		}
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { NavItem },
	template: `<NavItem :label="label" :type="type" :pageID="pageID"   />`,
});
export const SingleNavItem = Template.bind({});
SingleNavItem.args = {
	label:NavApplicationData.nodes[1].label,
	type:NavApplicationData.nodes[1].type,
	pageID:NavApplicationData.nodes[1].pageID
};

const ListTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { NavItemList },
	template: `<NavItemList class="max-w_20" :label="node.label" :type="node.type" :pageID="node.pageID" :nodes="node.nodes"/>`,
});
export const ApplicationNavList = ListTemplate.bind({});
ApplicationNavList.args = {
	node:NavApplicationData
};
export const UserNavList = ListTemplate.bind({});
UserNavList.args = {
	node:NavUsersData
};

export const ProgramsAndCollections = ListTemplate.bind({});
ProgramsAndCollections.args = {
	node:NavProgramsAndCollections
};