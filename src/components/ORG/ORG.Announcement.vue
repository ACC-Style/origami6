<template>
<div class="p-x_5 p-y_4"
    :class="gridSize"
>
	<div
        v-for="(anouncement, index) in announcements" :key="index"
		data-label="card"
		class=" br_radius m-x_2 br_1 br_solid br_black-2 bg_black-_05 shadow_overlap-light relative "
	>
		<div
			:style="'background-image: url('+ imageURL(anouncement) +')'"
			data-name="header"
			class="br-tr_radius br-tl_radius bg-blend_multiply br_1 br_solid br_black-3 bg_cover bg_center m-x_n1 m-t_n1 expand-br_1" :class="aspectStyle"
		></div>
		<div data-name="content" class="p-t_4:lg p-t_3 p-b_4 p-x_4">
			<h2 class="font_display font_4:lg font_3:md font_2 c_primary-n1 m-b_3 m-t_3">
				COVID-19 Hub
			</h2>
			<p class="font_1:lg font_copy m-t_0 m-b_3">
				Comprehensive compilation of ACC content related to COVID-19
			</p>
			<a
				href=""
				class="font_1:lg text_right font_bold h:c_primary-n3 c_primary expanded-click-area block"
				>Learn More <i class="fas fa-arrow-right p-x_2 "></i
			></a>
		</div>
	</div>
</div>
</template>

<script>
export default {

props:{
    announcements: {type:Array}

},
data() {
    return {
    }
},
methods: {
    imageURL:function(a){
        return a["image_"+this.imageSize+"x"];
    }
},
computed: {
    gridSize:function(){
        let styles ="";
        switch (this.announcements.length) {
            case 1:
                styles=""
                break;
            case 2:
                 styles="gap-x_5 gap-y_5 grid template-x_25"
            break;
            default:
                 styles="gap-x_5 gap-y_5 grid template-x_15"
            break;
        }
        return styles;
    },
    imageSize:function(){
        let size ="";
        switch (this.announcements.length) {
            case 1:
                size="1"
                break;
            case 2:
                 size="2"
            break;
            default:
                 size="3"
                break;
        }
        return size;
    },
    aspectStyle:function(){
        let style ="";
        switch (this.announcements.length) {
            case 1:
                style="aspect_custom_1x"
                break;
            case 2:
                 style="aspect_custom_2x"
            break;
            default:
                 style="aspect_custom_3x"
                break;
        }
        return style;
    }
},

};
</script>

<style scoped>

.aspect_custom_3x:before{
    padding-top: calc(80/260 * 100%);
}
.aspect_custom_2x:before{
    padding-top: calc(80/415 * 100%);
}
.aspect_custom_1x:before{
	padding-top: calc(80/870 * 100%);
}
.expand-br_1{
    width:calc( 100% + 2px) !important;
}

</style>
