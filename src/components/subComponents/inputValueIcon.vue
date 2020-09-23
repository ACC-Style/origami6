<template>
	<label
		class="value-space br_solid br_2 p_3 texture_light"
		v-bind:class="areaStyle"
		:for="inputNameTarget"
	>
		<i class="fas" v-bind:class="icon"></i>
	</label>
</template>

<script>
export default {
	name: "valueIcon",
	props: {
		inputNameTarget: { type: String },
		state: { type: String, default: "" },
		icon: { type: String, default: "fa-check" }
	},
	computed: {
		areaStyle() {
			let styles = "";
			switch (this.state) {
				case "alert":
					styles += " bg_alert-4 c_alert-n3 br_alert";
					break;
				case "warning":
					styles += " bg_warning-4 c_warning-n3 br_warning";
					break;
				case "success":
					styles += " bg_sucess-4 c_success-n3  br_sucess";
					break;
				case "info":
					styles += " bg_info-4  c_info-n3 br_info";
					break;
				case "accent":
					styles += "bg_accent-n2 c_accent-n3 br_accent";
					break;
				case "shade":
					styles += "bg_black-3 ";
					break;
				default:
					styles += "bg_black-2 br_black-3 c_black-8";
					break;
			}
			return styles;
		}
	}
};
</script>
