import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// 스크롤 상단 위치고정
export default function ScrollToTop() {
   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

  return null;
}