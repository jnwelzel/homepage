import { FC } from 'react'

import portrait from '../../assets/avatar.webp'

export const Avatar: FC = () => {
  return <img className="rounded-full shadow-lg size-28 inline-flex" src={portrait} />
}
