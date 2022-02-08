import TextInput from "../../../components/BasicForms/Input.Text.vue";
import InputPassword from "../../../components/BasicForms/Input.Password.vue";
import CheckboxInput from "../../../components/BasicForms/Input.Checkbox.vue";
import Btn from "../../../components/subComponents/Btn.vue";
import { commonArgs } from "../../4-Forms/common.argTypes.js";

export default {
	title: "Apps/FederatedLogin/Login",
	component: TextInput,
	subcomponents: { Btn, CheckboxInput, InputPassword },
	parameters: {
		docs: {
			description: {
				component:
					"Login Page",
			},
			actions: { argTypesRegex: '^on.*' },
			source: {
				code: `
				<div class="p_4 max-w_50 m_auto">
					<h1 class="c_acc font_6 text_center">Log In To Your Account</h1>

					<form id="formLogin" class="p_4 max-w_50 m_auto">

						<div v-if="notify" class="alert alert-alert show" role="alert">
							<div class="relative">
								<div class="flex">
									<div class="font_10 text_center p_3 justify_center self_center">
										<i class="far fa-exclamation-triangle"></i>
									</div>
									<div class="flex_auto p_4 p-y_2 self_center">
										<h4 class="alert-heading">Duplicate Accounts</h4>
										<hr>
										<p>That email address is associated with multiple ACC accounts. Please call the ACC Member Care to
											consolidate
											your acc.org accounts:</p>
										<ul class="ul_none p-l_5">
											<li><a href="tel:+18002534636">1-800-253-4636, ext. 5603</a> (Toll Free US &amp; Canada)</li>
											<li><a href="tel:2023756000">202-375-6000, ext. 5603</a> (Outside US &amp; Canada)</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div v-if="notify"  class="alert alert-alert show" role="alert">
							<div class="relative">
								<div class="flex">
									<div class="font_10 text_center p_3 justify_center self_center">
										<i class="far fa-exclamation-triangle"></i>
									</div>
									<div class="flex_auto p_4 p-y_2 self_center">
										<p>The username or password you have entered is incorrect. Please try again.</p>
									</div>
								</div>
							</div>
						</div>

						<fieldset class="max-w_30 m_auto">
							<div class="m-b_4">
								<TextInput :inputId="'username'" :type="'text'" v-model="usernameValue" :required="requiredUsername" :placeholder="placeholderUsername" :state="state">
									<template v-slot:default >{{ defaultSlotUsername }}</template>
									<template v-slot:requiredAlertMessage >{{ requiredAlertMessageUsername }}</template>
								</TextInput>
								<a href="/ForgotUsername">Forgot Username?</a>
							</div>

							<div class="m-b_3">
								<InputPassword :inputId="'password'" v-model="passwordValue" :required="requiredPassword" :placeholder="placeholderPassword" :state="state">
									<template v-slot:default >{{ defaultSlotPassword }}</template>
									<template v-slot:requiredAlertMessage >{{ requiredAlertMessagePassword }}</template>
									<template v-slot:hint >{{ hintPassword }}</template>
								</InputPassword>
								
								<a href="/ForgotPassword">Forgot Password?</a>
							</div>
							
							<div class="m-b_4">
								<CheckboxInput v-model="checkboxValue"></CheckboxInput>
							</div>

							<div class="text_center" @click="onDisabledClick()">
								<Btn :isDisabled="isDisabled">
									<span class="p-r_3">Log In</span>
									<i v-if="loading" id="btnSpinner" class="spinner fa fa-spinner fa-spin self_center"></i>
								</Btn>
							</div>

						</fieldset>
						<p class="text_center">
							<a href="/preregistration?returnUrl=https://www.acc.org/">Create Free Account</a>
						</p>
					</form>
				</div>`
			},

		},
	},
	argTypes: {
		...commonArgs,
		loading: {
			control: {
				type: "boolean",
				options: [
					"true",
					"false",
				],
			},
		},
	}
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TextInput, Btn, CheckboxInput, InputPassword },
	data: () => ({
		usernameValue: "",
		passwordValue: "",
	}),
	computed: {
		isDisabled() {
			if (this.loading || this.state == "requiredAlert"){
				return true;
			}
			if (this.usernameValue && this.passwordValue) {
				return this.usernameValue.length <= 0 || this.passwordValue.length <= 0;
			}
			return true;
		}
	},
	methods:{
		onDisabledCheck(eventTargetDOM){ 
			if(eventTargetDOM == 'all' || eventTargetDOM == 'username'){
				if(this.usernameValue == ''){ this.usernameState = 'requiredAlert'; }else{ this.usernameState = ''; }
			}
			if(eventTargetDOM == 'all' || eventTargetDOM == 'password'){
				if(this.passwordValue == ''){ this.passwordState = 'requiredAlert'; }else{ this.passwordState = '';}
			}

		},
	},
	template: `
		<div class="p_4 max-w_50 m_auto">
    		<h1 class="c_acc font_6 text_center">Log In To Your Account</h1>

			<form id="formLogin" class="p_4 max-w_50 m_auto">

				<div v-if="notify" class="alert alert-alert show" role="alert">
					<div class="relative">
						<div class="flex">
							<div class="font_10 text_center p_3 justify_center self_center">
								<i class="far fa-exclamation-triangle"></i>
							</div>
							<div class="flex_auto p_4 p-y_2 self_center">
								<h4 class="alert-heading">Duplicate Accounts</h4>
								<hr>
								<p>That email address is associated with multiple ACC accounts. Please call the ACC Member Care to
									consolidate
									your acc.org accounts:</p>
								<ul class="ul_none p-l_5">
									<li><a href="tel:+18002534636">1-800-253-4636, ext. 5603</a> (Toll Free US &amp; Canada)</li>
									<li><a href="tel:2023756000">202-375-6000, ext. 5603</a> (Outside US &amp; Canada)</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div v-if="notify"  class="alert alert-alert show" role="alert">
					<div class="relative">
						<div class="flex">
							<div class="font_10 text_center p_3 justify_center self_center">
								<i class="far fa-exclamation-triangle"></i>
							</div>
							<div class="flex_auto p_4 p-y_2 self_center">
								<p>The username or password you have entered is incorrect. Please try again.</p>
							</div>
						</div>
					</div>
				</div>

				<fieldset class="max-w_30 m_auto">
					<div class="m-b_4">
						<TextInput :inputId="'username'" :type="'text'" v-model="usernameValue" :required="requiredUsername" :placeholder="placeholderUsername" :state="usernameState" @input="onDisabledCheck('username')">
							<template v-slot:default >{{ defaultSlotUsername }}</template>
							<template v-slot:requiredAlertMessage >{{ requiredAlertMessageUsername }}</template>
						</TextInput>
						<a href="/ForgotUsername">Forgot Username?</a>
					</div>

					<div class="m-b_3">
						<InputPassword :inputId="'password'" v-model="passwordValue" :required="requiredPassword" :placeholder="placeholderPassword" :state="passwordState" @input="onDisabledCheck('password')">
							<template v-slot:default >{{ defaultSlotPassword }}</template>
							<template v-slot:requiredAlertMessage >{{ requiredAlertMessagePassword }}</template>
							<template v-slot:hint >{{ hintPassword }}</template>
						</InputPassword>
						
						<a href="/ForgotPassword">Forgot Password?</a>
					</div>
					
					<div class="m-b_4">
						<CheckboxInput v-model="checkboxValue"></CheckboxInput>
					</div>

					<div class="text_center" @click="onDisabledCheck('all')">
						<Btn :isDisabled="isDisabled">
							<span class="p-r_3">Log In</span>
							<i v-if="loading" id="btnSpinner" class="spinner fa fa-spinner fa-spin self_center"></i>
						</Btn>
					</div>

				</fieldset>
				<p class="text_center">
					<a href="/preregistration?returnUrl=https://www.acc.org/">Create Free Account</a>
				</p>
			</form>
		</div>	
	`,
});
export const InitialForm = Template.bind({});
InitialForm.args = {
	loading: false,
	notify: false,
	//input - username
	defaultSlotUsername: "Email or Username",
	requiredAlertMessageUsername: "An email or username is required.",
	requiredUsername: true,
	placeholderUsername: "Username",
	//input password,
	requiredPassword: true,
	placeholderPassword: "Password",
	defaultSlotPassword: "Password",
	requiredAlertMessagePassword: "Please enter a password.",
	hintPassword: "At least 7 characters with at least 1 number and 1 letter.",
	passwordState:  "",
	usernameState: "",
	//btn
	size: "medium",
	//remember me
	checkboxValue: {
		label: "Remember Password",
		selected: true
	}
};

export const Loading = Template.bind({});
Loading.args = {
	...InitialForm.args,
	loading: true,
};

export const ErrorRequired = Template.bind({});
ErrorRequired.args = {
	...InitialForm.args,
	passwordState:  "requiredAlert",
	usernameState: "requiredAlert",
};

export const Notifications = Template.bind({});
Notifications.args = {
	...InitialForm.args,
	notify: true
};

