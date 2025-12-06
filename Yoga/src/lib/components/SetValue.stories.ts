import type { Meta, StoryObj } from '@storybook/svelte';
import SetValue from './SetValue.svelte';

const meta: Meta<typeof SetValue> = {
  title: 'Yoga Page/Components',
  component: SetValue,
};

export default meta;

type Story = StoryObj<typeof SetValue>;

export const SetDuration: Story = {
  args: {
    minTime: 0,
    step: 20,
    maxTime: 6000,
    label: "hi",
    store: {}
  },
};
