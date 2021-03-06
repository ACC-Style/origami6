import CreditChiclet  from "../../components/subComponents/CreditChiclet.vue";

export default {
	title: "Content/Credits",
    component: CreditChiclet ,
    subcomponents:{},
	parameters: {
		docs: {
			description: {
				component:
					"Credits are a combination of the short name and value with the assigned color.",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<CreditChiclet  v-bind="$props"/>`
			},

		},
	},
	argTypes:{
		size:{
			description:"The visual deminstions of the chicklet", 
				control:{type:"select",options:["tiny", "small", "medium", "large"]}
            },
            corners:{
                description:"Alter the border radius of the chicklet", 
                control:{type:"select",options:["radius", "square", "round", "circle"]}
                },
                styleCode:{
                description:"Credit Color Code Base", 
                control:{type:"select",options:[ 
                "COP",
                "ABP",
                "CE",
                "MOCII",
                "MOCIV",
                "CNE",
                "CNErx",
                "ECME",
                "CPE",
                "CME",
            ]}}
		}
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { CreditChiclet  },
    template: `<CreditChiclet  
        :size="size"
        :styleCode="styleCode"
        :type="styleCode"
        :corners="corners"
        :showValue="showValue"
        :value="value"
        :isDisabled="isDisabled"
        :shadow="shadow"
    />`,
});
export const Chiclets  = Template.bind({});
Chiclets.args = {
    size:"medium",
    styleCode:"CME",
    corners:"radius",
    showValue:true,
    value:0,
    isDisabled:false,
    shadow:true
};
export const NoValue  = Template.bind({});
NoValue.args = {
    size:"medium",
    styleCode:"CME",
    corners:"radius",
    showValue:false,
    value:0,
    isDisabled:false,
    shadow:true
};
export const FilteredOut  = Template.bind({});
FilteredOut.args = {
    size:"medium",
    styleCode:"CME",
    corners:"radius",
    showValue:true,
    value:10,
    isDisabled:true,
    shadow:true
};
export const tiny  = Template.bind({});
tiny.args = {
    size:"tiny",
    styleCode:"COP",
    corners:"square",
    showValue:true,
    value:0,
    isDisabled:false,
    shadow:false
};
export const small  = Template.bind({});
small.args = {
    size:"small",
    styleCode:"COP",
    corners:"square",
    showValue:true,
    value:0,
    isDisabled:false,
    shadow:false
};