<template>
	<article
		class="br_solid br_1 br_black-2 bg_black-_05 p_3 p_4:lg br_radius relative font_copy "
		:class="{ 'br_black-3 shadow_overlap-light': registerForEvent }"
	>
		<aside
			data-type="date"
			class="float_left m-t_n3 m-t_n4:lg m-l_4:md m-l_0:lg br-t_0 br_1 br_solid br_black-2 l_4 bg_primary-5 p-x_4 p-y_4 font_0 text_center font_display c_black-7 display_none block:md"
		>
			<span class="block:md font_1:md font_medium lh_0">{{ month }}</span>
			<span class="block:md font_6:md font_light lh_0">{{ dates }}</span>
		</aside>
		<div
			class="absolute r_4 r_5:lg t_n1 text_center flex flex_column:md justify_end align-right font_1:md font_0 overflow_hidden transition_2"
		>
			<div
				class="flex flex_row justify_end m-r_1:lg m-r_3 m-r_4 transition_2"
				v-if="registerForEvent"
				@mouseover="hoverRegistered = true"
				@mouseleave="hoverRegistered = false"
			>
				<span
					:class="{ shadow_1: hoverRegistered }"
					class="bg_highlight h:bg_highlight-n1 flex_shrink c_white p-t_2 p-b_2 p-b_3:md p-x_3 shadow_n1 br_1 br_solid br_black-1 m-x_n1"
				>
					<span class="p-x_2" v-show="hoverRegistered"
						>registered</span
					>
					<i class="fal fa-check-circle fa-fw"></i>
				</span>
			</div>
		</div>
		<header class="clear_both p-x_3:md p-t_1:md">
			<div
				data-type="date"
				class="font_0 display_none:md c_accent-2 m-b_n2 m-t_3 m-l_2 font_bold"
			>
				{{ month }} {{ dates }}
			</div>
			<h2
				class="font_display font_4:lg font_3:md font_2 c_primary-n1 m-t_4:md m-t_2 m-b_3 lh_1 cursor_pointer h:underline "
			>
				{{ title }}
			</h2>
		</header>
		<ul class="p-x_3:md m-b_4:md p-t_1 p-y_3:lg font_1:lg font_0 ul_none lh_4">
			<li>
				<i class="fas fa-clock c_black-5"></i
				><span class="m-l_2">{{ hours }}</span>
			</li>
			<li>
				<i class="fas fa-map-marker-alt c_black-5"></i
				><span class="m-l_2">{{ eventType }}</span>
			</li>
			<li>
				<i class="fas fa-user-graduate c_black-5"></i>
				<span class="m-l_2 m-t_n2 inline-block">
					<Credit
						class="m-r_3"
						:type="credit.type"
						:value="credit.value"
						:styleCode="credit.type"
						:size="'tiny'"
						v-for="(credit, index) in credits"
						:key="index"
					/>
				</span>
			</li>
		</ul>
		<footer class="flex justify_around m-t_3 m-t_0:md">
			<Btn
				class="flex_auto m-x_3 text_center max-w_10"
				:size="'medium'"
				:corner="'radius'"
				:shadow="false"
				v-if="!registerForEvent"
				:state="'empty'"
				><span class="flex_grow c_primary-n1 c_primary-n3"
					>Learn More</span
				></Btn
			>
			<Btn
				class="flex_auto m-x_3 text_center max-w_10"
				:size="'medium'"
				:corner="'radius'"
				:shadow="true"
				v-if="!registerForEvent"
				><span class="flex_grow">Register</span></Btn
			>
			<Btn
				class="flex_auto m-x_3 text_center max-w_10"
				:size="'medium'"
				:corner="'radius'"
				:shadow="true"
				v-if="registerForEvent"
				@onClick="$emit('onRegister', id)"
				><span class="flex_grow">Join</span></Btn
			>
		</footer>
	</article>
</template>

<script>
import Btn from "../subComponents/Btn";
import Credit from "../subComponents/CreditChiclet";
import moment from "moment";
import tz from "moment-timezone";
export default {
	props: {
		id: { type: Number },
		startDate: { type: Date },
		endDate: { type: Date },
		title: { type: String },
		credits: { type: Array, default: () => [] },
		timezone: { type: String, default: "America/New_York" },
		eventType: { type: String },
		registerForEvent: { type: Boolean, default: false },
	},
	components: {
		Btn,
		Credit,
	},
	data() {
		return {
			hoverRegistered: false,
		};
	},
	computed: {
		month() {
			return moment(this.startDate).tz(this.timezone).format("MMM");
		},
		dates() {
			let start = moment(this.startDate).tz(this.timezone).format("D");
			let end = moment(this.endDate).tz(this.timezone).format("D");
			if (start === end) {
				return start;
			} else {
				return start + "-" + end;
			}
			return "20";
		},
		hours() {
			let start = moment(this.startDate).tz(this.timezone).format("h"),
				startMedian = moment(this.startDate)
					.tz(this.timezone)
					.format("a"),
				end = moment(this.endDate).tz(this.timezone).format("h"),
				endMedian = moment(this.endDate).tz(this.timezone).format("a"),
				timezone = moment(this.startDate).tz(this.timezone).format("z");
			if (start === end && startMedian === endMedian) {
				return start + " " + startMedian + " " + timezone;
			} else if (startMedian === endMedian) {
				return start + " - " + end + " " + startMedian + " " + timezone;
			} else {
				return (
					start +
					" " +
					startMedian +
					" - " +
					end +
					" " +
					endMedian +
					" " +
					timezone
				);
			}
		},
	},
};
</script>

<style scoped></style>
