
const TextAreaInput = (props) => {
    const eventHandler = e => (props.updateMyText(e.target.value))

    return <div className='text-area'>
        <textarea
            value={props.myText}
            onChange={eventHandler}
            cols="70"
            rows="40">
        </textarea>
    </div>
}

export default TextAreaInput;