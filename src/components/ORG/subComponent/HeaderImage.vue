<template>
	<div
		:style="'background-image: url(' + image.url + ')'"
		data-name="img-header"
		class="br-tr_radius br-tl_radius bg-blend_multiply br_1 br_solid br_black-3 bg_cover bg_left m-x_n1 m-t_n1 expand-br_1"
		:id="id"
		ref="img"
		:class="image.aspect"
	></div>
</template>

<script>
import { ResponsiveMixin  } from "vue-responsive-components";
export default {

	props: {
		id:{type:String, required:true},
		imgSM: { type: String, required: true },
		imgMD: { type: String, required: true },
		imgLG: { type: String, required: true },
	},
	mixins:[ResponsiveMixin],
	breakpoints:{
		sm: el=> el.width <=350,
		md: el=> el.width <=650 && el.width>350,
		lg: el=> el.width >=650,		
	},
	computed: {
		image() {
			let obj = new Object;
			if (this.el.is.sm) {
				obj.url = this.imgSM;
				obj.aspect = "aspect_custom-sm";
			}
			if (this.el.is.md) {
				obj.url = this.imgMD;
				obj.aspect = "aspect_custom-md";
			}
			if (this.el.is.lg) {
				obj.url = this.imgLG;
				obj.aspect = "aspect_custom-lg";
			}
			return obj;
		},
	},
}
</script>

<style scoped>
.aspect_custom-sm,.aspect_custom-md,.aspect_custom-lg{
	height:80px;
}
@media screen and (max-width: 640px){
	.aspect_custom-sm,.aspect_custom-md,.aspect_custom-lg{
	height:60px;
}

}
.expand-br_1 {
	width: calc(100% + 2px) !important;
}
</style>
