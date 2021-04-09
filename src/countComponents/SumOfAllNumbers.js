
const SumOfAllNumbers = (props) => {
    const addNumbers = () => {
        const arrOfText = props.myText.split(' ')
        const myArr = []
        arrOfText.filter(el => isNaN(el) !== true).forEach(item => myArr.push(parseInt(item)))
        const result = myArr.reduce((acc, val) => acc + val)
        props.updateMySum(result)
    }

    const resetSum = () => (props.updateMySum(0))

    return <div className="count-area">
        <button onClick={addNumbers}>Add All The Numbers</button>
        <span>{props.mySum}</span>
        <button onClick={resetSum}>Reset The Count</button>
    </div>
}

export default SumOfAllNumbers;