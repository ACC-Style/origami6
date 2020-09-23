<template>
	<HoverContainer>
		<div
			class=" flex flex_row:md flex_column p-y_3 p-x_4"
		>
			<div class="flex_auto">
				<h3 class="font_3 font_display m-t_2 lh_1 m-b_0">{{ name }}</h3>
				<a
					v-bind:href="productURL"
					target="_blank"
					class="link font_n2 font_medium c_primary h:c_primary-n2 block lh_1 m-y_2"
					>product page</a
				>
			</div>
			<div
				class="flex_auto flex_none:md w_20:lg w_40:md w_100 m-l_auto flex flex_column justify_around"
			>
				<MicroSeatChart
					:all="all"
					:filled="filled"
					:locked="locked"
					:requested="requested"
				/>
			</div>
</div>
	</HoverContainer>
</template>

<script>
import HoverContainer from '../../Containers/SubContainers/hoverContainer.vue'
import MicroSeatChart from "../../Charts/Seat.MicroSeatChart.vue";
export default {
	props: {
		name: {
			type: String,
			default: "Missing Label",
		},
		productURL: {
			type: String,
			default: "",
		},
		all: {
			type: Number,
			default: 0,
		},
		filled: {
			type: Number,
			default: 0,
		},
		requested: {
			type: Number,
			default: 0,
		},
		locked: {
			type: Number,
			default: 0,
		},
	},
	components: {
		MicroSeatChart,HoverContainer
	},
	data() {
		return {
			hoverDataStyles: "br_black-2 bg_white",
			hoverIndicatorStyles: "r_5:md r_4",
		};
	},
	methods: {
		hoverEffectOn: function () {
			this.hoverDataStyles = "br_primary-2 bg_primary-5";
			this.hoverIndicatorStyles = "r_0";
		},
		hoverEffectOff: function () {
			this.hoverDataStyles = "br_black-2 bg_white";
			this.hoverIndicatorStyles = "r_5:md r_4";
		},
	},
};
</script>

<style scoped></style>
