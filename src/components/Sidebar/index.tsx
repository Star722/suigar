"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const List = [
  {
    title: "LootBox",
    url: "/lootbox",
  },
  {
    title: "NFT",
    url: "/nft",
  },
  {
    title: "Token",
    url: "/token",
  },
  {
    title: "Provably Fair",
    url: "/provably_fair",
  },
];

const Social = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5em"
        height="2.5em"
        viewBox="0 0 256 256"
      >
        <g fill="none">
          <rect width="256" height="256" fill="black" rx="60" />
          <g clipPath="url(#skillIconsDiscord0)">
            <path
              fill="#fff"
              d="M197.308 64.797a164.918 164.918 0 0 0-40.709-12.627a.618.618 0 0 0-.654.31c-1.758 3.126-3.706 7.206-5.069 10.412c-15.373-2.302-30.666-2.302-45.723 0c-1.364-3.278-3.382-7.286-5.148-10.412a.643.643 0 0 0-.655-.31a164.472 164.472 0 0 0-40.709 12.627a.583.583 0 0 0-.268.23c-25.928 38.736-33.03 76.52-29.546 113.836a.685.685 0 0 0 .26.468c17.106 12.563 33.677 20.19 49.94 25.245a.648.648 0 0 0 .702-.23c3.847-5.254 7.276-10.793 10.217-16.618a.633.633 0 0 0-.347-.881c-5.44-2.064-10.619-4.579-15.601-7.436a.642.642 0 0 1-.063-1.064a86.364 86.364 0 0 0 3.098-2.428a.618.618 0 0 1 .646-.088c32.732 14.944 68.167 14.944 100.512 0a.617.617 0 0 1 .655.08a79.613 79.613 0 0 0 3.106 2.436a.642.642 0 0 1-.055 1.064a102.622 102.622 0 0 1-15.609 7.428a.638.638 0 0 0-.339.889a133.075 133.075 0 0 0 10.208 16.61a.636.636 0 0 0 .702.238c16.342-5.055 32.913-12.682 50.02-25.245a.646.646 0 0 0 .26-.46c4.17-43.141-6.985-80.616-29.571-113.836a.506.506 0 0 0-.26-.238M94.834 156.142c-9.855 0-17.975-9.047-17.975-20.158s7.963-20.158 17.975-20.158c10.09 0 18.131 9.127 17.973 20.158c0 11.111-7.962 20.158-17.973 20.158m66.456 0c-9.855 0-17.974-9.047-17.974-20.158s7.962-20.158 17.974-20.158c10.09 0 18.131 9.127 17.974 20.158c0 11.111-7.884 20.158-17.974 20.158"
            />
          </g>
          <defs>
            <clipPath id="skillIconsDiscord0">
              <path fill="#fff" d="M28 51h200v154.93H28z" />
            </clipPath>
          </defs>
        </g>
      </svg>
    ),
    url: "http://www.discord.com",
    title: "Discord",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5em"
        height="2.5em"
        viewBox="0 0 256 256"
      >
        <g fill="none">
          <rect width="256" height="256" fill="#fff" rx="60" />
          <rect width="256" height="256" fill="#1d9bf0" rx="60" />
          <path
            fill="#fff"
            d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677c2.918.351 5.85.526 8.79.533a74.154 74.154 0 0 0 45.865-15.839a36.976 36.976 0 0 1-34.501-25.645a36.811 36.811 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.705 36.705 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.814 104.814 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.105 74.105 0 0 0 23.451-8.965a37.061 37.061 0 0 1-16.234 20.424A73.446 73.446 0 0 0 218 72.282a75.023 75.023 0 0 1-18.428 19.13"
          />
        </g>
      </svg>
    ),
    url: "http://www.twitter.com",
    title: "Twitter",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5em"
        height="2.5em"
        viewBox="0 0 256 256"
      >
        <g fill="none">
          <rect
            width="256"
            height="256"
            fill="url(#skillIconsInstagram0)"
            rx="60"
          />
          <rect
            width="256"
            height="256"
            fill="url(#skillIconsInstagram1)"
            rx="60"
          />
          <path
            fill="#fff"
            d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
          />
          <defs>
            <radialGradient
              id="skillIconsInstagram0"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fd5" />
              <stop offset=".1" stopColor="#fd5" />
              <stop offset=".5" stopColor="#ff543e" />
              <stop offset="1" stopColor="#c837ab" />
            </radialGradient>
            <radialGradient
              id="skillIconsInstagram1"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3771c8" />
              <stop offset=".128" stopColor="#3771c8" />
              <stop offset="1" stopColor="#60f" stopOpacity="0" />
            </radialGradient>
          </defs>
        </g>
      </svg>
    ),
    url: "http://www.instagram.com",
    title: "Instagram",
  },
];
const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen min-w-55 flex-col overflow-y-hidden border-dashed  bg-bodydark1 pt-20 duration-200 ease-linear sm:static sm:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="no-scrollbar flex h-full flex-col justify-between overflow-y-auto pb-5 pt-5 duration-300 ease-linear">
        <Link href="/" className="flex items-center justify-center sm:hidden">
          <Image
            width={120}
            height={120}
            src={"/logo/logo.png"}
            alt="Logo"
            priority
            className="rounded-full "
          />
        </Link>
        <nav className="py-4">
          <ul className="mb-6 flex flex-col gap-1.5">
            {List.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className={`group relative flex items-center gap-2.5 border-gray px-10 py-5 font-medium duration-100 ease-in-out hover:border-l hover:border-r hover:bg-gray ${
                    pathname.includes(item.url) &&
                    "border-l border-r border-black bg-gray"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex justify-center gap-5">
          {Social.map((item, index) => (
            <li
              key={index}
              title={item.title}
              className="rounded-md duration-150 hover:opacity-70"
            >
              <Link href={item.url}>{item.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
