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

<script>
import { ResponsiveMixin  } from "vue-responsive-components";
export default {
	props: {
		id:{type:String, required:true},
        url:{type:String},
		alt:{type:String,required:true,default:"This is an image"},
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
	methods: {
		onNavigateTo(url){
			if(this.url != ''){
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
			return obj;
		},
	},
}
</script>

<style scoped>
.aspect_hero-sm{padding-top:133%}
.aspect_hero-md{padding-top:50%}
.aspect_hero-lg{padding-top:30%}


.expand-br_1 {
	width: calc(100% + 2px) !important;
}
</style>
