// Given an array nums containing n distinct numbers in the range [0, n] , 
// return the only number in the range that is missing from the array.



// Ans.
	const nums = [3, 0, 1, 2, 4, 5, 6, 7, 9];
	const sortedNums = nums.sort();

	for (let i = 0; i <= sortedNums.length - 1; i++) {
	  if (sortedNums[i] != i) {
	  // for the missing value
	    console.log("the value of"+i+"is missing"); 
	    
	  }
	};


