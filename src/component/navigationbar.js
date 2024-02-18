import { Link } from "react-router-dom";
import "../index.css"

function navigationbar(){
    return(
        <div>
            <div className="navigationbar">
                <Link to="/">홈</Link>
                <Link to="/find">팀 찾기</Link>
                <Link to="/create">팀 생성</Link>
                <Link to="/login">로그인</Link>
            </div>
        </div>
    )
}

export default navigationbar;