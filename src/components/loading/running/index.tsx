import './index.less'
const Runner = () => {
  return (
    <div className="loading-runner">
      <div className="loading-runner-container">
        <div className="runnder-wrapper">
          <div className="runner-entity runner-header" />
          <div className="runner-entity runner-body">
            <div className="runner-entity runner-hand left"></div>
            <div className="runner-entity runner-hand right"></div>
            <div className="runner-entity runner-leg left"></div>
            <div className="runner-entity runner-leg right"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Runner
