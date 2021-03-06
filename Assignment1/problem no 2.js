// Given an array of integers nums and an integer target , return indices of the two numbers such that they add up to target .
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You need to write a function which takes array of numbers as input and return output.

// Ans.
	const dataSet = function (nums = [2, 7, 11, 15], target = 9) {
	    let array = new Map();
	    for (let i = 0; i < nums.length; i++) {
	        let num1 = nums[i];
	        let num2 = target - num1;
	        if (array.has(num2)) {
		   return [i, array.get(num2)]
	        }
	        array.set(num1, i)
	        console.log(dataSet[i]);
	    }
	};

