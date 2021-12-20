const Epoch = Date.now()
const day = new Date().getDay()
const fullDate = new Date()
const date = fullDate.getDate()
const month = fullDate.getMonth()
const year = fullDate.getFullYear()
const time = fullDate.getTime()
const hour = fullDate.getHours()
const min = fullDate.getMinutes()
const sec = fullDate.getSeconds()
const milliSeconds = fullDate.getUTCMilliseconds()
const showTodayDate = `${year} - ${month + 1} - ${date}`
const showTodayTime = hour + ":" + min + ":" + sec
const newModifiedDate = new Date('November 16, 2021 23:59:59')
fullDate.setHours(23, 59, 59); // here you are chaning all the hours from top even


console.log(Epoch) // Number of milliseconds since midnight on January 1st, 1970
console.log(day) // day coming by numbers 1-Mon 2-Tue 3-Wed 4-Thu 5-Fri 6-Sat 7-Sun
console.log(fullDate)
console.log(date)
console.log(month) // 0 for January and 11 for Dec, so remember to add +1
console.log(year)
console.log(time) // almost as same as epoch
console.log(hour)
console.log(min)
console.log(sec)
console.log(milliSeconds)
console.log(showTodayDate)
console.log(showTodayTime)
console.log(newModifiedDate)