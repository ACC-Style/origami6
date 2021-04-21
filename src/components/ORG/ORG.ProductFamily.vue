<template>
<section class="family font_ui font_1 ">
    <header class=" w_100 font_4 font_xbold  font_display c_acc m-b_4">
        <slot></slot>
    </header>
    <div class="family-gallery flex flex_column flex_row:md p_3 p-x_4 p_4:md bg_black-_05 shadow_emboss-light br_radius">
        <ul class="br-r_4 br_black-2 br_solid c_primary-n2 family-member-list flex flex-grow_1 flex_auto flex_column font_2:md font_0 font_display font_medium justify_center text_center text_left:md  br-tr_radius br-br_radius ul_none m-y_3 m-y_2:lg m-r_3:md m-r_4:lg"  :class="' c_'+ color+'-n2'">
            <li v-for="(product, index) in productFamily" :key="index" @click="selectionChange(product)" :class="'h:bg_'+color+'-5'" class="block br-br_square br-tr_square br_radius family-member flex_none  h:undecorated lh_0 m-y_2 p-x_4 p-y_3:md p-y_2 relative" >{{product.shortName}} 
                <div class="absolute transition_3 b_2 br_radius flex_none r_n3 t_2  z_3"  :class="[' bg_'+ color,{'opacity_none':selectedProduct[0] == product},{'opacity_0':selectedProduct != product}]" style="width:.5rem"></div>
            </li>

        </ul>
        <div class="family-member-details flex_auto p_4 flex-grow_3 w_50:md w_60:lg flex justify_around br_radius p_3 p_4:md bg_white shadow_overlap-light m-b_2">
            <transition name="slide" mode="out-in">
            <article v-for="product in selectedProduct"  :key="product.id" class=" flex_auto self_center p_3:md relative transition_2"  >
                <div class="flex flex_column flex_row:lg">
                    <div class="aspect_3x2 bg_left max-w_30 bg_contain bg_no-repeat flex_none m_4:md m-b_3 self_center w_25:lg w_100" :style="'background-image:url('+product.logo+')'">
                    
                    </div>
                    <div class="flex_auto w_100 w_75:lg p-r_3:md p_4:md">
                        <h1 class="c_acc font_3 font_bold font_display lh_1 m-y_0">{{product.fullName}}</h1>
                        <p class="font_0 font_copy lh_2 lh_3 m-y_2">
                            {{product.description}}
                        </p>
                            				<a
					:href="product.url"
					class="expanded-click-area undecorated h:underline  font_0:lg text_left font_bold h:c_primary-n3 c_primary block p-y_2 lh_2 nowrap m-r_4"  :class="'c_'+ color+'-n2'"
					>Learn More <i class="fas fa-arrow-right p-x_2" ></i
				></a>
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