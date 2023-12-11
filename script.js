document.getElementById("btn").onclick = function(){
    let datepick = document.getElementById("date").value
    

    if(datepick == ""){
        document.getElementById("output").innerText = "Please pick a date"
    }else {
        let myyear = new Date(datepick).getFullYear()
        let currentyear = new Date().getFullYear()

        let mymonth = new Date(datepick).getMonth()
        let currentmonth = new Date().getMonth()

        
        let mydate = new Date(datepick).getDate()
        let currentdate = new Date().getDate()


        let total = currentyear - myyear

        let month = currentmonth - mymonth

        let date = currentdate - mydate
        
        document.getElementById("output").innerText = `you are ${total} years, ${month}, months(s) and ${date} days  old `
    }
}