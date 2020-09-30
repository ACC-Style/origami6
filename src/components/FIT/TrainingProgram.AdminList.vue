<template>
	<div class="m_3">
		<div class="flex flex_auto">
			<h1 class="flex_auto m-y_3">Administrators of the Training Program</h1>
			<div class="flex_shrink justify_center flex flex_column">
				<div class=""><Btn @onClick="onAddAdmin">Add Admin</Btn></div>
			</div>
		</div>
		<div v-if="admins == null" class="br-t_1 br-b_1 br_solid br_black-4">
            <AdminLoading/>
		</div>
		<div v-else-if="admins.length == 0">
			<article
				class="m_5 p_4 shadow_2 br_radius br_solid br_2 br_white-9 bg_shade-5 font_ui"
			>
				<h1
					class="font_regular p_3 font_2 text_center br-b_1 br_solid br_shade-4"
				>
					<i class="far fa-exclamation-triangle"></i> This Training Program has had an issue loading
					<i class="far fa-exclamation-triangle"></i>
				</h1>
				<p class="font_0 p-y_3 lh_3">
					There doesn't seem to be any Administrators for this training program. 
				</p>
			</article>
		</div>
		<div
			v-else
			class="br-t_1 br-b_1 br_solid br_black-4 m-y_n1"
		>
			<Admin
				v-for="(admin, index) in admins"
				:key="'admin_' + index"
				v-bind="admin"
				@onRemoveAdmin="onRemoveAdmin(admin)"
				
			/>
		</div>
	</div>
</template>

<script>
import Admin from "./TrainingProgram.Admin";
import AdminLoading from "./TrainingProgram.AdminLoading";
import Btn from "../subComponents/Btn";
import Modal from "../subComponents/Modal";

export default {
    name: "AdminList",
    components: { Admin, AdminLoading, Btn, Modal},
	props: {
		admins: {
			type: Array,
			default: null,
		},
	},
	methods: {
		onRemoveAdmin(admin) {
			this.$emit("onRemoveAdmin");
        },
        onAddAdmin() {
			
		},
		
	},
	data() {
		return {

		};
	},
};
</script>

<style lang="css" scoped>
.lorem-status {
	width: 2.5rem;
}
.lorem-button {
	width: 8rem;
}
</style>
