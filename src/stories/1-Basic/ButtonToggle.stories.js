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
					"The double slotted button allows for label changes between when the button is active and deactive",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<BtnToggle @onClick="onClick" @onActive="onActive" @onDeactive="onDeactive" v-bind="$props">
    <template v-slot:active ><span v-html="activelabel"/></template >
    <template v-slot:deactive ><span v-html="deactivelabel"/></template >
</BtnToggle>`,
			},
		},
	},
	argTypes: {
		activelabel: {
			description: "Text or HTML that shows when the button is active",
		},
		deactivelabel: {
			description: "Text or HTML that shows when the button is active",
		},
		state: {
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
			control: { type: "select", options: ["small", "medium", "large"] },
		},
		corner: {
			control: { type: "select", options: ["square", "radius", "round"] },
		},
	},
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { BtnToggle },
	template: `
    <BtnToggle @onClick="onClick" @onActive="onActive" @onDeactive="onDeactive" :shadow="false" v-bind="$props">
        <template v-slot:active ><span v-html="activelabel"/></template >
        <template v-slot:deactive ><span v-html="deactivelabel"/></template >
    </BtnToggle>`,
});

export const Base = Template.bind({});
Base.args = {
	activelabel: "On",
	deactivelabel: "Off",
	state: "priamry",
	size: "medium",
};
export const Icon = Template.bind({});
Icon.args = {
	activelabel: '<i class="far fa-check  fa-fw m-x_n3"></i>',
	deactivelabel: '<i class="fas fa-fw m-x_n3"></i>',
	state: "success",
	size: "medium",
	shadow:false
};
Icon.parameters = {
	docs: {
		description: {
			story:
				"The Icon is easly added to the button by including the font awesome icon with the label",
		},
	},
};

export const Switch = Template.bind({});
Switch.args = {
	activelabel: '<i class="fas fa-circle fa-fw m-r_n3 p-l_3 m-y_n3"></i>',
	deactivelabel: '<i class="fas fa-circle fa-fw m-l_n3  p-r_3 m-y_n3"></i>',
	corner:"round",
	state: "secondary",
	size: "medium",
};
Switch.parameters = {
	docs: {
		description: {
			story:
				"Switches are easly created by adding padding to the icons between active and deactive",
		},
	},
};

const TemplateStyled = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { BtnToggle },
	template: `
      <BtnToggle class="bg_success-n2 a:bg_alert h:bg_shade-n3 font_bold c_white" @onClick="onClick" @onActive="onActive" @onDeactive="onDeactive" v-bind="$props">
          <template v-slot:active  v-html="activelabel"></template >
          <template v-slot:deactive  v-html="deactivelabel"></template >
      </BtnToggle>`,
});
export const Styled = TemplateStyled.bind({});
Styled.args = {
	activelabel: "Yes",
	deactivelabel: "No",
	corner: "round",
	state: "none",
	size: "medium",
};
Styled.parameters = {
	docs: {
		description: {
			story:
				"Arches active styles can be added to the None State Variation to get rich styles.",
		},
	},
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
