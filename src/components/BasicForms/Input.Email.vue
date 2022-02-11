<template>
	<Question 
		:inputId="inputId"
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
				@input="onInput($event)"
				class="br_2 p-y_2 br_solid flex_auto p-l_4 lh_3 br-bl_square br-tl_square"
				:type="inputType"
				:value="value"
				:required="required"
				:class="inputStyles"
				:disabled="thisState == 'disabled'"
			/>
		</template>
		<template v-slot:requiredAlertMessage><slot name="requiredAlertMessage"></slot></template>
		<template v-slot:alertMessage> <slot  name="alertMessage">This is not a valid email.</slot></template>
		<template v-slot:warningMessage> <slot  name="warningMessage"></slot></template>
		<template v-slot:successMessage> <slot  name="successMessage"></slot></template>
		<template v-slot:infoMessage> <slot  name="infoMessage"></slot></template>
		<template v-slot:accentMessage> <slot  name="accentMessage"></slot></template>
	</Question>
</template>

<script>
import Question from "./subComponent/Question";
import baseInputFunctions from "./subComponent/baseInputFunctions.vue"
import is from 'is_js';
	export default {
		mixins:[baseInputFunctions],
		components:{Question},
		props:{
			inputType:{type:String,default:"email"},
			icon: { type: String, default:'fa-envelope' },
		},
	  data() {
		  return {
			  
		  }
	  },
	  methods: {
		isEmail(value){
			return is.email(value);
		},
		onInput: function(event) {
			if (this.value == "" && this.required) {
				this.$emit("onStateChange","requiredAlert")
			}else {
				this.thisState = "";
				this.$emit("onStateChange","")

			} 
			this.$emit('input',event.target.value)
		}
		// onChange: function(value) {
		// 	if (value == "" && this.required) {
		// 		this.thisState = "requiredAlert"
		// 		this.$emit("onChange", "");
		// 		this.$emit("onStateChange","requiredAlert")
		// 	}else if ( !this.isEmail(value) ){
		// 		this.thisState = "alert";
		// 		this.$emit("onChange", "");
		// 		this.$emit("onStateChange","alert");
		// 		} else {
		// 		this.thisState = "";
		// 		this.$emit("onChange", value);
		// 		this.$emit("onStateChange","")

		// 	} 
		// }
	  }
	}
</script>

<style scoped>

</style>