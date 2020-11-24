function initArray(arrLength, min, max) {
	var arr = new Array(arrLength)
	return arr.fill(0).map((_) => {
		return parseInt(Math.random() * (max - min) + min)
	})
}

// console.log(initArray(10, 0, 10000))

function findMax(arr) {
	let max = arr[0]
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}
		return max
	}
}

function testFindMax() {
	for (let i = 10; i <= 20; i++) {
		var n = Math.pow(2, i)
    var arr = initArray(n, 0, 100000000)
    
		console.time(`2^${i}, ${arr.length}, time cost `)
		findMax(arr)
		console.timeEnd(`2^${i}, ${arr.length}, time cost `)
	}
}

testFindMax()
