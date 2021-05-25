import SwitchToggle from "../../components/subComponents/SwitchToggle.vue";

export default{
    title: "Basic/Button/Toggle/Switch",
    component: SwitchToggle,
    parameters: {
		docs: {
			description: {
				component:
					"Simple Switch Toggle can show when something is on or off.",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<SwitchToggle @onClick="onClick" v-bind="$props"/>`
			},
		},
    },
    argTypes:{
		activeState: {
			control: {
				type: "select",
				options: [
					"primary",
					"shade",
					"alert",
					"warning",
					"success",
					"secondary",
					"none",
					"empty",
				],
			},
		},notActiveState: {
			control: {
				type: "select",
				options: [
					"primary",
					"shade",
					"alert",
					"warning",
					"success",
					"secondary",
					"none",
					"empty",
				],
			},
		},		
		corner: {
			control: { type: "select", options: ["square", "radius", "round"] },
		},
		size: {
			control: { type: "select", options: ["tiny","small", "medium", "large"] },
		},
	}
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { SwitchToggle },
	template: `<SwitchToggle @onClick="onClick" v-bind="$props" >
    </SwitchToggle>`,
});
export const BasicSwitchToggle = Template.bind({});
BasicSwitchToggle.args = {
	activeState: "success",
	notActiveState: "secondary",
	activeIcon: "",
	notActiveIcon: "",

};
