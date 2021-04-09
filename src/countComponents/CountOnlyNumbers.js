
const CountOnlyNumbers = (props) => {
    const countOnlyNumbersMethod = () => {
        const arrOfText = props.myText.split(' ')
        arrOfText.filter(el => isNaN(el) !== true).forEach(() => props.updateCountOnlyNumbers(el => el + 1))
    }

    const resetCountOnlyNumbers = () => (props.updateCountOnlyNumbers(0))

    return <div className="count-area">
        <button onClick={countOnlyNumbersMethod}>Count Only Numbers</button>
        <span>{props.countOnlyNumbers}</span>
        <button onClick={resetCountOnlyNumbers}>Reset The Count</button>
    </div>
}

export default CountOnlyNumbers;