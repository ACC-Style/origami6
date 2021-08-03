<template>
	<QuestionFieldSet
		:id="id"
		:icon="icon"
		:postLabel="postLabel"
		:required="required"
		:state="thisState"
	>
		<template v-slot:default
			><slot name="default">Checkboxes</slot>
		</template>
		<template v-slot:legend><slot name="legend">Select All</slot></template>
		<template v-slot:input>
			<div class="grid template-x_15 gap-x_3 gap-y_3">
				<InputRadioBox
					:name="name"
					v-for="(checkbox, index) in value"
					:key="'checkbox' + id + index"
					:value="value[index]"
					@input="onChange($event)"
					:required="required"
					:disabled="state == 'disabled'"
					:index="index"
				></InputRadioBox>
			</div>
		</template>
		<template v-slot:alertMessage>This is not an email</template>
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
	</QuestionFieldSet>
</template>

<script>
import QuestionFieldSet from "./subComponent/Question.FieldSet.vue";
import baseInputFunctions from "./subComponent/baseInputFunctions.vue";
import InputRadioBox from "./Input.RadioButton.vue";

export default {
	name: "InputRadioBoxes",
	mixins: [baseInputFunctions],
	components: {
		QuestionFieldSet, InputRadioBox
	},
	props: {
		type: { type: String, default: 'type' },
		value: { type: Array },
		name: { type: String, default: 'radio' },
	},
	data() {
		return {
			selected: -1,
			inputState: this.state,
			radioName: (this.name == 'radio' || !this.name) ? 'radio_' + this.inputId : this.name,
		};
	},
	computed: {
		inputPrePostStyles() {
			let styles = "";
			switch (this.state) {
				case "requiredAlert":
				case "alert":
					styles += " c_alert-1 br_alert-n1 ";
					break;
				case "warning":
					styles += "   c_warning br_warning-n1 ";
					break;
				case "success":
					styles += "  br_success-n1 c_success ";
					break;
				case "disabled":
					styles += " c_black-3  br_black-3 ";
					break;
				default:
					styles += "c_black-6  br_black-3 ";
					break;
			}
			return styles;
		},
		inputStyles() {
			let styles = "";
			switch (this.state) {
				case "requiredAlert":
				case "alert":
					styles += " c_alert br_alert-n1 ";
					break;
				case "warning":
					styles += "  c_warning br_warning-n1 ";
					break;
				case "success":
					styles += " br_success-n2 c_success ";
					break;
				case "disabled":
					styles += " c_black bg_black-2 br_black-3 texture_disabled";
					break;
				default:
					styles += " c_black bg_white-0 br_black-3 ";
					break;
			}
			if (this.icon) {
				styles += " br-l_0";
			}

			return styles;
		},
		legendStyles() {
			let styles = "";
			switch (this.state) {
				case "requiredAlert":
				case "alert":
					styles += " c_alert-n3  ";
					break;
				case "warning":
					styles += " c_warning-n3  ";
					break;
				case "success":
					break;
				case "disabled":
					styles += " c_black-4  ";
					break;
				default:
					break;
			}
			return styles;
		},
		LabelStyles() {
			let styles = "";
			switch (this.state) {
				case "requiredAlert":
				case "alert":
					styles += " c_alert-n3  ";
					break;
				case "warning":
					styles += " c_warning-n3  ";
					break;
				case "success":
					break;
				case "disabled":
					styles += " c_black-4  ";
					break;
				default:
					break;
			}
			switch (this.size) {
				case "large":
					styles += " p-l_4 font-size_up";
					break;
				case "tiny":
					styles += " p-l_2 font-size_down";
					break;
				default:
					styles += " p-l_3";
					break;
			}

			return styles;
		},
		fieldsetStyles() {
			let styles = "br_solid br_1 br_radius";
			switch (this.state) {
				case "requiredAlert":
				case "alert":
					styles += " br_alert-n1  ";
					break;
				case "warning":
					styles += " br_warning-n1  ";
					break;
				case "success":
					break;
				case "disabled":
					break;
				default:
					styles = "br_none";
					break;
			}
			return styles;
		},
		radioSizeStyles() {
			let styles = "lh_0 ";
			switch (this.size) {

				case "tiny":
					styles += "p-x_1 p-t_1 ";
					break;
				case "small":
					styles += " p-y_2 ";
					break;
				case "medium":
					styles += " m-x_n3 ";
					break;
				case "large":
					styles += " m-x_n3 p-y_3    ";
					break;
				default:
					styles += "";
					break;
			}
			return styles;
		}
	},
	mounted() {
		this.value.forEach((checkbox, index) => {
			if (checkbox['selected']) { 
				this.selected = index;
				}
		})
	},
	methods: {
		onChange: function (radioIndex) {
			this.selected = radioIndex;
			this.value.forEach((checkbox, index) => {
				if( index == radioIndex) {
					checkbox['selected'] = true;
					return;
				}
				checkbox['selected'] = false
				
			});
			if (radioIndex == "" && this.required) {
				this.state = "requiredAlert";
				this.$emit("onStateChange", "requiredAlert");
			} else {
				this.$emit("input", this.value);
			}
		},
	},
};
</script>

<style scoped>
.question .input:focus {
	border: inherit;
	background: inherit;
}
</style>
