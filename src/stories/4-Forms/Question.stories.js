import Question from "../../components/BasicForms/subComponent/Question.vue";
import { commonArgs } from "./common.argTypes.js";
export default{
    title: "Form/Input/Question",
    component: Question,
    parameters: {
		docs: {
			description: {
				component:
					"Simple Text Form with simple validations",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Question @onChange="onChange" @onStateChange="onStateChange" v-bind="$props"/>`
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
	components: { Question },
	template: `<Question @onChange="onChange" @onStateChange="onStateChange" v-bind="$props">User Name <template v-slot:successMessage>Congradulations you can follow instructions</template></Question>`,
});
export const Default = Template.bind({});
Default.args = {
	inputId:"uniqueQuestionIdBase",
	defaultvalue:"test",

};