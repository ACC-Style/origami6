<template lang="html">
  <div :class='{"tabs__light": mode === "light", "tabs__dark": mode === "dark"}'>
    <ul class='tabs__header'>
      <li v-for='(tab, index) in tabs'
        :key='tab.title'
        :class='{"tab__selected": (index == activeTab)}'>
          <label :for="`${_uid}${index}`" v-text="tab" />
                {{ tab.title }}
                <input
                :id="`${_uid}${index}`"
                type="radio"
                :name="`${_uid}-tab`"
                :value="index"
                v-model="activeTab"
                class="display_none"
                />
          </label>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'light'
    }
  },
  data () {
    return {
      activeTab: 0, // the index of the selected tab,
      tabs: []         // all of the tabs
    }
  },
  created () {
    this.tabs = this.$children
  },
  computed:{
      selectTab () {
        let i = this.activeTab;
        this.tabs.forEach((tab, index) => {
            tab.isActive = (index === i)
        });
      }
  },
  methods: {
  }
}
</script>