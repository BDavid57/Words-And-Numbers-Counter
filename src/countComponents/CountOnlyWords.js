
const CountOnlyWords = (props) => {
    const countOnlyWordsMethod = () => {
        const arrOfText = props.myText.split(' ')
        arrOfText.filter(el => isNaN(el)).forEach(() => props.updateCountOnlyWords(el => el + 1))
    }
    const resetCountOnlyWords = () => (props.updateCountOnlyWords(0))

    return <div className="count-area">
        <button onClick={countOnlyWordsMethod}>Count Only Words</button>
        <span>{props.countOnlyWords}</span>
        <button onClick={resetCountOnlyWords}>Reset The Count</button>
    </div>
}

export default CountOnlyWords;