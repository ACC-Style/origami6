<template>
<div  data-target="microSeatChart" class="flex flex_column flex_row:md br_black-2 br_1 br_solid">
    <div class="flex flex_auto">
        <div title="filled" class="flex_auto bg_success br_black-2 br_1 br_solid" v-bind:style="{width:w_filled}">&nbsp;</div>
        <div title="requested" class=" flex_auto bg_warning br_black-2 br_1 br_solid" v-bind:style="{width:w_requested}">&nbsp;</div>
        <div title="empty" class=" flex_auto bg_primary br_black-2 br_1 br_solid" v-bind:style="{width:w_empty}">&nbsp;</div>
        <div title="locked" class=" flex_auto bg_alert  br_black-2 br_1 br_solid" v-bind:style="{width:w_locked}">&nbsp;</div>
    </div>
    <div class="label flex_none br_1 br_solid br_black-2  bg_black-2 font_n2 c_black-8 font_bold p_2 p-x_3 text_right"><span>{{ all }}</span><span class="uppercase p-l_3">Seats</span></div>
</div>
</template>

<script>
    export default {
        props: {
            all: {
                type: Number,
                default: 0
            },
            filled: {
                type: Number,
                default: 0
            },
            requested: {
                type: Number,
                default: 0
            },
            locked: {
                type: Number,
                default: 0
            },
        },computed: {
            empty:function(){
                return this.all - (this.filled + this.requested + this.locked);
                },
            w_filled:function(){
                return this.filled/this.all*100+"%";
            },
            w_requested:function(){
                return this.requested/this.all*100+"%";
            },
            w_empty:function(){
                return this.empty/this.all*100+"%";
            },
            w_locked:function(){
                return this.locked/this.all*100+"%";
            }
        }
    }
</script>
