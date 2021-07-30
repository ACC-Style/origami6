import CategoryToggle from  "../../../../src/components/GLSearch/GLSearch.CategoryToggle.vue";
import SearchBar from "../../../../src/components/BasicForms/Input.SearchBar.vue";
import Btn from "../../../../src/components/subComponents/Btn.vue";
import Modal from "../../../../src/components/subComponents/Modal.vue";
import ListLoader from "../../../../src/components/subComponents/ListLoader.vue";
import FacetCheckMarks from "../../../../src/components/Coveo/Coveo.FacetList.CheckMarks.vue";
import Result from "../../../../src/components/GLSearch/GLSearch.Result.vue";
import baseInputFunctions from "../../../../src/components/BasicForms/subComponent/baseInputFunctions.vue";
import Pagination from "../../../../src/components/Navigation/Pagination.vue";
import {results} from "./Data/dataResultReturn.js";
import {commonArgs } from "../../4-Forms/common.argTypes";
export default {
	title: "Apps/GuidelineSearch/Search",
    component: CategoryToggle,
    subcomponents:{baseInputFunctions,SearchBar,Modal,FacetCheckMarks,ListLoader,Result,Pagination},
	parameters: {
		docs: {
			description: {
				component:
					"Search Area",
			},
			actions: { argTypesRegex: '^on.*' },
			source: {
				code: `
<div class="max-w_70 m-x_auto">
  <div class="p-x_4 p-b_3 p-t_3 bg_black-1">
  <div class="flex flex_inline m-b_3 font_2:lg font_0">
  <a class="h:underline undecorated c_primary-n2">
    <i class="fas fa-arrow-alt-left p-r_2"></i> Back
  </a>
  <div class="br-l_2 br_black-4 br_solid p-l_4 m-l_3 vertical-align_middle "> Search
  <span class="display_none inline:md">within ACC Guidelines</span>
  </div>
  </div>
  <SearchBar @onChange="onChange"  @onSearch="onSearch" :inputId="inputId" :value="defaultValue" :placeholder="placeholder" />
  <div class="font_n1 p_2 display_none block:md"><ul class="ul_none flex flex_inline">
    <li class="font_bold c_black-7">Related Searches</li>
    <li  v-for="(term, index) in searchTerms" :key="'desktopSearchTerms_'+index" class="link c_primary p-x_2 h:underline cursor" @click="$emit('onClick', term)">{{ term }}<span v-if="index < searchTerms.length" class="c_black-5">,</span></li>
    </ul>
  </div>
  <div class="p_2:md display_none:md">
    <Btn :state="'empty'" :size="'small'" @onClick="relatedSearchModalVisible = true" class="m-x_n3">
        View Related Searches
    </Btn>
  </div>
  <CategoryToggle class="m-t_3 m-b_2" :switchSize="switchSize" :buttonSize="buttonSize" :categories="categories" @onClick="onClick" @onModalOpen="filterModalVisible = true"/>
  </div>
  <div class="flex flex_inline gap-x_2 flex_wrap font_n1 p-t_2 p-x_4 opacity_7">
    <span>788 results for "</span> <span class="font_bold c_acc">afib</span>
    <span>" showing:</span>
    <span class="br_round p-x_3 p-x_2 bg_primary-5 c_primary-n2 font_bold"><span class="font_xbold c_primary-n4 p-r_2">285</span> Recommendations,</span>
    <span class="br_round p-x_3 p-x_2 bg_accent-5 c_accent-n2 font_bold"><span class="font_xbold c_accent-n4 p-r_2">386</span> Sections,</span>
    <span class="br_round p-x_3 p-x_2 bg_highlight-5 c_highlight-n2 font_bold"><span class="font_xbold c_highlight-n4 p-r_2">117</span> Tables &amp; Figures</span>
  </div>
  <ListLoader :list="list" class="p-y_4 p-x_3">
    <template v-slot:listLoaded >
      <div v-for="(item, index) in list">
        <Result class="m-b_4" v-bind="item"/>
      </div>
    </template>
  </ListLoader> 
  <Pagination/>
  <Modal id="FilterModal" v-if="filterModalVisible"  @onClose="filterModalVisible = false" class="bg_black-1"> 
    <template v-slot:header><h3  class="font_3 font_bold font_display">Filters</h3></template>
    <FacetCheckMarks :class="facetDecoration" :facets="facets" :maxCount="maxCount" :stepChange="stepChange" :canExcludeFacets="canExcludeFacets" >Point of Care </FacetCheckMarks>
    <FacetCheckMarks :class="facetDecoration" :facets="facets" :maxCount="maxCount" :stepChange="stepChange" :canExcludeFacets="canExcludeFacets" >Conditions </FacetCheckMarks>
    <FacetCheckMarks :class="facetDecoration" :facets="facets" :maxCount="maxCount" :stepChange="stepChange" :canExcludeFacets="canExcludeFacets" >Class of Recommendation </FacetCheckMarks>
    <FacetCheckMarks :class="facetDecoration" :facets="facets" :maxCount="maxCount" :stepChange="stepChange" :canExcludeFacets="canExcludeFacets" >Level of Evidence </FacetCheckMarks>
  </Modal>
  <Modal v-if="relatedSearchModalVisible" @onClose="relatedSearchModalVisible = false" class="bg_black-1">
    <template :class="font_3 font_bold font_display" v-slot:header>Related Search</template>
    <ul class="ul_none">
        <li v-for="(term, index) in searchTerms" :key="'mobileSearchTerms_'+index"  class="flex flex_inline m-b_3 h:bg_primary-5 br_radius bg_white shadow_overlap-light p_3 flex" @click="$emit('onClick', term)"><span>{{ term }}</span><i class="far fa-search self_center m-l_auto"></i></li>
    </ul>
  </Modal>
</div>
`
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
	components: { CategoryToggle,SearchBar,Btn,Modal,FacetCheckMarks,ListLoader,Result,Pagination },
	template: `
    <div class="max-w_70 m-x_auto">
       <div class="p-x_4 p-b_3 p-t_3 bg_black-1">
        <div class="flex flex_inline m-b_3 font_2:lg font_0">
        <a class="h:underline undecorated c_primary-n2">
            <i class="fas fa-arrow-alt-left p-r_2"></i> Back
        </a>
        <div class="br-l_2 br_black-4 br_solid p-l_4 m-l_3 vertical-align_middle "> Search
        <span class="display_none inline:md">within ACC Guidelines</span>
        </div>
    </div>
        <SearchBar @onChange="onChange"  @onSearch="onSearch" :inputId="inputId" :value="defaultValue" :placeholder="placeholder" />
        <div class="font_n1 p_2 display_none block:md"><ul class="ul_none flex flex_inline">
            <li class="font_bold c_black-7">Related Searches</li>
            <li  v-for="(term, index) in searchTerms" :key="'desktopSearchTerms_'+index" class="link c_primary p-x_2 h:underline cursor" @click="$emit('onClick', term)">{{ term }}<span v-if="index < searchTerms.length" class="c_black-5">,</span></li>
            </ul>
        </div>
        <div class="p_2:md display_none:md">
            <Btn :state="'empty'" :size="'small'" @onClick="relatedSearchModalVisible = true" class="m-x_n3">
                View Related Searches
            </Btn>
        </div>
        <CategoryToggle class="m-t_3 m-b_2" :switchSize="switchSize" :buttonSize="buttonSize" :categories="categories" @onClick="onClick" @onModalOpen="filterModalVisible = true"/>
       </div>
       <div class="flex flex_inline gap-x_2 flex_wrap font_n1 p-t_2 p-x_4 opacity_7">
            <span>788 results for "</span> <span class="font_bold c_acc">afib</span>
            <span>" showing:</span>
            <span class="br_round p-x_3 p-x_2 bg_primary-5 c_primary-n2 font_bold"><span class="font_xbold c_primary-n4 p-r_2">285</span> Recommendations,</span>
            <span class="br_round p-x_3 p-x_2 bg_accent-5 c_accent-n2 font_bold"><span class="font_xbold c_accent-n4 p-r_2">386</span> Sections,</span>
            <span class="br_round p-x_3 p-x_2 bg_highlight-5 c_highlight-n2 font_bold"><span class="font_xbold c_highlight-n4 p-r_2">117</span> Tables &amp; Figures</span>
        </div>
        <ListLoader :list="list" class="p-y_4 p-x_3">
          <template v-slot:listLoaded >
                <div v-for="(item, index) in list">
                  <Result class="m-b_4" v-bind="item"  />
                </div>
          </template>
        </ListLoader> 
        <Pagination/>
        <Modal id="FilterModal" v-if="filterModalVisible"  @onClose="filterModalVisible = false" class="bg_black-1"> 
            <template v-slot:header><h3  class="font_3 font_bold font_display">Filters</h3></template>
            <FacetCheckMarks :class="facetDecoration" :facets="facets" :maxCount="maxCount" :stepChange="stepChange" :canExcludeFacets="canExcludeFacets" >Point of Care </FacetCheckMarks>
            <FacetCheckMarks :class="facetDecoration" :facets="facets" :maxCount="maxCount" :stepChange="stepChange" :canExcludeFacets="canExcludeFacets" >Conditions </FacetCheckMarks>
            <FacetCheckMarks :class="facetDecoration" :facets="facets" :maxCount="maxCount" :stepChange="stepChange" :canExcludeFacets="canExcludeFacets" >Class of Recommendation </FacetCheckMarks>
            <FacetCheckMarks :class="facetDecoration" :facets="facets" :maxCount="maxCount" :stepChange="stepChange" :canExcludeFacets="canExcludeFacets" >Level of Evidence </FacetCheckMarks>
        </Modal>
        <Modal v-if="relatedSearchModalVisible" @onClose="relatedSearchModalVisible = false" class="bg_black-1">
            <template :class="font_3 font_bold font_display" v-slot:header>Related Search</template>
            <ul class="ul_none">
                <li v-for="(term, index) in searchTerms" :key="'mobileSearchTerms_'+index"  class="flex flex_inline m-b_3 h:bg_primary-5 br_radius bg_white shadow_overlap-light p_3 flex" @click="$emit('onClick', term)"><span>{{ term }}</span><i class="far fa-search self_center m-l_auto"></i></li>
            </ul>
        </Modal>
    </div>
    `,
});
export const SearchArea = Template.bind({});
SearchArea.args = {
    inputId:"uniqueSearchBarIdBase",
	defaultValue:"",
    placeholder:"Search",
	buttonSize:'tiny',
	switchSize:'tiny',
    filterModalVisible: false,
    relatedSearchModalVisible: false,
    searchTerms:['afib symptoms','afib treatments','afib complications'],
    list: results,
    categories: [
        {label:"Sections", value:'section', activeState:"success", notActiveState: "black"},
        {label:"Tables & Figures", value:'table', activeState:"highlight", notActiveState: "black"},
        {label:"Recommendation", value:'recommendation', activeState:"primary", notActiveState: "black"},
            ],
        canExcludeFacets:false,
        maxCount:10,
        facetDecoration:'p-x_4 p-y_3 shadow_overlap-light br_solid br_black-3 br_1 br_radius w_auto font_n1 m-b_3 ',
        stepChange:5,
        facets:[{
                  "id": 1,
                  "label": "gemifloxacin mesylate",
                  "resultCount": 71,
                  "excluded":false,
                  "checked":false
                }, {
                  "id": 2,
                  "label": "Warfarin Sodium",
                  "resultCount": 99,
                  "excluded":false,
                  "checked":false
                }, {
                  "id": 3,
                  "label": "Enoxaparin Sodium",
                  "resultCount": 55,
                  "excluded":false,
                  "checked":false
                }, {
                  "id": 4,
                  "label": "oxycodone hydrochloride",
                  "resultCount": 91,
                  "excluded":false,
                  "checked":false
                }, {
                  "id": 5,
                  "label": "Desmopressin Acetate",
                  "resultCount": 98,
                  "excluded":false,
                  "checked":false
                }, {
                  "id": 6,
                  "label": "Clemastine fumarate",
                  "resultCount": 38,
                  "excluded":false,
                  "checked":false
                }, {
                  "id": 7,
                  "label": "cocoa butter, phenylephrine hcl",
                  "resultCount": 26,
                  "excluded":false,
                  "checked":false
                }, {
                  "id": 8,
                  "label": "liothyronine sodium, LEVOTHYROXINE SODIUM",
                  "resultCount": 90,
                  "excluded":false,
                  "checked":false
                }, {
                  "id": 9,
                  "label": "risperidone",
                  "resultCount": 39,
                  "excluded":false,
                  "checked":false
                }, {
                  "id": 10,
                  "label": "TRICLOSAN",
                  "resultCount": 58,
                  "excluded":false,
                  "checked":false
                }, {
                  "id": 11,
                  "label": "acetaminophen",
                  "resultCount": 27,
                  "excluded":false,
                  "checked":false
                }, {
                  "id": 12,
                  "label": "Benzethonium chloride",
                  "resultCount": 35,
                  "excluded":false,
                  "checked":false
                }, {
                  "id": 13,
                  "label": "Tamsulosin hydrochloride",
                  "resultCount": 64,
                  "excluded":false,
                  "checked":false
                }, {
                  "id": 14,
                  "label": "Carbamide Peroxide",
                  "resultCount": 5
          ,
          "excluded":false,
          "checked":false      }, {
                  "id": 15,
                  "label": "Nicotine Polacrilex",
                  "resultCount": 55,
                  "excluded":false,
                  "checked":false
                }]
};