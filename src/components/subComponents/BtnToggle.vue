<template>
	<Btn @onClick="onClick()" :size="size" :state="state" :corner="corner" :isDisabled="isDisabled" :shadow="shadow" :isActivatable="true" :isActive="isActive">
		<slot class="" name="active" v-if="isActive">ON</slot>
		<slot class="" name="deactive" v-if="!isActive">OFF</slot>
	</Btn>
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
	methods: {
		onClick() {
			if (!this.isDisabled) {
				this.isActive = !this.isActive;
				this.isActive
					? this.$emit("onActive")
					: this.$emit("onDeactive");
				this.$emit("onClick");
			}
		}
	},
};
</script>

