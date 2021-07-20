<template>
	<div
		data-target="readableSeatdata"
		class="flex justify_between flex_inline gap-x_3 gap-y_3 font_ui flex_wrap"
	>
		<div
			class="flex_auto br_1 br_solid br_black-1 c_white-8 p_3 p-b_2 text_right"
			:class="['bg_' + block.color+'-n2',{'opacity_3': block.count==0}]"
			v-for="(block, index) in chartData"
			:key="'block' + index"
		>
			<div class="flex flex-row">
				<div class="flex_auto">
					<span class="lowercase lh_0 font_light block font-size_up-2">
				{{ block.count }}
			</span>
			<span class="lowercase block font-size_down-1 font_bold c_white-7">{{
				block.label
			}}</span>
				</div>
				<div class="flex_none br-l_2 br_solid br_white-4 m-l_3 p_3 p-r_0 flex flex_column justify_center" v-if="block.color == 'alert'">
					<i class="fas fa-exclamation-triangle font_0 self_center"></i>
				</div>
			</div>
		</div>
		<div
			class="flex_auto br_1 br_solid br_black-2 c_black-8 p_3 p-b_2 text_right bg_black-2"
			v-if="showAll" 
		>
			<span class="lowercase lh_0 font_light block font-size_up-2">
				{{ allcount }}
			</span>
			<span class="lowercase block font-size_down-1 font_bold c_black-7"
				>{{allLabel}}</span
			>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		showAll: { type: Boolean, default: true },
		allLabel:{ type: String, default: 'All' },
		chartData: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {};
	},
	methods: {
		sum: function (array, key) {
			return array.reduce((a, b) => a + ( ( b["excludeFromTotal"] == true )? 0 :  b[key] || 0), 0);
		},
	},
	computed: {
		allcount: function () {
			if (this.chartData.length > 0) {
				console.log();
				return this.sum(this.chartData, "count");
			} else {
				return 0;
			}
		},
		// w_filled: function () {
		// 	return (this.filled / this.all) * 100 + "%";
		// },
	},
};
</script>
