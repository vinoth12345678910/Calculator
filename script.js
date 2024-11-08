(function() {
    let screen = document.querySelector('.enter');
    let buttons = document.querySelectorAll('button');  // Select all buttons
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            if (value !== undefined) {
                screen.value += value;
            }
        });
    });

    equal.addEventListener('click', function() {
        if (screen.value !== '') {
            try {
                let answer = eval(screen.value);
                screen.value = answer;
            } catch (error) {
                screen.value = "Error";
            }
        }
    });

    clear.addEventListener('click', function() {
        screen.value = "";
    });
})();


