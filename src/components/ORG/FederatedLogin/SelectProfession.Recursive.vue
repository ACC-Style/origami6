<template>
	<section>
		<div class="br_2 br_acc br_solid">
			<span class="block bg_acc p_3 c_white font_bold">I'm a...</span>
			<professional-item :professions="prof" :currentSelection="currentSelection" @onSelect="onSelect">
			</professional-item>
		</div>
		<div v-if="subProf.length>=1" class="br_2 br_acc br_solid">
			<select-profession :professions="subProf" :subProfessions="[]" @onChildSelect="onChildSelect"
				@foundEndOfTree="foundEndOfTree"></select-profession>
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
		professions: { type: Array, default:()=>[] },
		subProfessions:{type:Array, default:()=>[]},
		
	},
	data() {
		return {
			prof: this.professions,
			subProf: this.subProfessions,
			currentSelection: { type: Object, default: () => { } },
			childSelection:{type:Object, default:()=>{}}
		}
	},
	watch:{
		professions: function (newValue, oldValue) {
			// console.log("newValue: %s, previousValue: %s", newValue.length, oldValue.length);
			this.prof = this.professions;
		},
		subProfessions: function (newValue, oldValue) {
			// console.log("newValue: %s, previousValue: %s", newValue.length, oldValue.length);
			this.subProf = this.subProfessions;
		},
	},
	computed: {

	},
	methods: {
		onSelect(e){
			this.currentSelection = e;
			this.subProf = this.currentSelection['Subcategories'];
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
			return (branch.Subcategories == null || branch?.Subcategories == undefined || branch.Subcategories.length == 0 );	
		},
		foundEndOfTree(){
			this.$emit('foundEndOfTree',{ current:this.currentSelection, child:this.childSelection});
		}
	},
};
</script>