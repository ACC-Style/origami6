<template>
	<article
		class="br_radius br_1 br_black-2 bg_black_-05 br_solid font_copy  p-x_3 p_4 relative  m-b_4 bg_black-_05"
		@click="articleURL" :class="{ 'shadow_overlap-light': featured && (!previouslyRead && !savedInLibrary) }"
	>
		<div
			class="absolute r_n1:md r_4 t_n1 t_4:md text_center flex flex_column:md justify_end align-right font_1:md font_0 overflow_hidden transition_2"
		>
			<TabFlag v-if="internalSavedInLibrary" :type="'bookmarked'"/>
			<TabFlag v-if="featured" :type="'featured'"/>
			<TabFlag v-if="editorsPick" :type="'upvoted'" :text="'editor&rsquo;s pick'"/>
			<TabFlag v-if="previouslyRead" :type="'read'"/>		
		</div>
		<div class="flex  flex_row:md flex_column">
				<div class="flex_none justify_around font_n2 text_left flex_row flex_column:md flex p-l_4:md p-r_3:lg p-l_3 transition_2 p-t_0" :class="{'p-t_4 m-t_2 p-t_0:md m-t_0:md ':editorsPick || featured || previouslyRead || internalSavedInLibrary }">
					<img
						:src="image"
						alt=""
						style="
							width: clamp(75px, 10vw, 125px);
							height: clamp(75px, 10vw, 125px);
						"
                        />
					<div class="flex_auto m-t_2:md m-l_3 m-l_0:md m-b_3 m-b_0:md">
                                        <span class="c_accent-2 font_bold uppercase block wrap display_none:md"
						>{{ type }}</span>
					    <span data-type="date" class="block c_black-7">{{ publishDate | dateStrAbv }}</span>
						<div class="block c_primary h:c_primary-n2 h:underline cursor_pointer " @click="toggleSavedInLibrary">
							<span v-show="!internalSavedInLibrary">save to library</span><span v-show="internalSavedInLibrary">remove from library</span>
						</div>
                    </div>
				</div>
			<div class="flex_auto p-l_4:md p-l_3 p-r_5:md m-r_4:md">
                <span class="c_accent-2 font_bold uppercase display_none wrap block:md font_0"
						>{{ type }}</span>
				<h2
					data-type="title"
					class="c_primary-n1 cursor_pointer font_2 font_4:md font_display font_medium font_regular h:underline lh_1 m-y_2"
				>
					{{ title}}
				</h2>
				<p
					data-type="teaser"
					class="font_1 lh_2 m-b_2 m-t_2 z_1 display_none block:md max-w_50"
				>
					{{ snippet }}
				</p>

				<div
					data-type="authors"
					class="block p-y_2 z_2 relative font_n1:md font_n2 text_left m-b_n3"
				>
					<a
						@click="authorURL(author.id)"
                        v-for="(author, index) in authors" :key="index"
						class="link z_3 inline-block p-x_2  h:underline cursor_pointer "
						><i class="fa fa-user p-r_2 opacity_5"></i> {{ author.fullname }}</a
					>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
import TabFlag from "../subComponents/TabFlag";

export default {
	components:{
		TabFlag
	},
	props: {
		title: {
			type: String,
			default: "Missing Title",
		},
		snippet: {
			type: String,
        },
        image:{type:String},
		type: { type: String, default: "Journal Scan" },
		editorsPick: { type: Boolean, default: false },
		featured: { type: Boolean, default: false },
		previouslyRead: { type: Boolean, default: false },
		savedInLibrary: { type: Boolean, default: false },
		publishDate: { type:  Date },
		authors: { type: Array },
	},
	data() {
		return {
			hoverSavedInLibrary: false,
			hoverFeatured: false,
			hoverEditorsPick: false,
			hoverPreviouslyRead: false,
			internalSavedInLibrary: this.savedInLibrary,
		};
	},
	computed: {},

	methods: {
		toggleSavedInLibrary(){
			this.internalSavedInLibrary = !this.internalSavedInLibrary;
			(this.internalSavedInLibrary)?this.$emit("onSaveToLibrary"):this.$emit("onRemoveFromLibrary");
		},
		articleURL(id){
			let url = id;
			this.$emit("onNavigateToArticle", url);
		}
		,authorURL(id){
			this.$emit("onNavigateToAuthor");
			return "convertthistoURL"+id;
		}
	},
};
</script>

<style scoped>
.flex-grow_3 {
	flex-grow: 3;
}
.slide-enter {
	opacity: 0;
	height: 0;
	box-shadow: 0 0 2px hsla(0, 0%, 100%, 0.05), 0 0 0 hsla(0, 0%, 100%, 0),
		0 0 0 hsla(0, 0%, 100%, 0), 0 0 0 hsla(0, 0%, 100%, 0),
		0 0 0 hsla(0, 0%, 100%, 0);
}

.slide-enter-to{
height:35px;
}
.slide-enter-active,
.slide-leave-active {
	transition: all 0.25s ease-in, box-shadow 0.1s ease-out;
}
.slide-leave {
	height:35px;

}

.slide-leave-to {
	opacity: 0;
	height:0;
	box-shadow: 0 0 2px hsla(0, 0%, 100%, 0.05), 0 0 0 hsla(0, 0%, 100%, 0),
		0 0 0 hsla(0, 0%, 100%, 0), 0 0 0 hsla(0, 0%, 100%, 0),
		0 0 0 hsla(0, 0%, 100%, 0);

}
</style>
