<template>
	<div
		class="flex font_ui br_solid br-b_1 br_shade-4 h:bg_primary-5"
		@click="onToggle"
	>
		<div
			class="flex_shrink flex toggle_handle p_3 br_shade-3 br-r_1 br_solid h:bg_shade-4 self_stretch"
		>
			<i
				class="far vertical-align_middle flex_grow-0 self_center"
				:class="[isSelected ?'fa-square' : 'fa-check-square']"
			></i>
		</div>
		<div class="flex_auto p-y_2 p-x_4">
			<div class="font_0">{{email}}</div>
			<div class="font_n2 c_primary-n3">
				<strong>Invitation Sent</strong>
				{{ dateOfRequest | dateStrAbv }}
			</div>
		</div>
		<div class="flex_shrink m-l_auto self_center">
			<div class="flex p_2 br_radius bg_shade-4 shadow_n2">
				<div class="flex_shrink self_center p-x_1">
					<Btn
						:state="'secondary'"
						class="m-r_2"
						:corners="'radius'"
						:icon="false"
						:size="'small'"
						@click="onResendRequest()"
					>Resend</Btn>
				</div>
				<div class="flex_shrink self_center">
					<Btn
						:state="'alert'"
						:corners="'radius'"
						class=""
						:icon="true"
						:size="'small'"
						@click="onCancelRequest()"
					><i class="far fa-times"></i></Btn>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Btn from "../subComponents/Btn";


export default {
	name: "FitRequest",
	components: { Btn },
	props: {
		id:{type: [Number,String],default:null},
		email: {
			type: String,
			default: "no.one@fakeemail.com"
		},
		dateOfRequest: {
			type: [Number,String, Date],
			default: ""
		}
	},
	methods: {
		onToggle(){
			this.isSelected = !this.isSelected;
			if(this.isSelected ){
				this.$emit("onSelected", this.id);
			}
		},
		onSelected() {
			this.$emit("onSelected", this.id);
		},
		onCancelRequest() {
			this.$emit("onCancelRequest", this.id);
		},
		onResendRequest() {
			this.$emit("onResendRequest", this.id);
		},
		convertToDate(date){
			return (Object.prototype.toString.call(date) === "[object Date]")? date: new Date(Number(date));
		}
	},
	computed: {
		dateOfRequestDate(){
			return this.convertToDate(this.dateOfRequest);
		},
	},
	data() {
		return {
			isSelected: "false",
			dateString: this.dateToString(this.dateOfRequest,'monDayYear')
		};
	}
};
</script>

<style lang="scss" scoped>
</style>