<template>
	<article
		class="
			m_5
			p_4
			shadow_2
			br_radius br_solid br_2 br_white-9
			bg_shade-5
			font_ui
		"
	>
		<div class="w_max-75">
            <h1
			class="
				font_regular
				p_3
				font_2
				text_center
				br-b_1
				br_solid br_shade-4
			"
		>
			<i class="far fa-exclamation-triangle p-r_3" v-show="icon"></i><slot name="header">Nothing has loaded.</slot>
             
			<i class="far fa-exclamation-triangle p-l_3" v-show="icon"></i>
		</h1>
		<p class="font_0 p-y_3 lh_3 text_center">
			<slot name="default"> There is nothing here.  Try another search or adding something to this area. </slot>
		</p>
        <div class="flex flex_row justify_center">
            <slot name='footer'></slot>
        </div>
        </div>
	</article>
</template>

<script>
export default {
	name: "ListEmptyCard",
	props: {
		icon: {type:Boolean, default:true}
	}
    }
</script>

<style scoped>
</style>