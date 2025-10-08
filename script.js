let nums = [1, 2, 3, 4];
function manipulateData (arr){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(arr);
		}, 3000);
	})
	.then((arr) => {
		let filtered = arr.filter((e) => {
			return e % 2 === 0;
		});

		setTimeout(() => {
			document.getElementById('output').textContent = filtered.join(',');
		}, 1000);

		return filtered;
	})
	.then((filteredArr) => {
		let multiplied = filteredArr.map((e) => {
			return e * 2;
		});

		setTimeout(() => {
			document.getElementById('output').textContent = multiplied.join(',');
		}, 2000);

		return multiplied;
	});
}

manipulateData(nums);