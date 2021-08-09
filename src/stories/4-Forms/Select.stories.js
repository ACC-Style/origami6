import SelectInput from "../../components/BasicForms/Input.Select.vue";
import { commonArgs } from "./common.argTypes.js";
export default{
    title: "Form/Input/Select",
    component: SelectInput,
    parameters: {
		docs: {
			description: {
				component:
					"Simple Text Form with simple validations",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<SelectInput @onChange="onChange" @onStateChange="onStateChange" v-bind="$props"/>`
			},
		},
    },
    argTypes:{
		...commonArgs,
		selected: { control:{type:'text'}},
		options:{ control:{type:'array'}}
	},
}
const options= [{
	"value": 1,
	"label": "Widowstears",
	
  }, {
	"value": 7,
	"label": "Pendent Silver Linden",
	
  }, {
	"value": 3,
	"label": "Mulberry",
	
  }, {
	"value": 4,
	"label": "Mountain Crownbeard",
	
  }, {
	"value": 5,
	"label": "Emory's Milkvetch",
	
  }, {
	"value": 6,
	"label": "Harper's Heartleaf",
	
  }, {
	"value": 7,
	"label": "Purple Naupaka",
	
  }, {
	"value": 8,
	"label": "Buckwheat Milkvetch",
	
  }, {
	"value": 9,
	"label": "Ozark Hawthorn",
	
  }, {
	"value": 10,
	"label": "Matricary Grapefern",
	
  }];
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { SelectInput },
	template: `<SelectInput  v-bind="$props" :state="state" v-model="selected">Select Plant<template v-slot:alertMessage>Congratulations you cannot follow instructions</template></SelectInput>`,
});
export const Default = Template.bind({});
Default.args = {
	inputId:"uniqueSelectInputIdBase",
	selected: 1,
	options:options,
	state:''

};
export const Alert = Template.bind({});
Alert.args = {
	inputId:"uniqueSelectInputIdBase",
	selected: 1,
	options:options,
	state:'alert'

};