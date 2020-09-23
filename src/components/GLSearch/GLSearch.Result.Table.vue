<template>
	<article class="result font_ui br_1 br_black-2 br_1 br_solid shadow_1">
		<header class="br-t_3 br_solid br_primary m-t_n1 m-x_n1">
			<aside class="flex relative">
				<div class="flex_auto">
					<span
						class="p-y_3 block font_n2 m-x_4 p-t_4 uppercase c_primary font_bold"
					>tables &amp; figures</span>
				</div>
			</aside>
		</header>
		<main class="result-content p-x_4 p-b_4 font_copy font_0 lh_3">
			<div class="inline-block font_1 font_slab c_acc">{{title}}</div>
			<div class="block:md font_n1 overflow_scroll scrollbar-mini w_100 display_none" v-html="content"></div>
			<div class="block display_none:md texture_light br_radius p_4 text_center shadow_n1">
				<h2 class="m-y_3">
					<i class="fas fa-table font_5"></i> Table Results Are Not Rendered In this View
				</h2>
				<p class="font_0">
					Table results are not mobile friendly. It is best to veiw this content on a tablet or desktop. You can pop this table onto a new tab but you will have to scroll.
					<i
						class="far fa-thumbs-down"
					></i>
				</p>
				<BTN class="br_radius shadow_2 br_solid br_2 br_white" :state="'shade'" :size="'large'">
					Expand Table On A New Tab
					<i class="fas fa-external-link-square"></i>
				</BTN>
			</div>
		</main>

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
	name: "SearchResultTable",
	components: {
		BTN,
		ResultFooter
	},
	props: {
		type: { type: String },
		title: { type: String },
		content: { type: String },
		documentTitle: { type: String },
		DOCurl: { type: String },
		PDFurl: { type: String },
		HUBurl: { type: String },
		sections: { type: Array }
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

<style lang="css">
.inline-table-caption {
	font-size: 10px;
}

table {
	margin: 0 auto;
}

/* Default Table Style */
table {
	color: #333;
	background: white;
	border: 1px solid grey;
	border-collapse: collapse;
}
table thead th,
table tfoot th {
	color: #777;
	background: rgba(0, 0, 0, 0.1);
	font-size: 0.8em;
}
table caption {
	padding: 0.5em;
}
table th,
table td {
	padding: 0.5em;
	border: 1px solid lightgrey;
}
.inline-reference {
	font-size: 0.75em;
	padding: 0.5em;
	display: inline-block;
	color: #198dae;
	text-decoration: underline;
}
</style>