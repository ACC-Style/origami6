import SearchBar from "../../../components/BasicForms/Input.SearchBar.vue";
import baseInputFunctions from "../../../components/BasicForms/subComponent/baseInputFunctions.vue";
import MessageHolder from "../../../components/subComponents/InputMessageHolder.vue";
import { commonArgs } from "./../common.argTypes.js";
export default{
    title: "Form/Advanced",
	component: SearchBar,
	subcomponents:{baseInputFunctions,MessageHolder},
    parameters: {
		docs: {
			description: {
				component:
					"Simple Text Form with simple validations",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<SearchBar @onChange="onChange"  @onSearch="onSearch"  v-bind="$props"/>`
			},
		},
    },
    argTypes:{
		...commonArgs
    }
}

const SearchBarTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { SearchBar },
	template: `<SearchBar @onChange="onChange" @onSearch="onSearch"  v-bind="$props"></SearchBar>`,
});
export const SearchBarInput = SearchBarTemplate.bind({});
SearchBarInput.args = {
	inputId:"uniqueSearchBarIdBase",
	value:"",
    placeholder:"Search",

};