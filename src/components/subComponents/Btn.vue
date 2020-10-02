<template>
	<button
		class="ease_out transition_1 f:outline_none text_center br_none inline-block w_auto font_medium"
		@click="onClick()"
		:class="[buttonStyles,{' is-active active ':isActive}, 'br_'+ corner]"
	>
		<span class="flex">
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
			stateStyle +=" c_white h:c_white";
			switch (this.state) {
				case "alert":
					if (this.isDisabled)
						{ stateStyle += " bg_alert-4";}
					else{
						stateStyle +=
							"  h:bg_alert-n3 br_alert-n3";
						stateStyle += (this.isActivatable)?" bg_alert-n4 a:bg_alert ":" bg_alert-n1";
					}
				break;
				case "warning":
					if (this.isDisabled)
					{ stateStyle += " bg_warning-4";}
					else{
						stateStyle +=
							"  h:bg_warning-n3 br_warning-n3";
						stateStyle += (this.isActivatable)?" bg_warning-n4 a:bg_warning ":" bg_warning-n1";
					}

					break;
				case "success":
					if (this.isDisabled)
					{ stateStyle += " bg_success-4";}
					else{
						stateStyle +=
							"  h:bg_success-n3 br_success-n3";
						stateStyle += (this.isActivatable)?" bg_success-n4 a:bg_success ":" bg_success-n1";
					}
					break;
				case "black":
					if (this.isDisabled)
					{ stateStyle += " bg_black-3";}
					else{
						stateStyle +=
							"  h:bg_black-7 br_black-5";
						stateStyle += (this.isActivatable)?" bg_black-8 a:bg_black-5 ":" bg_black-5";
					}
					break;
					break;
				case "secondary":
					if (this.isDisabled)
					{ stateStyle += " bg_secondary-4";}
					else{
						stateStyle +=
							"  h:bg_secondary-n1 br_secondary-n1";
						stateStyle += (this.isActivatable)?" bg_secondary-n2 a:bg_secondary-1 ":" bg_secondary";
					}
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
					if (this.isDisabled)
					{ stateStyle += " bg_primary-4";}
					else{
						stateStyle += " h:bg_primary-n2 br_primary-n3";
						stateStyle += (this.isActivatable)? " bg_primary-n3 a:bg_primary-1 ":" bg_primary-n1";
					}
					break;
			}
			let shadowStyle = "";
			if (this.isDisabled) {
				stateStyle += " disabled cursor_not-allowed";
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

