
const CountEverything = (props) => {
    const countEverythingMethod = () => {
        const arrOfText = props.myText.split(' ')
        arrOfText.forEach(() => props.updateCountEverything(el => el + 1))
    }
    const resetCountEverything = () => (props.updateCountEverything(0))

    return <div className="count-area">
        <button onClick={countEverythingMethod}>Count Everything</button>
        <span>{props.countEverything}</span>
        <button onClick={resetCountEverything}>Reset The Count</button>
    </div>
}

export default CountEverything;