import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

import distanceFromX from '../../assets/distance-from-x.webp'
import mtgExplorer from '../../assets/mtgexplorer.jpg'
import { Breadcrumb, ImageCard } from '../../components'

export const PortfolioPage: FC = () => {
  return (
    <div className="px-4 pb-0 max-w-[1312px] mx-auto mt-24 flex flex-col items-start md:mt-28 gap-6">
      <Helmet>
        <title>{'Jon Welzel > Portfolio'}</title>
        <meta
          name="description"
          content="Some of the work I have done over the years showcasing my professional experience."
        />
      </Helmet>

      <Breadcrumb
        items={[{ name: 'Portfolio', path: '/portfolio' }]}
        className="fixed top-20 md:top-28"
      />
      <p className="text-neutral-500 mt-10 md:mt-14">
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

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <ImageCard
          imageURL={distanceFromX}
          title="Distance from X"
          description="React SPA to calculate the distance between two geographic points. The app also uses Google's Geocoding API for searching and fetching geocoordinates."
          linkURL="https://jnwelzel.github.io/distance-from-x/"
        />
        <ImageCard
          imageURL={mtgExplorer}
          title="MTG Explorer"
          description="A web application for exploring Magic: The Gathering card sets and their contents."
          linkURL="https://mtgexplorer.online"
        />
      </div>
    </div>
  )
}
