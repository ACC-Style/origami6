<template>
	<div >
		<div v-if="contracts==undefined">
			<ContractLoading/>
		</div>
		<div v-else-if="contracts.length > 0">
			<div data-target="contracts_container" v-for="(contract, index) in contracts" :key="index">
				<Contract :contract="contract" />
			</div>
		</div>
		<div v-else class="reading-typography max-w_55">
			<h3 >You don't seem to have any Contracts</h3>
			<p ><strong>Contracts take 7-14 days to process we are greatful for your patients.</strong> If it has been longer that please contact us here and we will make sure you can start using your subscriptions quickly. </p>
		</div>
	</div>
</template>

<script>

import Contract from "./Contract/Seat.Contract.vue";
import ContractLoading from "./Contract/Seat.Contract.Loading.vue";

export default {
	components: {
		Contract,ContractLoading

	},
	data() {
		return {};
	},
	props: {
		contracts: {
			type: Array,
			default: undefined
		},
	}
};
</script>

<style lang="scss" scoped>
</style>