import Accordion from "../../components/BasicContainer/Accordion.vue";
import {shortText, longText} from "../lorem/text.js";

export default {
	title: "Container/Accordion",
	component: Accordion,
	parameters: {
        docs: { 
            description: { 
                component:
					"Collapse content under the headline of this container",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
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
	template: `
	<Accordion 
	@onClick="onClick" 
	@onExpand="onExpand" 
	@onCollapse="onCollapse" 
	v-bind="$props">
		<template v-slot:header><div v-html="header"/></template>
		<template v-slot:content><div v-html="content"/></template>
	</Accordion>
    `,
});

export const Default = Template.bind({});
Default.args = {
	header: "Parent Header",
	content: longText,
	type: "parent",
};

const ChildTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Accordion },
	template: `
		<Accordion @onClick="onClick" @onExpand="onExpand" @onCollapse="onCollapse" :type="'parent'" :internalIsExpanded="internalIsExpandedVar" >
    		<template v-slot:header>Parent Header with Children</template>
			<template v-slot:content>
				<div v-html="subContent"/>
				<Accordion class="m-t_4" @onClick="onClick" @onExpand="internalIsExpandedVar=true" :type="'child'" @onCollapse="internalIsExpandedVar=false" > 
				<template v-slot:header><div v-html="childHeader1"/></template>
				<template v-slot:content><div v-html="content" /></template>
				</Accordion>
			</template>
        </Accordion>
        `,
});
export const Child = ChildTemplate.bind({});
Child.args = {
	header: "Parent Header",
	content: shortText,
	type: "child",
	childHeader1:"<span>Child Header 1</span>",
	childHeader2:"Child Header 2",
	subContent: longText,
	internalIsExpandedVar:false

}

export const GrandChild = Template.bind({});
GrandChild.args = {
	header: "read more ...",
	content: "Grand Child Content",
	type: "grandchild",
};
