import React from "react";
import "./css/component.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

//가입승인 요청 목록

function ApprovalList(props) {
  const [approveOpen, setApproveOpen] = useState(false);
  const [refuseOpen, setRefuseOpen] = useState(false);
  const [checkApprove, setCheckApprove] = useState(false);

  const handleApproveOpen = () => {
    setApproveOpen(true);
  };

  const handleApproveClose = () => {
    setApproveOpen(false);
  };

  const handleCheckApprove = () => {
    setCheckApprove(true);
    setApproveOpen(false);
  };
  const handleCheckClose = () => {
    setCheckApprove(false);
  };

  const list = props.list.map((el) => {
    const name = el.name;
    const position = el.position;
    return (
      <div
        style={{
          borderRadius: "1vh",
          backgroundColor: "var(--color-normal3)",
          marginTop: "1vh",
          display: "flex",
          justifyContent: "space-around",
          padding: "0.5vh",
          alignItems: "center",
          fontSize: "2vh",
        }}
      >
        <p>
          {name}({position})
        </p>
        <div>
          <Button
            onClick={handleApproveOpen}
            style={{
              padding: "1vh",
              borderRadius: "1vh",
              marginRight: "1vh",
              backgroundColor: "var(--color-point-green)",
              color: "var(--color-normal1)",
            }}
          >
            승인
          </Button>
          <Dialog
            open={approveOpen}
            onClose={handleApproveClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"가입을 승인하시겠습니까?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                대상 : {name} {position}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCheckApprove}>예</Button>
              <Button onClick={handleApproveClose} autoFocus>
                아니요
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={checkApprove}
            onClose={handleCheckClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"승인이 완료되었습니다."}
            </DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
              <Button onClick={handleCheckClose}>닫기</Button>
            </DialogActions>
          </Dialog>

          <button
            style={{
              padding: "1.2vh",
              borderRadius: "1vh",
              backgroundColor: "var(--color-normal8)",
              color: "var(--color-normal1)",
            }}
          >
            거절
          </button>
        </div>
      </div>
    );
  });
  return <div>{list}</div>;
}

export default ApprovalList;
