<template>
	<div class="question font_ui">
		<label
			v-if="hasLabel"
			:for="'input_' + id"
			:class="[
				{
					c_alert: state == 'alert',
				},
				{
					c_warning: state == 'warning',
				},
			]"
			class="
				label-holder
				flex
				font-size_up
				font_display font_medium
				p-y_2
			"
		>
			<span class="text cell flex_shrink">
				<slot name="default"></slot>
			</span>
			<span v-if="required" class="required-holder flex_shrink font_n5">
				<i class="fas fa-asterisk c_warning vertical-align_top"></i>
			</span>
		</label>
		<fieldset
			class="
				flex flex_row:md
				gap-x_4
				flex_wrap
				br_solid br_radius br_2
				p-b_4
				relative
			"
			:class="fieldSetCSS.borderColor"
		>
			<legend
				v-if="hasLegend"
				class="
					absolute
					r_auto
					w_auto
					t_n3
					m-t_n2
					p-x_3
					l_2
					lh_0
					font-size_down
					bg_white
					p-x_4
					font_ui font_medium
				"
				:class="fieldSetCSS.fontColor"
			>
				<ValueIcon
					v-if="icon"
					class="flex_none p-x_3 p-y_0"
					:state="state"
					:icon="icon"
					inputNameTarget="id"
				/><slot name="legend">Legend Slot</slot>
			</legend>
			<slot name="input"> </slot>
			<span class="opacity_7 font_italic"><slot name="hint"></slot></span>
		</fieldset>
		<div class="font-size_down">
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
	</div>
</template>

<script>
import messageHolder from "../../subComponents/InputMessageHolder.vue";
import ValueIcon from "../../subComponents/inputValueIcon";

export default {
	name: "QuestionFieldSet",
	props: {
		id: { type: [String, Number, null] },
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
		},
		hasLabel() {
			console.log();
			if (this.$slots.default == undefined) {
				return false;
			}
			return this.$slots.default[0].text.length > 0;
		},
		hasLegend() {
			console.log();
			if (this.$slots.legend == undefined) {
				return false;
			}
			return this.$slots.legend[0].text.length > 0;
		},
		fieldSetCSS() {
			let css = { fontColor: "c_black-7", borderColor: "br_black-2" };
			if (this.state !== "") {
				css.fontColor = "c_" + this.state + '-n2';
				css.borderColor = "br_" + this.state;

			}
			return css;
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
