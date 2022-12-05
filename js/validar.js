const validarPalavra = (event) => {
  var analisar = $('#inputanalisar').val().toLowerCase();
  var estado = 0;
  if (analisar.length == 0) {
    $('#inputanalisar').removeClass('correct');
    $('#inputanalisar').removeClass('error');
    $('#tabela-vocabulario tr').removeClass('selectedStatus');
    $('#tabela-vocabulario td').removeClass('selectedField');
    $(`#tabela-vocabulario .tr-${estado}`).removeClass('selectedStatusFalse');
    $(`#tabela-vocabulario .td-letra-${analisar[i]}`).removeClass('selectedFieldFalse');
  }
  for (var i = 0; i < analisar.length; i++) {
    if (analisar[i] >= 'a' && analisar[i] <= 'z') {
      $('#tabela-vocabulario tr').removeClass('selectedStatus');
      $('#tabela-vocabulario td').removeClass('selectedField');
      $(`#tabela-vocabulario .tr-${estado}`).addClass('selectedStatus');
      $(`#tabela-vocabulario .td-letra-${analisar[i]}`).addClass('selectedField');
      if (table[estado][analisar[i]] != '-') {
        $(`#tabela-vocabulario .tr-${estado}`).addClass('selectedStatus');
        $(`#tabela-vocabulario .td-letra-${analisar[i]}`).addClass('selectedField');
        estado = table[estado][analisar[i]];
        $('#inputanalisar').addClass('correct');
        $('#inputanalisar').removeClass('error');
        $(`#tabela-vocabulario .tr-${estado}`).removeClass('selectedStatusFalse');
        $(`#tabela-vocabulario .td-letra-${analisar[i]}`).removeClass('selectedFieldFalse');
        $(`#tabela-vocabulario .tr-${estado}`).removeClass('selectedStatusSpace');
        $(`#tabela-vocabulario .td-letra-${analisar[i]}`).removeClass('selectedFieldSpace');
      } else {
        $(`#tabela-vocabulario .tr-${estado}`).addClass('selectedStatusFalse');
        $(`#tabela-vocabulario .td-letra-${analisar[i]}`).addClass('selectedFieldFalse');
        $('#inputanalisar').removeClass('correct');
        $('#inputanalisar').addClass('error');
        break;
      }
    } else if (analisar[i] == ' ') {
      $('#tabela-vocabulario tr').removeClass('selectedStatus');
      $('#tabela-vocabulario td').removeClass('selectedField');
      $(`#tabela-vocabulario .tr-${estado}`).addClass('selectedStatusSpace');
      $(`#tabela-vocabulario .td-letra-${analisar[i]}`).addClass('selectedFieldSpace');
      if (table[estado]['final']) {
        estado = 0;
      } else {
        $(`#tabela-vocabulario .tr-${estado}`).removeClass('selectedStatusSpace');
        $(`#tabela-vocabulario .td-letra-${analisar[i]}`).removeClass('selectedFieldSpace');
        $('#inputanalisar').removeClass('correct');
        $('#inputanalisar').addClass('error');
        break;
      }
    }
  };

  let newValue = validCampVocab(event.target.value.toLowerCase());
  $("#inputanalisar").val(newValue);
  
}

$("#inputadc").keyup(event => {
  let newValue = validCampVocab(event.target.value.toLowerCase());
  $("#inputadc").val(newValue);
})

const validCampVocab = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (!((value[i] >= 'a' && value[i] <= 'z') || value[i] === ' ')) {
      return value.replace(value[i], '');
    }
  }
  return value;
}
