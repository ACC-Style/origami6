<template>
	<div class="question font_ui">
		<label
			:for="inputId"
			v-bind:class="{
				c_alert: inputState == 'alert',
				c_warning: inputState == 'warning',
			}"
			class="label-holder flex font_1 font_medium p-y_2"
		>
			<span class="text cell flex_shrink">
				<slot name="default"></slot>
			</span>
			<span v-if="required" class="required-holder flex_shrink font_n5">
				<i class="fas fa-asterisk c_warning vertical-align_top"></i>
			</span>
		</label>
		<div class="input-holder flex self_end">
			<ValueIcon
				v-if="icon"
				class="flex_shrink"
				:state="state"
				:icon="icon"
				inputNameTarget="inputId"
			/>
			<select
				v-model="selected"
				:id="inputId"
				:name="inputId"
				v-on:change="onChange()"
				class="br_2 p-y_2 br_solid flex_auto p-l_4 lh_3"
				:required="required"
				:class="inputStyles"
				:disabled="state == 'disabled'"
			>
				<option disabled value="">select one</option>
				<option
					v-for="(op, index) in options"
					:key="'option_' + index"
					:value="op.value"
					:label="op.label"
				/>
			</select>
			<div
				class="br_solid br_2 br-l_0 p-y_3 font_medium flex_none p-x_4 lh_3 flex flex_column font-size_down"
				v-if="postLabel"
				:class="inputPrePostStyles"
			>
				{{ postLabel }}
			</div>
		</div>
		<messageHolder :state="'alert'" v-if="state == 'requiredAlert'"
			>This input is required.</messageHolder
		>
		<messageHolder :state="'alert'" v-if="state == 'alert'">
			<slot name="alertMessage"></slot>
		</messageHolder>
		<messageHolder :state="'warning'" v-if="state == 'warning'">
			<slot name="warningMessage"></slot>
		</messageHolder>
		<messageHolder :state="'success'" v-if="state == 'success'">
			<slot name="successMessage"></slot>
		</messageHolder>
		<messageHolder :state="'info'" v-if="state == 'info'">
			<slot name="infoMessage"></slot>
		</messageHolder>
		<messageHolder :state="'accent'" v-if="state == 'accent'">
			<slot name="accentMessage"></slot>
		</messageHolder>
	</div>
</template>

<script>
import messageHolder from "../subComponents/InputMessageHolder.vue";
import stateIcon from "../subComponents/StatefullIcon";
import ValueIcon from "../subComponents/inputValueIcon";

export default {
	name: "inputSelect",
	props: {
		inputId: { type: String, required: true },
		options: { type: Array, default: null },
		icon: { type: String, default: null },
		postLabel: { type: String, default: null },
		required: { type: Boolean, default: true },
		state: {
			type: String, default: "",
			validator: function (value) {
				return ['', 'alert', 'requiredAlert', 'warning', 'success', 'info', 'disabled'].indexOf(value) !== -1;
			},
		}
	},
	data() {
		return {
			selected: '',
			inputState: this.state,
		};
	},
	computed: {
		inputPrePostStyles() {
			let styles = "";
			switch (this.state) {
				case "requiredAlert":
				case "alert":
					styles += "bg_alert-3 c_alert-1 br_alert-n1 ";
					break;
				case "warning":
					styles += " bg_warning-3  c_warning br_warning-n1 ";
					break;
				case "success":
					styles += " bg_success-4 br_success-n1 c_success ";
					break;
				case "disabled":
					styles += " c_black-3 bg_black-2 br_black-3 ";
					break;
				default:
					styles += "c_black-7 bg_black-2 br_black-5 ";
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
					styles += " c_black bg_white-0 br_black-5 ";
					break;
			}
			if (this.icon) {
				styles += " br-l_0";
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
		onChange: function () {
			if (this.selected == "" && this.required) {
				this.state = "requiredAlert"
				this.$emit("onChange", "");
				this.$emit("onStateChange", "requiredAlert")
			} else {

				this.$emit("onChange", this.selected);
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
