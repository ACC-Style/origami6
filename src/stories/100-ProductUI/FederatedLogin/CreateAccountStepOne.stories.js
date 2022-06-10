import TextInput from "../../../components/BasicForms/Input.Text.vue";
import Btn from "../../../components/subComponents/Btn.vue";
import InputEmail from "../../../components/BasicForms/Input.Email.vue";
import SelectProfession from "../../../components/ORG/FederatedLogin/SelectProfession.vue";
import SetPassword from "../../../components/ORG/FederatedLogin/SetPassword.vue";


import { commonArgs } from "../../4-Forms/common.argTypes.js";

import { professionalData } from "./Data/ProfessionalData.js";

export default{
    title: "Apps/FederatedLogin/CreateAccountStepOne",
	component: TextInput,
	subcomponents:{ Btn, InputEmail, SelectProfession, SetPassword },
    parameters: {
		docs: {
			description: {
				component:
					"Form for creating a new account, step one.",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<p>Please find the full source code on GitHub.</p>`
			},
		},
    },
    argTypes:{
		...commonArgs
    }
}

const Template = (args, { argTypes }) => ({
	//props: Object.keys(argTypes),
	components: { TextInput, Btn, InputEmail, SelectProfession, SetPassword },
    data: () => ({
		loading: false,
		//profession selection data
		professions: professionalData,
		selectedProfession: {},
		//field value bindings
		firstnameValue: null,
		lastnameValue: null,
		emailValue: null,
		passwordValue: null,
		//field state bindings
		firstnameState: null,
		lastnameState: null,
		emailState: null
	}),
	computed: {
		isDisabled() {
			//if any state populated, or loading is true
			//NOTE: If you need more states that are not meant to block submission, you will need to make this more robust.
			if( this.loading || this.firstnameState || this.lastnameState || this.emailState || !this.passwordValue || this.selectedProfession == {} ) {
				return true;
			}
			if( this.firstnameValue && this.lastnameValue && this.emailValue && Object.keys(this.selectedProfession).length && this.passwordValue){
				return false;
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
		updateProfession(profession){
			this.selectedProfession = profession;
		},
		updatePassword(v){
			this.passwordValue = v;
		},
		updateEmailState(b) {
			//The existing email component emits empty string, but we're going to set it to null here instead for easier conditional checking.
			//Doing it here avoids having to change the email component for now.
			const state = ( b == "" ? null : b);
			this.emailState = state;
		},
		updateInputState(b){
			const state = ( b.state == "" ? null : b.state);
			if(b.target.id == 'input_firstname'){
				this.firstnameState = state;
			}
			if(b.target.id == 'input_lastname'){
				this.lastnameState = state;
			}
		},
		onSubmit(){
			console.log('stop submit and do this instead');
		}
	},
	template: `
        <div class="p_4:md max-w_50 m_auto">
            <div>
                <h1 class="c_acc font_6 text_center">Create Free Account</h1>
                <p>Please note that creating a free ACC account does not make you a member of the ACC or give you access to member-only content, but it does allow you to register for events, purchase ACC products, and use promo codes for discounts.</p>
            </div>

            <form id="formForgotPassword" class="m_auto" novalidate v-on:submit.prevent="onSubmit">
				<div class="grid gap-x_5 gap-y_3 grid-col_2:md">
					<TextInput class="m-b_4" :inputId="'firstname'" :type="'text'" v-model="firstnameValue" :required=true :placeholder="'First Name'" :state="firstnameState" @onStateChange="updateInputState">
						<template v-slot:default>First Name</template>
						<template v-slot:requiredAlertMessage>First Name is required.</template>
					</TextInput>
					<TextInput class="m-b_4" :inputId="'lastname'" :type="'text'" v-model="lastnameValue" :required=true :placeholder="'Last Name'" :state="lastnameState" @onStateChange="updateInputState">
						<template v-slot:default>Last Name</template>
						<template v-slot:requiredAlertMessage>Last Name is required.</template>
					</TextInput>
					<InputEmail class="m-b_4" :inputId="'email'" :type="'email'" v-model="emailValue" :required=true :placeholder="'Email'" :state="emailState" @onStateChange="updateEmailState">
						<template v-slot:default>Email</template>
						<template v-slot:requiredAlertMessage>Email is required.</template>
						<template v-slot:alertMessage >Please enter a valid email address.</template>
					</InputEmail>
					<SelectProfession class="m-b_4" :professions="professions" :currentSelection="selectedProfession" @onSelect="updateProfession" />
					<SetPassword class="display_contents" @passwordChanged="updatePassword" />
				</div>
				<div class="text_center">
					<Btn :isDisabled="isDisabled" :size="'medium'">
						<span class="p-r_3">Submit</span>
						<i v-if="loading" id="btnSpinner" class="spinner fa fa-spinner fa-spin self_center"></i>
					</Btn>
				</div>
            </form>
        </div>
	`,
});
export const Default = Template.bind({});
Default.args = {
	//size: "medium"
};

