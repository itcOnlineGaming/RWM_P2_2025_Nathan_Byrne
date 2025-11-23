import type { Meta, StoryObj } from '@storybook/svelte';
import Popup from './Popup.svelte';

const meta: Meta<typeof Popup> = {
  title: 'Yoga Page/Components',
  component: Popup,
};

export default meta;

type Story = StoryObj<typeof Popup>;

export const PopupBubble: Story = {
  args: {
  },
};
