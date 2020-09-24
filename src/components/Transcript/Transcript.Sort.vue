<template>
    <div  id="sortBar" class="flex_auto p_0 p-r_4:md">
        <span class="uppercase c_secondary font_bold font_n2 m-x_2">Sort</span>
        <ul class="flex flex_column flex_row:md font_bold font_n2 font_ui ul_none w_100 w_auto:md">
            <li class="flex_shrink" v-for="(type,index) in sortTypes" :key="'sortbutton_'+index" :class="{'is-active': selectedButton == type}" >
                <Btn @onClick="onSortChange(type)"
                    class="" v-bind="buttonDecorations"
                >{{type}}</Btn>
            </li>
        </ul>
    </div>
</template>

<script>
import Btn from "../subComponents/Btn.vue";
    export default {
        name:'sortBar',
        components:{Btn},
        props:{
            sortTypes:{type:Array, default:()=>{return ["Date","Activity","Product"]}},
            selectedSort: {type:String, default:"Date"},
            buttonDecorations:{
                type:Object,
                default: ()=>{ return {shadow:false,corner:"square",size:"small",state:"shade",isActivatable:true};}}
        },
        data() {
            return {  
                selectedButton: this.selectedSort,         
            }
        },
        methods: {
            onSortChange:function(selection){
                this.selectedButton = selection;
                this.$emit("onSelectedSort", selection)
                },
            isSelected:function(value){
                return value = this.selectedButton;
            }
            
        },
    }
</script>

<style lang="scss" scoped>

</style>