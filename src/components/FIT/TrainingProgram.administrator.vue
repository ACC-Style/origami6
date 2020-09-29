<template>
	<div class="font_0 font_ui lh_1 flex br_dotted br-b_1 br_primary">
		<div class="flex_auto p-x_4 p-y_3">
			<div class="c_shade-n4">{{name}}</div>
			<div class="font_n2 c_primary">{{institution}}</div>
		</div>
		<div class="flex_shrink actions self_center m-r_4" v-if="!readOnly">
			<div class="flex_inline p_2 br_radius bg_shade-4 shadow_n2">
				<Btn class="br_radius" :size="'small'" :state="'alert'" @onClick="removeAdmin()"><i class="fa-times far"></i></Btn>
			</div>
		</div>
	</div>
</template>

<script>
import Btn from "../subComponents/Btn";
export default {
	name: "",
	components: { Btn },
	props: {
		name: {
			type: String,
			default: "John Smith"
		},
		institution: {
			type: String,
			default: "Fake Institution"
		},
		adminType: {
			type: String,
			default: "Director"
		},
		readOnly: { type: Boolean, default: true }
	},
	methods: {
		removeAdmin() {
			this.$emit("onRemoveAdmin");
		},
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
</style>