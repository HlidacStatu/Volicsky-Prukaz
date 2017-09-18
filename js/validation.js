
var validateBirthNumber = function(value, messages) {
  // rules according to https://sk.wikipedia.org/wiki/Rodn%C3%A9_%C4%8D%C3%ADslo
  // considering that people born in 2000 and later are not allowed to vote yet

  if (value.substr(0, 2) < 54) {
    yii.validation.regularExpression(value, messages, {
      "pattern":/^\d{2}[0156]\d{3}\/\d{3}$/,
      "message":"Rodné číslo pred rokem 1954 musí mít 9 číslic ve formátě XXXXXX/XXX. Třetí číslica musí byť 0,1,5 alebo 6."
    });
  } else {
    yii.validation.regularExpression(value, messages, {
      "pattern":/^\d{2}[0156]\d{3}\/\d{4}$/,
      "message":"Rodné číslo musí mať 10 číslic vo formáte XXXXXX/XXXX. Tretia číslica musí byť 0, 1, 5 alebo 6."
    });
    if (messages.length === 0) {
      var rc = value.substr(0, 6).concat(value.substr(7, 11));
      if (rc % 11 !== 0) {
        yii.validation.addMessage(messages, "Rodné číslo by malo byť deliteľné 11. Nemáte v ňom preklep?", value);
      }
    }
  }
};

function fixBirthNumberSlash(){
  var value = $("#basicinfo-birthno").val();
  var newvalue = "";
  if (value.indexOf("/") === -1){
    if (value.substr(0, 2) < 54) { // ludi narodenych v tomto tisicroci pre ucely volieb 2016 mozme ignorovat
      if (value.length === 9){
        newvalue = value.substr(0, 6) + "/" + value.substr(6);
      }
    } else {
      if (value.length === 10){
        newvalue = value.substr(0, 6) + "/" + value.substr(6);
      }
    }
  }
  if ( newvalue !== ""){
    $("#basicinfo-birthno").val(newvalue);
  }
}

function fixBirthFormat(){
  var value = $("#basicinfo-birth").val();
  value = value.replace(new RegExp('\/|,', 'g'), '.'); console.log(value);
  var newvalue = "";

  var segments = value.split('.');
  if (!parseInt(segments[0].trim()) || !parseInt(segments[1].trim()) || !parseInt(segments[2].trim())) return false;
  newvalue += parseInt(segments[0].trim()) + '.';
  newvalue += parseInt(segments[1].trim()) + '.';
  newvalue += ((parseInt(segments[2].trim()) < 100)?'19':'') + parseInt(segments[2].trim());

  if ( newvalue !== ""){
    $("#basicinfo-birth").val(newvalue);
  }
}

var validatePSC = function(value, messages) {
  if ( value.length !== 5 ) {
    yii.validation.addMessage(messages, "PSČ vaší adresy by mělo mít 5 číslic.", value);
  } else {
    yii.validation.regularExpression(value, messages, {
      "pattern":/^\d{5}$/,
      "message":"PSČ vaší adresy by mělo obsahovat pouze číslice."
    });
  }
};

jQuery(document).ready(function () {
  var ua = navigator.userAgent;

  var pathname = window.location.pathname;
  var test = pathname.indexOf('/test/');
  if ( test > -1 ){
    $( '<p class="footer text-center">Váš prehlížeč je: ' + ua + '</p>' ).insertAfter( "#github" );
    if (detectIE()){
      $( '<p class="footer text-center">Používáte Internet explorer</p>' ).insertAfter( "#github" );
    }
    if (isAndroid()){
      $( '<p class="footer text-center">Používáte Android</p>' ).insertAfter( "#github" );
    }
    var ver = iOSversion();
    if (ver){
      $( '<p class="footer text-center">Používáte iOS ' + ver + '</p>' ).insertAfter( "#github" );
    }
  } else {
    if ( ua.indexOf('Android') > -1 && ua.indexOf('Chrome') === -1 ){
      $( '<p><span class="digitalRed text-biggest">Pozor! Váš prohlížeč nepodporujeme. Nemusí Vám proto všechno fungovat správně. Použijte prosím nejlépe Google Chrome.'
    + '</span></p>' ).insertAfter( ".text-justify.text-bigger.paragraph-2" );
    }
  }

  var application = new RequestGeneratorApp();

  $(window).hashchange(application.run.bind(application));
  $(window).hashchange();

  jQuery('#basic-info').yiiActiveForm([{
    "id": "basicinfo-name",
    "name": "name",
    "container": ".field-basicinfo-name",
    "input": "#basicinfo-name",
    "validate": function (attribute, value, messages) {
      yii.validation.required(value, messages, {
        "message": "Na žádosti musí být vaše jméno. Uveďte ho prosím."
      });
    }
  }, {
    "id": "basicinfo-lastname",
    "name": "lastname",
    "container": ".field-basicinfo-lastname",
    "input": "#basicinfo-lastname",
    "validate": function (attribute, value, messages) {
      yii.validation.required(value, messages, {
        "message": "Na žádosti musí být vaše příjmení. Uveďte ho prosím."
      });
    }
  }, {
    "id": "basicinfo-birthno",
    "name": "birthNo",
    "container": ".field-basicinfo-birthno",
    "input": "#basicinfo-birthno",
    "validate": function (attribute, value, messages) {
      yii.validation.required(value, messages, {
        "message": "Na žádosti musí být váš datum narození. Uveďte ho prosím."
      });
      validateBirthNumber(value, messages);
    }
  }], []);
  jQuery('#proxy').yiiActiveForm([{
    "id": "proxy-name",
    "name": "name",
    "container": ".field-proxy-name",
    "input": "#proxy-name",
    "validate": function (attribute, value, messages) {
      yii.validation.required(value, messages, {
        "message": "Na žádosti musí být vaše jméno člověka, kterého zplnomocňujete k převzetí voličského průkazu. Uveďte ho prosím."
      });
    }
  }, {
    "id": "proxy-lastname",
    "name": "lastname",
    "container": ".field-proxy-lastname",
    "input": "#proxy-lastname",
    "validate": function (attribute, value, messages) {
      yii.validation.required(value, messages, {
        "message": "Na žádosti musí být vaše příjmení člověka, kterého zplnomocňujete k převzetí voličského průkazu. Uveďte ho prosím."
      });
    }
  }, {
    "id": "proxy-idno",
    "name": "idNo",
    "container": ".field-proxy-idno",
    "input": "#proxy-idno",
    "validate": function (attribute, value, messages) {
      yii.validation.required(value, messages, {
        "message": "Na žádosti musí být číslo OP člověka, kterého zplnomocňujete k převzetí voličského průkazu. Uveďte ho prosím."
      });
    }
  }], []);
  jQuery('#address-slovakia').yiiActiveForm([{
    "id": "addressslovakia-street",
    "name": "street",
    "container": ".field-addressslovakia-street",
    "input": "#addressslovakia-street",
    "validate": function (attribute, value, messages) {
      yii.validation.required(value, messages, {
        "message": "Vyplňte prosím ulici vašeho trvalého pobytu."
      });
    }
  }, {
    "id": "addressslovakia-streetno",
    "name": "streetNo",
    "container": ".field-addressslovakia-streetno",
    "input": "#addressslovakia-streetno",
    "validate": function (attribute, value, messages) {
      yii.validation.required(value, messages, {
        "message": "Vyplňte prosím číslo domu vašeho trvalého pobytu."
      });
    }
  }, {
    "id": "addressslovakia-city",
    "name": "city",
    "container": ".field-addressslovakia-city",
    "input": "#addressslovakia-city",
    "validate": function (attribute, value, messages) {
      yii.validation.required(value, messages, {
        "message": "Vyplňte prosím město vašeho trvalého pobytu."
      });
    }
  }, {
    "id": "addressslovakia-zip",
    "name": "zip",
    "container": ".field-addressslovakia-zip",
    "input": "#addressslovakia-zip",
    "validate": function (attribute, value, messages) {
      yii.validation.required(value, messages, {
        "message": "Vyplňte prosím PSČ vašeho trvalého pobytu."
      });
      validatePSC(value, messages);
    }
  }], []);
  jQuery('#address-foreign').yiiActiveForm([{
    "id": "addressforeign-street",
    "name": "street",
    "container": ".field-addressforeign-street",
    "input": "#addressforeign-street",
    "validate": function (attribute, value, messages) {
      yii.validation.required(value, messages, {
        "message": "Uveďte prosím ulici, kam chcete odeslat voličský průkaz."
      });
    }
  }, {
    "id": "addressforeign-streetno",
    "name": "streetNo",
    "container": ".field-addressforeign-streetno",
    "input": "#addressforeign-streetno",
    "validate": function (attribute, value, messages) {
      yii.validation.required(value, messages, {
        "message": "Uveďte prosím číslo domu, kam chcete odeslat voličský průkaz."
      });
    }
  }, {
    "id": "addressforeign-city",
    "name": "city",
    "container": ".field-addressforeign-city",
    "input": "#addressforeign-city",
    "validate": function (attribute, value, messages) {
      yii.validation.required(value, messages, {
        "message": "Uveďte prosím město, kam chcete odeslat voličský průkaz."
      });
    }
  }, {
    "id": "addressforeign-zip",
    "name": "zip",
    "container": ".field-addressforeign-zip",
    "input": "#addressforeign-zip",
    "validate": function (attribute, value, messages) {
      yii.validation.required(value, messages, {
        "message": "Uveďte prosím PSČ, kam chcete odeslat voličský průkaz."
      });
    }
  }, {
    "id": "addressforeign-country",
    "name": "country",
    "container": ".field-addressforeign-country",
    "input": "#addressforeign-country",
    "validate": function (attribute, value, messages) {
      yii.validation.required(value, messages, {
        "message": "Uveďte prosím stát, kam chcete odeslat voličský průkaz."
      });
    }
  }], []);
});
