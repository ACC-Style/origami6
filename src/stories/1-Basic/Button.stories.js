import Btn from "../../components/subComponents/Btn.vue";


export default {
	title: "Basic/Button",
	component: Btn,
	parameters: {
	
		docs: {
			description: {
				component:
					"The button the foundation of all user interactions on the web",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code:
					'<btn @onClick="onClick" @onActive="onActive" @onDeactive="onDeactive" v-bind="$props"><span v-html="label"/></btn>',
			},
		},
	},
	argTypes: {
		label: {
			description:
				"Buttons should be action oriented and can inlude font awesome icon tags to enrich the button",
		},
		state: {
			control: {
				type: "select",
				options: [
					"primary",
					"black",
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
	components: { Btn },
	template:
		'<btn @onClick="onClick" @onActive="onActive" @onDeactive="onDeactive" v-bind="$props"><span v-html="label"/></btn>',
});

export const Button = Template.bind({});
Button.args = {
	label: "Button",
	state: "priamry",
	size: "medium",
};
Button.parameters ={
	myAddon: {
	data: 'this data is passed to the addon',
  },}

export const DoubleBtn = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Btn },
	template:
    `<div><Btn class="m-x_2" @onClick="onClick" @onActive="onActive" @onDeactive="onDeactive" v-bind="$props" :state="state" > Secondary Btn </Btn><Btn class="m-x_2" @onClick="onClick" @onActive="onActive" @onDeactive="onDeactive" v-bind="$props" :state="'primary'" :shadow="true">Primary Btn </Btn></div>`,
});
export const DoubleButton = DoubleBtn.bind({});
DoubleButton.parameters = {
	docs: {
		description: {
			story: "Simple Double Button",
		},
	},
};
DoubleButton.args = {

  state: "secondary",
  shadow:true,
	size: "medium",
};
export const DoubleButtonEmpty = DoubleBtn.bind({});
DoubleButtonEmpty.parameters = {
	docs: {
		description: {
			story: "Use Empty on the secondary button to completely drive the user to the button",
		},
	},
};
DoubleButtonEmpty.args = {

  state: "empty",
  shadow:false,
	size: "medium",
};
