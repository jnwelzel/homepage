import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { Breadcrumb } from '../../components'

export const BlogPage: FC = () => {
  return (
    <div className="p-4 pb-0 max-w-[1312px] mx-auto mt-[60px] flex flex-col md:mt-40">
      <Helmet>
        <title>{'Jon Welzel > Blog'}</title>
        <meta
          name="description"
          content="A collection of thoughts related to tech and some personal stuff too."
        />
      </Helmet>

      <div className="mb-10 mt-5 md:my-10">
        <Breadcrumb items={[{ name: 'Blog', path: '/blog' }]} />
        <p className="text-neutral-500 mt-6">A collection of tech and personal ramblings.</p>
      </div>
    </div>
  )
}
