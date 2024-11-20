/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";

const DarkModeToggleButton = dynamic(
  () => import("./dark-mode-toggle-button"),
  { ssr: false }
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" legacyBehavior>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-xl">A Hyeon's Portfolio</span>
            </a>
          </Link>
          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden text-2xl ml-auto focus:outline-none"
            onClick={toggleMenu}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* 네비게이션 메뉴 */}
          <nav
            id="menu"
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row md:ml-auto items-center text-base justify-center`}
          >
            <Link href="/about-me" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">About me</a>
            </Link>
            <Link href="/skills" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">Skills</a>
            </Link>
            <Link href="/projects" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">Projects</a>
            </Link>
            <Link href="/career" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">Career</a>
            </Link>
            <a
              href="https://open.kakao.com/o/sXBeZVYg"
              className="mr-5 hover:text-gray-900"
            >
              Contact
            </a>
          </nav>
          {/* 다크모드 토글 버튼 */}
          <DarkModeToggleButton />
        </div>
      </header>
    </div>
  );
}