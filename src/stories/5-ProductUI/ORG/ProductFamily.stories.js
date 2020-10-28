import ProductFamily from "../../../components/ORG/ORG.ProductFamily.vue";

export default {
	title: "ACC/Home/ProductFamily",
    component: ProductFamily,
	subcomponent:{},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<ProductFamily v-bind="$props"/>`
			},

	},
	argTypes:{
        color:{
            description:"color code to set the accents", 
                control:{type:"select",options:['acc','primary']}
			},
		}
	}
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { ProductFamily },
	template: `<ProductFamily class="m_4 max-w_70" v-bind="$props">ACC Product Family</ProductFamily>`,
});
export const Family = Template.bind({});
Family.args = {
	color:"primary",
	products:[{
		"id": 1,
		"fullName": "REMEDYREPACK INC.",
		"shortName": "unblog.fr",
		"url": "https://scientificamerican.com/in/quam/fringilla.png?porttitor=massa&lacus=quis&at=augue&turpis=luctus&donec=tincidunt&posuere=nulla&metus=mollis&vitae=molestie&ipsum=lorem&aliquam=quisque&non=ut&mauris=erat&morbi=curabitur&non=gravida&lectus=nisi&aliquam=at&sit=nibh&amet=in",
		"description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
		"logo": "http://dummyimage.com/235x140.jpg/cc0000/ffffff"
	  }, {
		"id": 2,
		"fullName": "VVF Kansas Services LLC",
		"shortName": "nyu.edu",
		"url": "http://moonfruit.com/sed.xml?dictumst=mollis&maecenas=molestie&ut=lorem&massa=quisque&quis=ut&augue=erat&luctus=curabitur&tincidunt=gravida&nulla=nisi&mollis=at&molestie=nibh&lorem=in&quisque=hac&ut=habitasse&erat=platea&curabitur=dictumst&gravida=aliquam&nisi=augue&at=quam&nibh=sollicitudin&in=vitae&hac=consectetuer&habitasse=eget&platea=rutrum&dictumst=at&aliquam=lorem&augue=integer&quam=tincidunt&sollicitudin=ante&vitae=vel&consectetuer=ipsum&eget=praesent&rutrum=blandit&at=lacinia&lorem=erat&integer=vestibulum&tincidunt=sed&ante=magna&vel=at&ipsum=nunc&praesent=commodo",
		"description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
		"logo": "http://dummyimage.com/229x203.png/5fa2dd/ffffff"
	  }, {
		"id": 3,
		"fullName": "Cardinal Health",
		"shortName": "yolasite.com",
		"url": "http://kickstarter.com/lacinia/erat/vestibulum/sed.png?ipsum=praesent&primis=blandit&in=nam&faucibus=nulla&orci=integer&luctus=pede&et=justo&ultrices=lacinia&posuere=eget&cubilia=tincidunt&curae=eget&donec=tempus&pharetra=vel&magna=pede&vestibulum=morbi&aliquet=porttitor&ultrices=lorem&erat=id&tortor=ligula&sollicitudin=suspendisse&mi=ornare&sit=consequat&amet=lectus&lobortis=in&sapien=est&sapien=risus&non=auctor&mi=sed&integer=tristique&ac=in&neque=tempus&duis=sit&bibendum=amet&morbi=sem&non=fusce&quam=consequat&nec=nulla&dui=nisl&luctus=nunc&rutrum=nisl&nulla=duis&tellus=bibendum&in=felis&sagittis=sed&dui=interdum&vel=venenatis&nisl=turpis&duis=enim&ac=blandit&nibh=mi&fusce=in&lacus=porttitor&purus=pede",
		"description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
		"logo": "http://dummyimage.com/136x198.jpg/cc0000/ffffff"
	  }, {
		"id": 4,
		"fullName": "B. Braun Medical Inc.",
		"shortName": "noaa.gov",
		"url": "http://theglobeandmail.com/pulvinar.jsp?posuere=luctus&felis=et&sed=ultrices&lacus=posuere&morbi=cubilia&sem=curae&mauris=donec&laoreet=pharetra&ut=magna&rhoncus=vestibulum&aliquet=aliquet&pulvinar=ultrices&sed=erat&nisl=tortor&nunc=sollicitudin&rhoncus=mi&dui=sit&vel=amet&sem=lobortis&sed=sapien&sagittis=sapien&nam=non&congue=mi&risus=integer&semper=ac&porta=neque&volutpat=duis&quam=bibendum&pede=morbi&lobortis=non&ligula=quam&sit=nec&amet=dui&eleifend=luctus&pede=rutrum&libero=nulla&quis=tellus&orci=in&nullam=sagittis&molestie=dui&nibh=vel&in=nisl&lectus=duis&pellentesque=ac&at=nibh&nulla=fusce&suspendisse=lacus&potenti=purus&cras=aliquet&in=at&purus=feugiat&eu=non&magna=pretium&vulputate=quis&luctus=lectus&cum=suspendisse&sociis=potenti&natoque=in&penatibus=eleifend&et=quam&magnis=a&dis=odio&parturient=in&montes=hac&nascetur=habitasse&ridiculus=platea&mus=dictumst",
		"description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
		"logo": "http://dummyimage.com/231x247.jpg/cc0000/ffffff"
	  }, {
		"id": 5,
		"fullName": "TOP CARE (Topco Associates LLC)",
		"shortName": "globo.com",
		"url": "https://hostgator.com/luctus.html?eleifend=nisl&luctus=nunc&ultricies=nisl&eu=duis&nibh=bibendum&quisque=felis&id=sed&justo=interdum&sit=venenatis",
		"description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
		"logo": "http://dummyimage.com/169x205.jpg/ff4444/ffffff"
	  }, {
		"id": 6,
		"fullName": "King Bio Inc.",
		"shortName": "sina.com.cn",
		"url": "https://bizjournals.com/nec.jpg?vel=ipsum&pede=integer&morbi=a&porttitor=nibh&lorem=in&id=quis&ligula=justo&suspendisse=maecenas&ornare=rhoncus&consequat=aliquam&lectus=lacus&in=morbi&est=quis&risus=tortor&auctor=id&sed=nulla&tristique=ultrices&in=aliquet&tempus=maecenas&sit=leo&amet=odio&sem=condimentum&fusce=id",
		"description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
		"logo": "http://dummyimage.com/161x247.bmp/5fa2dd/ffffff"
	  }, {
		"id": 7,
		"fullName": "Creative Cosmetics Inc. dba CCI",
		"shortName": "yahoo.com",
		"url": "https://paypal.com/rutrum.jsp?congue=nulla&diam=dapibus&id=dolor&ornare=vel&imperdiet=est&sapien=donec&urna=odio&pretium=justo&nisl=sollicitudin&ut=ut&volutpat=suscipit&sapien=a&arcu=feugiat&sed=et&augue=eros",
		"description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
		"logo": "http://dummyimage.com/103x199.png/cc0000/ffffff"
	  }]
};