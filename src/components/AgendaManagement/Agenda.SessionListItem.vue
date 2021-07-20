<template>
	<HoverContainer
		:actionIcon="actionIcon"
		:actionColor="actionColor"
		:actionLabel="'edit session'"
		:actionTask="actionTask"
		@onclick="$emit('onClick', $event)"
	>
		<div class="flex flex_row:md flex_column flex relative" @mouseenter="
						() => {
							actionColor = actionColorDefault;
							actionIcon = actionIconDefault;
							actionTask = actionTaskDefault;
						}
					">
			<StatefullIcon :showIcon="true" :state="(state == 'success')?'shade':state" :icon="'far fa-kaaba'" class="flex_none p_2 m_n1 m-r_0" />
			<div class="flex_auto p-y_3 p-l_4 p-r_4:md p-r_5">
				<h3 class="c_primary m_0 p_y_2 lh_1 font-size_up font_display">
						<span class="font_bold">{{sessionId}}. </span>
						{{label}}				
		
				</h3>
				<div class="flex flex_inline flex_wrap">
					<div
						class="flex_auto flex flex_inline self_stretch font_n1 align_center:md justify_start"
					>
						
						<ul
							class="ul_none flex flex_inline self_stretch font_n1:md align_center justify_center flex_wrap c_primary"
						>
							<li>
								<strong class="font_bold c_black-6 p-r_2 lh_1">state</strong>
								<span class="font_regular lh_1" :class="[{'c_alert-n1': state == 'alert'},{'c_warning-n1': state == 'warning'},{'c_black-8': state == 'success'}]">{{stateLabel}}</span>
							</li>
							<li>
								<strong class="font_bold c_black-6 p-l_4 p-r_2 lh_1">active time:</strong>
								<span class="font_regular lh_1">{{activeDate}} @ {{activeTime}}</span>
							</li>
							<li class="">
								<strong class="font_bold c_black-6 p-l_4 p-r_2 lh_1">credits</strong>
								<span
									class="font_regular lh_1"
									v-for="(credit, index) in credits"
									:key="'credit_'+index"
								>
									<span v-if="index > 0" class="c_black-6 p-r_2"
										>,</span
									><span v-html="credit.label"></span>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<ul
				class="ul_none flex_none m-l_auto flex flex_row-reverse self_stretch font_0 align_center"
			>
				<li
					class="align_center self_center"
					@mouseenter="
						() => {
							actionColor = 'alert';
							actionIcon = ' fa-trash-alt ';
						}
					"
					@mouseleave="
						() => {
							actionColor = actionColorDefault;
							actionIcon = actionIconDefault;
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
						class="z_2 absolute t_0 r_3 inline-block display_none:md"
						:state="'alert'"
						:shadow="false"
						:size="'tiny'"
						:corner="'square'"
						><i class="far fa-times self_center"></i
					></Btn>
				</li>
			</ul>
		</div>
	</HoverContainer>
</template>

<script>
import HoverContainer from "../AdvancedContainers/hoverContainer.vue";
import StatefullIcon from "../subComponents/StatefullIcon.vue";
import Btn from "../subComponents/Btn.vue";
export default {
	props: {
		id:{type:String,default:'-1'},
		sessionId:{type:Number,default:0},
		label:{type:String, default:'missing label'},
		state:{type:String, default:'alert'},
		stateLabel:{type:String, default:'missing source'},
		activeTime:{type:[String,Date]},
		activeDate:{type:[String,Date]},
		credits: { type: Array, default: () => ["cme", "cne"] },
		actionColorDefault: { type: String, default: "primary" },
		actionIconDefault: { type: String, default: "fa-pencil-alt" },
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
	mounted() {
		this.actionIcon = this.actionColorDefault;
		this.actionColor = this.actionColorDefault;
		this.actionTask = this.actionTaskDefault;
	},
	components: { HoverContainer, Btn, StatefullIcon },
};
</script>

<style scoped></style>
