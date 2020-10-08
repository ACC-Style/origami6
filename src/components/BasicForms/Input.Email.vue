<template>
	<Question 
		:inputId="inputId"
		:defaultvalue="defaultvalue"
		:icon="icon"
		:postLabel="postLabel"
		:required="required"
		:state="thisState"
		class="max-w_65"
	 >
		<template v-slot:default><slot name="default">Email</slot>
		</template>
		<template v-slot:input>
			<input
				:id="inputId"
				:name="inputId"
				v-on:change="onChange(value)"
				class="br_2 p-y_2 br_solid flex_auto p-l_4 lh_3"
				:type="inputType"
				v-model="value"
				required="required"
				:class="inputStyles"
				:disabled="state == 'disabled'"
			/>
		</template>
		<template v-slot:alertMessage>This is not an email</template>
		<template v-slot:warningMessage> <slot  name="warningMessage"></slot></template>
		<template v-slot:successMessage> <slot  name="successMessage"></slot></template>
		<template v-slot:infoMessage> <slot  name="infoMessage"></slot></template>
		<template v-slot:accentMessage> <slot  name="accentMessage"></slot></template>
	</Question>
</template>

<script>
import Question from "./subComponent/Question";
import is from 'is_js';
	export default {
		components:{Question},
		props:{
		inputId:{type:String,default:'email',required:true},
		inputType:{type:String,default:"email"},
		defaultvalue: { type: String, default: "" },
		icon: { type: String, default: 'fa-envelope' },
		postLabel: { type: String, default: null },
		required: { type: Boolean, default: true },
		state: { type: String, default: "", 
		 validator: function (value) {
        return ['','alert','requiredAlert','warning','success','info','disabled'].indexOf(value) !== -1;
	  },}
	  },data() {
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
	  methods: {
		isEmail(value){
			return is.email(value);
		},
		onChange: function(value) {
			if (value == "" && this.required) {
				this.thisState = "requiredAlert"
				this.$emit("onChange", "");
				this.$emit("onStateChange","requiredAlert")
			}else if ( !this.isEmail(value) ){
				this.state = "alert";
				this.$emit("onChange", "");
				this.$emit("onStateChange","alert");
				} else {
				this.thisState = "";
				this.$emit("onChange", value);
				this.$emit("onStateChange","")

			} 
		}
	},computed: {
		inputStyles() {
			let styles = "";
			switch (this.state) {
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

<style scoped>

</style>