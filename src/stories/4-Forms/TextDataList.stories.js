import DataListInput from "../../components/BasicForms/Input.DataList.vue";

export default{
    title: "Form/DataListInput",
    component: DataListInput,
    parameters: {
		docs: {
			description: {
				component:
					"Simple Text Form with simple validations",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<DataListInput @onChange="onChange" @onStateChange="onStateChange" v-bind="$props"/>`
			},
		},
    },
    argTypes:{
        defaultvalue:{description:'the defualt or value of the input onload. '},
        icon:{description:'font-awesome icon for use with decorationg the input like a dollar sign, or user'},
		state:{control:{type:'select', options:['','alert','requiredAlert','warning','success','info','accent','disabled']}},
		inputType:{control:{type:'select', options:['text','email','password','date']}}

    }
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { DataListInput },
	template: `<DataListInput @onChange="onChange" @onStateChange="onStateChange" v-bind="$props" :options="options">User Name <template v-slot:successMessage>Congradulations you can follow instructions</template></DataListInput>`,
});
export const Default = Template.bind({});
Default.args = {
	inputId:"uniqueDataList",
    options:[{
		"value": "Widowstears",
		
	  }, {
		"value": "Pendent Silver Linden",
		
	  }, {
		"value": "Mulberry",
		
	  }, {
		"value": "Mountain Crownbeard",
		
	  }, {
		"value": "Emory's Milkvetch",
		
	  }, {
		"value": "Harper's Heartleaf",
		
	  }, {
		"value": "Purple Naupaka",
		
	  }, {
		"value": "Buckwheat Milkvetch",
		
	  }, {
		"value": "Ozark Hawthorn",
		
	  }, {
		"value": "Matricary Grapefern",
		
	  }],

};