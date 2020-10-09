<template>
	<Question 
		:inputId="inputId"
		:defaultvalue="defaultvalue"
		:icon="icon"
		:postLabel="thisPostLabel"
		:required="required"
		:state="thisState"
		class="max-w_65"
        @onClickPostLabel="onClickPostLabel"
	 >
		<template v-slot:default><slot name="default">
            <small class="c_alert block">! Incomplete Component !</small>Password
        </slot>
		</template>
		<template v-slot:input>
			<input
				:id="inputId"
				:name="inputId"
				v-on:change="onChange(value)"
				class="br_2 p-y_2 br_solid flex_auto p-l_4 lh_3"
				:type="thisInputType"
				v-model="value"
				required="required"
				:class="inputStyles"
				:disabled="thisState == 'disabled'"
			/>
		</template>
		<template v-slot:alertMessage>Not Strong Enough to Be Our Password</template>
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
			inputType:{type:String,default:"password"},
			icon: { type: String, default:'fa-key' },
		}
	  ,data() {
		  return {
              thisInputType:this.inputType,
              thisPostLabel:"show",
		  }
	  },
	  methods: {
        onClickPostLabel:function(){},
		isPassword(value){
            const regex = RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$');
			return regex.test(value);
		},
		onChange: function(value) {
			if (value == "" && this.required) {
				this.thisState = "requiredAlert"
				this.$emit("onChange", "");
				this.$emit("onStateChange","requiredAlert")
			}else if ( !this.isPassword(value) ){
				this.thisState = "alert";
				this.$emit("onChange", "");
				this.$emit("onStateChange","alert");
				} else {
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