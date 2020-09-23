<template>
	<div id="inputEmail" class="question font_ui">
		<label
			for="email"
			v-bind:class="{
				c_alert: inputState == 'alert',
				c_warning: inputState == 'warning'
			}"
			class="label-holder flex font_1 font_medium p-y_2"
		>
			<span class="text cell flex_shrink">
				<slot name="default"></slot>
			</span>
			<span v-if="required" class="required-holder flex_shrink font_n5">
				<i class="fas fa-asterisk c_warning  vertical-align_top"></i>
			</span>
		</label>
		<div class="input-holder flex self_end">
			<ValueIcon
				v-if="icon"
				class="flex_shrink"
				:state="inputState"
				:icon="icon"
				inputNameTarget="'text'"
			/>
			<input
				id="text"
				name="text"
				v-on:change="onChange(text)"
				class="br_2 p-y_2 br_solid flex_auto p-x_4 lh_3"
				type="text"
				v-model="text"
				required="required"
				:class="{
					'br-l_0':icon,
					'br_alert-n1': inputState == 'alert',
					'br_warning-n1': inputState == 'warning',
					'br_info-n1': inputState == 'info',
					'br_success-n1': inputState == 'success',
					'br_black-4 ': inputState == ''
				}"
			/>
			<div
				class="optional  br_solid br_2 br-l_0 p-y_3 font_medium flex_shrink p-x_3 lh_3 flex flex_column"
				v-if="!required"
				:class="{

					'br_alert-n1 c_alert': inputState == 'alert',
					'br_warning-n1 c_warning': inputState == 'warning',
					'br_info-n1 c_primary': inputState == 'info',
					'br_success-n1 c_primary': inputState == 'success',
					' br_shade c_primary ': inputState == ''
				}"
			>
				<small>optional</small>
			</div>
		</div>
		<messageHolder :state="inputState">{{ stateMessage }}</messageHolder>
	</div>
</template>

<script>
import messageHolder from "../subComponents/InputMessageHolder.vue";
import stateIcon from "../subComponents/StatefullIcon";
import ValueIcon from "../subComponents/inputValueIcon";

export default {
	name: "inputEmail",
	props: {
		defaultvalue: { type: String, default: "" },
		icon: { type: String, default: "" },
		required: { type: Boolean, default: true },
		state: { type: String, default: "", 
		 validator: function (value) {
        return ['alert','warning','success','info'].indexOf(value) !== -1;
      },}
	},
	data() {
		return {
			text: this.defaultvalue,
			inputState: this.state,
			stateMessage: ""
		};
	},
	computed: {
		inputStyles() {
			let styles = "";
			switch (this.inputState) {
				case "alert":
					styles += " bg_alert-4 br_alert c_alert ";
					break;
				case "warning":
					styles += " bg_warning-4 br_warning c_warning ";
					break;
				case "success":
					styles += " bg_sucess-4 br_sucess c_sucess ";
					break;
				case "info":
					styles += " bg_info-4 br_info c_info ";
					break;
				case "accent":
					styles += " c_black bg_accent-n2 ";
					break;
					return styles;
				default:
					styles += " c_black bg_shade-3 br_shade-2";
					break;
			}
			return styles;
		}
	},
	components: {
		messageHolder,
		stateIcon,
		ValueIcon
	},
	methods: {
		onChange: function(value) {
			if (value == "" && this.required) {
				this.inputState = "alert";
				this.stateMessage = "You didn't seem to type anything.";
				this.$emit("onChange", "");
				this.$emit("onStateChange","this.inputState")
			} else {
				this.inputState = "";
				this.$emit("onChange", value);
			} 
		}
	}
};
</script>

<style scoped>
.question .input:focus {
	border: inherit;
	background: inherit;
}
</style>
