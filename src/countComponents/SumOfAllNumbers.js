
const SumOfAllNumbers = (props) => {
    const addNumbers = () => {
        props.updateMySum(
            props.myText.split(' ').filter(el => !isNaN(el)).map(item => parseInt(item)).reduce((acc, val) => acc + val)
        )
    }

    const resetSum = () => (props.updateMySum(0))

    return <div className="count-area">
        <button onClick={addNumbers}>Add All The Numbers</button>
        <span>{props.mySum}</span>
        <button onClick={resetSum}>Reset The Count</button>
    </div>
}

export default SumOfAllNumbers;
