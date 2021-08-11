import TextInput from "../../components/BasicForms/Input.Text.vue";
import Question  from "../../components/BasicForms/subComponent/Question.vue";
import baseInputFunctions from "../../components/BasicForms/subComponent/baseInputFunctions.vue";
import MessageHolder from "../../components/subComponents/InputMessageHolder.vue";
import StateIcon from "../../components/subComponents/StateIcon";
import ValueIcon from "../../components/subComponents/inputValueIcon";
import { commonArgs } from "./common.argTypes.js";
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
		...commonArgs
    }
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TextInput },
	template: `<TextInput 
	:inputId="inputId"
	:type="type"
	:state="state"
	@onStateChange="onStateChange" 
	:value="''">
	{{label}}
	<template v-slot:successMessage>Congratulations you can follow instructions</template>
	</TextInput>`,
});
export const Default = Template.bind({});
Default.args = {
	label:"Basic Text",
	inputId:"BasicText",

};
export const Number = Template.bind({});
Number.args = {
	label:"Basic Number",
	inputId:"uniqueTextInputIdNumber",
	type:'number'

};
export const Date = Template.bind({});
Date.args = {
	label:"Basic Date",
	inputId:"uniqueTextInputIdNumber",
	type:'date'

};
export const Time = Template.bind({});
Time.args = {
	label:"Basic Time",
	inputId:"uniqueTextInputIdNumber",
	type:'time'

};

export const Success = Template.bind({});
Success.args = {
	inputId:"uniqueTextInputIdSuccess",
	state:"success"
};

export const IconDecorated = Template.bind({});
IconDecorated.args = {
	inputId:"uniqueTextInputIdIcon",
	icon:"fa-user"

};
export const PostLabelInput = Template.bind({});
PostLabelInput.args = {
	inputId:"uniqueTextInputIdPostLabel",
	postLabel:"mg/ml"

};