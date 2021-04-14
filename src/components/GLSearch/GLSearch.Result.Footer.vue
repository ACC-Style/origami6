<template>
	<footer
		class="result-docuemnt bg_secondary-5 font_n2 br-t_1 br_black-2 p-t_3 p-x_3 br_solid p-b_2 br-br_radius br-bl_radius"
	>
		<div
			class="document-title font_slab c_black-8 font_n1 nowrap overflow_ellipsis"
		>
			{{ documentTitle }}
		</div>
		<div>
			<ul class="ul_none overflow_ellipsis flex c_black-6 nowrap">
				<li
					class="flex_shrink max-w_1 overflow_ellipsis inline-block vertical-align_middle"
					v-for="(crumb, index) in breadcrumb"
					:key="index"
				>
					{{ crumb }}
					<i
						class="fas fa-chevron-right font_n3 p_2 c_black-4"
						
					></i>
				</li>
				<div class="c_primary">

					Recommendation
				</div>
			</ul>
		</div>
		<div class="flex flex_inline flex_wrap font_n3">
			<div
				v-if="pointOfCare != null"
				class="flex_inline flex_shrink flex c_black-7"
			>
				Point of Care:
				<ul class="ul_none overflow_ellipsis flex c_black-6 nowrap">
					<li
						class="flex_shrink max-w_1 overflow_ellipsis inline-block vertical-align_middle"
						v-for="(poc,index) in pointOfCare"
						:key="'poc_' + index"
					>
						{{ poc }}
					</li>
				</ul>
			</div>
			<div v-if="conditions != null" class="display_none inline-block:md flex_shrink c_black-4">
				<i class="fas fa-horizontal-rule fa-rotate-90"></i>
			</div>
			<div v-if="conditions != null" class="flex_inline flex_shrink  c_black-7 flex">
				Conditions:
				<ul
					class="ul_none overflow_ellipsis flex flex_inline c_black-6 nowrap"
				>
					<li
						class="flex_shrink max-w_1 overflow_ellipsis inline-block vertical-align_middle"
						v-for="cond in conditions"
						:key="'cond_' + cond"
					>
						{{ cond }}
					</li>
				</ul>
			</div>
		</div>
		<nav class="m-l_n2 m-b_2 m-t_2 flex_inline flex gap-x_2">
			<BTN
				v-if="docURL != ''"
				:class="btnStyles"
				@click="$emit('onNavigate', docURL)"
				:state="btnState"
				:shadow="false"
				:size="btnSize"
			>
				<i class="fas fa-share-square m-r_2"></i>
				<span class="display_none inline:md">FULL&nbsp;</span>
				<span>DOC</span>
			</BTN>
			<BTN
				v-if="pdfURL != ''"
				:class="btnStyles"
				@click="$emit('onNavigate', pdfURL)"
				:state="btnState"
				:shadow="false"
				:size="btnSize"
			>
				<i class="fas fa-file-pdf m-r_3"></i>
				<span>PDF</span>
			</BTN>
			<BTN
				v-if="hubULR != ''"
				:class="btnStyles"
				@click="$emit('onNavigate', hubULR)"
				:state="btnState"
				:shadow="false"
				:size="btnSize"
			>
				<i class="fab fa-hubspot m-r_3"></i>
				<span>Tools</span>
			</BTN>
		</nav>
		<aside
			class="font_n2 c_black-8 bg_black-2 h:bg_black-5 h:c_white m-x_n3 m-b_n2 p_2 p-x_3 br-t_1 br_solid br_black-2 shadow_n1 relative"
		>
			<div class="flex flex_nowrap nowrap" @click="onCopy()">
				<strong class="flex_none p-r_2">
					<i class="fas fa-quote-right m-r_2"></i>&nbsp;
					<span class=""
						>cite document:</span
					>
				</strong>
				<span class="flex_auto overflow_ellipsis">{{
					documentTitle
				}}</span>
			</div>
			<div
				:class="copiedStyles"
				class="bg_primary absolute t_0 r_0 b_0 l_0 c_white font_bold p_2 transition_4 lh_1 flex justify_center self_center vertical-align_middle"
			>
				<span class="p-t_1"
					><i class="fas fa-copy p-r_3"></i>Copied to Clipboard</span
				>
			</div>
		</aside>
	</footer>
</template>

<script>
import BTN from "../subComponents/Btn";
import { ResponsiveMixin } from "vue-responsive-components";

export default {
	name: "resultFooter",
	components: {
		BTN
	},
	mixins: [ResponsiveMixin],
	props: {
		documentTitle: { type: String },
		sections: { type: Array },
		docURL: { type: String },
		pdfURL: { type: String },
		hubULR: { type: String },
		breadcrumb: { type: Array, default: null  },
		pointOfCare: { type: Array, default: null },
		conditions: { type: Array, default: null },
	},
	data() {
		return {
			showCopiedFlag: false
		}
	},
	methods: {
		onCopy() {
			this.showCopiedFlag = true
			setTimeout(() => { this.showCopiedFlag = false; }, 2000);
			this.$emit('onCopy');
		},

	},
	breakpoints: {
		sm: el => el.width <= 350,
	},
	computed: {
		btnState() {
			if (this.el.is.sm) { return 'secondary' }
			return 'empty';

		}, btnStyles() {
			if (this.el.is.sm) { return 'flex_auto text_center w_100 p_3' }
			return 'flex_shrink';

		},btnSize() {

			if (this.el.is.sm) { return 'small' }
			return 'tiny';

		},
		copiedStyles() {
			if (!this.showCopiedFlag) {
				return 'opacity_0 z_0';
			}
			return 'opacity_9 z_5'
		}
	}
};
</script>
