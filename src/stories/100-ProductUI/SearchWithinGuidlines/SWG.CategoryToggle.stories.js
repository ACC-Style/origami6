import CategoryToggle from  "../../../../src/components/GLSearch/GLSearch.CategoryToggle.vue";
export default {
	title: "Apps/GuidelineSearch",
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
	template: `<CategoryToggle :switchSize="switchSize" :buttonSize="buttonSize" :categories="categories" @onClick="onClick($event)" @onModalOpen="onModalOpen($event)"/>`,
});
export const CategoryFilter = Template.bind({});
CategoryFilter.args = {
	buttonSize:'tiny',
	switchSize:'tiny',
    categories: [
            {label:"Sections", value:'section', activeState:"success", notActiveState: "black"},
            {label:"Tables & Figures", value:'table', activeState:"highlight", notActiveState: "black"},
            {label:"Recommendation", value:'recommendation', activeState:"primary", notActiveState: "black"},
            ]
};