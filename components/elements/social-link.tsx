import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLink = ({ icon, title, link }: any) => {
  return (
    <a href={link} className="hover:text-green-200" target="_blank" rel='noreferrer'>
      <FontAwesomeIcon icon={icon} /> {title}
    </a>
  )
}

export default SocialLink
