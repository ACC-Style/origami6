<template>
	<div class="results m_3">
		<div v-if="!finishedLoading" class>
			<div class="text_center font_ui p_3 c_shade-3">Loading ...</div>
			<ResultLoading/>
			<ResultLoading/>
			<ResultLoading/>
		</div>
		<div v-if="finishedLoading && results.length == 0">
			<article class="m_5 p_4 shadow_2 br_radius br_solid br_2 br_white-9 bg_shade-5 font_ui">
				<h1 class="font_regular p_3 font_2 text_center">
					<i class="far fa-exclamation-triangle"></i> You have <span class="font_bold">No Results</span> from your search
					<i class="far fa-exclamation-triangle"></i>
				</h1>
			</article>
		</div>
		<div v-if="finishedLoading && results.length != 0" class="">
			<FacilityResult  v-for="result in results" :key="'result_'+result.id" :id="result.id" :facility='result.facility' :services='result.services' @AddToCompare="AddToCompare" @RemoveFromCompare="RemoveFromCompare" @GoToProfile="GoToProfile"/>
		</div>
	</div>
</template>

<script>
import FacilityResult from "./FYHAH.facilityResult";
import ResultLoading from "./FYHAH.ResultLoading";
import Btn from "../subComponents/Btn";
export default {
	name: "ResultList",
	props: {
		results: {
			type: Array,
			default: () => []
		},
		finishedLoading: { type: Boolean, default: false }
	},
	components: { FacilityResult, ResultLoading,Btn },
	methods: {
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
.crossFade-move {
	transition: 0.5s ease;
}
</style>