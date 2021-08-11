import ListLoader from "../..//components/subComponents/ListLoader.vue";
import ListEmptyCard from "../../components/subComponents/ListEmptyCard.vue";
import {listNull, listEmpty, listLoaded} from "../lorem/list.js";
export default {
	title: "Container/ListLoader",
	component: ListLoader,
	subcomponents: { ListEmptyCard },
	parameters: {
		docs: {
			description: {
				component:
					"List Loaders are simple containers that have three states when the list item passed to it are null, empty, or loaded.  Each of these states have a corresponding slot.",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `
                <ListLoader :list="list">
                    <template v-slot:listNull></template>
                    <template v-slot:listEmpty>
                        <ListEmptyCard :icons='false'>This is the message where there is nothing returned or if the list is at zero</ListEmptyCard>
                    </template>
                    <template v-slot:default>Do your loop of the list here.</template>
                </ListLoader>
                `,
			},
		},
	},
	argTypes: {
		list: {
			description: "The Array that is returned that should be loaded.",
			control: { type: "Array", options: [] },
		},
	},
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { ListLoader ,ListEmptyCard},
	template: `
    <ListLoader :list="list">
        <template v-slot:listNull>
            Your list is null and isn't even an array.
        </template>
        <template v-slot:listEmpty>
            <ListEmptyCard :icon='false'>
                Your List is Empty Here
            </ListEmptyCard>
        </template>
        <template v-slot:default >
            <div class="br_solid br_black-3 br-b_1 m-b_4 p-b_4 c_black" v-for="(item,index) in list" :key="'item_'+index">
                <h1 class="font_display c_primary font-size_up-1">{{item.label }}</h1>
                <p class="font_copy">{{ item.content }}</p>
            </div>
        </template>
    </ListLoader>
	`,
});
export const Loading = Template.bind({});
Loading.args = {
	list: listNull,
};

export const Empty = Template.bind({});
Empty.args = {
	list: listEmpty,
};

export const ListWithItems = Template.bind({});
ListWithItems.args = {
	list: listLoaded,
};