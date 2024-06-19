import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import { FC } from 'react'

type BreadcrumbItem = {
  name: string
  path: string
}

interface IBreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export const Breadcrumb: FC<IBreadcrumbProps> = props => {
  const { items, className } = props

  return (
    <ol
      className={`bg-white border rounded-full shadow py-2 pr-5 inline-flex items-center ${className}`}>
      <li>
        <a href="/" aria-label="Home" title="Home">
          <HomeIcon className="size-5 text-neutral-500 hover:text-neutral-600 ml-5" />
        </a>
      </li>
      {items.map((item, idx) => (
        <li className="text-sm ml-3 flex items-center" key={idx}>
          <ChevronRightIcon className="size-5 text-neutral-500 mr-3" />
          <a href={`${item.path}`} className="text-neutral-500 hover:text-neutral-600">
            {item.name}
          </a>
        </li>
      ))}
    </ol>
  )
}
