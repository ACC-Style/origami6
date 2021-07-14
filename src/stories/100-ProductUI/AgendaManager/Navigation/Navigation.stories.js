import NavListItem from "../../../../components/Navigation/App.SideNav.Item.vue";
import NavList from "../../../../components/Navigation/App.SideNav.List.vue";
import {NavProgramsAndCollections} from "../Data/navigationData.js"

export default {
	title: "APPS/SessionManager/Navigation",
    component: NavListItem,
    subcomponents:{NavList},
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

const ListTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { NavList },
	template: `<NavList class="max-w_20" :label="node.label" :type="node.type" :pageID="node.pageID" :nodes="node.nodes"/>`,
});


export const ProgramsAndCollections = ListTemplate.bind({});
ProgramsAndCollections.args = {
	node:NavProgramsAndCollections
};