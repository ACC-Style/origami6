<template>
	<label
		class="value-space br_solid br_2 p_3 p-y_0 texture_light flex_column flex justify_center"
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
				case "requiredAlert":
				case "alert":
					styles += " bg_alert-3 c_alert-n3 br_alert-n1 ";
					break;

				case "warning":
					styles += " bg_warning-3  c_warning-n3 br_warning-n1 ";
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
					styles+=" c_black-3 bg_black-1 br_black-2"
					break;
				default:
					styles += "c_black-6 bg_black-_05 br_black-2";
					break;
			}
			return styles;
		}
	}
};
</script>
