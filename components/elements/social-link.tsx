import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLink = ({ icon, title, link, hoverColor }: any) => {
  return (
    <a href={link} className={hoverColor} target="_blank" rel='noreferrer'>
      <FontAwesomeIcon icon={icon} /> {title}
    </a>
  )
}

export default SocialLink
