function Ex06() {

  const itens = ["Caderno", "Lápis", "Borracha"]

  const lista = itens.map(
    (valor, i) => `Índice ${i}: Valor ${valor}`
  )

  return (
    <div>
      <h1>Exercício 06</h1>

      <p>{JSON.stringify(lista)}</p>
    </div>
  )
}

export default Ex06