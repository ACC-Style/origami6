<template>
	<div class="relative">
	   
		<div
			:class="[activeStyle, indentedStyle]"
			class="font_ui font_light br_round br-1 br_solid br_black-0 p-y_2 lh_0 p-x_3 h:bg_primary-4 c_black-7 h:c_balck-9 transition_1 flex flex_nowrap flex_row justify_center align_center  m-b_1"
			@click="routePageStoreEvent"
		>
			<i class="fal m-l_1 fa-fw m-r_3 flex_none self_center" :class="iconStyle"></i>
			<span class="font_medium flex_auto self_center">{{ label }}</span>
		</div> 
		<div v-if="hasChildren" class="absolute font-size_down z_3 t_1 b_1 r_1 bg_black-1 flex_none br_round p-x_2 justify_center flex br_white-9 br_solid br_1 h:bg_black-6 h:c_white c_black-6" @click="toggleClicked">
            <i class="fas font-size_down flex_auto fa-plus fa-fw self_center"></i>
        </div>
	</div>
</template>

<script>
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
		isChildActive: {
			type: Boolean,
			default: false,
		},
		hasChildren: {
			type: Boolean,
			default: false
		},
		pageID: {
			type: Number,
			default: null
		},
		isExpanded:{type:Boolean,default:false}
	},
	computed: {
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
				case "profile":
					$returnedStyle = "fa-hospital";
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
				default:
					$returnedStyle = "display_none";
					break;
			}
			return $returnedStyle;
		},
		activeStyle: function () {
			let $returnedStyle = "black";
			if (this.isChildActive) {
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
		toggleClicked(){
			this.$emit("toggleClicked");
		},
		routePageStoreEvent(){
			// In here mutate the store and cause the page to reroute. 
		}
	},
};
</script>

<style scoped></style>
