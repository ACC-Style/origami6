<template>
	<article
		class="br_radius br_1 br_black-2 bg_black_-05 br_solid  p-x_3 p_4 relative  m-b_4 bg_black-_05 font_ui"
		@click="articleURL" :class="{ 'shadow_overlap-light': featured && (!previouslyRead && !savedInLibrary) }"
	>
		<div v-show="!removeFromListSurveyVisiblity"
			class="absolute r_n1:md r_4 t_n1 t_4:md text_center flex flex_column:md justify_end align-right font_n2:md font_n3 overflow_hidden transition_2"
		>
			<TabFlag v-if="internalSavedInLibrary" :type="'bookmarked'"/>
			<TabFlag v-if="featured" :type="'featured'"/>
			<TabFlag v-if="editorsPick" :type="'upvoted'" :text="'editor&rsquo;s pick'"/>
			<TabFlag v-if="previouslyRead" :type="'read'"/>		
		</div>
		<div class="flex flex_row:md flex_column" v-show="!removeFromListSurveyVisiblity">
				<div class="flex_none justify_around font_n3 font_n2:md text_left flex_row flex_column:md flex p-l_4:md p-r_3:lg p-l_3 transition_2 p-t_0" :class="{'p-t_4 m-t_2 p-t_0:md m-t_0:md ':editorsPick || featured || previouslyRead || internalSavedInLibrary }">
					<img
						:src="image"
						alt=""
						style="
							width: clamp(75px, 10vw, 125px);
							height: clamp(75px, 10vw, 125px);
						"
                        />
					<div class="flex_auto m-t_2:md m-l_3 m-l_0:md m-b_3 m-b_0:md">
                                        <span class="c_accent-1 font_bold uppercase block wrap display_none:md"
						>{{ type }}</span>
					    <span data-type="date" class="block c_black-7">{{ publishDate | dateStrAbv }}</span>
						<div class="block c_primary-n1 h:c_primary-n3 h:underline cursor_pointer " @click.stop="toggleSavedInLibrary">
							<span v-show="!internalSavedInLibrary">save to library</span><span v-show="internalSavedInLibrary">remove from library</span>
						</div>
						<div class="block c_primary-n1 h:c_primary-n3 h:underline cursor_pointer " @click.stop="showSurvey">
							<span>hide from list</span>
						</div>
                    </div>
				</div>
			<div class="flex_auto p-l_4:md p-l_3 p-r_5:md m-r_4:md">
                <span class="c_accent-2 font_bold uppercase display_none wrap block:md font_n1"
						>{{ type }}</span>
				<h2
					data-type="title"
					class="c_primary-n2 cursor_pointer font_1 font_3:md font_display font_medium  h:underline lh_1 m-y_2"
				>
					{{ title}}
				</h2>
				<p
					data-type="teaser"
					class="font_copy font_0 lh_2 m-b_2 m-t_2 z_1 display_none block:md max-w_50"
				>
					{{ snippet }}
				</p>

				<div
					data-type="authors"
					class="block p-y_2 z_2 relative font_n2:md font_n3 text_left m-b_n3"
				>
					<template v-for="(author, index) in authors"  >
					<a
						v-if="index<authorOverflow"
						@click.stop="authorURL(author.id)"
                        :key="index"
						class="link z_3 inline-block p-x_2  h:underline cursor_pointer "
						><i class="fa fa-user p-r_2 opacity_5"></i> {{ author.fullname }}</a
					><a
						v-else
						v-show="showAuthorOverflow"
						@click.stop="authorURL(author.id)"
                        :key="index"
						class="link z_3 inline-block p-x_2  h:underline cursor_pointer "
						><i class="fa fa-user p-r_2 opacity_5"></i> {{ author.fullname }}</a
					>
					
					</template>
					<BtnToggle 
						class="block"
						v-if="authors.length > authorOverflow " 				
						:state="'empty'"
						:size="'tiny'"
						:shadow="false"
						:isActive="false"
						@onDeactive="showAuthorOverflow = false"
						@onActive="showAuthorOverflow = true"
						
						>
							<template v-slot:active >
								Show Less 
							</template>			
							<template v-slot:deactive>
								Show More |  {{ authors.length - (authorOverflow ) }} hidden authors
							</template>
						</BtnToggle>
					
					
				</div>
			</div>
		</div>
		<div class="p_4 p-t_0" v-show="removeFromListSurveyVisiblity">
			<h2 class="font_display m-t_3 m-b_3">Why are you hiding this article?</h2>
			<div class="m-b_3">
				<Btn class="br_black-3 br_solid br_1 h:bg_white c_black" :state="'none'" :shadow="false" :size="'small'">Read Somewhere Else</Btn>
				<Btn class="br_black-3 br_solid br_1 h:bg_white c_black" :state="'none'" :shadow="false" :size="'small'">Not Interested</Btn>
				<Btn class="br_black-3 br_solid br_1 h:bg_white c_black" :state="'none'" :shadow="false" :size="'small'">Just Because</Btn>
				<Btn class="" :state="'secondary'" :shadow="false" :size="'small'"  @onClick="hideSurvey">Cancel</Btn>
			</div>
			<div class="m"><label class="font_regular font_0" for="dontSomeMeAgain"><input type="checkbox" name="dontSomeMeAgain" id="dontSomeMeAgain"> Don't Ask Me Again.</label></div>
			<div class="br-b_3 br_primary br_solid transition_3 absolute t_0 r_0" :style="countDownWidth"></div>
			<span class="c_primary-2 absolute t_3 font_n2 uppercase r_4">removing from list</span>
		</div>
	</article>
</template>

<script>
import TabFlag from "../subComponents/TabFlag";
import BtnToggle from "../subComponents/BtnToggle";
import Btn from "../subComponents/Btn";

export default {
	components:{
		TabFlag, BtnToggle, Btn

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
			showAuthorOverflow:false,
			authorOverflow:4,
			removeFromListSurveyVisiblity:false,
			countDown:20
		};
	},
	computed: {
		countDownWidth(){
			let obj = new Object;
			obj['width'] = this.countDown / 20 * 100 + '%' ;
			return obj;

		}

	},

	methods: {
		toggleAuthorOverflow(){
			this.showAuthorOverflow = !this.showAuthorOverflow
		},
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
		},
		returnSurvey(id,answer){},
		showSurvey(){
			this.removeFromListSurveyVisiblity = true,
			this.countDownTimer();
			},
		hideSurvey(){
			this.removeFromListSurveyVisiblity = false,
			this.countDown = 20},
		countDownTimer() {
                if(this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 500)
                }
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
