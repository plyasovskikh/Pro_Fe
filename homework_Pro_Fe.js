// ДЗ:
// 1. Напишите функцию, которая принимает в качестве аргумента число n (отрицательное число) и выводит в консоль все числа n до 0
// 2. Напишите функцию, принимающую 2 числа - n, m. Известно, что n всегда больше m. Функция выводит в консоль все числа от n до m
// 3. Напишите функцию, которая принимает в качестве аргумента число n (отрицательное или положительное число) и выводит в консоль все числа от 0 до n
// 4. Напишите функцию sumNumbers, которая принимает число n и возвращает сумму всех чисел от 1 до n.
// *5. Напишите функцию factorial, которая принимает число n и возвращает факториал этого числа (произведение всех целых чисел от 1 до n).
// *6. Напишите функцию, принимающую 2 числа - n, m. Возможны 3 сценария:
  // - n > m
  // - m > n
  // - m === n 
// Функция выводит в консоль все нечетные числа от m до n

// 1. Напишите функцию, которая принимает в качестве аргумента число n (отрицательное число) и выводит в консоль все числа n до 0

// const showNumbers = (n) =>{
//         for(let i = n; i <= 0; i++){
//             console.log(i)
//         }
//     }
//     showNumbers(-9);

// 2. Напишите функцию, принимающую 2 числа - n, m. Известно, что n всегда больше m. Функция выводит в консоль все числа от n до m

// const showNumbers = (n,m) => {
//     for(let i = n; i >= m; i--){
//         console.log(i)
//     }
// }

// showNumbers(9,5);

// 3. Напишите функцию, которая принимает в качестве аргумента число n (отрицательное или положительное число) и выводит в консоль все числа от 0 до n

// const showNumbers1 = n =>{
//     if (n >= 0){
//         for (let i = 0; i <= n; i++){
//             console.log(i);
//         }
//     }else{
//         for (let i = 0; i >= n; i--){
//             console.log(i);
//         }
//     }
// }

// showNumbers1 (8)

// 4. Напишите функцию sumNumbers, которая принимает число n и возвращает сумму всех чисел от 1 до n.

// const sumNumbers = n =>{
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum +=i;
//     }
//     console.log(sum);
// }

// sumNumbers(5)

// *5. Напишите функцию factorial, которая принимает число n и возвращает факториал этого числа (произведение всех целых чисел от 1 до n).

// const factorial = n =>{
//     if(n === 0 || n === 1){
//         console.log('Факториал равен самому себе');
//     }
//     let result = 1;
//     for(let i = 2; i <= n; i++){
//         result *=i;
//     }
//     console.log(result);

// }

// factorial (5)

// *6. Напишите функцию, принимающую 2 числа - n, m. Возможны 3 сценария:
  // - n > m
  // - m > n
  // - m === n 
// Функция выводит в консоль все нечетные числа от m до n

const showNumbers = (n,m) =>{
    if (n < 0 || m > n) {
        for (let i = m; i >= n; i--){
            if( i % 2 !== 0){
                console.log(i)
            }
        }
    }else if (m < 0 || n > m){
        for(let i = m; i <= n; i++){
            if( i % 2 !== 0){
                console.log(i)
            }
        }

    }else if( m === n){
        for(let i = m; i <= n; i++){
            if( i % 2 !== 0){
                console.log(i)
            }
        }
    }
}
showNumbers(10,5)

































