import TextInput from "../../components/BasicForms/Input.Text.vue";

export default{
    title: "Form/TextInput",
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
        defaultvalue:{description:'the defualt or value of the input onload. '},
        icon:{description:'font-awesome icon for use with decorationg the input like a dollar sign, or user'},
		state:{control:{type:'select', options:['alert','requiredAlert','warning','success','info','accent','disabled']}},
		inputType:{control:{type:'select', options:['text','email','password','date']}}

    }
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TextInput },
	template: `<TextInput @onChange="onChange" @onStateChange="onStateChange" v-bind="$props">User Name <template v-slot:successMessage>Congradulations you can follow instructions</template></TextInput>`,
});
export const Base = Template.bind({});
Base.args = {
	inputId:"uniqueTextInputId",
	defaultvalue:"test",

};
export const Number = Template.bind({});
Number.args = {
	inputId:"uniqueTextInputId",
	defaultvalue:"test",
	inputType:'number'

};

export const Success = Template.bind({});
Success.args = {
	inputId:"uniqueTextInputId",
	defaultvalue:"test",
	state:"success"

};

export const IconDecorated = Template.bind({});
IconDecorated.args = {
	inputId:"uniqueTextInputId",
	defaultvalue:"test",
	icon:"fa-user"

};
export const PostLabelInput = Template.bind({});
PostLabelInput.args = {
	inputId:"uniqueTextInputId",
	defaultvalue:"test",
	postLabel:"mg/ml"

};