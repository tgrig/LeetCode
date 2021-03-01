/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const maxCount = candyType.length / 2;
    const uniqueCandyTypesCount = new Set(candyType).size;
    
    if (uniqueCandyTypesCount < maxCount){
        return uniqueCandyTypesCount
    }

    return maxCount
};

