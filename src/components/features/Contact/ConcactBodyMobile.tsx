import React from 'react'
import { Lang } from '../../../context/Lang'
import { text } from './Text'

interface ContactBodyMobileProps {
    lang: Lang
}

const ConcactBodyMobile: React.FC<ContactBodyMobileProps> = ({lang}) => {
  return (
    <div>
        {text[0][lang].textCard.title}
    </div>
)
}

export default ConcactBodyMobile