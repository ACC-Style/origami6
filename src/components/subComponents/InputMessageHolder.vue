<template>
	<div
		class="message-holder "
		v-bind:class="{
            '': state != '',
            'c_alert-n1': state == 'alert', 
            'c_warning-n1': state == 'warning',
            'c_info-n1': state == 'info',
            'c_success-n1': state == 'success'
            }"
	>
		<div
			class="p_2 font_bold inline-flex "
			v-if="state != ''"
		>
			<Icon class="flex_none font-size_down m-r_3" style="width:2em; height:2em;" :state="state"></Icon>
			<div class="flex flex_column justify_center"><div class=""><slot>Enter A "{{ state }}" Message</slot></div></div>
		</div>
	</div>
</template>

<script>
import Icon from "./StateIcon.vue";
export default {
	name: "inputMessageHolder",
	components: {
		Icon
	},
	props: {
		state: {type:String,default:''}
	}
};
</script>

<style scoped>
.message-holder {
	transition: border-width 0.1s linear;
}
</style>