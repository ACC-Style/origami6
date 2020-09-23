<template>
	<section class="m-b_5 m-t_4">
		<div class="flex font_display p_3 flex_column flex_row:md m-t_4 m-b_3">
			<div class="flex_auto font_5 font_light">
				{{contract.nickname}}
				<i class="c_primary fa-pencil far fas font_n1 vertical-align_middle"></i>
			</div>
			<div class="flex_shrink c_primary-n1 lh_0 text_right:md text_left m-t_n3:md m-b_4:sm">
				<strong class="font_n2 opacity_5 uppercase lh_0 display_none block:md">Contract #</strong>
				<span class="font_2 font_3:md block">{{ contract.id }}</span>
			</div>
		</div>
		<div class="br_solid br_1 br_black-2 font_ui">
			<div class="flex flex_column-reverse flex_row:md p-y_3">
				<div class="flex flex_auto p-y_3 m-l_4 font_n1 m-t_3 m-t_0:md">
					<div class="flex_auto text_right text_left:md">
						<div class="p-x_3">
							<strong class="p-r_2">Amount:</strong>
							{{contract.amount}}
						</div>
						<div class="p-x_3">
							<strong class="p-r_2">Purchased:</strong>
							{{ contract.date_purchase}}
						</div>
					</div>
					<div class="flex_auto">
						<div class="p-x_3">
							<strong class="p-r_2">Term:</strong>
							{{ contract.term}} years
						</div>
						<div class="p-x_3">
							<strong class="p-r_2">Expires:</strong>
							{{ contract.date_expiration}}
						</div>
					</div>
				</div>
				<div
					class="flex_auto flex m-t_3 m-t_0:md font_2 c_shade-n5 shadow_1 m-x_4 bg_shade-5 br_1 br_solid br_black-2 m-l_auto"
				>
					<div class="flex_auto p-l_5 p-r_4 p-b_3 text_right">
						<span class="block text_right">{{contract.date_lastPayment}}</span>
						<strong class="font_n2 opacity_5 uppercase lh_0 block text_right">Last Payment</strong>
					</div>
					<StatefullIcon class="font_1 shadow_n1 flex_none m-l_4" :state="'success'" />
				</div>
				<div
					class="flex_auto flex m-t_3 m-t_0:md font_2 c_shade-n5 shadow_1 m-x_4 bg_shade-5 br_1 br_solid br_black-2"
				>
					<div class="flex_auto p-l_5 p-r_4 p-b_3 text_right">
						<span class="block text_right">{{contract.date_paymentDue}}</span>
						<strong class="font_n2 opacity_5 uppercase lh_0 block text_right">Next Payment</strong>
					</div>
					<StatefullIcon class="font_1 shadow_n1 flex_none" :state="'info'" />
				</div>
			</div>
			<div class="br_1 br_black-2 br_solid">
				<ul class="ul_none m-x_n1 m-b_n1 texture_light shadow_n1">
					<transition v-for="(bundle) in contract.bundles" :key="bundle.id">
						<BundleOverview v-bind="bundle" />
					</transition>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
import StatefullIcon from "../../../subComponents/StatefullIcon.vue";
import BundleOverview from "../Bundle/Seat.Bundle.Overview.vue";

export default {
	components: {
		StatefullIcon,BundleOverview

	},
	data() {
		return {};
	},
	props: {
		contract: {
			type: Object,

		}

	}
};
</script>

<style lang="scss" scoped>
</style>