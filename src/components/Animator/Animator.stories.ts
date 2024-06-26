import { Meta, StoryObj } from '@storybook/react'

import { Animator } from './Animator'

const meta = {
  title: 'Components/Animator',
  component: Animator,
  tags: ['autodocs'],
} satisfies Meta<typeof Animator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'carousel-1',
  },
}
