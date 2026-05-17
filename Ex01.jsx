function Ex01() {

  const nums = [1, 2, 3, 4, 5]

  const dobrados = nums.map(n => n * 2)

  return (
    <div>
      <h1>Exercício 01</h1>

      <p>{JSON.stringify(dobrados)}</p>
    </div>
  )
}

export default Ex01