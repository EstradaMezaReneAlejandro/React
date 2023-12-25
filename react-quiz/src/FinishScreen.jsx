export default function ({points, maxPossiblePoints, highscore, dispatch})
{
    const percentage = (points/maxPossiblePoints) * 100;
    return (
        <>
            <p className="result">You scrored {points} out of {maxPossiblePoints} ({Math.ceil(percentage)}%)</p>
            <p className="highscore">Highscore: {highscore} points</p>
            <button className="btn btn-ui" onClick={() => dispatch({type: "restart"})}>Restart Quiz</button>
        </>
    );
}