import "./css/Button.css"

function Button({children}){
    return (
        <button className="Button">
            {children}
        </button>
    )
    
}

export default Button;