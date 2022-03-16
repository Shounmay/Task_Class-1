const arr = [10, 11, 12, 13, 14, 15, 16];

let temp_arr = arr.slice();

// finding kth-max

let k = 2;

let max_num = 0;

for (let i = 1; i <= k; i++) {
	max_num = Math.max(...temp_arr);

	temp_arr.splice(temp_arr.indexOf(max_num), 1);
}

console.log(`${k}th maximum number in the array is: ${max_num}`);
// kth-smallest number
temp_arr = arr.slice();

k = 3;

let min_num = 0;

for (let i = 1; i <= k; i++) {
	min_num = Math.min(...temp_arr);

	temp_arr.splice(temp_arr.indexOf(min_num), 1);
}

console.log(`${k}th minimum number in the array is: ${min_num}`);
