import InputPassword from "../../../components/BasicForms/Input.Password.vue";

import Question  from "../../../components/BasicForms/subComponent/Question.vue";
import baseInputFunctions from "../../../components/BasicForms/subComponent/baseInputFunctions.vue";
import MessageHolder from "../../../components/subComponents/InputMessageHolder.vue";
import StateIcon from "../../../components/subComponents/StateIcon";
import ValueIcon from "../../../components/subComponents/inputValueIcon";
import { commonArgs } from "./../common.argTypes.js";
export default{
    title: "Form/Advanced/Password",
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
				code: `	
				<InputPassword 
				:inputId="inputId" :forgotPasswordURL="forgotPasswordURL" :password="password"  
				>
				Password
				</InputPassword>`
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
	template: `
	<InputPassword 
	:inputId="inputId" :forgotPasswordURL="forgotPasswordURL" :value="password"

	>
	Password
	</InputPassword>
	`,
});
export const Password = InputPasswordTemplate.bind({});
Password.args = {
	inputId:"uniqueInputPasswordIdBase",
	password:"password",
	forgotPasswordURL:"https://www.acc.org/ForgotPassword",

};