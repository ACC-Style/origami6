<script>

export default {
	props: {
		inputId:{type:String,required:true},
		inputType:{type:String,default:"text"},
		defaultvalue: { type: String, default: "" },
		icon: { type: String, default: null },
		postLabel: { type: String, default: null },
		required: { type: Boolean, default: true },
		state: { type: String, default: "", 
		 validator: function (value) {
        return ['','alert','requiredAlert','warning','success','info','accent','disabled'].indexOf(value) !== -1;
      },}
    },
    data() {
        return {
            thisState:this.state,
            value:this.defaultvalue
        }
    }, 
    watch:{
        state:function(n, o){
            this.thisState = n;
        }
    },
    computed: {
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
					styles += " c_black bg_black-2 br_black-3 texture_disabled";
					break;
				default:
					styles += " c_black bg_white-0 br_black-3 ";
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