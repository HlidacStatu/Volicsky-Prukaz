var App = window.election;

function createDocument(preview, download) {
  jQuery.data( document.body, "psc-locked", "1");
  nastavObec();
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  // playground requires you to assign document definition to a variable called dd
  var paragraph, localaddress = [], noTP = [], vyhlasenie = [], signature = [], idPhoto = [];
  var signaturedata = App.signaturePad.toDataURL();
  if (signaturedata.length > 10) {
    $('#signature').val(signaturedata);
  }

  signature2 = [];
  if ($('#signature').val() !== '') {
    signature =
            [
              {text: '', style: 'space'},
              {
                text: ['V ', {text: $('#addressforeign-city').val(), style: 'value'}],
                style: 'footer',
              },
              {
                text: ['Datum: ', {text: '' + dd + '. ' + mm + '. ' + yyyy, style: 'value'}],
                style: 'footer',
              },
              {
                image: $('#signature').val(), width: 120, style: 'signatureStyle'
              },
              {
                text: '                      Podpis                      ',
                style: 'signatureTextStyle'
              }
            ];

    var signature2 = [
      {text: '', style: 'space'},
      {
        text: ['V ', {text: $('#addressforeign-city').val(), style: 'value'}],
        style: 'footer',
      },
      {
        text: ['Datum: ', {text: '' + dd + '. ' + mm + '. ' + yyyy, style: 'value'}],
        style: 'footer',
      },
      {
        image: $('#signature').val(), width: 150, alignment: 'right'
      },
      {
        text: '                      Podpis                      ',
        style: 'signatureTextStyle'
      }
    ];
  }
  if ($('#camera-input')[0].files.length > 0) {
    idPhoto =
            [
              {
                image: $('#camera-preview').attr('src'),
                pageBreak: 'before',
                style: 'signature'
              }
            ];
  }

    if ($('#kolo1:checked').length && $('#kolo2:checked').length)
        paragraph = 'Podle ustanovení § 33 zákona č. 275/2012 Sb., o volbě prezidenta republiky, tímto žádám o vydání voličského průkazu pro volby prezidenta České republiky a to první kolo 12. a 13. ledna 2018 a druhé kolo 26. a 27. ledna 2018.';

    if ($('#kolo1:checked').length && !$('#kolo2:checked').length)
        paragraph = 'Podle ustanovení § 33 zákona č. 275/2012 Sb., o volbě prezidenta republiky, tímto žádám o vydání voličského průkazu pro první kolo volby prezidenta České republiky 12. a 13. ledna 2018.';

    if (!$('#kolo1:checked').length && $('#kolo2:checked').length)
        paragraph = 'Podle ustanovení § 33 zákona č. 275/2012 Sb., o volbě prezidenta republiky, tímto žádám o vydání voličského průkazu pro druhé kolo volby prezidenta České republiky 26. a 27. ledna 2018.';

    if (!$('#kolo1:checked').length && !$('#kolo2:checked').length)
        paragraph = 'Podle ustanovení § 33 zákona č. 275/2012 Sb., o volbě prezidenta republiky, tímto žádám o vydání voličského průkazu pro volby prezidenta České republiky a to první kolo 12. a 13. ledna 2018 a druhé kolo 26. a 27. ledna 2018.';

  if (App.request_form === 'volbaPostouSTrvalymPobytom') {


    localaddress = [
      {text: '', style: 'spacesmall'},
      {
        text: 'Adresa trvalého pobytu v ČR:',
        style: 'line',
        //style: 'header',
        bold: true
      },
      {
        columns: [
          {text: 'Ulice: ', style: 'line', },
          {text: $('#addressslovakia-street').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: 'Číslo domu: ', style: 'line', },
          {text: $('#addressslovakia-streetno').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: 'Obec: ', style: 'line', },
          {text: getObec().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: 'PSČ: ', style: 'line', },
          {text: $('#addressslovakia-zip').val(), style: 'value'},
          {text: ''}
        ]
      },
      {text: '', style: 'spacesmall'},
      {
        text: 'Adresa místa pobytu v zahraničí (pro zaslání volebního průkazu a dalších dokumentů):',
        style: 'line',
        //style: 'header',
        bold: true
      }
    ];
  } else if (App.request_form === 'volbaPostouBezTrvalehoPobytu') {

    paragraph = paragraph + ' Žádám o zaslání průkazu na adresu:';

    noTP = [

      {text: '', style: 'space'},
      {
        text: 'Čestne vyhlasujem, že nemám trvalý pobyt na území Slovenskej republiky.',
        style: 'header',
      },
      {text: '', style: 'space'},
      {
        text: 'Prílohy:',
        style: 'header',
        alignment: 'left'
      },
      {
        ul: [
          'čestné vyhlásenie voliča, že nemá trvalý pobyt na území Slovenskej republiky.',
          'fotokópia časti cestovného dokladu Slovenskej republiky s osobnými údajmi voliča alebo fotokópia osvedčenia o štátnom občianstve Slovenskej republiky voliča.',
        ]
      }
    ];
    vyhlasenie = [
      {
        text: $('#basicinfo-name').val() + ' ' + $('#basicinfo-lastname').val() + ' ' + $('#basicinfo-birthno').val(),
        alignment: 'center',
        pageBreak: 'before'
      },
      {
        text: getAddressOneLine('addressforeign'),
        alignment: 'center',
      },

      {text: '', style: 'space'},
      {
        text: 'ČESTNÉ VYHLÁSENIE',
        style: 'header',
        alignment: 'center'
      },
      {text: '', style: 'space'},
      {
        text: 'pro hlasování ve volbách prezidenta české republiky v roce 2018',
        alignment: 'center'
      },
      {text: '', style: 'space'},
      {
        text: 'čestne vyhlasujem,',
        style: 'header',
        alignment: 'center'
      },
      {text: '', style: 'space'},
      {
        text: 'že nemám trvalý pobyt na území Slovenskej republiky.'
      },
      signature2
    ];
  }

  if (App.request_form === "volbaPostouSTrvalymPobytom" || App.request_form === "volbaPostouBezTrvalehoPobytu") {

    formContent = [
      {
        text: 'Žádost',
        style: 'header',
        alignment: 'center'
      },
      {
        text: 'o voľbu poštou',
        style: 'header',
        alignment: 'center'
      },
      {
        text: 'pro hlasování ve volbách prezidenta české republiky v roce 2018',
        style: 'header',
        alignment: 'center'
      },
      {text: '', style: 'space'},
      {
        text: $('#adresa').val(),
        style: 'address',
      },
      {text: '', style: 'space'},
      {
        text: [
          paragraph
        ],
      },
      {text: '', style: 'spacesmall'},
      {
        columns: [
          {text: 'Meno: ', style: 'line', },
          {text: $('#basicinfo-name').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: 'Priezvisko: ', style: 'line', },
          {text: $('#basicinfo-lastname').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: 'Rodné priezvisko: ', style: 'line', },
          {text: $('#basicinfo-maidenlastname').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: 'Datum narození: ', style: 'line', },
          {text: $('#basicinfo-birth').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      localaddress,
      {
        columns: [
          {text: ( App.poste_res ? 'Adresa v zahraničí:' : 'Ulice: '), style: 'line', },
          {text: ( App.poste_res ? 'Poste Restante' : $('#addressforeign-street').val().toUpperCase() ), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: ( App.poste_res ? ' ' : 'Číslo domu: '), style: 'line', },
          {text: ( App.poste_res ? ' ' : $('#addressforeign-streetno').val().toUpperCase() ), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: ( App.poste_res ? ' ' : 'Obec: '), style: 'line', },
          {text: $('#addressforeign-city').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: ( App.poste_res ? ' ' : 'PSČ: '), style: 'line', },
          {text: $('#addressforeign-zip').val(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: ( App.poste_res ? ' ' : 'Štát: '), style: 'line', },
          {text: $('#addressforeign-country').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      noTP
    ];
  }
  if (App.request_form === "ziadostOPreukazPostou") {
    preukazHeader = 'Žádost o vydání voličského průkazu';
    preukazDelivery = [
      {
        text: 'Voličský průkaz žádám zaslat na adresu:',
        style: 'line',
        alignment: 'left'
      },
      {
        columns: [
          {
            text: ['Jméno: ', {text: $('#basicinfo-name').val().toUpperCase(), style: 'value'}],
          },
          {
            text: ['Příjmení: ', {text: $('#basicinfo-lastname').val().toUpperCase(), style: 'value'}],
          }
        ]
      },
      {
        text: ['Adresa: ', {text: getAddressOneLine('addressforeign').toUpperCase(), style: 'value'}],
        style: 'line'
      }
    ];
  }

  if (App.request_form === "ziadostOPreukaPreSplnomocnenca") {
    preukazHeader = 'Žádost o vydání voličského průkazu a plná moc pro jeho převzetí';
    preukazDelivery = [
      {
        text: 'K převzetí voličského průkazu zplnomocňuji:',
        style: 'line',
        alignment: 'left'
      },
      {
        columns: [
          {
            text: ['Jméno: ', {text: $('#proxy-name').val().toUpperCase(), style: 'value'}],
          },
          {
            text: ['Příjmení: ', {text: $('#proxy-lastname').val().toUpperCase(), style: 'value'}],
          }
        ]
      },
      {
        text: ['Číslo OP: ', {text: $('#proxy-idno').val().toUpperCase(), style: 'value'}],
        style: 'line'
      }
    ];
  }


//console.log(App.request_form);

  if (App.request_form === "ziadostOPreukazPostou" || App.request_form === "ziadostOPreukaPreSplnomocnenca") {
    formContent = [
      {
        text: $('#adresa').val(),
        style: 'address',
      },
      {text: '', style: 'space'},
      {
        text: preukazHeader,
        style: 'header',
        alignment: 'left'
      },
      {text: '', style: 'space'},
      {
        columns: [
          {
            text: ['Jméno: ', {text: $('#basicinfo-name').val().toUpperCase(), style: 'value'}],
            style: 'line',
          },
          {
            text: ['Příjmení: ', {text: $('#basicinfo-lastname').val().toUpperCase(), style: 'value'}],
            style: 'line',
          },
        ]
      },
      {
        columns: [
          {
            text: ['Datum narození: ', {text: $('#basicinfo-birth').val(), style: 'value'}],
            style: 'line',
          },
          {
            text: ['Státní příslušnost: ', {text: 'Česká republika'.toUpperCase(), style: 'value'}],
            style: 'line',
          },
        ]
      },
      {
        text: ['Adresa trvalého pobytu: ', {text: getAddressOneLine('addressslovakia').toUpperCase(), style: 'value'}],
        style: 'line',
      },
      {text: '', style: 'space'},
      {
        text: 'žádám',
        style: 'header',
        alignment: 'center'
      },
      {text: '', style: 'space'},
      {
        text: [
          {text: paragraph}
        ]
      },
      {text: '', style: 'space'},
      preukazDelivery
    ];
  }
  var dd = {
    pageSize: 'A4',
    info: {
      title: 'Žádost o voličský průkaz',
      author: 'volby.hlidacstatu.cz',
      subject: 'Žádost o voličský průkaz',
    },
    content: [
      formContent,
      signature,
      vyhlasenie,
      idPhoto,
    ],
    styles: {
      header: {
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      value: {
        fontSize: 12,
        bold: true,
        margin: [0, 7, 0, 0],
        decoration: 'underline',
        decorationStyle: 'dotted'
      },
      address: {
        fontSize: 12,
        italic: true,
        alignment: 'justify',
        margin: [260, 10, 10, 10],
      },
      line: {
        fontSize: 12,
        margin: [0, 7, 0, 0],
        padding: [0, 0, 0, 0]
      },
      footer: {
        fontSize: 12,
        margin: [0, 0, 0, 0],
        padding: [0, 0, 0, 0]
      },
      space: {
        fontSize: 12,
        margin: [0, 40, 0, 0]
      },
      spacesmall: {
        fontSize: 12,
        margin: [0, 20, 0, 0]
      },
      signatureStyle: {
        margin: [0, -30, 0, 0],
        alignment: 'right'
      },
      signatureTextStyle: {
        decoration: 'overline',
        decorationStyle: 'dotted',
        alignment: 'right',
        margin: [50, 10],
        fontSize: 9
      }
    }
  };

  var name = "žádost";
  if (preview){
    if (App.request_form === "ziadostOPreukazPostou" || App.request_form === "ziadostOPreukaPreSplnomocnenca") {
      name = "zadost-o-volicsky-prukaz-nahled.pdf";
    } else {
      name = "zadost-o-volicsky-prukaz-nahled.pdf";
    }
  } else {
    if (App.request_form === "ziadostOPreukazPostou" || App.request_form === "ziadostOPreukaPreSplnomocnenca") {
      name = "zadost-o-volicsky-prukaz.pdf";
    } else {
      name = "zadost-o-volicsky-prukaz.pdf";
    }
  }

  if (detectIE() || isAndroid() || download){
    pdfMake.createPdf(dd).download(name);
  } else {

    if (preview === true) {
      pdfMake.createPdf(dd).getDataUrl(function (result) {
        $('#preview').attr('src', result);
      });
    } else {
      pdfMake.createPdf(dd).getDataUrl(function (result) {
        $('#final').attr('src', result);
      });
    }
  }
}
