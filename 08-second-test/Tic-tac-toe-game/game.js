const game = {
  xTurn: true,
  xState: [],
  oState: [],
  winningStates: [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
  ]
}

// 确保 DOM 完全加载后再绑定事件
document.addEventListener('DOMContentLoaded', () => {
  // 添加与单元格的交互事件
  document.addEventListener('click', event => {
    const target = event.target // 这里的target 是每个单元格
    // 检查获取到的元素是否包含 grid-cell disabled
    const isCell = target.classList.contains('grid-cell')
    const isDisabled = target.classList.contains('disabled')
    // 当表格有效并且没有被点击的时候
    if (isCell && !isDisabled) {
      const cellValue = target.dataset.value // 获取当前的data-value 当前点击的是第几个
      game.xTurn === true
        ? game.xState.push(cellValue)
        : game.oState.push(cellValue)

      target.classList.add('disabled')
      target.classList.add(game.xTurn ? 'x' : 'o')
      game.xTurn = !game.xTurn
      if (!document.querySelectorAll('.grid-cell:not(.disabled)').length) {
        const gameOverElement = document.querySelector('.game-over')
        if (gameOverElement) {
          gameOverElement.classList.add('visible')
          document.querySelector('.game-over-text').textContent = 'Draw!'
        }
      }
      // 遍历循环判断获胜的状态
      game.winningStates.forEach(winningState => {
        const xWins = winningState.every(state => game.xState.includes(state))
        const oWins = winningState.every(state => game.oState.includes(state))

        if (xWins || oWins) {
          document.querySelectorAll('.grid-cell').forEach(cell => cell.classList.add('disabled'))
          const gameOverElement = document.querySelector('.game-over')
          if (gameOverElement) {
            gameOverElement.classList.add('visible')
            document.querySelector('.game-over-text').textContent = xWins
              ? 'X wins!'
              : 'O wins!'
          }
        }
      })
    }
  })

  // 重置代码
  const restartButton = document.querySelector('.restart')
  if (restartButton) {
    restartButton.addEventListener("click", () => {
      const gameOverElement = document.querySelector('.game-over')
      if (gameOverElement) {
        gameOverElement.classList.remove('visible')
      }
      document.querySelectorAll('.grid-cell').forEach(cell => {
        cell.classList.remove('disabled', 'x', 'o')
      })
      game.xTurn = true
      game.xState = []
      game.oState = []
    })
  }
})