/*
Fans of The Wire will appreciate this one. 
For those that haven't seen the show, the Barksdale Organization
has a simple method for encoding telephone numbers exchanged 
via pagers: "Jump to the other side of the 5 on the keypad, and swap 5's and 0's."

Here's a keypad for visualization.

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
Detective, we're hot on their trail! 
We have a big pile of encoded messages here to use as evidence,
but it would take way too long to decode by hand.
Could you write a program to do this for us?

Write a funciton called decode(). Given an encoded string, return the actual phone number in string form. Don't worry about input validation, parenthesies, or hyphens.

*/
//convert nums from STRING to NUMBER
//could loop over them and look for 5's and 0's
//if i === 5|0 -> i = 5|0
//input STRING
//return STRING


const decode = string => {
    const stringArr = [...string]
    for (let i = 0; i < string.length; i+=1){
        switch(string[i]){
            case '5':
                stringArr[i] = '0'
                break;
            case '0':
                stringArr[i] = '5'
        }
    }
    return stringArr.join('')
}

console.log(decode("4103432323"))