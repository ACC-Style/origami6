<template>
	<div>
		<div v-if="requests === null">
			<LoadingText class="font_3 m-b_3"/>
		<RequestLoading/>
			<RequestLoading/>
				<RequestLoading/>
		</div>
		<div v-else-if="requests.length  == 0">
						<article
				class="m_5 p_4 shadow_2 br_radius br_solid br_2 br_white-9 bg_shade-5 font_ui"
			>
				<h1
					class="font_regular p_3 font_2 text_center br-b_1 br_solid br_shade-4"
				>
					<i class="far fa-exclamation-triangle"></i> You have No
					No Requests for your Training Program
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
		<div v-else>
			<Request v-for="(request, index) in requests" :key="'request_'+index" v-bind="request" />
		</div>

	</div>
</template>

<script>
import Request from "./TrainingProgram.Request";
import RequestLoading from "./TrainingProgram.RequestLoading";
import LoadingText from "../subComponents/LoadingText";
export default {
	name: "",
	components:{Request,RequestLoading,LoadingText},
	props: {
		requests: {
			type: Array,
			default: null
		}
	},
	methods: {},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
</style>