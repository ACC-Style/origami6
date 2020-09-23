<template>
	<div>
		<GChart :type="chartType" :data="chartData" :options="chartOptions" />
	</div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
	components: {
		GChart
	},
	props: {
		chartType: {
			type: String,
			default: "ColumnChart"
		},
		chartData: {
			type: Array,
			default: function() {
				return [
					["Year", "Sales"],
					["2014", 1000],
					["2015", 1170],
					["2016", 660],
					["2017", 1030]
				];
			}
		},
		chartOptions: {
			type: Object,
			default: () => {
				return {
					title: "Company Performance",
					subtitle: "Sales, Expenses, and Profit: 2014-2017"
				};
			}
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
</style>