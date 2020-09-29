<template>
<div>		
<div  v-if="seats == null" class="cursor_wait">
	<SingleSeatLoading />
</div>
<div v-else-if="seats.length > 0">
	<ul class="ul_none" v-for="(seat, index) in sortedSeatArray" :key="index">
		<SingleSeat v-bind="seat"/>
	</ul>
</div>
<div v-else class="reading-typography max-w_65">
	<H3 class="font">You Currently Don't have any Seats for this product in this Group.</H3>
	<p class="font_copy"> You will need to add seats to this group before you can proceed.  To add seats you will need to pull empty seats from the other groups. You can do by transfering empty seats from another group. </p>
	<Btn :size="'large'">Transfer Seats</Btn>
	<h4>This seems to be in error.</h4>
	<p>If it has been longer or you know you have had seats on this product before please refresh and if the problem persists please contact customer support. </p>
</div>
</div>
</template>

<script>
import Btn from '../../subComponents/Btn'
import SingleSeat from "./Seat/Seat.SingleSeat.Overview.vue";
import SingleSeatLoading from "./Seat/Seat.SingleSeat.Loading.vue";


export default {
	components: {
		SingleSeat,SingleSeatLoading,Btn
	},
	props: {
		seats:{type:Array}
	},
	data() {
		return {
			
		};
	},
	methods: {
		action() { },
		compare(key, order = 'asc') {
            return function innerSort(a, b){
                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    // property doesn't exist on either object
                    return 0;
                }
                const varA = (typeof a[key] === 'string')? a[key].toUpperCase() : a[key];
                const varB = (typeof b[key] === 'string')? b[key].toUpperCase() : b[key];
                let comparison = 0;
                if (varA > varB) {
                comparison = 1;
                } else if (varA < varB) {
                comparison = -1;
                }
                return (
                (order === 'desc') ? (comparison * -1) : comparison
                );
            }
        }
	},
	computed: {
	sortedSeatArray(){
		return this.seats.sort(this.compare('status'));
	}
	},
};
</script>

<style lang="css">

</style>
