import AddressBlock from "../../components/subComponents/AddressBlock.vue";
export default {
  title: 'Content',
  component: AddressBlock,
  parameters: {
    docs: { 
        description: { 
            component:"Simple display of Address"
      },
      actions: { argTypesRegex: '^on.*' },
      source:{code:'<AddressBlock v-bind="address" />'}
    }
  },
  argTypes: {

  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AddressBlock },
  template: '<AddressBlock v-bind="$props"/>',
});

export const Address = Template.bind({});
Address.args = {
	institution: "American College of Cardiology",
	street_1: "1000 Beacher Street",
	street_2: "Apt 543",
	city: "Washington",
	state: "DC",
    zip: "20006",
    country:"USA"
};
