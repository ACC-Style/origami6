import TextAndButton from "../../../components/BasicForms/Input.TextAndButton.vue";
import baseInputFunctions from "../../../components/BasicForms/subComponent/baseInputFunctions.vue";
import MessageHolder from "../../../components/subComponents/InputMessageHolder.vue";
import { commonArgs,commonArgTypes } from "./../common.argTypes.js";
export default{
    title: "Form/Advanced",
	component: TextAndButton,
	subcomponents:{baseInputFunctions,MessageHolder},
    parameters: {
		docs: {
			description: {
				component:
					"Simple Text Form with simple validations",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<TextAndButton @onClick="onClick" v-bind="$props"/>`
			},
		},
    },
    argTypes:{
		...commonArgTypes,
        value:          { control:{type: "text"}},
        isTextDisabled: {control:{type: "boolean"}},
        isBtnDisabled:  {control:{type: "boolean"}},
        btnLabel:       { type:'string',control: { type: "text" , meta_description: "slot content"}},
        autoSuggestHolder:{ type:'string',control: { type: "text" , meta_description: "slot content"}},

    }
}

const TextAndButtonTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TextAndButton },
	template: `
    <TextAndButton @onClick="onClick" v-model='value' v-bind="$props" >
        <template v-slot:default >{{ defaultSlot }}</template>
        <template slot="btnLabel">{{btnLabel}}</template>
        <template slot="autoSuggestHolder"><div class="absolute t_n1 r_0 l_0 ">{{autoSuggestHolder}}
        </div></template>
        <template v-slot:alertMessage >{{alertMessage}}</template>
        <template v-slot:warningMessage >{{warningMessage}}</template>
        <template v-slot:successMessage >{{successMessage}}</template>
        <template v-slot:accentMessage >{{accentMessage}}</template>
        <template v-slot:infoMessage >{{infoMessage}}</template>			
        <template v-slot:hint >{{ hint }}</template>
    </TextAndButton>`,
});
export const TextWithButton = TextAndButtonTemplate.bind({});
TextWithButton.args = {
    value: '',
    defaultSlot: "Attach A File",
    btnLabel: "Browse",
	inputId:"uniqueTextAndButton",
    placeholder:"Search",
    isTextDisabled:true,
    isBtnDisabled:true,
};