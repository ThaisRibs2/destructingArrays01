function Ex04() {

  let a = 1
  let b = 2

  ;[a, b] = [b, a]

  return (
    <div>
      <h1>Exercício 04</h1>

      <p>a = {a}</p>
      <p>b = {b}</p>
    </div>
  )
}

export default Ex04