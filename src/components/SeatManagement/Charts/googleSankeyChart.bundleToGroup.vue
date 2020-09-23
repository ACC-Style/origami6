<template>
	<div>
		<GChart
			:settings="{packages: ['sankey']}"
			:data="chartData"
			:options="chartOptions"
			:createChart="(el, google) => new google.visualization.Sankey(el)"
			@ready="onChartReady"
		/>
	</div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
	components: {
		GChart
	},
	props: {
		arrayRaw: {
			type: Array,
			default: () => [
				{
					seat_number: 1,
					seat_status: "requested",
					date_invite: "2019-10-16 16:42:53 UTC",
					date_accepted: "2019-11-04 16:42:53 UTC",
					date_lockedTill: "2020-11-04 16:42:53 UTC",
					user: {
						name: "Arne Minucci",
						id: "2200274385",
						email: "aminucci0@disqus.com"
					},
					bundle: { id: "2222222222-p", name: "HeartSymphony" },
					contract: { id: "0710540561" },
					group: { id: "0179212747", name: "default" }
				},
				{
					seat_number: 2,
					seat_status: "unused",
					date_invite: "2019-04-29 01:28:40 UTC",
					date_accepted: "2019-05-11 01:28:40 UTC",
					date_lockedTill: "2020-05-11 01:28:40 UTC",
					user: {
						name: "Elliot Thorius",
						id: "7929533355",
						email: "ethorius1@soup.io"
					},
					bundle: { id: "3333333333-p", name: "OmegaSap" },
					contract: { id: "4313340943" },
					group: { id: "8872445748", name: "default" }
				}
			]
		},
		colors: {
			default: () => {
				return ["#cccccc"];
			}
		}
	},
	data() {
		return {
			chartsLib: null,
			// Array will be automatically processed with visualization.arrayToDataTable function
			chartData: this.constructData(this.arrayRaw),
			chartOptions: {
				title: "Seat Allocation",
				subtitle: "Sales, Expenses, and Profit: 2014-2017",
				height: 2 * this.arrayRaw.length,
				sankey: {
					node: {
						width: 20,
						colors: this.colors,
						nodePadding: 40,
						labelPadding: 10,
						label: { fontSize: 12 }
					},
					link: {
						colorMode: "source"
					}
				}
			}
		};
	},
	methods: {
		onChartReady(chart, google) {
			this.chartsLib = google;
		},
		constructData(arrayRaw) {
			const array = arrayRaw;
			const result = [["To", "From", "Seats"]];
			const map = new Map();
			for (const item of array) {
				if (!map.has(item.bundle.name + item.group.name)) {
					map.set(item.bundle.name + item.group.name, true); // set any value to Map
					result.push([
						item.bundle.name,
						item.group.name,
						arrayRaw.filter(
							x =>
								x.bundle.name == item.bundle.name &&
								x.group.name == item.group.name
						).length
					]);
				}
			}
			console.log(result);
			return result;
		}
	}
};
</script>

<style lang="scss" scoped>
</style>