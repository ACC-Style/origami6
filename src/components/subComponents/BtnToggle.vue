<template>
	<span>
	<Btn v-show="compIsActive" @onClick="onClick()" :size="size" :state="state" :corner="corner" :isDisabled="isDisabled" :shadow="shadow" :isActivatable="true" :isActive="true">
		<slot class="" name="active">ON</slot>
	</Btn>
	<Btn v-show="!compIsActive" @onClick="onClick()" :size="size" :state="state" :corner="corner" :isDisabled="isDisabled" :shadow="shadow" :isActivatable="true" :isActive="false">
		<slot class="" name="deactive" >OFF</slot>
	</Btn>
	</span>
</template>
<script>
import Btn from "./Btn.vue";
export default {
	name: "BtnToggle",
	components: { Btn },
	props: {
		size: { type: String },
		state: { type: String },
		corner: { type: String },
		isDisabled: { type: Boolean },
		shadow: { type: Boolean },
		isActive:{ type: Boolean, default:false }
	},
	data() {
		return {
			compIsActive: this.isActive
		}
	},
	methods: {
		onClick() {
			if (!this.isDisabled) {
				this.compIsActive = !this.compIsActive;
				this.compIsActive
					? this.$emit("onActive")
					: this.$emit("onDeactive");
				this.$emit("onClick");
			}
		}
	},
};
</script>

