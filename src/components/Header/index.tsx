import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import Image from "next/image";
import { ConnectButton } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";
import { Button } from "@mui/material";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="fixed top-0 z-99999 flex h-20 w-full bg-white drop-shadow-1">
      <div className="flex h-full flex-grow items-center justify-between px-4 py-1 shadow-2 md:px-10 2xl:px-15">
        <Link className="hidden flex-shrink-0 sm:block" href="/">
          <Image
            width={70}
            height={70}
            src={"/logo/logo.png"}
            alt="Logo"
            priority
            className="rounded-full"
          />
        </Link>
        <button
          onClick={(e) => {
            e.stopPropagation();
            props.setSidebarOpen(!props.sidebarOpen);
          }}
          className="z-99999 block rounded-sm border border-stroke bg-white p-0 shadow-sm sm:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.6em"
            height="1.6em"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="48"
              d="M88 152h336M88 256h336M88 360h336"
            />
          </svg>
        </button>
        <div className="flex items-center gap-1 2xsm:gap-5">
          <DarkModeSwitcher />
          <span>$1.71</span>
          <ConnectButton
            style={{
              width: "auto",
              borderRadius: 50,
              background: "white",
              color: "black",
              padding: "8px",
            }}
            className="inline-flex items-center justify-center gap-2 text-center font-medium shadow-switcher"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M18.963 4.188a.5.5 0 0 1 .705-.08l1.08.866L16.799 10h2.544l2.968-3.776l2.504 2.006a.5.5 0 0 1 .066.717L23.973 10h2.614a2.5 2.5 0 0 0-.522-3.331l-5.147-4.122a2.5 2.5 0 0 0-3.522.399L11.809 10h2.551zM21 19a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM6 7a3 3 0 0 0-3 3v14.5A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-9a4.5 4.5 0 0 0-4.5-4.5H6a1 1 0 1 1 0-2h4.58l1.596-2zM5 24.5V12.83c.313.11.65.17 1 .17h18.5a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 5 24.5"
              />
            </svg>
            <span className="hidden sm:block">Connect&nbsp;Wallet</span>
          </ConnectButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
