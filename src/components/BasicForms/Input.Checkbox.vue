<template>
<div class="form-group">
    <div class="flex flex_row">
	<label class="flex flex_inline flex_nowrap" :for="'checkbox_'+checkboxLabelCodeSafe" :class="LabelStyles">
		<input
			type="checkbox"
			:name="'checkbox_'+checkboxLabelCodeSafe" 
			:id="'checkbox_'+checkboxLabelCodeSafe" 
			:checked="checkboxValue"
            @change="onInput($event.target.checked)"
			:required="required"
			class="inline-block p-r_3 self_center"
			:disabled="state == 'disabled'"
		/>
        <ValueIcon
        v-if="icon"
        class="flex_none p-x_3 p-y_0"
        :state="state"
        :icon="icon"
        inputNameTarget="id"
        />
		<span class="self_center m-l_4 lh_2">{{ checkboxLabel }}</span>
       
            
     <span v-if="required" class="required-holder flex_shrink font_n5">
            <i class="fas fa-asterisk c_warning vertical-align_top"></i>
        </span>
	</label>
    <span
        class="
            font_medium
            flex_none
            m-l_3
            self_center
        "
        v-if="postLabel"
        :class="inputPrePostStyles"
        @click="$emit('onClickPostLabel')"
    >
       <span v-html="postLabel"></span> 
    </span>

    </div>
    <messageHolder :state="'alert'" v-if="inputState == 'requiredAlert'"
				>This is required.</messageHolder
			>
    <div class="opacity_7 font_italic"><slot name="hint"></slot></div>
    </div>
</template>

<script>
import baseInputFunctions from "./subComponent/baseInputFunctions.vue";
import messageHolder from "../subComponents/InputMessageHolder.vue";

export default {
	name: "Checkbox",
	mixins: [baseInputFunctions],
	components: {messageHolder
	},
	props: {
        value:{type:Object,default:()=>{ return {'label': false}}
        },
        type:{type:String,default:"checkbox"},
        required:{type:Boolean,default:false},
        state:{type:String,default:""},
	},
	data() {
		return {
			selected: "",
            checkboxLabelCodeSafe:this.value['label'].replaceAll(' ', ''),
            checkboxLabel:this.value['label'],
            checkboxValue:this.value['selected'],
			inputState: this.state,
		};
	},
	computed: {
		inputPrePostStyles() {
			console.log(this);
			let styles = "";
			switch (this.inputState) {
				case "requiredAlert":
				case "alert":
					styles += " c_alert-1 br_alert-n1 ";
					break;
				case "warning":
					styles += "   c_warning br_warning-n1 ";
					break;
				case "success":
					styles += "  br_success-n1 c_success ";
					break;
				case "disabled":
					styles += " c_black-3  br_black-3 ";
					break;
				default:
					styles += "c_black-6  br_black-3 ";
					break;
			}
			return styles;
		},
		inputStyles() {
			let styles = "";
			switch (this.inputState) {
				case "requiredAlert":
				case "alert":
					styles += " c_alert br_alert-n1 ";
					break;
				case "warning":
					styles += "  c_warning br_warning-n1 ";
					break;
				case "success":
					styles += " br_success-n2 c_success ";
					break;
				case "disabled":
					styles += " c_black bg_black-2 br_black-3 texture_disabled";
					break;
				default:
					styles += " c_black bg_white-0 br_black-3 ";
					break;
			}
			if (this.icon) {
				styles += " br-l_0";
			}

			return styles;
		},
		LabelStyles() {
			let styles = "";
			switch (this.inputState) {
				case "requiredAlert":
				case "alert":
					styles += " c_alert-n3  ";
					break;
				case "warning":
					styles += " c_warning-n3  ";
					break;
				case "success":
					break;
				case "disabled":
					styles += " c_black-4  ";
					break;
				default:
					break;
			}
			switch (this.size) {
				case "large":
					styles += " p-l_4 font-size_up";
					break;
				case "tiny":
					styles += " p-l_2 font-size_down";
					break;
				default:
					styles += " p-l_3";
					break;
			}

			return styles;
		},
		radioSizeStyles() {
			let styles = "lh_0 ";
			switch (this.size) {

				case "tiny":
					styles += "p-x_1 p-t_1 ";
					break;
				case "small":
					styles += " p-y_2 ";
					break;
				case "medium":
					styles += " m-x_n3 ";
					break;
				case "large":
					styles += " m-x_n3 p-y_3    ";
					break;
				default:
					styles += "";
					break;
			}
			return styles;
		}
	},
	methods: {
		onInput: function (inputResponse) {
            
			if (inputResponse=== false && this.required) {
				this.inputState = "requiredAlert";
				this.$emit("onStateChange", "requiredAlert");
               
			}else{
                this.inputState = "";
                this.$emit("onStateChange", "");
            } 
            this.value['selected'] = inputResponse;
            this.$emit("input",this.value);
		},
	},
};
</script>

<style scoped>
.question .input:focus {
	border: inherit;
	background: inherit;
}
</style>
