<template>
	<Question
		:id="id"
		:icon="icon"
		:postLabel="postLabel"
		:required="required"
		:state="thisState"
		@onClickPostLabel="$emit('onClickPostLabel')"
	>
		<template v-slot:default><slot name="default"></slot></template>
		<template v-slot:input>
			<input
				:id="'input_'+id"
				:name="'input_'+id"
				class="br_2 p-y_2 br_solid flex_auto p-l_4 lh_3"
				:type="type"
				:value="value"
				:required="required"
				:placeholder="placeholder"
				:class="inputStyles"
				:disabled="thisState == 'disabled'"
				
				@change="onChange($event)"
			/>
		</template>
		<template v-slot:requiredAlertMessage><slot name="requiredAlertMessage"></slot
		></template>
		<template v-slot:alertMessage><slot name="alertMessage"></slot
		></template>
		<template v-slot:warningMessage>
			<slot name="warningMessage"></slot
		></template>
		<template v-slot:successMessage>
			<slot name="successMessage"></slot
		></template>
		<template v-slot:infoMessage>
			<slot name="infoMessage"></slot
		></template>
		<template v-slot:accentMessage>
			<slot name="accentMessage"></slot
		></template>
		<template v-slot:hint> <slot name="hint"></slot></template>
	</Question>
</template>

<script>
import Question from "./subComponent/Question";
import baseInputFunctions from "./subComponent/baseInputFunctions.vue";

export default {
	mixins: [baseInputFunctions],
	components: { Question },
	methods:{
		onChange: function(event) {
			if (this.value == "" && this.required) {
				this.$emit("onStateChange","requiredAlert")
			}else {
				this.thisState = "";
				this.$emit("onStateChange","")

			} 
			this.$emit('input',event.target.value)
		}
	}
};
</script>

<style scoped></style>
