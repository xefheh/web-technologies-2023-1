function getIndexesByTarget(nums, target) {
    const map = new Map()
    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if(map.has(diff)) {
            return [map.get(diff), i]
        }
        map.set(nums[i], i)
    }
    return []
}

const nums = [2, 7, 11, 15]
const target = 9
const indexes = getIndexesByTarget(nums, target)
console.log(indexes)
