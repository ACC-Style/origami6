<template>
    <div  id="sortBar" class="flex_auto p_0 p-r_4:md">
        <span class="uppercase c_secondary font_bold font_n2 m-x_2">Sort</span>
        <ul class="flex flex_column flex_row:md font_bold font_n2 font_ui ul_none w_100 w_auto:md">
            <li class="flex_shrink" v-for="(type,index) in sortTypes" :key="'sortbutton_'+index" :class="{'is-active': selectedButton == type}" v-on:click="selectedSortChange(type)">
                <span
                    class="button bg_secondary-3 p-x_3 p-x_4:lg p-y_3 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_primary a:c_white"
                >{{type}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'sortBar',
        props:{
            sortTypes:{type:Array, default:["Date","Activity","Product"]},
            selectedSort: {type:String, default:"Date"}
        },
        data() {
            return {  
                selectedButton: this.selectedSort,         
            }
        },
        methods: {
            selectedSortChange:function(selection){
                this.$emit("updateselectedsort", selection)},
            
        },
    }
</script>

<style lang="scss" scoped>

</style>