function Ex05() {

  const pessoa = {
    nome: "Ana",
    idade: 25
  }

  const { nome } = pessoa

  return (
    <div>
      <h1>Exercício 05</h1>

      <p>{nome}</p>
    </div>
  )
}

export default Ex05