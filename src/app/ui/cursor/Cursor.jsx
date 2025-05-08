"use client";
import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 마우스 이동 감지
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX - 10, y: e.clientY - 10 });

      // 처음 로드되었을 때 커서 표시
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    // 커서 스타일 변경 로직
    const onMouseOver = (e) => {
      // 먼저 현재 요소나 부모 중에 project-link 클래스를 가진 요소 확인
      let projectLinkParent =
        e.target.closest(".project-link") ||
        e.target.closest("[data-project-link]");

      if (projectLinkParent) {
        // 자신이나 부모가 project-link인 경우
        setCursorType("cursor-style03");
      } else if (e.target.closest("a")) {
        // 일반 링크인 경우
        setCursorType("cursor-style02");
      } else {
        // 그 외 요소
        setCursorType("");
      }
    };

    // 페이지를 벗어날 때 커서 숨기기
    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      id="cursor"
      className={cursorType}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <span></span>
    </div>
  );
}
