import UserEmailSimple from "../../components/subComponents/User/User.EmailListItem.vue";

export default {
    title: "Basic/UserEmailSimple",
    component: UserEmailSimple,
    subcomponents: {},
    parameters: {
        docs: {
            description: {
                component:
                    "Simple icon block that shows the state on a larger UI Element. There is a simple hover animation to show a text element",
            },
            actions: { argTypesRegex: "^on.*" },
            source: {
                code: `<UserEmailSimple v-bind="$props"/>`
            },

        },
    },
    argTypes: {
        type: {
            name: 'type',
            description: "basic set of color, text, combos that can be overriden by the other props.",
            default: '',
            control: { }
        },
        name: {
            description: "name of the user",

        },
        email: {
            description: "email of user",

        },
        showEdit: {
            description: "show the button for editing this user",

        },
        showDelete: {
            description: "show the button for removing this user",
        },
    }
};
const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UserEmailSimple },
    template: `<UserEmailSimple v-bind="$props" class="max-w_30"/>`,
});
export const Default = Template.bind({});
Default.args = {
    name: "Dr.Pepper",
    email: "test@acc.org",
    showDelete: true,
    showEdit: true
};