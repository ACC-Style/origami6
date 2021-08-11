import InputEmail from "../../../components/BasicForms/Input.Email.vue";

import Question  from "../../../components/BasicForms/subComponent/Question.vue";
import baseInputFunctions from "../../../components/BasicForms/subComponent/baseInputFunctions.vue";
import MessageHolder from "../../../components/subComponents/InputMessageHolder.vue";
import StateIcon from "../../../components/subComponents/StateIcon";
import ValueIcon from "../../../components/subComponents/inputValueIcon";
import { commonArgs } from "./../common.argTypes.js";
export default{
    title: "Form/Advanced/Email",
	component: InputEmail,
	subcomponents:{baseInputFunctions,Question,MessageHolder,StateIcon,ValueIcon},
    parameters: {
		docs: {
			description: {
				component:
					"Simple Text Form with simple validations",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<InputEmail @onChange="onChange" @onStateChange="onStateChange" v-bind="$props"/>`
			},
		},
    },
    argTypes:{
		...commonArgs
    }
}

const InputEmailTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { InputEmail },
	template: `<div><small class="c_alert block">! Incomplete Component !</small><InputEmail @onChange="onChange" @onStateChange="onStateChange" v-bind="$props">Email <template v-slot:successMessage>Congradulations you can follow instructions</template></InputEmail></div>`,
});
export const Email = InputEmailTemplate.bind({});
Email.args = {
	inputId:"uniqueInputEmailIdBase",
	defaultvalue:"test",

};