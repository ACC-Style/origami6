import Btn from '../../components/subComponents/Btn.vue';

export default {
  title: 'Basic/Button',
  component: Btn,
  parameters: {
    docs: { 
        description: { 
            component:"The button the foundation of all user interactions on the web"
      },
      actions: { argTypesRegex: '^on.*' },
      source:{code:'<btn @onClick="onClick" @onActive="onActive" @onDeactive="onDeactive" v-bind="$props"><span v-html="label"/></btn>'}
    }
  },
  argTypes: {
    label:{description:'Buttons should be action oriented and can inlude font awesome icon tags to enrich the button'},
    state: { control: { type: 'select', options: ['primary', 'black', 'alert', 'warning', 'success', 'secondary', 'none', 'empty'] }  },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    corner: { control: { type: 'select', options: ['square', 'radius', 'round'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Btn },
  template: '<btn @onClick="onClick" @onActive="onActive" @onDeactive="onDeactive" v-bind="$props"><span v-html="label"/></btn>',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  state:'priamry',
  size: 'medium',
};
