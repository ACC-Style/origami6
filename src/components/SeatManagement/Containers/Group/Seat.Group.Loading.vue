<template>
	<section class="relative font_ui z_1 m-r_n5">
		<div
			class="br_solid br_black-2 br_1 flex flex_row p-y_3 p-l_4 p-r_3 transition_1 z_2 m-r_5"
		>
			<div class="flex_auto">
				<h3 class="font_3 m-t_2 m-b_0">
					<LoadingText/>
				</h3>
			</div>
			<div class="flex_auto m-r_3 p_3 c_black text_right font_2">
				<i class="fas fa-spinner-third fa-spin opacity_5 m-r_3"></i>
				<div class="nowrap">Bundles</div>
			</div>
			<div
				class="flex_auto flex_none:md w_40:lg w_60:md m-l_auto flex flex_column justify_around"
			>
				<div
					data-target="readableSeatChart"
					class="flex flex_column flex_row:md "
				>
					<div
						title="filled"
						class="flex_auto m-r_3 p_3 c_white text_right texture_medium bg_success-4 br_black-2 br_1 br_solid"
					>
						<span
							class="lowercase font_6 lh_0 font_display font_light"
							><i
								class="fas fa-spinner-third fa-spin opacity_5"
							></i></span
						><span class="lowercase block font_n1 font_medium"
							>Filled</span
						>
					</div>
					<div
						title="requested"
						class="flex_auto m-r_3 p_3 c_white text_right texture_medium bg_warning-4 br_black-2 br_1 br_solid"
					>
						<span
							class="lowercase font_6 lh_0 font_display font_light"
							><i
								class="fas fa-spinner-third fa-spin opacity_5"
							></i></span
						><span class="lowercase block font_n1 font_medium"
							>requested</span
						>
					</div>
					<div
						title="empty"
						class="flex_auto m-r_3 p_3 c_white text_right texture_medium bg_primary-4 br_black-2 br_1 br_solid"
					>
						<span
							class="lowercase font_6 lh_0 font_display font_light"
							><i
								class="fas fa-spinner-third fa-spin opacity_5"
							></i></span
						><span class="lowercase block font_n1 font_medium"
							>empty</span
						>
					</div>
					<div
						title="locked"
						class="flex_auto m-r_3 p_3 c_white text_right texture_medium bg_alert-4-n1 br_black-2 br_1 br_solid flex"
					>
						<div class="flex_auto">
							<span
								class="lowercase font_6 lh_0 font_display font_light"
								><i
									class="fas fa-spinner-third fa-spin opacity_5"
								></i></span
							><span class="lowercase block font_n1 font_medium"
								>locked</span
							>
						</div>
						<div
							class="flex_shrink  m-l_3 p-l_4 p-r_3 br-l_1 m-y_n3 br_white-8 br_solid text_center flex justify_center flex_column font_5"
						>
							<i class="fal fa-lock"></i>
						</div>
					</div>
					<div
						class="label flex_auto c_black br_1 br_solid br_black-1 texture_medium bg_black-1 font_n2 c_black-8  p_3 text_right"
					>
						<span
							class="lowercase font_6 lh_0 font_display font_light"
							><i
								class="fas fa-spinner-third fa-spin opacity_5"
							></i
						></span>
						<span class="lowercase block font_n1 font_medium"
							>Seats</span
						>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import LoadingText from '../../../subComponents/LoadingText.vue';
export default {
	components:{LoadingText}};
</script>

<style scoped></style>
