function check_palindrome(ele) {
	const size = ele.length;

	for (let i = 0; i < size / 2; i++) {
		if (ele[i] != ele[size - i - 1]) {
			return false;
		}
	}

	return true;
}

function is_amstrong(ele) {
	let num = ele;
	let num_dig = 0;

	while (num != 0) {
		num_dig++;

		num = Math.floor(num / 10);
	}

	num = ele;

	let sum = 0;

	while (num != 0) {
		sum += (num % 10) ** num_dig;

		num = Math.floor(num / 10);
	}

	return sum === ele ? true : false;
}

function is_perfect(ele) {
	let sum_div = 0;

	for (let i = 1; i < Math.sqrt(ele); i++) {
		if (ele % i === 0) {
			sum_div += i;

			if (i != 1) {
				sum_div += ele / i;
			}
		}
	}

	return sum_div === ele ? true : false;
}

let arr = [212, 5555, "aba", 496, 153];

arr.forEach((element) => {
	let ele = element;

	if (typeof ele === "number") {
		if (is_amstrong(ele)) {
			console.log(`${element} is a amstrong number`);
		}

		if (is_perfect(ele)) {
			console.log(`${element} is a perfect number`);
		}
		ele = String(ele);
	}
	if (check_palindrome(ele)) {
		console.log(`${element} is a palindrome`);
	}
});
