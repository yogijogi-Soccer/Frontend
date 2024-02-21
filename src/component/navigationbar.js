import { Link } from "react-router-dom";
import "../index.css"
import Button from "./Button";

function navigationbar(){
    return(
        <div>
            <div className="navigationbar">
                <Link to="/" className="link">홈</Link>
                <Link to="/find" className="link">팀 찾기</Link>
                <Link to="/create" className="link">팀 생성</Link>
                <Link to="/login" className="link">로그인</Link>
            </div>
        </div>
    )
}

export default navigationbar;
