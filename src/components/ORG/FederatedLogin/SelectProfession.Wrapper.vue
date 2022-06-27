<template>
	<div testing="">
		<label class="label-holder flex font-size_up-1 font_display font_medium p-y_2 lh_1"><span class="text cell flex_shrink">Your Professional Type</span> <span class="required-holder flex_shrink font_n5"><i class="fas fa-asterisk c_warning vertical-align_top"></i></span></label>
		<div class="flex flex_column-reverse gap-y_3">
			<Btn class="m-r_4 p_2 p-x_4 self_start" @onClick="modalVisible = true" :type="'button'" :size="'small'"><span>Select</span></Btn>
			<div v-if="path.length" id="prof_breadcrumbs" class="br_2 p-y_2 br_solid flex_auto p-l_4 lh_3 c_black bg_white f:bg_primary br_black-2 br_radius">
				<span v-for="(value, index) in path" :key="'title'+index"><i v-if="index != 0" class="fas fa-angle-right m-x_3 c_primary"></i>{{ path[index] }}</span>
			</div>
		</div>
		<Modal v-if="modalVisible" @onClose="cancelSelect" class="bg_black-1">
			<template :class="'font_3 font_bold font_display'" v-slot:header>Select Your Professional Type:</template>
			<profession-recursive :professions="professions" @foundEndOfTree="foundEndOfTree"></profession-recursive>
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
		currentSelection: { type: Object },
		childSelection:{type:Object}
	},
	data() {
		return {
			modalVisible: false,
			path: [],
			codes:[]
		}
	},
	created: function() {
		if(Object.keys(this.currentSelection).length){
			//Get the objects in the path to the current selection
			this.getPath(this.professions, this.currentSelection.Code);
		}
	},
	methods: {
		foundEndOfTree(e){
			this.currentSelection = e.current;
			this.childSelection = e.child;
			this.modalVisible = false;
			this.path = [];
			this.codes = [];
			this.getPath(e.child);
			this.$emit('input',this.codes)
		},
		getPath: function(object){
			this.path.push(object.Name);
			this.codes.push(object.Code);
			if(object.Subcategories) {
					const child = this.getPath(object.Subcategories);
					if(child) {
						this.path.unshift({ ...item, index:array.indexOf(item) });
						return child;
					}
        	}

		},
		cancelSelect(){
			this.modalVisible = false;
		}
	},
};
</script>