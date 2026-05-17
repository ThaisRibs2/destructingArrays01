function Ex10() {

  const valores = [10, 20, 30, 40]

  const [primeiro, ...outros] = valores

  return (
    <div>
      <h1>Exercício 10</h1>

      <p>Primeiro: {primeiro}</p>

      <p>Outros: {JSON.stringify(outros)}</p>
    </div>
  )
}

export default Ex10