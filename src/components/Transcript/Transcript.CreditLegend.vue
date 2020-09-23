<template>
	<ul class="ul_none m-b_4 lh_4 ">
		<li
			class="flex flex_row flex_nowrap"
			v-for="(credit, index) in creditTypes"
			v-bind:key="'legendkey_' + index"
		>
			<div
				class="br_1 br_white-3 br_solid w_30 c_white p-x_3 p-y_2 text_center font_bold"
				:class="['bg_'+credit.styleCode]"
				v-html="credit.shortName"
			></div>
			<div class="w_70 p-x_3 p-y_2 br-t_1 br-r_1 br-b_1 br_solid br_black-2">
				<p
					class="font_0 c_shade-n4 lh_1 font_copy vertical-align_middle inline-block"
					v-html="credit.fullName"
				></p>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
	name: "credit-legend",
	props: {
		creditTypes: {
			type: Array,
			default: () => [
				{
					styleCode: "COP",
					shortName: "bg_COP",
					fullName: "Certificate of Participation"
				}
			]
		}
	},
	data: function() {
		return { foo: "bar" };
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
</style>