import Btn from "../../../components/subComponents/Btn.vue";
import Modal from "../../../components/subComponents/Modal.vue";

import { commonArgs } from "../../4-Forms/common.argTypes.js";

import { professionalData } from "./Data/ProfessionalData.js";

export default{
    title: "Apps/FederatedLogin/ProfessionalDropdown",
	component: Modal,
	subcomponents:{ Btn },
    parameters: {
		docs: {
			description: {
				component:
					"Professional Type Dropdown",
			},
			actions: { argTypesRegex: "^on.*" },
			source: {
				code: `<a href="https://github.com/ACC-Style/origami6/blob/master/src/stories/100-ProductUI/FederatedLogin/ProfessionalDropdown.stories.js" target="_blank">Github</a>`
			},
		},
    },
    argTypes:{
		...commonArgs
    }
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Modal, Btn },
	data(){
		return {
			professions: professionalData,
			modalVisible: false,
			selectedGroupA: null,
			selectedGroupB: null,
			selectedGroupC: null,
			subcatB: [],
			subcatC: [],
		}
	},
	methods: {
		onSelectCategory(i, group){
			switch(group) {
				case 'a':
					this.selectedGroupA = i;
					this.selectedGroupB = null;
					this.selectedGroupC = null;
					this.subcatB = [];
					this.subcatC = [];
					this.subcatB = this.professions[i].Subcategories;
					break;
				case 'b':
					this.selectedGroupB = i;
					this.selectedGroupC = null;
					this.subcatC = [];
					if(this.subcatB[i].hasOwnProperty('Subcategories')){
						this.subcatC = this.subcatB[i].Subcategories;
					} else {
						this.modalVisible = false;
					}
					break;
				case 'c':
					this.selectedGroupC = i;
					this.modalVisible = false;
					break;
			}
		console.log(this.selectedGroupA, this.selectedGroupB, this.selectedGroupC);
		}
	},
	template: `
		<div>
			<Btn class="m-r_4 p_0" @onClick="modalVisible = true"><span>Select</span></Btn>
			<p id="prof_breadcrumbs" class="inline">
				<span id="type" v-if="this.selectedGroupA !== null">{{ professions[selectedGroupA].Name }}</span>
				<span id="groupA" v-if="this.selectedGroupB !== null"><i class="far fa-angle-right m-x_3 font_bold c_primary"></i>{{ subcatB[selectedGroupB].Name }}</span>
				<span id="groupB" v-if="this.selectedGroupC !== null"><i class="far fa-angle-right m-x_3 font_bold c_primary"></i>{{ subcatC[selectedGroupC].Name }}</span>
			</p>
			<Modal v-if="modalVisible" @onClose="modalVisible = false" class="bg_black-1">
				<template :class="font_3 font_bold font_display" v-slot:header>Select Your Professional Type:</template>
				<div class="br_2 br_acc br_solid">
					<span class="block bg_acc p_3 c_white font_bold">I'm a...</span>
					<ul class="ul_none">
						<li class="c_black-8 h:c_black-9 h:bg_primary-3 p-x_3 p-y_2" :class="(index == selectedGroupA) && 'bg_primary-3'" v-for="(prof, index) in professions" :key="'groupa'+index" @click="onSelectCategory(index, 'a')"><i class="far fa-arrow-circle-right m-r_3"></i>{{ prof["Name"] }}</li>
					</ul>
				</div>
				<div v-if="this.subcatB.length" class="br_2 br_acc br_solid">
					<span class="block bg_acc p_3 c_white font_bold">I'm a...</span>
					<ul class="ul_none">
						<li class="c_black-8 h:c_black-9 h:bg_primary-3 p-x_3 p-y_2" :class="(index == selectedGroupB) && 'bg_primary-3'" v-for="(prof, index) in this.subcatB" :key="'groupb'+index" @click="onSelectCategory(index, 'b')"><i class="far fa-arrow-circle-right m-r_3"></i>{{ prof["Name"] }}</li>
					</ul>
				</div>
				<div v-if="this.subcatC.length" class="br_2 br_acc br_solid">
					<span class="block bg_acc p_3 c_white font_bold">I'm a...</span>
					<ul class="ul_none">
						<li class="c_black-8 h:c_black-9 h:bg_primary-3 p-x_3 p-y_2" :class="(index == selectedGroupC) && 'bg_primary-3'" v-for="(prof, index) in this.subcatC" :key="'groupc'+index" @click="onSelectCategory(index, 'c')"><i class="far fa-arrow-circle-right m-r_3"></i>{{ prof["Name"] }}</li>
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

