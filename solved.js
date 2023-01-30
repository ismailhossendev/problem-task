const rotateLeft = (arr, num) => {
    for (let i = 0; i < num; i++) {
        arr.push(arr.shift())
    }
    return arr
}

const output = rotateLeft([1, 2, 3, 4, 5], 4)
console.log(output)
