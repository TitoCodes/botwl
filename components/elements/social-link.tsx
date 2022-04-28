import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLink = ({ icon, title, link }: any) => {
  return (
    <a href={link} target="_blank" rel='noreferrer'>
      <FontAwesomeIcon icon={icon} /> {title}
    </a>
  )
}

export default SocialLink
