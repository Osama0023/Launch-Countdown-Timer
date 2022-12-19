const countdown = () => {
    const date = new Date ("December 23 , 2022 00:00:00").getTime();
    const now = new Date ();
    const Differnce = date-now ;
    console.log(date);
    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = 24 *hours

    let timedays = Math.floor (Differnce / days)
    let timehours = Math.floor ((Differnce % days)/hours)
    let timeminutes = Math.floor ((Differnce % hours)/minutes)
    let timeseconds = Math.floor ((Differnce % minutes)/seconds)

    timehours = timehours < 10 ? "0" + timehours : timehours 
    timeminutes = timeminutes < 10 ? "0" + timeminutes : timeminutes 
    timeseconds = timeseconds < 10 ? "0" + timeseconds : timeseconds 


    document.getElementById("days").innerHTML = timedays 
    document.getElementById("hours").innerHTML = timehours 
    document.getElementById("minutes").innerHTML = timeminutes 
    document.getElementById("seconds").innerHTML = timeseconds

    

    console.log(timehours)
}

countdown();
setInterval(countdown,1000);