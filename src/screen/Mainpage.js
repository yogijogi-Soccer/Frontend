//메인페이지
import { useEffect } from 'react';
import Header from '../component/header'
import Navigationbar from '../component/navigationbar';
import Button from '../component/Button';


function Mainpage() {

  //모바일 웹 앱 100vh 실제 화면 크기로 맞추기
  //https://velog.io/@eunddodi/React-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%9B%B9-%EC%95%B1-100vh-%EC%8B%A4%EC%A0%9C-%ED%99%94%EB%A9%B4-%ED%81%AC%EA%B8%B0%EB%A1%9C-%EB%A7%9E%EC%B6%94%EA%B8%B0
  function setScreenSize(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(()=> {
    setScreenSize();
  });

  return (
    <div>
    <Header />
    <div>요기조기 메인페이지</div>
    <Button>버튼</Button>
    <Navigationbar />
    </div>
  );
}

export default Mainpage;