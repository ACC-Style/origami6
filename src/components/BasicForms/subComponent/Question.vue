<template>
	<div class="question font_ui">
		<label
			:for="inputId"
			v-bind:class="[{
				'c_alert': inputState == 'alert'},{
				'c_warning': inputState == 'warning'
			}]"
			class="label-holder flex font-size_up font_medium p-y_2"
		>
			<span class="text cell flex_shrink">
				<slot name="default"></slot>
			</span>
			<span v-if="required" class="required-holder flex_shrink font_n5">
				<i class="fas fa-asterisk c_warning  vertical-align_top"></i>
			</span>
		</label>
		<div class="input-holder flex self_end">
			<ValueIcon
				v-if="icon"
				class="flex_shrink"
				:state="state"
				:icon="icon"
				inputNameTarget="inputId"
			/>
            <slot name="input">
			
            </slot>
			<div
				class="br_solid br_2 br-l_0 p-y_2 font_medium flex_none p-x_4 lh_3 flex flex_column "
				v-if="postLabel"
				:class="inputPrePostStyles"
				@click="onClickPostLabel"
			>
				{{postLabel}}
			</div>
		</div>
		<div class="font-size_down">
			<messageHolder :state="'alert'" v-if="state =='requiredAlert'">This input is required.</messageHolder>
		<messageHolder :state="'alert'" v-if="state =='alert'">
			<slot name="alertMessage"></slot>
		</messageHolder>
		<messageHolder :state="'warning'" v-if="state =='warning'">
			<slot name="warningMessage"></slot>
		</messageHolder>		
		<messageHolder :state="'success'" v-if="state =='success'">
			<slot name="successMessage"></slot>
		</messageHolder>
		<messageHolder :state="'info'" v-if="state =='info'">
			<slot name="infoMessage"></slot>
		</messageHolder>
		<messageHolder :state="'accent'" v-if="state =='accent'">
			<slot name="accentMessage"></slot>
		</messageHolder>
		</div>
	</div>
</template>

<script>
import messageHolder from "../../subComponents/InputMessageHolder.vue";
import stateIcon from "../../subComponents/StatefullIcon";
import ValueIcon from "../../subComponents/inputValueIcon";

export default {
	name: "inputText",
	props: {
		inputId:{type:String,required:true},
		icon: { type: String, default: null },
		postLabel: { type: String, default: null },
		required: { type: Boolean, default: true },
		state: { type: String, default: "", 
		 validator: function (value) {
        return ['','alert','requiredAlert','warning','success','info','disabled','accent'].indexOf(value) !== -1;
      },}
	},
	data() {
		return {
			inputState: this.state,
		};
	},
	computed: {

		inputPrePostStyles() {
			let styles = "";
			switch (this.state) {
				case  "requiredAlert":
				case "alert":
					styles += "bg_alert-3 c_alert-1 br_alert-n1 ";
					break;
				case "warning":
					styles += " bg_warning-3  c_warning br_warning-n1 ";
					break;
				case "success":
					styles += " bg_success-4 br_success-n1 c_success ";
					break;
				case "disabled":
					styles += " c_black-3 bg_black-2 br_black-3 ";
					break;
				default:
					styles += "c_black-6 bg_black-1 br_black-2 ";
					break;
			}
			return styles;

		},
		inputStyles() {
			let styles = "";
			switch (this.state) {
				case  "requiredAlert":
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
				if(this.icon){
					styles += " br-l_0";
				}

			return styles;
		}
	},
	components: {
		messageHolder,
		stateIcon,
		ValueIcon
	},
	methods: {
	onClickPostLabel:function(){
		this.$emit("onClickPostLabel");
	}	
	}
};
</script>

<style scoped>
.question input:focus {

	outline:none
}
</style>
