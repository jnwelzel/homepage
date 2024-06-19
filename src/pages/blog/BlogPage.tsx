import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { Breadcrumb } from '../../components'

export const BlogPage: FC = () => {
  return (
    <div className="px-4 pb-0 max-w-[1312px] mx-auto mt-24 flex flex-col items-start md:mt-28 gap-6">
      <Helmet>
        <title>{'Jon Welzel > Blog'}</title>
        <meta
          name="description"
          content="A collection of thoughts related to tech and some personal stuff too."
        />
      </Helmet>

      <Breadcrumb items={[{ name: 'Blog', path: '/blog' }]} className="fixed top-20 md:top-28" />
      <p className="text-neutral-500 mt-10 md:mt-14">
        A collection of tech and personal ramblings.
      </p>
    </div>
  )
}
