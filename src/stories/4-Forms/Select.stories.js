import SelectInput from "../../components/BasicForms/Input.Select.vue";
import { commonArgs } from "./common.argTypes.js";
export default{
    title: "Form/Basic/Select",
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
		options:{ control:{type:'array'}},
		value: { control:{type:'number', min:0, max:10}},

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
	template: `<SelectInput  v-bind="$props" :state="state" :value="value">
		<template v-slot:default >{{ defaultSlot }}</template>
		<template v-slot:requiredAlertMessage >{{requiredAlertMessage}}</template>
		<template v-slot:alertMessage >{{alertMessage}}</template>
		<template v-slot:warningMessage >{{warningMessage}}</template>
		<template v-slot:successMessage >{{successMessage}}</template>
		<template v-slot:accentMessage >{{accentMessage}}</template>
		<template v-slot:infoMessage >{{infoMessage}}</template>			
		<template v-slot:hint >{{ hint }}</template>
	</SelectInput>`,
});
export const NoSelection = Template.bind({});
NoSelection.args = {
	value: 'none',
	defaultSlot: 'Select Plant',
	options:options,

};
export const DefaultSelection = Template.bind({});
DefaultSelection.args = {
	value: 1,
	defaultSlot: 'Select Plant',
	options:options,

};