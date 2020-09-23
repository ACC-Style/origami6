<template>
	<div
		class="message-holder font_n1 br_solid br_0"
		v-bind:class="{
            'br_0': state != '',
            'br_alert-n1 c_alert-n1 br_0 br-t_3': state == 'alert', 
            'bg_warning-n1 c_warning-n1 br_0 br-t_3': state == 'warning',
            'bg_info-n1 c_info-n1 br_0 br-t_3': state == 'info',
            'bg_success-n1 c_success-n1 br_0 br-t_3': state == 'success'
            }"
	>
		<div
			class="p_2 font_bold"
			v-if="state != ''"
			v-bind:class="{
                    'c_alert-n1': state == 'alert',
                    'c_warning-n1': state == 'warning',
                    'c_info-n1': state == 'info',
                    'c_success-n1': state == 'success'
                        }"
		>
			<i
				class="fas fa-fw m-x_2"
				v-bind:class="{
						'fa-exclamation-square': state == 'alert',
						'fa-exclamation-triangle': state == 'warning',
						'fa-lightbulb-exclamation': state == 'info',
						'fa-check-square': state == 'success'
						}"
			></i>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "inputMessageHolder",
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