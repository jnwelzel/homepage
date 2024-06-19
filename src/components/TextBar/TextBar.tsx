import { FC } from 'react'

interface ITextBar {
  children: React.ReactNode
  className?: string
  barColor?: string
}

export const TextBar: FC<ITextBar> = props => {
  const { children, className, barColor = 'bg-gray-700' } = props

  return (
    <span className={`inline-flex relative ${className}`}>
      <span className={`block absolute inset-0 ${barColor} w-1`} aria-hidden="true"></span>
      <p className="ml-2">{children}</p>
    </span>
  )
}
