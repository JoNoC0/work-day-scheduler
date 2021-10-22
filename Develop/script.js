(document).ready(function() {
    var init = false;
    var now = moment().format("LLLL");

    let now24 = moment().format("H");
    let now12 = moment().format('h');
    if (init) {
        now24 = 13;
        now12 = 1;
    }
})