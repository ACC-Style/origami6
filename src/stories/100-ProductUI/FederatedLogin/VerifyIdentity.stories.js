import TextInput from "../../../components/BasicForms/Input.Text.vue";
import Btn from "../../../components/subComponents/Btn.vue";


import { commonArgs } from "../../4-Forms/common.argTypes.js";
export default{
    title: "Apps/FederatedLogin/VerifyIdentity",
	component: TextInput,
	subcomponents:{ Btn },
    parameters: {
		docs: {
			description: {
				component:
					"Form for users to submit security question answers to retrieve username. ",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `https://github.com/ACC-Style/origami6/blob/master/src/stories/100-ProductUI/FederatedLogin/`
			},
		},
    },
    argTypes:{
		...commonArgs
    }
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TextInput, Btn },
	data: () => ({
		sq1State: "",
		sq1Value: "",
        sq2State: "",
		sq2Value: "",
	}),
	computed: {
        isDisabled() {
			if (this.loading || this.sq1State == "requiredAlert" || this.sq2State == "requiredAlert"){
				return true;
			}
			if (this.sq1Value.length && this.sq2Value.length) {
				return false;
			}
			return true;
		}
	},
	methods:{
		
        onDisabledCheck(eventTargetDOM){ 
            if( this.sq1Value == '' ) { 
				this.sq1State = 'requiredAlert';
			} else {
                this.sq1State = '';
            }
            if( this.sq2Value == '' ) { 
				this.sq2State = 'requiredAlert';
			} else {
                this.sq2State = '';
            }
		},
		updateState(b) {
            console.log(b.target.id);
            switch (b.target.id) {
                case 'input_sq1':
                    this.sq1State = b.state;
                    break;
                case 'input_sq2':
                    this.sq2State = b.state;
                    break;
                default:
                    console.log('No valid state update element id.');
            } 
        },
		onSubmit(){
			console.log('stop submit and do this instead');
		}
	},
	template: `
		<div class="p_4 max-w_50 m_auto">
			<div class="text_center">
				<h1 class="c_acc font_6">Verify Your Identity</h1>
				<p><i class="far font_10 fa-lock fas c_secondary"></i></p>
				<p>We need to make sure you're you before you can receive your password. Answer your questions below and verify your identity.</p>
                <p class="font_italic">Hint: Answers are not case sensitive.</p>
			</div>

			<form id="formForgotUsername" class="p_4 max-w_30 m_auto" novalidate v-on:submit.prevent="onSubmit">
				<fieldset>
					<div class="m-b_4">
                        <TextInput :inputId="'sq1'" :type="'text'" v-model="sq1Value" :required="'required'" :state="sq1State" @onStateChange="updateState">
                            <template v-slot:default>What is your mother's maiden name?</template>
                            <template v-slot:requiredAlertMessage>Must answer question correctly. Please try again.</template>
                        </TextInput>
					</div>
                    <div class="m-b_4">
                        <TextInput :inputId="'sq2'" :type="'text'" v-model="sq2Value" :required="'required'" :state="sq2State" @onStateChange="updateState">
                            <template v-slot:default>What is the name of the street you grew up on?</template>
                            <template v-slot:requiredAlertMessage>Must answer question correctly. Please try again.</template>
                        </TextInput>
					</div>
					<div class="text_center" @click="onDisabledCheck('submit')">
                        <Btn :size="'medium'" :isDisabled="isDisabled">
                            <span class="p-r_3">Retreive Password</span>
                            <i v-if="loading" id="btnSpinner" class="spinner fa fa-spinner fa-spin self_center"></i>
                        </Btn>
					</div>
				</fieldset>
			</form>

			<hr>

			<div class="p_4 font_1 max-w_50 m_auto">
				<p><b>Have questions or need assistance?</b> Please contact ACC Member Care</p>
				<ul class="ul_none p-l_5">
					<li><i class="fa fa-phone"></i> <a href="tel:+18002534636">1-800-253-4636, ext. 5603</a> (Toll Free U.S. &amp; Canada)</li>
					<li><i class="fa fa-phone"></i> <a href="tel:2023756000">202-375-6000, ext. 5603</a> (International)</li>
					<li><i class="fa fa-envelope"></i> <a href="mailto:membercare@acc.org">membercare@acc.org</a></li>
				</ul>
			</div>
		</div>	
	`,
});
export const InitialForm = Template.bind({});
InitialForm.args = {	
	loading: false
};

export const Loading = Template.bind({});
Loading.args = {
	...InitialForm.args,
	loading: true
};