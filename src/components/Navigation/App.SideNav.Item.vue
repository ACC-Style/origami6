<template>
	<div class="relative font_ui m-b_2">
		<div v-if="type== 'headline'" class="c_primary-n2 br-b_2 br_solid br_primary-2  flex flex_row flex_nowrap" :class="[indentedStyle]" >
			<div class="flex_auto  capitalize font_medium font_display lh_2">{{label}}</div>
			<div
				v-if="hasChildren"
				class="font-size_down flex_none br_round p_2 m-r_1 br_1 br_solid br_black-0 justify_center flex h:bg_black-3 h:c_white c_black-6 transition_3"
				@click="onToggleClick"
				
			>
				<i
					class="fas font-size_down flex_auto fa-plus fa-fw self_center "
					:class="rotation"	style="height: 1em; width: 1em"
				></i>
			</div>
			</div>
		<Btn v-else-if="type =='new'" @onClick="onNewObject" class="lh_1 p-x_3" :state="'secondary'" :size="'tiny'" :shadow="false" :corner="'round'" ><i class="far  p-r_3 p_1" :class="iconStyle"></i> {{label}} </Btn>
		<div v-else >
			<div
				:class="[activeStyle, indentedStyle]"
				class="font_ui font_light br_round br_1 br_solid br_black-0 p-y_2 lh_0 p-x_3 h:bg_primary-4 c_black-7 h:c_balck-9 transition_1 flex flex_nowrap flex_row justify_center align_center "
				@click="onNavigateTo(pageID)"
			>
				<i
					class="fal m-l_1 fa-fw m-r_3 flex_none self_center"
					:class="iconStyle"
				></i>
				<span class="font_regular flex_auto self_center c_black-9">{{
					label
				}}</span>
			</div>
			<div
				v-if="hasChildren"
				class="absolute font-size_down z_3 t_1 b_1 r_1 bg_black-1 flex_none br_round p_2 justify_center flex br_white-0 br_solid br_1 h:bg_black-3 h:c_white c_black-6 transition_3"
				@click="onToggleClick"
			>
				<i
					class="fas font-size_down flex_auto fa-plus fa-fw self_center transition_3"
					:class="rotation"
					style="height: 1em; width: 1em"
				></i>
			</div>
		</div>

	
	</div>
</template>

<script>
import Btn from "../subComponents/Btn";
export default {
	props: {
		label: {
			type: String,
			default: "Unknown",
		},
		level: {
			type: Number,
			default: 0,
		},
		type: {
			type: String,
			default: "company",
		},
		isActive: {
			type: Boolean,
			default: false,
		},
		hasActiveChildren: {
			type: Boolean,
			default: false,
		},
		hasChildren: {
			type: Boolean,
			default: false
		},
		pageID: {
			type: [String,Number],
			default: null
		},
		isExpanded: { type: Boolean, default: false }
	},
	data() {
		return {
			thisIsExpaneded: this.isExpanded,
		}
	},
	components:{
		Btn
	},
	computed: {
		rotation() {
			return (this.isExpanded) ? "rotation_135" : "rotation_0";
		},
		indentedStyle() {
			let $returnedStyle = "";
			switch (this.level) {
				case 1:
					$returnedStyle = "";
					break;
				case 2:
					$returnedStyle = "";
					break;
				case 2:
					$returnedStyle = "";
					break;

				default:
					$returnedStyle = "";
					break;
			}
			return $returnedStyle;
		},
		iconStyle: function () {
			let $returnedStyle = "";
			$returnedStyle = "";
			switch (this.type) {
				case "headline":
					$returnedStyle = "";
					break;
									case "new":
					$returnedStyle = "fa-plus";
					break;
				case "groups":
					$returnedStyle = "fa-ball-pile";
					break;
				case "group":
					$returnedStyle = "fa-dot-circle";
					break;
				case "contract":
					$returnedStyle = "fa-file-contract";
					break;
				case "contracts":
					$returnedStyle = "fa-file-signature";
					break;
				case "companyprofile":
					$returnedStyle = "fa-hospital";
					break;
				case "profile":
					$returnedStyle = "fa-user-circle";
					break;
				case "bundles":
					$returnedStyle = "fa-cubes";
					break;
				case "bundle":
					$returnedStyle = "fa-cube";
					break;
				case "subbundle":
					$returnedStyle = "fa-kaaba";
					break;
				case "admin":
					$returnedStyle = "fa-user-crown";
					break;
				case "group-admin":
					$returnedStyle = "fa-users-crown";
					break;
				case "user":
					$returnedStyle = "fa-user";
					break;
				case "users-all":
					$returnedStyle = "fa-users";
					break;
				case "programs":
					$returnedStyle = "fa-home";
					break;
				case "program":
					$returnedStyle = "fa-cubes";
					break;
				case "presentations":
					$returnedStyle = "fa-vector-square";
					break;
				case "attachments":
					$returnedStyle = "fa-archive";
					break;
				case "collection":
					$returnedStyle = "fa-cube";
					break;
				case "sessions":
					$returnedStyle = "fa-kaaba";
					break;
				case "session":
					$returnedStyle = "fa-kaaba";
					break;
				case "tags":
					$returnedStyle = "fa-tags";
					break;
				case "tag":
					$returnedStyle = "fa-tag";
					break;
				default:
					$returnedStyle = "display_none";
					break;
			}
			return $returnedStyle;
		},
		activeStyle: function () {
			let $returnedStyle = "black";
			if (this.hasActiveChildren) {
				$returnedStyle = " bg_black-1 br_primary-4 m-t_2 m-b_2 ";
			} else if (this.isActive) {
				$returnedStyle = " bg_primary-5 br_primary-4 m-t_2 m-b_2 ";
			} else {
				$returnedStyle = "";
			}
			return $returnedStyle;
		},
	},
	methods: {
		onToggleClick() {
			this.$emit("onToggleClick");
		},
		onNavigateTo(pageID) {
			this.$emit("onClick");
			// In here mutate the store and cause the page to reroute. 
		},
		onNewObject(){		
			this.$emit("onNewObject");
		}
	},
};
</script>

<style scoped>
.rotation_0 {
	transform: rotate(0deg);
}
.rotation_135 {
	transform: rotate(135deg);
}
</style>
