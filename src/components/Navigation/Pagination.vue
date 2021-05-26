<template>
	<nav aria-label="Pagination" class="br_solid br_black-3 br_1 relative">
		<ul class="pagination flex flex_row ul_none justify_center">
			<li class="p-x_3 font_bold p-y_2 m-r_auto absolute relative:md b_n5 b_0:md p-b_3 font_n2 font_n1:md">
				<slot>
					<span class="show-for-sr display_none">You're on page</span> Page Number: {{ currentPage }} of {{totalPages}}
				</slot>
				
			</li>
			<li class="pagination-previous " v-if="currentPage > 1">
				<Btn :shadow="false" :corner="'square'" :size="'small'" :state="'none'" @onClick="onPrevPage()" :class="'br_1 br_solid br_1 bg_white h:bg_black-3'">
				<div class="flex flex_row nowrap">
					<i class="fas fa-arrow-left p-r_3"></i>
					<span class="show-for-sr display_none inline:md">Prev</span>
				</div>
				</Btn>
			</li>
			<li v-if=" currentPage < pageRange[0] ">
				<Btn :shadow="false" :corner="'square'" :size="'small'" :state="'secondary'" @onClick="onGoToPage(currentPage)" ><i class="fas fa-caret-left opacity_5 p-r_2"></i><span class="font_bold">{{currentPage}}</span>
				</Btn>
			</li>
			<li  v-if="pageRange[0] > 1">
				<Btn :shadow="false" :corner="'square'" :size="'small'" @onClick="shiftPageRangeDown()" ><i class="fas  fa-ellipsis-h left"></i>
				</Btn>
			</li>
			<li v-for="(page, index) in pageRange" v-bind:key="index">
				<Btn :shadow="false" :corner="'square'" :size="'small'" @onClick="onGoToPage(page)" :state="currentPageCheck(page)" >{{page}}
				</Btn>
			</li>
			<li v-if=" pageRange[pageRange.length - 1 ]+ 1 < totalPages ">
				<Btn :shadow="false" :corner="'square'" :size="'small'" @onClick="shiftPageRangeUp()" ><i class="fas  fa-ellipsis-h right"></i>
				</Btn>
			</li>
			<li v-if=" currentPage > pageRange[pageRange.length - 1] ">
				<Btn :shadow="false" :corner="'square'" :size="'small'" :state="'secondary'" @onClick="onGoToPage(currentPage)" ><span class="font_bold">{{currentPage}}<i class="fas fa-caret-right opacity_5 p-l_2"></i> </span>
				</Btn>
			</li>
			<li class="pagination-next">
				<Btn :shadow="false" :corner="'square'" :size="'small'" @onClick="onNextPage()" aria-label="Next Page">
				<span class="show-for-sr display_none inline:md">Next</span>
				<i class="fas fa-arrow-right p-l_3"></i>
				</Btn>
			</li>
		</ul>
	</nav>
</template>
<script>
import Btn from "../../components/subComponents/Btn"
export default {
	name: "pagination",
	components:{Btn},
	props: {
		currentPage:{default:3, type:Number},
		totalPages: {default:50, type:Number},
		listSize:{ default:5, type:Number},
	},
	computed: {
		pageRange: function() {
			let minRange = Math.max(1, this.min),
			maxRange = Math.min(this.totalPages, this.max);
			var array = [],
            j = 0;
            for(var i = minRange; i < maxRange; i++){
                array[j] = i;
                j++;
            }
            return array;
		}
	},
	data() {
		return {
			min:0,
			max:0,
		};
	},
	methods: {
		currentPageCheck(page){
			return (page == this.currentPage)?'secondary':'primary';
		},
		shiftPageRangeUp: function() { 
			this.min = this.min + this.listSize;
			this.max = this.max + this.listSize},
		shiftPageRangeDown: function() { 
			this.min =this.min - this.listSize;
			this.max =this.max - this.listSize},
			onNextPage(){this.onGoToPage(this.currentPage + 1)},
			onPrevPage(){this.onGoToPage(this.currentPage - 1)},
			onGoToPage(pageNumber){
				this.$emit("onGoToPage", pageNumber);
			}
	},
	created:function(){
		this.min = Math.floor(this.currentPage / this.listSize) * this.listSize;
		this.max = (Math.floor(this.currentPage / this.listSize) + 1) * this.listSize;	

	},
};
</script>
<style lang="css">
</style>
