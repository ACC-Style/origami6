<template>
	<fieldset
		class="
			relative flex flex_row:md
			gap-x_4
			flex_wrap
			br_solid br_radius br_2
			p-b_4
		"
        :class="fieldSetCSS.borderColor"
	>
		<legend v-if="hasLegend" class="absolute r_auto w_auto t_n3 m-t_n2 p-x_3 l_2 lh_0 font-size_up-1 bg_white p-x_4 font_display font_medium" :class="fieldSetCSS.fontColor">
			<slot name="legend">Legend Slot</slot>
		</legend>
		<slot name="default"></slot>
		
	</fieldset>
</template>

<script>
export default {
	name: 'FieldSetGroup',
	props: {
		legend: { type: String, default: 'Label of the Group of Inputs' },
        state: { type: String, default: '' },
	},
    computed:{
		hasLegend(){
			console.log();
			if(this.$slots.legend == undefined){ 
				return false;
			}
			return this.$slots.legend[0].text.length>0;
		},
        fieldSetCSS(){
            let css={fontColor:"c_black-8",borderColor:"br_black-2"};
            if(this.state !== ""){
                css.fontColor="c_"+this.state+'-n2';
                css.borderColor="br_"+this.state;

            }
            return css;
        }
    }
}
</script>

<style scoped>
</style>