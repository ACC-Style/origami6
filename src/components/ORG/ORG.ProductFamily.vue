<template>
<section class="family font_ui font_1 ">
    <header class="text_center w_100 font_4 font_xbold  font_display c_acc m-b_4">
        <slot></slot></header>
    <div class="family-gallery flex flex_column flex_row:md p_4">
        <ul class="family-member-list ul_none font_display font_medium font_2  flex_column flex flex_column justify_center flex_auto flex-grow_1"  :class="' c_'+ color+'-n2'">
            <li v-for="(product, index) in productFamily" :key="index" @click="selectionChange(product)" :class="'h:bg_'+color+'-5'" class="block br-br_square br-tr_square br_radius family-member flex_none  h:undecorated lh_0 m-y_2 p-x_4 p-y_3 relative" >{{product.shortName}} 
                <div class="absolute transition_3 b_2  flex_none r_0 t_2 z_3"  :class="[' bg_'+ color,{'opacity_none':selectedProduct[0] == product},{'opacity_0':selectedProduct != product}]" style="width:.5rem"></div>
            </li>

        </ul>
        <div class="bg_black-2 flex_none m-l_n3 z_2" style="width:.5rem"></div>
        <div class="family-member-details flex_auto p_4 flex-grow_3 w_60 flex justify_around">
            <transition name="slide" mode="out-in">
            <article v-for="product in selectedProduct"  :key="product.id" class=" flex_auto self_center p_3 relative transition_2"  >
                <div class="flex flex_column flex_row:lg">
                        <div class="aspect_1x1 bg_center bg_contain bg_no-repeat flex_none m_4 self_center w_25" :style="'background-image:url('+product.logo+')'">
                        
                        </div>
                    <div class="flex_auto p-r_3 p_4">
                        <h1 class="c_acc font_3 font_bold font_display lh_1 m-y_0">{{product.fullName}}</h1>
                        <p class="font_0 font_copy lh_2 lh_3 m-y_2">
                            {{product.description}}
                        </p>
                        <a :href="product.url" class="expanded-click-area undecorated h:underline font_copy font_1 font_medium" target="_blank" :class="'c_'+ color+'-n2'">learn
                            more... </a>
                    </div>
                </div>
            </article>
            </transition>
        </div>
    </div>
</section>
</template>

<script>
    export default {
        props: {
            products: {
                type: Array,
                default:()=>[],
                required:true 
            },
            color:{
                type:String,
                default:"acc"
            }
        },
        data() {
            return {
                productFamily: this.products,
                selectedProduct: [this.products[0]]
            }
        },
        computed: {

        },

        methods: {
            selectionChange(product) {
                let array = [];
                array.push(product);
                this.selectedProduct=array;
                
            },
        },
        
    }
</script>

<style scoped>
.flex-grow_3{ flex-grow: 3;}
.slide-enter {
  opacity: 0;
  transform: translate(0 ,.5rem);
  box-shadow: 0 0 2px hsla(0,0%,100%,.05),0 0 0 hsla(0,0%,100%,0),0 0 0 hsla(0,0%,100%,0),0 0 0 hsla(0,0%,100%,0),0 0 0 hsla(0,0%,100%,0);
}
.slide-enter-active,
.slide-leave-active{}
.slide-enter-to {  }
.slide-enter-active,
.slide-leave-active { transition: all 0.25s ease-in, box-shadow 0.1s ease-out; }
.slide-leave {  }

.slide-leave-to {
  opacity: 0;
  transform:  translate(0, .5rem);
  box-shadow:0 0 2px hsla(0,0%,100%,.05),0 0 0 hsla(0,0%,100%,0),0 0 0 hsla(0,0%,100%,0),0 0 0 hsla(0,0%,100%,0),0 0 0 hsla(0,0%,100%,0);
  }

</style>