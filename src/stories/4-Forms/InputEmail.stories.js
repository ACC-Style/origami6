import Email from "../../components/BasicForms/Input.Email.vue";
import { commonArgs } from "./common.argTypes.js";
export default{
    title: "Form/Input/Email",
    component: Email,
    parameters: {
		docs: {
			description: {
				component:
					"Simple Text Form with simple validations",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Email @onChange="onChange" @onStateChange="onStateChange" v-bind="$props"/>`
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
	components: { Email },
	template: `<Email @onChange="onChange" @onStateChange="onStateChange" v-bind="$props">Personal Email <template v-slot:successMessage>Congradulations you can follow instructions</template></Email>`,
});
export const Default = Template.bind({});
Default.args = {
	inputId:"uniqueEmailIdBase",
	defaultvalue:"test",

};