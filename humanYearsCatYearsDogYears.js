/*
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

const humanYearsCatYearsDogYears = humanYears => {    
    const arr = [humanYears,0,0]
    for (let i = 1; i <= humanYears; i++){
        switch (i){
            case 1:
                arr[1] += 15
                arr[2] += 15
                break;
            case 2:
                arr[1] += 9
                arr[2] += 9
                break;
            default:
                arr[1] += 4
                arr[2] += 5
        }
    }
    return humanYears < 1 ? 'Invalid age' : arr
}
console.log(humanYearsCatYearsDogYears(0))
console.log(humanYearsCatYearsDogYears(2))
console.log(humanYearsCatYearsDogYears(10))