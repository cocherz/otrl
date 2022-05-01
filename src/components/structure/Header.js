import { PrismicText, PrismicLink } from "@prismicio/react";
import { PrimaryButton } from "./common";
import { MobileNav } from "./MobileNav";
import React from "react";
import { GATracker } from "./GoogleAnalytics";


const HeaderLogo = ({ logo }) => {
  return (
    <div className="logo" alt="logo">
      <PrismicLink aria-label="Ontrack Retail, press to go to home page" href="/" alt="logo" aria-describedby="hello" >
        <svg width="135" height="32" viewBox="0 0 321 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M164 5.09326H110V15.0933H131V74.0933H141V15.0933H164V5.09326Z" fill="#1F2937" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M153.488 74.5486H163.196V48.02C163.196 41.7743 167.81 35.9309 174.048 36.2293C177.291 36.3844 180.147 37.8409 180.147 37.8409L180.581 27.5342C180.581 27.5342 176.887 26.7611 174.44 26.6181C162.762 25.9356 153.613 36.6558 153.574 48.3539L153.488 74.5486Z"
            fill="#1F2937"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M264.957 60.7003L271.989 67.3014C271.989 67.3014 264.467 77.3108 250.673 75.8025C236.878 74.2942 229.807 62.4066 229.807 50.6489C229.807 33.4812 241.453 27.3002 252.627 26.4345C263.8 25.5687 272.161 34.8155 272.161 34.8155L264.784 41.2891C264.784 41.2891 260.02 34.8155 252.142 35.4822C244.264 36.1489 239.564 42.8696 239.688 51.1185C239.813 59.3675 245.384 66.3943 252.627 66.8478C259.869 67.3014 264.957 60.7003 264.957 60.7003Z"
            fill="#1F2937"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M286.066 74.4638H276.667V0H286.066V45.8414L304.872 27.4639H318.393L295.932 49.0821L320.502 74.4638H306.743L286.066 52.8315V74.4638Z"
            fill="#1F2937"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M49.6767 72.1496C45.3343 74.0431 40.5398 75.0933 35.5 75.0933C15.8939 75.0933 0 59.1995 0 39.5933C0 31.73 2.55659 24.4638 6.88391 18.5806L21.8578 26.9345C18.7746 30.2556 16.8894 34.7043 16.8894 39.5933C16.8894 49.8717 25.2216 58.2039 35.5 58.2039C38.9818 58.2039 42.2403 57.2478 45.0272 55.5838L49.6767 72.1496Z"
            fill="#622F91"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M58.6454 12.6753L47.2484 25.159C51.4361 28.5715 54.1106 33.7701 54.1106 39.5934C54.1106 46.7878 50.0283 53.0288 44.0538 56.1262L35.2544 64.9543C33.358 66.8569 34.2233 70.0984 36.8156 70.8027L46.3695 73.3985C60.6588 68.8076 71 55.4082 71 39.5934C71 28.8301 66.21 19.1856 58.6454 12.6753Z"
            fill="#2771BB"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4308 26.3005L16.6605 38.0933L16.9603 37.9575C17.7886 28.4453 25.7728 20.9827 35.5 20.9827C40.0393 20.9827 44.199 22.6078 47.429 25.308L56.3522 27.5632C58.9121 28.2102 61.2392 25.8978 60.6086 23.3339L57.863 12.1724L57.6333 11.836C51.5641 6.99014 43.8703 4.09326 35.5 4.09326C19.0522 4.09326 5.21695 15.279 1.1864 30.4583L7.7225 24.6156C9.66055 22.8831 12.7441 23.7933 13.4308 26.3005Z"
            fill="#D31859"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M77.8419 74.623H87.1866V47.5118C87.1866 41.4941 92.0649 36.6158 98.0826 36.6158C104.1 36.6158 108.979 41.4941 108.979 47.5118V74.623H118.602V46.6888C118.602 35.4331 109.478 26.3086 98.2221 26.3086C86.9664 26.3086 77.8419 35.4331 77.8419 46.6888V74.623Z"
            fill="#1F2937"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M223.21 49.9764C223.228 48.539 223.243 47.2636 223.243 46.2166C223.243 40.2166 220.863 36.3605 218.243 33.2166C215.777 30.258 213.319 28.6468 209.743 27.2165C204.743 25.2165 198.831 26.3196 195.243 27.2166C189.243 28.7168 185.243 33.7166 185.243 33.7166L191.243 40.2166C191.243 40.2166 196.243 36.2168 200.243 35.7165C205.7 35.034 207.243 35.2168 209.743 36.2168C210.445 36.4977 212.743 38.2171 213.243 40.7168C213.635 42.678 213.743 44.2166 213.743 44.2166C213.743 44.2166 202.209 44.3055 199.743 44.7165C193.743 45.7166 187.668 48.415 185.243 54.2166C183.436 58.5404 183.743 62.2166 185.243 66.2166C186.65 69.9695 190.743 72.7166 193.243 73.7166C195.743 74.7166 201.243 75.2166 205.243 74.2166C209.243 73.2166 214.243 69.2166 214.243 69.2166L214.743 74.2166H224.243C223.005 67.1999 223.129 56.776 223.21 49.9764ZM213.243 52.717V55.7168C213.243 59.7167 210.243 64.2169 205.743 65.7166C202.897 66.6651 201.243 66.7167 199.243 66.2167C197.709 65.8333 194.412 64.91 193.743 62.2166C193.37 60.7166 193.379 56.6347 195.743 55.2166C198.243 53.7166 201.04 52.7166 204.243 52.7166C209.243 52.7166 213.243 52.717 213.243 52.717Z"
            fill="#1F2937"
          />
        </svg>
      </PrismicLink>
    </div>
  );
};

const MenuLink = ({ menuLink }) => {

  const gaEvent = GATracker('Web-Header-click')

  return (
    <li>
      <PrismicLink field={menuLink.link} onClick={() => gaEvent(menuLink.link.url)}>
        <div className={window.location.pathname === menuLink.link.url ? "bolden" : "" }>
        <PrismicText field={menuLink.label} />
        </div>
      </PrismicLink>
    </li>
  );
};

const NavItems = ({ items }) => {
  return (
    <nav className="mobile-hidden">
      <ul>
        {items.map((menuLink) => (
          <MenuLink menuLink={menuLink} key={menuLink.link.id} />
        ))}
      </ul>
    </nav>
  );
};

export const Header = ({ menuDoc }) => {
  
  if (menuDoc) {
    const gaEvent = GATracker('Web-Header-click')
    return (
      <header className="sticky" >
        <section className="site-header"> <a onClick={() => gaEvent("/home")}>
          <HeaderLogo logo={menuDoc.data.header_image.url}/></a>
          <section className="desktop-nav mobile-hidden">
            <NavItems items={menuDoc.data.menu_links} />
            <PrimaryButton classNames="header-button" redirect="/contact-us" copy="Contact Us" />
          </section>
          <section className="">
            <div className="mobile-nav desktop-hidden">
              <MobileNav menuDoc={menuDoc} />
            </div>
          </section>
        </section>
      </header>
    );
  }

  return null;
};
