/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import Head from "next/head";
import Layout from "../components/layout";

export default function Skills() {
  return (
    <Layout>
      <Head>
        <title>A Hyeon's Portfolio</title>
        <meta name="description" content="오늘도 빡코딩!" />
        <link rel="icon" href="/fox-favicon.png" />
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              SKILLS
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              제가 직접 다루어본 기술 스택입니다.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Frontend
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <ul className="flex flex-wrap gap-2">
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#f06529', color: '#ffffff' }}>HTML5</li>
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#2965f1', color: '#ffffff' }}>CSS3</li>
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#f0db4f', color: '#ffffff' }}>JavaScript</li>
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#007acc', color: '#ffffff' }}>TypeScript</li>
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#cc6699', color: '#ffffff' }}>Sass</li>
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#38bdf8', color: '#ffffff' }}>Tailwind CSS</li>
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#0769ad', color: '#ffffff' }}>Jquery</li>
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Next.js</li>
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#61dbfb', color: '#ffffff' }}>React</li>
                </ul>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Backend
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <ul className="Skills_list__oVEks">
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#5382a1', color: '#ffffff' }}>JAVA</li>
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#4a148c', color: '#ffffff' }}>C#</li>
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#8993be', color: '#ffffff' }}>PHP</li>
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#ff9100', color: '#ffffff' }}>MySql</li>
                </ul>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                DevOps
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <ul className="Skills_list__oVEks">
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#f79b26', color: '#ffffff' }}>AWS</li>
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Vercel</li>
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#2468ee', color: '#ffffff' }}>Docker</li>
                </ul>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Developer Tools
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <ul className="Skills_list__oVEks">
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#2f74c0', color: '#ffffff' }}>Jira</li>
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#3eb991', color: '#ffffff' }}>Slack</li>
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Git</li>
                  <li className="rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#007acc', color: '#ffffff' }}>VS Code</li>
                </ul>
                {/* Jira, Slack, Git, VS Code  */}
              </nav>
            </div>
          </div>
          {/* <button className="flex mx-auto mt-16 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
            Button
          </button> */}
        </div>
      </section>
    </Layout>
  );
}
