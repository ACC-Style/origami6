import TextInput from "../../components/BasicForms/Input.Text.vue";
import { commonArgs } from "./common.argTypes.js";
export default{
    title: "Form/Input/Text",
    component: TextInput,
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
		...commonArgs,
        defaultvalue:{description:'the defualt or value of the input onload. '},
		inputType:{control:{type:'select', options:['text','email','password','date']}}

    }
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TextInput },
	template: `<TextInput @onChange="onChange" @onStateChange="onStateChange" v-bind="$props">User Name <template v-slot:successMessage>Congradulations you can follow instructions</template></TextInput>`,
});
export const Default = Template.bind({});
Default.args = {
	inputId:"uniqueTextInputIdBase",
	defaultvalue:"test",

};
export const Number = Template.bind({});
Number.args = {
	inputId:"uniqueTextInputIdNumber",
	defaultvalue:"test",
	inputType:'number'

};

export const Success = Template.bind({});
Success.args = {
	inputId:"uniqueTextInputIdSuccess",
	defaultvalue:"test",
	state:"success"

};

export const IconDecorated = Template.bind({});
IconDecorated.args = {
	inputId:"uniqueTextInputIdIcon",
	defaultvalue:"test",
	icon:"fa-user"

};
export const PostLabelInput = Template.bind({});
PostLabelInput.args = {
	inputId:"uniqueTextInputIdPostLabel",
	defaultvalue:"test",
	postLabel:"mg/ml"

};