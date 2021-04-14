<template>
	<article
		class="result font_ui br_1 br_black-2 br_1 br_solid shadow_overlap-light"
	>
		<header class="br-t_3 br_solid br_primary m-t_n1 m-x_n1">
			<aside class="flex relative">
				<div class="flex_auto">
					<span
						class="p-y_3 block font_n2 m-x_4 p-t_4 uppercase c_primary font_bold"
						>recommendation</span
					>
				</div>
			</aside>
		</header>
		<main class="result-content p-x_4 p-b_4 font_copy font_0 lh_3">
			<CorLoeChiclet
				class="float_right m-b_2 m-t_n5 m-t_n4:md m-x_4:md m-x_0"
				:cor="cor"
				:loe="loe"
			/>
			<div class="inline">{{ content }}</div>
		</main>
		<aside
			class="m-x_3:md m-x_2 m-b_2 p_2 bg_black-_05 lh_3 m-b_3:md clear_both bg_black-_05"
		>
			<div class="bg_white flex m_n2 t_0 z_1 transition_2" :class="{'shadow_overlap-light sticky':isExpanded}">
				<div
					@click="isExpanded = !isExpanded"
					class="p_2 p-x_3 bg_black-2 h:bg_primary h:c_white font_n2 flex_auto"
				>
					<i class="fas fa-plus transition_3" :class="rotation"></i>
					<span class="display_none inline:md p-l_3"
						>show supporting text and references</span
					>
					<span class="display_none:md p-l_3"
						>supporting text &amp; references</span
					>
				</div>
				<div
					@click="$emit('onRelatedRecomendation')"
					class="p_2 p-x_3 bg_black-2 h:bg_primary h:c_white font_n2 flex_shrink br-l_1 br_white-5 br_solid m-l_auto text_right display_none block:md"
				>
					<span class="display_none inline:md"
						>All Recommendations from this Section</span
					>
					<span class="display_none:md">Related recommendations</span>
					<i class="fas fa-arrow-square-right p-l_4"></i>
				</div>
			</div>
			<TransitionExpand :class="transition_5">
				<div class="c_black-9 font_n1" v-if="isExpanded">
					<section class="p-x_3">
						<h4 class="font_0 m_0 m-y_3">Supporting Text:</h4>
						<p class="lh_3" v-html="supportingText">
							supporting text here
						</p>
					</section>
					<section class="p-x_3">
						<h4 class="font_0 m_0 m-y_3">References:</h4>
						<ul class="ul_none">
							<li
								class="m-b_2 br-t_1 br_dotted br_primary-2 m-t_2 p-t_2 h:underline undecorated c_primary-n1 hc_primary-n3"
								v-for="(ref, index) in references"
								:key="'ref_' + index"
								v-html="ref"
							></li>
						</ul>
					</section>
				</div>
			</TransitionExpand>
			<div
				class="flex m-x_n2 m-b_n2 m-t_2 display_none:md br-t_1 br_solid br_black-3"
			>
				<div
					@click="$emit('onRelatedRecomendation')"
					class="p_2 p-x_3 bg_black-2 h:bg_primary h:c_white font_n2 flex_auto br-l_1 br_white-5 br_solid m-l_auto text_right"
				>
					<span class="display_none inline:md"
						>All Recommendations from this Section</span
					>
					<span class="display_none:md">Related recommendations</span>
					<i class="fas fa-arrow-square-right p-l_3"></i>
				</div>
			</div>
		</aside>
		<ResultFooter
			:sections="sections"
			:documentTitle="documentTitle"
			:docURL="docURL"
			:pdfURL="pdfURL"
			:hubURL="hubURL"
			:breadcrumb="breadcrumb"
			:pointOfCare="pointOfCare"
			:conditions="conditions"
			@onNavigate="$emit('onNavigate')"
		/>
	</article>
</template>

<script>
import BTN from "../subComponents/Btn";
import ResultFooter from "./GLSearch.Result.Footer";
import TransitionExpand from "../subComponents/TransitionExpand";
import CorLoeChiclet from "../subComponents/CorLoeChiclet";

export default {
	name: "SearchResultRec",
	components: {
		BTN,
		ResultFooter,
		TransitionExpand,
		CorLoeChiclet
	},
	props: {
		type: { type: String, default: "Recomendation" },
		content: { type: String, default: "" },
		documentTitle: { type: String },
		docURL: { type: String, default: "" },
		pdfURL: { type: String, default: "" },
		hubURL: { type: String, default: "" },
		sections: { type: Array },
		loe: { type: String },
		cor: { type: String },
		pointOfCare: { type: Array, default: null },
		conditions: { type: Array, default: null },
		supportingText: { type: String, default: "missing supporting text" },
		references: { type: Array },
		breadcrumb: { type: Array }
	},
	data() {
		return {
			isExpanded: false
		};
	},
	computed: {
		rotation() {
			return (this.isExpanded) ? "rotation_135" : "rotation_0";
		},
	}
};
</script>

<style scoped>
.rotation_0 {
	transform: rotate(0deg);
}
.rotation_135 {
	transform: rotate(135deg);
}
</style>