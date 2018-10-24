# eslint验证规则

## 安装

```javascript
npm i eslint-config-venus
```

# 使用

### base
```javascript
// .eslintrc
{
    "extends": "eslint-config-venus"
}
```

### vue
```javascript
// .eslintrc
{
    "extends": "eslint-config-venus/vue"
}
```

## change
update ``` 'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }] ```
