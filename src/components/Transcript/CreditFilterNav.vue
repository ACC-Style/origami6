<template>
	<div id="CreditType" class="text_right:md flex_end flex_auto p-l_4:md p-l_0 p-t_3 p-t_0:md">
		<span class="uppercase c_shade h:c_white h:bg_shade font_bold font_n2 m-x_2 p-x_2" @click="$emit('onShowModalLegendEvent')">
			Filter Credit Types
			<i class="fa fas fa-question-circle"></i>
		</span>
		<ul
			class="flex flex_row flex_wrap flex_nowrap:md flex_row-reverse:md  font_bold font_n2 font_ui ul_none"
		>
			<li
				class="flex_shrink br_1 br_solid br_white-7 flex"
				:class="{'active is-active': selectedFilters.includes('None')}"
			>
				<Btn
					@onClick="onFilterReset()"
					:state="'primary'"
					:size="btnConfig.size"
					:shadow="btnConfig.shadow"
					:corner="btnConfig.corner"
					:class="btnConfig.classes"
					
				><span v-html="'None'"></span></Btn>
			</li>
			<li
				class="flex_shrink br_1 br_solid br_white-7 "
				v-for="(credit, index) in creditTypesInDateRange"
				:key="index+'_creditFilter'"
			>
				<Btn
					@onClick="onFilterClick(credit.styleCode)"
					:state="btnConfig.state"
					:size="btnConfig.size"
					:shadow="btnConfig.shadow"
					:corner="btnConfig.corner"
					:isActive="selectedFilters.includes(credit.styleCode)"
					:class="[{['bg_'+credit.styleCode+'-n2 a:c_white']: selectedFilters.includes(credit.styleCode)},btnConfig.classes]"
				>
					<span v-html="credit.shortName"></span>
				</Btn>
			</li>
		</ul>
	</div>
</template>

<script>
import Btn from "../subComponents/Btn";
export default {
	name: "CreditFilterNav",
	components: {
		Btn
	},
	props: {
		creditTypesInDateRange: {
			type: Array,
			default: () => []
		},
		btnConfig:{type:Object,default:()=>{
            return new Object({
				state:"black",
				size:'',
				shadow:false,
				corner:"square",
				classes:''
            });
        }}
	},
	data: () => ({
		selectedFilters: ["None"]
	}),
	methods: {
		onFilterClick: function (type) {
			// First purge the array if it has the default filter of "None"
			if (this.selectedFilters.includes("None")) {
				this.selectedFilters = [];
			}

			if (this.selectedFilters.includes(type)) {
				this.selectedFilters.splice(this.selectedFilters.indexOf(type), 1);
			}
			else {
				this.selectedFilters.push(type);
			}

			// If array is empty again, then default to "None"
			if (this.selectedFilters.length === 0) {
				this.onFilterReset();
				return;
			}

			this.$emit("onUpdatefilter", this.selectedFilters);
		},
		onFilterReset: function () {
			this.selectedFilters = ["None"];
			this.$emit("onUpdatefilter", this.selectedFilters);
		}
	}
};
</script>
<style>
	sup{line-height: 0;}
</style>