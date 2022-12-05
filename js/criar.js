const criarSpan = (id, classPerso, texto) => {
    return $('<span>', {
        id: id,
        class: classPerso
    }).html(texto);
}

const criarInput = (id, classPerso, place ) => {
    return $('<input>', {
        id: id,
        type: 'text',
        placeholder: place,
        class: `form-control ${classPerso}`,
        autocomplete: 'off'
    });
}

const criarDiv = (idDiv, tamanho, classDivPerso) => {
    return $('<div>', {
        id: idDiv,
        class: `input-field col s${tamanho} ${classDivPerso}`
    });
}

const criarCabecaTabela = (id, classPerso) => {
    return $('<thead>', {
        id: id,
        class: classPerso
    });
}

const criarCorpoTabela = (id, classPerso) => {
    return $('<tbody>', {
        id: id,
        class: classPerso
    });
}

const criarLinhaTabela = (id, classPerso) => {
    return $('<tr>', {
        id: id,
        class: classPerso
    });
}

const criarColunaTabela = (id, classPerso, texto) => {
    return $('<th>', {
        id: id,
        class: classPerso
    }).html(texto);;
}

const criarColunaMeioTabela = (id, classPerso, texto) => {
    return $('<td>', {
        id: id,
        class: classPerso
    }).html(texto);
}
