<template>
	<div class="fits m_3">
		<div class="flex flex_auto m-b_3">
			<h1 class="flex_auto m-y_3">Fellows In Training Program</h1>
			<div class="flex_shrink justify_center flex flex_column">
				<div class=""><Btn  :state="'primary'" :size="'medium'" @onClick="$emit('onAddFit')"><i class="far fa-plus flex_shrink p-r_3 self_center"></i> <span class="flex_auto"> Add FIT</span></Btn></div>
			</div>
		</div>
		<div v-if="fits == null" class="br-t_1 br-b_1 br_solid br_black-4">
			<div class="font_3 p_3 p-t_4 c_black-7">
				<LoadingText/>
			</div>
			<FITLoading />
			<FITLoading />
			<FITLoading />
		</div>
		<div v-else-if="fits.length == 0">
			<article
				class="m_5 p_4 shadow_2 br_radius br_solid br_2 br_white-9 bg_shade-5 font_ui"
			>
				<h1
					class="font_regular p_3 font_2 text_center br-b_1 br_solid br_shade-4"
				>
					<i class="far fa-exclamation-triangle"></i> You have No
					Fellows in your Training Program
					<i class="far fa-exclamation-triangle"></i>
				</h1>
				<p class="font_0 p-y_3 lh_3">
					Please search via email to add people to your training
					program.
				</p>
				<p>
					As you enter your new Fellows in Training they will receive
					an email invitation to register for ACC membership, but some
					may have an already existing member account.
				</p>
				<div class="bg_warning p_4 c_white m-t_4 br_radius lh_3">
					<p class="font_1 font_display font_bold">
						If the invited individual is listed as a different
						member type&nbsp;<small class="font_regular font_italic"
							>(not an FIT account)</small
						>
					</p>
					<hr class="br_dotted br_white-4 m-y_3" />
					<p>
						The training end date field of that user will be
						disabled and ACC staff will be notified. The account
						will remain on your list and say Pending Review. Staff
						will notify you once the account is updated.
					</p>
				</div>
			</article>
		</div>

		<div
			v-else
			class="br-t_1 br-b_1 br_solid br_black-4 m-y_n1"
		>
			<FIT
				v-for="fit in fits"
				:key="'fit_' + fit.id"
				v-bind="fit"
				@onRemoveFIT="$onRemoveFIT(fit)"
				@onUpdateBrithday="onUpdateBrithday(fit)"
				@onUpdateEndDate="onUpdateEndDate(fit)"
			/>
		</div>
		<Modal
			v-if="modalVisibleBirthday"
			@onClose="modalVisibleBirthday = false"
			>
			<template v-slot:header>
				<h2 class="c_primary">Update Birthday</h2>
			</template>
			Birthday form goes here
			</Modal
		>
		<Modal v-if="endDateModalVisible" @onClose="endDateModalVisible = false">
						<template v-slot:header>
				<h2 class="c_primary">Update End Date</h2>
			</template>
			End Date  form goes here

		</Modal>
				<Modal v-if="addFITModalVisible" @onClose="addFITModalVisible = false">
						<template v-slot:header>
				<h2 class="c_primary">ADD FIT</h2>
			</template>
			ADD FIT  form goes here

		</Modal>
	</div>
</template>

<script>
import FIT from "./TrainingProgram.FIT";
import FITLoading from "./TrainingProgram.FITLoading";
import Btn from "../subComponents/Btn";
import Modal from "../subComponents/Modal";
import LoadingText from "../subComponents/LoadingText";
export default {
	name: "ListFIT",
	props: {
		fits: {
			type: Array,
			default: null,
		},
	},
	components: { FIT, FITLoading, Btn, Modal, LoadingText },
	methods: {
		onRemoveFIT() {
			this.$emit("onRemoveFIT");
		},
		onUpdateBrithday(fit) {
			this.modalVisibleBirthday = true;
		},
		onUpdateEndDate(fit) {
			this.endDateModalVisible = true;
		},

	},
	data() {
		return {
			modalVisibleBirthday: false,
			endDateModalVisible: false,
			addFITModalVisible:false,
		};
	},
};
</script>

