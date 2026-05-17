function Ex07() {

  const numeros = [10, 20, 30]

  const paraString = numeros.map(String)

  return (
    <div>
      <h1>Exercício 07</h1>

      <p>{JSON.stringify(paraString)}</p>
    </div>
  )
}

export default Ex07