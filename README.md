# typescript

## typescript 的自我学习笔记

ES6 数据类型：Boolean、Number、Sting、Array、Function、Object、Symbol、undefined、null
Typescript: Boolean、Number、Sting、Array、Function、Object、Symbol、undefined、null
voild、any、never、元祖、枚举、高级类型

语法：(变量、函数):type

## 任意值

  声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
  如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查。

## 联合类型
  当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法。

## 对象的类型 -- 接口

  赋值的时候，变量的形状必须和接口的形状保持一致。
  可选属性： ?
  任意书写： [propName: string]: any
  只读属性： readonly
  一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集。
  只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候。

## 函数的类型

  输入多余的（或者少于要求的）参数，是不被允许的。
  可选参数后面不允许再出现必需参数。
  在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

## 类型断言

  ``` js
    值 as 类型
    
    <类型>值
  ```

  - 联合类型可以被断言为其中一个类型
  - 父类可以被断言为子类
  - 任何类型都可以被断言为 any
  - any 可以被断言为任何类型

## 类型兼容性

当一个类型 Y 可以被赋值给另一个类型 X 时，可以说类型 X 兼容类型 Y

x 兼容 y: x(目标类型) = y(源类型)

口诀：
  结构之间兼容：成员少的兼容成员多的
  函数之间兼容：参数多的兼容参数少的

1. 接口

   成员少的可以兼容成员多的

2. 函数

   2.1. 个数

   - 多的可以兼容少的
   - 固有参数 剩余参数 可选参数
   - 可选参数 不兼容 不兼容
   - 剩余参数 兼容 兼容
   - 固有参数 兼容 兼容

   2.2. 参数类型

   - 多的可以兼容少的

   2.3. 函数返回值

   - 少的可以兼容多的

   2.4. 函数重载

   - 目标函数参数个数多于或者等于源函数参数个数 

3. 枚举

  - 数字和枚举可以相互兼容，枚举与枚举间不兼容 
  
4. 类

  - 类的构造函数和静态成员不参与比较，当类中有私有成员时，两个类不兼容，类与子类可以 

5. 泛型

   5.1. 泛型接口

     - 在两个泛型参数只有类型不相同时，只有在泛型参数使用时才影响

   5.2. 泛型函数


## 类型保护

  TypeScript 能够在特定的区块中保证变量属于某种确定的类型。
  可以在此区块中放心地引用此类型的属性，或者调用此类型的方法

## 声明文件

  - declare var 声明全局变量
  - declare function 声明全局方法
  - declare class 声明全局类
  - declare enum 声明全局枚举类型
  - declare namespace 声明（含有子属性的）全局对象
  - interface 和 type 声明全局类型
  - export 导出变量
  - export namespace 导出（含有子属性的）对象
  - export default ES6 默认导出
  - export = commonjs 导出模块
  - export as namespace UMD 库声明全局变量
  - declare global 扩展全局变量
  - declare module 扩展模块
  - /// <reference /> 三斜线指令

## 类

### 类的概念

  - 类（Class）：定义了一件事物的抽象特点，包含它的属性和方法
  - 对象（Object）：类的实例，通过 new 生成
  - 面向对象（OOP）的三大特性：封装、继承、多态
  - 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
  - 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
  - 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
  - 存取器（getter & setter）：用以改变属性的读取和赋值行为
  - 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
  - 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
  - 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口

### ES6 中类的用法

  - class 定义类
  - constructor 定义构造函数
  - new 生成新实例时自动调用构造函数
  - extend 关键字实现继承
  - super 子类使用，来调用父类的构造函数和方法
  - getter、setter 改变属性的赋值和读取行为
  - static 静态方法

### TypeScript 中类的使用

  - public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
  - private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
  - protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
  - readonly 只读属性关键字
  - abstract 定义抽象类和其中的抽象方法；抽象类不允许被实例化，抽象类中的抽象方法必须被子类实现

## 泛型

  泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

## 合并

  如果定义了两个相同名字的函数、接口或类，那么他们会合并成一个类型

### 函数

  重载定义多个函数类型

### 接口、类

  接口中的属性在合并时会简单的合并到一个接口中
  合并的属性的类型必须是唯一的
  

## tsconfig

```json
{
  "compilerOptions": {
      // "incremental": true,                // 增量编译
      // "tsBuildInfoFile": "./buildFile",   // 增量编译文件的存储位置
      // "diagnostics": true,                // 打印诊断信息

      // "target": "es5",           // 目标语言的版本
      // "module": "commonjs",      // 生成代码的模块标准
      // "outFile": "./app.js",     // 将多个相互依赖的文件生成一个文件，可以用在 AMD 模块中

      // "lib": [],                 // TS 需要引用的库，即声明文件，es5 默认 "dom", "es5", "scripthost"

      // "allowJs": true,           // 允许编译 JS 文件（js、jsx）
      // "checkJs": true,           // 允许在 JS 文件中报错，通常与 allowJS 一起使用
      // "outDir": "./out",         // 指定输出目录
      // "rootDir": "./",           // 指定输入文件目录（用于输出）

      // "declaration": true,         // 生成声明文件
      // "declarationDir": "./d",     // 声明文件的路径
      // "emitDeclarationOnly": true, // 只生成声明文件
      // "sourceMap": true,           // 生成目标文件的 sourceMap
      // "inlineSourceMap": true,     // 生成目标文件的 inline sourceMap
      // "declarationMap": true,      // 生成声明文件的 sourceMap
      // "typeRoots": [],             // 声明文件目录，默认 node_modules/@types
      // "types": [],                 // 声明文件包

      // "removeComments": true,    // 删除注释

      // "noEmit": true,            // 不输出文件
      // "noEmitOnError": true,     // 发生错误时不输出文件

      // "noEmitHelpers": true,     // 不生成 helper 函数，需额外安装 ts-helpers
      // "importHelpers": true,     // 通过 tslib 引入 helper 函数，文件必须是模块

      // "downlevelIteration": true,    // 降级遍历器的实现（es3/5）

      // "strict": true,                        // 开启所有严格的类型检查
      // "alwaysStrict": false,                 // 在代码中注入 "use strict";
      // "noImplicitAny": false,                // 不允许隐式的 any 类型
      // "strictNullChecks": false,             // 不允许把 null、undefined 赋值给其他类型变量
      // "strictFunctionTypes": false           // 不允许函数参数双向协变
      // "strictPropertyInitialization": false, // 类的实例属性必须初始化
      // "strictBindCallApply": false,          // 严格的 bind/call/apply 检查
      // "noImplicitThis": false,               // 不允许 this 有隐式的 any 类型

      // "noUnusedLocals": true,                // 检查只声明，未使用的局部变量
      // "noUnusedParameters": true,            // 检查未使用的函数参数
      // "noFallthroughCasesInSwitch": true,    // 防止 switch 语句贯穿
      // "noImplicitReturns": true,             // 每个分支都要有返回值

      // "esModuleInterop": true,               // 允许 export = 导出，由import from 导入
      // "allowUmdGlobalAccess": true,          // 允许在模块中访问 UMD 全局变量
      // "moduleResolution": "node",            // 模块解析策略
      // "baseUrl": "./",                       // 解析非相对模块的基地址
      // "paths": {                             // 路径映射，相对于 baseUrl
      //   "jquery": ["node_modules/jquery/dist/jquery.slim.min.js"]
      // },
      // "rootDirs": ["src", "out"],            // 将多个目录放在一个虚拟目录下，用于运行时

      // "listEmittedFiles": true,        // 打印输出的文件
      // "listFiles": true,               // 打印编译的文件（包括引用的声明文件）
  }
}
```