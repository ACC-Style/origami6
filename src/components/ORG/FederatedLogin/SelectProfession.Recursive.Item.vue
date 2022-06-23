<template>
	<ul class="ul_none">
		<li v-for="(prof, index) in professions" :key="'cata'+index" @click="onSelectCategory(prof)" class="c_black-8 h:c_black-9 h:bg_primary-3 p-x_3 p-y_2" :class="isActive(prof)"><i class="far fa-arrow-circle-right m-r_3"></i>{{ prof["Name"] }}</li>
	</ul>
</template>

<script>


export default {
	name: "SelectProfessionItem",
	props: {
		professions: { type: Array },
		currentSelection:{ type:Object }
	},
	data() {
		return {

		}
	},
	methods: {
		isActive(prof){
			if(prof == this.currentSelection ){return 'bg_primary-3';}
		},
		onSelectCategory(prof){
			this.$emit('onSelect',prof);
		}
	},
};
</script>