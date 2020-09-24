<template>
	<button
		class="ease_out transition_1 f:outline_none text_center br_none inline-block w_auto font_medium"
		@click="onClick()"
		:class="[buttonStyles,{' is-active active ':isActive}, 'br_'+ corner]"
	>
		<span class="flex h:undecorated">
			<slot></slot>
		</span>
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
		corner:{
			type:String,
			default:"radius"
		},
		shadow:{
			type:Boolean,
			default:true
		},
		isActivatable: { type: Boolean, default: false },
		isDisabled: { type: Boolean, default: false },
		isActive:{type: Boolean, default: false}
	},
	data() {
		return {
		};
	},
	methods: {
		onClick() {
			if (!this.isDisabled) {
				this.$emit("onClick");
				if (this.isActivatable) {
					this.onTogggleActivate();
				}
			}
		},
		onTogggleActivate() {
			if (!this.isActive) {
				this.$emit("onActive");
			}
			else{
				this.$emit("onDeactive");
			}
		}
	},
	computed: {
		buttonStyles() {
			let size = "";
			switch (this.size) {
				case "tiny":
					size = "p-y_2 p-x_2 font_n3 font_n3:md";
					break;
				case "small":
					size = "p-y_2 p-x_3 font_n2 font_n2:md";
					break;
				case "medium":
					size = "p-y_3 p-x_4 font_0 font_1:md";
					break;
				case "large":
					size = "p-y_4 p-x_5 font_1 font_3:md";
					break;
				default:
					size = "p-y_2 p-x_3 font_n1 font_0:md";
					break;
			}
			let stateStyle = "";
			switch (this.state) {
				case "alert":
					stateStyle =
						"c_white h:c_white bg_alert-n1 h:bg_alert-n3 a:bg_alert-n4 br_alert-n3";
					if (this.isDisabled) stateStyle = "bg_alert-4";
					break;
				case "warning":
					stateStyle =
						"c_white h:c_white bg_warning-n1 h:bg_warning-n3 a:bg_warning-n4 br_warning-n3";
					if (this.isDisabled) stateStyle = "bg_warning-4";
					break;
				case "success":
					stateStyle =
						"c_white h:c_white bg_success-n1 h:bg_success-n3 a:bg_success-n4 br_success-n3";
					if (this.isDisabled) stateStyle = "bg_success-4";
					break;
				case "shade":
					stateStyle =
						"c_black bg_balack-3 h:bg_black-5 h:c_white a:c_white-8 a:bg_black-6 transition_1";
					if (this.isDisabled) stateStyle = "bg_shade-4";
					break;
				case "secondary":
					stateStyle =
						"c_black bg_secondary-3 h:bg_secondary-1 h:c_white a:c_secondary-4 a:bg_secondary-n3";
					if (this.isDisabled) stateStyle = "bg_secondary-4";
					break;
				case "none":
					stateStyle = this.isDisabled
						? ""
						: "";
					break;
				case "empty":
					stateStyle = this.isDisabled
						? ""
						: "underline h:undecorated bg_white-0";
					break;
				default:
					stateStyle =
						"c_white h:c_white bg_primary h:bg_primary-n2 a:bg_primary-n4";
					if (this.isDisabled) stateStyle = "bg_primary-4";
					break;
			}
			let shadowStyle = "";
			if (this.isDisabled) {
				stateStyle += " c_black-3 disabled";
			}else{
				stateStyle += " ";
				shadowStyle =this.shadow? " shadow_overlap-light" :" "
			}
			return size + " " + stateStyle+" "+ shadowStyle;
		}
	}
};
</script>
<style>
	.f\:outline_none{outline:none}

</style>

