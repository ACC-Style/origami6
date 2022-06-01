import TextAndButton from "../../../components/BasicForms/Input.TextAndButton.vue";
import Modal from "../../../components/subComponents/Modal.vue";

import { commonArgs } from "../../4-Forms/common.argTypes.js";

import { professionalData } from "./Data/ProfessionalData.js";

export default{
    title: "Apps/FederatedLogin/ProfessionalDropdown",
	component: TextAndButton,
	subcomponents:{ Modal },
    parameters: {
		docs: {
			description: {
				component:
					"Professional Type Dropdown",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<p>Source Code TBD</p>`
			},
		},
    },
    argTypes:{
		...commonArgs
    }
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TextAndButton, Modal },
	data(){
		return {
			modalVisible: false,
			professions: professionalData,
			subTypeGroupA: [],
			subTypeGroupB: [],
			selectedType: null,
			selectedGroupA: null,
			selectedGroupB: null
		}
	},
	methods: {
		getSubType(i, group){
			if(group === "a"){
				//console.log('a',i);
				this.subTypeGroupA = professionalData[i].Subcategories;
				this.selectedType = i;
			}
			if(group === "b") {
				//console.log('b',i);
				this.selectedGroupA = i;
				const groupB = professionalData[this.selectedType].Subcategories[i].Subcategories;
				if(groupB && groupB.length){
					this.subTypeGroupB = groupB;
				} else {
					this.selectedGroupB = null;
					this.setProfession()
				}
				//this.subTypeGroupB = professionalData[this.selectedType].Subcategories[i].Subcategories;
				//console.log("group b" , this.subTypeGroupB);
			}
		},
		setProfession(i){
			if(i){
				this.selectedGroupB = i;
			}

			console.log("in setProfession", this.selectedType , this.selectedGroupA , this.selectedGroupB);
			this.modalVisible = false;
		}
	},
	template: `
		<div>
			<TextAndButton @onClick="modalVisible = true" v-model='value' v-bind="$props">
				<template slot="btnLabel">{{btnLabel}}</template>
			</TextAndButton>
			<p id="prof_breadcrumbs">
				<span id="type">Type</span><i class="far fa-angle-right m-x_3"></i>
				<span id="groupA">groupA</span><i class="far fa-angle-right m-x_3"></i>
				<span id="groupB">groupB</span>
			</p>
			<Modal v-if="modalVisible" @onClose="modalVisible = false" class="bg_black-1">
				<template :class="font_3 font_bold font_display" v-slot:header>Select Your Professional Type:</template>
				<div>
					<span class="block bg_primary p_3">I'm a...</span>
					<ul class="ul_none p_3">
						<li v-for="(prof, index) in professions" :key="'professionalCategory'+index" @click="getSubType(index, 'a')">{{ prof["Name"] }}</li>
					</ul>
				</div>
				<div v-if="this.subTypeGroupA.length">
					<span class="block bg_primary p_3">I'm a...</span>
					<ul class="ul_none p_3">
						<li v-for="(prof, index) in this.subTypeGroupA" :key="'groupA'+index" @click="getSubType(index, 'b')">{{ prof["Name"] }}</li>
					</ul>
				</div>
				<div v-if="this.subTypeGroupB.length">
					<span class="block bg_primary p_3">I'm a...</span>
					<ul class="ul_none p_3">
						<li v-for="(prof, index) in this.subTypeGroupB" :key="'groupB'+index" @click="setProfession(index)">{{ prof["Name"] }}</li>
					</ul>
				</div>
			</Modal>
		</div>`,
});
export const Default = Template.bind({});
Default.args = {
    value: '',
	btnLabel: "Select"
};

