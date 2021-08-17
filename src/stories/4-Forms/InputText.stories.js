import TextInput from "../../components/BasicForms/Input.Text.vue";
import Question  from "../../components/BasicForms/subComponent/Question.vue";
import baseInputFunctions from "../../components/BasicForms/subComponent/baseInputFunctions.vue";
import MessageHolder from "../../components/subComponents/InputMessageHolder.vue";
import StateIcon from "../../components/subComponents/StateIcon";
import ValueIcon from "../../components/subComponents/inputValueIcon";
import { commonArgTypes,commonArgs } from "./common.argTypes.js";
export default{
    title: "Form/Basic/Text",
	component: TextInput,
	subcomponents:{Question,MessageHolder,StateIcon,ValueIcon},
    parameters: {
		docs: {
			description: {
				component:
					"Simple Text Form with simple validations",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<TextInput @onChange="onChange" @onStateChange="onStateChange" v-bind="$props"/>`
			},
		},
    },
    argTypes:{
		...commonArgTypes
    },args:{
		...commonArgs
	}
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TextInput },
	template: `<TextInput 
	
	:inputId="inputId"
	:type="type"
	:value="''" :icon="icon" :state="state" :postLabel="postLabel" :required="required"
	@onStateChange="onStateChange" 
	:value="''">
	<template v-slot:default >{{ defaultSlot }}</template>
		<template v-slot:requiredAlertMessage >{{requiredAlertMessage}}</template>
		<template v-slot:alertMessage >{{alertMessage}}</template>
		<template v-slot:warningMessage >{{warningMessage}}</template>
		<template v-slot:successMessage >{{successMessage}}</template>
		<template v-slot:accentMessage >{{accentMessage}}</template>
		<template v-slot:infoMessage >{{infoMessage}}</template>			
		<template v-slot:hint >{{ hint }}</template>
	</TextInput>`,
});
export const Text = Template.bind({});
Text.args = {
	defaultSlot:"Basic Text",
	inputId:"BasicText",

};
export const Number = Template.bind({});
Number.args = {
	defaultSlot:"Basic Number",
	inputId:"uniqueTextInputIdNumber",
	type:'number'

};
export const Date = Template.bind({});
Date.args = {
	defaultSlot:"Basic Date",
	inputId:"uniqueTextInputIdNumber",
	type:'date'

};
export const Time = Template.bind({});
Time.args = {
	defaultSlot:"Basic Time",
	inputId:"uniqueTextInputIdNumber",
	type:'time'

};
