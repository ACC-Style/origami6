import ProductTeaser from "../../../components/ORG/ORG.ProductTeaser.vue";
import Credits from "../../../components/subComponents/CreditChiclet.vue";
import Btn from "../../../components/subComponents/Btn.vue";
import HeaderImage from "../../../components/ORG/subComponent/HeaderImage.vue";

export default {
	title: "ACC/Home/Product",
	component: ProductTeaser,
	subcomponents: {HeaderImage,Credits, Btn},
	parameters: {
		docs: {
			description: {
				component: "Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {

			},
		},
	},
	argTypes: {
        
	},
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { ProductTeaser },
	template: `
	<div class="max-w_20">
	<ProductTeaser 
		:id="id"
		:title="title" 
		:shortText="shortText"
		:credits="credits" 
		:productType="productType" 
		:purchased="purchased" 
		:img="img"
	/>
	</div>`,
});
export const List = Template.bind({});
List.args = {
    id:15605484,
	title:"ACCSAP",
	shortText:"ACCSAP is ACC’s flagship self-assessment program covering the entire field of adult clinical cardiology.",
    credits: [{"id":1,"type":"CNE","value":3},{"id":2,"type":"COP","value":3}],
    productType:"self-assessment program",
    purchased:true,
	timezone:'America/Los_Angeles',
	img:"https://d1jkcfsixc2tqd.cloudfront.net/ACC/33a8998c-222a-4ec4-87d8-eb6d17ae9f73.png",
    
};
