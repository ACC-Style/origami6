import Announcement from "../../../components/ORG/ORG.Announcement.vue";

export default {
	title: "ACC/Home/Announcement",
    component: Announcement,
    subcomponents:{},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<Announcement v-bind="$props"/>`
			},

		},
	},
	argTypes:{
		
		}
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Announcement },
	template: `<div class="max-w_60"><Announcement v-bind="$props" :announcements="announcements" /></div>`,
});
export const three = Template.bind({});
three.args = {
    announcements : [{
        "id": 1,
        "title": "mi integer ac neque duis bibendum morbi non",
        "shortText": "Sed ante.",
        "url": "Sickling",
        "image_1x": "http://dummyimage.com/870x80.png/ff4444/ffffff",
        "image_2x": "http://dummyimage.com/415x80.png/5fa2dd/ffffff",
        "image_3x": "http://dummyimage.com/260x80.png/5fa2dd/ffffff"
      }, {
        "id": 2,
        "title": "lectus in quam fringilla rhoncus mauris enim leo rhoncus",
        "shortText": "Vivamus in felis eu sapien cursus vestibulum.",
        "url": "Vince",
        "image_1x": "http://dummyimage.com/870x80.png/dddddd/000000",
        "image_2x": "http://dummyimage.com/415x80.png/cc0000/ffffff",
        "image_3x": "http://dummyimage.com/260x80.png/cc0000/ffffff"
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
    announcements : [{
        "id": 1,
        "title": "mi integer ac neque duis bibendum morbi non",
        "shortText": "Sed ante.",
        "url": "Sickling",
        "image_1x": "http://dummyimage.com/870x80.png/ff4444/ffffff",
        "image_2x": "http://dummyimage.com/415x80.png/5fa2dd/ffffff",
        "image_3x": "http://dummyimage.com/260x80.png/5fa2dd/ffffff"
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
    announcements : [{
        "id": 1,
        "title": "mi integer ac neque duis bibendum morbi non",
        "shortText": "Sed ante.",
        "url": "Sickling",
        "image_1x": "http://dummyimage.com/870x80.png/ff4444/ffffff",
        "image_2x": "http://dummyimage.com/415x80.png/5fa2dd/ffffff",
        "image_3x": "http://dummyimage.com/260x80.png/5fa2dd/ffffff"
      }]
};