<template>
	<section class="p-x_5">
		<div class="flex font_display p_3 flex_column flex_row:md m-t_4">
			<div class="flex_auto font_5 ">
				<LoadingText/>
			</div>
			<div
				class="flex_shrink c_primary-n1 lh_0 text_right:md text_left m-t_n3:md m-b_4:sm"
			>
				<strong
					class="font_n2 opacity_5 uppercase lh_0 display_none block:md"
					>Contract #</strong
				>
				<span class="font_2 font_3:md block"
					><i class="fas fa-spinner-third fa-spin opacity_5"></i
				></span>
			</div>
		</div>
		<div class="br_solid br_1 br_black-2 font_ui">
			<div class="flex flex_column-reverse flex_row:md p-y_3">
				<div class="flex flex_auto p-y_3 m-l_4 font_n1 m-t_3 m-t_0:md">
					<div class="flex_auto text_right text_left:md">
						<div class="p-x_3">
							<strong class="p-r_2">Amount:</strong>
							<span class="opacity_5">~</span>
						</div>
						<div class="p-x_3">
							<strong class="p-r_2">Purchased:</strong>
							<span class="opacity_5">~</span>
						</div>
					</div>
					<div class="flex_auto">
						<div class="p-x_3">
							<strong class="p-r_2">Term:</strong>
							<span class="opacity_5">~</span>
						</div>
						<div class="p-x_3">
							<strong class="p-r_2">Expires:</strong>
							<span class="opacity_5">~</span>
						</div>
					</div>
				</div>
				<div
					class="flex_auto flex m-t_3 m-t_0:md font_2 c_shade-n5 shadow_1 m-x_4 bg_shade-5 br_1 br_solid br_black-2 m-l_auto"
				>
					<div class="flex_auto p-l_5 p-r_4 p-b_3 text_right">
						<span class="block text_right"
							><i
								class="fas fa-spinner-third fa-spin opacity_5"
							></i
						></span>
						<strong
							class="font_n2 opacity_5 uppercase lh_0 block text_right"
							>Last Payment</strong
						>
					</div>
					<StatefullIcon
						class="font_1 shadow_n1 flex_none m-l_4 p-x_3"
						:state="state"
					/>
				</div>
				<div
					class="flex_auto flex m-t_3 m-t_0:md font_2 c_shade-n5 shadow_1 m-x_4 bg_shade-5 br_1 br_solid br_black-2"
				>
					<div class="flex_auto p-l_5 p-r_4 p-b_3 text_right">
						<span class="block text_right"
							><i
								class="fas fa-spinner-third fa-spin opacity_5"
							></i
						></span>
						<strong
							class="font_n2 opacity_5 uppercase lh_0 block text_right"
							>Next Payment</strong
						>
					</div>
					<StatefullIcon
						class="font_1 shadow_n1 flex_none p-x_3"
						:state="state"
					/>
				</div>
			</div>
			<div class="">
				<section class="relative font_ui z_1 m-r_n5">
					<div
						class="br_solid br_black-2 br_1 flex flex_row p-y_3 p-x_4 transition_1 z_2 m-r_5"
					>
						<div class="flex_auto">
							<h3
								class="font_3 font_display m-t_2 lh_1 m-b_0"
							></h3>
						</div>
						<div
							class="flex_auto flex_none:md w_20:lg w_40:md m-l_auto flex flex_column justify_around"
						><MicroChartLoading/></div>
					</div>
				</section>
			</div>
		</div>
	</section>
</template>

<script>
import StatefullIcon from "../../../subComponents/StatefullIcon.vue";
import MicroChartLoading from "../../Charts/Seat.MicroSeatChart.Loading.vue";
import LoadingText from "../../../subComponents/LoadingText.vue";
export default {
	components: {
		MicroChartLoading,LoadingText,StatefullIcon
	},
	data() {
		return {
			state:"info"
		};
	},
	props: {

	},
};
</script>

<style lang="scss" scoped></style>
