import { FC } from 'react'

interface ITextBar {
  children: React.ReactNode
  className?: string
}

export const TextBar: FC<ITextBar> = props => {
  const { children, className } = props

  return (
    <span className={`inline-flex relative ${className}`}>
      <span className="block absolute inset-0 bg-gray-700 w-1" aria-hidden="true"></span>
      <p className="ml-2">{children}</p>
    </span>
  )
}
