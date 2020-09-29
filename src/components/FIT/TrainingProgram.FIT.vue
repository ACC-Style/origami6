<template>
	<section class="font_0 font_ui br_solid br-b_1 br_shade-4 h:bg_primary-5" :data-id="id">
		<div class="primaryData flex">
			<div
				@click="onToggleExpand"
				class="flex_shrink flex toggle_handle p_3 br_shade-3 br-r_1 br_solid h:bg_shade-4 self_stretch"
			>
				<i class="far fa-plus-square vertical-align_middle flex_grow-0 self_center"></i>
			</div>
			<StatusIcon
				v-if="statusOfRecord.state != ''"
				class="flex_shrink text_center status_icon"
				style="min-width:2.25rem;"
				:state="'alert'"
			></StatusIcon>
			<StatusIcon
				v-if="statusOfRecord.state == ''"
				class="flex_shrink text_center status_icon shadow_n1 opacity_4"
				style="min-width:2.25rem;"
				:state="'secondary'"
			></StatusIcon>
			<div class="flex_auto p-l_3 p-y_3 lh_2">
				<span class="fullName">{{fullName}}</span>
				<a class="block email font_n1 c_primary h:underline">{{email}}</a>
				<div class="statusMessage font_n2  " v-if="pendingReview">
					<span class="c_alert">Pending Review</span>
				</div>
				<div class="endDate font_n2 c_primary-n3 " v-else  @click="onUpdateEndDate(id)">
					<span class="">End Date:</span>
					{{endDate}}
					<span
						class="c_warning "
						v-if="endDate == '' || endDate == null"
					>Missing End Date</span>
				</div>
				<div class="statusMessage font_n2  " v-if="birthday == ''|| birthday == null" @click="onUpdateBirthday(id)">
					<span class="c_accent">Missing Birthday</span>
				</div>
			</div>

			<div class="flex_shrink actions p-r_3 p-y_2 text_right self_center m-r_4">
				<div class="flex_inline p_2 br_radius bg_shade-4 shadow_n2">
					<Btn
						class="br_radius"
						:size="'medium'"
						:state="'alert'"		
						@onClick="onRemove(id)"
					>Remove</Btn>
				</div>
			</div>
		</div>
		<TransitionExpand>
			<div
				class="shadeData br_solid p_4 p-y_3 br-t_1 br_shade-4 shadow_n1 texture_light"
				v-if="isExapanded"
			>
				<div class="flex">
					<addressBlock class="flex_auto" v-bind="address" v-if="address != null"></addressBlock>
				</div>
				<div class="flex font_n1">
					<div class="birthday flex_auto">
						<strong>Birthday:</strong>
						{{ timeConverter(birthday) }}
						<span class="c_accent " v-if="birthday == '' || birthday == null">Missing Birthday</span>
					</div>
					<div class="endDate flex_auto">
						<strong>End Date:</strong>
						
						<span v-if="pendingReview" class="c_alert">
							<i class="far fa-lock"/> locked till approved
						</span>
						<span v-else>
							{{ timeConverter(endDate)  }}
							<span class="c_warning " v-if="endDate == '' || endDate == null">Missing End Date</span>
						</span>
					</div>
				</div>
			</div>
		</TransitionExpand>
	</section>
</template>

<script>
import Btn from "../subComponents/Btn";
import AddressBlock from "../subComponents/AddressBlock";
import StatusIcon from "../subComponents/StatefullIcon";
import TransitionExpand from "../subComponents/TransitionExpand";

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
			type: Number,
			default: null
		},
		fullName: {
			type: String,
			default: "Jacob Micheals, PHD, FACC"
		},
		endDate: {
			type: Number,
			default: null
		},
		email: {
			type: String,
			default: "email@abc.com"
		},

		birthday: {
			type: Number,
			default: null
		},
		address: {
			type: Object,
			default: null
		},
		pendingReview:{
			type:Boolean,
			defualt:true
			}
	},
	methods: {
		onUpdateBirthday() {
			this.$emit("onUpdateBrithday",id);
		},
		onUpdateEndDate() {
			this.$emit("onUpdateEndDate",id);
		},
		onRemove(id){
			this.$emit("onRemove", id)

		},
		onToggleExpand(){
			this.isExapanded = !this.isExapanded
		},
		timeConverter(UNIX_timestamp){
			var a = new Date(UNIX_timestamp);
			var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
			var year = a.getFullYear();
			var month = months[a.getMonth()];
			var date = a.getDate();
			var time = date + ' ' + month + ' ' + year;
			return time;
		}
	},
	computed: {
		statusOfRecord() {
			let status = { state: "", message: "" };
			if (this.birthday == "" || this.birthday == null) {
				status.state = "info";
				status.message = "missingBirthday";
			}
			if (this.endDate == "" || this.endDate == null) {
				status.state = "warning";
				status.message = "missingEndDate";
			}
			if(this.pendingReview){
				status.state = "alert";
				status.message = "pendingReview";
			}
			return status;
		}
	},
	data() {
		return {
			isExapanded: false
		};
	}
};
</script>

<style lang="scss" scoped>
</style>