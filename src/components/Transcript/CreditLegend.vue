<template>
    <Modal id="Legend" v-if="showModal_Legend" @close="$emit('onCloseLegendModal')">
        <h3 slot="header" class>Credit Type Legend</h3>
        <div >
            <ul class="ul_none m-b_4 lh_4">
                <li
                    class="flex flex_row flex_nowrap"
                    v-for="(credit, index) in creditTypesInDateRange"
                    :key="'legendkey_'+index"
                >
                    <div
                        class="br_1 br_white-3 br_solid w_30 c_white p-x_3 p-y_2 text_center font_bold flex flex_column justify_center"
                        :class="['bg_'+credit.styleCode]"
                        
                    >
                    <div class=" " v-html="credit.shortName"></div>
                    </div>
                    <div class="w_70 p-x_3 p-y_2 br-t_1 br-r_1 br-b_1 br_solid br_black-2">
                        <p
                            class="font_0 c_secondary-n4 lh_1 font_copy vertical-align_middle inline-block"
                            v-html="credit.fullName"
                        ></p>
                    </div>
                </li>
            </ul>
        </div>
        <div
            slot="footer"
            class="text_right br-t_1 br_primary br_solid p_3 p-x_4 bg_secondary-5 shadow_n2 texture_light"
        >
            <Btn
                @onClick="$emit('onCloseLegendModal')"
            >Close Legend</Btn>
        </div>
    </Modal>
</template>

<script>
import Modal from "../subComponents/Modal";
import Btn from "../subComponents/Btn";

export default {
    name: "CreditLegend",
    props: {
        showModal_Legend: { type: Boolean, default: false },
        creditTypesInDateRange: { type: Array, default: () => [] }
        
    },
    components: {
        Modal,Btn
    }
}
</script>