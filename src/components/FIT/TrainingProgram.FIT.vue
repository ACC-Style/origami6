<template>
	<section class="font_0 font_ui br_solid br-b_1 br_shade-4 h:bg_primary-5" :data-id="id">
		<div class="primaryData flex">
			<div
				@click="function(){showshadeInfo = !showshadeInfo}"
				class="flex_shrink flex toggle_handle p_3 br_shade-3 br-r_1 br_solid h:bg_shade-4 self_stretch"
			>
				<i class="far fa-plus-square vertical-align_middle flex_grow-0 self_center"></i>
			</div>
			<StatusIcon
				v-if="statusOfRecord.state != ''"
				class="flex_shrink text_center status_icon"
				style="min-width:2.25rem;"
				:state="statusOfRecord.state"
			></StatusIcon>
						<StatusIcon
				v-if="statusOfRecord.state == ''"
				class="flex_shrink text_center status_icon shadow_n1 opacity_4"
				style="min-width:2.25rem;"
				:state="'shade'"
			></StatusIcon>
			<div class="flex_auto p-l_3 p-y_3 lh_2">
				<span class="fullName">{{fullName}}</span>
				<a class="block email font_n1 c_primary h:underline">{{email}}</a>
				<div class="statusMessage font_n2  " v-if="pendingReview">
					<span class="c_alert">Pending Review</span>
				</div>
				<div class="endDate font_n2 c_primary-n3 " v-else>
					<span class="">End Date:</span>
					{{endDate}}
					<span
						class="c_warning "
						v-if="endDate == '' || endDate == null"
					>Missing End Date</span>
				</div>
				<div class="statusMessage font_n2  " v-if="birthday == ''||birthday == null">

					<span class="c_accent">Missing Birthday</span>
				</div>
			</div>

			<div class="flex_shrink actions p-r_3 p-y_2 text_right self_center m-r_4">
				<div class="flex_inline p_2 br_radius bg_shade-4 shadow_n2">
					<Btn
						class="br_radius"
						:size="'medium'"
						:state="'error'"
						:icon="true"
						@click="$emit('removeFIT', id)"
					>Remove</Btn>
				</div>
			</div>
		</div>
		<div
			class="shadeData br_solid p_4 p-y_3 br-t_1 br_shade-4 shadow_n1 texture_light"
			v-if="showshadeInfo"
		>
			<div class="flex">
				<addressBlock class="flex_auto" v-bind="address"></addressBlock>
			</div>
			<div class="flex font_n1">
				<div class="birthday flex_auto">
					<strong>Birthday:</strong>
					{{birthday}}
					<span class="c_accent " v-if="birthday == '' || birthday == null">Missing Birthday</span>
				</div>
				<div class="endDate flex_auto">
					<strong>End Date:</strong>
					
					<span v-if="pendingReview" class="c_alert">
						<i class="far fa-lock"/> locked till approved
					</span>
					<span v-else>
						{{endDate}}
						<span class="c_warning " v-if="endDate == '' || endDate == null">Missing End Date</span>
					</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Btn from "../subComponents/Btn";
import AddressBlock from "../subComponents/AddressBlock";
import StatusIcon from "../subComponents/StatefullIcon";

export default {
	name: "FIT",
	components: {
		Btn,
		AddressBlock,
		StatusIcon
	},
	props: {
		id: {
			type: String,
			default: 0
		},
		fullName: {
			type: String,
			default: "Jacob Micheals, PHD, FACC"
		},
		endDate: {
			type: String,
			default: "04/04/2000"
		},
		email: {
			type: String,
			default: "email@abc.com"
		},

		birthday: {
			type: String,
			default: "10/22/1958"
		},
		address: {
			type: Object,
			default: function() {
				return { institution: "missing" };
			}
		},
		pendingReview:{type:Boolean, defualt:true}
	},
	methods: {
		updatedBirthday() {
			this.$emit("update:Brithday");
		},
		updateEndDate() {
			this.$emit("update:endDate");
		}
	},
	computed: {
		statusOfRecord() {
			let status = { state: "", message: "" };
			if (this.birthday == "" || this.birthday == null) {
				status.state = "accent";
				status.message = "missingBirthday";
			}
			if (this.endDate == "" || this.endDate == null) {
				status.state = "warning";
				status.message = "missingEndDate";
			}
			if(this.pendingReview){
				status.state = "error";
				status.message = "pendingReview";
			}
			return status;
		}
	},
	data() {
		return {
			showshadeInfo: false
		};
	}
};
</script>

<style lang="scss" scoped>
</style>