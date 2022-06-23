<template>
	<div testing="">
		<label class="label-holder flex font-size_up-1 font_display font_medium p-y_2 lh_1"><span class="text cell flex_shrink">Your Professional Type</span> <span class="required-holder flex_shrink font_n5"><i class="fas fa-asterisk c_warning vertical-align_top"></i></span></label>
		<div class="flex flex_column-reverse gap-y_3">
			<Btn class="m-r_4 p_2 p-x_4 self_start" @onClick="modalVisible = true" :type="'button'" :size="'small'"><span>Select</span></Btn>
			<div v-if="selectedTitles.length" id="prof_breadcrumbs" class="br_2 p-y_2 br_solid flex_auto p-l_4 lh_3 c_black bg_white f:bg_primary br_black-2 br_radius">
				<span v-for="(string, index) in selectedTitles" :key="'title'+index"><i v-if="index != 0" class="fas fa-angle-right m-x_3 c_primary"></i>{{ string }}</span>
			</div>
		</div>
		<Modal v-if="modalVisible" @onClose="cancelSelect" class="bg_black-1">
			<template :class="'font_3 font_bold font_display'" v-slot:header>Select Your Professional Type:</template>
			<profession-recursive :professions="professions"></profession-recursive>
		</Modal>
	</div>
</template>

<script>
import Btn from "../../subComponents/Btn.vue";
import Modal from "../../subComponents/Modal.vue";
import ProfessionRecursive from "./SelectProfession.Recursive.vue";

export default {
	name: "SelectProfessionWrapper",
	components: { Btn, Modal, ProfessionRecursive },
	props: {
		professions: { type: Array },
		currentSelection: { type: Object }
	},
	data() {
		return {
			modalVisible: false,
			path: []
		}
	},
	created: function() {
		if(Object.keys(this.currentSelection).length){
			//Get the objects in the path to the current selection
			this.getPath(this.professions, this.currentSelection.Code);
		}
	},
	computed: {
		selectedTitles(){
			const titles = this.path.map( x => x.Name);
			return titles;
		}
	},
	methods: {
		getPath: function(array, code){
			for(let item of array){
				if(item.hasOwnProperty('Code') && item.Code === code){
					this.path.unshift({ ...item, index:array.indexOf(item) });
					return item;
				}
				if(item.Subcategories) {
					const child = this.getPath(item.Subcategories, code);
					if(child) {
						this.path.unshift({ ...item, index:array.indexOf(item) });
						return child;
					}
        		}
    		}
		},
		isActive(cat,index){
			if((this.path.length > cat) && index == this.path[cat].index) {
				return 'bg_primary-3';
			}
		},
		onSelectCategory(item, index){
			this.path = [];
			if(!item.hasOwnProperty('Code')){
				this.path.unshift({ ...item, index:index })
			} else {
				this.getPath(this.professions, item.Code);
			}

			if(!item.hasOwnProperty('Subcategories')){
				this.$emit('onSelect',item);
				this.modalVisible = false;
			}
		},
		cancelSelect(){
			this.modalVisible = false;
			this.path = [];
			this.getPath(this.professions, this.currentSelection.Code);
		}
	},
};
</script>