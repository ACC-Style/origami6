<template>
    <div  id="BtnBar" class="flex_auto p_0 p-r_4:md">
        <span class="uppercase c_secondary font_bold font_n2 m-x_2 block"><slot></slot></span>
        <ul class="inline-flex:md flex_column flex_row:md font_bold font_n2 font_ui ul_none w_100 w_auto:md">
            <li class="flex_shrink br-r_1 br_solid br_white-4" v-for="(type,index) in btnList" :key="'button_'+index" :class="{' is-active active ': selectedButton == type}" >
                  <Btn   
                    class="" 
                    :class="btnConfig.classes" 
                    :isActive="type.isActive" 
                    :state="btnConfig.state"
					:size="btnConfig.size"
					:shadow="btnConfig.shadow"
					:corner="btnConfig.corner"
                    :isActivatable ="btnConfig.isActivatable"
                    @onClick="onChange(type)"
					@onActive=" setActive(index,true)" 
                    @onDeactive="setActive(index,false) "
                >{{type.label}}</Btn>
            </li>
        </ul>
    </div>
</template>

<script>
import Btn from "./Btn.vue";
    export default {
        name:'BtnBar',
        components:{Btn},
        props:{
            options:{type:Array, default:()=>{return [{label:"Date",isActive:false}]}},
            multiSelect:{type:Boolean, default:false},
    		btnConfig:{
                type:Object,
                default:()=>{
                return new Object({state:"black",
                    size:'',
                    shadow:false,
                    corner:"square",
                    classes:'',
                    isActivatable:true
                });
            }}
        },
        data() {
            return {  
                btnList:this.options,
                selectedButton:null    
            }
        },
        methods: {
            onChange:function(selection){
                this.selectedButton = selection;
                this.$emit("onChange", selection)
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