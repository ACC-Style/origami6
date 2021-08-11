<template>
	<HoverContainer
		:actionIcon="actionIcon"
		:actionColor="actionColor"
		:actionLabel="'edit channel'"
		:actionTask="actionTask"
		@onclick="$emit('onClick', $event)"
	>
		<div class="flex flex_row:md flex_column flex relative"  @mouseenter="
						() => {
							actionColor = actionColorDefault;
							actionIcon = actionIconDefault;
							actionTask = actionTaskDefault;
						}
					">
					<StateIcon :showIcon="true" :state="state" :icon="'far fa-cube'" class="flex_none p_2 m_n1 m-r_0" />
			<div class="flex_none w_40:lg p-y_3 p-l_4 p-r_4:md p-r_5">
				<h3 class="c_primary m_0 font-size_up p-y_2 lh_1 font_display">{{ label }}

				</h3>
				<small class="c_black-7 font-size_down-2 block m-l_1">{{
					releaseMode
				}}</small>
			</div>
			<div
				class="
					flex_none
					w_5:lg
					p-y_3
					flex flex_column:md flex_inline
					self_stretch
					font_0
					align_center:md
					justify_start:md
					font-size_down-1
				"
			>
				<strong
					class="
						font_bold
						block
						text_right
						c_black-8
						p-l_4
						lh_1
						m-b_2:md
					"
					>credits</strong
				>
				<ul
					class="
						ul_none
						m-l_auto:md
						flex 
						self_stretch
						justify_end
						flex_wrap
						flex_row
						flex_column:md
						c_primary
						p-l_3
					"
				>
					<li class="p-l_3" v-if="credits.length === 0">~</li>
					<li
						class="font_regular lh_1"
						v-for="(credit, index) in credits"
						:key="'credit_' + index"
					>
						<span v-if="index > 0" class="c_black-6 p-x_2 display_none:md">,</span
						><span v-html="credit.label">~</span>
					</li>
				</ul>
			</div>
			<StateChart
				:chartData="chartData"
				class="p_3 p-x_4 flex_auto w_40:md font_1"
			/>
			<ul
				class="
					ul_none
					flex_none
					m-l_auto
					flex flex_row-reverse
					self_stretch
					font_0
					align_center
				"
			>

				<li
					class="align_center self_center"
					@mouseenter="
						() => {
							actionColor = 'alert';
							actionIcon = ' fa-trash-alt ';
							actionTask = 'delete';
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
						class="
							bg_white
							h:bg_black-3
							z_2
							m-r_4
							m-y_0:md m-y_3
							"
						:state="'none'"
						:shadow="false"
						:size="'small'"
						>Remove <i class="p-l_3 far fa-times"></i
					></Btn>
				</li>
							<li
					class="align_center self_center"
					@mouseenter="
						() => {
							actionColor = 'primary';
							actionIcon = ' fa-pencil ';
							actionTask = 'edit';
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
						class="
							bg_white
							h:bg_black-3
							z_2
							m-r_4
							m-y_0:md m-y_3 display_none:md
							"
						:state="'none'"
						:shadow="false"
						:size="'small'"
						>Edit <i class="p-l_3 far fa-pencil"></i
					></Btn></li>
			</ul>
		</div>
	</HoverContainer>
</template>

<script>
import HoverContainer from "../AdvancedContainers/hoverContainer.vue";
import StateChart from "./SubComponents/Agenda.StateChart.vue";
import StateIcon from "../subComponents/StateIcon.vue";
import Btn from "../subComponents/Btn.vue";
export default {
	name: "ChannelListItem",
	props: {
		label: { type: String, default: 'Label is Missing' },
		releaseMode: {
			type: String,
			default: 'Scheduled',
			validator: function (value) { return ['Scheduled', 'On Demand'].indexOf(value) !== -1; }
		},
		credits: { type: Array, default: () => [] },
		chartData: { type: Array, default: () => [] },
		actionColorDefault: { type: String, default: 'accent' },
		actionIconDefault: { type: String, default: 'fa-pencil-alt' },
		actionTaskDefault: {
			type: String,
			default: 'edit',
			validator: function (value) {
				return ['edit', 'delete', 'navigateTo'].indexOf(value) !== -1;
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
	computed:{
        state:function(){
            if(this.chartData.length == 0){ return 'shade';}         
            let chartState = this.chartData.reduce((prev, curr) => {
                let color = curr.color.toString(); 
                if( prev[color] == null ){
                    prev[color] = curr.count;
                }
                return prev;
            } , {} );
            if( chartState.alert > 0 ){
                return 'alert';
            }
            else if( chartState.warning > 0 ){
                return 'warning';
            }
            else{
                return 'shade';
            }
        }

    },
	components: { HoverContainer, Btn, StateChart,StateIcon },
	mounted() {
		this.actionIcon = this.actionColorDefault;
		this.actionColor = this.actionColorDefault;
		this.actionTask = this.actionTaskDefault;
	},
	methods: {

	}
}
</script>

<style scoped></style>
