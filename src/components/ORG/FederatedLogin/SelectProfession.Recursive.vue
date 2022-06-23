<template>
	<section>
		<div class="br_2 br_acc br_solid">
			<span class="block bg_acc p_3 c_white font_bold">I'm a...</span>
			<professional-item :professions="professions" :currentSelection="currentSelection" @onSelect="onSelect"></professional-item>
			<!-- <ul class="ul_none">
				<li v-for="(prof, index) in professions" :key="'cata'+index" @click="onSelectCategory(prof , index)" class="c_black-8 h:c_black-9 h:bg_primary-3 p-x_3 p-y_2" :class="isActive(0,index)"><i class="far fa-arrow-circle-right m-r_3"></i>{{ prof["Name"] }}</li>
			</ul> -->
		</div>
		<div v-if="currentSelection.hasOwnProperty('Subcategories')" class="br_2 br_acc br_solid">
			<SelectProfession :professions="currentSelection['Subcategories']"></SelectProfession>
		</div>
	</section>
</template>

<script>
import Btn from "../../subComponents/Btn.vue";
import Modal from "../../subComponents/Modal.vue";
import ProfessionalItem from "./SelectProfession.Recursive.Item.vue";

export default {
	name: "SelectProfession",
	components: { Btn, Modal, ProfessionalItem },
	props: {
		professions: { type: Array },
		
	},
	data() {
		return {
			currentSelection: { type: Object }
		}
	},
	computed: {

	},
	methods: {
		onSelect(e){
			this.currentSelection = e
		}

	},
};
</script>