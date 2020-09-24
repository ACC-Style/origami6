<template>
	<div
		class="message-holder font_n1 br_solid br_0"
		v-bind:class="{
            'br_0': state != '',
            'br_alert-n1 c_alert-n1 br_0 br-t_1 m-t_n1': state == 'alert', 
            'br_warning-n1 c_warning-n1 br_0 br-t_1 m-t_n1': state == 'warning',
            'br_info-n1 c_info-n1 br_0 br-t_1 m-t_n1': state == 'info',
            'br_success-n1 c_success-n1 br_0 br-t_1 m-t_n1': state == 'success'
            }"
	>
		<div
			class="p_2 font_bold inline-flex"
			v-if="state != ''"
		>
			<Icon class="flex_none font_n3 m-r_3" style="width:2em; height:2em;" :state="state"></Icon>
			<slot>Enter A "{{ state }}" Message</slot>
		</div>
	</div>
</template>

<script>
import Icon from "./StatefullIcon.vue";
export default {
	name: "inputMessageHolder",
	components: {
		Icon
	},
	props: {
		state: ""
	}
};
</script>

<style scoped>
.message-holder {
	transition: border-width 0.1s linear;
}
</style>