                    //Задача 1
 /*написать программу "конвертер чисел". Пользователь вводит число от 1 до 9,
 программа должна сконвертировать это число в римское. Например: 2 -> II, 5 -> V и т.д.*/
      
 
 let number = parseInt(prompt("Введите число для конвертации:  " ))
    
    switch (number) {
        case 1:
            result = "I"
            break;
        case 2:
            result = "II"
            break;
        case 3:
            result = "III"
            break;
        case 4:
            result = "IV"
            break;
        case 5:
            result = "V"
            break;
        case 6:
            result = "VI"
            break;
        case 7:
            result = "VII"
            break;
        case 8:
            result = "VIII"
            break;
        case 9:
            result = "IX"
            break;
        default:
             result =  "Введите числа только от 1 до 9"
    }
    alert(result)
   





                    //Задача 2
/* Написать программу FizzBuzz: программа должны вывести числа от 1 до 100 по следующим правилам. 
Если число делится на 3 то вывести Fizz, если число делится на 5 вывести Buzz, 
если делится и на 3 и на 5, то вывести FizzBuzz, иначе вывести просто число.
 Например: 1 2 Fizz 4 Buzz и т.д. */
 
 let num = prompt(`Ввести число:  `);
   for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}


                    //Задача 3
/* запросить у пользователя число от 2 до 10 и с помощью цикла вывести таблицу умножения
 для этого числа в таком виде(я выбрал 4 для примера):
4 × 1 = 4
4 × 2 = 8
4 × 3 = 12
....
4 × 10 = 40
*/
    
let n = Number(prompt("Введите число от 2 до 10"));
while (n < 2,  n > 10 , isNaN(n)) {
    n = Number(prompt("Введите число от 2 до 10"));
}

for (let i = 1; i <= 10; i++) {
    console.log(n + " × " + i + " = " + n * i);
}




                     //Задача 4
/* Написать программу которая запрашивает число у пользователя и выводит название планеты солнечной системы
 по порядковому номеру. Например: 1 -> Меркурий, 3 -> Земля, 9 -> Плутон. 
 Очередность планет если точно не знаете, то гуглите)  */

  let planets = parseInt(prompt('Введите число: '))
 
    
    switch (planets) {
        case 1:
            alert = "Mercury"
            break;
        case 2:
            result = "Venus"
            break;
        case 3:
            result = "Earth"
            break;
        case 4:
            result = "Mars"
            break;
        case 5:
            result = "Jupiter"
            break;
        case 6:
            result = "Saturn"
            break;
        case 7:
            result = "Uranium"
            break;
        case 8:
            result = "Neptune"
            break;
        case 9:
            result = "Pluto"
            break;
            default: "Неизвестная планета"
               
    } alert(result)
        


  






 