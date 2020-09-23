<template>
	<div
		data-target="readableSeatChart"
		class="flex justify_between flex_column flex_row:lg font_5:lg font_3:md font_1"
	>

		<div
			title="filled"
			class="flex_auto m-r_3:lg m-b_2 overflow_hidden m-b_0:lg p_3 p-l_2 c_white text_right bg_success br_black-2 br_1 br_solid"
		>
			<span class="lowercase lh_0 font_display font_light block">{{
				filled
			}}</span
			><span class="lowercase block font_n1:lg font_n2 font_medium c_white-8 float_right">Filled</span>
		</div>
		<div
			title="requested"
			class="flex_auto m-r_3:lg m-b_2 overflow_hidden m-b_0:lg p_3 p-l_2 c_white text_right bg_warning br_black-2 br_1 br_solid"
		>
			<span class="lowercase lh_0 font_display font_light block">{{
				requested
			}}</span
			><span class="lowercase block font_n1:lg font_n2 font_medium c_white-8 float_right">requested</span>
		</div>
		<div
			title="empty"
			class="flex_auto m-r_3:lg m-b_2 overflow_hidden m-b_0:lg p_3 p-l_2 c_white text_right bg_primary br_black-2 br_1 br_solid"
		>
			<span class="lowercase lh_0 font_display font_light block">{{
				empty
			}}</span
			><span class="lowercase block font_n1:lg font_n2 font_medium c_white-8 float_right">empty</span>
		</div>
		<div
			title="locked"
			class="flex_auto  m-r_3:lg m-b_2 overflow_hidden m-b_0:lg p_3 p-l_2 c_white text_right bg_alert-n1 br_black-2 br_1 br_solid flex"
		>
			<div class="flex_auto"><span class="lowercase lh_0 font_display font_light block">{{
				locked
			}}</span
			><span class="lowercase block font_n1:lg font_n2 font_medium c_white-8 float_right">locked</span></div>
            <div class="flex_shrink  m-l_3 p-l_3 p-r_3 br-l_1 m-y_n3 br_white-8 br_solid text_center flex justify_center flex_column font_5:lg font_3:md font_1"><i class="fal fa-lock"></i></div>
		</div>
		<div
			class="flex_auto c_black br_1 br_solid br_black-1 bg_black-2 c_black-8  p_3 p-l_2 text_right"
		>
			<span class="lowercase lh_0 font_display font_light block">{{
				all
			}}</span>
			<span class="lowercase block font_n1:lg font_n2 font_medium c_black-8">Seats</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		bundles: {
			type: Array,
			default: () => [],
		},
	},
	methods: {
		sum(key) {
			return this.bundles.reduce(function(a, b) {
				return a[key] + b[key];
			});
		},
	},
	computed: {
		all: function() {
			if (this.bundles.length > 0) {
				return this.sum("all");
			} else {
				return 0;
			}
		},
		filled: function() {
			if (this.bundles.length != 0) {
				return this.sum("filled");
			} else {
				return 0;
			}
		},
		requested: function() {
			if (this.bundles.length != 0) {
				return this.sum("requested");
			} else {
				return 0;
			}
		},
		locked: function() {
			if (this.bundles.length != 0) {
				return this.sum("locked");
			} else {
				return 0;
			}
		},
		empty: function() {
			return this.all - (this.filled + this.requested + this.locked);
		},
		w_filled: function() {
			return (this.filled / this.all) * 100 + "%";
		},
		w_requested: function() {
			return (this.requested / this.all) * 100 + "%";
		},
		w_empty: function() {
			return (this.empty / this.all) * 100 + "%";
		},
		w_locked: function() {
			return (this.locked / this.all) * 100 + "%";
		},
	},
};
</script>
