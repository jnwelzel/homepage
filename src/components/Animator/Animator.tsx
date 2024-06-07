import { FC } from 'react'

type AnimatorImage = {
  url: string
  alt: string
}

interface IAnimatorProps {
  id: string
  images: AnimatorImage[]
}

export const Animator: FC<IAnimatorProps> = props => {
  const { id, images } = props

  return (
    <div>
      <ul className="flex flex-row gap-4 items-center">
        {images.map((img, idx) => (
          <li key={`animator__${id}__${idx}`}>
            <img src={img.url} alt={img.alt} className="size-10 animate-bounce" />
          </li>
        ))}
      </ul>
    </div>
  )
}
