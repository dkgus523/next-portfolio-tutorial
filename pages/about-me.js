/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout";
import Head from "next/head";

export default function AboutMe(){
    return (
      <Layout>
        <Head>
          <title>A Hyeon&apos;s Portfolio</title>
          <meta name="description" content="오늘도 빡코딩!" />
          <link rel="icon" href="/fox-favicon.png" />
        </Head>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center items-center">
            {/* Flip Card Container */}
            <div className="relative flex justify-center lg:w-1/2 w-full mb-10 lg:mb-0">
              <div className="flip-card w-80 h-80 perspective">
                <div
                  className="flip-card-inner transition-transform duration-500"
                  id="flip-card-inner"
                >
                  {/* Front Side */}
                  <div className="flip-card-front absolute backface-hidden w-full h-full rounded-lg overflow-hidden">
                    <img
                      alt="profile"
                      className="object-contain object-center w-full h-full"
                      src="/profile.jpg"
                    />
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back absolute backface-hidden w-full h-full bg-gray-800 text-white flex justify-center items-center rounded-lg px-4 text-center">
                    <p>
                      이름: 한아현 <br />
                      생년월일 98.05.23 <br />
                      위치: 경기도 용인시 <br />
                      연락처: 010-5966-7670 <br />
                      이메일: hanahyeon23@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:text-left text-center">
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <p className="mb-8 leading-relaxed">
                    저는 Node.js 기반의 백엔드 경험을 바탕으로, React와 같은
                    최신 프론트엔드 프레임워크와 반응형 웹 디자인에 관심을 두고
                    UI/UX 중심의 프론트엔드 개발자로 성장하고자 합니다. <br />
                    이전 직장에서 Playauto 2.0 솔루션 개발과 유지보수, 오픈API
                    설계 등 프로젝트를 담당하며 사용자 관리와 보안 강화에 기여한
                    바 있습니다. <br />
                    웹 퍼포먼스 최적화와 UX 개선에 열정을 가지고 있으며, 협업과
                    소통을 중요하게 여깁니다. <br />
                    작은 디테일까지 놓치지 않는 꼼꼼함과 책임감을 통해
                    프로젝트에 기여하는 개발자가 되겠습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center items-center">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-auto md:w-full">
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <img
                      alt="feature"
                      className="object-cover object-center h-500 w-500 rounded-full"
                      src="/github.png"
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      GitHub
                    </h2>
                    <p className="leading-relaxed text-base">
                      소스 코드 저장소
                    </p>
                    <a
                      className="mt-3 text-indigo-500 inline-flex items-center"
                      href="https://github.com/dkgus523"
                    >
                      github.com/dkgus523
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-auto md:w-full">
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <img
                      alt="feature"
                      className="object-cover object-center h-500 w-500 rounded-full"
                      src="/blog.png"
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      Blog
                    </h2>
                    <p className="leading-relaxed text-base">
                      공부 및 지식 공유 목적의 블로그
                    </p>
                    <a
                      className="mt-3 text-indigo-500 inline-flex items-center"
                      href="https://dkgusdl8.tistory.com/"
                    >
                      dkgusdl8.tistory.com
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
}