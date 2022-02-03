import TextInput from "../../../components/BasicForms/Input.Text.vue";
import Btn from "../../../components/subComponents/Btn.vue";


import { commonArgs } from "../../4-Forms/common.argTypes.js";
export default{
    title: "Apps/FederatedLogin/ForgotPassword",
	component: TextInput,
	subcomponents:{ Btn },
    parameters: {
		docs: {
			description: {
				component:
					"Form for retrieving account password. ",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `
                <div class="p_4 max-w_50 m_auto">
                    <div class="text_center">
                        <h1 class="c_acc font_6 text_center">Forgot your password?</h1>
                        <p><i class="far font_10 fa-lock fas c_secondary"></i></p>
                        <p>Enter your email address or username to verify your identity and retrieve your password.</p>
                    </div>
        
                    <form id="formForgotPassword" class="p_4 max-w_30 m_auto">
                        <fieldset>
                            <div class="m-b_4">
                                <TextInput :inputId="'username'" :type="'text'" :value="''" :required="requiredUsername" :placeholder="placeholderUsername" :state="state">
                                    <template v-slot:default >{{ defaultSlotUsername }}</template>
                                    <template v-slot:requiredAlertMessage >{{ requiredAlertMessageUsername }}</template>
                                </TextInput>
                            </div>
                            <div class="text_center">
                                <Btn :size="size" v-bind="$props">
                                    <span class="p-r_3">Submit</span>
                                    <i v-if="loading" id="btnSpinner" class="spinner fa fa-spinner fa-spin lh_0"></i>
                                </Btn>
                            </div>
                        </fieldset>
                    </form>
        
                    <hr>
        
                    <div class="p_4 font_1 max-w_50 m_auto">
                        <p><b>Have questions or need assistance?</b> Please contact ACC Member Care</p>
                        <ul class="ul_none p-l_5">
                            <li><i class="fa fa-phone"></i> <a href="tel:+18002534636">1-800-253-4636, ext. 5603</a> (Toll Free U.S. &amp; Canada)</li>
                            <li><i class="fa fa-phone"></i> <a href="tel:2023756000">202-375-6000, ext. 5603</a> (International)</li>
                            <li><i class="fa fa-envelope"></i> <a href="mailto:membercare@acc.org">membercare@acc.org</a></li>
                        </ul>
                    </div>
                </div>
            `
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
	template: `
        <div class="p_4 max-w_50 m_auto">
            <div class="text_center">
                <h1 class="c_acc font_6 text_center">Forgot your password?</h1>
                <p><i class="far font_10 fa-lock fas c_secondary"></i></p>
                <p>Enter your email address or username to verify your identity and retrieve your password.</p>
            </div>

            <form id="formForgotPassword" class="p_4 max-w_30 m_auto">
                <fieldset>
                    <div class="m-b_4">
                        <TextInput :inputId="'username'" :type="'text'" :value="''" :required="requiredUsername" :placeholder="placeholderUsername" :state="state">
							<template v-slot:default >{{ defaultSlotUsername }}</template>
							<template v-slot:requiredAlertMessage >{{ requiredAlertMessageUsername }}</template>
						</TextInput>
                    </div>
                    <div class="text_center">
                        <Btn :size="size" v-bind="$props">
                            <span class="p-r_3">Submit</span>
                            <i v-if="loading" id="btnSpinner" class="spinner fa fa-spinner fa-spin self_center"></i>
                        </Btn>
                    </div>
                </fieldset>
            </form>

            <hr>

            <div class="p_4 font_1 max-w_50 m_auto">
                <p><b>Have questions or need assistance?</b> Please contact ACC Member Care</p>
                <ul class="ul_none p-l_5">
                    <li><i class="fa fa-phone"></i> <a href="tel:+18002534636">1-800-253-4636, ext. 5603</a> (Toll Free U.S. &amp; Canada)</li>
                    <li><i class="fa fa-phone"></i> <a href="tel:2023756000">202-375-6000, ext. 5603</a> (International)</li>
                    <li><i class="fa fa-envelope"></i> <a href="mailto:membercare@acc.org">membercare@acc.org</a></li>
                </ul>
            </div>
        </div>
	`,
});
export const InitialForm = Template.bind({});
InitialForm.args = {
    loading: false,
	//input - username
	defaultSlotUsername: "Email or Username",
	requiredAlertMessageUsername: "An email or username is required.",
	requiredUsername: true,
	placeholderUsername: "Username",
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



