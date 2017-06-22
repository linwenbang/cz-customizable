'use strict';

module.exports = {

  types: [
    {value: 'feat',     name: 'feat:     新功能（feature）'},
    {value: 'fix',      name: 'fix:      修补bug (如果使用 pha 的话，在 scope 中带上 fix 的hash id)'},
    {value: 'docs',     name: 'docs:     文档（documentation）'},
    {value: 'style',    name: 'style:    格式（不影响代码运行的变动）\n            (white-space, formatting, missing semi-colons, etc)'},
    {value: 'refactor', name: 'refactor: 重构（即不是新增功能，也不是修改bug的代码变动）'},
    {value: 'test',     name: 'test:     增加测试'},
    {value: 'chore',    name: 'chore:    构建过程或辅助工具的变动'},
    {value: 'conflict', name: 'conflict: 解决冲突'}
  ],

  scopes: [
    {name: 'accounts'},
    {name: 'admin'},
    {name: 'exampleScope'},    
    {name: 'changeMe'}
  ],

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [

      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */


  forceAuditors: true,
  allowCustomScopes: true
};
