import RadioInput from "../../components/BasicForms/Input.Radio.vue";
import { commonArgs } from "./common.argTypes.js";
export default{
    title: "Form/Input/Radio",
    component: RadioInput,
    parameters: {
		docs: {
			description: {
				component:
					"Simple Text Form with simple validations",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<RadioInput @onChange="onChange" @onStateChange="onStateChange" v-bind="$props"/>`
			},
		},
    },
    argTypes:{ ...commonArgs,
		size:{control:{type:'select', options:['tiny', 'small', 'medium', 'large']}},
		state:{control:{type:'select', options:["","alert","requiredAlert","warning","success","info","accent","black","disabled",]}},
    }
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { RadioInput },
	template: `<RadioInput @onChange="onChange" @onStateChange="onStateChange" v-bind="$props" :options="options">Pick Your Favorite Plant <template v-slot:successMessage>Congradulations you can follow instructions</template></RadioInput>`,
});
export const Default = Template.bind({});
Default.args = {
    inputId:"uniqueRadio",
    size:"small",
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
		
	  }],

};

export const StateAlert = Template.bind({});
StateAlert.args = {
    inputId:"uniqueRadio",
	size:"small",
	state:"alert",
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
		
	  }],

};