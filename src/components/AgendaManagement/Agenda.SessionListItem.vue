<template>
	<HoverContainer
		:actionIcon="actionIcon"
		:actionColor="actionColor"
		:actionLabel="'edit channel'"
	>
		<div class="flex flex_row:md flex_column flex relative" @mouseenter="
						() => {
							actionColor = actionColorDefault;
							actionIcon = actionIconDefault;
						}
					">
			<StatefullIcon :showIcon="false" :state="state" class="flex_none p_2 m_n1 m-r_0" />
			<div class="flex_auto p-y_3 p-l_4 p-r_4:md p-r_5">
				<h3 class="c_primary m_0 font_2 font_display">
					<span class="block">
						<!-- <i class="fas fa-cube p-r_2 c_black-4"></i> -->
						<span class="font_bold">{{sessionId}}. </span>{{sessionTitle}}
						<span class="display_none inline-block:md"
							><i class="far fa-pencil-alt p-l_3"></i></span
					></span>
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
								<span class="font_regular lh_1" :class="[{'c_alert-n1': state == 'alert'}]">{{stateLabel}}</span>
							</li>
							<li>
								<strong class="font_bold c_black-6 p-l_4 p-r_2 lh_1">active time:</strong>
								<span class="font_regular lh_1">{{activeTime}}</span>
							</li>
							<li class="">
								<strong class="font_bold c_black-6 p-l_4 p-r_2 lh_1">credits</strong>
								<span
									class="font_regular lh_1"
									v-for="(credit, index) in credits"
									:key="credit"
								>
									<span v-if="index > 0" class="c_black-6 p-r_2"
										>,</span
									>{{credit}}
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
						><i class="far fa-times"></i
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
		sessionId:{type:Number,default:0},
		sessionTitle:{type:String, default:'missing label'},
		state:{type:String, default:'alert'},
		stateLabel:{type:String, default:'missing source'},
		activeTime:{type:String, default:new Date().toDateString()},
		credits: { type: Array, default: () => ["cme", "cne"] },
		actionColorDefault: { type: String, default: "primary" },
		actionIconDefault: { type: String, default: "fa-pencil-alt" },
	},
	data() {
		return {
			actionIcon: this.actionColorDefault,
			actionColor: this.actionColorDefault,
		};
	},
	mounted() {
		this.actionIcon = this.actionColorDefault;
		this.actionColor = this.actionColorDefault;
	},
	components: { HoverContainer, Btn, StatefullIcon },
};
</script>

<style scoped></style>
