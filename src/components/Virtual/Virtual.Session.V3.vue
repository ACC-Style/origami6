<template>
	<div class="p_4:md font_ui relative br-b_1 br_solid br_black-3">
		<header
			class="
				br-b_1
				br_solid br_black-1
				m-b_2
				p-b_2:md
				flex flex_column
				relative
			"
		>
			<div
				class="
					time
					font_n3
					font_n1:lg
					lh_1
					block
					clear_fix
					flex
					br_solid br_black-3
					br-t_1
				"
			>
				<div
					class="
						p_2
						m-r_3
						p-t_3
						flex_shrink
						font_xbold
						c_black-7
						font-size_up
						m-t_n1
						w_100
					"
				>
					<span
						class="
							c_warning
							p_2
							p-x_3
							m-t_n3
							m-b_3
							vertical-align_top
							m-l_n2
							m-r_2
							bg_warning
							c_white
							block
							inline-block:lg
							w_100
							w_auto:lg
							text_center
							text_left:md
						"
						v-show="
							isLive &&
							isPlayable &&
							!isBeforeStart &&
							!isAfterEnd
						"
						><i class="fas fa-video p-r_3"></i> In Progress</span
					>
					<span
						class="
							c_warning
							p-r_3
							block
							inline-block:md
							p-b_2
							p-b_0:md
						"
						v-show="!isPlayable"
						>(Coming Soon to On Demand)</span
					>
					{{ startTime }} - {{ endTime }}
					<span
						v-if="showCategoryLabel"
						class="
							p-t_2
							font-size_down
							font_bold
							c_primary-1
							text_left
							display_none:md
							inline-block
							w_100
						"
						>{{ categoryLabel }}</span
					>
				</div>
				<div
					class="
						m-t_n1
						flex_column
						absolute
						t_0
						r_0
						flex_row-reverse:md
						flex flex_shrink
						self_start
						m-l_auto
					"
				>
					<TabFlag
						v-if="isLive && isPlayable"
						class=""
						:type="''"
						:text="'in progress'"
						:icon="'fa-video'"
						:color="'bg_warning'"
					/>
					<span
						v-if="showCategoryLabel"
						class="
							p_2
							p-x_3
							m-r_1
							flex_shrink
							font_bold
							p-x_3
							bg_primary
							c_white
							display_none
							inline-block:md
						"
						>{{ categoryLabel }}</span
					>
				</div>
			</div>
			<div
				class="
					flex flex_inline
					w_100
					m-t_3
					flex_column
					flex_row:md
					gap-y_3
					p-y_0:md
					p-t_3
					p-b_4
				"
			>
				<h2
					class="
						flex_auto
						lh_1
						font_3 font_display
						m-b_0
						c_primary
						max-w_40
						m-t_0
					"
				>
					<span class="font_accent font_bold p-r_2"
						>{{ SessionNumber }}.</span
					>{{ title }}
				</h2>
				<aside
					class="
						actions
						relative
						flex_none
						gap-x_2
						self_end
						m_auto
						m-r_0:md
					"
				>
					<div class="flex flex_inline flex_wrap gap-x_2 gap-y_3">
						<Btn
							@onClick="faved = !faved"
							:shadow="false"
							:state="favedState"
							><i class="fas fa-heart"></i
						></Btn>
						<Btn
							class="m-l_2"
							v-show="isBeforeStart"
							:state="'secondary'"
							:shadow="false"
							><i class="fas fa-calendar-alt"></i></Btn
						>
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
					</div>
<div class="flex_column flex gap-y_3 p-y_3">					<Btn
							class="w_100"
							v-if="useModal"
							:shadow="false"
							:size="'small'"
							:state="'secondary'"
							@onClick="detailModalVisible=true"
							> Show Details </Btn
						>
						<Btn
							class="w_100"
							:shadow="false"
							:size="'tiny'"
							:state="'secondary'"
							:isDisabled="isBeforeStart"
							><i class="fas fa-file-archive p-r_3"></i> Download
							Files</Btn
						></div>
				</aside>
			</div>
		</header>

		<main class="flex flex_column flex_row:lg">
			<div
				class="
					flex_auto
					reading-typography
					font_copy
					w_70:lg
					c_black-8
					lh_1
					p_4
					p-l_0
					p-b_0
					display_none
					block:md
					max-w_65
				"
				v-html="description"
			></div>
		</main>
		<aside
			class="
				font_n3
				font_n1:md
				font_0:lg
				flex flex_column
				flex_row:md
				justify_start
				gap-x_2
				gap-y_3
				flex_wrap
			"
		>
			<ul
				v-if="credits != null"
				class="flex flex_inline flex_wrap gap-x_2 gap-y_2 ul_none p-r_4"
			>
				<li>
					<strong
						class="font_bold c_primary-1 m-t_3 self_center:md p-r_3"
						>Credits</strong
					>
				</li>
				<li v-for="(credit, index) in credits" :key="'credit' + index">
					<Credit
						:type="credit.type"
						:styleCode="credit.styleCode"
						:value="credit.value"
						:showValue="showValue"
						:isDisabled="isValueZero(credit.value)"
						:size="'tiny'"
					/>
				</li>
				<li
					class="flex_auto nowrap p-r_4"
					v-for="(value, propertyName, index) in categoryTags"
					:key="'CatTags_' + index"
					:class="{'m-l_3': index < 1}"
				>
					<strong class="font_bold c_primary-1">{{
						propertyName
					}}</strong>
					<span class="">{{ value }}</span>
				</li>
			</ul>
			<div class="flex flex_inline flex_wrap gap-x_2 gap-y_2">
			</div>
		</aside>
		<aside class="m-b_0:lg m-b_3:md m-b_2 m-t_2 m-t_2:md" v-if="!useModal">
			<div
				class="
					block
					w_100
					clear_both
					br-t_2
					br_primary-3 br_dashed
					m-t_2
					p-t_3
				"
			>
				<div
					class="
						flex_auto
						reading-typography
						font_copy
						w_70:lg
						c_black-8
						lh_1
						font_n1
						display_none:md
						block
					"
					v-html="description"
				></div>
				<div class="flex flex_row:lg flex_column">
					<div
						class="
							br_black-_05 br_solid br_1
							flex_auto
							w_70:lg
							font_0
						"
					>
						<div
							v-for="(presentation, index) in presentations_list"
							:key="index"
							class="w_100"
						>
							<div
								v-if="presentation.duration_minutes <= 0"
								class="bg_primary-5"
							>
								<div class="p_3 p-b_0 p-b_3:md p-l_4:md lh_1">
									<span class="display_none">{{
										setTimeSpan(index)
									}}</span>
									<div class="font_bold block c_black-8">
										{{ presentation.name }}
									</div>
									<div class="flex_inline flex_wrap flex">
										<div
											v-for="(
												author, index
											) in presentation.author"
											:key="'author_' + index"
											class="
												m-b_3
												m-t_2
												flex_none:lg
												flex_auto:md
												w_30:lg
												w_auto:md
												w_100
												flex_none
												relative
											"
										>
											<span
												class="
													block
													font-size_down
													c_black
													font_medium
													underline
													h:undecorated
													expanded-click-area
												"
												>{{ author.full_name }}</span
											>
											<span
												class="
													c_black-8
													block
													font-size_down
													m-t_2
													font_light font_italic
													lh_1
												"
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
									</div>
									<!-- <a
										v-if="
											presentation.attachement.length > 0
										"
										:href="presentation.attachement"
										class="link font_n2 c_primary"
										><i
											class="fas fa-file-archive p-r_3"
										></i
										>Download Session Files</a
									> -->
								</div>
							</div>
							<div
								v-else
								class="
									bg_black-1
									flex flex_column
									flex_row:md
									justify_start
									m-t_3
								"
							>
								<div
									class="
										br-r_1
										br_dotted:md
										br_none br_primary
										c_accent-n4
										flex_none
										font_0:md
										font_1:lg
										font_n2 font_xbold
										p-r_4:lg
										p-t_3
										p-t_0:lg
										p-x_3
										w_100
										w_30:md
									"
								>
									{{ setTimeSpan(index) }}
								</div>
								<div class="p_3 p-b_0 p-b_3:md p-l_4:md lh_1">
									<strong
										class="
											font_bold
											block
											font-size_up
											c_primary-n1
										"
										>{{ presentation.name }}</strong
									>
									<div
										v-for="(
											author, index
										) in presentation.author"
										:key="'author_' + index"
										class="m-b_3 m-t_2 relative"
									>
										<span
											class="
												block
												font-size_down
												c_black
												font_medium
												underline
												h:undecorated
												expanded-click-area
											"
											>{{ author.full_name }}</span
										>
										<span
											class="
												c_black-8
												block
												font-size_down
												m-t_2
												font_light font_italic
												lh_1
											"
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
									<!-- <a
										v-if="
											presentation.attachement.length > 0
										"
										:href="presentation.attachement"
										class="link font_n2 c_primary"
										><i
											class="fas fa-file-archive p-r_3"
										></i
										>Download Session Files</a
									> -->
								</div>
							</div>
						</div>
					</div>
					<div
						v-if="decoratorTags != null"
						class="
							flex_auto
							p-l_5:lg
							w_30:lg
							font_n2
							font_n1:lg
							flex_column flex
							justify_start
						"
					>
						<ul
							v-for="(
								value, propertyName, index
							) in decoratorTags"
							:key="'DecorTags_' + index"
							class="
								ul_none
								font_n2
								c_black-7
								lh_1
								flex flex_row flex_wrap
								gap-x_2
								gap-y_3 p-b_4
							"
						>
							<li class="w_100:md">
								<strong
									class="
										font_bold
										c_primary-n3
										m-t_3:lg
										inline-block
										block:lg
									"
									>{{ propertyName }}</strong
								>
							</li>
							<li
								v-for="(tag, index) in value"
								:key="propertyName + '_' + index"
								class="flex_shrink"
							>
								<a
									:class="{
										'br-l_1 br_solid p-l_2 m-l_2 br_black-4':
											index > 0,
									}"
									class="
										flex_auto
										c_secondary
										h:c_secondary-n3
									"
									:href="'SEARCH?Tag=' + tag"
									>{{ tag }}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</aside>
		<div if="useModal">
		<Modal id="DetailModal" v-if="detailModalVisible"  @onClose="detailModalVisible = false" class="bg_black-1" :cancelText="'Close'" :maxWidthClasses="'max-w_50'"> 
    <template v-slot:header><span><span class="font_accent font_bold p-r_2"
						>{{ SessionNumber }}.</span
					>{{ title }}</span></template>
			<div
				class="
					block
					w_100
					clear_both
					br-t_2
					br_primary-3 br_dashed
					m-t_2
					p-t_3
				"
			>
				<div
					class="
						flex_auto
						reading-typography
						font_copy
						w_70:lg
						c_black-8
						lh_1
						font_n1
						display_none:md
						block
					"
					v-html="description"
				></div>
				<div class="flex flex_row:lg flex_column">
					<div
						class="
							br_black-_05 br_solid br_1
							flex_auto
							w_70:lg
							font_0
						"
					>
						<div
							v-for="(presentation, index) in presentations_list"
							:key="index"
							class="w_100"
						>
							<div
								v-if="presentation.duration_minutes <= 0"
								class="bg_primary-5"
							>
								<div class="p_3 p-b_0 p-b_3:md p-l_4:md lh_1">
									<span class="display_none">{{
										setTimeSpan(index)
									}}</span>
									<div class="font_bold block c_black-8">
										{{ presentation.name }}
									</div>
									<div class="flex_inline flex_wrap flex">
										<div
											v-for="(
												author, index
											) in presentation.author"
											:key="'author_' + index"
											class="
												m-b_3
												m-t_2
												flex_none:lg
												flex_auto:md
												w_30:lg
												w_auto:md
												w_100
												flex_none
												relative
											"
										>
											<span
												class="
													block
													font-size_down
													c_black
													font_medium
													underline
													h:undecorated
													expanded-click-area
												"
												>{{ author.full_name }}</span
											>
											<span
												class="
													c_black-8
													block
													font-size_down
													m-t_2
													font_light font_italic
													lh_1
												"
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
									</div>
									<!-- <a
										v-if="
											presentation.attachement.length > 0
										"
										:href="presentation.attachement"
										class="link font_n2 c_primary"
										><i
											class="fas fa-file-archive p-r_3"
										></i
										>Download Session Files</a
									> -->
								</div>
							</div>
							<div
								v-else
								class="
									bg_black-1
									flex flex_column
									flex_row:md
									justify_start
									m-t_3
								"
							>
								<div
									class="
										br-r_1
										br_dotted:md
										br_none br_primary
										c_accent-n4
										flex_none
										font_0:md
										font_1:lg
										font_n2 font_xbold
										p-r_4:lg
										p-t_3
										p-t_0:lg
										p-x_3
										w_100
										w_30:md
									"
								>
									{{ setTimeSpan(index) }}
								</div>
								<div class="p_3 p-b_0 p-b_3:md p-l_4:md lh_1">
									<strong
										class="
											font_bold
											block
											font-size_up
											c_primary-n1
										"
										>{{ presentation.name }}</strong
									>
									<div
										v-for="(
											author, index
										) in presentation.author"
										:key="'author_' + index"
										class="m-b_3 m-t_2 relative"
									>
										<span
											class="
												block
												font-size_down
												c_black
												font_medium
												underline
												h:undecorated
												expanded-click-area
											"
											>{{ author.full_name }}</span
										>
										<span
											class="
												c_black-8
												block
												font-size_down
												m-t_2
												font_light font_italic
												lh_1
											"
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
									<!-- <a
										v-if="
											presentation.attachement.length > 0
										"
										:href="presentation.attachement"
										class="link font_n2 c_primary"
										><i
											class="fas fa-file-archive p-r_3"
										></i
										>Download Session Files</a
									> -->
								</div>
							</div>
						</div>
					</div>
					<div
						v-if="decoratorTags != null"
						class="
							flex_auto
							p-l_5:lg
							w_30:lg
							font_n2
							font_n1:lg
							flex_column flex
							justify_start
						"
					>
						<ul
							v-for="(
								value, propertyName, index
							) in decoratorTags"
							:key="'DecorTags_' + index"
							class="
								ul_none
								font_n2
								c_black-7
								lh_1
								flex flex_row flex_wrap
								gap-x_2
								gap-y_3 p-b_4
							"
						>
							<li class="w_100:md">
								<strong
									class="
										font_bold
										c_primary-n3
										m-t_3:lg
										inline-block
										block:lg
									"
									>{{ propertyName }}</strong
								>
							</li>
							<li
								v-for="(tag, index) in value"
								:key="propertyName + '_' + index"
								class="flex_shrink"
							>
								<a
									:class="{
										'br-l_1 br_solid p-l_2 m-l_2 br_black-4':
											index > 0,
									}"
									class="
										flex_auto
										c_secondary
										h:c_secondary-n3
									"
									:href="'SEARCH?Tag=' + tag"
									>{{ tag }}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Modal>
		</div>
	</div>
</template>

<script>
import Btn from "../subComponents/Btn";
import Credit from "../subComponents/CreditChiclet";
import TabFlag from "../subComponents/TabFlag";
import Modal from "../subComponents/Modal";
import TransitionExpand from "../subComponents/TransitionExpand";
import moment from "moment";
import tz from "moment-timezone";
export default {
	props: {
		useModal: { type: Boolean, default: true },
		detailModalVisible: { type: Boolean, default: false },
		showCategoryLabel: {
			type: Boolean,
			default: false
		},
		categoryLabel: {
			type: String,
			default: "Category"
		},
		categoryTags: {
			type: Object,
			default: () => null
		},
		decoratorTags: {
			type: Object,
			default: () => null
		},
		SessionNumber: {
			type: Number,
			default: 801
		},
		title: {
			type: String,
			default:
				"Core Knowledge in Action: What Everyone Ought To Know About HFpEF",
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
		credits: { type: Array, default: () => null },
		valueCME: { type: Number, default: null },
		valueCNE: { type: Number, default: null },
		valueCOP: { type: Number, default: null },
		valueMOC: { type: Number, default: null },
		valueCNErx: { type: Number, default: null },
		valueECME: { type: Number, default: null },
		valueABPMOCII: { type: Number, default: null },
		valueCPE: { type: Number, default: null },
		valueIPE: { type: Number, default: null },
		valuePA: { type: Number, default: null },
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
		showCreditValue: { type: Boolean, default: true },
	},
	data() {
		return {

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
		Modal
	},
	computed: {
		startTime: function () {
			return moment(this.startDate)
				.tz(this.timezone)
				.format("dddd MMMM DD, h:m a");
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
		favedState: function () {
			return this.faved ? "alert" : "secondary";
		},
	},
	methods: {
		addMinutes: function (date, minutes) {
			return new Date(date.getTime() + minutes * 60000);
		},
		isValueZero: function (val) {
			return val == 0;
		},
		isCreditValueShown: function (type) {
			return (type = "COP") ? false : this.showCreditValue;
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
