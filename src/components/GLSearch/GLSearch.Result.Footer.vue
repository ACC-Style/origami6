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
		<nav class="m-l_n2 m-b_2">
			<BTN
				v-if="DOCurl !=''"
				class="m-r_2"
				@click="$emit('navigate', DOCurl)"
				:state="'none'"
				:size="'tiny'"
			>
				<i class="fas fa-share-square m-r_2"></i>
				<span class="display_none inline:md">FULL&nbsp;</span>
				<span>DOC</span>
			</BTN>
			<BTN
				v-if="PDFurl !=''"
				class="m-r_2"
				@click="$emit('navigate', PDFurl)"
				:state="'none'"
				:size="'tiny'"
			>
				<i class="fas fa-file-pdf m-r_3"></i>
				<span>PDF</span>
			</BTN>
			<BTN
				v-if="HUBurl !=''"
				class="m-r_2"
				@click="$emit('navigate', HUBurl)"
				:state="'none'"
				:size="'tiny'"
			>
				<i class="fas fa-share-alt m-r_3"></i>
				<span>HUB</span>
			</BTN>
		</nav>
		<aside
			class="font_n2 c_shade-n1 bg_black-2 m-x_n3 m-b_n2 p_2 p-x_3 br-t_1 br_solid br_black-2 shadow_n1"
		>
			<div class="flex flex_nowrap nowrap">
				<strong class="flex_shrink p-r_2">
					<i class="fas fa-quote-right m-r_2"></i>&nbsp;
					<span class="inline-block:md display_none">cite document:</span>
				</strong>
				<span class="flex_auto overflow_ellipsis">{{documentTitle}}</span>
			</div>
		</aside>
	</footer>
</template>

<script>
import BTN from "../subComponents/Btn";
export default {
	name: "resultFooter",
	components: {
		BTN
	},
	props: {
		documentTitle: { type: String },
		sections: { type: Array },
		DOCurl: { type: String },
		PDFurl: { type: String },
		HUBurl: { type: String }
	}
};
</script>

<style lang="scss" scoped>
</style>