<template>
	<div class="p_4:md font_ui relative">
		<header class="br-b_1 br_solid br_black-1 m-b_2 p-b_2:md">
			<div
				class="time font_n1 lh_1 block clear_fix flex relative br_solid br_black-3 br-t_1"
			>
				<div
					class="p_2 m-r_3 p-t_3 flex_shrink font_xbold c_black-7 font-size_up m-t_n1"
					>
                    <span class="c_warning p_2 p-x_3 m-t_n3 m-b_3 vertical-align_top m-l_n2 m-r_2 bg_warning c_white block inline-block:md w_100 w_auto:md" v-show="isLive && isPlayable"><i class="fas fa-video p-r_3"></i> In Progress</span>
                    <span class="c_warning p-r_3" v-show="!isPlayable">(Coming Soon to On Demand)</span>
                    May 15, 12:15 PM - 1:45 PM 
					<span
						class="p-t_2 font-size_down font_bold c_primary-1 text_left display_none:md inline-block w_100"
						>Session Format</span
					></div
				>
				<div
					class="m-t_n1 flex_column absolute t_0 r_0 flex_row-reverse:md flex flex_shrink self_start m-l_auto"
				>
					<TabFlag
						v-if="faved"
						class=""
						:type="''"
						:text="'favorite'"
						:icon="'fa-heart'"
						:color="'bg_alert'"
					/>
					<!-- <TabFlag
						v-if="(isLive && isPlayable)"
						class=""
						:type="''"
						:text="'in progress'"
						:icon="'fa-video'"
						:color="'bg_warning'"
					/> -->
					<span
						class="p_2 p-x_3 m-r_1 flex_shrink font_bold p-x_3 bg_primary c_white display_none inline-block:md"
						>Session Format</span
					>
				</div>
			</div>
			<div
				class="flex flex_inline w_100 m-t_3 flex_column flex_row:md gap-y_3 p-y_0:md p-t_3 p-b_4"
			>
				<h2 class="flex_auto lh_1 font_3 font_display m_0 c_primary">
					{{ title }}
				</h2>
				<aside
					class="actions relative flex flex_shrink flex_inline gap-x_2 flex_nowrap justify_start self_start text_center self_end m_auto m-r_0:md"
				>
					<Btn
						@onClick="faved = !faved"
						:shadow="false"
						:state="'secondary'"
						><i class="fas fa-heart"></i
					></Btn>
                    <Btn class="m-l_2" v-show="!isPlayable" :state="'secondary'" :isDisabled="true">Watch</Btn>
					<Btn class="m-l_2" v-show="isPlayable">Watch</Btn>
				</aside>
			</div>
		</header>
		<aside>
			<ul
				class="ul_none flex flex_inline flex_wrap flex_row flex_column clear_fix gap-x_2 gap-y_2"
			>
				<li>
					<strong
						class="font_bold c_primary-1 m-t_3 self_center p-r_3 font_0"
						>Credits</strong
					>
				</li>
				<Credit
					:type="'CME'"
					:styleCode="'CME'"
					:value="valueCME"
					:showValue="showValue"
					:isDisabled="isValueZero(valueCME)"
					:size="'tiny'"
				/>
				<Credit
					:type="'CNE'"
					:styleCode="'CNE'"
					:value="valueCNE"
					:showValue="showValue"
					:isDisabled="isValueZero(valueCNE)"
					:size="'tiny'"
				/>
				<Credit
					:type="'COP'"
					:styleCode="'COP'"
					:value="valueCOP"
					:showValue="false"
					:isDisabled="isValueZero(valueCOP)"
					:size="'tiny'"
				/>
				<Credit
					:type="'MOC'"
					:styleCode="'MOCII'"
					:value="valueMOC"
					:showValue="showValue"
					:isDisabled="isValueZero(valueMOC)"
					:size="'tiny'"
				/>
				<Credit
					:type="'CNErx'"
					:styleCode="'CNErx'"
					:value="valueCNErx"
					:showValue="showValue"
					:isDisabled="isValueZero(valueCNErx)"
					:size="'tiny'"
				/>
				<Credit
					:type="'ECME'"
					:styleCode="'ECME'"
					:value="valueECME"
					:showValue="showValue"
					:isDisabled="isValueZero(valueECME)"
					:size="'tiny'"
				/>
				<Credit
					:type="'ABP MOC'"
					:styleCode="'ABPMOCII'"
					:value="valueABPMOCII"
					:showValue="showValue"
					:isDisabled="isValueZero(valueABPMOCII)"
					:size="'tiny'"
				/>
				<Credit
					:type="'CPE'"
					:styleCode="'CPE'"
					:value="valueCPE"
					:showValue="showValue"
					:isDisabled="isValueZero(valueCPE)"
					:size="'tiny'"
				/>
				<Credit
					:type="'IPE'"
					:styleCode="'IPE'"
					:value="valueIPE"
					:showValue="showValue"
					:isDisabled="isValueZero(valueIPE)"
					:size="'tiny'"
				/>
				<Credit
					:type="'PA'"
					:styleCode="'PA'"
					:value="valuePA"
					:showValue="showValue"
					:isDisabled="isValueZero(valuePA)"
					:size="'tiny'"
				/>
			</ul>
		</aside>
		<main class="flex_row flex flex_wrap-reverse">
			<div
				class="flex_auto reading-typography font_copy w_70:lg c_black-8 lh_1 p_4 p-l_0"
                v-html="description"
			>
			
			</div>
			<div class="flex_auto flex flex_column w_30:lg p-l_5:md">
				<strong class="font_bold c_primary-n1 m-t_3 font_0"
					>Learning Pathway</strong
				>
				<ul class="ul_none font_n1 c_black-7 lh_1">
					<li class="br-b_1 br_solid br_black-1 p-y_2">
						{{ learningPathway }} 
					</li>
				</ul>
			</div>
		</main>
		<aside class="m-b_5 m-b_4:md">
			<a
				class="link font-size_down c_primary-n1 block"
				@click="extendedInfo = !extendedInfo"
				><i
					class="fas fa-plus transition_3"
					:class="{ 'rotate-45': extendedInfo }"
				></i>
				Show full session information</a
			>
			<TransitionExpand>
				<div
					v-if="extendedInfo"
					class="block w_100 clear_both br-t_2 br_primary-3 br_dashed m-t_2 p-t_3"
				>
					<div class="flex flex_row:md flex_column">
						<div
							class="flex_column flex br_black-_05 br_solid br_1 flex_auto w_70:lg"
						>
							<div
								class="flex_row flex justify_start bg_black-_05"
							>
								<div
									class="font_n1 font_0:md font_1:lg p_3 p-r_4 self_center br-r_1 br_dotted br_primary w_30:lg w_40 flex_none c_accent-n2 font_xbold"
								>
									12:15 PM - 1:45 PM
								</div>
								<div class="font_1 p_3 p-l_4 self_center lh_1">
									<strong
										class="font_bold block font-size_down c_primary-n1"
										>Chair</strong
									>
									<span class="block font-size_up c_black"
										>Anita Deswal</span
									>
									<span
										class="c_black-8 block font-size_down m-t_2"
										>Bellaire, TX</span
									>
								</div>
							</div>
							<div class="flex_row flex justify_start bg_black-1">
								<div
									class="font_n1 font_0:md font_1:lg p_3 p-r_4 self_center br-r_1 br_dotted br_primary w_30:lg w_40 flex_none c_accent-n2 font_xbold"
								>
									12:15 PM - 12:27 PM
								</div>
								<div class="font_1 p_3 p-l_4 self_center lh_1">
									<strong
										class="font_bold block font-size_down c_primary-n1"
										>Pathophysiology of HFpEF 101</strong
									>
									<span class="block font-size_up c_black"
										>Harriette G. Van Spall</span
									>
									<span
										class="c_black-8 block font-size_down m-t_2"
										>Toronto, Canada</span
									>
								</div>
							</div>
							<div
								class="flex_row flex justify_start bg_black-_05"
							>
								<div
									class="font_n1 font_0:md font_1:lg p_3 p-r_4 self_center br-r_1 br_dotted br_primary w_30:lg w_40 flex_none c_accent-n2 font_xbold"
								>
									12:27 PM - 12:39 PM
								</div>
								<div class="font_1 p_3 p-l_4 self_center lh_1">
									<strong
										class="font_bold block font-size_down c_primary-n1"
										>Essentials for Diagnosis and Work up of
										HFpEF</strong
									>
									<span class="block font-size_up c_black"
										>Michael R. Zile</span
									>
									<span
										class="c_black-8 block font-size_down m-t_2"
										>Charleston, SC</span
									>
								</div>
							</div>
							<div class="flex_row flex justify_start bg_black-1">
								<div
									class="font_n1 font_0:md font_1:lg p_3 p-r_4 self_center br-r_1 br_dotted br_primary w_30:lg w_40 flex_none c_accent-n2 font_xbold"
								>
									12:39 PM - 12:51 PM
								</div>
								<div class="font_1 p_3 p-l_4 self_center lh_1">
									<strong
										class="font_bold block font-size_down c_primary-n1"
										>How do I Interpret the Echo
										Results?</strong
									>
									<span class="block font-size_up c_black"
										>Jae K. Oh</span
									>
									<span
										class="c_black-8 block font-size_down m-t_2"
										>Rochester, MN</span
									>
								</div>
							</div>
						</div>
						<div class="flex_auto p-l_5:lg p-l_4:md w_30:lg">
							<strong
								class="font_bold c_primary-n4 opacity_7 m-t_3"
								>Practice Focus</strong
							>
							<ul class="ul_none font_n1 c_black-7 lh_1">
								<li class="br-b_1 br_solid br_black-1 p-y_2">
									Academic
								</li>
							</ul>
							<strong
								class="font_bold c_primary-n4 opacity_7 m-t_3"
								>Session Type</strong
							>
							<ul class="ul_none font_n1 c_black-7 lh_1">
								<li class="br-b_1 br_solid br_black-1 p-y_2">
									Clinical Focus
								</li>
							</ul>
						</div>
					</div>
				</div>
			</TransitionExpand>
		</aside>
	</div>
</template>

<script>
import Btn from "../subComponents/Btn";
import Credit from "../subComponents/CreditChiclet";
import TabFlag from "../subComponents/TabFlag";
import TransitionExpand from "../subComponents/TransitionExpand";
export default {
	props: {
		title: {
			type: String,
			default: "801. Core Knowledge in Action: What Everyone Ought To Know About HFpEF"
		},
        description:{type:String, default:"<p>Qui est quibusdam dicta. Maxime alias dolores laudantium sit vel natus voluptas. Quis quisquam et ut. Eveniet non eius. Qui reprehenderit molestias non cum nostrum dolor fugiat.</p>"},
		isLive: {
			type: Boolean,
			default: false
		},
        isPlayable:{type:Boolean,default:false},
        valueCME: { type: Number, default: 1 },
        valueCNE: { type: Number, default: 1 },
        valueCOP: { type: Number, default: 1 },
        valueMOC: { type: Number, default: 1 },
        valueCNErx: { type: Number, default: 0 },
        valueECME: { type: Number, default: 0 },
        valueABPMOCII: { type: Number, default: 0 },
        valueCPE: { type: Number, default: 0 },
        valueIPE: { type: Number, default: 0 },
        valuePA: { type: Number, default: 0 },
        learningPathway:{
            type:String,
            default:"Heart Failure and Cardiomyopathies Pathway"
            }
	},
	data() {
		return {
			showValue: true,
			faved: false,
			extendedInfo: false,
		}
	},
	components: {
		Credit, Btn, TabFlag, TransitionExpand
	},
    methods: {
        isValueZero: function(val) {
            return val == 0 
        },
    },
}
</script>

<style scoped>
.rotate-45 {
	transform: rotate(45deg);
}
</style>