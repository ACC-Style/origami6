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
        :isChildActive="isChildActive"
        @toggleClicked="toggleClicked"
    />
<TransitionExpand>
    <ul class="ul_none p-l_4 " v-if="hasChildren  && toggleOpen" >
        
        <li v-for="(node, index) in nodes" :key="label+'_'+index">
            <SideNavList             
                :label="node.label"
                :type="node.type"
                :pageID="node.pageID"
                :isActive="node.isActive"
                :nodes="node.nodes"
                :level="level+1"
            ></SideNavList>
        </li>
    </ul>
</TransitionExpand>
</div>
</template>
<script>

import NavItem from "./Seat.SideNav.NavItem.vue";
import TransitionExpand from "../../subComponents/TransitionExpand";
export default {
	name: "SideNavList",
	data() {
		return {
			toggleOpen: this.toggleOpenDefault,
		};
	},
	components: {
		NavItem,TransitionExpand
	},
	props: {
		label: { type: String },
		type: { type: String },
		pageID: { type: Number },
		nodes: { type: Array },
		level: { type: Number, default: -1 },
        isActive: { type: Boolean, default: false },
        toggleOpenDefault:{type:Boolean, default:true}
	},
	computed: {
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
		isChildActive: function() {
			if (this.isActive) {
				return false;
			} else {
				let obj = Object.assign({}, this.nodes),
					key = "isActive";
				return this.findVal(obj, key);
			}
        }
	},
	methods: {
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
		toggleClicked() {
			this.toggleOpen = !this.toggleOpen;
		},
	},
};
</script>

<style scoped>
.list-move {
	transition: transform 1s;
}
</style>
