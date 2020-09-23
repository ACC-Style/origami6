<template>
	<div class="relative m_auto">
		<div class="font_ui w_100 max-w_2 relative br_black-4 br_1 br_solid">
			<header class="sticky t_0 l_0 r_0 bg_shade-3 br_solid br_1 br_black-1">
				<tr class="flex">
					<th class="p_2 w_50 flex_auto text_left">Bundle</th>
					<th class="p_2 w_50 flex_auto text_right">Seat Count</th>
				</tr>
			</header>
			<section v-for="(group,index) in constructedTableObject" v-bind:key="index+'_grouping'">
				<div>
					<div class="p_2 c_white-8 bg_primary" colspan="2">{{group[0][1]}}</div>
				</div>
				<div
					class="flex br-b_1 br_shade-4 br_solid"
					v-for="(seat,index) in group.sort((a,b)=>{return a[0]<b[0]?-1:1;})"
					:key="index+'_group'"
				>
					<div class="p_2 flex_auto w_50">{{seat[0]}}</div>
					<div class="p_2 flex_auto w_50 text_right">{{seat[2]}}</div>
				</div>
			</section>
		</div>
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
				height: 3 * this.arrayRaw.length,
				sankey: {
					node: {
						width: 20,
						colors: this.colors,
						nodePadding: 40,
						labelPadding: 10,
						label: { fontSize: 16 }
					},
					link: {
						colorMode: "source"
					}
				}
			}
		};
	},
	computed: {
		constructedTableObject() {
			const array = this.chartData.slice(1).sort((a, b) => {
				return a[1] < b[1] ? -1 : 1;
			});
			const map = new Map();
			const obj = {};
			for (const item of array) {
				if (!map.has(item[1])) {
					map.set(item[1], true);
					let currentItem = item[1];
					let grouping = array.filter(x => x[1] == currentItem);
					obj[item[1]] = grouping;
				} else {
				}
			}
			console.log(obj + "object");
			return obj;
		}
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