<template>
	<div id="CreditType" class="text_right:md flex_end flex_auto p-l_4:md p-l_0 p-t_3 p-t_0:md">
		<span class="uppercase c_shade h:c_white h:bg_shade font_bold font_n2 m-x_2 p-x_2" @click="$emit('onShowModalLegendEvent')">
			Filter Credit Types
			<i class="fa fas fa-question-circle"></i>
		</span>
		<ul
			class="flex flex_row flex_wrap flex_nowrap:md flex_row-reverse:md text_left font_bold font_n2 font_ui ul_none"
		>
			<li
				class="flex_shrink w_50 w_auto:md br_1 br_solid br_white-7"
				:class="{'active': selectedFilters.includes('None')}"
			>
				<div
					@click="filterReset()"
					class="button bg_shade-3 p-x_3 p-x_4:lg p-y_3 p-y_3:lg undecorated inline-block:md h:bg_shade h:c_white c_shade-n3 block a:bg_primary a:c_white"
				>None</div>
			</li>
			<li
				class="flex_shrink w_50 w_auto:md br_1 br_solid br_white-7"
				v-for="(credit, index) in creditTypesInDateRange"
				:key="index+'_creditFilter'"
			>
				<div
					@click="filterClick(credit.styleCode)"
					class="button bg_shade-3 p-x_3 p-x_4:lg p-y_3 p-y_3:lg undecorated inline-block:md h:bg_shade h:c_white c_shade-n3 block a:bg_primary a:c_white"
					:class="{['c_white bg_'+credit.styleCode]: selectedFilters.includes(credit.styleCode)}"
				>
					<span class="lh_0" v-html="credit.shortName"></span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "CreditFilterNav",
	props: {
		creditTypesInDateRange: {
			type: Array,
			default: () => []
		}
	},
	data: () => ({
		selectedFilters: ["None"]
	}),
	methods: {
		filterClick: function (type) {
			// First purge the array if it has the default filter of "None"
			if (this.selectedFilters.includes("None")) {
				this.selectedFilters = [];
			}

			if (this.selectedFilters.includes(type)) {
				this.selectedFilters.splice(this.selectedFilters.indexOf(type), 1);
			}
			else {
				this.selectedFilters.push(type);
			}

			// If array is empty again, then default to "None"
			if (this.selectedFilters.length === 0) {
				this.filterReset();
				return;
			}

			this.$emit("onUpdatefilter", this.selectedFilters);
		},
		filterReset: function () {
			this.selectedFilters = ["None"];
			this.$emit("onUpdatefilter", this.selectedFilters);
		}
	}
};
</script>