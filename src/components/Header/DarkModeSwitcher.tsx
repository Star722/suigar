import { useState } from "react";

const DarkModeSwitcher = () => {
  const [sound, setSound] = useState<boolean>(true);

  return (
    <label className={`relative m-0 block h-10 w-10 rounded-full`}>
      <input
        type="checkbox"
        onChange={() => {
          setSound(!sound);
        }}
        className="absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
      />
      <span
        className={`absolute left-[3px] top-1/2 flex h-8 w-8 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher ease-linear`}
      >
        <span className={sound ? "hidden" : ""}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15 1.29v21.42L5.737 17.5H1v-11h4.737zM4.999 8.5H3v7h1.999zm2 7.415L13 19.29V4.71L6.999 8.084zm13.98-8.933l.603.798a7 7 0 0 1-.003 8.44l-.603.798l-1.595-1.206l.603-.798a5 5 0 0 0 .002-6.03l-.603-.797zM18.186 9.09l.603.798a3.5 3.5 0 0 1-.001 4.22l-.604.798L16.59 13.7l.603-.797a1.5 1.5 0 0 0 .001-1.809l-.603-.798z"
            />
          </svg>
        </span>
        <span className={!sound ? "hidden" : ""}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15 1.29v21.42L5.737 17.5H1v-11h4.737zM4.999 8.5H3v7h1.999zm2 7.415L13 19.29V4.71L6.999 8.084zm10.88-7.45L20 10.584l2.121-2.12l1.415 1.413L21.414 12l2.121 2.121l-1.414 1.414L20 13.414l-2.121 2.121l-1.415-1.414L18.587 12l-2.121-2.122z"
            />
          </svg>
        </span>
      </span>
    </label>
  );
};

export default DarkModeSwitcher;
