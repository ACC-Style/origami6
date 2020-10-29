import NewsArticle from "../../../components/ORG/ORG.NewsArticle.vue";
import { articles } from "./Data/newsArticles.js";

export default {
	title: "ACC/Home/NewsArticle",
	component: NewsArticle,
	subcomponent: {},
	parameters: {
		docs: {
			description: {
				component: "Simple icon block that shows the state",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<NewsArticle class="max-w_70" v-bind="$props"/>`,
			},
		},
	},
	argTypes: {
		actions: {
			onSaveToLibrary: { action: "addToLibrary" },
			onRemoveFromLibrary: { action: "remove this from user library" },
			onNavigateToArticle: { action: "navigate page to article" },
			onNavigateToAuthor: {
				action:
					"navigate page to author bio or articles from the same author",
			},
		}
	},
};
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { NewsArticle },
	template: `<div class="max-w_70">
		<NewsArticle  v-bind="article" :publishDate="new Date(article.publishDate)" :savedInLibrary="savedInLibrary" :previouslyRead="previouslyRead" :featured="featured" :editorsPick="editorsPick" />
	</div>`,
});
export const Articles = Template.bind({});
Articles.args = {
	article: articles[0],
	previouslyRead: false,
	savedInLibrary: false,
	featured: false,
	editorsPick: false,
};

export const Saved = Template.bind({});
Saved.args = {
	article: articles[5],
	previouslyRead: false,
	savedInLibrary: true,
	featured: false,
	editorsPick: false,
};

export const Read = Template.bind({});
Read.args = {
	article: articles[1],
	previouslyRead: true,
	savedInLibrary: false,
	featured: false,
	editorsPick: false,
};

export const Featured = Template.bind({});
Featured.args = {
	article: articles[3],
	previouslyRead: false,
	savedInLibrary: false,
	featured: true,
	editorsPick: false,
};

export const EditorsPick = Template.bind({});
EditorsPick.args = {
	article: articles[2],
	previouslyRead: false,
	savedInLibrary: false,
	featured: false,
	editorsPick: true,
};
