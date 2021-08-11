import Pagination from "../../../src/components/Navigation/Pagination.vue";

export default {
	title: "Basic/Nav/Pagination",
    component: Pagination,
    subcomponents:{},
	parameters: {
		docs: {
			description: {
				component:
					"Simple navigation to navigate through result pages.",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Pagination v-bind="$props"/>`
			},

		},
	},
	argTypes:{
        currentPage:{
            description:"The current index of the page results."
        },
		listSize:{
			description:"The number of pages that show up between previous and next", 
				
            },
            totalPages:{
                description:"The count of pages that came back from the result."
            },
		}
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Pagination },
	template: `<Pagination v-bind="$props"/>`,
});
export const Default = Template.bind({});
Default.args = {
    listSize:5,
    currentPage:51,
    totalPages:100
};
export const small = Template.bind({});
small.args = {
    listSize:5,
    currentPage:51,
    totalPages:100,
	size:'small'
};