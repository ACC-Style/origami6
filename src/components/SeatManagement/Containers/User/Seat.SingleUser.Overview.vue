<template>
	<hoverContainer
		:isDisabled="hoverActionDisabled"
		:actionIcon="actionIcon"
		:actionColor="actionColor"
	>
		<div class="flex min-h_4rem relative" :class="statusColor">
			<div
				class="p-y_3 p-x_3 flex_none w_25:lg"
				v-if="status == 'filled' || status =='requested' || status == 'locked' "
			>
				<span class="font_2 font_display lh_0 block" v-if="user.name != null">{{ user.name }}</span>
				<a
					:href="mailto"
					v-if="user.name != null"
                    						@mouseenter="()=>{ actionIcon='fa-envelope'}"
						@mouseleave="()=>{actionIcon=undefined}"
					class="block vertical-align_middle lh_0 undecorated h:underline c_primary h:c_primary-n2 p-x_2 m-t_2 z_2 vertical-align_middle"
				>
					<i class="fal font-size_down fa-envelope"></i>
					email user
				</a>
			</div>
			<div class="p-y_3 p-x_3 flex_none w_20:lg" v-else>
				<span class="font_2 font_display lh_0 block c_black-5 p_2">Empty</span>
			</div>
			<div
				class="flex_none flex flex content_stretch justify_between c_primary font_1"
				v-if="status == 'filled' || status == 'locked'"
			>
				<div class="flex_auto p-x_3 br_solid br-l_1 br_black-2 flex flex_column justify_center">
					<i class="fal fa-fw fa-user-crown" :class="adminStyles"></i>
				</div>
				<div class="flex_auto p-x_3 br_solid br-l_1 br_black-2 flex flex_column justify_center">
					<i class="fal fa-fw fa-users-crown" :class="groupAdminStyles"></i>
				</div>
				<div class="flex_auto p-x_3 br_solid br-l_1 br_black-2 flex flex_column justify_center">
					<i class="fal fa-fw fa-user" :class="userStyles"></i>
				</div>
				<div class="flex_auto p-x_3 br_solid br-l_1 br_black-2 flex flex_column justify_center">
					<i class="fal fa-fw" :class="groupsStyles"></i>
				</div>
				<div class="flex_auto p-x_3 br_solid br-r_1 br-l_1 br_black-2 flex flex_column justify_center">
					<i class="fal fa-fw" :class="bundlesStyles"></i>
				</div>
			</div>
			<div class="flex_auto w_30 p_3">
				<div v-if="status != 'empty' && status != 'filled' && status != 'locked'">
					<strong>Status:</strong>
					<span class="flex_auto inline-block self_center text_center">{{ status }}</span>
				</div>
				<div class="font_n3">
					<!-- <div class v-if="status =='filled'">
						<strong class="font_bold opacity_8 lowercase lh_0 block">
							Accpeted:
							<span class="font_regular">{{ date_accepted }}</span>
						</strong>
					</div>-->
					<div class v-if="status =='requested'">
						<strong class="font_bold opacity_8 lowercase lh_0 block">
							Invited:
							<span class="font_regular">{{ date_invite }}</span>
						</strong>
					</div>
					<!-- <div class v-if="status =='locked'">
						<strong class="font_bold opacity_8 lowercase lh_0 block">
							Locked Until:
							<span class="font_regular">{{ date_lockedTill }}</span>
						</strong>
					</div>-->
				</div>
			</div>
			<div class="flex_auto w_50 m-l_auto flex flex_row justify_end">
				<ul class="ul_none flex flex_row self_stretch font_0">
					<a
						v-if="status =='filled'"
						href
						class="flex flex_auto underline m-r_1 c_primary transition_1 h:c_alert-n2 h:bg_alert-4 flex_auto p_3 p-l_4 z_2"
						@mouseenter="()=>{actionColor = 'alert'; actionIcon=' fa-trash-alt '}"
						@mouseleave="()=>{actionColor = undefined; actionIcon=undefined}"
					>
						<span class="self_center nowrap">
							Remove
							<i class="fal fa-fw fa-times"></i>
						</span>
					</a>
					<a
						v-if="status =='requested'"
						href
						class="flex flex_auto underline m-r_1 c_primary transition_1 h:c_black h:bg_warning-4 flex_auto p_3 p-l_4  z_1 expanded-click-area"
						@mouseenter="()=>{actionColor = 'warning'; actionIcon='fa-reply'}"
						@mouseleave="()=>{actionColor = undefined; actionIcon=undefined}"
					>
						<span class="self_center nowrap">
							Resend Request
							<i class="fal fa-fw fa-reply"></i>
						</span>
					</a>
					<a
						v-if="status =='requested'"
						href
						class="flex flex_auto underline m-r_1 c_primary transition_1 h:c_black h:bg_shade-3 flex_auto p_3 p-l_4  z_2"
						@mouseenter="()=>{actionColor = 'shade'; actionIcon='fa-times'}"
						@mouseleave="()=>{actionColor = undefined; actionIcon=undefined}"
					>
						<span class="self_center nowrap">
							Cancel
							<i class="fal fa-fw fa-times"></i>
						</span>
					</a>
					<a
						v-if="status =='empty'"
						href
						class="flex flex_auto underline m-r_1 c_primary transition_1 h:c_black h:bg_success-4 flex_auto p_3 p-l_4  z_1 expanded-click-area"
						@mouseenter="()=>{actionColor = 'success'; actionIcon='fa-plus'}"
						@mouseleave="()=>{actionColor = undefined; actionIcon=undefined}"
					>
						<span class="self_center nowrap">
							Invite
							<i class="fal fa-fw fa-plus"></i>
						</span>
					</a>
					<span v-if="status =='locked'" class="c_black-5 flex_auto flex p_3 p-l_4">
						<span class="self_center nowrap">
							Removed
							<i class="fal fa-trash-alt"></i>
						</span>
					</span>
				</ul>
			</div>
		</div>
	</hoverContainer>
</template>

<script>

import hoverContainer from '../SubContainers/hoverContainer.vue';
export default {
	components: {
		hoverContainer
	},
	props: {
		id: { type: Number, default: 1 },
		type: { type: Object, default: () => []  },
		groups: { type: Array, default: () => []  },
		bundles: { type: Array, default: () =>  []  },
		status: { type: String, default: "empty" },
		date_invite: { type: String, default: null },
		date_accepted: { type: String, default: null },
		date_lockedTill: { type: String, default: null },
		date_removed: { type: String, default: null },
		user: {
			type: Object,
		},
	},
	data() {
		return {
			actionIcon: undefined,
			actionColor: undefined
		};
	},
	methods: {
		action: function () { },
		userIndicatorStyles: function (boolean) {
			let returnedStyles = "";
			if (this.status == 'locked') {
				returnedStyles += " c_black-5 "
			}
			if (boolean) {
				returnedStyles += " opacity_none far"
			} else {
				returnedStyles += " opacity_4 fal"
			}
			return returnedStyles;
		},
		countIndicatorStyles(count, iconSingle, iconMultiple) {
			let returnedStyles = "";
			if (this.status == 'locked') {
				returnedStyles += " c_black-5 "
			}
			if (count == 0) {
				returnedStyles += " opacity_5 fal";
			} else {
				returnedStyles += " opacity_none far";
			}
			if (count <= 1) {
				returnedStyles += " " + iconSingle;//"fa-dot-circle"
			} else {
				returnedStyles += " " + iconMultiple;//"fa-ball-pile"
			}
			return returnedStyles;
		}
	},
	computed: {
		hoverActionDisabled() { return (this.status == 'locked') ? true : false; },
		adminStyles() {
			let returnedStyles = "";
			returnedStyles += this.userIndicatorStyles(this.type.admin);
			return returnedStyles;
		},
		groupAdminStyles() {
			let returnedStyles = "";
			returnedStyles += this.userIndicatorStyles(this.type.groupadmin);
			return returnedStyles;
		},
		userStyles() {
			let returnedStyles = "";
			returnedStyles += this.userIndicatorStyles(this.type.user);
			return returnedStyles;
		},
		groupsStyles() {
			let returnedStyles = "", count = (this.groups != undefined) ? this.groups.length : 0;

			returnedStyles += this.countIndicatorStyles(count, "fa-dot-circle", "fa-ball-pile");
			return returnedStyles;
		},
		bundlesStyles() {
			let returnedStyles = "";
			let count = (this.bundles == undefined) ? 0 : this.bundles.length;
			returnedStyles += this.countIndicatorStyles(count, "fa-cube", "fa-cubes");
			return returnedStyles;
		},

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
