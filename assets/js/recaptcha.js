grecaptcha.ready(function () {
    grecaptcha.execute('6LfpSOgUAAAAANUxQLx28jWpKp19nT0pV08kUCRq', {action: 'homepage'}).then(function (token) {
        const quoteForm = document.getElementById('quote-form');
        if (quoteForm) {
            document.getElementById('token').value = token;
        }
    });
});