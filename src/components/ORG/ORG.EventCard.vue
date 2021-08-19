<template>
	<article
		class="br_solid br_1 br_black-2 bg_black-_05 br_radius relative font_copy br_black-3 shadow_overlap-light flex_column flex justify_start m-x_3"
		:class="'br_' + corner"
	>
		<HeaderImage
			class="bg-blend_multiply br_1 br_solid br_black-3 bg_cover bg_left m-x_n1 m-t_n1 flex_none"
			v-if="headerImageExsists"
			:class="'br-tr_' + corner + ' br-tl_' + corner"
			:id="'CTAIMG-' + id"
			:imgSM="imgSM"
			:imgMD="imgMD"
			:imgLG="imgLG"
		/>
		<div class="relative">
			<aside
				data-type="date"
				class="float_left m-l_4 m-l_5:lg br-t_0 br_1 br_solid br_black-4 bg_primary-5 p-x_4 p-y_4 font_0 text_center font_display c_black-7 z_3 shadow_overlap-light"
                :class="{'m-t_n5':headerImageExsists}"
				v-if="!isEventFinished"
			>
				<span
					class="block font_n1 font_0:md font_medium lh_0 p-x_2:lg"
					>{{ startMonth }}<span v-if="startMonth != endMonth">- {{ endMonth }}</span></span
				>
				<span class="block font_2 font_4:md font_light lh_0 p-x_2:lg">{{
					dates
				}}</span>
			</aside>
			<div
				class="absolute r_4 r_5:lg t_0 text_center flex flex_column:md justify_end align-right font_1:md font_0 overflow_hidden transition_2 z_2"
			>
				<TabFlag
					v-show="registerForEvent"
					:type="'registered'"
					class="m-r_1:lg m-r_3 m-r_4"
				/>
			</div>
		</div>
		<header class="clear_both p-x_3 p-x_4:md p-x_5:lg p-t_2" :class="{'m-t_4':isEventFinished}">
						<h2
				class="font_display font_medium font_3:lg font_2:md font_1 c_primary-n1 m-t_2 m-t_4:lg m-t_3:md m-b_2 lh_1 cursor_pointer h:underline"
			>
				{{ title }}
			</h2>
			<div data-v-5294f1c2="" class="font_ui c_accent-n1 font_medium font_n2 m-t_n2 uppercase">{{ eventType }}</div>
            <div class="c_secondary font_n1 bold" v-if="isEventFinished">Past: {{startMonth}} {{dates}} {{year}}</div>

		</header>
		<p v-if="shortText" class="font_0:lg font_n1 p-x_3 p-x_4:md p-x_5:lg lh_2 m-b_0">
			{{ shortText }}
		</p>
		<ul
			class="m-b_4:md p-t_3 p-x_3 p-x_4:md p-x_5:lg font_n1:lg font_n2 ul_none lh_4"
		>
			<li v-if="!isEventFinished" class="flex flex_row">
				<i class="fas font-size_up  flex_none p-r_3 self_center fa-clock c_black-5"></i
				><span class="m-l_2 flex_auto inline-block self_start">{{ hours }}</span>
			</li>

			<li class="flex flex_row m-t_2">
				<i class="fas font-size_up  flex_none p-r_3 self_center fa-hourglass-half c_black-5"></i
				><span class="m-l_2 flex_auto inline-block self_start lh_1">
					<span class="font-size_down block opacity_6">On Demand Untill:</span>
					{{ onDemandText }}</span>
			</li>
			<li v-if="credits.length > 0" class="flex flex_row m-t_3">
				<i class="fas font-size_up  flex_none p-r_3 self_start fa-award c_black-5"></i>
				<span class="flex flex_auto flex_row flex_wrap gap-x_2 gap-y_2 inline-block justify_start self_start m-l_2 m-t_n2">
					<Credit
						class=""
						:type="credit.type"
						:value="credit.value"
						:styleCode="credit.type"
						:showValue="false"
						:size="'tiny'"
						v-for="(credit, index) in credits"
						:key="index"
					/>
				</span>
			</li>
		</ul>
		<footer
			class="flex justify_around m-t_auto gap-x_3 p-t_4 p-t_3:md p-x_5:lg p-x_3 p-b_4"
		>
			<Btn
				class="flex_auto text_center max-w_20 m-b_2"
				:size="'small'"
				:corner="'radius'"
				:shadow="false"
				v-if="!registerForEvent"
				:state="'secondary'"
				@onClick="onLearnMore(id)"
				><span class="flex_grow "
					>Learn More</span
				></Btn
			>
			<Btn
				class="flex_auto text_center max-w_20 m-b_2"
				:size="'small'"
				:corner="'radius'"
				:shadow="true"
				v-if="!registerForEvent"
				@onClick="onRegister(id)"
				><span class="flex_grow">Register</span></Btn
			>
			<Btn
				class="flex_auto text_center max-w_20 m-b_2"
				:size="'small'"
				:corner="'radius'"
				:shadow="true"
				v-if="registerForEvent"
				@onClick="onNavigateTo(id)"
				>
				<span class="flex_grow" v-if="isEventFinished">On Demand</span>
				<span class="flex_grow" v-else>Join</span>
				</Btn
			>
		</footer>
	</article>
</template>

<script>
import Btn from "../subComponents/Btn";
import Credit from "../subComponents/CreditChiclet";
import TabFlag from "../subComponents/TabFlag";
import HeaderImage from "../ORG/subComponent/HeaderImage";
import moment from "moment";
import tz from "moment-timezone";
export default {
	name:"EventCard",
	props: {
		
		id: { type: Number },
		title: { type: String, default:'' },
		shortText: { type: String, default:'' },
		startDate: { type: Date },
		endDate: { type: Date},
		onDemandDate: { type: Date },
		credits: { type: Array, default: () => [] },
		timezone: { type: String, default: "America/New_York" },
		eventType: { type: String },
		registerForEvent: { type: Boolean, default: false },
		imgSM: { type: String, default: undefined },
		imgMD: { type: String, default: undefined },
		imgLG: { type: String, default: undefined },
		imgXL: { type: String, default: undefined },
		corner: {
			type: String,
			default: "radius",
			validate: (value) => {
				["radius", "round", "square"].indexOf(value) !== -1;
			},
		},
	},
	components: {
		Btn,
		Credit,
		HeaderImage,
		TabFlag
	},
	data() {
		return {
			headerImageExsists:(this.imgSM && this.imgMD && this.imgLG)
		};
	},
	computed: {
		isEventFinished:function(){
			let today = new Date();
			return today > this.endDate;
		},
		onDemandText: function () {
			return (
				moment(this.onDemandDate).tz(this.timezone).format("MMM D z")
			);
		},
		year(){
			return moment(this.onDemandDate).tz(this.timezone).format("YYYY")
			;
		},
		startMonth() {
			return moment(this.startDate).tz(this.timezone).format("MMM");
		},
		endMonth() {
			return moment(this.endDate).tz(this.timezone).format("MMM");
		},
		dates() {
			let start = moment(this.startDate).tz(this.timezone).format("D");
			let end = moment(this.endDate).tz(this.timezone).format("D");
			if (start === end) {
				return start;
			} else {
				return start + "-" + end;
			}
		},
		hours() {
			let start = moment(this.startDate).tz(this.timezone).format("h"),
				startMedian = moment(this.startDate).tz(this.timezone).format("a"),
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
	methods: {
		onRegister(id){
			this.$emit('onRegister', id)
		},
		onNavigateTo(id){
			this.$emit('onNavigateTo', id)
		},
		onLearnMore(id){
			this.$emit('onLearnMore', id)
		}
	},
};
</script>

<style scoped></style>
