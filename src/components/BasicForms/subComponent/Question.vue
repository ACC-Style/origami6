<template>
	<div class="question font_ui">
		<label v-if="hasLabel"
			:for="'input_'+id"
			:class="[
				{
					c_alert: state == 'alert',
				},
				{
					c_alert: state == 'requiredAlert',
				},
				{
					c_warning: state == 'warning',
				},
			]"
			class="label-holder flex font-size_up-1 font_display font_medium p-y_2"
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
				class="flex_none p-x_3 p-y_0"
				:state="state"
				:icon="icon"
				:inputNameTarget="'input_'+id"
			/>
			<slot name="input"> </slot>
			<div
				class="
					br_solid br_2
					br-l_0
					p-y_2
					font_medium
					flex_none
					p-x_4
					lh_3
					self_strech
				"
				v-if="postLabel"
				:class="inputPrePostStyles"
				@click="onClickPostLabel"
				v-html="postLabel"
			>
			</div>
		</div>
		<div class="font-size_down">
			<messageHolder :state="'alert'" v-if="state == 'requiredAlert'"
				><slot name="requiredAlertMessage">This input is required.</slot> </messageHolder
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
			<span class="opacity_7 font_italic m-t_2 block"><slot name="hint"></slot></span>
		</div>
	</div>
</template>

<script>
import messageHolder from "../../subComponents/InputMessageHolder.vue";
import ValueIcon from "../../subComponents/inputValueIcon";

export default {
	name: "Question",
	props: {
		id: { type: [String,Number, null]},
		icon: { type: String, default: null },
		postLabel: { type: String, default: null },
		required: { type: Boolean, default: true },
		state: {
			type: String, default: "",
			validator: function (state) {
				return ['', 'alert', 'requiredAlert', 'warning', 'success', 'info', 'disabled', 'accent'].indexOf(state) !== -1;
			},
		}
	},
	data() {
		return {

		};
	},
	computed: {
		hasLabel() {
			if (this.$slots.default == undefined) {
				return false;
			}
			return this.$slots.default[0].text.length > 0;
		},
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
					styles += "c_black-6 bg_black-1 br_black-2 ";
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
		}
	},
	components: {
		messageHolder,
		ValueIcon
	},
	methods: {
		onClickPostLabel: function () {
			this.$emit("onClickPostLabel");
		}
	}
};
</script>

<style scoped>
.question input:focus {
	outline: none;
}
</style>
