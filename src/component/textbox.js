import "./css/component.css"
import "../index.css"

function Button({children}){
    return (
        <input className="textbox" placeholder={children}>
        </input>
    )
    
}

export default Button;