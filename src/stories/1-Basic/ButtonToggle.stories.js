import BtnToggle from "../../components/subComponents/BtnToggle.vue";
import Btn from "../../components/subComponents/Btn.vue";

export default {
	title: "Basic/Button/Toggle",
	component: BtnToggle,
	subcomponents: { Btn },
	parameters: {
		docs: {
			description: {
				component:
					"The double slotted button allows for label changes between when the button is active and notActive",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<BtnToggle @onClick="onClick" v-bind="$props">
    <template v-slot:active ><span v-html="activeLabel"/></template >
    <template v-slot:notActive ><span v-html="notActiveLabel"/></template >
</BtnToggle>`,
			},
		},
	},
	argTypes: {
		activeLabel: {
			description: "Text or HTML that shows when the button is active",
		},
		notActiveLabel: {
			description: "Text or HTML that shows when the button is active",
		},
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
		size: {
			control: { type: "select", options: ["tiny","small", "medium", "large"] },
		},
		corner: {
			control: { type: "select", options: ["square", "radius", "round","circle"] },
		},
		shape: {
			control: { type: "select", options: ["button","circle","square"]},
		},
	},
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { BtnToggle },
	template: `
    <BtnToggle @onClick="onClick" :shadow="false" v-bind="$props">
        <template v-slot:active ><span v-html="activeLabel"/></template >
        <template v-slot:notActive ><span v-html="notActiveLabel"/></template >
    </BtnToggle>`,
});

export const Default = Template.bind({});
Default.args = {
	activeLabel: "On",
	notActiveLabel: "Off",
	activeState: "primary",
	size: "medium",
};
export const Icon = Template.bind({});
Icon.args = {
	activeLabel: '<i class="far fa-check fa-fw"></i>',
	notActiveLabel: '<i class="fas fa-times fa-fw"></i>',
	activeState: "success",
	notActiveState:"alert",
	size: "small",
	shadow: true,
	shape:'square'
};
Icon.parameters = {
	docs: {
		description: {
			story:
				"The Icon is easily added to the button by including the font awesome icon with the label",
		},
	},
};
export const CircleButtonToggle = Template.bind({});
CircleButtonToggle.args = {
	activeLabel: '<i class="fas fa-circle fa-fw m-x_n3"></i>',
	notActiveLabel: '<i class="fas fa-fw m-x_n3"></i>',
	activeState: "primary",
	notActiveState: "secondary",
	size: "small",
	shadow: false,
	corner: "circle",
	shape: "square",
	insetShadow:true
};
CircleButtonToggle.parameters = {
	docs: {
		description: {
			story:
				"This is not a replacement for the use of radio.  Radio buttons have built in functionality that this component doesn't replicate.",
		},
	},
};

