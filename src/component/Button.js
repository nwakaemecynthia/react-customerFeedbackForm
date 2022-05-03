const Button = (props) => {
    return (
        <div className="form-group">

            <button
                className="btn"
                style={{ backgroundColor: props.backgroundColor, margin: "10px", color: props.color }}
                onClick={props.onButtonClick}
            >
                {props.title}
            </button>
        </div>
    )
}

export default Button;