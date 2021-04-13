
const TextAreaInput = (props) => {
    return <div className='text-area'>
        <textarea
            value={props.myText}
            onChange={e => (props.updateMyText(e.target.value))}
            cols="70"
            rows="40">
        </textarea>
    </div>
}

export default TextAreaInput;