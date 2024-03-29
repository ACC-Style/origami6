import NavListItem from "../../../../components/Navigation/App.SideNav.Item.vue";
import BreadCrumb from "../../../../components/Navigation/App.BreadCrumb.vue";
import NavList from "../../../../components/Navigation/App.SideNav.List.vue";
import {NavUsersData,NavApplicationData,NavProgramsAndCollections} from "../Data/navigationData.js"

export default {
	title: "APPS/SeatManagment/Navigation",
    component: NavListItem,
    subcomponents:{NavList,BreadCrumb},
	parameters: {
		docs: {
			description: {
				component:
					"Tree Navigation ",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<NavList v-bind="$Array"/>`
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
	components: { NavListItem },
	template: `<NavListItem :label="label" :type="type" :pageID="pageID"   />`,
});
export const SingleNavListItem = Template.bind({});
SingleNavListItem.args = {
	label:NavApplicationData.nodes[1].label,
	type:NavApplicationData.nodes[1].type,
	pageID:NavApplicationData.nodes[1].pageID
};

const ListTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { NavList },
	template: `<NavList class="max-w_20" :label="node.label" :type="node.type" :pageID="node.pageID" :nodes="node.nodes"/>`,
});
export const ApplicationNavList = ListTemplate.bind({});
ApplicationNavList.args = {
	node:NavApplicationData
};


const BreadCrumbTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { BreadCrumb },
	template: `<BreadCrumb :label="node.label" :type="node.type" :pageID="node.pageID" :nodes="node.nodes"/>`,
});
export const BreadCrumbNav = BreadCrumbTemplate.bind({});
BreadCrumbNav.args = {
	node:NavApplicationData
};
