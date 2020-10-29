<template>
	<article class="br_solid br_1 br_black-2 bg_black-01 p_4 br_round relative max-w_30">
		<aside data-type="date" class="float_left m-t_n4 m-l_4:md br-t_0 br_1 br_solid br_black-2 l_4 bg_primary-5 p-x_4 p-y_4 font_0 text_center font_display c_black-7">
			<span class="block:md font_1:md font_medium lh_0">{{ month }}</span>
			<span class="block:md font_6:md font_light lh_0">{{ dates }}</span>
		</aside>
		<div data-type="registeredFlag"></div>
		<header class="clear_both p-x_3:md p-t_1:md">
			<h2 class="font_display font_5:lg c_primary m-t_4 m-b_3">{{ title }}</h2>
		</header>
		<main class="p-x_3:md p-b_4:md font_1">
			<div>
				<i class="fas fa-clock c_black-5"></i><span class="m-l_2">{{ hours }}</span>
			</div>
			<div><i class="fas fa-map-marker-alt c_black-5"></i><span class="m-l_2">{{ eventType }}</span></div>
			<div>
				<i class="fas fa-user-graduate c_black-5"></i>
				<span class="m-l_2 m-t_n2 inline-block">
                    <Credit
                    class="m-r_3"
					:type="credit.type"
					:value="credit.value"
					:styleCode="credit.type"
                    :size="'tiny'"
					v-for="(credit, index) in credits"
					:key="index"
				/>
                </span>
			</div>
		</main>
		<footer class="flex justify_around">
			<Btn class="flex_auto m-x_3 text_center" :size="'medium'" :corner="'radius'" :shadow="true"><span class="flex_grow" :state="'empty'">Learn More</span></Btn>
			<Btn class="flex_auto m-x_3 text_center" :size="'medium'" :corner="'radius'" :shadow="true"><span class="flex_grow">Register</span></Btn>
			<Btn class="flex_auto m-x_3 text_center" :size="'medium'" :corner="'radius'" :shadow="true"><span class="flex_grow">Join</span></Btn>
		</footer>
	</article>
</template>

<script>
import Btn from "../subComponents/Btn";
import Credit from "../subComponents/CreditChiclet";
import moment from 'moment';
import tz from 'moment-timezone';
export default {
	props: {
		startDate: { type: Date },
		endDate: { type: Date },
		title: { type: String },
        credits: { type: Array, default: () => [] },
        timezone:{type:String, default:"America/New_York"},
        eventType:{type:String}
	},
	components: {
		Btn,
		Credit,
	},
	data() {
		return {};
	},
	computed: {
		month() {
			return moment(this.startDate).tz(this.timezone).format("MMM");
		},
		dates() {
            let start = moment(this.startDate).tz(this.timezone).format("D");
            let end = moment(this.endDate).tz(this.timezone).format("D");
            if(start === end){
                return start;
            }else{
                return start + " - " + end;
            }
			return "20";
		},
		hours() {
            let start = moment(this.startDate).tz(this.timezone).format('h'),
                startMedian = moment(this.startDate).tz(this.timezone).format('a'),
                end = moment(this.endDate).tz(this.timezone).format('h'),
                endMedian = moment(this.endDate).tz(this.timezone).format('a'),
                timezone = moment(this.startDate).tz(this.timezone).format('z');
if(start === end && startMedian === endMedian ){ 
    return start + " " + startMedian +" "  + timezone;
}else if(startMedian === endMedian){
	return start + " - " + end + " " + startMedian +" "  + timezone;
}else{
    return start + " " + startMedian + " - " + end + " " + endMedian +" "  + timezone;
}

		
		},
	},
};
</script>

<style scoped></style>
