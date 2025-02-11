function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = (points / maxPoints) * 100;
  let message;
  if (percentage === 100) {
    message = "🥇Perfect!";
  } else if (percentage >= 90) {
    message = "🥈Great Job!";
  } else if (percentage >= 80) {
    message = "🥉Good!";
  } else if (percentage >= 60) {
    message = "🏅Not Bad!";
  } else if (percentage === 0) {
    message = "🤦‍♂️💩🤦‍♀️";
  } else {
    message = "🤷‍♂️ Better Luck Next Time! 🤷‍♀️";
  }
  return (
    <>
      <p className="result">
        <span>{message}</span> <br />
        You Scored <strong>{points}</strong> Out Of {maxPoints}. (
        {Math.ceil(percentage)}%)
      </p>

      <p className="highscore">(Your High Score: {highscore}Points)</p>

      <button className="btn btn-ui" onClick={() => dispatch({type: "reset"})}>
        <span>📝</span> Retake The Quiz!
      </button>
    </>
  );
}

export default FinishScreen;
