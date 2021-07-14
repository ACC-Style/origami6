<template>
	<ResultContainer
	:eid="eid"
	:type="type"
	:sections="sections"
	:documentTitle="documentTitle"
	:docURL="docURL"
	:pdfURL="pdfURL"
	:hubURL="hubURL"
	:breadcrumb="breadcrumb"
	:pointOfCare="pointOfCare"
	:conditions="conditions"			
	:amendments="amendments"
	@onNavigate="$emit('onNavigate')"
		>
		<main class="result-content p-x_4 p-b_4 font_copy font_0 lh_3 relative">
			<h2>{{ sectionTitle }}</h2>
			<TransitionExpand>
				<div class="block swg-result" v-if="isExpanded">
					<div v-html="content">
						<LoadingText />
					</div>
				</div>
			</TransitionExpand>
			<TransitionExpand>
				<div v-html="summary" v-if="!isExpanded"></div>
			</TransitionExpand>
			<div
				@click="isExpanded = !isExpanded"
				class="bg_white b_3 l_0 r_0 sticky"
				:class="{ 'shadow_overlap-light ': isExpanded }"
			>
				<div
					class="bg_white p_2 flex justify_center align_center bg_black-_05 transition_3 p_2 p-x_3 bg_black-2 h:bg_primary h:c_white font_n2 flex_auto z_3"
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
import TransitionExpand from "../subComponents/TransitionExpand";
import LoadingText from "../subComponents/LoadingText";
import ResultContainer from "./GLSearch.Result.Container";


export default {
	name: "SearchResultRec",
	components: {
		BTN,
		ResultContainer,
		TransitionExpand, LoadingText
	},
	props: {
		type: { type: String, default: "Section" },
		summary: { type: String, default: "summary didn't load" },
		content: { type: String, default: "" },
		documentTitle: { type: String },
		docURL: { type: String, default: "" },
		pdfURL: { type: String, default: "" },
		hubURL: { type: String, default: "" },
		sections: { type: Array },
		eid: { type: String },
		loe: { type: String },
		cor: { type: String },
		pointOfCare: { type: Array, default: null },
		conditions: { type: Array, default: null },
		amendments: { type: Array, default: null },
		breadcrumb: { type: Array },
		sectionTitle: { type: String }
	},
	data() {
		return {
			isExpanded: false
		};
	},
	computed: {
		rotation() {
			return (!this.isExpanded) ? "rotation_180" : "rotation_0";
		},
	}
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