<template>
    <div  id="sortBar" class="flex_auto p_0 p-r_4:md">
        <span class="uppercase c_secondary font_bold font_n2 m-x_2">Sort</span>
        <ul class="flex flex_column flex_row:md font_bold font_n2 font_ui ul_none w_100 w_auto:md">
            <li class="flex_shrink" v-for="(type,index) in btnList" :key="'button_'+index" :class="{'is-active': selectedButton == type}" >
                <Btn @onClick="onSortChange(type)"
                    class=""  :isActive="type.isActive" v-bind="buttonDecorations" @onActive=" setActive(index,true)" @onDeactive="setActive(index,false) "
                >{{type.label}}</Btn>
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
            options:{type:Array, default:()=>{return [{label:"Date",isActive:false}]}},
            multiSelect:{type:Boolean, default:false},
            buttonDecorations:{
                type:Object,
                default: ()=>{ return {shadow:false,corner:"square",size:"small",state:"shade",isActivatable:true};}}
        },
        data() {
            return {  
                btnList:this.options,
                selectedButton:null    
            }
        },
        methods: {
            onSortChange:function(selection){
                this.selectedButton = selection;
                this.$emit("onSelectedSort", selection)
                },
            setActive(index , bool){
                if(!this.multiSelect){
                    this.btnList.forEach((a)=>{ a.isActive=false;})
                }
               this.btnList[index].isActive = bool;
            }

            
        },
    }
</script>

<style lang="scss" scoped>

</style>