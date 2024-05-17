import React, { useState } from "react";

const EmailInput = () => {
  const [username, setUsername] = useState("");
  const [domain, setDomain] = useState("");
  const [isValid, setIsValid] = useState(true);

  const domains = ["gmail.com", "naver.com", "daum.net", "yahoo.com"];

  const validateEmail = (username, domain) => {
    // 이메일 정규식 패턴
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = `${username}@${domain}`;
    return emailPattern.test(email);
  };

  const handleUsernameChange = (event) => {
    const { value } = event.target;
    setUsername(value);
    setIsValid(validateEmail(value, domain));
  };

  const handleDomainChange = (event) => {
    const { value } = event.target;
    setDomain(value);
    setIsValid(validateEmail(username, value));
  };

  return (
    <div>
      <label htmlFor="email-username">Email Address:</label>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          id="email-username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="example"
          style={{ borderColor: isValid ? "black" : "red" }}
        />
        <span>@</span>
        <select value={domain} onChange={handleDomainChange}>
          <option value="">도메인 선택</option>
          {domains.map((domainOption) => (
            <option key={domainOption} value={domainOption}>
              {domainOption}
            </option>
          ))}
        </select>
      </div>
      {!isValid && (
        <p style={{ color: "red" }}>Please enter a valid email address.</p>
      )}
    </div>
  );
};

export default EmailInput;
