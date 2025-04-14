var romanToInt = function(s) {
    const symbolValues = new Map();
    symbolValues.set('I', 1);
    symbolValues.set('V', 5);
    symbolValues.set('X', 10);
    symbolValues.set('L', 50);
    symbolValues.set('C', 100);
    symbolValues.set('D', 500);
    symbolValues.set('M', 1000);
    let ans = 0;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
    const value = symbolValues.get(s[i]);
    if (i < n - 1 && value < symbolValues.get(s[i + 1])) {
    ans -= value;
    } else {
    ans += value;
    }
    }
    return ans;
    };
    var line;
    while(line = read_line()){
    print(romanToInt(line))
    }
    function swap(nums, i, j) {
let t = nums[j];
nums[j] = nums[i];
nums[i] = t;
}
function sortColors(nums) {
let ptr = 0;
for(let i = 0; i < nums.length; i++) {
if (nums[i] === 0) {
swap(nums, i, ptr);
++ptr;
}
}
for(let i = 0; i < nums.length; i++) {
if (nums[i] === 1) {
swap(nums, i, ptr);
++ptr;
}
}
return nums;
}
var line;
while(line = read_line()){
line = line.split(' ');
var lines =line.map(Number)
print(JSON.stringify(sortColors(lines)));
}
// function swap(nums, i, j) {
//     let t = nums[j];
//     nums[j] = nums[i];
//     nums[i] = t;
//     }
//     function sortColors(nums) {
//     let ptr = 0;
//     for(let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//     swap(nums, i, ptr);
//     ++ptr;
//     }
//     }
//     for(let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//     swap(nums, i, ptr);
//     ++ptr;
//     }
//     }
//     return nums;
//     }
//     var line;
//     while(line = read_line()){
//     line = line.split(' ');
//     var lines =line.map(Number)
//     print(JSON.stringify(sortColors(lines)));
//     }