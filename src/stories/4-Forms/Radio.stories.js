import RadioButton from "../../components/BasicForms/subComponent/Sub.RadioButton.vue";
import RadioButtons from "../../components/BasicForms/Input.RadioButtons.vue";
import { commonArgs } from "./common.argTypes.js";
export default {
	title: "Form/Input/Radio",
	component: RadioButtons,
	subcomponents: { RadioButton },
	parameters: {
		docs: {
			description: {
				component:
					"Simple Text Form with simple validations",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<RadioButtons @onChange="onChange" v-bind="$props"/>`
			},
		},
	},
	argTypes: {
		...commonArgs,
		state: { control: { type: 'select', options: ["", "alert", "requiredAlert", "warning", "success", "info", "accent", "black", "disabled",] } },
		picked: { control:{type:'object'}},
	}
}
const options =  [{
	"value": 1,
	"label": "Widowstears"

}, {
	"value": 2,
	"label": "Pendent Silver Linden"

}, {
	"value": 3,
	"label": "Mulberry"

}, {
	"value": 4,
	"label": "Mountain Crownbeard"

}, {
	"value": 5,
	"label": "Daisy"

}];
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { RadioButtons },
	template: `<RadioButtons :state="state" :inputId="inputId" v-bind:options="options" v-model="picked">Pick Your Favorite Plant <template v-slot:alertMessage>this seems to be wrong</template></RadioButtons>`,
});
export const Default = Template.bind({});
Default.args = {
	inputId: "uniqueRadio",
	state:"",
	picked: {"value": 1,
	"label": "Widowstears"},
	options:options,

};

export const StateAlert = Template.bind({});
StateAlert.args = {
	inputId: "uniqueRadio",
	state: "alert",
	options: options,

};