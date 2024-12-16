import React from "react";

export default function Skill() {
  return (
    <>
      <div className="flex justify-center mt-[-10rem] font-kode-mono">
        <div className="flex justify-center w-1/2 rounded-3xl  text-center shadow-gray-900 ">
          <div
            id="ProgrammingLanguage"
            class="w-1/3  pb-36 border rounded-s-2xl bg-white pt-10 flex flex-col  items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg>
            <div className="pt-10">
              <p className="font-extrabold">Frontend Developer</p>
              <p className="pt-5 text-[#6e07f4] ">Programming Languages</p>
              <p>HTML, CSS, React</p>

              <p className="pt-10  text-[#6e07f4]">Dev Tools</p>
              <p>Github</p>
              <p>Tailwind</p>
              <p>MUI</p>
            </div>
          </div>

          <div
            id="DevTools"
            class="w-1/3 p-auto text-center p-auto border  bg-white pt-10 flex flex-col  items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
            <div className="pt-10">
              <p className="font-extrabold">Backend Developer</p>
              <p className="pt-5 text-[#6e07f4] ">Programming Languages</p>
              <p>Node.js, Express.js</p>

              <p className="pt-10  text-[#6e07f4]">Data base</p>
              <p>MongoDB</p>
              <p>SQL</p>
            </div>
          </div>
          <div
            id="SpeakingLanguage"
            className="w-1/3 p-auto text-center p-auto border rounded-e-2xl bg-white pt-10 flex flex-col  items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
            <div className="pt-10">
              <p className="font-extrabold">Other skills</p>
              <p className="pt-5 text-[#6e07f4] ">Speaking Languages</p>
              <p>Thai</p>
              <p>English</p>
              <p>Chinese</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
