import { FC } from 'react'

import portrait from '../../assets/avatar.webp'

export const Avatar: FC = () => {
  return <img className="rounded-full border shadow w-9 inline-flex" src={portrait} />
}
