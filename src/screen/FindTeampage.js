//팀 목록 페이지
import Teamlist from "../component/teamlist";
import Textbox from "../component/textbox";

function FindTeampage(){
    return (
        <div>
            <div>팀 목록 페이지</div>
            <Teamlist />
            <Textbox>휴대폰 번호</Textbox>
        </div>

    )
    
}

export default FindTeampage;