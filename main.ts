input.onButtonPressed(Button.A, function () {
    basic.showNumber(list[index])
})
input.onButtonPressed(Button.B, function () {
    for (let index2 = 0; index2 < list.length; index2++) {
        basic.showNumber(list[index])
        index += 1
    }
})
let list: number[] = []
let index = 0
index = 0
list = [randint(0, 10), randint(0, 10), randint(0, 10)]
