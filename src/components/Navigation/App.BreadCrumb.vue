<template>
    <div class="flex_inline flex lh_0">
        <BreadCrumbItem
        v-if="isActive || hasActiveChildren"
        :label="label"
        :level="level"
        :type="type"
        :pageID="pageID"
		@onNavigateTo="onClick"
    />
    <i class="fal fa-chevron-left c_primary-n2 m-x_3 self_baseline font-size_down"  v-if="hasActiveChildren && hasChildren"></i>
    <SideNavList 
        v-for="(node, index) in nodes" :key="label+'_'+index"          
        :label="node.label"
        :type="node.type"
        :pageID="node.pageID"				
        :nodes="node.nodes"
        :isActive="node.isActive"
        :level="level+1"
    ></SideNavList>

</div>
</template>
<script>

import BreadCrumbItem from "./App.BreadCrumb.Item.vue";
import TransitionExpand from "../subComponents/TransitionExpand";
export default {
	name: "SideNavList",
	data() {
		return {
		};
	},
	components: {
		BreadCrumbItem,TransitionExpand
	},
	props: {
		label: { type: String },
		type: { type: String },
		pageID: { type: [String,Number]},
		nodes: { type: Array },
		level: { type: Number, default: -1 },
        isActive: { type: Boolean, default: false },
        toggleOpenDefault:{type:Boolean, default:true}
	},
	computed: {
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
		onClick(pageID){
			this.$emit("onNavigateTo", pageID);
		}
	},
};
</script>

