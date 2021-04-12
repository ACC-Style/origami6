<template>
	<footer
		class="result-docuemnt bg_shade-5 font_n2 br-t_1 br_black-2 p-t_3 p-x_3 br_solid p-b_2"
	>
		<div
			class="document-title font_slab font_0 c_shade font_n1 nowrap overflow_ellipsis"
		>{{documentTitle}}</div>
		<div>
			<ul class="ul_none overflow_ellipsis flex c_shade-n2 nowrap">
				<li
					class="flex_shrink max-w_1 overflow_ellipsis inline-block vertical-align_middle"
					v-for="(bookmark,index) in sections"
					:key="index+'_bookmark'"
				>
					<i class="fas fa-chevron-right font_n3 p_2 c_shade-1" v-if="index != 0"></i>
					{{bookmark}}
				</li>
				<li class="c_primary">Recommendation</li>
			</ul>
		</div>
		<nav class="m-l_n2 m-b_2 flex_inline flex gap-x_2">
			<BTN
				v-if="docURL !=''"
				:class="btnStyles"

				@click="$emit('onNavigate', docURL)"
				:state="btnState"
				:shadow="false"
				:size="'tiny'"
			>
				<i class="fas fa-share-square m-r_2"></i>
				<span class="display_none inline:md">FULL&nbsp;</span>
				<span>DOC</span>
			</BTN>
			<BTN
				v-if="pdfURL !=''"
				:class="btnStyles"

				@click="$emit('onNavigate', pdfURL)"
				:state="btnState"
				:shadow="false"
				:size="'tiny'"
			>
				<i class="fas fa-file-pdf m-r_3"></i>
				<span>PDF</span>
			</BTN>
			<BTN
				v-if="hubULR !=''"
				:class="btnStyles"

				@click="$emit('onNavigate', hubULR)"
				:state="btnState"
				:shadow="false"
				:size="'tiny'"
			>
				<i class="fas fa-share-alt m-r_3"></i>
				<span>HUB</span>
			</BTN>
		</nav>
		<aside
			class="font_n2 c_black-8 bg_black-2 h:bg_black-5 h:c_white m-x_n3 m-b_n2 p_2 p-x_3 br-t_1 br_solid br_black-2 shadow_n1 relative"
		>
			<div class="flex flex_nowrap nowrap" @click="onCopy()">
				<strong class="flex_shrink p-r_2">
					<i class="fas fa-quote-right m-r_2"></i>&nbsp;
					<span class="inline-block:md display_none">cite document:</span>
				</strong>
				<span class="flex_auto overflow_ellipsis">{{documentTitle}}</span>
			</div>
			<div :class="copiedStyles" class=" bg_primary absolute t_0 r_0 b_0 l_0 c_white font_bold p_2 transition_5 lh_1 flex justify_center self_center vertical-align_middle"> <span class="p-t_1"><i class="fas fa-copy p-r_3"></i>Copied to Clipboard</span></div>
		</aside>
	</footer>
</template>

<script>
import BTN from "../subComponents/Btn";
import { ResponsiveMixin  } from "vue-responsive-components";

export default {
	name: "resultFooter",
	components: {
		BTN
	},
	mixins:[ResponsiveMixin],
	props: {
		documentTitle: { type: String },
		sections: { type: Array },
		docURL: { type: String },
		pdfURL: { type: String },
		hubULR: { type: String }
	},
	data() {
		return {
			showCopiedFlag:false
		}
	},
	methods: {
		onCopy(){
			this.showCopiedFlag = true
			setTimeout( ()=>{ this.showCopiedFlag = false; }, 2000);
			this.$emit('onCopy');
		},

	},
		breakpoints:{
		sm: el=> el.width <=350,	
	},
	computed:{
		btnState(){
			if (this.el.is.sm) {return 'secondary'}
			return 'none';

		},	btnStyles(){
			if (this.el.is.sm) {return 'flex_auto text_center w_100 p_3'}
			return 'flex_shrink';

		},
		copiedStyles(){
			if(!this.showCopiedFlag){ 
				return 'opacity_0 z_0';
				}
			return 'opacity_9 z_5'
		}
	}
};
</script>

<style lang="scss" scoped>
</style>