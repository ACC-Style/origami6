import CardCTA from "../../../components/ORG/ORG.CardCTA.vue";
import Btn from "../../../components/subComponents/Btn.vue";

export default {
	title: "ACC/Home/CardCTA",
    component: CardCTA,
    subcomponents:{Btn},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<CardCTA v-bind="$props"/>`
			},

		},
	},
	argTypes:{
		
		}
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { CardCTA },
	template: `<div class="max-w_60"><CardCTA v-bind="$props" :CardCTAs="cards" /></div>`,
});
export const three = Template.bind({});
three.args = {
    cards : [{
        "id": 1,
        "title": "mi integer ac neque duis bibendum morbi non",
        "shortText": "Sed ante.",
        "url": "Sickling",
        "image_1x": "https://picsum.photos/id/1018/80/870",
        "image_2x": "https://picsum.photos/id/1018/80/415",
        "image_3x": "https://picsum.photos/id/1018/80/260"
      }, {
        "id": 2,
        "title": "lectus in quam fringilla rhoncus mauris enim leo rhoncus",
        "shortText": "Vivamus in felis eu sapien cursus vestibulum.",
        "url": "Vince",
        "image_1x": "https://picsum.photos/id/1000/80/870",
        "image_2x": "https://picsum.photos/id/1000/80/415",
        "image_3x": "https://picsum.photos/id/1000/80/260"
      }, {
        "id": 3,
        "title": "habitasse platea dictumst etiam faucibus cursus urna",
        "shortText": "Vivamus vel nulla eget eros elementum pellentesque.",
        "url": "Farnon",
        "image_1x": "http://dummyimage.com/870x80.png/5fa2dd/ffffff",
        "image_2x": "http://dummyimage.com/415x80.png/ff4444/ffffff",
        "image_3x": "http://dummyimage.com/260x80.png/dddddd/000000"
      }]
};
export const two = Template.bind({});
two.args = {
    cards : [{
        "id": 1,
        "title": "mi integer ac neque duis bibendum morbi non",
        "shortText": "Sed ante.",
        "url": "Sickling",
        "image_1x": "https://picsum.photos/id/800/80/870",
        "image_2x": "https://picsum.photos/id/800/80/415",
        "image_3x": "https://picsum.photos/id/800/80/260"
      }, {
        "id": 2,
        "title": "lectus in quam fringilla rhoncus mauris enim leo rhoncus",
        "shortText": "Vivamus in felis eu sapien cursus vestibulum.",
        "url": "Vince",
        "image_1x": "http://dummyimage.com/870x80.png/dddddd/000000",
        "image_2x": "http://dummyimage.com/415x80.png/cc0000/ffffff",
        "image_3x": "http://dummyimage.com/260x80.png/cc0000/ffffff"
      }]
};
export const one = Template.bind({});
one.args = {
    cards : [{
        "id": 1,
        "title": "mi integer ac neque duis bibendum morbi non",
        "shortText": "Sed ante.",
        "url": "Sickling",
        "image_1x": "http://dummyimage.com/870x80.png/ff4444/ffffff",
        "image_2x": "http://dummyimage.com/415x80.png/5fa2dd/ffffff",
        "image_3x": "http://dummyimage.com/260x80.png/5fa2dd/ffffff"
      }]
};