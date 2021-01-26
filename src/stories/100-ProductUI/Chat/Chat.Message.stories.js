import ChatMessage from "../../../components/Chat/Chat.Message.vue";
import {chatData} from "./Data/chatData.js";

export default {
	title: "APPS/Chat",
    component: ChatMessage,
    subcomponents:{},
	parameters: {
		docs: {
			description: {
				component:
					"Simple chat message",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<ChatMessage v-bind="$props"/>`
			},

		},
	},
	argTypes:{
		creditTypes:{
			description:"", 
				control:{type:"",options:[]}
			},
		}
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { ChatMessage },
	template: `<ChatMessage v-bind="$props"/>`,
});
export const Message = Template.bind({});
Message.args = {
    userid:chatData[0].id,
    id:chatData[0].id,
    fullName:chatData[0].fullName,
    message:chatData[0].message,
    timestamp:chatData[0].timestamp,
    type:chatData[0].type
};