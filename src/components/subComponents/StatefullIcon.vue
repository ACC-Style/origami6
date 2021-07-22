<template>
	<div class="flex justify_center" :class="areaStyle">
		<i
			class="fa fas text_center flex_auto self_center lh_0" v-if="showIcon"
			:class="iconStyle"
		></i>
		<span v-if="showIcon" style="width:1px; height:1px;"></span>
	</div>
</template>

<script>
export default {
	name: "statefullIcon",
	props: {
		showIcon: {type:Boolean, default:true},
		icon: {type:String, default:""},
		state: {
			type: String,
			default: "",
			validator: function (value) {
				return (
					[
						"alert",
						"success",
						"warning",
						"info",
						"accent",
						"disabled",
						"secondary",
						"shade",
						"primary",
						"",
					].indexOf(value) !== -1
				);
			},
		},
	},
	computed: {
		iconStyle() {
			let classes = "";
			if (this.icon === "") {
			switch (this.state) {
				case "alert":
					classes = "fa-exclamation-triangle";
					break;
				case "success":
					classes = "fa-check";
					break;
				case "warning":
					classes = "fa-exclamation-circle";
					break;
				case "info":
					classes = "fa-info-circle";
					break;
				case "accent":
					classes = "fa-info";
					break;
				case "disabled":
					classes = "fa-ban";
					break;
				default:
					break;
			}}
			else{
				classes = this.icon;
			}
			return classes;
		},
		areaStyle() {
			let state = "texture_dust";
			switch (this.state) {
				case "alert":
					state += " c_white bg_alert-n2 ";
					break;
				case "warning":
					state += " c_white bg_warning-n1 ";
					break;
				case "success":
					state += " c_white bg_success-n2 ";
					break;
				case "shade":
					state += " c_black-5 bg_black-2 ";
					break;
				case "disabled":
					state += " c_black bg_shade-3 ";
					break;
				case "secondary":
					state += " c_secondary-n3 bg_secondary-3 ";
					break;
				case "info":
					state += " c_black bg_info-3 ";
					break;
				case "accent":
					state += " c_white bg_accent-n2 ";
					break;
				default:
					state = " display_none ";
					break;
			}
			return state;
		},
	},
};
</script>
<style scoped>
.c_inherit {
	color: inherit !important;
}
</style>
