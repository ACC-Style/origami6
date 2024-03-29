import RadioButtons from "../../../components/ORG/FederatedLogin/Input.RadioLogin.vue";
import transitionExpand from "../../../components/subComponents/TransitionExpand.vue";

import { commonArgs } from "../../4-Forms/common.argTypes.js";

export default {
    title: "Apps/FederatedLogin/PreRegistration",
    component:  RadioButtons,
    parameters: {
        docs: {
            description: {
                component:
                    "PreRegistration Flight Checks",
            },
            actions: { argTypesRegex: "^on.*" },
            source: {
                code: `TBD`
            },
        },
    },
    argTypes: {
        ...commonArgs
    }
}

const options = [
    {
        "value": 1,
        "label": "I am an ACC Member",
        "content": `<p>ACC Members do not need to create an account here. Members receive access to exclusive content and special discounts that require logging in with your existing member account. If you have forgotten your login information, you can use your current primary email address in your profile to login, or look up your username. If you have forgotten your password, you can reset your password.</p>
        <p>If you've recently joined the ACC, check your welcome letter for your ACC account information.</p>
        <a href="/" class="btn btn-lg btn-primary">Continue to Log In</a>`
    },
    {
        "value": 2,
        "label": "I am not a member, but have created an account",
        "content": `<p>Nonmembers who have created an account previously do not need to register again. Creating duplicate accounts make it difficult to
        track your ACC educational activities for credit.</p>
        <p>If you have forgotten your login information, you can use the email address you registered with to login, or look up your username.</p>
        <a href="/ForgotUsername" class="btn btn-lg btn-primary m-b_4">Lookup Username</a>
        
        <p>If you have forgotten your password, you can reset your password.</p>
        <a href="/ForgotPassword" class="btn btn-lg btn-primary">Reset Password</a>`
    },
    {
        "value": 3,
        "label": "I have not created an account",
        "content": `<p>Please note that creating an ACC account does not make you a member of the ACC, or give you access to member-only content, but it does allow you to register for events, purchase ACC products, and redeem promo codes for educational products or discounts.</p>
        <p><i>Note to members: Creating a new account will disconnect you from all of your ACC member benefits and educational credits.</i></p>
        <a href="/" class="btn btn-lg btn-primary">Create Free Account</a>`
    }
]


const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { RadioButtons, transitionExpand },
    data: () => ({
		picked: "",
	}),
    template: `
    <div>
        <div class="p_4 max-w_50 m_auto">
            <h1 class="c_acc font_6 text_center">Verify Account Status</h1>
            <form id="formForgotUsername">
                <fieldset class="p_0 p-b_3">
                    <RadioButtons :state="state" :inputId="inputId" v-bind:options="options" v-model="picked" radioclasses=" p_4 bg_black-2 br_solid br_radius br_1 br_black-2">
                        <template v-slot:default>We want to make sure you don't already have an ACC account. Please click the option that applies to you to continue:</template>
                    </RadioButtons>
                </fieldset>
                <transitionExpand v-for="(item, index) in options" :key="'item_'+index">
                    <div v-html="item.content" v-if="picked.value==item.value" class="m-x_4"></div>
                </transitionExpand>
            </form> 
        </div>
        <hr class="c_primary opacity_none">
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
export const Default = Template.bind({});
Default.args = {
    inputId: "uniqueRadio",
	state:"",
	options:options
};