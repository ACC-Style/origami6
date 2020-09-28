<template>
	<HoverContainer>
		<div class="flex flex_row:md flex_column p_3">
			<div class="flex_auto w_50 flex flex_column justify_start justify_between:lg flex_row:lg">
				<div class="flex_shrink m-l_3">
				<h3 class="font_4 font_display m-t_2 lh_1 m-b_0">{{ name }} <a href="" class="c_primary h:c_primary-n3 p_2 font_1"><i class="fas fa-pencil"></i></a></h3>
				<span class="p_2 p-x_3 bg_black-1 c_black-7 br_radius font_n3" @click="adminToggle = !adminToggle"><i class="fa fa-user-crown font-size_down p-x_2"></i> ADMINS <span class="c_black bg_white br_round p-x_3 font_n3 font_bold">{{admin.length}}</span></span>
					
					<TransitionExpand v-if="adminToggle">
				<ul class="ul_none font_n1">
						<li class="m-r_3 inline-block" v-for="user in admin" :key="user.id"><a :href="user.id" class="c_primary h:c_primary-n3 h:underline undecorated">{{user.name}}</a></li>
				</ul>
					</TransitionExpand>
			</div>
			<div class="flex_shrink m-r_4 p_3 c_black text_right:lg font_1:lg font_0">
				<div class="nowrap">{{ bundles.length }} Bundles</div>
				<ul
					class="font_n2 ul_none flex flex_wrap:lg flex_column flex_row:lg justify_end:lg"
					
				>
				
					<li class="flex_shrink m-r_2" v-for="bundle in bundles"
					:key="bundle.id">
						<a
							:href="bundle.id"
							class="link c_primary h:c_priamry-n1"
							>{{ bundle.name }}</a
						>
					</li>
				
				</ul>
			</div>
			</div>
			<div
				class="flex_auto w_10:md w_40:lg"
			>
				<SeatChart :bundles="bundles" />
			</div>
		</div>
	</HoverContainer>
</template>

<script>
import HoverContainer from '../SubContainers/hoverContainer.vue';
import SeatChart from "../../Charts/Seat.ReadableSeatChart.vue";
import TransitionExpand from "../../../subComponents/TransitionExpand.vue";
export default {
	components: {
		SeatChart,HoverContainer,TransitionExpand
	},
	props: {
		name: {
			type: String,
			default: "Missing Name",
		},
		id: {
			type: Number,
			default: null,
		},
		admin: {
			type: Array,
			default: () => [{ name: "No Admin", id: undefined }],
		},
		bundles: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			adminToggle: false
		}
	},
	methods: {
		URL: function (id) {
			return "" + id + "";
		},
	},
};
</script>

<style scoped></style>
