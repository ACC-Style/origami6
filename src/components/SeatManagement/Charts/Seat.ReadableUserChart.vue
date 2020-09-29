<template>
	<div data-target="readableSeatChart" class="flex justify_between flex_column font_4:lg font_2 p-x_4 sticky">
        <div class="flex_auto flex text_right font_10:lg font_5" :class="blockClasses" >
            <div class="flex_auto">{{groupAdminCount}}<div class="font_n1 lh_0">group admin</div> </div>
            <div class="flex_auto c_primary-n1">{{adminCount}} <div class="font_n1 lh_0">admin</div> </div>
        </div>
		<div :class="blockClasses" class="flex_auto c_black br_1 br_solid br_black-1 bg_black-2 c_black-8 p_3 text_right">
			<span class="lowercase lh_0 font_display font_light block">
				{{
				all
				}}
			</span>
			<span class="lowercase block font_n1 font_medium c_black-8">Total Users</span>
		</div>

		<div :class="blockClasses" title="filled" class="flex_auto p_3 c_white text_right bg_success br_black-2 br_1 br_solid">
			<span class="lowercase lh_0 font_display font_light block">
				{{
				filled
				}}
			</span>
			<span class="lowercase block font_n1 font_medium c_white-8">Filled</span>
		</div>
		<div :class="blockClasses"
			title="requested"
			class="flex_auto p_3 c_white text_right bg_warning br_black-2 br_1 br_solid"
		>
			<span class="lowercase lh_0 font_display font_light block">
				{{
				requested
				}}
			</span>
			<span class="lowercase block font_n1 font_medium c_white-8">requested</span>
		</div>
		<div :class="blockClasses"
			title="locked"
			class="flex_auto p_3 c_white text_right bg_alert-n1 br_black-2 br_1 br_solid flex"
		>
			<div class="flex_auto">
				<span class="lowercase lh_0 font_display font_light block">
					{{
					removed
					}}
				</span>
				<span class="lowercase block font_n1 font_medium c_white-8">removed</span>
			</div>
			<div
				class="flex_shrink m-l_3 p-l_4 p-r_3 br-l_1 m-y_n3 br_white-8 br_solid text_center flex justify_center flex_column font_5"
			>
				<i class="fal fa-trash-alt"></i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		users: {
			type: Array,
			default: () => [],
		},
    },
    data() {
        return {
            blockClasses: "m-b_3 max-w_10"
        }
    },
	methods: {

	},
	computed: {
        adminCount: function(){if (this.users.length > 0) {
				return this.users.filter((ar) => (ar.status == "filled" && ( ar.type.admin ))).length;
			} else {
				return 0;
			};},
        groupAdminCount: function(){if (this.users.length > 0) {
				return this.users.filter((ar) => ( ar.status == "filled" && ( ar.type.groupadmin )) ).length;
			} else {
				return 0;
			};},
		all: function () {
			if (this.users.length > 0) {
				return this.users.filter((ar) => ( ar.status !== "filled") && !ar.type.admin && !ar.type.groupadmin && ar.type.user  ).length;
			} else {
				return 0;
			}
		},
		filled: function () {
			if (this.users.length != 0) {
				return this.users.filter((ar) => ar.status == "filled").length;
			} else {
				return 0;
			}
		},
		requested: function () {
			if (this.users.length != 0) {
				return this.users.filter((ar) => ar.status == "requested").length;
			} else {
				return 0;
			}
		},
		removed: function () {
			if (this.users.length != 0) {
				return this.users.filter((ar) => ar.status == "locked").length;
			} else {
				return 0;
			}
		},
		empty: function () {
			return this.all - (this.filled + this.requested + this.removed);
		},
		w_filled: function () {
			return (this.filled / this.all) * 100 + "%";
		},
		w_requested: function () {
			return (this.requested / this.all) * 100 + "%";
		},
		w_empty: function () {
			return (this.empty / this.all) * 100 + "%";
		},
		w_locked: function () {
			return (this.locked / this.all) * 100 + "%";
		},
	},
};
</script>
