import CardList from "../../../components/ORG/ORG.CardList.vue";
import CardListCarousel from "../../../components/ORG/ORG.CardList.Carousel.vue";
import Btn from "../../../components/subComponents/Btn.vue";
import HeaderImage from "../../../components/ORG/subComponent/HeaderImage.vue";
import SimpleCard from "../../../components/ORG/subComponent/SimpleCard.vue";
import {cardData1} from "./Data/cards.js";
import {announcements3,announcements2,announcements1} from "./Data/announcements.js";

export default {
	title: "ACC/Home/CardList",
    component: CardList,
    subcomponents:{Btn, SimpleCard, HeaderImage,CardListCarousel},
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
	template: `<div class="max-w_75"><CardList :cards="cards" /></div>`,
});

export const OneCardButton = Template.bind({});
OneCardButton.args = {
  cards:cardData1
};

const TemplateCarousel = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { CardListCarousel },
	template: `<div class="max-w_75"><CardListCarousel :cards="cards" /></div>`,
});
export const Carousel = TemplateCarousel.bind({});
Carousel.args = {
  cards:announcements3
};