import {
  FaGithub,
  FaTwitch,
  FaTwitter,
  FaTelegram,
  FaWhatsapp,
  FaDiscord
} from 'react-icons/fa'
import socialLinks from '../../constants/social'

export const SocialBar = () => {
  return (
    <ul className="hidden md:block fixed right-3 top-1/2 -translate-y-1/2 space-y-4 text-black">
      <li>
        <a
          className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub aria-label="GitHub" size={20} />
        </a>
      </li>
      <li>
        <a
          className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaWhatsapp aria-label="Whatsapp" size={20} />
        </a>
      </li>
      {/* <li>
        <a
          className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
          href=""
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaTelegram aria-label="Telegram" size={20} />
        </a>
      </li> */}
      <li>
        <a
          className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
          href={socialLinks.discord}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaDiscord aria-label="Telegram" size={20} />
        </a>
      </li>
      <li>
        <a
          className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
          href={socialLinks.twitter}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaTwitter aria-label="Twitter" size={20} />
        </a>
      </li>
      <li>
        <a
          className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
          href={socialLinks.twitch}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaTwitch aria-label="Twitch" size={20} />
        </a>
      </li>
    </ul>
  )
}

export default SocialBar
