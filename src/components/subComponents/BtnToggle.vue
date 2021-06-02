<template>
	<div class="inline-block">
	<Btn v-show="componentIsActive" @onClick="onClick()" :size="size" :state="activeState" :corner="corner" :isDisabled="isDisabled" :shadow="shadow" :shape="shape" :class="[{'shadow_emboss-light text-shadow_black-1':insetShadow},'active-button']" >
		<slot class="" name="active">ON</slot>
	</Btn>
	<Btn v-show="!componentIsActive" @onClick="onClick()" :size="size" :state="notActiveState" :corner="corner" :isDisabled="isDisabled" :shadow="shadow" :shape="shape" :class="[{'shadow_emboss-light text-shadow_black-1':insetShadow},'not-active-button']" >
		<slot class="" name="notActive" >OFF</slot>
	</Btn>
	</div>
</template>
<script>
import Btn from "./Btn.vue";
export default {
	name: "BtnToggle",
	components: { Btn },
	props: {
		size: { type: String },
		activeState: { type: String,
				default:'primary' },
		notActiveState: { type: String,
				default:'secondary' },
		corner: { type: String },
		isDisabled: { type: Boolean },
		shadow: { type: Boolean },
		insetShadow: { type: Boolean },
		isActive:{ type: Boolean, default:false },
		shape:{
			type:String,
			default:'button',
			validator: function (value) {
				return ['button','circle','square','switch'].indexOf(value) !== -1;
			},
			}
	},
	data() {
		return {
			componentIsActive: this.isActive
		}
	},
	methods: {
		onClick() {
			if (!this.isDisabled) {
				this.componentIsActive = !this.componentIsActive;
				this.componentIsActive
					? this.$emit("onClick",{'isActive':true})
					: this.$emit("onClick",{'isActive':false});
				
			}
		}
	},
};
</script>

