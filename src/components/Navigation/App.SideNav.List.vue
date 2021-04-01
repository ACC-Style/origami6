<template>
    <div class="relative">
        <NavItem
        v-if="navVisible"
        :label="label"
        :level="level"
        :type="type"
        :isActive="isActive"
        :pageID="pageID"
        :hasChildren="hasChildren"
        :hasActiveChildren="hasActiveChildren"
		:isExpanded="toggleOpen"
        @onToggleClick="onToggleClick"
		@onNavigateTo="onClick"
    />
	<TransitionExpand>
		<ul class="ul_none p-l_4 " v-if="isToggleOpen" >      
			<li v-for="(node, index) in nodes" :key="label+'_'+index">
				<SideNavList             
					:label="node.label"
					:type="node.type"
					:pageID="node.pageID"				
					:nodes="node.nodes"
					:isActive="node.isActive"
					:toggleOpenByDefault="toggleOpenByDefault"
					:level="level+1"
				></SideNavList>
			</li>
		</ul>
	</TransitionExpand>
</div>
</template>
<script>

import NavItem from "./App.SideNav.Item.vue";
import TransitionExpand from "../subComponents/TransitionExpand";
export default {
	name: "SideNavList",
	data() {
		return {
			toggleOpen: this.toggleOpenByDefault,
		};
	},
	components: {
		NavItem,TransitionExpand
	},
	props: {
		label: { type: String },
		type: { type: String },
		pageID: { type: [String,Number] },
		nodes: { type: Array },
		level: { type: Number, default: -1 },
        isActive: { type: Boolean, default: false },
        toggleOpenByDefault:{type:Boolean, default:false}
	},
	computed: {
		isToggleOpen(){
			// return true;
			let pageLevel = ( this.level <= -1 )? true : false ;
			let a = false
			if ( pageLevel ){
				a = true;
			}
			else if( this.toggleOpen ){
				a = true;
			}
			else{
				a = false};
			return a;
		},
		navVisible: function() {
			if (this.level < 0) {
				return false;
			} else if (this.pageID == -1) {
				return false;
			} else {
				return true;
			}
		},
		hasChildren: function() {
			if (this.nodes) {
				return true;
			} else {
				return false;
			}
		},
		hasActiveChildren: function() {
			if (this.isActive) {
				return false;
			} else {
				let obj = Object.assign({}, this.nodes),
					key = "isActive";
				return this.findVal(obj, key);
			}
        },
	},
	methods: {
		isChildrenActive: function(node) {
			if (node.isActive) {
				return false;
			} else {
				let obj = Object.assign({}, node.nodes),
					key = "isActive";
				return this.findVal(obj, key);
			}
        },
		findVal(object, key) {
			var value,
				that = this;
			Object.keys(object).some(function(k) {
				if (k === key) {
					value = object[k];
					return true;
				}
				if (object[k] && typeof object[k] === "object") {
					value = that.findVal(object[k], key);
					return value !== undefined;
				}
			});
			return value;
		},
		onToggleClick() {
			this.toggleOpen = !this.toggleOpen;
		},
		onClick(pageID){
			this.$emit("onNavigateTo", pageID);
		}
	},
};
</script>

<style scoped>
.list-move {
	transition: transform 1s;
}
</style>
