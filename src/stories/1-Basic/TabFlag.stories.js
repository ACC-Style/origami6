import TabFlag from "../../components/subComponents/TabFlag.vue";

export default {
	title: "Basic/TabFlag",
    component: TabFlag,
    subcomponents:{},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state on a larger UI Element. There is a simple hover animation to show a text element",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<TabFlag v-bind="$props"/>`
			},

		},
	},
	argTypes:{
		type:{
            name:'type',
            description:"basic set of color, text, combos that can be overriden by the other props.", 
            default:'',
            control:{
                type:"select",options:["featured",
                "upvoted",
                "downvoted",
                "bookmarked",
                "read",
                "registered",
                "purchased",
                "incart"]}
            },
            text:{
                description:"label that shows on hover or click of the flag", 
                    
                },
            color:{
                description:"any arches style classes with background and hover for example: bg_primary-4 h:bg_primary-2 c_black", 
                    
                },
            icon:{
                description:"any font awesome icon", 
                    
                },
		}
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TabFlag },
	template: `<TabFlag v-bind="$props"/>`,
});
export const Default = Template.bind({});
Default.args = {
    type:"featured",
    text:undefined,
    color:undefined,
    icon:undefined
};