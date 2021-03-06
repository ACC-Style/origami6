import CardList from "../../../components/ORG/ORG.CardList.vue";
import Btn from "../../../components/subComponents/Btn.vue";
import HeaderImage from "../../../components/ORG/subComponent/HeaderImage.vue";
import SimpleCard from "../../../components/ORG/subComponent/SimpleCard.vue";
import {cardData3,cardData2,cardData1} from "./Data/cards.js";

export default {
	title: "ACC/Home/CallToActionCards",
    component: CardList,
    subcomponents:{Btn, SimpleCard, HeaderImage},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<CardList v-bind="$props"/>`
			},

		},
	},
	argTypes:{
		
		}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { CardList },
	template: `<div class="max-w_70"><CardList  :cards="cards" /></div>`,
});
export const three = Template.bind({});
three.args = {
    cards:cardData3
  };
export const two = Template.bind({});
two.args = {
  cards:cardData2
};
export const one = Template.bind({});
one.args = {
    cards : cardData1
};