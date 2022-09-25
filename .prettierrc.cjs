module.exports = {
  // 最大行长
  printWidth: 120,
  // 末尾需要有逗号
  trailingComma: 'es5',
  // 指定每个缩进级别的空格数
  tabWidth: 2,
  // 使用制表符缩进
  useTabs: false,
  // 在语句的末尾追加分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 仅在需要时在对象属性周围添加引号
  quoteProps: 'as-needed',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // 在 JSX 中使用单引号而不是双引号
  jsxSingleQuote: false,
  // JSX 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 HTML 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // Vue 文件中的 <script> 和 <style> 内不用缩进
  vueIndentScriptAndStyle: false,
  // 换行符使用 lf
  endOfLine: 'lf',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false
}
