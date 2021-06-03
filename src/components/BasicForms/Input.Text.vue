<template>
	<Question 
		:inputId="inputId"
		:defaultValue="defaultValue"
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
				:disabled="thisState == 'disabled'"
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
import baseInputFunctions from "./subComponent/baseInputFunctions.vue"
import is from 'is_js';
	export default {
		mixins:[baseInputFunctions],
		components:{Question},
		props:{
			inputType:{type:String,default:"text"},
		}
	  ,data() {
		  return {
		  }
	  },
	  methods: {
          onChange: function(value) {
			if (value == "" && this.required) {
				this.thisState = "requiredAlert"
				this.$emit("onChange", "");
				this.$emit("onStateChange","requiredAlert")
            }
            else {
				this.thisState = "";
				this.$emit("onChange", value);
				this.$emit("onStateChange","")

			} 
		}
	},computed: {
		
	},
	}
</script>

<style scoped>

</style>