// Constant Variables
const d = new Date();

// Normal Variables
let Year = $("#year");
let Month = $("#month");
let Day = $("#day");

$(document).ready(function() {
    $(".calculate").click(function(){
        if ((Year.val() && Month.val() && Day.val()) != (null || "")) {
            (CalculateDate(Year.val(), Month.val(), Day.val()))
        }

        if (Year.val() == (null || "")) {
            Year.css({
                'border': '1px solid red'
            })
            $('#year1').css({
                'color': 'hsl(0, 100%, 67%)'
            })
        }
        if (Month.val() == "") {
            Month.css({
                'border': '1px solid red'
            })
            $('#month1').css({
                'color': 'hsl(0, 100%, 67%)'
            })
        }
        if (Day.val() == "") {
            Day.css({
                'border': '1px solid red'
            })
            $('#day1').css({
                'color': 'hsl(0, 100%, 67%)'
            })
        }
    });
});


// Calculate Age Function
/**
* @param year integer
* @param month integer
* @param day integer
*/
function CalculateDate(year, month, day) {
    const CalculateYear = d.getFullYear() - year
    const CalculateMonth = 12 - month
    const CalculateDay = 31 - day
    if (CalculateYear < 0 ) {
        console.log('ridi year')
        return false
    } else {
        if (CalculateMonth < 0) {
            return false
        } else {
            if (CalculateDay < 0) {
                return false
            } else {
                $('.showYear').text((CalculateYear - 1))
                $('.showMonths').text(CalculateMonth)
                $('.showDays').text(CalculateDay)
                return true
            }
        }
    }
}