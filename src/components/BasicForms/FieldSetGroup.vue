<template>
	<fieldset
		class="
			flex flex_row:md
			gap-x_4
			flex_wrap
			br_solid br_radius br_2
			p-b_4
		"
        :class="css.borderColor"
	>
		<legend class="w_100 m-t_n4 m-l_n3 lh_0 font-size_up" :class="css.fontColor">
			<span
				class="bg_white p-x_4 font_dispay font_bold"
				v-html="legend"
			></span>
		</legend>
		<slot name="default"></slot>
	</fieldset>
</template>

<script>
export default {
	name: 'FieldSetGroup',
	props: {
		legend: { type: String, default: 'Label of the Group of Inputs' },
        color: { type: String, default: '' },
	},
    computed:{
        css(){
            let css={fontColor:"c_black",borderColor:"br_black-2"};
            if(this.color !== ""){
                css.fontColor="c_"+this.color+'-n2';
                css.borderColor="br_"+this.color;

            }
            return css;
        }
    }
}
</script>

<style scoped>
</style>