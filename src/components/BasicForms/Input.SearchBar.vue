<template>
    <div class="input-holder flex self_end">
        <div class="relative flex flex_grow">
        <input
            :id="inputId"
            :name="inputId"
            v-on:keyup="onChange(value)"
            class="br_2 p-y_2 br_solid flex_auto p-l_4 lh_3 br-tl_radius br-bl_radius bg_white"
            :type="thisInputType"
            v-model="value"
            required="required"
            :placeholder="placeholder"
            :class="inputStyles"
            :disabled="thisState == 'disabled'"
            style="outline-style:none"
        />
 <Btn v-show="value.length > 0" class="absolute t_0 b_0 r_0" :state="'empty'" :shadow="false" @onClick="value = ''">
                <i class="far fa fa-times self_center"></i>
               
            </Btn>
        </div>
        <div class="flex flex_shrink">
            <Btn class="br-tl_square br-bl_square" :shadow="false" :isDisabled="thisState == 'disabled'|| value ==''" :state="btnState" :size="btnSize" @onClick="onSearch(value)">
                <i class="far fa fa-search self_center p-r_3:md font-size_down"></i>
                <span class="display_none inline:md font_bold ">Search</span>
            </Btn>
        </div>
    </div>
</template>
<script>
    import baseInputFunctions from "./subComponent/baseInputFunctions.vue";
    import Btn from "../subComponents/Btn.vue";
    export default {
		mixins:[baseInputFunctions],
		components:{Btn},
		props:{
			inputType:{type:String,default:"text"},
			icon: { type: String, default:'' },
		},
      data() {
		  return {
              thisInputType:this.inputType,
		  }
	  },
	  methods: {
		onChange(value) {
			this.$emit("onChange", value);
		},
        onSearch(value) {
            this.$emit("onSearch",value);
        }
	},
    computed: {

	},
	}
</script>

<style scoped>

</style>