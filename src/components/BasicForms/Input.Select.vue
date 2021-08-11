<template>
	<Question
		:id="id"
		:icon="icon"
		:postLabel="postLabel"
		:required="required"
		:state="thisState"
		class="max-w_65"
	>
		<template v-slot:default><slot name="default">Email</slot> </template>
		<template v-slot:input>
			<div class="select-wrapper w_100 relative">
				<select
					:id="'input_' + id"
					:name="'input_' + id"
					class="br_2 p-y_2 br_solid flex_auto p-l_4 lh_3"
					:type="type"
					v-bind:value="value"
					@input="$emit('input',$event.target.value)"
					:required="required"
					:class="inputStyles"
					:disabled="thisState == 'disabled'"
				>
					<option disabled hidden  value="none">{{ placeholder }}</option>
					<option
						v-for="(option,index) in options"
						:value="optionValue(option)"
						v-html="optionLabel(option)"
						:key="'option_' + index"
					></option>
				</select>
			</div>
		</template>
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
	name: "inputSelect",
	props: {
		options: { type: [Array] },
		value: { default:'none'},
		placeholder:{default: 'Please Select One'}
	},
	data: () => ({
		
	}),
	mixins: [baseInputFunctions],
	components: { Question },
	methods: { 
		optionLabel: function(option) {
			if(typeof option === 'string') {
				return option;
			}
			if("label" in option){
				return option.label;
			}
			if("value" in option){
				return option.value;
			}
			return option[0];
		},

		optionValue: function(option) {
			if(typeof option === 'string') {
				return option;
			}
			if("value" in option){
				return option.value;
			}
			return option[0]
		}
	},
};
</script>

<style scoped>
.question .input:focus {
	border: inherit;
	background: inherit;
}

select {
	/* Here's the code we need */
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	-o-appearance: none;
	appearance: none;
}
.select-wrapper{
	position: relative;
}
.select-wrapper:after {
	font-family: "Font Awesome 5 Pro";
	font-weight: 900;
	content: "\f107";
	position: absolute;
	color: currentColor;
	top: 0rem;
	right: 0.25rem;
	padding: 0.5rem;
	font-size: 1.25rem;
	pointer-events: none;
	display: inline-block;
	bottom: 0;
	line-height: 1.25;
}
.select-wrapper:focus-within:after {
	content: "\f106";
	
}
.question select:focus {
	outline: none;
}

/* style the items (options), including the selected item: */
.select-items div,.select-selected {
  color: currentColor;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}

</style>
