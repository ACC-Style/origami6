<template>
    <div class="flex p_1 br_1 br_solid br_shade-4">
		<div class="flex_auto p-x_4 p-y_3 font_3">
			<LoadingText />
		</div>
		<div class="flex_shrink actions self_center m-r_4 opacity_5" >
			<div class="flex_inline p_2 br_radius bg_shade-4 shadow_n2">
				<Btn  :size="'small'" :state="'alert'" :isDisabled="true"><i class="fa-times far"></i></Btn>
			</div>
		</div>
	</div>    
</template>

<script>
import LoadingText from "../subComponents/LoadingText";
import Btn from "../subComponents/Btn";
export default {
	components: {
		LoadingText, Btn
	},
	methods: {
		calcMaxWidth(){       
         return Math.random()*40;
      }
	},
};
</script>

<style lang="css" scoped>
.lorem-status {
	width: 2.5rem;
}

</style>