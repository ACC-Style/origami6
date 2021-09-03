<template>
	<div
		:style="'background-image: url(' + image.url + ')'"
		data-name="img-header"
		:id="id"
		class="bg_cover bg_no-repeat bg_left"
		ref="img"
		:class="image.aspect"
		@click="onNavigateTo(url)"
		:alt="alt"
	></div>
</template>
// TODO: This should be shifted to using an image tag inside of the div and using src set and lazy loading to improve overall performance on the web and reduce page to load for low bandwidth devices.
<script>
import { ResponsiveMixin } from "vue-responsive-components";
export default {
	mixins: [ResponsiveMixin],
	props: {
		id: { type: String, required: true },
		url: { type: String, default:"https://www.acc.org" },
		alt: { type: String, default: "This is an image" },
		imgSM: { type: String, default:"https://picsum.photos/id/1032/400/300" },
		imgMD: { type: String, default:"https://picsum.photos/id/1032/300/600" },
		imgLG: { type: String, default:"https://picsum.photos/id/1032/300/900" },
		imgXL: { type: String, default:"https://picsum.photos/id/1032/300/1200" },
	},
	breakpoints: {
		sm: el => el.width < 480,
		md: el => el.width >= 480 && el.width <= 767,
		lg: el => el.width >= 768 && el.width <= 1024,
		xl: el => el.width >= 1025 && el.width <= 1200,
		xxl: el => el.width >= 1201
	},
	methods: {
		onNavigateTo(url) {
			if (this.url != '') {
				this.$emit('onNavigateTo', url);
			}
		},
	},
	computed: {
		image() {
			let obj = new Object;
			if (this.el.is.sm) {
				obj.url = this.imgSM;
				obj.aspect = "aspect_hero-sm";
			}
			if (this.el.is.md) {
				obj.url = this.imgMD;
				obj.aspect = "aspect_hero-md";
			}
			if (this.el.is.lg) {
				obj.url = this.imgLG;
				obj.aspect = "aspect_hero-lg";
			}
			if (this.el.is.xl || this.el.is.xxl) {
				obj.url = this.imgXL;
				obj.aspect = "aspect_hero-xl";
			}
			return obj;
		},
	},
}
</script>

<style scoped>
.aspect_hero-sm {
	padding-top: 133%;
}
.aspect_hero-md {
	padding-top: 40%;
}
.aspect_hero-lg {
	padding-top: 30%;
}
.aspect_hero-xl {
	padding-top: 25%;
}

.expand-br_1 {
	width: calc(100% + 2px) !important;
}
</style>
