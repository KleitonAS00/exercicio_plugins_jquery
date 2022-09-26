$(document).ready(function() {
    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })

    $('#cep').mask('00000-000', {
        placeholder: '_____-__'
    })

    $('#telefone').mask('(00) 0000-0000', {
        placeholder: '(__) ____-____'
    })

    $('form').validate({
        rules: {
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            telefone: {
                required: true
            },
        },
        messages: {
            cep: 'CEP inválido ou não preenchido',
            cpf: 'CPF inválido ou não preenchido',
            telefone: 'Telefone inválido ou não preenchido'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposInvalidos = validador.numberOfInvalids()
            console.log(camposInvalidos)
            if (camposInvalidos) {
                alert(`Existem ${camposInvalidos} campos a serem revisados.`)
            } else {

            }
        }
    })

})