<template>
    <div>
        <div class="m-b_4">
            <InputPassword :inputId="'pwd1'" v-model="pwd1Value" :required=true :state="pwd1State" @input="checkPassword">
                <template v-slot:default>Password</template>
                <template v-slot:requiredAlertMessage>Please enter a password.</template>
                <template v-slot:alertMessage>Password conditions not met.</template>
            </InputPassword>

            <!-- Conditionals -->
            <span>Password Requirements:</span>
            <div><i class="m-r_4 fa" v-bind:class="this.pwdCheck.hasCharMin ? 'fa-check-circle c_success-n1' : 'fa-ban c_alert-n1'"></i>7 characters minimum with no spaces</div>
            <div><i class="m-r_4 fa" v-bind:class="this.pwdCheck.hasNum ? 'fa-check-circle c_success-n1' : 'fa-ban c_alert-n1'"></i>Contains at least one number</div>
            <div><i class="m-r_4 fa" v-bind:class="this.pwdCheck.hasLetter ? 'fa-check-circle c_success-n1' : 'fa-ban c_alert-n1'"></i>Contains at least one letter</div>
        </div>
        <div class="m-b_4">
            <InputPassword :inputId="'pwd2'" v-model="pwd2Value" :required=true :state="pwd2State" @input="confirmPassword">
                <template v-slot:default>Confirm Password</template>
                <template v-slot:requiredAlertMessage>Please confirm your password.</template>
                <template v-slot:alertMessage>Password does not match. Please try again.</template>
            </InputPassword>
        </div>
    </div>
</template>

<script>

import Btn from "../../../components/subComponents/Btn.vue";
import InputPassword from "../../../components/BasicForms/Input.Password.vue";

import PasswordChecker from "../../../components/subComponents/PasswordChecker.js";

export default {
	name: "SetPassword",
    mixins: [ PasswordChecker ],
	components: { Btn, InputPassword },
	props: {
	},
	data() {
		return {
			pwd1Value: "",
            pwd1State: "",
            pwd2Value: "",
            pwd2State: "",
            pwdCheck: {
                hasCharMin: false,
                hasNum: false,
                hasLetter: false
            }
		}
	},
    computed: {
		/*
		isDisabled: function () {
			//NOTE: This is a heavy handed implementation. If you need to use states that should not block submission, I recommend using a string filter to determine if any alert type states exist and if so, then disable the button.
			if ( this.pwd1State !== "" || this.pwd2State !== "") {
				return true;
			}
			return this.pwd1Value.length <= 0 || this.pwd2Value.length <= 0;
		}
		*/
	},
	methods: {
		reportChange(){
			//If the passwords pass checks and exist, send the value
			if(this.pwd1State == "" && this.pwd2State == "" && this.pwd1Value.length && this.pwd2Value.length){
				this.$emit('passwordChanged',this.pwd2Value);
			} else {
				//else, send empty to clear in parent
				this.$emit('passwordChanged',null);
			}
		},
		checkPassword: function (a) {
			if(a == "") {
				this.pwd1State = 'requiredAlert';
				return false;
			} else {
				this.pwd1State = '';
			}

			const trimmed = a.replace(/\s/g, "");
			this.pwd1Value = trimmed;

			this.pwdCheck.hasCharMin = this.characterMin(trimmed,7);
			this.pwdCheck.hasNum = this.containsNumber(trimmed);
			this.pwdCheck.hasLetter = this.containsLetter(trimmed);

			if( this.pwdCheck.hasCharMin == false || this.pwdCheck.hasNum == false || this.pwdCheck.hasLetter == false) {
				this.pwd1State = 'alert';
			}

			this.confirmPassword(this.pwd2Value);
			
		},
		confirmPassword: function (a) {
			if(a == "") {
				this.pwd2State = 'requiredAlert';
				return false;
			} else {
				this.pwd2State = '';
			}

			const trimmed = a.replace(/\s/g, "");
			this.pwd2Value = trimmed;

			if(this.matchPasswords(this.pwd1Value , trimmed) == false){
				this.pwd2State = "alert";
			} else {
				this.pwd2State = "";
			}

			this.reportChange();
		},
	},
};
</script>