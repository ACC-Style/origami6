<template>
	<section class="font_ui">
		<header class="flex font-size_up">
			<div class="flex_auto  self_center p-l_0 lh_1 font-size_up font_medium">
				<slot>Slot Header Space</slot>
			</div>
			<div
				class="flex_none self_center  c_primary-n2 h:c_primary-n3 toggle opacity_5 h:opacity lh_1 font-size_down t_n2 r_n2 text_right m-l_auto user-select_none"
				@click="toggleContentExpand()"
			>
				{{ toggle.label }}
				<i class="fa p_3 transition_3 fa-plus" :class="toggle.class"></i>
			</div>
		</header>
		<transitionExpand>
			<main class="p_1" >
				<ul v-show="contentExpanded"
					:class="{ br_solid: contentExpanded }"
					class="p-y_3 ul_none br-t_1 br-b_1 br_primary-3 transition_3"
				>
					<li
						class="m-y_2"
						v-for="(facet, index) in facetsList"
						:key="'facet_' + index"
					>
						<FacetCheckMark
							v-bind="facet"
							v-model="facet.checked"
							@onExcludeToggle="facet.excluded = $event"
							:excluded="facet.excluded"
							:canExcludeFacets="canExcludeFacets"
						/>
					</li>
				</ul>
			</main>
		</transitionExpand>
		<footer
			class="text_center font-size_down c_primary-n1 p-t_3"
			v-if="
				contentExpanded &&
				(disabledChangeFunction.min || disabledChangeFunction.max)
			"
		>
			<span
				@click="changeMaxCount(-stepChange)"
				class=""
				:class="changeStyles(disabledChangeFunction.min)"
				>less</span
			><span class="c_primary"> | </span
			><span
				@click="changeMaxCount(stepChange)"
				class="link h:underline h:black"
				:class="[changeStyles(disabledChangeFunction.max)]"
				>more</span
			>
		</footer>
	</section>
</template>


<script>
import FacetCheckMark from './Coveo.Facet.CheckMarks.vue';
import transitionExpand from "../subComponents/TransitionExpand.vue";
export default {
	components: {
		FacetCheckMark,transitionExpand
	},
	props: {
		facets: { type: Array, default: () => { { } } },
		canExcludeFacets: {
			type: Boolean,
			default: true
		},
		maxCount: {
			type: Number,
			default: 10
		},
		stepChange: {
			type: Number,
			default: 10
		},
		contentExpandedDefault:{
			type:Boolean,
			default:false
		}
	},
	data() {
		return {

			contentExpanded: this.contentExpandedDefault,
			maxFacetCount: this.maxCount
		}
	},
	computed: {
		facetsList() {
			return this.facets.slice(0, this.maxFacetCount);
		},
		toggle() {
			let array = new Array;
			array["class"] = this.contentExpanded ? "rotate-135" : "";
			array["label"] = this.contentExpanded ? "collapse" : "expand";
			return array;
		},
		disabledChangeFunction() {
			let maxCount = this.facets.length, minCount = this.maxCount, currentCount = this.facetsList.length;
			let min = (currentCount <= minCount) ? false : true;
			let max = (currentCount >= maxCount) ? false : true;
			return { 'min': min, 'max': max };
		}
	},
	methods: {
		changeMaxCount(countChange) {
			this.maxFacetCount = Math.max(this.maxFacetCount + countChange, this.maxCount);
		},
		toggleContentExpand() {
			this.contentExpanded = !this.contentExpanded
		},
		changeStyles(state) {
			if (state == true) {
				return "link h:underline h:black cursor_pointer"
			}
			return "cursor_not-allowed c_black-3"
		}

	},
}
</script>
