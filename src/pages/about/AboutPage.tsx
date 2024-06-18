import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { Breadcrumb } from '../../components'

export const AboutPage: FC = () => {
  // TODO Download CV as PDF link
  return (
    <div className="p-4 pb-0 max-w-[1312px] mx-auto mt-[60px] flex flex-col md:mt-40">
      <Helmet>
        <title>{'Jon Welzel > About'}</title>
        <meta
          name="description"
          content="Information about Jonathan Welzel, professional background, resume."
        />
      </Helmet>

      <div className="mb-10 mt-5 md:my-10">
        <Breadcrumb items={[{ name: 'About', path: '/about' }]} />
        <p className="text-neutral-500 mt-6">
          A brief overview of my 10+ years of experience in software development. Click{' '}
          <a className="underline" href="/">
            here
          </a>{' '}
          to download my resume as a PDF file.
        </p>
      </div>
    </div>
  )
}
