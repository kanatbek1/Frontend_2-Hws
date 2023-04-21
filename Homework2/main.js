var arr = [10, 20, 30, 50, 235, 3000]
for (var i = 0; i < arr.length; i++) {
    var firstNum = arr[i].toString()[0]
    if(firstNum ==='1' ||firstNum ==='2' || firstNum ==='5')
    console.log(arr[i])
}


for (var i = 20; i >= 0; i--){
    console.log(i)
}


var color = String(prompt("выберите цвет"))
switch (color) {
    case 'красный':
        alert("стоп")
        break
    case 'желтый':
        alert("готовность")
        break
    case 'зеленый':
        alert("вперед")
        break
    default:
        alert('выберите цвет например: красный, желтый или зеленый' )
        break
}


var arr = []
    for (var i = 0; i<=10; i++)
    arr.push(i)
    console.log(arr)
