<template>
	<div class="grid  gap-x_3 gap-y_3">
		<InputRadioBox
			v-for="(checkbox, index) in options"
			:key="'checkbox' + id + index"
			v-bind:value="checkbox"
			@input="onChange($event)"
			:name="name"
			:required="required"
			:disabled="state == 'disabled'"
			:index="index"
			:class="radioclasses"
		></InputRadioBox>
	</div>
</template>

<script>

import baseInputFunctions from "./subComponent/baseInputFunctions.vue";
import InputRadioBox from "./subComponent/Sub.RadioButton.vue";

export default {
	name: "RadioBoxes",
	mixins: [baseInputFunctions],
	components: {
		InputRadioBox
	},
	props: {
		type: { type: String, default: 'type' },
		options: { type: Array },
		value:{type:Object},
		name: { type: String, default: 'radio' },
        radioclasses:  { type: String }
	},
	data() {
		return {
			inputState: this.state,
			radioName: (this.name == 'radio' || !this.name) ? 'radio_' + this.inputId : this.name,
		};
	},
	computed: {
		templateClasses() {
			let classes = 'template-x_20';
			if( this.options<=4){classes = 'template-x_30'}
			return classes;
		},
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

	},
	methods: {
		onChange: function (radioIndex) {
			this.$emit("input", radioIndex);
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
