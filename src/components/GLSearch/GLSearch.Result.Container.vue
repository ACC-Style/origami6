<template>
	<article
		class="result font_ui br_1 br_black-2 br_1 br_solid shadow_overlap-light br_radius relative"
	>
		<header class="br-t_4 br_solid m-t_n1 m-x_n1 br-tr_radius br-tl_radius" :class="'br_'+headerAssets.color">
			<aside class="flex relative">
				<div class="flex_auto">
					<span
						class="p-y_3 block font_n2 m-x_4 p-t_3 uppercase font_bold" :class="'c_'+headerAssets.color"
						v-html="headerAssets.label"
                        ></span>
				</div>
			</aside>
		</header>
        <slot></slot>
		<ResultFooter
        :eid="eid"
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
		/>
	</article>
</template>

<script>
import ResultFooter from "./GLSearch.Result.Footer";


export default {
	name: "SearchResultRec",
	components: {
		ResultFooter,
	},
	props: {
        eid: { type: String },
		type: { type: String, default: "Recomendation" },
		sectionTitle:{ type: String, default: "Title Didn't Load" },
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
		amendments: { type: Array, default: null },
		supportingText: { type: String, default: "missing supporting text" },
		references: { type: Array },
		breadcrumb: { type: Array }
	},

	computed: {
        headerAssets() {
            let color,label;
            switch(this.type) {
                case "Recomendation":
                    color = "primary";
                    label = "Recommendation";
                    break;
                case "Table":
                    color = "highlight";
                    label = "Table &amp; Figures";
                    break;
                case "Section":
                    color = "accent";
                    label = "Section";
                    break;
                default:
                    color: "alert";
                    label: "undefined";

            }
            return {label: label, color: color};
        }

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