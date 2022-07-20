<template>
	<Question
		:id="id"
		:icon="icon"
		:postLabel="postLabel"
		:required="required"
		:state="thisState"
	>
		<template v-slot:default>
			<slot name="default">
				Password
			</slot>
		</template>
		<template v-slot:input>
			<div class="relative flex flex_grow">
				<input
					:id="'input_'+id"
					:name="'input_'+id"
					class="br_2 p-y_2 br_solid flex_auto p-l_4 lh_3 br_square"
					:type="thisInputType"
					@input="onInput($event)"
					@keydown.space.prevent
					:placeholder="placeholder"
					:value="value"
					:required="required"
					:class="inputStyles"
					:disabled="thisState == 'disabled'"
				/>
				<Btn
					:class="areaStyle"
					:state="buttonState"
					:shadow="false"
					corner="square"
					size="small"
					type="button"
					@onClick="showHideToggle()"
					@onFocus="toggleFocus()"
					@onBlur="toggleFocus()"

				>
					<i class="far fa self_center" :class="showHideIcon"></i>
				</Btn>
			</div>
		</template>
		<template v-slot:requiredAlertMessage><slot name="requiredAlertMessage"></slot
		></template>
		<template v-slot:alertMessage>
			<slot name="alertMessage"></slot>
		</template>
		<template v-slot:warningMessage>
			<slot name="warningMessage"></slot
		></template>
		<template v-slot:successMessage>
			<slot name="successMessage"></slot
		></template>
		<template v-slot:infoMessage>
			<slot name="infoMessage"></slot
		></template>
		<template v-slot:accentMessage>
			<slot name="accentMessage"></slot
		></template>
		<template v-slot:hint> <slot name="hint"></slot></template>
		<!--<template v-slot:hint>
			<a class="link w_100 text_right">forgot password</a>	
		</template>-->
	</Question>
</template>

<script>
import Question from "./subComponent/Question.vue";
import baseInputFunctions from "./subComponent/baseInputFunctions.vue";
import Btn from "../subComponents/Btn.vue";
export default {
	mixins: [baseInputFunctions],
	components: { Question,Btn },
	props: {
		inputType: { type: String, default: "password" },
		icon: { type: String, default: "fa-key" },
		forgotPasswordURL: { type: String, default: "https://www.acc.org/ForgotPassword" },
	},
	data() {
		return {
			isMasked: true,
			isFocused: false,
			buttonState: "secondary",
		};
	},
	computed: {
		showHideIcon: function() {
			let icon = (this.isMasked)? "fa-eye": "fa-eye-slash";
			return icon;
		},
		thisInputType:function(){
			let type = (this.isMasked)? "password": "text";
			return type;
		},
		areaStyle() {
			let styles = "br-tr_radius br-br_radius br_solid br_2 p-y_1";
			if (this.buttonState == "primary") {
				return styles;
			}
			switch (this.state) {
				case "requiredAlert":
				case "alert":
					//styles += (this.isFocused) ? " br_secondary-2 " : " bg_alert-3 c_alert-n3 br_alert-n1 ";
					styles += " bg_alert-3 c_alert-n3 br_alert-n1 ";
					break;
				case "warning":
					styles += " bg_warning-3  c_warning-n3 br_warning-n1 ";
					//styles += (this.isFocused) ? " br_secondary-2 " : " bg_warning-3  c_warning-n3 br_warning-n1 ";
					break;
				//trimmed cases
				default:
					styles += (this.isFocused) ? " br_secondary-2" : " br_secondary-4";
					break;
			}
			return styles;
		}
	},
	methods: {
		showHideToggle: function () {
			this.isMasked = !this.isMasked;
		},
		toggleFocus: function () {
			this.isFocused = !this.isFocused;
			this.buttonState = this.buttonState == "secondary" ? "primary" : "secondary"
			/*if(this.buttonState == "secondary"){
				this.buttonState == this.thisState;
			} else {
				this.buttonState =="primary";
			}*/
		},
		isPassword() {
			const regex = RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$');
			return regex.test(this.value);
		},
		onInput: function(event) {
			if (this.value == "" && this.required) {
				this.$emit("onStateChange","requiredAlert")
			} else {
				this.$emit("onStateChange","")
			} 
			this.$emit('input',event.target.value);
		}
	},
};
</script>

<style scoped></style>
