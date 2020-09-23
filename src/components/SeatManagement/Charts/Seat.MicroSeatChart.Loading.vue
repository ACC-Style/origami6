<template>
<div  data-target="microSeatChart" class="flex flex_column flex_row:md br_black-2 br_1 br_solid">
    <div class="flex flex_auto">
        <div title="filled" class="flex_auto bg_success-3 br_black-2 br_1 br_solid texture_medium">&nbsp;</div>
        <div title="requested" class=" flex_auto bg_warning-3 br_black-2 br_1 br_solid texture_medium">&nbsp;</div>
        <div title="empty" class=" flex_auto bg_primary-3 br_black-2 br_1 br_solid texture_medium">&nbsp;</div>
        <div title="locked" class=" flex_auto bg_alert-3  br_black-2 br_1 br_solid texture_medium">&nbsp;</div>
    </div>
    <div class="label flex_none br_1 br_solid br_black-2  bg_black-2 font_n2 c_black-8 font_bold p_2 p-x_3 text_right"><span><i class="fa fa-spin fa-spinner-third "></i></span><span class="uppercase p-l_3">Seats</span></div>
</div>
</template>

<script>
    export default {
       
    }
</script>
