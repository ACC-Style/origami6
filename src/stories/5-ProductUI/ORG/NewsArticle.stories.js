import NewsArticle from "../../../components/ORG/ORG.NewsArticle.vue";
import {articles} from "./Data/newsArticles.js";

export default {
	title: "ACC/Home/NewsArticle",
    component: NewsArticle,
	subcomponent:{},
	parameters: {
		docs: {
			description: {
				component:
					"Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<NewsArticle class="max-w_70" v-bind="$props"/>`
			},

	},
	argTypes:{
        title:{
                control:{type:"text"}
			},
		}
	}
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { NewsArticle },
		template: `<div class="max-w_70">
		<NewsArticle  v-for="(article, index) in articles" v-bind="article" :publishDate="new Date(article.publishDate)" :key="index"/>
	</div>`,
});
export const Articles = Template.bind({});
Articles.args = {
	articles,

};