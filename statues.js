function solution(statues) {
    let sortedStatues = statues.sort((a,b)=>a-b);
    let result = 0;
    for (let i=0; i < sortedStatues.length-1; i++) {        
        if (sortedStatues[i]+1 !== sortedStatues[i+1]) {
            sortedStatues.splice(i+1,0,sortedStatues[i]+1);
            result++;
        }
    }
    return result;
}

console.log(solution([6,2,3,8])===3)
console.log(solution([0,3])===2)
console.log(solution([3,6])===2)
    