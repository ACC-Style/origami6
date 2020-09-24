<template>
	<label
		class="value-space br_solid br_2 p_3 texture_light"
		:for="inputNameTarget"
		:class="areaStyle"
	>
		<i class="fas" v-bind:class="icon"></i>
	</label>
</template>

<script>
export default {
	name: "valueIcon",
	props: {
		inputNameTarget: { type: String },
		state: { type: String, default: "", validator: function (value) {
        return ['alert','requiredAlert','warning','success','info','accent',''].indexOf(value) !== -1;
      } },
		icon: { type: String, default: "fa-check" }
	},
	computed: {
		areaStyle() {
			let styles = "";
			switch (this.state) {
				case "alert":
					styles += " bg_alert-3 c_alert-1 br_alert-n1 ";
					break;
				case "warning":
					styles += " bg_warning-3  c_warning br_warning-n1 ";
					break;
				case "success":
					styles += " bg_success-4 c_success-n3  br_success";
					break;
				case "info":
					styles += " bg_info-4  c_info-n3 br_info";
					break;
				case "accent":
					styles += "bg_accent-n2 c_accent-n3 br_accent";
					break;
				case "disabled":
					styles+=" c_black-3 bg_black-2 br_black-3  "
					break;
				default:
					styles += "c_black-7 bg_black-2 br_black-5";
					break;
			}
			return styles;
		}
	}
};
</script>
