import { useState, useEffect } from 'react'
import '../components/mathTrainer.css'

export default function MathTrainer () {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [answer, setAnswer] = useState('')
  const [result, setResult] = useState(null)

  const generateExample = () => {
    setA(Math.floor(Math.random() * 1000))
    setB(Math.floor(Math.random() * 100))
    setAnswer('')
    setResult(null)
  }

  useEffect(() => {
    generateExample()
  }, [])

  const check = () => {
    const correct = a + b
    setResult(Number(answer) === correct)
  }

  return (
    <div className='trainer-container'>
      <h2>Тренажёр сложения</h2>
      <p className='example'>
        {a} + {b} = ?
      </p>
      <input
        type='number'
        className='answer-input'
        value={answer}
        onChange={e => setAnswer(e.target.value)}
      />
      <button onClick={check} className='btn btn-primary'>
        Проверить
      </button>
      <button onClick={generateExample} className='btn btn-secondary'>
        Новый пример
      </button>

      {result !== null && (
        <p className={result ? 'result success' : 'result error'}>
          {result ? 'Верно!' : 'Ошибка!'}
        </p>
      )}
    </div>
  )
}
