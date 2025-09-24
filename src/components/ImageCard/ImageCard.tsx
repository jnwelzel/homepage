import { FC } from 'react'

interface ImageCardProps {
  imageURL: string
  title: string
  description: string
  linkURL: string
}

export const ImageCard: FC<ImageCardProps> = ({ imageURL, title, description, linkURL }) => {
  return (
    <div className="rounded-3xl bg-neutral-100 flex flex-col gap-3 p-3 pb-4 shadow">
      <div className="rounded-2xl overflow-hidden bg-white">
        <a href={linkURL} target="_blank">
          <img src={imageURL} alt={title} className="object-contain aspect-[6/4]" />
        </a>
      </div>
      <p className="font-bold text-xl">{title}</p>
      <p className="text-neutral-500 leading-tight">{description}</p>
    </div>
  )
}
