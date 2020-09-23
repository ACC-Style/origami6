<template>
	<div class="fits m_3">
		<h1 class="br-b_1 br_solid br_primary m-b_3 font_display font_3 font_regular p-y_3">Fellows In Training Program <Btn class="br_radius float_right m-t_3 m-r_4" :state='"add"' :icon='true'>Add Fellow</Btn></h1>
		<div v-if="!finishedLoading" class>
			<div class="text_center font_ui p_3 c_shade-3">Loading ...</div>
			<FITLoading/>
			<FITLoading/>
			<FITLoading/>
		</div>
		<div v-if="finishedLoading && fits.length == 0">
			<article class="m_5 p_4 shadow_2 br_radius br_solid br_2 br_white-9 bg_shade-5 font_ui">
				<h1 class="font_regular p_3 font_2 text_center br-b_1 br_solid br_shade-4">
					<i class="far fa-exclamation-triangle"></i> You have No Fellows in your Training Program
					<i class="far fa-exclamation-triangle"></i>
				</h1>
				<p
					class="font_0 p-y_3 lh_3"
				>Please search via email to add people to your training program.</p><p>As you enter your new Fellows in Training they will receive an email invitation to register for ACC membership, but some may have an already existing member account.</p>
				<div class="bg_warning p_4 c_white m-t_4 br_radius lh_3">
					<p class="font_1 font_display font_bold">If the invited individual is listed as a different member type&nbsp;<small class="font_regular font_italic">(not an FIT account)</small></p> <hr class="br_dotted br_white-4 m-y_3"/> <p>The training end date field of that user will be disabled and ACC staff will be notified. The account will remain on your list and say Pending Review. Staff will notify you once the account is updated.</p>
				</div>
			</article>
		</div>
		<div v-if="finishedLoading && fits.length != 0" class="br_solid br_1 br-b_0 br_shade-4">
			<FIT v-for="fit in fits" :key="'fit_'+fit.id" v-bind="fit" @removeFIT="$emit('removeFIT', fit)" />
		</div>
	</div>
</template>

<script>
import FIT from "./TrainingProgram.FIT";
import FITLoading from "./TrainingProgram.FITLoading";
import Btn from "../subComponents/Btn";
export default {
	name: "ListFIT",
	props: {
		fits: {
			type: Array,
			default: () => []
		},
		finishedLoading: { type: Boolean, default: false }
	},
	components: { FIT, FITLoading,Btn },
	methods: {
		removeFIT() {
			this.$emit("removeFIT", id);
		}
	},
	data() {
		return {};
	}
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