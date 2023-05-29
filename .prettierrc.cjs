module.exports = {
  //箭头函数参数括号 默认avoid 可选 avoid| always //avoid 能省略括号的时候就省略 例如x => x // always 总是有括号
  arrowParens: 'avoid',
  // 把'>' 是否单独放一行
  bracketSameLine: false,
  //括号空格 在对象，数组括号与文字之间加空格 '{ foo: bar }'
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  //设置统一的行结尾样式 lf|crlf|cr|auto
  endOfLine: 'auto',
  //HTML空白灵敏度
  htmlWhitespaceSensitivity: 'css',
  //在文件的顶部插入一个 @format的特殊注释，以表明改文件已经被Prettier格式化过了 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  //在JSX中使用单引号
  jsxSingleQuote: false,
  //单行代码的最大宽度 指定代码换行的行长度。单行代码宽度超过指定的最大宽度，将会换行
  printWidth: 100,
  //文本样式进行折行 always - 当超出print width（上面有这个参数）时就折行 never - 不折行 perserve - 按照文件原样折行
  proseWrap: 'never',
  //仅在需要时在对象属性周围添加引号 “consistent” - 如果对象中的至少一个属性需要加引号，就对所有属性加引号 “preserve” - 按照对象属性中引号的输入用法
  quoteProps: 'as-needed',
  //严格按照文件顶部的一些特殊的注释格式化代码
  requirePragma: false,
  //在语句末尾添加分号
  semi: false,
  //使用单引号而非双引号
  singleQuote: true,
  //设置代码每一个水平缩进的空格数
  tabWidth: 2,
  //在任何可能的多行中输入尾逗号
  trailingComma: 'es5',
  //使用tab（制表位）缩进而非空格
  useTabs: false,
  //缩进Vue文件中 false - 不缩进Vue文件中的脚本和样式标签 true - 缩进Vue文件中的脚本和样式标签
  vueIndentScriptAndStyle: false
}
