var username, age, task;
username =prompt('Как вас зовут?')
age=prompt('Введите свой возраст')
task_1=prompt('Решите пример: 10 + 2 = ?');
task_2=prompt('Решите пример: 10 - 7 = ?');
task_3=prompt('Решите пример: 10 / 2 = ?');
task_4=prompt('Решите пример: 10 * 2 = ?');
task_5=prompt('Решите пример: 10 % 5 = ?');
alert('зайдите в консоль')
console.log('Ваc зовут: '+ username);
console.log('Ваc ваш возраст: '+ age);
console.log('1 пример: 10 + 2 = '+(10 + 2)+'. Ваш ответ:'+ task_1);
console.log('2 пример: 10 - 7 = '+(10 - 7)+'. Ваш ответ:'+ task_2);
console.log('3 пример: 10 / 2 = '+(10 / 2)+'. Ваш ответ:'+ task_3);
console.log('4 пример: 10 * 2 = '+(10 * 2)+'. Ваш ответ:'+ task_4);
console.log('5 пример: 10 % 5 = '+(10 % 5)+'. Ваш ответ:'+ task_5);

alert('введите 3 любых числа');
var X = +prompt('Введите 1 число');
var Y = +prompt('Введите 2 число');
var Z = +prompt('Введите 3 число');
var res = X + Y + Z;
res = res / 3;
alert('среднее арифметическое: '+res);