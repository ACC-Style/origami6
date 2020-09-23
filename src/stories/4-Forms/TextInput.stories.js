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
        state:{control:{type:'select', options:['alert','warning','success','info','accent']}}

    }
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TextInput },
	template: `<TextInput @onChange="onChange" v-bind="$props">User Name </TextInput>`,
});
export const Base = Template.bind({});
Base.args = {
    defaultvalue:"test"

};