<template>
	<HoverContainer :actionIcon="actionIcon" :actionColor="actionColor" :actionLabel="'edit channel'" :actionTask="actionTask" @onclick="$emit('onClick', $event)">
		<div class="flex flex_row:md flex_column flex relative">
			<div class="flex_none w_40:lg p-y_3 p-l_4 p-r_4:md p-r_5">
				<h3 class="c_primary m_0 font_2 font_display ">
					<span class="block">
						<!-- <i class="fas fa-cube p-r_2 c_black-4"></i> -->
						{{ label }}
						<span class="display_none inline-block:md"><i class="far fa-pencil-alt p-l_3"></i
					></span></span>
				</h3>
				<small class="c_black-7 font_n2 block m-l_1"
					>{{ releaseMode }}</small
				>
			</div>
			<div
				class="flex_none w_10:lg  flex flex_column:md flex_inline self_stretch font_0 align_center:md justify_center:md "
			>
				<strong class="font_bold block text_right c_black-8 p-l_4 lh_1">credits</strong>
				<ul
					class="ul_none m-l_auto:md flex flex_inline self_stretch font_n1:md justify_end flex_wrap c_primary p-l_3"
				>
					<li class="font_regular lh_1" v-for="(credit,index) in credits" :key="'credit_'+index"><span v-if="index>0" class="c_black-6 p-x_2">,</span><span v-html="credit.label">~</span></li>
				</ul>
			</div>
			<StateChart :chartData="chartData" class="p_3 p-x_4 flex_auto w_40 font_1"/>
			<ul
				class="ul_none flex_none m-l_auto flex flex_row-reverse self_stretch font_0 align_center"
			>
				<li
					class="align_center self_center"
					@mouseenter="
						() => {
							actionColor = 'alert';
							actionIcon = ' fa-trash-alt ';
							actionTask = 'delete'
						}
					"
					@mouseleave="
						() => {
							actionColor = actionColorDefault;
							actionIcon = actionIconDefault;
							actionTask = actionTaskDefault;
						}
					"
				>
					<Btn
						class="bg_white h:bg_black-3 z_2 m-r_4 m-y_0:md m-y_3 display_none inline-block:md"
						:state="'none'"
						:shadow="false"
						:size="'small'"
						>Remove <i class="p-l_3 far fa-times"></i
			
					></Btn>
						<Btn
						class="z_2 absolute t_0 r_3  inline-block display_none:md"
						:state="'alert'"
						:shadow="false"
						:size="'tiny'"
						:corner="'square'"
						><i class="far fa-times"></i
					></Btn>
				</li>
			</ul>
		</div>
	</HoverContainer>
</template>

<script>
import HoverContainer from "../AdvancedContainers/hoverContainer.vue";
import StateChart from "./SubComponents/Agenda.StateChart.vue";
import Btn from "../subComponents/Btn.vue";
export default {
	name:"ChannelListItem",
	props: {
		label:{type:String,	default:'Label is Missing'	},
		releaseMode:{
				type:String, 
				default:'Scheduled',
				validator:function(value){ return ['Scheduled','On Demand'].indexOf(value) !== -1;}
		},
		credits: { type: Array, default: () => [] },
		chartData:{type:Array, default:()=>[]},
		actionColorDefault:{type:String,default:'accent'},
		actionIconDefault:{type:String,default:'fa-pencil-alt'},
		actionTaskDefault:{
			type:String,
			default:'edit',
			validator: function (value) {
				return ['edit', 'delete','navigateTo'].indexOf(value) !== -1;
			}
		}
	},
	data() {
		return {
			actionIcon: this.actionColorDefault,
			actionColor: this.actionColorDefault,
			actionTask: this.actionTaskDefault,
		};
	},
	components: { HoverContainer, Btn, StateChart },
	methods: {

	}
}
</script>

<style scoped></style>
