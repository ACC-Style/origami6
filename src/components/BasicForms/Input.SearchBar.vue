<template>
	<TextAndButton
		:inputId="inputId"
		:icon="icon"
		:postLabel="postLabel"
		:required="required"
		:state="state"
        :isBtnDisabled="isBtnDisabled"
        :isTextDisabled="isTextDisabled"
		v-model="dataValue"
		@onClick="onClick($event)"
	>
		<template v-slot:default><slot name="default"></slot></template>
        <template v-slot:btnLabel><slot name="default">{{btnLabel}}</slot></template>
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
	</TextAndButton>
</template>
<script>
import TextAndButton from "./Input.TextAndButton.vue";
export default {
	components: { TextAndButton },
	props: {
		autosuggest:{type:Array,default:()=>[]},
		btnLabel: { type: String, default: 'Search' },
        isTextDisabled:{type:Boolean,default:false},
		value: { type:[String,Number,Object,Array,Boolean,null] },
		inputId: { type: String, default: null },
		type: { type: String, default: "text" },
		placeholder: { type: String, default: "" },
		icon: { type: String, default: null },
		postLabel: { type: String, default: null },
		required: { type: Boolean, default: false },
		size:{type:String, default: "small"},
		state: {
			type: String, default: "",
			validator: function (value) {
				return ['', 'alert', 'requiredAlert', 'warning', 'success', 'info', 'accent', 'disabled'].indexOf(value) !== -1;
			},
		}
	},
	data() {
		return {
			thisInputType: this.inputType,
            dataValue: this.value,
		}
	},
	computed:{
		isBtnDisabled(){
			if(this.dataValue !== ''){
				return false;
			}
			return true;
		}
	},
	methods: {
		onClick(dataValue) {
			this.$emit("onClick", dataValue);
		},
	},
}
</script>

<style scoped>
</style>