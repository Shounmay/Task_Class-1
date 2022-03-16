function hash(str) {
	let hash = "";

	for (let i = 0; i < str.length; i++) {
		if (str[i] >= "a" && str[i] <= "z") {
			hash += str[i].toUpperCase();
		} else if (str[i] >= "A" && str[i] <= "Z") {
			hash += str[i].toLowerCase();
		} else if (str[i] >= "0" && str[i] <= "9") {
			hash += String(str.charCodeAt(i));
		} else {
			//special char

			hash = hash + "$" + str[i];
		}
	}

	let now_ms = new Date().getTime();

	hash = hash + "_" + String(now_ms);

	return hash;
}

const str = "aBcd2345@#!^&";

const hash_code = hash(str);

console.log(`HashCode of ${str} is ${hash_code}`);
