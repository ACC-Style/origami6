<template>
	<div
		class="flex font_ui br_solid br-b_1 br_shade-4"

	>
		<div
			class="flex_shrink flex toggle_handle p_3 br_shade-3 br-r_1 br_solid h:bg_shade-4 self_stretch"
		>
			<i
				class="far vertical-align_middle flex_grow-0 self_center fa-square opacity_5"
			></i>
		</div>
		<div class="flex_auto p-y_2 p-x_4">
			<div class="font_0 lorem-loader w_30">&nbsp;<i class="fas fa-spin fa-spinner-third"></i></div>
			<div class="font_n2 c_primary-n3 m-t_2">
				<strong class="lorem-loader inline-block w_20 m-r_3">&nbsp;</strong>
                
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
                        :isDisabled="true"
					>Resend</Btn>
				</div>
				<div class="flex_shrink self_center">
					<Btn
						:state="'alert'"
						:corners="'radius'"
						class=""
						:icon="true"
						:size="'small'"
                        :isDisabled="true"
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
			type: [Number,String],
			default: ""
		}
	},
	methods: {
		
	},
	data() {
        return{}
	}
};
</script>

<style lang="scss" scoped>
</style>