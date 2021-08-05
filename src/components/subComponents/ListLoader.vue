<template>
    <div>
        <div v-if=" list == null ">
            <slot name="listNull">
                <div class="p_5"><LoadingText class="font_5"/></div>
            </slot>
          
        </div>
        <div v-else-if=" list.length <= 0 " >
            <slot name="listEmpty">
                <ListEmptyCard></ListEmptyCard>    
            </slot>
        </div>
        <div v-else >
            <slot name="default"></slot>
        </div>
    </div>
</template>

<script>
    import LoadingText from "../subComponents/LoadingText";
    import ListEmptyCard from "../subComponents/ListEmptyCard";
    export default {
        props:{
            list:{type:Array,default:null}
        },
        components:{
            LoadingText,ListEmptyCard
        }
    }
</script>

<style scoped>

</style>