<template>
	<div id="SummaryDisplay" class="z_0 bg_secondary-5 m-b_4 font_ui m-x_n4 m-x_3:md m-x_0:lg">
		<div
			class="flex bg_secondary-2 font_n2 font_n1:md c_white p_2 p-x_4 font_bold print-display_none"
		>
			<div class="flex_auto uppercase">
				list summary:
				<span
					class="c_secondary-n3 m-l_3 font_bold font_italic"
					v-if="filterStartDate == '1949-01-01' && filterEndDate==''"
				>None</span>
				<span v-else class="c_white font_bold m-l_3">
					{{filterStartDate}} to
					<span v-if="!filterEndDate">Today</span>
					<span v-if="filterEndDate">{{filterEndDate}}</span>
				</span>
			</div>
			<div class="flex_shrink p-l_4 uppercase">
				<span class="c_shade-n3 m-l_3">
					<span class="p-r_3">Filtered:</span>
					<span class="c_secondary-n3" v-if="filterStartDate != '1949-01-01' || filterEndDate==''">Date</span>
					<span class="m-x_2" v-if="(creditsOnly.length != 0) && (filterStartDate != '1949-01-01' || filterEndDate=='')" >&amp;</span>
					<span v-if="(creditsOnly.length != 0)">Credit</span>
				</span>
			</div>
		</div>
		<div class="flex print-br_black">
			<div class="flex_auto w_70:md w_60:md flex_column flex">
				<transition-group
					v-if="creditsOnly.length != 0"
					name="crossfade"
					tag="ul"
					class="ul_none flex bg_secondary-n1 flex_auto"
					v-bind:class="creditColumnClass"
				>
					<li
						class="p-x_4 flex lh_0 font_bold print-br_black"
						v-for="(value, key , index) in creditsOnly"
						v-bind:key="index+'_credit'"
						v-bind:class="[creditCounterDecoratorClass,creditBackgroundColorClass(key)]"
					>
						<span class="flex_auto p-r_4  self_center">{{key}}</span>
						<span class="flex_shrink  self_center">{{value}}</span>
					</li>
				</transition-group>
			</div>
			<div
				class="flex_shrink:md w_30:lg w_40:lg print-br_black flex_column flex br-l_2 br_solid br_white-3"
			>
				<div class="p-x_4 p-y_3 bg_primary c_white text_center lh_0 flex_auto flex_strech">
					<span class="block font_4">{{ allCreditsValue }}</span>
					<span class="block font_n2 font_bold c_primary-4 uppercase">Credits</span>
				</div>
				<div
					class="text_center bg_secondary-1 c_white uppercase h:bg_secondary-n1 p-y_2 font_ui font_n2 flex_auto"
					@click="$emit('showModalLegend')"
				>
					<span>
						<i class="fas fa-list-alt"></i>&nbsp;Credit Legend
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  /**
   * foo bar
   */
export default {
    name: "SummaryDisplay",
    data() {
        return {
            allCreditsValue: this.filteredCreditCount['All'],
            
        }
    },
	props: {
			filterStartDate: { type: String, default: "1949-01-01" },
			filterEndDate: { type: String, default: null },
			filteredCreditCount: { type: Object, required:true, default: ()=>({"All":0})}
        
	},
	methods: {
		creditBackgroundColorClass: function (credit) {
			return "bg_" + credit + " c_white";
        }
		
	},
	computed: {
        creditCounterDecoratorClass: function () {
            var count = Object.keys(this.filteredCreditCount).length - 1;
            var returnedClass = "flex_auto ";
            if(count >= 1){ 
                returnedClass +=  " p-y_3";
            }else{
                returnedClass +=  " p-y_4";
            }
            if(count < 3){returnedClass +=  " font_2";}
            if(count == 3){returnedClass +=  " font_1";}
            if(count == 4){returnedClass +=  " font_0";}
            if(count >= 4){returnedClass +=  "  w_50 br_solid br_white-5 br_1 font_n1";}
            return returnedClass;
        },
        creditsOnly: function(){
            var list = this.filteredCreditCount;
            delete list.All;
            return list;
        },
        creditColumnClass: function(){
            var count = Object.keys(this.filteredCreditCount).length - 1;
            var returnedClass = '';
            if( count >= 4 )
            {returnedClass =  'flex_row flex_wrap'; }
            else{ returnedClass =  'flex_column';}
            return returnedClass;
        },
        
	},
}
</script>

<style scoped>
</style>