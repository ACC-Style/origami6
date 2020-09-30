import SelectInput from "../../components/BasicForms/Input.Select.vue";

export default{
    title: "Form/SelectInput",
    component: SelectInput,
    parameters: {
		docs: {
			description: {
				component:
					"Simple Text Form with simple validations",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<SelectInput @onChange="onChange" @onStateChange="onStateChange" v-bind="$props"/>`
			},
		},
    },
    argTypes:{
        icon:{description:'font-awesome icon for use with decorationg the input like a dollar sign, or user'},
		state:{control:{type:'select', options:['','alert','requiredAlert','warning','success','info','accent','disabled']}},
		postLabel:{description:'short text to follow the input area to help describe the selection'}
		

    }
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { SelectInput },
	template: `<SelectInput @onChange="onChange" @onStateChange="onStateChange" v-bind="$props">Select Plant<template v-slot:successMessage>Congradulations you can follow instructions</template></SelectInput>`,
});
export const Base = Template.bind({});
Base.args = {
	inputId:"uniqueSelectInputIdBase",
	options:[{
		"value": 1,
		"label": "Widowstears",
		
	  }, {
		"value": 2,
		"label": "Pendent Silver Linden",
		
	  }, {
		"value": 3,
		"label": "Mulberry",
		
	  }, {
		"value": 4,
		"label": "Mountain Crownbeard",
		
	  }, {
		"value": 5,
		"label": "Emory's Milkvetch",
		
	  }, {
		"value": 6,
		"label": "Harper's Heartleaf",
		
	  }, {
		"value": 7,
		"label": "Purple Naupaka",
		
	  }, {
		"value": 8,
		"label": "Buckwheat Milkvetch",
		
	  }, {
		"value": 9,
		"label": "Ozark Hawthorn",
		
	  }, {
		"value": 10,
		"label": "Matricary Grapefern",
		
	  }],
};