<template>
	<div class="input flex user-select_none relative h:bg_black-1">
		<div class="flex_none p-x_3">
			<input type="checkbox" :name="'check'+id" :id="'check'+id" :disabled="excluded" v-model="checked" />
		</div>
		<div class="flex_auto">
			<label :for="'check'+id" class=" font-size_up" :class="{'line-through': excluded }">
				<span class="font_regular " >{{label}}</span>
				<span class="flex_auto p-x_2 font_light font-size_down opacity_6"
					>{{resultCount}}</span
				>
			</label>
		</div>
		<div
			class="flex_none m-l_auto  font-size_down absolute r_0 z_5" :class="{'bg_white':excludeToggleHover }" @mouseenter="excludeToggleHover = true" @mouseleave="excludeToggleHover = false" @click="onExcludeToggleClick "
		>
			<span class="p-x_3 c_primary " v-show="excludeToggleHover">{{excludeToggleLabel}}</span
			><i class="fas" :class="excludeToggleStyles" ></i>
		</div>
	</div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            default: 0,
            required:true 
        },
        isFacetExcludable:{
            type:Boolean,
            default:true,
        },
        label:{type:String, default:'checkmark label'},
        resultCount:{type:Number, default:0}

    },
    data() {
        return {
            excluded: false,
            excludeToggleHover:false,
            checked:false,
        }
    },
    computed: {
        excludeToggleLabel() {
            return !this.excluded ? "exclude from results":"remove exclution"; 
        },
        excludeToggleStyles(){
            return this.excluded ? this.excludeToggleHover? "c_alert h:c_alert-n3 fa-times":"c_alert h:c_alert-n3 fa-ban" :this.excludeToggleHover?"opacity_9 fa-ban":"opacity_2  fa-ban";
        }
    },
    methods: {
        onExcludeToggleClick(){
            this.excluded = !this.excluded;
            this.$emit("onExcludeToggleClick", this.id)
        }
    },

}
</script>

<style scoped>
.line-through {
	text-decoration: line-through;
}
</style>