import { Meta, StoryObj } from '@storybook/react'

import distanceFromX from '../../assets/distance-from-x.webp'
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
    imageURL: distanceFromX,
    title: 'Distance from X',
    description:
      "React SPA to calculate the distance between two geographic points. The app also uses Google's Geocoding API for searching and fetching geocoordinates.",
    linkURL: 'https://jnwelzel.github.io/distance-from-x/',
  },
}
