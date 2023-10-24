function createBirthday(name, month, day) {
    var birthday = {
        name: name,
        month: month,
        day: day
    }
    return birthday
}

function celebrateBirthday(friendBirthday) {
    return `Today is ${friendBirthday.month}/${friendBirthday.day}! Happy birthday, ${friendBirthday.name}!`
}

//birthdays is an array of objects
//return the length of a new array
function countBirthdays(birthdays, month) {
    var count = [];
    for (var i = 0; i < birthdays.length; i++){
        if (birthdays[i].month === month) {
            count.push(birthdays[i])
        }
    }
    return count.length
}

module.exports = { 
    createBirthday,
    celebrateBirthday,
    countBirthdays
 };