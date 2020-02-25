var twoSum = function(nums, target) {
    let data = {};
    let num = comp = -1;
    for(let i=0,l = nums.length;i<l;i++){
        num = nums[i];
        comp = target-num
        if(data[comp]!=undefined) return [data[comp], i]
        data[num] = i;
    }
};
