import CategoryToggle from  "../../../../src/components/GLSearch/GLSearch.CategoryToggle.vue";
export default {
	title: "Apps/GuidelineSearch/UI",
    component: CategoryToggle,
    subcomponents:{},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<CategoryToggle v-bind="$props"/>`
			},

		},
	},
	argTypes:{
		creditTypes:{
			description:"", 
				control:{type:"",options:[]}
			},
		}
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { CategoryToggle },
	template: `<CategoryToggle :size="size" :categories="categories" @onClick="onClick($event)" @onModalOpen="onModalOpen()"/>`,
});
export const CategoryFilter = Template.bind({});
CategoryFilter.args = {
	size:'tiny',
    categories: [
            {label:"Sections", value:'section', activeState:"success", notActiveState: "secondary"},
            {label:"Tables & Figures", value:'table', activeState:"highlight", notActiveState: "secondary"},
            {label:"Recommendation", value:'recommendation', activeState:"primary", notActiveState: "secondary"},
            ]
};