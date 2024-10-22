{
  async function bb () {
    return '学习'
  }
  console.log(bb())
}
/**
 * async await 是基于promise 的语法糖
 * 
 * 
 * 
 */
{
  let bb = async () => {
    const url = "https://gorest.co.in/public/v1/users"
    try {
      let responses = await Promise.all(
        [fetch(`${url}/1/`), fetch(`${url}/2/`), fetch(`${url}/4/`)]
      )
      let jsons = responses.map(response => response.json())
      let values = await Promise.all(jsons)
      values.forEach(value => {
        console.log(value.data.name)
      })
    } catch (error) {
      console.log(error)
      // 可以在这里添加重试逻辑
    }
  }
  bb()
}