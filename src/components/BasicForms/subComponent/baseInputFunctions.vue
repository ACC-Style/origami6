<script>
import { ResponsiveMixin } from "vue-responsive-components";

export default {

	props: {
		value: { type:[String,Number,Object,Array,Boolean,null] },
		inputId: { type: String, default: null },
		type: { type: String, default: "text" },
		placeholder: { type: String, default: "" },
		icon: { type: String, default: null },
		postLabel: { type: String, default: null },
		required: { type: Boolean, default: false },
		state: {
			type: String, default: "",
			validator: function (value) {
				return ['', 'alert', 'requiredAlert', 'warning', 'success', 'info', 'accent', 'disabled'].indexOf(value) !== -1;
			},
		}
	},
	mixins: [ResponsiveMixin],
	data() {
		return {
			id: null,
			thisState: this.state,
		}
	},
	breakpoints: {
		sm: (el) => el.width <= 480,
		md: (el) => el.width <= 768 && el.width > 480,
		lg: (el) => el.width > 768,
	},
	watch: {
		state: function (n) {
			this.thisState = n;
		}
	},
	computed: {
		btnState() {
			let btnState;
			switch (this.thisState) {
				case '':
					btnState = 'primary';
					break;
				case 'requiredAlert':
					btnState = 'alert';
					break;
				default:
					btnState = this.thisState;
					break;
			}
			return btnState;
		},
		btnSize() {
			return (this.el.is.lg || this.el.is.md) ? 'medium' : 'small';
		},
		inputStyles() {
			let styles = "";
			switch (this.thisState) {
				case "requiredAlert":
				case "alert":
					styles += " c_alert br_alert-n1 ";
					break;
				case "warning":
					styles += "  c_warning br_warning-n1 ";
					break;
				case "success":
					styles += " br_success-n2 c_success ";
					break;
				case "disabled":
					styles += " opacity_5 c_black bg_black-1 br_black-2 texture_disabled";
					break;
				default:
					styles += " c_black bg_white f:bg_primary br_black-2 ";
					break;
			}
			if (this.icon) {
				styles += " br-l_0";
			}

			return styles;
		}
	},
	mounted() {
		if (this.inputId === null) {
			this.id = this._uid;
		} else {
			this.id = this.inputId;
		}
	},
}
</script>
<style>
	.f\:bg_primary:focus-within{background-color:rgba(19,18,18,.0125)}

</style>