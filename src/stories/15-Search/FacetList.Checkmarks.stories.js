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
	template: `<FacetCheckmarks class="max-w_30 font_0" :facets="facets" >Drugs Generic </FacetCheckmarks>`,
});
export const Checkmarks = Template.bind({});
Checkmarks.args = {
    facets:[{
        "id": 1,
        "label": "gemifloxacin mesylate",
        "resultCount": 71
      }, {
        "id": 2,
        "label": "Warfarin Sodium",
        "resultCount": 99
      }, {
        "id": 3,
        "label": "Enoxaparin Sodium",
        "resultCount": 55
      }, {
        "id": 4,
        "label": "oxycodone hydrochloride",
        "resultCount": 91
      }, {
        "id": 5,
        "label": "Desmopressin Acetate",
        "resultCount": 98
      }, {
        "id": 6,
        "label": "Clemastine fumarate",
        "resultCount": 38
      }, {
        "id": 7,
        "label": "cocoa butter, phenylephrine hcl",
        "resultCount": 26
      }, {
        "id": 8,
        "label": "liothyronine sodium, LEVOTHYROXINE SODIUM",
        "resultCount": 90
      }, {
        "id": 9,
        "label": "risperidone",
        "resultCount": 39
      }, {
        "id": 10,
        "label": "TRICLOSAN",
        "resultCount": 58
      }, {
        "id": 11,
        "label": "acetaminophen",
        "resultCount": 27
      }, {
        "id": 12,
        "label": "Benzethonium chloride",
        "resultCount": 35
      }, {
        "id": 13,
        "label": "Tamsulosin hydrochloride",
        "resultCount": 64
      }, {
        "id": 14,
        "label": "Carbamide Peroxide",
        "resultCount": 5
      }, {
        "id": 15,
        "label": "Nicotine Polacrilex",
        "resultCount": 55
      }]
};