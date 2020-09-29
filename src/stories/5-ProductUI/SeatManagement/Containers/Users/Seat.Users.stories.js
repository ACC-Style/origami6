import UserList from "../../../../../components/SeatManagement/Containers/Seat.Users.vue";
import User from "../../../../../components/SeatManagement/Containers/User/Seat.SingleUser.Overview.vue";
import UserLoading from "../../../../../components/SeatManagement/Containers/User/Seat.SingleUser.Loading.vue"
import {UserData} from "../../Data/userData.js"

export default {
	title: "SeatManagment/Users",
    component: User,
    subcomponents:{UserList,UserLoading},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<UserList :users="[]"/>`
			},
            
        },
	},
    argTypes:{
        status:{
            description:"The state changes the data shown in the user container", 
                control:{type:"select",options:['empty','filled','requested','locked']}
            },
            groups:{
                description:"Object of the groups the user is attached to." },
            user:{
                description:"Object with Name, Personify ID, and Email." 
            }
        }
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { User },
	template: `<User v-bind="$props"/>`,
});
export const SingleUser = Template.bind({});
SingleUser.args = {
user:UserData[0].user,
id:UserData[0].id,
type:UserData[0].type,
date_invite:UserData[0].date_invite,
date_accepted:UserData[0].date_accepted,
date_lockedTill:UserData[0].date_lockedTill,
status:UserData[0].status,
user:UserData[0].user,
bundles:UserData[0].bundles,
};

const ListTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { UserList },
	template: `<UserList :users="users"/>`,
});
export const LoadedList = ListTemplate.bind({});
LoadedList.args = {
users:UserData
};
export const LoadingList = ListTemplate.bind({});
LoadingList.args = {
users:undefined
};
export const EmptyList = ListTemplate.bind({});
EmptyList.args = {
users:[]
};