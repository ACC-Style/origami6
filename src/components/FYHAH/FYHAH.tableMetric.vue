<template>
	<Accordion>
		<template v-slot:header>
			<h2 class="font_display m_0 font_2 lh_1">{{ metric.title }}</h2>
		</template>
		<template v-slot:content class="">
			<div class="font_copy p_4:md">
				<p class="c_primary m-t_0 lh_2 p-x_4 p-t_4 p-x_3:md font_italic">
					{{ metric.subtitle }}
				</p>
				<section
					class="flex flex_column flex_row:md"
					v-for="(element, index) in metric.data"
					:key="index"
					v-bind:class="{ 'bg_primary-5': isEven(index) }"
				>
					<div class="flex_auto p-x_3 p-l_4 font_1:md lh_3 font_0 c_black w-grid_9:md">
						<p class="lh_2">
							{{ element.label }}
							<a
								class="font_n1 vertical-align_top m-l_2 c_secondary"
								v-if="element.helperText"
								:title="element.helperText"
							>
								<i class="fas fa-info-circle"></i>
							</a>
						</p>
					</div>
					<div
						class="font_bold flex_auto p-l_4 p-b_4 p_3:md p-t_4:md p-x_2 font_1 font_0:md flex text_center:md w-grid_12 w-grid_3:md "
					>

						<div
							class="font_2 font_1:md  flex_auto self_center"
							v-if="element.type == 'star'"
						>
							<i
								class="fa-star p-l_2 flex_auto"
								v-for="index in 5"
								:key="index"
								v-bind:class="star(element.value, index)"
							></i>
						</div>
						<div
							class="font_2 font_3:md flex_auto self_center"
							v-if="element.type == 'number'"
						>
							{{ element.value }}
						</div>
					</div>
				</section>
			</div>
		</template>
	</Accordion>
</template>

<script>
import Accordion from "../BasicContainer/Accordion.vue";

export default {
	name: "metricTable",
	props: {
		metric: {
			type: Object,
			required: true
		}
	},
	components: {
		Accordion
	},
	data() {
		return {};
	},
	methods: {
		isEven(value) {
			if (value % 2 == 0) return true;
			else return false;
		},
		star(value, index) {
			return value >= index
				? "fas c_warning text-shadow_black-1 star-" + index
				: "far c_black-3 star-" + index;
		}
	}
};
</script>

<style scoped></style>
