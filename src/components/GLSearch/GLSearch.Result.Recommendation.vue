<template>
	<article class="result font_ui br_1 br_black-2 br_1 br_solid shadow_1">
		<header class="br-t_3 br_solid br_primary m-t_n1 m-x_n1">
			<aside class="flex relative">
				<div class="flex_auto">
					<span class="p-y_3 block font_n2 m-x_4 p-t_4 uppercase c_primary font_bold">recommendation</span>
				</div>
			</aside>
		</header>
		<main class="result-content p-x_4 p-b_4 font_copy font_0 lh_3">
			<div
				class="br_2 br_black-2 br_radius br_solid flex float_right m-b_2 m-t_n4 m-x_4 r_3 t_2 font_display font_bold lh_0"
			>
				<div class="flex_shrink p_3 br-tl_radius br-bl_radius m-r_1" :class="[corStyle]">{{ranking.cor}}</div>
				<div class="flex_shrink p_3 br-tr_radius br-br_radius" :class="[loeStyle]">{{ranking.loe}}</div>
			</div>
			<div class="inline">{{content}}</div>
		</main>
		<aside class="m-x_3 p_2 bg_shade-5 lh_3 m-b_3">
			<div class="flex m_n2">
				<div
					@click="showExtra = !showExtra"
					class="p_2 p-x_3 bg_black-2 h:bg_primary h:c_white font_n2 flex_auto"
				>
					<i class="fas fa-plus-square"></i>
					<span class="display_none inline:md">show supporting text and references</span>
					<span class="display_none:md">supporting text &amp; references</span>
				</div>
				<div
					@click="$emit('clickRelatedRecomendation')"
					class="p_2 p-x_3 bg_black-2 h:bg_primary h:c_white font_n2 flex_shrink br-l_1 br_white-5 br_solid"
				>
					<span class="display_none inline:md">All Recommendations from this Section</span>
					<span class="display_none:md">Related recommendations</span>
					<i class="fas fa-arrow-square-right"></i>
				</div>
			</div>
			<section class="black-9 p-x_3 font_n1" v-if="showExtra">
				<h4 class="font_0 m_0 m-y_3">Supporting Text:</h4>
				<p v-html="supportingText">supporting text here</p>
			</section>
			<section class="black-9 p-x_3 font_n1" v-if="showExtra">
				<h4 class="font_0 m_0 m-y_3">References:</h4>
				<ul class="ul_none">
					<li
						class="m-b_2 br-t_1 br_dotted br_primary-4 m-t_2 p-t_2"
						v-for="(ref,index) in references"
						:key="'ref_' + index"
					>{{ref}}</li>
				</ul>
			</section>
		</aside>
		<ResultFooter
			:sections="sections"
			:documentTitle="documentTitle"
			:DOCurl="DOCurl"
			:PDFurl="PDFurl"
			:HUBurl="HUBurl"
			@navigate="$emit('navigate')"
		/>
	</article>
</template>

<script>
import BTN from "../subComponents/Btn";
import ResultFooter from "./GLSearch.Result.Footer";
export default {
	name: "SearchResultRec",
	components: {
		BTN,
		ResultFooter
	},
	props: {
		type: { type: String },
		content: { type: String },
		documentTitle: { type: String },
		DOCurl: { type: String },
		PDFurl: { type: String },
		HUBurl: { type: String },
		sections: { type: Array },
		ranking: { type: Object },
		pointOfCare: { type: String },
		Condition: { type: String },
		supportingText: { type: String, default: "missing supporting text" },
		references: { type: Array }
	},
	data() {
		return {
			showExtra: false
		};
	},
	computed: {
		loeStyle() {
			return "bg_cor-IIB";
		},
		corStyle() {
			return "bg_loe-A";
		}
	}
};
</script>

<style lang="scss" scoped>
</style>