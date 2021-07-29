<template>
	<div class="relative font_ui m-b_2">
		<div>
			<div
				class="h:underline h:c_primary c_black-9"
				@click="onNavigateTo(pageID)"
			>
				<i
					v-if="type != 'headline'"
					class="fal m-l_1 fa-fw m-r_3 flex_none self_center c_primary font-size_up"
					:class="iconStyle"
				></i>
				<span v-else class="flex_none self_center font-size_up m-r_3"></span>
				<span class="font_regular flex_auto self_center">{{
					label
				}}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:"breadcrumbItem",
	props: {
		label: {
			type: String,
			default: "Unknown",
		},
		type: {
			type: String,
			default: "company",
		},
		pageID: {
			type:[String,Number],
			default: null
		},
		isExpanded: { type: Boolean, default: false }
	},
	data() {
		return {
			thisIsExpaneded: this.isExpanded,
		}
	},
	computed: {
		rotation() {
			return (this.isExpanded) ? "rotation_135" : "rotation_0";
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
                case "home":
					$returnedStyle = "fa-home";
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

		onNavigateTo(pageID) {
			this.$emit("onClick",pageID);
			// In here mutate the store and cause the page to reroute. 
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
