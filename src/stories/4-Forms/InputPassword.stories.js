import InputPassword from "../../components/BasicForms/Input.Password.vue";

import Question  from "../../components/BasicForms/subComponent/Question.vue";
import baseInputFunctions from "../../components/BasicForms/subComponent/baseInputFunctions.vue";
import MessageHolder from "../../components/subComponents/InputMessageHolder.vue";
import StateIcon from "../../components/subComponents/StatefullIcon";
import ValueIcon from "../../components/subComponents/inputValueIcon";
import { commonArgs } from "./common.argTypes.js";
export default{
    title: "Form/Input/Password",
	component: InputPassword,
	subcomponents:{baseInputFunctions,Question,MessageHolder,StateIcon,ValueIcon},
    parameters: {
		docs: {
			description: {
				component:
					"Simple Text Form with simple validations",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<InputPassword @onChange="onChange" @onStateChange="onStateChange" v-bind="$props"/>`
			},
		},
    },
    argTypes:{
		...commonArgs
    }
}

const InputPasswordTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { InputPassword },
	template: `<InputPassword @onChange="onChange" @onStateChange="onStateChange" v-bind="$props"><template v-slot:successMessage>Congradulations you can follow instructions</template></InputPassword>`,
});
export const Password = InputPasswordTemplate.bind({});
Password.args = {
	inputId:"uniqueInputPasswordIdBase",
	defaultvalue:"test",

};