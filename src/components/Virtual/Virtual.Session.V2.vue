<template>
	<div class="p_4:md font_ui relative br-b_1 br_solid br_black-3">
		<header
			class="br-b_1 br_solid br_black-1 m-b_2 p-b_2:md flex flex_column relative"
		>
			<div
				class="time font_n3 font_n1:lg lh_1 block clear_fix flex br_solid br_black-3 br-t_1"
			>
				<div
					class="p_2 m-r_3 p-t_3 flex_shrink font_xbold c_black-7 font-size_up m-t_n1 w_100"
				>
					<span
						class="c_warning p_2 p-x_3 m-t_n3 m-b_3 vertical-align_top m-l_n2 m-r_2 bg_warning c_white block inline-block:lg w_100 w_auto:lg text_center text_left:md"
						v-show="
							isLive &&
							isPlayable &&
							!isBeforeStart &&
							!isAfterEnd
						"
						><i class="fas fa-video p-r_3"></i> In Progress</span
					>
					<span
						class="c_warning p-r_3 block inline-block:md p-b_2 p-b_0:md"
						v-show="!isPlayable"
						>(Coming Soon to On Demand)</span
					>
					{{ startTime }} - {{ endTime }}
					<span
						class="p-t_2 font-size_down font_bold c_primary-1 text_left display_none:md inline-block w_100"
						>Session Format</span
					>
				</div>
				<div
					class="m-t_n1 flex_column absolute t_0 r_0 flex_row-reverse:md flex flex_shrink self_start m-l_auto"
				>
					<TabFlag
						v-if="faved"
						class=""
						:type="''"
						:text="'favorite'"
						:icon="'fa-heart'"
						:color="'bg_alert'"
					/>
					<!-- <TabFlag
						v-if="(isLive && isPlayable)"
						class=""
						:type="''"
						:text="'in progress'"
						:icon="'fa-video'"
						:color="'bg_warning'"
					/> -->
					<span
						class="p_2 p-x_3 m-r_1 flex_shrink font_bold p-x_3 bg_primary c_white display_none inline-block:md"
						>Session Format</span
					>
				</div>
			</div>
			<div
				class="flex flex_inline w_100 m-t_3 flex_column flex_row:md gap-y_3 p-y_0:md p-t_3 p-b_4"
			>
				<h2
					class="flex_auto lh_1 font_3 font_display m-b_0 c_primary max-w_40 m-t_0"
				>
					{{ title }}
				</h2>
				<aside
					class="actions relative flex flex_shrink flex_inline gap-x_2 flex_nowrap justify_start self_start text_center self_end m_auto m-r_0:md"
				>
					<Btn
						@onClick="faved = !faved"
						:shadow="false"
						:state="'secondary'"
						><i class="fas fa-heart"></i
					></Btn>
					<Btn
						class="m-l_2"
						v-show="isBeforeStart"
						:state="'secondary'"
						:isDisabled="true"
						>Upcoming</Btn
					>
					<Btn
						class="m-l_2"
						v-show="!isPlayable && isAfterEnd"
						:state="'secondary'"
						:isDisabled="true"
						>Watch</Btn
					>
					<Btn
						class="m-l_2"
						v-show="
							(!isBeforeStart && !isAfterEnd) ||
							(isAfterEnd && isPlayable)
						"
						>Watch</Btn
					>
				</aside>
			</div>
		</header>
		<aside>
			<ul
				class="ul_none flex flex_inline flex_wrap flex_row flex_column clear_fix gap-x_2 gap-y_2 font_n3 font_n1:md font_0:lg"
			>
				<li>
					<strong
						class="font_bold c_primary-1 m-t_3 self_center:md p-r_3"
						>Credits</strong
					>
				</li>
				<li><Credit
					:type="'CME'"
					:styleCode="'CME'"
					:value="valueCME"
					:showValue="showValue"
					:isDisabled="isValueZero(valueCME)"
					:size="'tiny'"
				/></li>
				<li><Credit
					:type="'CNE'"
					:styleCode="'CNE'"
					:value="valueCNE"
					:showValue="showValue"
					:isDisabled="isValueZero(valueCNE)"
					:size="'tiny'"
				/></li>
				<li><Credit
					:type="'COP'"
					:styleCode="'COP'"
					:value="valueCOP"
					:showValue="false"
					:isDisabled="isValueZero(valueCOP)"
					:size="'tiny'"
				/></li>
				<li><Credit
					:type="'MOC'"
					:styleCode="'MOCII'"
					:value="valueMOC"
					:showValue="showValue"
					:isDisabled="isValueZero(valueMOC)"
					:size="'tiny'"
				/></li>
				<li><Credit
					:type="'CNErx'"
					:styleCode="'CNErx'"
					:value="valueCNErx"
					:showValue="showValue"
					:isDisabled="isValueZero(valueCNErx)"
					:size="'tiny'"
				/></li>
				<li><Credit
					:type="'ECME'"
					:styleCode="'ECME'"
					:value="valueECME"
					:showValue="showValue"
					:isDisabled="isValueZero(valueECME)"
					:size="'tiny'"
				/></li>
				<li><Credit
					:type="'ABP MOC'"
					:styleCode="'ABPMOCII'"
					:value="valueABPMOCII"
					:showValue="showValue"
					:isDisabled="isValueZero(valueABPMOCII)"
					:size="'tiny'"
				/></li>
				<li><Credit
					:type="'CPE'"
					:styleCode="'CPE'"
					:value="valueCPE"
					:showValue="showValue"
					:isDisabled="isValueZero(valueCPE)"
					:size="'tiny'"
				/></li>
				<li><Credit
					:type="'IPE'"
					:styleCode="'IPE'"
					:value="valueIPE"
					:showValue="showValue"
					:isDisabled="isValueZero(valueIPE)"
					:size="'tiny'"
				/></li>
				<li><Credit
					:type="'PA'"
					:styleCode="'PA'"
					:value="valuePA"
					:showValue="showValue"
					:isDisabled="isValueZero(valuePA)"
					:size="'tiny'"
				/></li>
			</ul>
		</aside>
		<main class="flex_row flex flex_wrap-reverse">
			<div
				class="flex_auto reading-typography font_copy w_70:lg c_black-8 lh_1 p_4 p-l_0 p-b_0 display_none block:md"
				v-html="description"
			></div>
			<div
				class="flex_auto flex flex_column w_30:lg p-l_5:lg font_n2 font_n1:lg m-t_3 m-t_0:lg"
			>
				<div class="flex_auto">
					<strong
						class="font_bold c_primary-n3 m-t_3:lg inline-block block:lg"
						>Learning Pathway</strong
					>
					<ul
						class="ul_none font_n2 c_black-7 lh_1 inline-block block:lg"
					>
						<li
							class="br-b_1 br_solid:lg br_none br_black-1 p-y_2 inline-block block:lg"
						>
							{{ learningPathway }}
							<span
								class="display_none:lg br-l_1 br_solid p-r_2 m-l_2 br_black-2"
							></span>
						</li>
					</ul>
				</div>
				<div class="flex_auto">
					<strong
						class="font_bold c_primary-n3 m-t_3:lg inline-block block:lg"
						>Channel</strong
					>
					<ul
						class="ul_none font_n2 c_black-7 lh_1 inline-block block:lg"
					>
						<li
							class="br-b_1 br_solid:lg br_none br_black-1 p-y_2 inline-block block:lg"
						>
							{{ channelName }}
							<span
								class="display_none:lg br-l_1 br_solid p-r_2 m-l_2 br_black-2"
							></span>
						</li>
					</ul>
				</div>
			</div>
		</main>
		<aside class="m-b_0:lg m-b_3:md m-b_2 m-t_2 m-t_2:md">
			<a
				class="link c_primary-n1 block font_n1"
				@click="extendedInfo = !extendedInfo"
				><i
					class="fas fa-plus transition_3"
					:class="{ 'rotate-45': extendedInfo }"
				></i>
				Show full session information</a
			>
			<TransitionExpand>
				<div
					v-if="extendedInfo"
					class="block w_100 clear_both br-t_2 br_primary-3 br_dashed m-t_2 p-t_3"
				>
					<div
						class="flex_auto reading-typography font_copy w_70:lg c_black-8 lh_1 font_n1 display_none:md block"
						v-html="description"
					></div>
					<div class="flex flex_row:lg flex_column">
						<div
							class="br_black-_05 br_solid br_1 flex_auto w_70:lg font_0 "
						>
							<div
								v-for="(presentation,
								index) in presentations_list"
								:key="index"
								class="w_100"
							>
								<div
									v-if="presentation.duration_minutes <= 0"
									class="bg_primary-5"
								>
									<div
										class="p_3 p-b_0 p-b_3:md p-l_4:md lh_1"
									>
										<span class="display_none">{{
											setTimeSpan(index)
										}}</span>
										<div
											class="font_bold block c_black-8"
										>
											{{ presentation.name }}
										</div>
										<div class="flex_inline flex_wrap flex">
											<div
												v-for="(author,
												index) in presentation.author"
												:key="'author_' + index"
												class="m-b_3 m-t_2 flex_none:lg flex_auto:md w_30:lg w_auto:md w_100 flex_none relative"
											>
												<span
													class="block font-size_down c_black font_medium underline h:undecorated expanded-click-area"
													>{{
														author.full_name
													}}</span
												>
												<span
													class="c_black-8 block font-size_down m-t_2 font_light font_italic lh_1"
													><span
														>{{
															author.location
																.city
														}},</span
													>
													<span
														v-if="
															author.location
																.state
														"
														>{{
															author.location
																.state
														}}</span
													>
													<span v-else>{{
														author.location.country
													}}</span>
												</span>
											</div>
										</div>
										<a
											v-if="
												presentation.attachement
													.length > 0
											"
											:href="presentation.attachement"
											class="link font_n2 c_primary"
											><i
												class="fas fa-file-archive p-r_3"
											></i
											>Download Session Files</a
										>
									</div>
								</div>
								<div
									v-else
									class="bg_black-1 flex flex_column flex_row:md justify_start m-t_3"
								>
									<div
										class="br-r_1 br_dotted:md br_none br_primary c_accent-n4 flex_none font_0:md font_1:lg font_n2 font_xbold p-r_4:lg p-t_3
										p-t_0:lg p-x_3 w_100 w_30:md"
									>
										{{ setTimeSpan(index) }}
									</div>
									<div
										class="p_3 p-b_0 p-b_3:md p-l_4:md lh_1"
									>
										<strong
											class="font_bold block font-size_up c_primary-n1"
											>{{ presentation.name }}</strong
										>
										<div
											v-for="(author,
											index) in presentation.author"
											:key="'author_' + index"
											class="m-b_3 m-t_2 relative"
										>
											<span
												class="block font-size_down c_black font_medium underline h:undecorated expanded-click-area"
												>{{ author.full_name }}</span
											>
											<span
												class="c_black-8 block font-size_down m-t_2 font_light font_italic lh_1"
												><span
													>{{
														author.location.city
													}},</span
												>
												<span
													v-if="author.location.state"
													>{{
														author.location.state
													}}</span
												>
												<span v-else>{{
													author.location.country
												}}</span>
											</span>
										</div>
										<a
											v-if="
												presentation.attachement
													.length > 0
											"
											:href="presentation.attachement"
											class="link font_n2 c_primary"
											><i
												class="fas fa-file-archive p-r_3"
											></i
											>Download Session Files</a
										>
									</div>
								</div>
							</div>
						</div>
						<div class="flex_auto p-l_5:lg w_30:lg font_n2 font_n1:lg">
							<div class="flex_auto p-x_3">
								<strong
									class="font_bold c_primary-n3 m-t_3:lg inline-block block:lg"
									>Tag Category Name</strong
								>
								<ul
									class="ul_none font_n2 c_black-7 lh_1 inline-block block:lg"
								>
									<li
										class="br-b_1 br_solid:lg br_none br_black-1 p-y_2 inline-block block:lg"
									>
										Tag Name
										<span
											class="display_none:lg br-l_1 br_solid p-r_2 m-l_2 br_black-2"
										></span>
									</li>
								</ul>
							</div>
							<div class="flex_auto p-x_3">
								<strong
									class="font_bold c_primary-n3 m-t_3:lg inline-block block:lg"
									>Tag Category 2 Name</strong
								>
								<ul
									class="ul_none font_n2 c_black-7 lh_1 inline-block block:lg"
								>
									<li
										class="br-b_1 br_solid:lg br_none br_black-1 p-y_2 inline-block block:lg"
									>
										Tag A
										<span
											class="display_none:lg br-l_1 br_solid p-r_2 m-l_2 br_black-2"
										></span>
									</li>									<li
										class="br-b_1 br_solid:lg br_none br_black-1 p-y_2 inline-block block:lg"
									>
										Tag B
										<span
											class="display_none:lg br-l_1 br_solid p-r_2 m-l_2 br_black-2"
										></span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</TransitionExpand>
		</aside>
	</div>
</template>

<script>
import Btn from "../subComponents/Btn";
import Credit from "../subComponents/CreditChiclet";
import TabFlag from "../subComponents/TabFlag";
import TransitionExpand from "../subComponents/TransitionExpand";
import moment from "moment";
import tz from "moment-timezone";
export default {
	props: {
		title: {
			type: String,
			default:
				"801. Core Knowledge in Action: What Everyone Ought To Know About HFpEF",
		},
		description: {
			type: String,
			default:
				"<p>Qui est quibusdam dicta. Maxime alias dolores laudantium sit vel natus voluptas. Quis quisquam et ut. Eveniet non eius. Qui reprehenderit molestias non cum nostrum dolor fugiat.</p>",
		},
		isLive: {
			type: Boolean,
			default: false,
		},
		startDate: { type: Date },
		endDate: { type: Date },
		isPlayable: { type: Boolean, default: false },
		valueCME: { type: Number, default: 1 },
		valueCNE: { type: Number, default: 1 },
		valueCOP: { type: Number, default: 1 },
		valueMOC: { type: Number, default: 1 },
		valueCNErx: { type: Number, default: 0 },
		valueECME: { type: Number, default: 0 },
		valueABPMOCII: { type: Number, default: 0 },
		valueCPE: { type: Number, default: 0 },
		valueIPE: { type: Number, default: 0 },
		valuePA: { type: Number, default: 0 },
		timezone: { type: String, default: "America/New_York" },
		learningPathway: {
			type: String,
			default: "Heart Failure and Cardiomyopathies Pathway",
		},
		channelName: {
			type: String,
			default: "Primary Channel",
		},
		presentations: { type: Array, default: () => [] },
	},
	data() {
		return {
			showValue: true,
			faved: false,
			extendedInfo: false,
			presentations_list: this.presentations,
		};
	},
	components: {
		Credit,
		Btn,
		TabFlag,
		TransitionExpand,
	},
	computed: {
		startTime: function () {
			return moment(this.startDate)
				.tz(this.timezone)
				.format("MMMM DD, h:m a");
		},
		endTime: function () {
			return moment(this.endDate).tz(this.timezone).format("h:m a");
		},
		isBeforeStart: function () {
			let now = Date.now();
			return moment(this.startDate).isAfter(now);
		},
		isAfterEnd: function () {
			let now = Date.now();
			return moment(this.endDate).isBefore(now);
		},
	},
	methods: {
		addMinutes: function (date, minutes) {
			return new Date(date.getTime() + minutes * 60000);
		},
		isValueZero: function (val) {
			return val == 0;
		},
		setTimeSpan: function (i) {
			if (i === 0) {
				this.presentations_list[i].startTime = moment(this.startDate);
				this.presentations_list[i].endTime = moment(
					this.presentations_list[i].startTime
				).add(this.presentations_list[i].duration_minutes, "minutes");
			} else {
				this.presentations_list[i].startTime = this.presentations_list[
					i - 1
				].endTime;
				this.presentations_list[i].endTime = moment(
					this.presentations_list[i].startTime
				).add(this.presentations_list[i].duration_minutes, "minutes");
			}
			return (
				this.presentations_list[i].startTime.format("h:mm a") +
				" - " +
				this.presentations_list[i].endTime.format("h:mm a")
			);
		},
	},
};
</script>

<style scoped>
.rotate-45 {
	transform: rotate(45deg);
}
</style>
