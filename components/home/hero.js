import dynamic from "next/dynamic";
import Link from "next/link";

// Animation을 동적 로딩하도록 설정
const Animation = dynamic(() => import("./animation"), { ssr: false });

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요.
          <br className="hidden lg:inline-block" />
          프론트엔드 개발자로 성장하고 싶은 한아현입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          저는 Node.js 기반의 백엔드 경험을 바탕으로, React와 같은 최신
          프론트엔드 프레임워크와 반응형 웹 디자인에 관심을 두고 UI/UX 중심의
          프론트엔드 개발자로 성장하고자 합니다. 이전 직장에서 Playauto 2.0
          솔루션 개발과 유지보수, 오픈API 설계 등 프로젝트를 담당하며 사용자
          관리와 보안 강화에 기여한 바 있습니다. 웹 퍼포먼스 최적화와 UX 개선에
          열정을 가지고 있으며, 협업과 소통을 중요하게 여깁니다. 작은 디테일까지
          놓치지 않는 꼼꼼함과 책임감을 통해 프로젝트에 기여하는 개발자가
          되겠습니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" legacyBehavior>
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
