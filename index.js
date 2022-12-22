let buttons = document.getElementsByClassName("btn");
let x = true
let wincomb = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"],
]
let xArr = []
let oArr = []

for (let x of buttons) {
    x.addEventListener("click", num)
}


function num(e) {
    console.log("hello")
    console.log(e)

    let tarbtn = e.srcElement
    console.log(tarbtn)
    console.log(tarbtn.value)
    if (x == true) {
        tarbtn.innerHTML = "x"
        x = false;

        xArr.push(tarbtn.value)
        checkWin(xArr);
    }
    else {
        tarbtn.innerHTML = "0"
        x = true
        oArr.push(tarbtn.value)
        checkWin(oArr)
    }

    console.log(xArr, oArr)
}

function checkWin(arr) {
    console.log("asd", arr)

    for (let item of wincomb) {
        let existCount = 0;
        for (let val of item) {
            let exist = arr.includes(val);
            console.log({ exist }, { val }, { arr })
            if (exist === true) {
                existCount = existCount + 1
            }
        }
        if (existCount == 3) {
            alert("winner found")
        }
    }



}
// checkWin([1, 2, 3])