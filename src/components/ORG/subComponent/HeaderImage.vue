<template>
	<div
		:style="'background-image: url(' + image.url + ')'"
		data-name="img-header"
		class="
			br-tr_radius
			br-tl_radius
			bg-blend_multiply
			br_1 br_solid br_black-3
			bg_cover bg_left
			m-x_n1
			m-t_n1
			expand-br_1
		"
		:id="id"
		ref="img"
		:class="image.aspect"
	></div>
</template>

<script>
import { ResponsiveMixin } from "vue-responsive-components";
import  ResponsiveBreakpoints  from "../../Helpers/Breakpoint"

export default {
	
	mixins: [ ResponsiveBreakpoints,ResponsiveMixin],
	props: {
		id: { type: String, required: true },
		imgSM: { type: String, default:"http://via.placeholder.com/300x400" },
		imgMD: { type: String, default:"http://via.placeholder.com/600x300" },
		imgLG: { type: String, default:"http://via.placeholder.com/900X300" },
		imgXL: { type: String, default:"http://via.placeholder.com/1200X300" },
	},
	data() {
		return {
		}
	},
		breakpoints: {
		sm: el => el.width < 480,
		md: el => el.width >= 480 && el.width <= 767,
		lg: el => el.width >= 768 && el.width <= 1024,
		xl: el => el.width >= 1025 && el.width <= 1200,
		xxl: el => el.width >= 1201
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
						obj.url = this.imgMD;
				obj.aspect = "aspect_custom-lg";
			}
			if (this.el.is.xl || this.el.is.xxl) {
				obj.url = this.imgXL;
				obj.aspect = "aspect_custom-xl";
			}
			return obj;
		},
	},
}
</script>

<style scoped>
.aspect_custom-xl {
	height: 100px;
}
.aspect_custom-sm,
.aspect_custom-md,
.aspect_custom-lg,
.aspect_custom-xl {
	height: 80px;
}
@media screen and (max-width: 640px) {
	.aspect_custom-sm,
	.aspect_custom-md,
	.aspect_custom-lg,
	.aspect_custom-xl {
		height: 60px;
	}
}
.expand-br_1 {
	width: calc(100% + 2px) !important;
}
</style>
