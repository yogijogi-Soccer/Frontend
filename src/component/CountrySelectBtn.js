//도/시 , 시/군/구 선택 컴포넌트
import React from "react";
import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

function CountrySelectBtn() {
  const [country, setCountry] = useState("");
  const [gu, setGu] = useState("");
  const [code, setCode] = useState(0);
  const [countryList, setCountryList] = useState([]);
  const [guList, setGuList] = useState([]);
  const guChange = () => {
    console.log(code);
    axios
      .get(
        "https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=" +
          code +
          "*00000",
      )
      .then((res) => {
        res = res.data.regcodes;
        const name = [];
        res.map((el) => {
          name.push(el.name.split(" ").pop());
        });
        name.shift();
        console.log(name);
        res.map((el, index) => {
          el.name = name[index - 1];
        });

        res.shift();
        console.log(res);
        setGuList(res);
        console.log(guList);
      });
  };
  const handleChange = (event) => {
    setCountry(event.target.value);
    setCode(event.target.value / 100000000);
  };
  useEffect(() => {
    axios
      .get(
        "https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000",
      )
      .then((res) => {
        res = res.data.regcodes;
        setCountryList(res);
      });
    if (code !== 0) {
      guChange();
    }
  }, [code]);

  return (
    <div className="App">
      <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
        <InputLabel id="demo-select-small-label">시/도</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={country}
          label="Country"
          onChange={handleChange}
        >
          {countryList.map((el) => {
            return <MenuItem value={el.code}>{el.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
        <InputLabel id="demo-select-small-label">시/군/구</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={gu}
          label="Gu"
          onChange={(e) => setGu(e.target.value)}
        >
          {guList.map((el) => {
            return <MenuItem value={el.code}>{el.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default CountrySelectBtn;
