import ContractList from "../../../../../components/SeatManagement/Containers/Seat.ContractList.vue";
import Contract from "../../../../../components/SeatManagement/Containers/Contract/Seat.Contract.vue";
import Bundle from "../../../../../components/SeatManagement/Containers/Bundle/Seat.Bundle.Overview.vue";
import LoadingContract from "../../../../../components/SeatManagement/Containers/Contract/Seat.Contract.Loading.vue";
import {contractData} from "../../Data/contractData.js"

export default {
	title: "APPS/SeatManagment/Contracts",
    component: Contract,
    subcomponents:{ContractList, Bundle},
	parameters: {
		docs: {
			description: {
				component:
					"Contracts are the ....",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<ContractList :contracts="$data"/>`
			},

	}
}
};
const ContractTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Contract },
	template: `<Contract v-bind="$props"/>`,
});
export const singleContract = ContractTemplate.bind({});
singleContract.args = {
		nickname:contractData[0].nickname,
		id:contractData[0].id,
		amount:contractData[0].amount,
		date_purchase:contractData[0].date_purchase,
		term:contractData[0].term,
		date_expiration:contractData[0].date_expiration,
		date_lastPayment:contractData[0].date_lastPayment,
		date_paymentDue:contractData[0].date_paymentDue,
		bundles:contractData[0].bundles,
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { ContractList },
	template: `<ContractList :contracts="contracts"/>`,
});
export const ListLoaded = Template.bind({});
ListLoaded.args = {
	contracts: contractData
};

export const ListEmpty = Template.bind({});
ListEmpty.args = {
	contracts: []
};
export const ListLoading = Template.bind({});
ListLoading.args = {
	contracts: undefined
};

const SingleBundle = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Bundle },
	template: `<Bundle v-bind="$props"/>`,
});
export const ProductBundle = SingleBundle.bind({});
ProductBundle.args = {
    "id": 3333333333,
    "name": "OmegaSap",
    "all": 61,
    "filled": 44,
    "locked": 14,
    "requested": 30,
    "productURL":"https://www.acc.org"
};