<template>
	<Question
		:id="id"
		:icon="icon"
		:postLabel="postLabel"
		:required="required"
		:state="thisState"
	>
		<template v-slot:default><slot name="default"></slot></template>
		<template v-slot:input>
			<input
				:id="'input_'+id"
				:name="'input_'+id"
				class="br_2 p-y_2 br_solid flex_auto p-l_4 lh_3"
				:type="type"
				v-bind:value="value"
				v-on:input="$emit('input', $event.target.value)"
				:required="required"
				:class="inputStyles"
				:disabled="thisState == 'disabled'"
				v-on:change="onChange()"
			/>
		</template>
		<template v-slot:alertMessage>This is not an email</template>
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
		onChange: function() {
			if (this.value == "" && this.required) {
				this.thisState = "requiredAlert"
				this.$emit("onChange", "");
				this.$emit("onStateChange","requiredAlert")
			}else {
				this.thisState = "";
				this.$emit("onChange", this.value);
				this.$emit("onStateChange","")

			} 
		}
	}
};
</script>

<style scoped></style>
