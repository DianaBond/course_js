
function getMessage(login) {

    let message;

    message = (login == 'Emplyee') ?
        'Hi' :
        message = (login == 'Mr President') ?
            'Good evening' :
            message = (login == '') ?
                'User is not authorized' : '';

    return message;
}
alert(getMessage('Emplyee'));


/* Вариант без функции, с возможностью вводить 'Emplyee', 'Mr President', '' */


// let login = prompt('');
//
//         message = (login == 'Emplyee') ? 'Hi' :
//                     (login == 'Mr President') ? 'Good evening' :
//                         (login == '') ? 'User is not authorized' : '';
//
//     alert(message);