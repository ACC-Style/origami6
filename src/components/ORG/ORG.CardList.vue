<template>
	<div class="" :class="gridSize">
		<SimpleCard v-for="(item, index) in cards"
				:key="index +'_card'" 
				:imgSM="item.imgSM"
				:imgMD="item.imgMD"
				:imgLG="item.imgLG"
				:id="index +'_card'"
				:cta="item.cta"
				:ctaType="item.ctaType"
				:corner="corner"
				:shadow="true"
				:headerImg="(item.imgSM && item.imgMD && item.imgLG)?true:false "
				:url="item.url"
		>
		<h2
					class="font_display font_2:lg font_1 font_bold c_primary-n2 m-b_3 m-t_3"
					v-html="item.title"
				>
					COVID-19 Hub
				</h2>
				<p
					class="font_0:md font_n1 font_copy m-t_0 m-b_4 p-b_3"
					v-html="item.shortText"
				>
					Comprehensive compilation of ACC content related to COVID-19
				</p>
		</SimpleCard>
	</div>
</template>

<script>

import SimpleCard from "./subComponent/SimpleCard";
import { ResponsiveMixin } from "vue-responsive-components";
export default {
	components: { SimpleCard },
	props: {
		cards: { type: Array },
		corner: {
			type: String,
			default: "radius",
			validate: (value) => {
				["radius", "round", "square"].indexOf(value) !== -1;
			},
		},
		url:{type:String,default:"#"},
		shadow: { type: Boolean, default: true },
	},
	data() {
		return {};
	},
	methods: {
	},
	computed: {	
		gridSize: function () {
			let styles = "";
			switch (this.cards.length) {
				case 1:
					styles = "";
					break;
				case 2:
					styles = "gap-x_3  gap-y_3 gap-x_4:md gap-y_4:md grid template-x_2x";
					break;
				default:
					styles = "gap-x_3 gap-y_3 gap-x_4:md gap-y_4:md grid template-x_3x";
					break;
			}
			return styles;
		}
	},
};
</script>

<style scoped>
.template-x_3x,.template-x_2x  {
	grid-template-columns: repeat(auto-fill,minmax(14rem,1fr));
}
	
@media screen and (min-width: 22rem){
	.template-x_2x {
		grid-template-columns: repeat(auto-fill,minmax(22rem,1fr));
	}
	.template-x_3x  {
	grid-template-columns: repeat(auto-fill,minmax(16rem,1fr));
}
}
</style>
