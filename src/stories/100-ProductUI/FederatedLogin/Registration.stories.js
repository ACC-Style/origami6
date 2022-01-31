import TextInput from "../../../components/BasicForms/Input.Text.vue";
import Btn from "../../../components/subComponents/Btn.vue";

import { commonArgs } from "../../4-Forms/common.argTypes.js";

export default{
    title: "Apps/FederatedLogin/Registration",
	component: TextInput,
	subcomponents:{ Btn },
    parameters: {
		docs: {
			description: {
				component:
					"New account registration",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<p>Source Code TBD</p>`
			},
		},
    },
    argTypes:{
		...commonArgs
    }
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TextInput, Btn },
	template: `<p>Source Code TBD</p>`,
});
export const InitialForm = Template.bind({});
InitialForm.args = {	
	loading: false,	
	//btn
	size: "medium"
};

export const Loading = Template.bind({});
Loading.args = {
	...InitialForm.args,
	isDisabled: true,
	loading: true
};

export const ErrorRequired = Template.bind({});
ErrorRequired.args = {
	...InitialForm.args,
	state: "requiredAlert",
	isDisabled: true
};

