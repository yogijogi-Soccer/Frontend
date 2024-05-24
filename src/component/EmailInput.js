import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";

const EmailInput = () => {
  const [username, setUsername] = useState("");
  const [domain, setDomain] = useState("");
  const [isValid, setIsValid] = useState(true);

  const domains = [
    "gmail.com",
    "naver.com",
    "kakao.com",
    "hanmail.com",
    "nate.com",
  ];

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
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          id="email-username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          style={{
            padding: "1.6vh",
            marginRight: "1vh",
            border: "1px solid var(--color-normal5)",
            borderRadius: "0.5vh",
            width: "30vw",
          }}
        />
        <span>@ </span>
        <FormControl sx={{ m: 1 }} fullWidth="true" size="small">
          <Select value={domain} onChange={handleDomainChange}>
            {domains.map((domainOption) => (
              <MenuItem key={domainOption} value={domainOption}>
                {domainOption}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default EmailInput;
