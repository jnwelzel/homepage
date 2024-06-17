import { FC } from 'react'
import distanceFromX from '../../assets/distance-from-x.png'

export const ImageCard: FC = () => {
  return (
    <div className="rounded-3xl bg-neutral-100 flex flex-col gap-3 p-3 pb-4 shadow">
      <div className="rounded-2xl overflow-hidden bg-white">
        <a href="https://jnwelzel.github.io/distance-from-x/" target="_blank">
          <img
            src={distanceFromX}
            alt="Distance from X website screenshot"
            className="object-contain aspect-[6/4]"
          />
        </a>
      </div>
      <p className="font-bold text-xl">Distance from X</p>
      <p className="text-neutral-500 leading-tight">
        React SPA to calculate the distance between two geographic points. The app also uses
        Google's Geocoding API for searching and fetching geocoordinates.
      </p>
    </div>
  )
}
