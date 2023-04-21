 var age = Number(prompt("Оцените качество сервиса"))

if (age >=6  &&  age <= 10 ) {
    alert("Спасибо за оценку")
} else if (age >= 1 && age <= 4) {
     alert("Мы работаем над улучшением сервиса")
} else if (age ==5){
    alert("Спасибо за оценку")
}else if (age > 10){
    alert("Нельзя вводить число больше 10")
} else {
    alert("Нужно ввести цифры")
 }


 var age = Number(prompt("Оцените качество сервиса"))
 switch (age){
     case 1:
     case 2:
     case 3:
     case 4:
         alert("мы работаем над улудшением")
         break
     case 5:
     case 6:
     case 7:
     case 8:
     case 9:
     case 10:
         alert("спасибо за оценку")
         break
     default:
         alert("нужно ввести цифры или число меньше 10")
         break
}



var lang = prompt("Выберите язык ENG или RUS")

 if (lang === "ENG"){
     var mass = ['Monday',' Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
     console.log(mass)
 } else if (lang === "RUS"){
     var mass = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье']
     console.log(mass)
 }else {
     console.log(Error)
 }