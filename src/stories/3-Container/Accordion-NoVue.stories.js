import Accordion from "../../components/BasicContainer/Accordion.vue";
import {shortText, longText} from "../lorem/text.js";

export default {
	title: "Container/Accordion/BootstrapOnly",
	component: Accordion,
	parameters: {
        docs: { 
            description: { 
                component:
					"Collapse content under the headline of this container",
			},
			sorce: {
				code: ``,
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
	components: { },
	template: `<div class="accordion" id="accordionExample">
    <div class="card br_0">
      <div class="card-header p_0 br_0 flex bg_black-_01 h:bg_black-1" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <i class="fas icon-toggle_plus-minus font_2 p_3 lh_1 br_1 br-l_0 br_solid br_white-6 c_primary-n1 bg_primary-4"></i>  
        <div class="p_3 font_2 c_primary-n1 lh_1 h:c_primary-n3 font_display">[Raw HTML So it can be styled or enhanced when needed.]</div>
      </div>
      <div id="collapseOne" class="collapse show br_black-2 br_solid br_1 " aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="card-body p-x_3 p-x_4:lg reading-typography" v-html="shortText">
        </div>
      </div>
    </div>
    <div class="card br_0">
    <div class="card-header p_0 br_0 flex bg_black-_01 h:bg_black-1" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <i class="fas icon-toggle_plus-minus font_2 p_3 lh_1 br_1 br-l_0 br_solid br_white-6 c_primary-n1 bg_primary-4"></i>  
      <div class="p_3 font_2 c_primary-n1 lh_1 h:c_primary-n3 font_display">[Raw HTML So it can be styled or enhanced when needed.]</div>
    </div>
    <div id="collapseTwo" class="collapse br_black-2 br_solid br_1 " aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body p-x_3 p-x_4:lg reading-typography" v-html="shortText">
      </div>
    </div>
  </div>
  </div>
 `,
});

export const Default = Template.bind({});
Default.args = {shortText:shortText}
  
