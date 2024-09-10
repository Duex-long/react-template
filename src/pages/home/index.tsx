import { useMemo, useState } from 'react'
import './index.less'

const Render_text = ({ val }: { val: boolean }) => {

  return <div>Render-Text</div>
}

const Render_btn = () => {
  console.log('render')
  const val = false
  const [count, setCount] = useState(1)
  const addCount = () => setCount(count + 1)
  const MemoRender = useMemo(() => Render_text, [])
  return (
    <>
      <MemoRender val={val} />
      <button onClick={addCount}> Click</button>
    </>
  )
}

const Home = () => {
  return (
    <div className="app-home">
      HOME
      <Render_btn />
    </div>
  )
}

export default Home
