/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";

export default function DynamicTyping() {
  const [displayText, setDisplayText] = useState(
    ""
  ); // 보여질 텍스트
  const [isDeleting, setIsDeleting] = useState(false); // 삭제 중인지
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50);

  const dynamicTexts = [
    "안녕하세요","프론트엔드 개발자로 성장하고 싶은 한아현입니다.",
  ];
  const currentText = dynamicTexts[loopNum % dynamicTexts.length];

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && displayText.length < currentText.length) {
        // 타이핑 중
        setDisplayText(currentText.substring(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        // 삭제 중
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === currentText.length) {
        // 타이핑 완료 후 대기
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText.length === 0) {
        // 삭제 완료 후 다음 텍스트로
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="heading">
      <div>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{displayText}</h1>
      </div>
    </div>
  );
}