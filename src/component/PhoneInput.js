//휴대폰번호 input 창

import React, { useState } from "react";

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (value) => {
    // 모든 비숫자를 제거
    const cleaned = ("" + value).replace(/\D/g, "");

    // 정규식을 사용하여 하이픈 추가
    const match = cleaned.match(/^(\d{0,3})(\d{0,4})(\d{0,4})$/);

    if (match) {
      return [match[1], match[2], match[3]].filter(Boolean).join("-");
    }

    return value;
  };

  const handleChange = (event) => {
    const { value } = event.target;
    const formattedValue = formatPhoneNumber(value);
    setPhoneNumber(formattedValue);
  };

  return (
    <input
      id="phone"
      type="text"
      value={phoneNumber}
      onChange={handleChange}
      placeholder="010-1234-5678"
      maxLength={13} // 최대 길이 제한
      style={{
        padding: "0.7vh",
        marginRight: "1vh",
        border: "1px solid var(--color-normal5)",
        borderRadius: "0.5vh",
      }}
    />
  );
};

export default PhoneInput;
