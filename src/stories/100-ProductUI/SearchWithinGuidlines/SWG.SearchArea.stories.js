import CategoryToggle from  "../../../../src/components/GLSearch/GLSearch.CategoryToggle.vue";
import SearchBar from "../../../../src/components/BasicForms/Input.SearchBar.vue";
import Btn from "../../../../src/components/subComponents/Btn.vue";
import baseInputFunctions from "../../../../src/components/BasicForms/subComponent/baseInputFunctions.vue";
import { commonArgs } from "../../4-Forms/common.argTypes";
export default {
	title: "Apps/GuidelineSearch",
    component: CategoryToggle,
    subcomponents:{baseInputFunctions,SearchBar},
	parameters: {
		docs: {
			description: {
				component:
					"Search Area",
			},
			actions: { argTypesRegex: '^on.*' },
			source: {
				code: `<div>
                <SearchBar @onChange="onChange"  @onSearch="onSearch"  v-bind="$props"/>
                <CategoryToggle class="m-t_3" :switchSize="switchSize" :buttonSize="buttonSize" :categories="categories" @onClick="onClick($event)" @onModalOpen="onModalOpen()"/></div>`
			},

		},
	},
    argTypes:{
		...commonArgs,
        onSearch: { action: 'Search' },
        onChange: { action: 'Change' },
        onModalOpen: { action: 'Change' }
    }
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { CategoryToggle,SearchBar,Btn },
	template: `<div class="p_4 p_3:lg bg_black-1">
    <div class="flex flex_inline m-b_3 font_2:lg font_0">
    <a class="h:underline undecorated c_primary-n2">
        <i class="fas fa-arrow-alt-left p-r_2"></i> Back
    </a>
    <div class="br-l_2 br_black-4 br_solid p-l_4 m-l_3 vertical-align_middle "> Search
    <span class="display_none inline:md">within ACC Guidelines</span>
    </div>
</div>
    <SearchBar @onChange="onChange"  @onSearch="onSearch"    :inputId="inputId" :defaultValue="defaultValue" :placeholder="placeholder" />
    <div class="font_n1 p_2 display_none block:md"><ul class="ul_none flex flex_inline">
        <li class="font_bold c_black-7">Related Searches</li>
        <li><a class="link c_primary p-x_2">AFIB complications</a><span class="c_black-5">,</span></li>
        </ul>
    </div>
    <div class="p_2:md display_none:md">
        <Btn :state="'empty'" :size="'small'" @onClick="onModalOpen" class="m-x_n3">
            View Related Searches
        </Btn>
    </div>
    <CategoryToggle class="m-t_3" :switchSize="switchSize" :buttonSize="buttonSize" :categories="categories" @onClick="onClick" @onModalOpen="onModalOpen"/></div>`,
});
export const SearchArea = Template.bind({});
SearchArea.args = {
    inputId:"uniqueSearchBarIdBase",
	defaultValue:"",
    placeholder:"Search",
	buttonSize:'tiny',
	switchSize:'tiny',
    categories: [
            {label:"Sections", value:'section', activeState:"success", notActiveState: "black"},
            {label:"Tables & Figures", value:'table', activeState:"highlight", notActiveState: "black"},
            {label:"Recommendation", value:'recommendation', activeState:"primary", notActiveState: "black"},
            ]
};