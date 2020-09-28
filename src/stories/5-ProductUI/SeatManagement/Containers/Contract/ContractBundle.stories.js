import Bundle from "../../../../../components/SeatManagement/Containers/Bundle/Seat.Bundle.Overview.vue";



export default {
	title: "SeatManagment/Contracts",
    component: Bundle,
  	parameters: {
		docs: {
			description: {
				component:
					"Bundles are the ....",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Bundle :contracts="$data"/>`
			},

	}
}
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Bundle },
	template: `<Bundle v-bind="$props"/>`,
});
export const Bundles = Template.bind({});
Bundles.args = {
    "id": 3333333333,
    "name": "OmegaSap",
    "all": 61,
    "filled": 44,
    "locked": 14,
    "requested": 30,
    "productURL":"http://www.acc.org"
};
