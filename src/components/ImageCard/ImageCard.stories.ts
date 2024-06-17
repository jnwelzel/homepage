import { Meta, StoryObj } from '@storybook/react'

import { ImageCard } from './ImageCard'

const meta = {
  title: 'Components/Image Card',
  component: ImageCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ImageCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'carousel-1',
  },
}
