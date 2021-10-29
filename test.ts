// 静态类型语言：在编译阶段确定所有变量的类型
// 动态类型语言：在执行阶段确定所有变量的类型

// function sayHello(person: string) {
//   if (typeof person === 'string') {
//     return 'Hello, ' + person
//   } else {
//     throw new Error('person is not a string')
//   }
// }

// let user = 'tom'
// console.log(sayHello(user))

// let decLiteral: number = 6
// let hexLiteral: number = 0xf00d
// // ES6 中的二进制表示法
// let binaryLiteral: number = 0b1010
// // ES6 中的八进制表示法
// let octalLiteral: number = 0o744
// let notANumber: number = NaN
// let infinityNumber: number = Infinity

// let n: number = undefined

// 只能访问此联合类型的所有类型里共有的属性或方法：
// interface Person {
//   name: string;
//   age?: number;
// }

// let tom: Person = {
//   name: 'Tom'
// };

// 赋值的时候，变量的形状必须和接口的形状保持一致。
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
// interface Person {
//   name: string;
//   age?: string;
//   [propName: string]: any;
// }

// let tom: Person = {
//   name: 'Tom',
//   age: '123',
//   gender: 'pg'
// };

// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候： readonly


function buildName(firstName: string = 'Tom', lastName: string) {
  return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');
