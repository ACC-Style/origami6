<template>
	<div class="flex p_1 br_1 br_solid br_shade-4">
				<div
					class="lorem-status flex_shrink flex toggle_handle p_3 br_shade-5 br-r_1 br_solid self_stretch"
				>
					<i
						class="far fa-plus-square vertical-align_middle flex_grow-0 m_auto self_center c_shade-5"
					></i>
				</div>
				<div class="lorem-status flex_shrink m_2 lorem-loader"></div>
				<div class="flex_auto m_2 lorem-content-area">
					<h2 class="lorem-loader font_ui font_1 m-t_2" v-bind:style="{maxWidth:calcMaxWidth()+60+'%'}">&nbsp;</h2>
					<p class="lorem-loader font_n2 m-y_2" v-bind:style="{maxWidth:calcMaxWidth()+30+'%'}">&nbsp;</p>
					<p class="lorem-loader font_n3 m-y_2" v-bind:style="{maxWidth:calcMaxWidth()+'%'}">&nbsp;</p>
				</div>
				<div class="flex_shrink m-y_4 m-x_5 br_radius lorem-loader lorem-button">&nbsp;</div>
			</div>
</template>

<script>
export default {
	name: "FITLoading",
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
.lorem-button {
	width: 8rem;
}
</style>