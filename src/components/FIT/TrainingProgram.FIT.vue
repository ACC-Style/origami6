<template>
	<section
		class="font_1 font_ui br_solid br-b_1 br_shade-4 h:bg_primary-5"
		:data-id="id"
	>
		<div class="primaryData flex">
			<div
				@click="onToggleExpand"
				class="flex_shrink flex toggle_handle p_3 br_shade-3 br-r_1 br_solid h:bg_shade-4 self_stretch"
			>
				<i
					class="far fa-plus-square vertical-align_middle flex_grow-0 self_center"
				></i>
			</div>
			<StatusIcon
				v-if="statusOfRecord.state == ''"
				class="flex_shrink text_center status_icon shadow_n1 opacity_4"
				style="min-width: 2.25rem"
				:state="'secondary'"
			></StatusIcon>
			<StatusIcon
				v-if="statusOfRecord.state != ''"
				class="flex_shrink text_center status_icon"
				style="min-width: 2.25rem"
				:state="statusOfRecord.state"
			></StatusIcon>
			<div class="flex_auto p-l_3 p-y_3 lh_2">
				<span class="fullName font-size_up">{{ fullName }}</span>
				<a
					class="inline-block link email font_n1 c_primary h:undecorated"
					:href="'mailTo:' + email"
					>{{ email }}</a
				>
				<div class="statusMessage font_n2" v-show="pendingReview">
					<span class="c_alert">Pending Review</span>
				</div>
				<div
					class="endDate font_n2 c_primary-n3 h:underline"
					@click="onUpdateEndDate(id)"
				>
					<span class="">End Date:</span>
					<span :class="{ c_warning: !endDate }">
						{{ endDateText }}
					</span>
					<i
						v-show="!endDate"
						class="fas fa-pencil c_black-5 h:c_black-8"
					></i>
				</div>
				<div
					class="statusMessage font_n2 h:underline"
					@click="onUpdateBirthday(id)"
				>
					<span class="">Birthday:</span>
					<span :class="{ c_accent: !birthday }">{{
						birthdayText
					}}</span>
					<i
						v-show="!birthday"
						class="fas fa-pencil c_black-5 h:c_black-8"
					></i>
				</div>
			</div>

			<div
				class="flex_shrink actions p-r_3 p-y_2 text_right self_center m-r_4"
			>
				<div class="flex_inline p_2 br_radius bg_black-2 shadow_n1">
					<Btn
						:size="'small'"
						:state="'alert'"
						:shadow="false"
						@onClick="onRemove(id)"
						><i class="fas fa-times"></i
					></Btn>
				</div>
			</div>
		</div>
		<TransitionExpand>
			<div
				class="shadeData br_solid p-x_4 p-y_3 br-t_1 br_shade-4 shadow_n1 bg_black-_05 flex justify_between"
				v-if="isExapanded"
			>
				<div class="flex flex_column flex_auto w_20">
					<div v-show="pendingReview" class="c_alert flex_shrink h:underline">
						<i class="fas fa-times-square" /> locked till approved
					</div>
					<div v-show="!endDate" class="c_warning flex_shrink h:underline" @click="onUpdateEndDate(id)">
						<i class="fas fa-exclamation-triangle" /> {{ endDateText }}
					</div>
					<div v-show="!birthday" class="c_accent flex_shrink h:underline" @click="onUpdateBirthday(id)">
						<i class="fas fa-info-square" /> {{ birthdayText }}
					</div>
					<addressBlock
						class="flex_auto"
						v-bind="address"
						v-if="address != null"
					></addressBlock>
				</div>
				<div class="flex flex_column flex_auto justify_start font_n1 w_10 lh_3">
					
					<div v-show="endDate"
						class="endDate h:underline"
						@click="onUpdateEndDate(id)"
					>
						<strong>End Date:</strong>
						<span :class="{ c_warning: !endDate }">
							{{ endDateText }} </span
						><i
							class="p-l_2 fas fa-pencil c_black-5 h:c_black-8"
						></i>
					</div>
					<div v-show="birthday"
						class="birthday h:underline"
						@click="onUpdateBirthday(id)"
					>
						<strong>Birthday:</strong>
						<span :class="{ c_accent: !birthday }">{{
							birthdayText
						}}</span
						><i
							class="p-l_2 fas fa-pencil c_black-5 h:c_black-8"
						></i>
					</div>
				</div>
			</div>
		</TransitionExpand>
	</section>
</template>

<script>
import Btn from "../subComponents/Btn";
import AddressBlock from "../subComponents/AddressBlock";
import StatusIcon from "../subComponents/StateIcon";
import TransitionExpand from "../subComponents/TransitionExpand";
import moment from "moment";
export default {
	name: "FIT",
	components: {
		Btn,
		AddressBlock,
		StatusIcon,
		TransitionExpand
	},
	props: {
		id: {
			type: [String, Number],
			default: null
		},
		fullName: {
			type: String,
			default: "Jacob Micheals, PHD, FACC"
		},
		endDate: {
			type: [Date, String],
			default: undefined
		},
		email: {
			type: String,
			default: "email@abc.com"
		},

		birthday: {
			type: [Date, String],
			default: undefined
		},
		address: {
			type: Object,
			default: null
		},
		pendingReview: {
			type: Boolean,
			defualt: true
		}
	},
	methods: {
		onUpdateBirthday() {
			this.$emit("onUpdateBrithday", this.id);
		},
		onUpdateEndDate() {
			this.$emit("onUpdateEndDate", this.id);
		},
		onRemove() {
			this.$emit("onRemove", this.id)

		},
		onToggleExpand() {
			this.isExapanded = !this.isExapanded
		},

	},
	data() {
		return {
			isExapanded: false
		};
	},
	computed: {
		endDateText() {
			if (this.endDate) {
				return moment(this.endDate).format("MMM D, YYYY");
			} else {
				return "Missing End Date";
			}

		},
		birthdayText() {
			if (this.birthday) {
				return moment(this.birthday).format("MMM D, YYYY");
			} else {
				return "Missing Birthday";
			}
		},
		statusOfRecord() {
			let status = { state: "", message: "" };
			if (!this.birthday) {
				status.state = "accent";
				status.message = "missingBirthday";
			}
			if (!this.endDate) {
				status.state = "warning";
				status.message = "missingEndDate";
			}
			if (this.pendingReview) {
				status.state = "alert";
				status.message = "pendingReview";
			}
			return status;
		}
	}
};
</script>

<style lang="scss" scoped>
</style>