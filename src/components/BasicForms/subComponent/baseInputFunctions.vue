<script>
import { ResponsiveMixin } from "vue-responsive-components";
	
export default {

	props: {
		inputId:{type:String,required:true},
		inputType:{type:String,default:"text"},
		defaultValue: { type: String, default: "" },
		placeholder:{type: String, default: "" },
		icon: { type: String, default: null },
		postLabel: { type: String, default: null },
		required: { type: Boolean, default: true },
		state: { type: String, default: "", 
		 validator: function (value) {
        return ['','alert','requiredAlert','warning','success','info','accent','disabled'].indexOf(value) !== -1;
      },}
    },
	mixins:[ResponsiveMixin],
    data() {
        return {
            thisState:this.state,
            value:this.defaultValue
        }
    },
      breakpoints: {
		sm: (el) => el.width <= 480,
		md: (el) => el.width <= 768 && el.width > 480,
		lg: (el) => el.width > 768,
	},
    watch:{
        state:function(n, o){
            this.thisState = n;
        }
    },
    computed: {
		btnState(){
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
		btnSize(){
			return (this.el.is.lg || this.el.is.md )?'medium':'small';
		},
		inputStyles() {
			let styles = "";
			switch (this.thisState) {
				case  "requiredAlert":
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
					styles += " c_black bg_white br_black-2 ";
						break;
			}
				if(this.icon){
					styles += " br-l_0";
				}

			return styles;
		}
	},
}
</script>