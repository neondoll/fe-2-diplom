import FacebookIcon from "../../../../icons/FacebookIcon";
import GooglePlusIcon from "../../../../icons/GooglePlusIcon";
import LinkedinIcon from "../../../../icons/LinkedinIcon";
import TwitterIcon from "../../../../icons/TwitterIcon";
import YoutubeIcon from "../../../../icons/YoutubeIcon";
import { classNameType } from "../../../../types/base";
import { cn } from "../../../../lib/utils";
import { Link } from "react-router-dom";
import "./FooterSubscribeSocial.css";

const socials = [
  { href: "https://www.youtube.com/", icon: YoutubeIcon },
  { href: "https://ru.linkedin.com/", icon: LinkedinIcon },
  { href: "https://plus.google.com/", icon: GooglePlusIcon },
  { href: "https://www.facebook.com/", icon: FacebookIcon },
  { href: "https://twitter.com/", icon: TwitterIcon },
];

function FooterSubscribeSocial({ className }) {
  return (
    <div className={cn("footer-subscribe-social", className)}>
      <h3 className="footer-subscribe-social__title">Подписывайтесь на нас</h3>
      <ul className="footer-subscribe-social__list">
        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <li className="footer-subscribe-social__item" key={index}>
              <Link className="footer-subscribe-social__link" target="_blank" to={social.href}>
                <Icon className="footer-subscribe-social__icon" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

FooterSubscribeSocial.propTypes = { className: classNameType };

export default FooterSubscribeSocial;
