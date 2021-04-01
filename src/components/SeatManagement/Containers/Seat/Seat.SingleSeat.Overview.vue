<template>
	<hoverContainer
		class=""
		:isDisabled="disabled(status)"
		:actionColor="actionColor"
		:actionIcon="actionIcon"
	>
		<div
			class="flex relative min-h_4lh flex_row:md flex_column"
			:class="statusColor"
		>
			<div class="flex_auto w_50:lg flex flex_row:md flex_column">
				<div
					class="p-y_3 p-x_3 flex_none:lg w_40:lg"
					v-if="status == 'filled' || status == 'requested'"
				>
					<span
						class="font_2 font_display lh_0 block"
						v-if="user.name != null"
						>{{ user.name }}</span
					>
					<a
						:href="mailto"
						v-if="user.name != null"
						class="block vertical-align_middle lh_0 undecorated c_primary h:c_primary-n2 p-x_2 m-t_2"
					>
						email user
						<i class="fal font-size_down fa-envelope"></i>
					</a>
				</div>
				<div
					class="p-y_3 p-x_3  flex_none:lg w_40:lg"
					v-else-if="status == 'locked'"
				>
					<span class="font_2 font_display lh_0 block c_black-5 p_2"
						><i class="fal fa-fw fa-lock"></i> Locked</span
					>
					<p class="font_n2 lh_2 m-t_0 inline">
						Seats was used by {{ user.name }} but has been removed.
					</p>
				</div>
				<div class="p-y_3 p-x_3  flex_none:lg w_40:lg" v-else>
					<span class="font_2 font_display lh_0 block c_black-5 p_2"
						>Empty</span
					>
				</div>
				<div class="flex_auto w_30:lg p_3 font_n2 font_n1:lg">
					<div v-if="status != 'empty'">
						<strong>Status:</strong>
						<span
							class="flex_auto inline-block self_center text_center"
							>{{ status }}</span
						>
					</div>
					<div class="font_n2">
						<div class v-if="status == 'filled'">
							<strong
								class="font_bold opacity_8 lowercase lh_0 block"
							>
								Accepted:
								<span class=" capitalize font_regular">{{
									MonthDayYear(date_accepted) 
								}}</span>
							</strong>
						</div>
						<div class v-else-if="status == 'requested'">
							<strong
								class="font_bold opacity_8 lowercase lh_0 block"
							>
								Invited:
								<span class=" capitalize font_regular">{{
									MonthDayYear(date_invite)
								}}</span>
							</strong>
						</div>
						<div class v-if="status == 'locked'">
							<strong
								class="font_bold opacity_8 lowercase lh_0 block"
							>
								Locked Until:
								<span class=" capitalize font_regular">{{
									MonthDayYear(date_lockedTill)
									
								}}</span>
							</strong>
						</div>
					</div>
				</div>
			</div>
			<div
				class="flex_shrink w_50:lg w_100 m-l_auto flex flex_row justify_end"
			>
				<ul class="ul_none flex flex_row self_stretch font_0:lg font_n1:md font_n2 w_100 w_20:md text_right:lg text_left">
					<a
						v-if="status == 'filled'"
						href
						@mouseenter="
							() => {
								actionColor = 'alert';
								actionIcon = 'fa-trash-alt';
							}
						"
						@mouseleave="
							() => {
								actionColor = undefined;
								actionIcon = undefined;
							}
						"
						class="flex flex_auto underline m-r_1 c_primary h:bg_alert-4 transition_2 h:c_alert-n2 p_3 p-l_4"
					>
						<span class="self_center nowrap m-l_auto:lg">
							Remove
							<i class="fal fa-fw fa-times"></i>
						</span>
					</a>
					<a
						v-if="status == 'requested'"
						href
						@mouseenter="
							() => {
								actionColor = 'warning';
								actionIcon = 'fa-reply';
							}
						"
						@mouseleave="
							() => {
								actionColor = undefined;
								actionIcon = undefined;
							}
						"
						class="flex flex_auto underline m-r_1 c_primary h:bg_warning-4 transition_2 h:c_black p_3 p-l_4 expanded-click-area z_1"
					>
						<span class="self_center nowrap m-l_auto:lg">
							Resend Request
							<i class="fal fa-fw fa-reply"></i>
						</span>
					</a>
					<a
						v-if="status == 'requested'"
						href
						@mouseenter="
							() => {
								actionColor = 'shade';
								actionIcon = 'fa-times';
							}
						"
						class="flex flex_auto underline m-r_1 c_primary h:c_black transition_2 h:bg_shade-3 p_3 p-l_4 z_2"
					>
						<span class="self_center nowrap m-l_auto:lg">
							Cancel
							<i class="fal fa-fw fa-times"></i>
						</span>
					</a>
					<a
						v-if="status == 'empty'"
						href
						@mouseenter="
							() => {
								actionColor = 'success';
								actionIcon = 'fa-plus';
							}
						"
						@mouseleave="
							() => {
								actionColor = undefined;
								actionIcon = undefined;
							}
						"
						class="flex flex_auto underline m-r_1 c_primary h:bg_success-4 transition_2 h:c_black p_3 p-l_4"
					>
						<span class="self_center nowrap m-l_auto:lg">
							Invite <i class="fal fa-fw fa-plus"></i
						></span>
					</a>
					<span
						v-if="status == 'locked'"
						class="c_black-5 flex_auto flex p_3 p-l_4"
					>
						<span class="self_center nowrap m-l_auto:lg">
							Removed <i class="fal fa-trash-alt"></i>
						</span>
					</span>
				</ul>
			</div>
		</div>
	</hoverContainer>
</template>

<script>

import hoverContainer from '../SubContainers/hoverContainer.vue';
import moment from "moment";
import tz from "moment-timezone";

export default {
	components: {
		hoverContainer
	},
	props: {
		id: { type: Number, default: 1 },
		status: { type: String, default: "empty" },
		date_invite: { type: String, default: null },
		date_accepted: { type: String, default: null },
		date_lockedTill: { type: String, default: null },
		date_removed: { type: String, default: null },
				timezone: { type: String, default: "America/New_York" },
		user: {
			type: Object,
		},
	},
	data() {
		return {
			actionColor: undefined,
			actionIcon: undefined,
		};
	},
	methods: {
		action: function () { },
		disabled: function (status) { return (status == 'locked' || status == 'empty'  ) ? true : false; },
		MonthDayYear:function(date){return moment(date).tz(this.timezone).format("MMM D YYYY z")}
	},
	computed: {
		mailto: () => {
			return "mailto:";
		},
		statusColor: function () {
			var $class = "";
			switch (this.status) {
				case "locked":
					$class = " br_solid br-l_4 br-r_3 br_alert";
					break;
				case "removed":
					$class = " br_solid br-l_4 br-r_3 br_alert-n3";
					break;
				case "rejected":
					$class = " br_solid br-l_4 br-r_3 br_warning";
					break;
				case "filled":
					$class = " br_solid br-l_4 br-r_3 br_success";
					break;
				case "requested":
					$class = " br_solid br-l_4 br-r_3 br_warning";
					break;
				case "empty":
					$class = " br_solid br-l_4 br-r_3 br_primary"
				default:
					break;
			}
			return $class;
		},
	},
};
</script>

<style lang="css">
.min-h_4rem {
	min-height: 4rem;
}
</style>
