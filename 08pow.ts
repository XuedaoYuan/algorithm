function pow(x: number, n: number) {
	if (n < 0) {
		return
	}
	if (n === 0) {
		return 1
	}
	var t: number = pow(x, Math.floor(n / 2))
	if (n % 2) {
		return x * t * t
	} else {
		return t * t
	}
}

console.log(pow(2, 5))
