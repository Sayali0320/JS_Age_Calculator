const userInput = document.getElementById("date");//entering user input
userInput.max = new Date().toISOString().split("T")[0];///disable future dates
let result = document.getElementById("result");//for showing results

//function for calculating age
function calculateAge(){
    let birthDate = new Date(userInput.value);//whenever we select date in input box it will store here in the birthDate

    let d1 = birthDate.getDate();//store day
    let m1 = birthDate.getMonth() + 1;//store month..month is start from the 0 thats why here we add + 1
    let y1 = birthDate.getFullYear();//store year

    let today = new Date();//current date for calculating the diff

    let d2 = today.getDate();//current date
    let m2 = today.getMonth() + 1;//current month
    let y2 = today.getFullYear();//current year

    let d3, m3, y3;//here we store the difference of the day, month, and year

    y3 = y2 - y1;// year difference

    if(m2 >= m1){//when todays month is greater than and equals to birth month
        m3 = m2 - m1;//shows month difference
    }
    else{
        y3--;//(y3 - 1) decrease the year if the above condition is not true 
        m3 = 12 + m2 - m1;//add the 12(months) in the difference of todays month and birth month
    }

    if(d2 >= d1){
        d3 = d2 - d1;//shows the day difference
    }
    else{
        m3--;//if todays date is less than and not euals to birthdate then decrease the month diff
        d3 = getDaysInMonth(y1,m1) + d2 - d1;//adds the no of days of birthmonth in diff of days
    }

    if(m3 < 0){//if month difference is negative
        m3 = 11;//assign month diff 11
        y3--;//decrease the year diff
    }
    
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;

}
//function for calculating no of days in month
function getDaysInMonth(year,month){
    return new Date(year, month, 0).getDate();//returns the last day of that month...give us the number of days in that month
}