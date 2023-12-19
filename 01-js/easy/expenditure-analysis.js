/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = [];

  function doSomeWork(tranx) {
    let flag = false;
    for (let i = 0; i < ans.length; i++) {
      if (tranx.category === ans[i].category) {
        let obj = {
          category: ans[i].category,
          totalSpent: ans[i].totalSpent + tranx.price,
        };
        ans[i] = obj;
        flag = true;
        break;
      }
    }
    if (!flag) {
      ans.push({ category: tranx.category, totalSpent: tranx.price });
    }
  }
  transactions.map(doSomeWork);
  return ans;
}

module.exports = calculateTotalSpentByCategory;
