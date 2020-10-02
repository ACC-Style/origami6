<template>
	<fieldset class="question font_ui " :class="fieldsetStyles">
		<legend
			:class="legendStyles"
			class="label-holder flex font-size_up font_medium p-y_2"
		>
			<span
				class="flex_none p-r_2"
				v-if="icon"
				:class="inputPrePostStyles"
			>
				<i class="far" :class="icon"></i>
			</span>
			<span class="flex_shrink">
				<slot name="default"></slot>
			</span>
			<span
				class="font_medium flex_none p-l_2"
				v-if="postLabel"
				:class="inputPrePostStyles"
			>
				( {{ postLabel }} )
			</span>
			<span v-if="required" class="required-holder flex_shrink font_n5">
				<i class="fas fa-asterisk c_warning vertical-align_top"></i>
			</span>
		</legend>
		<div class="input-holder flex self_end">
			<div class="flex_auto flex_column">
				<div
					class="m-b_4 flex_auto flex"
					v-for="(option, index) in options"
					:key="index"
				>
					<input
						:name="inputId"
						:id="'radio_' + index"
						v-on:change="onChange(option)"
						class="display_none"
						type="radio"
						v-model="selected"
						:required="required"
						:class="inputStyles"
						:value="option.value"
						:disabled="state == 'disabled'"
					/>
					<Btn
                        class="shadow_n2"
						:corner="'circle'"
						@onClick="onButtonChange(option)"
						:state="state == 'requiredAlert' ? 'alert' : state"
						:size="radioSize"
						:isActive="option.value == selected"
						:isActivatable="true"
						:shadow="false"
						:isDisabled="state == 'disabled'"
					>
						<i
							v-if="option.value == selected"
                            :class="radioSizeStyles"
							class="fas fa-circle text-shadow_black-1"
						></i>
						<i
							v-else
                            :class="radioSizeStyles"
							class="fas fa-circle opacity_0"
						></i>
					</Btn>
					<label
						class="text_left block flex_auto w_100 flex flex_column justify_center"
						:for="'radio_' + index"
						:class="radioLabelStyles"
					>
						<div class="self_middle">{{ option.label }}</div>
					</label>
				</div>
			</div>
		</div>
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
	</fieldset>
</template>

<script>
import messageHolder from "../subComponents/InputMessageHolder.vue";
import Btn from "../subComponents/Btn";

export default {
	name: "inputRaido",
	components: {
		messageHolder,
		Btn,
	},
	props: {
		inputId: { type: String, required: true },
		options: { type: Array, default: null },
		icon: { type: String, default: null },
		postLabel: { type: String, default: null },
		defaultvalue: { type: String, default: null },
		required: { type: Boolean, default: true },
		radioSize: {
			type: String,
			default: "small",
			validator: function(value) {
				return ["tiny", "small", "medium"].indexOf(value) !== -1;
			},
		},
		state: {
			type: String,
			default: "secondary",
			validator: function(value) {
				return (
					[
						"",
						"alert",
						"requiredAlert",
						"warning",
						"success",
						"info",
						"accent",
						"secondary",
						"disabled",
					].indexOf(value) !== -1
				);
			},
		},
	},
	data() {
		return {
			selected: "",
			inputState: this.state,
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
		radioLabelStyles() {
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
            switch (this.radioSize) {
                case "large":
                    styles += " p-l_4 font-size_up";
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
        radioSizeStyles(){
            let styles = "lh_0 ";
			 switch (this.radioSize) {
			
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

	methods: {
		onButtonChange: function(i) {
			this.selected = i.value;
			this.onChange(i);
		},
		onChange: function(value) {
			if (value == "" && this.required) {
				this.state = "requiredAlert";
				this.$emit("onChange", "");
				this.$emit("onStateChange", "requiredAlert");
			} else {
				this.$emit("onChange", value);
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
