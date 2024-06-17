import { FC } from 'react'

import { ImageCard } from '../../components'

export const PortfolioPage: FC = () => {
  return (
    <div className="p-4 pb-0 max-w-[1312px] mx-auto mt-[60px] flex flex-col md:mt-40">
      <div className="my-10">
        <h1 className="text-3xl md:text-6xl md:mt-0 drop-shadow text-left">Portfolio</h1>
        <p className="text-neutral-500">
          Here you can find some of my weekend projects which cover a wide range of topics and tech.
          Some projects are not hosted at the moment (wip) and others are closed-source, so head on
          over to my{' '}
          <a
            href="https://github.com/jnwelzel?tab=repositories"
            className="underline"
            target="_blank">
            Github page
          </a>{' '}
          for more details.
        </p>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <ImageCard />
      </div>
    </div>
  )
}
