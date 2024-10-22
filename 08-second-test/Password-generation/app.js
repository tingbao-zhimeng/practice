// 设置布尔值根据它们判断如何生成密码
const flags = {
  uppercase: false,
  numbers: false,
  symbols: false,
  length: 5
}
// 设置输入的标志
const selectors = {
  copy: 'copy',
  checkbox: 'checkbox',
  slider: 'slider',
  button: 'button',
  sliderValue: document.querySelector('.value'),
  input: document.querySelector('input[type="text"]'),
}
document.querySelector('#app').addEventListener('click', event => {
  // event.target.dataset 是一个特殊的元素，提供了对元素的data-* 属性的访问
  switch (event.target.dataset.jsSelector) {  // copy
    case selectors.copy:
      // 是一个dom 方法 当调用这个方法的时候意思是选中selectors.input 中input 元素中的文本
      selectors.input.select()
      // document.execCommand('copy') 已弃用
      navigator.clipboard.readText() // 读取剪切板内容
      navigator.clipboard.writeText(selectors.input.value) // 写入剪切板
      break
    case selectors.checkbox:
      flags[event.target.control.id] = !event.target.control.checked
      break
    case selectors.slider:
      //  const value=event.target.valueAsNumber 尝试将一个value转化为number
      const value = event.target.valueAsNumber
      console.log('value', value)
      selectors.sliderValue.innerText = value
      flags.length = value
      break
    case selectors.button:
      selectors.input.value = generatePassword()
      break
  }
})
const generatePassword = () => {
  const defaultcharacters = 'abcdefghijklmnopqrstuvwxyz'
  const characters = {
    uppercase: defaultcharacters.toUpperCase(),
    numbers: '0123456789',
    symbols: '~!@-#$'
  }
  const characterList = [
    defaultcharacters,
    ...flags.uppercase ? characters.uppercase : [],
    ...flags.numbers ? characters.numbers : [],
    ...flags.symbols ? characters.symbols : []
  ].join('')
  return Array.from({ length: flags.length }, () => Math.floor(Math.random() * characterList.length))
    .map(number => characterList[number]).join('')
}


