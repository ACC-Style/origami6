<template>
	<section>
		<div class="br_2 br_acc br_solid">
			<span class="block bg_acc p_3 c_white font_bold">I'm a...</span>
			<professional-item :professions="professions" :currentSelection="currentSelection" @onSelect="onSelect"></professional-item>
			<!-- <ul class="ul_none">
				<li v-for="(prof, index) in professions" :key="'cata'+index" @click="onSelectCategory(prof , index)" class="c_black-8 h:c_black-9 h:bg_primary-3 p-x_3 p-y_2" :class="isActive(0,index)"><i class="far fa-arrow-circle-right m-r_3"></i>{{ prof["Name"] }}</li>
			</ul> -->
		</div>
		<div v-if="!endOfTree(currentSelection)" class="br_2 br_acc br_solid">
			<select-profession :professions="currentSelection['Subcategories']" @onChildSelect="onChildSelect" @foundEndOfTree="foundEndOfTree"></select-profession>
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
			currentSelection: { type: Object },
			childSelection:{type:Object, default:()=>{}}
		}
	},
	computed: {

	},
	methods: {
		onSelect(e){
			this.currentSelection = e,
			this.onChildSelect( {current:e, child:{} } );
			
		},
		onChildSelect(e){			
			this.childSelection['Name']=this.currentSelection?.Name;
			this.childSelection['Code']=this.currentSelection?.Code;
			if( Object.keys(e.child).length === 0 ){
				delete this.childSelection.Subcategories;
			}
			else{
				this.childSelection.Subcategories = {};
				this.childSelection.Subcategories['Name'] =e.child?.Name;
				this.childSelection.Subcategories['Code'] =e.child?.Code;
				if(e.child.Subcategories){
					this.childSelection.Subcategories.Subcategories = e.child.Subcategories;
				}
			}
			this.$emit('onChildSelect',{ current:this.currentSelection, child:this.childSelection});
			if(this.endOfTree(e.current)){
				this.foundEndOfTree();
			}
		},
		endOfTree(branch){
			if( Object.keys(branch).length === 0 ){
				return false;
			}
		 	return (branch.Subcategories == null || branch.Subcategories.length == 0 );	
		},
		foundEndOfTree(){
			this.$emit('foundEndOfTree',{ current:this.currentSelection, child:this.childSelection});
		}
	},
};
</script>