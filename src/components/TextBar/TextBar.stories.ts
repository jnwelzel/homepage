import { Meta, StoryObj } from '@storybook/react'

import { TextBar } from './TextBar'

const meta = {
  title: 'Components/Text Bar',
  component: TextBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare, est eu consequat semper, sem urna hendrerit purus, id porttitor nisl eros suscipit mi. Curabitur enim odio, lacinia id sapien ut, viverra sodales justo. Proin eros mi, aliquam vitae sapien quis, vestibulum sollicitudin augue. Duis id vulputate nibh, vitae consectetur nisi. Mauris vel elementum sem. Fusce placerat vestibulum risus ut pharetra. Fusce at volutpat massa. Suspendisse ornare suscipit ex ut tempor. Maecenas ornare leo ac risus dictum cursus.',
  },
}
