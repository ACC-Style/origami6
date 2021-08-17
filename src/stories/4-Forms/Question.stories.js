import TextInput from "../../components/BasicForms/Input.Text.vue";
import Question from "../../components/BasicForms/subComponent/Question.vue";
import MessageHolder from "../../components/subComponents/InputMessageHolder.vue";
import StateIcon from "../../components/subComponents/StateIcon";
import ValueIcon from "../../components/subComponents/inputValueIcon";
import { commonArgTypes,commonArgs } from "./common.argTypes.js";
export default {
	title: "Form/Question",
	component: Question,
	subcomponents: { TextInput, MessageHolder, StateIcon, ValueIcon },
	parameters: {
		docs: {
			description: {
				component:
					"All Basic Inputs are wrapped in a containing component called a 'Question' it controls the state decorations, labels, icon and value decorators and messages.",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `
				<TextInput :icon="icon" :state="state" :postLabel="postLabel" required="required" @onClickPostLabel="action('onClickPostLabel')">
					<template v-slot:default>Default Slot Text</template>
					<template v-slot:alertMessage>This is alert message</template>
					<template v-slot:warningMessage>Warning Will Robinson</template>
					<template v-slot:successMessage>Congratulations you can follow instructions</template>			
					<template v-slot:hint>this could be useful</template>
				</TextInput>
				`,
			},
		},
	},
	argTypes: {
		...commonArgTypes,

	},
	args: {
		...commonArgs,
	},
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TextInput },
	template: `<TextInput :value="''" :icon="icon" :state="state" :postLabel="postLabel" :required="required" @onClickPostLabel="onClickPostLabel">
		<template v-slot:default >{{ defaultSlot }}</template>
		<template v-slot:requiredAlertMessage >{{requiredAlertMessage}}</template>
		<template v-slot:alertMessage >{{alertMessage}}</template>
		<template v-slot:warningMessage >{{warningMessage}}</template>
		<template v-slot:successMessage >{{successMessage}}</template>
		<template v-slot:accentMessage >{{accentMessage}}</template>
		<template v-slot:infoMessage >{{infoMessage}}</template>			
		<template v-slot:hint >{{ hint }}</template>
	</TextInput>`,
});

export const Default = Template.bind({});
Default.args = {
	required: false,
};

export const required = Template.bind({});
required.args = {
	required: true,
};
export const requiredAlert = Template.bind({});
requiredAlert.args = {
	state: "requiredAlert",
};
export const alert = Template.bind({});
alert.args = {
	state: "alert",
};

export const warning = Template.bind({});
warning.args = {
	state: "warning",
};

export const Success = Template.bind({});
Success.args = {
	state: "success",
};
export const info = Template.bind({});
info.args = {
	state: "info",
};
export const accent = Template.bind({});
accent.args = {
	state: "accent",
};

export const IconDecorated = Template.bind({});
IconDecorated.args = {
	icon: "fa-user",
};
export const hint = Template.bind({});
hint.args = {
	hint: "Use the hint slot to add a hint to the input",
};
export const PostLabelInput = Template.bind({});
PostLabelInput.args = {
	postLabel: "mg/ml",
};
