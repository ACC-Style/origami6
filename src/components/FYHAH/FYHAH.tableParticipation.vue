<template>
	<Accordion>
		<template v-slot:header>
			<h2 class="font_display m_0 lh_2 font_2">
				{{ participation.title }}
			</h2>
		</template>
		<template v-slot:content>
			<div class="font_copy p_4:md">
				<p class="c_primary m-t_0 lh_2  p-x_4 p-t_4 p-x_3:md font_italic">
					{{ participation.subtitle }}
				</p>
				<div
					class="bg_primary c_white font_0 font_n1:md font_bold display_none flex:md"
				>
					<div class="flex_auto w_30:md p_3">Program</div>
					<div class="flex_auto w_30:md p_3">Participation</div>
					<div class="flex_auto w_40:md p_3">Associated Services</div>
				</div>
				<div v-for="(category, index) in sort" :key="index" class="">
					<div class="p-t_4 p_3 p_3:md bg_primary-5 br-b_2 br_primary br_solid font_display c_black-7 font_0 font_n1:md font_bold " v-if="category != null">{{category}}</div>
					<div
					class=""
					v-for="(metric, index) in dataSorted.filter( data => data.category == category)"
					:key="index"
					v-bind:class="{ 'bg_black-1': isEven(index) }"
				>
					
					<section class="flex flex_column flex_row:md br-t_1 br_solid br_black-1 p-x_3 p-y_2 p_0:md">
					<div
						class="flex_shrink w_30:md p_3:md p-t_3 p-b_2 p-x_3 font_0 font_1:md c_primary-n2"
					>
						{{ metric.label }}
						<a
							class="font_n1 vertical-align_top m-l_2"
							v-if="metric.helperText"
							:title="metric.helperText"
						>
							<i class="fas fa-info-circle"></i>
						</a>
					</div>
					<div
						class="font_bold w_30:md flex_shrink p_3:md p-x_3 font_1 font_0:md"
						:html="metric.value"
					>
					</div>
					<div
						class="c_primary-n4 font_n1 w_40:md flex_auto p-x_3 p_3:md"
					>
						<p class="max-w_40 lh_2 m-t_2 m-y_0:md">
							{{ metric.associatedServices }}
						</p>
					</div>
					</section>
				</div>
				</div>
				
			</div>
		</template>
	</Accordion>
</template>

<script>
import Accordion from "../BasicContainer/Accordion.vue";
export default {
	props: {
		participation: {
			type: Object,
			required: true
		}
	},
	components: {
		Accordion
	},
	data() {
		return {
			category: "foo"
		};
	},
	computed: {
		sort() {
			let uniqueArray = [
				...new Set(this.participation.data.map(item => item.category))
			];
			return uniqueArray;
		},
		dataSorted() {
			let dataSorted = this.mapOrder(
				this.participation.data,
				this.sort,
				"category"
			);
			return dataSorted;
		}
	},
	methods: {
		isEven(value) {
			if (value % 2 == 0) return true;
			else return false;
		},
		mapOrder(array, order, key) {
			array.sort(function(a, b) {
				var A = a[key],
					B = b[key];
				if (order.indexOf(A) > order.indexOf(B)) {
					return 1;
				} else {
					return -1;
				}
			});

			return array;
		},
		categoryHeaderNew(cat) {
			let category = cat;
				if (category != this.category) {
				this.category = category;
				return true;
			} 
		return false;
			
		}
	}
};
</script>

<style scoped></style>
