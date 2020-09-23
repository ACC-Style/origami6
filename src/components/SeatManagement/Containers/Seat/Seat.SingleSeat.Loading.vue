<template>
	<section class="br_solid br_1 m-t_n1 br_black-2 font_ui "   >
		<div class="flex m-x_n1 min-h_4rem" >
			<div class="p-y_4 p-x_4 flex_none w_20:lg font_3">
				<LoadingText/>
			</div>
			<div class="flex_auto w_30 p_3 opacity_5">
				<strong>Status:</strong>
				<span class="flex_auto inline-block self_center text_center"><i class="fal fa-spinner-third fa-spin"></i> </span>
			</div>
			<div class="flex_auto w_50 m-l_auto flex flex_row justify_end">
				<ul class="ul_none flex flex_row self_stretch font_1">			
					<span  class="c_black-5 flex_auto flex p_3 p-l_4">
						<span class="self_center nowrap">
							<i class="fal fa-spinner-third fa-spin"></i> 
						</span>
					</span>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
import LoadingText from '../../../subComponents/LoadingText.vue';

export default {
	components:{LoadingText}
	
};
</script>

<style lang="css">
.min-h_4rem {
	min-height: 4rem;
}
</style>
