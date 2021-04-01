import BreadCrumb from "../../../components/Navigation/App.BreadCrumb.vue";
import BreadCrumbItem from "../../../components/Navigation/App.BreadCrumb.Item.vue";
import {NavApplicationData} from "./Data/navigationData.js"

export default {
	title: "APPS/Navigation/Breadcrumb",
    component: BreadCrumb,
    subcomponents:{BreadCrumbItem},
	parameters: {
		docs: {
			description: {
				component:
					"Tree Navigation ",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<BreadCrumb v-bind="Data"/>`
			},

		},
	},
	argTypes:{
		type:{
			description:"", 
				control:{type:"select",options:["groups","group","contract","contracts","profile","bundles","bundle","subbundle","admin","group-admin","user","users-all", "sessions", "session", "programs", "program","tags","tag","collection","home","headline"]}
			},
		}
};

const ListTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { BreadCrumb },
	template: `<BreadCrumb :label="node.label" :type="node.type" :pageID="node.pageID" :nodes="node.nodes"/>`,
});
export const Nav = ListTemplate.bind({});
Nav.args = {
	node:NavApplicationData
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { BreadCrumbItem },
	template: `<BreadCrumbItem :label="label" :type="type" :pageID="pageID"  @onNavigateTo="" />`,
});
export const Item = Template.bind({});
Item.args = {
	label:NavApplicationData.nodes[1].label,
	type:NavApplicationData.nodes[1].type,
	pageID:NavApplicationData.nodes[1].pageID
};

