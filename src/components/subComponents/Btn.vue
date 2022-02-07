<template>
	<button
		class="ease_out transition_1 f:outline_none text_center br_none inline-block w_auto font_medium font_ui"
		@click="onClick()"
		:class="[buttonColors, 'br_' + corner, { p_0: shape != 'button' }]"
		v-bind:disabled="isDisabled"
		style="min-height:unset"
	>
		<div
			class="flex block justify_center flex_column"
			:class="buttonSize"
			
		>
			<div class="flex_auto self_center justify_center flex"  v-bind:style="aspect_ratio"><slot ></slot></div>
		</div>
	</button>
</template>

<script>
export default {
	name: "Btn",
	props: {
		size: {
			type: String,
			default: "medium"
		},
		state: {
			type: String,
			default: "primary"
		},
		corner: {
			type: String,
			default: "radius"
		},
		shadow: {
			type: Boolean,
			default: true
		},
		isDisabled: { type: Boolean, default: false },
		shape: {
			type: String,
			default: 'button',
			validator: function (value) {
				return ['button', 'circle', 'square','switch'].indexOf(value) !== -1;
			},
		}
	},
	data() {
		return {

		};
	},
	methods: {
		onClick() {
			if (!this.isDisabled) {
				this.$emit("onClick");
			}else{
				this.$emit("onClickDisabled");
			}
		}
	},
	computed: {
		aspect_ratio() {
			if (this.shape == 'square'){
			return {
				width: '1.25em',
				height: '1.25em'
			}}
			if(this.shape == 'switch'){
				return {
				width: '2.75em',
				height: 'auto'
			}}
			return {};

		},
		buttonSize() {
			let size = "";
			switch (this.shape) {
				case 'button':
					switch (this.size) {
						case "tiny":
							size = "p-y_1 p-x_2 font_n3 font_bold";
							break;
						case "small":
							size = "p-y_3 p-x_3 lh_0 font_n1 font_0:md";
							break;
						case "medium":
							size = "p-y_3 lh_2 p-x_4 font_1 font_2:md";
							break;
						case "large":
							size = "p-y_3 p-x_4 m-y_2 m-x_3 lh_2 font_3 font_4:md";
							break;
						default:
							size = "p-y_2 p-x_3 font_n1 font_0:md";
							break;
					}
					break;

				default:
					switch (this.size) {
						case "tiny":
							size = "p_2 lh_0 font_n2 font_bold";
							break;
						case "small":
							size = "p_3 lh_0 font_n1 font_0:md";
							break;
						case "medium":
							size = "p_3 lh_0 font_2 font_3:md";
							break;
						case "large":
							size = "p_3 lh_0 font_4 font_5:md";
							break;
						default:
							size = "p_3 lh_0 font_n1 font_0:md";
							break;
					}
					break;
			}
			let disabledStyle = "";
			if (this.isDisabled) {
				disabledStyle += "cursor_not-allowed ";
			}
			return size + " " + disabledStyle;
		},
		buttonColors() {
			let stateStyle = "";
			stateStyle += " c_white h:c_white";
			switch (this.state) {
								case "accent":
					if (this.isDisabled) { stateStyle += " bg_accent-4"; }
					else {
						stateStyle +=
							"  h:bg_accent-n3 br_accent-n3";
						stateStyle += (this.isActivatable) ? " bg_accent-n4  " : " bg_accent-n1";
					}
					break;
				case "alert":
					if (this.isDisabled) { stateStyle += " bg_alert-4"; }
					else {
						stateStyle +=
							"  h:bg_alert-n3 br_alert-n3";
						stateStyle += (this.isActivatable) ? " bg_alert-n4  " : " bg_alert-n1";
					}
					break;
				case "warning":
					if (this.isDisabled) { stateStyle += " bg_warning-4"; }
					else {
						stateStyle +=
							"  h:bg_warning-n3 br_warning-n3";
						stateStyle += (this.isActivatable) ? " bg_warning-n4  " : " bg_warning-n1";
					}

					break;
				case "success":
					if (this.isDisabled) { stateStyle += " bg_success-4"; }
					else {
						stateStyle +=
							"  h:bg_success-n3 br_success-n3";
						stateStyle += (this.isActivatable) ? " bg_success-n4  " : " bg_success-n1";
					}
					break;
				case "highlight":
					if (this.isDisabled) { stateStyle += " bg_highlight-4"; }
					else {
						stateStyle +=
							"  h:bg_highlight-n3 br_highlight-n3";
						stateStyle += (this.isActivatable) ? " bg_highlight-n4  " : " bg_highlight-n1";
					}
					break;
				case "black":
					stateStyle = " c_white-8 h:c_white-9 ";
					if (this.isDisabled) { stateStyle = " bg_black-2 c_black-3"; }
					else {
						stateStyle +=
							"  h:bg_black-6 br_black-5";
						stateStyle += (this.isActivatable) ? " bg_black-8 " : " bg_black-4";
					}
					break;
				case "secondary":

					if (this.isDisabled) { stateStyle += " bg_secondary-5 c_secondary-4"; }
					else {
						stateStyle +=
							" h:bg_secondary-2 br_secondary-2 c_black";
						stateStyle += (this.isActivatable) ? " bg_secondary-4 " : " bg_secondary-4";
					}
					break;
				case "none":
					stateStyle = this.isDisabled
						? ""
						: "";
					break;
				case "empty":
					stateStyle = this.isDisabled
						? " c_black-3 "
						: "h:underline undecorated bg_white-0 c_primary h:c_accent-n1";
					break;
				default:
					if (this.isDisabled) { stateStyle += " bg_primary-4"; }
					else {
						stateStyle += " h:bg_primary-n2 br_primary-n3";
						stateStyle += (this.isActivatable) ? " bg_primary-n2 " : " bg_primary";
					}
					break;
			}
			let disabledStyle = disabledStyle += this.isDisabled ? " disabled cursor_not-allowed " : " cursor_pointer ";
			let shadowStyle = "";
			if (this.state != "empty" && !this.isDisabled) {
				shadowStyle = this.shadow ? " shadow_overlap-light " : " "
			}
			return stateStyle + " " + shadowStyle + " " + disabledStyle;
		}
	}
};
</script>
<style>
.f\:outline_none {
	outline: none;
}
</style>

