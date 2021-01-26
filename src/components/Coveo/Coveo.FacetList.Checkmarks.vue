<template>
	<section class="font_ui font_0">
		<header class="flex">
			<div class="flex_auto p-l_0 lh_1 font-size_up">
				<slot>Slot Header Space</slot>       
			</div>
			<div
				class="flex_none toggle opacity_5 h:opacity lh_1 font-size_down t_n2 r_n2 text_right m-l_auto user-select_none"
				@click="toggleContentExpand()"
			>
				<i class="fa p_3" :class="toggle.class"></i>{{ toggle.label }}
			</div>
		</header>
		<ul
			class="p-y_3 ul_none br-t_1 br_primary-4"
			v-if="contentExpanded"
			:class="{ br_solid: contentExpanded }"
		>
			<li class="m_0" v-for="(facet, index) in facets" :key="'facet_'+index"><FacetCheckMark v-bind="facet" /></li>
		</ul>
		<footer
			class="text_center font-size_down c_primary-n1 br-t_1 br_solid br_priamry-4 p-t_3"
			v-if="contentExpanded"
		>
			<span href="" class="link h:underline h:black">less</span
			><span class="c_primary"> | </span
			><span href="" class="link h:underline h:black">more</span>
		</footer>
	</section>
</template>

<script>
import FacetCheckMark from './Coveo.Facet.Checkmark.vue';
export default {
	components: {
		FacetCheckMark,
	},
	props: {
		facets: { type: Array, default: () => { { } } },
		isFacetExcludable: {
			type: Boolean,
			default: true
		},
	},
	data() {
		return {

			contentExpanded: true
		}
	},
	computed: {
		toggle() {
			let array = new Array;
			array["class"] = this.contentExpanded ? "fa-minus" : "fa-plus";
			array["label"] = this.contentExpanded ? "collapse" : "expand";
			return array;
		}
	},
	methods: {
		toggleContentExpand() {
			this.contentExpanded = !this.contentExpanded
		}
	},
}
</script>

<style scoped>
.user-select_none {
	user-select: none;
}

</style>