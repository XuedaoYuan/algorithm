function isPalindrome(s: string): boolean {
	let i = 0
	let j = s.length - 1
	let flag = true
	while (i <= j) {
		let prev = s[i]
		if (!isAlphanumeric(prev)) {
			i++
			continue
		}
		let suff = s[j]
		if (!isAlphanumeric(suff)) {
			j--
			continue
		}
		if (toLowerCase(prev) === toLowerCase(suff)) {
      i++
      j--
		} else {
			console.log(prev, suff, i)
			console.log('suff', suff, j)
			flag = false
			break
		}
	}
	return flag
}

function isAlphanumeric(char: string): boolean {
	let reg = /[A-Za-z0-9]{1}/
	return reg.test(char)
}

function toLowerCase(char: string) {
	return char.toLowerCase()
}

console.log(isPalindrome('   Aaman, a plan, a canal: Panama----'))
