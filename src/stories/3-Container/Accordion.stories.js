import Accordion from "../../components/BasicContainer/Accordion.vue";

export default {
	title: "Container/Accordion",
	component: Accordion,
	parameters: {
        docs: { 
            description: { 
                component:
					"Collapse content under the headline of this container",
			},
			sorce: {
				code: `<Accordion @onClick="onClick"  @onExpand="onExpand" @onCollapse="onCollapse"  v-bind="$props">
                <template v-slot:header><div v-html="header"/></template>
                <template v-slot:content><div v-html="content"/></template>
                    </Accordion>
                        `,
			},
		},
	},
	argTypes: {actions: { 
                 onClick: { action: 'clicked' },
                 onExpand: { action: 'expand' },
                 onCollapse: { action: 'collapse' }  },
        header:{description:'html can be added to these slots to finer tune the design'},
        content:{description:'html can be added to these slots to finer tune the design'},
		type: {
			control: {
				type: "select",
				options: ["parent", "child", "grandchild"],
			},
		},
	},
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Accordion },
	template: `<Accordion @onClick="onClick" @onExpand="onExpand" @onCollapse="onCollapse" v-bind="$props">
    <template v-slot:header><div v-html="header"/></template>
<template v-slot:content><div v-html="content"/></template>
            </Accordion>
                `,
});

export const Parent = Template.bind({});
Parent.args = {
	header: "Parent Header",
	content: "Content",
	type: "parent",
};
export const Child = Template.bind({});
Child.args = {
	header: "Child Header",
	content: "Content",
	type: "child",
};
export const GrandChild = Template.bind({});
GrandChild.args = {
	header: "read more ...",
	content: "Grand Child Content",
	type: "grandchild",
};
