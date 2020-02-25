var twoSum = function(nums, target) {
//     have a hashmap to keep track of required targets corresponding to each number
    let data = {};
    let num = comp = -1;
    for(let i=0,l = nums.length;i<l;i++){
        num = nums[i];
        comp = target-num
//         if required number is found in the hashmap, we found our value
        if(data[comp]!=undefined) return [data[comp], i]
//         else, save
        data[num] = i;
    }
};
