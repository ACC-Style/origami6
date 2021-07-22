<template>
	<ResultContainer
		:eid="eid"
		:type="type"
		:sectiontitleformatted="sectiontitleformatted"
		:gltitle="gltitle"
		:jacclink="jacclink"
		:pdflink="pdflink"
		:hub="hub"
		:pointofcare="pointofcare"
		:conditions="conditions"
		:amendments="amendments"
		@onNavigate="$emit('onNavigate')"
	>
		<main class="result-content p-x_4 p-b_4 font_copy font_0 lh_3 relative">
			<h2 v-html="itemtitleFormatted"></h2>
			<div class="block swg-result" v-if="!isExpanded">
				<div v-if="!el.is.lg"><div class="inline-block float_left clear_left m-b_3" v-html="results" ></div>
				</div>
				<div  v-if="el.is.lg" v-html="summary">
					<LoadingText />
				</div>
			</div>
			<TransitionExpand>
				<div v-html="results" class='swg-result' v-if="isExpanded"></div>
			</TransitionExpand>
			<div
				@click="isExpandedBoolean = !isExpandedBoolean"
				class="bg_white b_3 l_0 r_0 sticky"
				:class="{ 'shadow_overlap-light ': isExpanded }"
			>
				<div
					class="bg_white p_2 flex justify_center align_center bg_black-_05 transition_3 p_2 p-x_3 bg_black-2 h:bg_primary h:c_white font_n2 flex_auto z_3"
					v-if="el.is.lg"
				>
					<i
						class="fas fa-chevron-up transition_2 self_center"
						:class="rotation"
					></i
					><span v-if="isExpanded" class="p-l_3"
						>Collapse Content</span
					><span v-else class="p-l_3">Expand Content</span>
				</div>
			</div>
		</main>
	</ResultContainer>
</template>

<script>
import BTN from "../subComponents/Btn";
import ResultContainer from "./GLSearch.Result.Container";
import TransitionExpand from "../subComponents/TransitionExpand";
import LoadingText from "../subComponents/LoadingText";
import { ResponsiveMixin } from "vue-responsive-components";

export default {
	name: "SearchResultTable",
	components: {
		BTN,
		ResultContainer,
		TransitionExpand,
		LoadingText,
	},
	mixins: [ResponsiveMixin],
	breakpoints: {
		sm: (el) => el.width <= 480,
		md: (el) => el.width <= 768 && el.width > 480,
		lg: (el) => el.width > 768,
	},
	props: {
		type: { type: String, default: "Table" },
		summary: { type:  String, default: "Summary Didn't Load"},
		results: { type: String, default: "" },
		gltitle: { type: String },
		jacclink: { type: String, default: "" },
		pdflink: { type: String, default: "" },
		hub: { type: String, default: "" },
		eid: { type: String },
		loe: { type: String },
		cor: { type: String },
		pointofcare: { type: Array, default: null },
		conditions: { type: Array, default: null },
		amendments: { type: Array, default: null },
		itemtitleFormatted: { type: String },
		sectiontitleformatted: { type: Array },
	},
	data() {
		return {
			isExpandedBoolean: false,
		};
	},
	computed: {
		rotation() {
			return !this.isExpanded ? "rotation_180" : "rotation_0";
		},
		isExpanded() {
			if (this.el.is.lg) {
				return this.isExpandedBoolean;
			}
			return true;
		},
	},
};
</script>

<style scoped>
.rotation_0 {
	transform: rotate(0deg);
}
.rotation_180 {
	transform: rotate(180deg);
}
</style>
