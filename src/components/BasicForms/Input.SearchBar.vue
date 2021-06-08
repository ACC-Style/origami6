<template>
    <div class="input-holder flex self_end">
        <div class="relative flex flex_grow">
            <input
                :id="inputId"
                :name="inputId"
                v-on:keyup="onChange(inputValue)"
                class="br_2 p-y_2 br_solid flex_auto p-l_4 lh_3 br-tl_radius br-bl_radius bg_white"
                :type="thisInputType"
                v-model="inputValue"
                required="required"
                :placeholder="placeholder"
                :class="inputStyles"
                :disabled="thisState == 'disabled'"
                style="outline-style:none"
            />
            <Btn v-show="inputValue != null && inputValue.length > 0" class="absolute t_0 b_0 r_0" :state="'empty'" :shadow="false" @onClick="inputValue = ''">
                <i class="far fa fa-times self_center"></i>
            </Btn>
        </div>
        <div class="flex flex_shrink">
            <Btn class="br-tl_square br-bl_square" :shadow="false" :isDisabled="thisState == 'disabled'|| inputValue ==''" :state="btnState" :size="btnSize" @onClick="onSearch(inputValue)">
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
			inputType: {type:String,default:"text"},
			icon: { type: String, default:'' },
            inputValue: { type:String, default:'' }
		},
        data() {
            return {
                thisInputType:this.inputType,
            }
        },
        methods: {
            onChange(inputValue) {
                this.$emit("onChange", inputValue);
            },
            onSearch(inputValue) {
                this.$emit("onSearch",inputValue);
            }
        },
        computed: {

        },
	}
</script>

<style scoped>

</style>