import ContractList from "../../../../../components/SeatManagement/Containers/Seat.ContractList.vue";
import Contract from "../../../../../components/SeatManagement/Containers/Contract/Seat.Contract.vue";
import LoadingContract from "../../../../../components/SeatManagement/Containers/Contract/Seat.Contract.Loading.vue";
import {contractData} from "../../Data/contractData.js"

export default {
	title: "SeatManagment/Contracts",
    component: Contract,
    subcomponent:{ContractList, LoadingContract},
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

