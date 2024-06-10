import { Meta, StoryObj } from '@storybook/react'

import cssLogo from '../../assets/css.svg'
import htmlLogo from '../../assets/html.svg'
import javascriptLogo from '../../assets/javascript.svg'
import nodejsLogo from '../../assets/nodejs.svg'
import reactLogo from '../../assets/react.svg'
import typescriptLogo from '../../assets/typescript.svg'
import { Animator } from './Animator'

const meta = {
  title: 'Components/Animator',
  component: Animator,
  args: {
    images: [
      { url: reactLogo, alt: 'React logo' },
      { url: cssLogo, alt: 'CSS logo' },
      { url: htmlLogo, alt: 'HTML logo' },
      { url: nodejsLogo, alt: 'NodeJS logo' },
      { url: javascriptLogo, alt: 'Javascript logo' },
      { url: typescriptLogo, alt: 'Typescript logo' },
    ],
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Animator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'carousel-1',
  },
}
