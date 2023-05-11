// Constant Variables
const d = new Date();

// Normal Variables
let Year = $("#year");
let Month = $("#month");
let Day = $("#day");

$(document).ready(function() {
    $(".calculate").click(function(){
        MouseClick()
    });

    $("#body").keypress(function(e){
        var key = e.which;
        if (key == 13) {
            MouseClick()
            // myPopup.show()
        }
    });
});


// jQuery Function Initial
function MouseClick() {

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
}

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

    if ((CalculateYear >= 0) && (CalculateMonth >= 0) && (CalculateDay >= 0)) {
        $('#showYear').text((CalculateYear - 1))
        $('#showYear').css({'color': 'hsl(259, 100%, 65%)'})
        $('#showMonths').text(CalculateMonth)
        $('#showMonths').css({'color': 'hsl(259, 100%, 65%)'})
        $('#showDays').text(CalculateDay)
        $('#showDays').css({'color': 'hsl(259, 100%, 65%)'})
    }

    if (CalculateYear < 0) {
        $('#showYear').css({'color': 'hsl(0, 100%, 67%)'})
        ShowPopup('Please Enter Values Correctly', '#fc0303')
    }

    if (CalculateMonth < 0) {
        $('#showMonths').css({'color': 'hsl(0, 100%, 67%)'})
        ShowPopup('Please Enter Values Correctly', '#fc0303')
    }

    if (CalculateDay < 0) {
        $('#showDays').css({'color': 'hsl(0, 100%, 67%)'})
        ShowPopup('Please Enter Values Correctly', '#fc0303')
    }
}

// Dynamic Popup Function

function ShowPopup(Text, TextColor) {
    const p = new Popup({
        id: "Popup",
        title: "Error",
        content: Text,
        textColor: TextColor
    });

    p.show()
}