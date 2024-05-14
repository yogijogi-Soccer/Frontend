// 참고 링크 : https://postcode.map.daum.net/guide#attributes
//카카오 도로명주소 API 연결
import React, { useEffect } from "react";
import DaumPostcode from "react-daum-postcode";
import { useState, useRef } from "react";
import "./css/Button.css";

const KakaoAddressPopup = () => {
  const [openPostcode, setOpenPostcode] = useState(false);
  const [address, setAddress] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const inputRef = useRef(null);

  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode((current) => !current);
    },

    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `);
      setAddress(data.address);
      setBuildingName(data.buildingName);
      setOpenPostcode(false);
    },
  };
  useEffect(() => {
    if (address && openPostcode === false) return inputRef.current.focus();
  });

  return (
    <div>
      {address && (
        <div>
          <div
            type="text"
            id="address"
            style={{
              padding: "0.8vh",
              backgroundColor: "var(--color-normal3)",
              borderRadius: "1vh",
              marginBottom: "0.5vh",
            }}
          >
            {address}
          </div>
          <input
            type="text"
            ref={inputRef}
            placeholder="상세주소"
            style={{
              padding: "0.8vh",
              backgroundColor: "var(--color-normal3)",
              borderRadius: "1vh",
              marginBottom: "0.5vh",
              border: "0",
            }}
          ></input>
          {buildingName && (
            <div
              type="text"
              id="buildingName"
              style={{
                padding: "0.8vh",
                backgroundColor: "var(--color-normal3)",
                borderRadius: "1vh",
                marginBottom: "0.5vh",
              }}
            >
              {buildingName}
            </div>
          )}
        </div>
      )}
      <button className="btn-green" onClick={handle.clickButton}>
        주소찾기
      </button>
      {openPostcode && (
        <DaumPostcode
          onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
          autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
        />
      )}
    </div>
  );
};

export default KakaoAddressPopup;
