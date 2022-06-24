<template>
	<ResultContainer
		:eid="eid"
		:subtype="subtype"
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
    <section v-if="subtype=='recommendation' || subtype=='publication'">
		<main class="result-content p-x_4 p-b_4 font_copy font_0 lh_3">
			<h2 class="inline float_left" v-html='itemtitle'></h2>
			<CorLoeChiclet
				class="float_right m-x_0 m-b_2 m-t_n5:md  m-l_4:md  absolute relative:md font_n3 font_n1:md font_0:lg t_3 r_3"
				:cor="cor"
				:loe="loe"
			/>
			<div class="inline-block float_left clear_left m-b_3" v-for="(ab,index) in abs" :key="'ab_'+index" v-html="ab"></div>
		</main>
		<aside
			class="m-x_3:md m-x_2 m-b_2 p_2 bg_black-_05 lh_3 m-b_3:md clear_both bg_black-_05"
		>
			<div class="bg_white flex m_n2 t_0 z_1 transition_2" :class="{'shadow_overlap-light sticky':isSupportingTextExpanded}">
				<div
					@click="isSupportingTextExpanded = !isSupportingTextExpanded"
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
			<TransitionExpand>
				<div class="c_black-9 font_n1" v-if="isSupportingTextExpanded">
					<section class="p-x_3">
						<h4 class="font_0 m_0 m-t_4 m-b_3 font_medium">Supporting Text:</h4>
						<ul class="ul_none">
							<li
								class="m-b_2 br-t_1 br_dotted br_primary-2 m-t_2 p-t_2"
								v-for="(comment, index) in comments"
								:key="'comment_' + index"
								v-html="comment"
							></li>
						</ul>
					</section>
					<section class="p-x_3" v-if="refinfo">
						<h4 class="font_0 m_0 m-t_4 m-b_3 font_medium">References:</h4>
						<ul class="ul_none">
							<li
								class="m-b_2 br-t_1 br_dotted br_primary-2 m-t_2 p-t_2 h:underline undecorated c_primary-n1 h:c_primary-n3"
								v-for="(ref, index) in refinfo"
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
					class="p_2 p-x_3 bg_black-2 h:bg_primary h:c_white font_n2 flex_auto br-l_1 br_white-5 br_solid m-l_auto text_left"
				>
					<span class="display_none inline:md"
						>All Recommendations from this Section</span
					>
					<span class="display_none:md">Related recommendations</span>
					<i class="fas fa-arrow-square-right p-l_3"></i>
				</div>
			</div>
		</aside>
		</section>
        <section v-else-if="subtype=='table'">
		<main class="result-content p-x_4 p-b_4 font_copy font_0 lh_3 relative">
			<h2 v-html="itemtitle"></h2>
			<div class="block swg-result" v-if="!isExpanded">
				<div v-if="!el.is.lg"><div class="inline-block float_left clear_left m-b_3" v-html="results" ></div>
				</div>
				<div  v-if="el.is.lg" v-html="summary" class="block swg-result m-b_3">
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
        </section>
        <section v-else>
		<main class="result-content p-x_4 p-b_4 font_copy font_0 lh_3 relative">
			<h2 v-html="itemtitle"></h2>
			<TransitionExpand>
				<div class="block swg-result m-b_3" v-if="!isExpanded">
					<div v-html="summary">
						<LoadingText />
					</div>
				</div>
			</TransitionExpand>
			<TransitionExpand>
				<div v-html="results" class='swg-result' v-if="isExpanded"></div>
			</TransitionExpand>
			<div
				@click="isExpandedBoolean = !isExpandedBoolean"
				class="bg_white b_3 l_0 r_0 sticky"
				:class="{ 'shadow_overlap-light ': !isExpanded }"
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
        </section>
	</ResultContainer>
</template>

<script>
import BTN from "../subComponents/Btn";
import ResultContainer from "./GLSearch.Result.Container";
import TransitionExpand from "../subComponents/TransitionExpand";
import CorLoeChiclet from "../subComponents/CorLoeChiclet";
import LoadingText from "../subComponents/LoadingText";
import { ResponsiveMixin } from "vue-responsive-components";

export default {
	name: "Result",
	components: {
		BTN,
		ResultContainer,
		TransitionExpand,
		LoadingText,
        CorLoeChiclet
	},
	mixins: [ResponsiveMixin],
	breakpoints: {
		sm: (el) => el.width <= 480,
		md: (el) => el.width <= 768 && el.width > 480,
		lg: (el) => el.width > 768,
	},
	props: {
        subtype: { type: String, default: '' },
		itemtitle: { type: String, default: "Title Didn't Load" },
        abs: { type: Array, default:()=>[ "Summary (abs) Didn't Load" ]},
		gltitle: { type: String },
		summary: { type:  String, default: "Summary Didn't Load"},
		jacclink: { type: String, default: "" },
		pdflink: { type: String, default: "" },
		hub: { type: String, default: "" },
		sectiontitleformatted: { type: Array },
		eid: { type: String },
		loe: { type: String },
		cor: { type: String },
        comments: { type: Array },
		pointofcare: { type: Array, default: null },
		conditions: { type: Array, default: null },
		amendments: { type: Array, default: null },
        refinfo: { type: Array },
		results: { type: String, default: "" },
	},
	data() {
		return {
			isExpandedBoolean: false,
            isSupportingTextExpanded:false,
		};
	},
	computed: {
		rotation() {
			return !this.isExpanded ? "rotation_180" : "rotation_0";
		},
		isExpanded() {
            if( this.subtype.toLowerCase() == 'table'){
              return (this.el.is.lg)? this.isExpandedBoolean :true;
            }
			return this.isExpandedBoolean;
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
