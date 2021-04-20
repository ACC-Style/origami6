<template>
	<div
		data-label="item"
		class="m-x_2 br_1 br_solid br_black-2 bg_black-_05 relative m-b_4 flex flex_column justify_between"
		:class="[{ 'shadow_overlap-light': shadow }, 'br_' + corner]"
	>
		<HeaderImage
			class="bg-blend_multiply br_1 br_solid br_black-3 bg_cover bg_left m-x_n1 m-t_n1 flex_none"
			:class="'br-tr_' + corner + ' br-tl_' + corner"
			:id="'CTAIMG-' + id"
			v-if="headerImg"
			:imgSM="imgSM"
			:imgMD="imgMD"
			:imgLG="imgLG"
		/>
		<div data-name="content" class="p-t_4:lg p-t_3 p-x_4 flex_grow">
			<slot></slot>
		</div>
		<div ref="footer" class="flex_shrink">
		<div
			class="flex flex_row-reverse:md flex_column-reverse p-x_4 justify_center btnShiftStop" :class="btnGroupStyle"
			v-if="ctaType == 'button'"
			ref='ButtonGroup'
			:style="'margin-bottom:'+ -1 * btnGroupHeight/2 +'px'"
		>
			<div
				class="flex-auto text_center"
				v-for="(CTA, index) in cta"
				:key="'cta_' + index"
			>
				<Btn
					class="m-x_3:md min-w_15 br_black-3 m-y_3 w_100 w_auto:md"
					:state="CTA.state"
					:size="btnSize"
					:shadow="true"
					@click="CTA.url"
					><span class="flex_auto">{{ CTA.label }}</span>
				</Btn>
			</div>
		</div>
		<div
			class="flex justified_end 
			flec_column-reverse
			flex_row-reverse:md p-x_4 flex_wrap m-b_4 "
			v-if="ctaType == 'link'"
		>
			<div
				class="flex-auto m-r_auto"
				v-for="(CTA, index) in cta"
				:key="'cta_' + index"
			>
				<a
					:href="CTA.url"
					class="font_0:lg text_left font_bold h:c_primary-n3 c_primary block p-y_2 lh_2 nowrap m-r_4"
					>{{ CTA.label }} <i class="fas fa-arrow-right p-x_2" v-if="index === 0"></i
				></a>
			</div>
		</div>
		</div>

	</div>
</template>

<script>
import HeaderImage from "./HeaderImage";
import Btn from "../../subComponents/Btn";
import { ResponsiveMixin } from "vue-responsive-components";

export default {
	components: { HeaderImage, Btn },
	props: {
		id: { type: String },
		cta: { type: Array },
		ctaType: {
			type: String,
			default: "radius",
			validate: (value) => {
				["link", "button"].indexOf(value) !== -1;
			},
		},
		corner: {
			type: String,
			default: "radius",
			validate: (value) => {
				["radius", "round", "square"].indexOf(value) !== -1;
			},
		},
		shadow: { type: Boolean, default: true },
		imgSM: { type: String, default: undefined },
		imgMD: { type: String, default: undefined },
		imgLG: { type: String, default: undefined },
		headerImg: { type: Boolean, default: false },
		url: { type: String, default: "#" },
	},
	mixins: [ResponsiveMixin],
	breakpoints: {
		sm: (el) => el.width <= 350,
		md: (el) => el.width <= 650 && el.width > 350,
		lg: (el) => el.width >= 650,
	},
	data() {
		return {
			btnGroupHeight:0
		};
	},
	methods:{
		getBtnGroupHeight:function(){
			let h = this.$refs.footer.clientHeight;
			return h;
		},
		onNavigateTo(url){
			this.$emit('onNavigateTo', url);
		},
	},
	mounted() {
        this.btnGroupHeight = this.getBtnGroupHeight();
	},
	watch: {
		data(newValue, oldValue) {
			
		},
	},
	computed: {

		btnSize: function () {
			let size = "";
			if (this.el.is.lg) {
				size = "large";
			} else {
				size = "medium";
			}
			return size;
		},
		btnGroupStyle: function () {
			let size = "";
			// if (this.el.is.lg) {
			// 	size = "m-b_n5";
			// }
			// else if (this.el.is.md) {
			// 	size = "m-b_n4";
			// } else {
			// 	size = "m-b_0";
			// }
			return size;
		},
		
	},
};
</script>

<style scoped>
@media only screen and (max-width: 768px){
	.btnShiftStop{
	margin-bottom: .5rem !important;
}
}
</style>
