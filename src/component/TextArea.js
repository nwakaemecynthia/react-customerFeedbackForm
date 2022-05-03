const TextArea = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <textarea 
            className="form-control"
            rows={props.rows}
            id={props.name}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            ></textarea>
        </div>
    )
}

export default TextArea;