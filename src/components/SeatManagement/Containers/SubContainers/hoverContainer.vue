<template>
	<section
		class="relative font_ui z_1"
		@mouseenter="isHovered = true;"
		@mouseleave="isHovered = false;"
		@click="onClick()"
		:class="containerStyles"
	>
		<div
			data-target="hover-indicator"
			:class="[hoverIndicatorStyles,' bg_'+ actionColor +'-5 c_'+actionColor+'-n1 br_'+actionColor+'-2 ' ]"
			class="absolute t_0 r_0 b_0 br_1 br_solid l_auto inline-block p-x_3:md p-x_2 p-t_3 z_0 flex flex_column justify_around:md justify_start shadow_n1 transition_3"
		>
			<i :class="actionIcon" class="fas fa-fw font_0:md font_n3"></i>
		</div>
		<div
			class="br_solid br_black-2 br_1 transition_1 z_2 m-r_5:md m-r_4 m-r_0:touch transition_3"
			:class="hoverDataStyles"
		>
			<slot></slot>
			<div v-if="!isDisabled"
				:class="' bg_'+ actionColor +'-5 br_' + actionColor + '-3 ' "
				class="br_solid br_1 br-t_0 shadow_n1 p_2 p-x_3 text_right display_none block:touch"
			>
				{{actionLabel}}
				<i :class="actionIcon" class="fa fa-arrow-right font_0:md font_n3"></i>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		isDisabled: {
			type: Boolean,
			default: false,
		},
		actionColor: {
			type: String,
			default: 'primary'
		},
		actionIcon: {
			type: String,
			default: 'fa-arrow-right'
		},
		actionLabel: {
			type: String,
			default: "navigate to"
		}

	},

	data() {
		return {
			isHovered: false,
		};
	},
	methods: {
		onClick() {
			if (!this.isDisabled) {
				this.$emit("click");
			}
		},
	},
	computed: {
		hoverEffect: function () {
			if (this.isDisabled) { return false; }
			else if (this.isHovered) {
				return true;
			}
			else {
				return false;
			}
		},
		containerStyles: function () {
			return !this.isDisabled
				? "cursor_pointer"
				: "cursor_not-allowed";
		},
		hoverDataStyles: function () {
			return this.hoverEffect
				? "br_" + this.actionColor + "-2 bg_" + this.actionColor + "-5"
				: this.isDisabled ? "br_black-2 bg_white texture_disabled opacity_9" : "br_black-2 bg_white";
		},
		hoverIndicatorStyles: function () {
			return this.hoverEffect
				? "r_0:md r_0  h:bg_" + this.actionColor + "-3 h:c_priamry-n3"
				: "r_5:md r_4";
		},
	},
};
</script>

<style scoped>
.cursor_pointer {
	cursor: pointer;
}
.cursor_not-allowed {
	cursor: not-allowed;
}
@media (hover: none) {
	.m-r_0\:touch {
		margin-right: 0 !important;
	}
	.block\:touch {
		display: block !important;
	}
}
</style>
