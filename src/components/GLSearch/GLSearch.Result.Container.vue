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
			:sectiontitleformatted="sectiontitleformatted"
			:gltitle="gltitle"
			:jacclink="jacclink"
			:pdflink="pdflink"
			:hub="hub"
			:pointofcare="pointofcare"
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
		subtype: { type: String, default: "recommendation" },
		sectionTitle:{ type: String, default: "Title Didn't Load" },
		content: { type: String, default: "" },
		gltitle: { type: String },
		jacclink: { type: String, default: "" },
		pdflink: { type: String, default: "" },
		hub: { type: String, default: "" },
		sectiontitleformatted: { type: Array },
		loe: { type: String },
		cor: { type: String },
		pointofcare: { type: Array, default: null },
		conditions: { type: Array, default: null },
		amendments: { type: Array, default: null }
	},

	computed: {
        headerAssets() {
            let color,label;
            switch(this.subtype) {
                case "recommendation":
                    color = "primary";
                    label = "Recommendation";
                    break;
				case "publication":
                    color = "primary";
                    label = "Recommendation";
                    break;
                case "table":
                    color = "highlight";
                    label = "Table &amp; Figures";
                    break;
                case "section":
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