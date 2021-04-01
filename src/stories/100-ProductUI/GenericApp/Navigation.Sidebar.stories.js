import NavListItem from "../../../components/Navigation/App.SideNav.Item.vue";
import NavList from "../../../components/Navigation/App.SideNav.List.vue";
import {NavApplicationData} from "./Data/navigationData.js"

export default {
	title: "APPS/Navigation/TreeSideBar",
    component: NavList,
    subcomponents:{NavListItem},
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
				control:{
					type:"select",options:["groups","group","contract","contracts","profile","bundles","bundle","subbundle","admin","group-admin","user","users-all", "sessions", "session", "programs", "program","tags","tag","collection","headline","new"]}
			},
		}
};

const ListTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { NavList },
	template: `<NavList class="max-w_20" :label="node.label" :type="node.type" :pageID="node.pageID" :nodes="node.nodes" :toggleOpenByDefault="toggleOpenByDefault"/>`,
});
export const Nav = ListTemplate.bind({});
Nav.args = {
	node:NavApplicationData,
	toggleOpenByDefault:true
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { NavListItem },
	template: `<NavListItem class="max-w_20" :label="label" :type="type" :pageID="pageID" :isActive="isActive" :isExpanded="isExpanded" :hasChildren="hasChildren" :hasActiveChildren="hasActiveChildren" :level="level"/>`,
});
export const Item = Template.bind({});
Item.args = {
	label:NavApplicationData.nodes[3].label,
	type:NavApplicationData.nodes[3].type,
	pageID:NavApplicationData.nodes[3].pageID,
	level:1,
	isActive:true,
	isExpanded:true,
	hasChildren:true,
	hasActiveChildren:false,
};

