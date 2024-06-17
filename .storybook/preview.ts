import type { Preview } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'
import '../src/index.css'
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

const preview: Preview = {
  decorators: [withRouter],

  parameters: {
    viewport: {
      viewports: { ...INITIAL_VIEWPORTS, ...MINIMAL_VIEWPORTS },
      defaultViewport: 'iphone14',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs'],
}

export default preview
