import InputEmail from "../../../components/BasicForms/Input.Email.vue";
import Btn from "../../../components/subComponents/Btn.vue";


import { commonArgs } from "../../4-Forms/common.argTypes.js";
export default{
    title: "Apps/FederatedLogin/ForgotUsername",
	component: InputEmail,
	subcomponents:{ Btn },
    parameters: {
		docs: {
			description: {
				component:
					"Form for retrieving account username. ",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `https://github.com/ACC-Style/origami6/blob/master/src/stories/100-ProductUI/FederatedLogin/ForgotUsername.stories.js`
			},
		},
    },
    argTypes:{
		...commonArgs
    }
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { InputEmail, Btn },
	data: () => ({
		emailValue: "",
		emailState: "",
	}),
	computed: {
		isDisabled() {
			if (this.loading || this.emailState == "requiredAlert" || this.emailState == "alert"){
				return true;
			}
			if (this.emailValue) {
				return this.emailValue.length <= 0;
			}
			return true;
		}
	},
	methods:{
		onDisabledCheck(eventTargetDOM){ 
			if( this.emailValue == '' ) { 
				this.emailState = 'requiredAlert';
			}
			/*else {
				this.emailState = ''; 
			}*/
		},
		updateState(b) {
			this.emailState = b;
		},
		onSubmit(){
			console.log('stop submit and do this instead');
		}
	},
	template: `
		<div class="p_4 max-w_50 m_auto">
			<div class="text_center">
				<h1 class="c_acc font_6">Forgot your username?</h1>
				<p><i class="far font_10 fa-lock fas c_secondary"></i></p>
				<p>Enter your email address to verify your identity and retrieve your username.</p>
			</div>

			<form id="formForgotUsername" class="p_4 max-w_30 m_auto" novalidate v-on:submit.prevent="onSubmit">
				<fieldset>
					<div class="m-b_4">
						<InputEmail :inputId="'email'" :type="'email'" v-model="emailValue" :required="requiredEmail" :placeholder="placeholderEmail" :state="emailState" @onStateChange="updateState">
							<template v-slot:default >{{ defaultSlotEmail }}</template>
							<template v-slot:requiredAlertMessage >{{ requiredAlertMessageEmail }}</template>
							<template v-slot:alertMessage >{{ alertMessageEmail }}</template>
						</InputEmail>
					</div>
					<div class="text_center" @click="onDisabledCheck('all')">
						<Btn :size="size" :isDisabled="isDisabled">
							<span class="p-r_3">Submit Email</span>
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
	//input password,
	requiredEmail: true,
	placeholderEmail: "Email",
	defaultSlotEmail: "Enter your email address",
	requiredAlertMessageEmail: "Email is required.",
	alertMessageEmail: "Please enter a valid email address.",
	//btn
	size: "medium"
};

export const Loading = Template.bind({});
Loading.args = {
	...InitialForm.args,
	loading: true
};

export const ErrorRequired = Template.bind({});
ErrorRequired.args = {
	...InitialForm.args,
	emailState: "requiredAlert",
};

