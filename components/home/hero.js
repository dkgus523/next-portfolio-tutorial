import dynamic from "next/dynamic";
import Link from "next/link";
import Typing from "./typing";

// Animation을 동적 로딩하도록 설정
const Animation = dynamic(() => import("./animation"), { ssr: false });

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <Typing />
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

// p 안 내용을 about me 에 넣고 여기는 타이핑되는 애니메이션 넣기