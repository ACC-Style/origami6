import InputPassword from "../../../components/BasicForms/Input.Password.vue";
import Btn from "../../../components/subComponents/Btn.vue";
import { commonArgs } from "../../4-Forms/common.argTypes.js";

import PasswordChecker from "../../../components/subComponents/PasswordChecker.js";

export default {
	title: "Apps/FederatedLogin/ResetPassword",
	component: InputPassword,
	subcomponents: { Btn },
	parameters: {
		docs: {
			description: {
				component:
					"Login Page",
			},
			actions: { argTypesRegex: '^on.*' },
			source: {
				code: `TBD`
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
	mixins: [ PasswordChecker ],
	props: Object.keys(argTypes),
	components: { Btn, InputPassword },
	data: () => ({
        pwd1Value: "",
        pwd1State: "",
		pwd2Value: "",
        pwd2State: "",
		pwdCheck: {
			pwd1: "",
			hasCharMin: false,
			hasNum: false,
			hasLetter: false
		}
	}),
	computed: {
		isDisabled() {
			console.log('isDisabled');
			return true;
		}
	},
	methods:{
		checkPassword: function (a) {
			this.pwdCheck.pwd1 = a;
			this.pwdCheck.hasCharMin = this.characterMin(a,7);
			this.pwdCheck.hasNum = this.containsNumber(a);
			this.pwdCheck.hasLetter = this.containsLetter(a);
		},
		confirmPassword: function (a) {
			if(this.matchPasswords(this.pwd1Value , a) == false){
				this.pwd2State = "alert";
			} else {
				this.pwd2State = "";
			}
		},
		onDisabledCheck: function(e) { 
			if(this.pwd1Value == ''){ this.pwd1State = 'requiredAlert'; }
			if(this.pwd2Value == ''){ this.pwd2State = 'alert'; }
		},
	},
	template: `
		<div class="p_4 max-w_50 m_auto">
            <div class="text_center">
                <h1 class="c_acc font_6 text_center">Reset Your Password</h1>
                <p><i class="far font_10 fa-lock fas c_secondary"></i></p>
                <p>Enter your new password information.</p>
            </div>

			<form id="formResetPassword" class="p_4 max-w_50 m_auto">

				<fieldset class="max-w_30 m_auto">
					<div class="m-b_4">
                        <InputPassword :inputId="'pwd1'" v-model="pwd1Value" :required="pwd1Required" :state="pwd1State" @input="checkPassword">
                            <template v-slot:default >{{ defaultSlotPwd1 }}</template>
                            <template v-slot:requiredAlertMessage >{{ requiredAlertMessagePwd1 }}</template>
                        </InputPassword>

						<!-- Conditionals -->
						<span>Password Requirements:</span>
						<div><i class="m-r_4 fa" v-bind:class="this.pwdCheck.hasCharMin ? 'fa-check-circle c_success-n1' : 'fa-ban c_alert-n1'"></i>7 characters minimum with no spaces</div>
						<div><i class="m-r_4 fa" v-bind:class="this.pwdCheck.hasNum ? 'fa-check-circle c_success-n1' : 'fa-ban c_alert-n1'"></i>Contains at least one number</div>
						<div><i class="m-r_4 fa" v-bind:class="this.pwdCheck.hasLetter ? 'fa-check-circle c_success-n1' : 'fa-ban c_alert-n1'"></i>Contains at least one letter</div>
					</div>

                    <div class="m-b_4">
                        <InputPassword :inputId="'pwd2'" v-model="pwd2Value" :required="pwd2Required" :state="pwd2State" @input="confirmPassword">
                            <template v-slot:default >{{ defaultSlotPwd2 }}</template>
                            <template v-slot:requiredAlertMessage >{{ requiredAlertMessagePwd2 }}</template>
							<template v-slot:alertMessage >{{ alertPwdMismatch }}</template>
                        </InputPassword>
					</div>
				
					<div class="text_center" @click="onDisabledCheck">
						<Btn :isDisabled="isDisabled">
							<span class="p-r_3">Reset Password</span>
							<i v-if="loading" id="btnSpinner" class="spinner fa fa-spinner fa-spin self_center"></i>
						</Btn>
					</div>

				</fieldset>
				
			</form>
		</div>	
	`,
});
export const InitialForm = Template.bind({});
InitialForm.args = {
	//password1
	pwd1Required: true,
    defaultSlotPwd1: "New Password",
	requiredAlertMessagePwd1: "Please enter a new password.",
    //password2
	pwd2Required: true,
    defaultSlotPwd2: "Confirm Password",
	requiredAlertMessagePwd2: "Please confirm your new password.",
	alertPwdMismatch: "Passwords do not match.",
	//btn
	size: "medium"
};

/*
export const Loading = Template.bind({});
Loading.args = {
	...InitialForm.args,
	loading: true,
};

export const ErrorRequired = Template.bind({});
ErrorRequired.args = {
	...InitialForm.args,
	pwdState:  "requiredAlert",
	usernameState: "requiredAlert",
};

export const Notifications = Template.bind({});
Notifications.args = {
	...InitialForm.args,
	notify: true
};
*/
