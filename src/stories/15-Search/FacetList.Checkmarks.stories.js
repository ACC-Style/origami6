import FacetCheckmarks from "../../../src/components/Coveo/Coveo.FacetList.Checkmarks.vue";

export default {
	title: "Coveo/FacetList",
    component: FacetCheckmarks,
    subcomponents:{},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<FacetCheckmarks v-bind="$props">Slot Header Label</FacetCheckmarks>`
			},

		},
	},
	argTypes:{
		creditTypes:{
			description:"", 
				control:{type:"",options:[]}
			},
		}
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { FacetCheckmarks },
	template: `<FacetCheckmarks :class="decoration" :facets="facets" :maxCount="maxCount" :stepChange="stepChange" :canExcludeFacets="canExcludeFacets" >Drugs Generic </FacetCheckmarks>`,
});
export const Checkmarks = Template.bind({});
Checkmarks.args = {
  canExcludeFacets:false,
  maxCount:10,
  decoration:'max-w_30 font_0',
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
export const CheckmarksFloatingCard = Template.bind({});
CheckmarksFloatingCard.args = {
  canExcludeFacets:false,
  maxCount:10,
  decoration:'p-x_4 p-y_3 shadow_overlap-light br_solid br_black-3 br_1 br_radius max-w_20 font_n1',
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