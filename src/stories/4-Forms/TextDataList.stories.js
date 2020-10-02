import DataListInput from "../../components/BasicForms/Input.DataList.vue";
import { commonArgs } from "./common.argTypes.js";


export default{
    title: "Form/Input/DataList",
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
    argTypes:{...commonArgs
        
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