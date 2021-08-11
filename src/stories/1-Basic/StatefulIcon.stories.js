import StateIcon from "../../components/subComponents/StateIcon.vue";

export default{
    title: "Basic/StateIcon",
    component: StateIcon,
    parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<StateIcon :state="$props"/>`
			},
		},
    },
    argTypes:{
        state:{control:{type:"select",options:['alert','success','warning','info','accent']}}

    }
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { StateIcon },
	template: ` <div>
    <StateIcon class="font_5 m_3" :state="state" style="width:100px;height:100px" />
    <StateIcon class="font_3 m_3" :state="state" style="width:calc(100px - 2rem);height:calc(100px - 2rem)" />
    <StateIcon class="font_1 m_3" :state="state" style="width:calc(100px - 4rem);height:calc(100px - 4rem)" />
 </div>`,
});
export const alert = Template.bind({});
alert.args = {
state:"alert"
};
export const success = Template.bind({});
success.args = {
state:"success"
};
export const warning = Template.bind({});
warning.args = {
state:"warning"
};
export const info = Template.bind({});
info.args = {
state:"info"
};
export const accent = Template.bind({});
accent.args = {
state:"accent"
};