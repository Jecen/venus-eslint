module.exports = {
  'extends': [
    './.eslintrc.js',
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': 'babel-eslint',
    'sourceType': 'module',
    'allowImportExportEverywhere': true,
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    // 禁止计算属性包含异步方法
    'vue/no-async-in-computed-properties': 'error',
    // 静止重复的key
    'vue/no-dupe-keys': 'error',
    // 禁止重复的属性
    'vue/no-duplicate-attributes': 'error',
    // 禁止模板渲染错误
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    // 禁止覆盖保留字
    'vue/no-reserved-keys': 'error',
    // data必须用函数返回
    // @fix
    'vue/no-shared-component-data': 'error',
    // 禁止在计算属性中修改data
    'vue/no-side-effects-in-computed-properties': 'error',
    // 禁止在template标签上添加key
    // @off 业务需要
    'vue/no-template-key': 'off',
    // 禁止在textarea标签中包裹输出变量 <textarea v-modal='aa'></textarea>
    'vue/no-textarea-mustache': 'error',
    // 禁止未使用的变量
    'vue/no-unused-vars': 'error',
    // <component> 必须有 v-bind:is
    'vue/require-component-is': 'error',
    // render函数必须有返回值
    'vue/require-render-return': 'error',
    // v-for必须指定key
    'vue/require-v-for-key': 'error',
    // prop默认值类型必须和type相同
    'vue/require-valid-default-prop': 'error',
    // 计算属性必须有返回值
    'vue/return-in-computed-property': 'error',
    // template模板只能有一个根元素
    'vue/valid-template-root': 'error',
    // v-bind必须合法
    'vue/valid-v-bind': 'error',
    // v-cload必须合法
    'vue/valid-v-cloak': 'error',
    // v-else-if必须合法
    'vue/valid-v-else-if': 'error',
    // v-else必须合法
    'vue/valid-v-else': 'error',
    // v-for必须合法
    'vue/valid-v-for': 'error',
    // v-html必须合法
    'vue/valid-v-html': 'error',
    // v-if必须合法
    'vue/valid-v-if': 'error',
    // v-model必须合法
    'vue/valid-v-model': 'error',
    // v-on必须合法
    'vue/valid-v-on': 'error',
    // v-once必须合法
    'vue/valid-v-once': 'error',
    // v-pre必须合法
    'vue/valid-v-pre': 'error',
    // v-show必须合法
    'vue/valid-v-show': 'error',
    // v-text必须合法
    'vue/valid-v-text': 'error',

    // 指定组件属性风格
    // @off 没必要
    'vue/attribute-hyphenation': 'off',
    // 标签要合法闭合
    // @fix
    'vue/html-end-tags': 'off',
    // template标签中的html缩进要统一合法
    //!TODO @off lint有bug
    'vue/html-indent': [
      'off',
      2,
      {
        attribute: 1,
        closeBracket: 1,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    // 没内容时，组件必须自闭合
    // @fix
    'vue/html-self-closing': 'error',
    // 每行最多3个属性，超过三个必须换行
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    // 数据显示绑定花括号左右禁止空格
    // @fix
    'vue/mustache-interpolation-spacing': [
      'error',
      'never',
    ],
    // 组件name风格必须为大驼峰式
    // @fix
    'vue/name-property-casing': [
      'error',
      'PascalCase',
    ],
    // 禁止多个连续空格
    'vue/no-multi-spaces': 'error',
    // prop必须有类型限制
    'vue/require-prop-types': 'error',
    // 指定v-bind格式
    // @off 没必要
    'vue/v-bind-style': 'off',
    // 指定v-on格式
    // @off 没必要
    'vue/v-on-style': 'off',
    // html标签属性必须使用单引号
    'vue/html-quotes': [
      'error',
      'double',
    ],
    // 禁止出现难以理解的 v-if 和 v-for
    'vue/no-confusing-v-for-v-if': 'error',
    // 组件属性按属性出现
    /*
      "el",
      "name",
      "parent",
      "functional",
      ["delimiters", "comments"],
      ["components", "directives", "filters"],
      "extends",
      "mixins",
      "inheritAttrs",
      "model",
      ["props", "propsData"],
      "data",
      "computed",
      "watch",
      "LIFECYCLE_HOOKS",
      "methods",
      ["template", "render"],
      "renderError"
    */
    'vue/order-in-components': 'error',
    // template中禁止出现this
    'vue/this-in-template': 'error',
    // 模板反小括号禁止单独换行
    // @fix
    'vue/html-closing-bracket-newline': 'error',
    // good: <div></div> <img src='src' />
    // bad: <div ></div> <img src='src'/>
    // @fix
    'vue/html-closing-bracket-spacing': 'error',
  },
}