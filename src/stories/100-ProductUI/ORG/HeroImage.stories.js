import HeroImage from "../../../components/ORG/ORG.HeroImage.vue";
import CardList from "../../../components/ORG/ORG.CardList.vue";
import Btn from "../../../components/subComponents/Btn.vue";
import HeaderImage from "../../../components/ORG/subComponent/HeaderImage.vue";
import SimpleCard from "../../../components/ORG/subComponent/SimpleCard.vue";
import {announcements3} from "./Data/announcements.js";

export default {
	title: "ACC/Home/HeroImage",
    component: HeroImage,
    subcomponents:{CardList,Btn, SimpleCard, HeaderImage},
	parameters: {
		docs: {
			description: {
				component:
					"Splashy image that shows at the top of the page",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<HeroImage :imgSM="imgSM" :imgMD="imgMD" :imgLG="imgLG" :url="url" :id="id"/>`
			},

		},
	},
	argTypes:{
		
		}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { HeroImage },
	template: `<HeroImage  :imgSM="imgSM" :imgMD="imgMD" :imgLG="imgLG" :url="url" :id="id" />`,
});
export const image = Template.bind({});
image.args = {
    id:"123542132",
    url:'',
    imgSM: "https://picsum.photos/id/1032/400/300",
		imgMD: "https://picsum.photos/id/1032/300/600",
		imgLG: "https://picsum.photos/id/1032/300/900",

  };
  export const dimensions = Template.bind({});
  dimensions.args = {
      id:"123542132",
      url:"http://www.acc.org",
      imgSM: "http://via.placeholder.com/300x400",
          imgMD: "http://via.placeholder.com/600x300",
          imgLG: "http://via.placeholder.com/900X300",
  
    };

const LockUp = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HeroImage, CardList },
    template: `
    <section class="max-w_70 m-x_auto">
        <HeroImage  :imgSM="imgSM" :imgMD="imgMD" :imgLG="imgLG" :url="url" :id="id" />
        <div class="m-t_n5 m-x_5:lg m-x_4 p_4 bg_white bg_white m-t_n5 m-x_4 m-x_5:lg p_4 relative t_n5">
            <CardList :headerImg="true"  :cards="cards" />
        </div>
    </section>
    `,
});

export const lockup = LockUp.bind({});
lockup.args = {

    id:"123542132",
    url:"http://www.acc.org",
    imgSM: "https://picsum.photos/id/1032/400/300",
    imgMD: "https://picsum.photos/id/1032/300/600",
    imgLG: "https://picsum.photos/id/1032/300/900",
    cards:announcements3

  };