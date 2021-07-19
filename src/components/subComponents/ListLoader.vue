<template>
    <div>
        <div v-if=" list == null ">
            <slot name="listNull">
                <div class="p_5"><LoadingText class="font_5"/></div>
            </slot>
          
        </div>
        <div v-else-if=" list.length <= 0 " >
            <slot name="listEmpty">
                <article
				class="m_5 p_4 shadow_2 br_radius br_solid br_2 br_white-9 bg_shade-5 font_ui"
			>
				<h1
					class="font_regular p_3 font_2 text_center br-b_1 br_solid br_shade-4"
				>
					<i class="far fa-exclamation-triangle"></i> You have No
					Results
					<i class="far fa-exclamation-triangle"></i>
				</h1>
				<p class="font_0 p-y_3 lh_3">
					You have return no results please check your spelling or try different search keywords and filters.
				</p>
                </article>
            </slot>
        </div>
        <div v-else >
            <slot name="listLoaded"></slot>
        </div>
    </div>
</template>

<script>
    import LoadingText from "../subComponents/LoadingText";
    export default {
        props:{
            list:{type:Array,default:null}
        },
        components:{
            LoadingText
        }
    }
</script>

<style scoped>

</style>