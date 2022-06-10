<template>
	<div testing="">
		<label class="label-holder flex font-size_up-1 font_display font_medium p-y_2 lh_1"><span class="text cell flex_shrink">Your Professional Type</span> <span class="required-holder flex_shrink font_n5"><i class="fas fa-asterisk c_warning vertical-align_top"></i></span></label>
		<div class="flex flex_column-reverse">
			<Btn class="m-r_4 p_0 self_start" @onClick="modalVisible = true" :type="'button'"><span>Select</span></Btn>
			<p id="prof_breadcrumbs" class="inline m_0">
				<span v-for="(string, index) in selectedTitles" :key="'title'+index"><i v-if="index != 0" class="far fa-angle-right m-x_3 font_bold c_primary"></i>{{ string }}</span>
			</p>
		</div>
		<Modal v-if="modalVisible" @onClose="cancelSelect" class="bg_black-1">
			<template :class="'font_3 font_bold font_display'" v-slot:header>Select Your Professional Type:</template>
			<div class="br_2 br_acc br_solid">
				<span class="block bg_acc p_3 c_white font_bold">I'm a...</span>
				<ul class="ul_none">
					<li v-for="(prof, index) in professions" :key="'cata'+index" @click="onSelectCategory(prof , index)" class="c_black-8 h:c_black-9 h:bg_primary-3 p-x_3 p-y_2" :class="isActive(0,index)"><i class="far fa-arrow-circle-right m-r_3"></i>{{ prof["Name"] }}</li>
				</ul>
			</div>
			<div v-if="path.length && path[0].hasOwnProperty('Subcategories')" class="br_2 br_acc br_solid">
				<span class="block bg_acc p_3 c_white font_bold">I'm a...</span>
				<ul class="ul_none">
					<li v-for="(prof, index) in path[0].Subcategories" :key="'catb'+index" @click="onSelectCategory(prof , index)" class="c_black-8 h:c_black-9 h:bg_primary-3 p-x_3 p-y_2" :class="isActive(1,index)"><i class="far fa-arrow-circle-right m-r_3"></i>{{ prof["Name"] }}</li>
				</ul>
			</div>
			<div v-if="(path.length > 1) && path[1].hasOwnProperty('Subcategories')" class="br_2 br_acc br_solid">
				<span class="block bg_acc p_3 c_white font_bold">I'm a...</span>
				<ul class="ul_none">
					<li v-for="(prof, index) in path[1].Subcategories" :key="'catb'+index" @click="onSelectCategory(prof , index)" class="c_black-8 h:c_black-9 h:bg_primary-3 p-x_3 p-y_2" :class="isActive(2,index)"><i class="far fa-arrow-circle-right m-r_3"></i>{{ prof["Name"] }}</li>
				</ul>
			</div>
		</Modal>
	</div>
</template>

<script>
import Btn from "../../subComponents/Btn.vue";
import Modal from "../../subComponents/Modal.vue";

export default {
	name: "SelectProfession",
	components: { Btn, Modal },
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