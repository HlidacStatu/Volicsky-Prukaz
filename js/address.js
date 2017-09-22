var App = window.election;

$.getJSON('js/out.json', function(data) {

    cities = data;

    function source(input, callback) {
      var term = input.term;
      var filtered = cities.filter(function (city) {
        return (city.zip && city.zip.indexOf(term) > -1) || (city.city && city.city.indexOf(term) > -1);
      }).slice(0, 10).map(function (city) {
        return {label: city.zip + ' ' + city.city, value: city};
      });

      callback(filtered);
    }

    $('.field-zip input').autocomplete({
        source: source,
        select: function(event, ui){
            var zip = ui.item.value.zip;
            var city = ui.item.value.city;
            //console.log(ui.item.array);
            $(this).val(zip);
            $('input', $(this).parent('div').next('div')).val(city);

            if ($(this).parents('div').hasClass('field-addressslovakia-zip')) {

                $('#addressoffice-name').val(ui.item.value.name);
                $('#addressoffice-street').val(ui.item.value.street || ui.item.value.city);
                $('#addressoffice-streetno').val(ui.item.value.houseNumber);
                $('#addressoffice-city').val(ui.item.value.city);
                $('#addressoffice-zip').val(ui.item.value.zip);
                $('#addressoffice-email').val(ui.item.value.email);
                $('#addressoffice-ebox').val(ui.item.value.datovaSchranka);
                updateOfficeAddress();

            }

            return false;
        }
    });

    $('#address-foreign input').change(function(){

        updateOfficeAddress();

    });

});

function updateOfficeAddress() {

    $('#adresa').val($('#addressoffice-name').val() + "\n" + $('#addressoffice-street').val() + " " + $('#addressoffice-streetno').val() + "\n" + $('#addressoffice-zip').val() + " " + $('#addressoffice-city').val() + "\nE-mail: " + $('#addressoffice-email').val() + "\nDatová schránka: " + $('#addressoffice-ebox').val());

}

function findZIP(){
  var psc = parseInt($("#addressslovakia-zip").val().replace(' ', ''));
  if ( psc.length === 5 ){
    if ( psc in App.psc){
      kraj = App.psc[psc][2] + " kraj";
      okres = "Okres " + App.psc[psc][1];
      obec = App.psc[psc][0];

      if ($("#addressslovakia-kraj option[value='" + kraj + "']").length > 0){
        $("#addressslovakia-kraj").val(kraj).trigger("change");
      }
      if ($("#addressslovakia-okres option[value='" + okres + "']").length > 0){
        $("#addressslovakia-okres").val(okres).trigger("change");
      }
      if ($("#addressslovakia-city option[value='" + obec + "']").length > 0){
        $("#addressslovakia-city").val(obec).trigger("change");
      }

      $('.wrong-psc').html('');
    } else {
      $('.wrong-psc').html('PSČ nie je v zozname. Vyberte z možností nižšie, alebo opravte.');
    }
  } else {
    $('.wrong-psc').html('');
  }
}

function getAddressOneLine(id) {
  var ret = "";
  var format = getAdressFormat(id);

  if ($('#' + id + '-street').val()) {
    if (format === "sk" || format === "sk-poste-restante" ){
      ret += $('#' + id + '-street').val() + " " + $('#' + id + '-streetno').val();
    } else if (format === "usa" || format === "usa-poste-restante" ){
      ret += $('#' + id + '-streetno').val() + " " + $('#' + id + '-street').val();
    }
  } else {
    if (id === "addressslovakia") {
      getObec() + " " + $('#' + id + '-streetno').val();
    } else {

      if (format === "sk" || format === "sk-poste-restante"){
        ret += $('#' + id + '-city').val() + " " + $('#' + id + '-streetno').val();
      } else if (format === "usa" || format === "usa-poste-restante"){
        ret += $('#' + id + '-streetno').val() + " " + $('#' + id + '-city').val();
      }
    }

  }
  if (ret !== " ") {
    ret += ", ";
  }


  if (id === "addressslovakia") {
    ret += $('#' + id + '-zip').val() + " " + getObec();
  } else {
    if (format === "sk" || format === "sk-poste-restante"){
      ret += $('#' + id + '-zip').val() + " " + $('#' + id + '-city').val();
    } else if (format === "usa" || format === "usa-poste-restante"){
      ret += $('#' + id + '-city').val() + " " + $('#' + id + '-zip').val();
    }
  }

  if (ret !== " ") {
    ret += ", ";
  }

  if (id === "addressslovakia") {
    ret += "Česká republika";
  } else {
    ret += $('#' + id + '-country').val();
  }
  return ret;
}


function nacitajKraje(){
  var options = $("#addressslovakia-kraj");
  options.find('option').remove();
  for (var key in App.cities) {
    options.append($("<option />").val(key).text(key));
  }
  if (!iOSversion()){
    options.select2({width:"100%"});
  }
  nastavKraj();
}
function nastavKraj(){ return false;
  var options = $("#addressslovakia-okres");
  options.find('option').remove();
  var kraj = $("#addressslovakia-kraj").val();
  for (var key in App.cities[kraj]) {
    options.append($("<option />").val(key).text(key));
  }
  nastavOkres();
  if (!iOSversion()){
    options.select2({width:"100%"});
  }
}
function nastavOkres(){ return false;
  var options = $("#addressslovakia-city");
  options.find('option').remove();
  var kraj = $("#addressslovakia-kraj").val();
  var okres = $("#addressslovakia-okres").val();
  for (var key in App.cities[kraj][okres]) {
    options.append($("<option />").val(key).text(App.cities[kraj][okres][key][App.C2N_NAZOV_OBCE]));
  }
  nastavObec();
  if (!iOSversion()){
    options.select2({width:"100%"});
  }
}
function getObec(){

  var ico = $("#addressslovakia-city").val();
//  var kraj = $("#addressslovakia-kraj").val();
//  var okres = $("#addressslovakia-okres").val();
//  var o = App.cities;

  if (ico) {
    return ico;
  }
  return "Nepodařilo se načíst obec";
}
function nastavObec(obec) {

  // list/db of all cities comes from external file (js/cities)
  var o = App.cities;

  var adresa = "";
  var ico = $("#addressslovakia-city").val();
  var kraj = $("#addressslovakia-kraj").val();
  var okres = $("#addressslovakia-okres").val();

  if (ico) {

    if (o[kraj] && o[kraj][okres] && o[kraj][okres][ico]) {
      var data = o[kraj][okres][ico];
      adresa = data[App.C2N_TYP_URADU] + "\n";
      if (data[App.C2N_TYP_URADU_RIADOK2] !== "") {
        adresa += data[App.C2N_TYP_URADU_RIADOK2] + "\n";
      }
      if (data[App.C2N_ADRESA_URADU_ULICA] !== "" || data[App.C2N_ADRESA_URADU_CISLO_DOMU] !== "") {
        if (data[App.C2N_ADRESA_URADU_ULICA]) {
          adresa += data[App.C2N_ADRESA_URADU_ULICA] + " ";
        }
        if (data[App.C2N_ADRESA_URADU_CISLO_DOMU]) {
          adresa += data[App.C2N_ADRESA_URADU_CISLO_DOMU];
        }
        adresa += "\n";
      }


      var email = data[App.C2N_EMAIL];

      if ((App.request_form === "ziadostOPreukazPostou" || App.request_form === "ziadostOPreukaPreSplnomocnenca") && data[App.C2N_ALT_EMAIL_PRE_PREUKAZ].indexOf("@") !== -1){
        email = data[App.C2N_ALT_EMAIL_PRE_PREUKAZ];
      }

      adresa += data[App.C2N_ADRESA_URADU_PSC] + " " + data[App.C2N_ADRESA_URADU_MESTO] + "\n" + email.replace(/;/i, "\n");


      if (App.request_form === 'volbaPostouBezTrvalehoPobytu'){
        $("#adresa").val("Ministerstvo vnútra Slovenskej republiky\nodbor volieb, referenda a politických strán\nDrieňová 22\n826 86  Bratislava 29\nSLOVAK REPUBLIC");
        $("#sendto").html("volby@minv.sk");
        $("#phone").html("");
        $("#phonetext").hide();
      } else {
        $("#adresa").val(adresa);
        $("#sendto").html(email);
        if (data[App.C2N_TELEFON] !== ""){
          $("#phone").html(data[App.C2N_TEL_PREDVOLBA] + " / " + data[App.C2N_TELEFON]);
          $("#phonetext").show();
        } else {
          $("#phone").html("");
          $("#phonetext").hide();
        }
      }
      if ($("#sendto").html().indexOf("@") === -1){
        $("#sendemail").hide();
        $("#noemail").show();
      } else {
        $("#sendemail").show();
        $("#noemail").hide();
      }
      if (data[App.C2N_POTVRDENE_UDAJE] === "1"){
        $("#emailpotvrdeny").show();
      } else {
        $("#emailpotvrdeny").hide();
      }

      var subj = "Ziadost";
      var textemailu = "";
      var meno = $('#basicinfo-name').val() + " " + $('#basicinfo-lastname').val();
      if (App.request_form === 'volbaPostouSTrvalymPobytom'){
        subj = "Žiadosť o voľbu poštou pre voľby do NRSR";
        textemailu = "Dobrý deň, " + decodeURIComponent("%0D%0A%0D%0A") + "podľa § 60 ods. 1 zákona č. 180/2014 Z. z. o podmienkach výkonu volebného práva a o zmene a doplnení niektorých zákonov žiadam o voľbu poštou pre voľby do Národnej rady Slovenskej republiky v roku 2016. Zároveň Vás chcem poprosiť o potvrdenie e-mailom, že žiadosť bola prijatá a spracovaná. " + decodeURIComponent("%0D%0A%0D%0A") + "V prílohe zasielam podpísanú žiadosť. " + decodeURIComponent("%0D%0A%0D%0A") + "Ďakujem," + decodeURIComponent("%0D%0A%0D%0A") + " " + meno;
      } else if (App.request_form === 'volbaPostouBezTrvalehoPobytu'){
        $("#emailpotvrdeny").hide();
        subj = "Žiadosť o voľbu poštou pre voľby do NRSR";
        textemailu = "Dobrý deň, " + decodeURIComponent("%0D%0A%0D%0A") + "podľa § 59 ods. 1 zákona č. 180/2014 Z. z. o podmienkach výkonu volebného práva a o zmene a doplnení niektorých zákonov žiadam o voľbu poštou pre voľby do Národnej rady Slovenskej republiky v roku 2016 a o zaslanie hlasovacích lístkov a obálok na adresu uvedenú v žiadosti. Zároveň Vás chcem poprosiť o potvrdenie e-mailom, že žiadosť bola prijatá a spracovaná. " + decodeURIComponent("%0D%0A%0D%0A") + "V prílohe zasielam podpísanú žiadosť. " + decodeURIComponent("%0D%0A%0D%0A") + "Ďakujem," + decodeURIComponent("%0D%0A%0D%0A") + " " + meno;
      } else if (App.request_form === "ziadostOPreukazPostou"){
        subj = "Žiadosť o hlasovací preukaz";
        textemailu = "Dobrý deň, " + decodeURIComponent("%0D%0A%0D%0A") + "podľa § 46 zákona č. 180/2014 Z. z. o podmienkach výkonu volebného práva a o zmene a doplnení niektorých zákonov žiadam o vydanie hlasovacieho preukazu pre voľby do Národnej rady Slovenskej republiky v roku 2016. Hlasovací preukaz si želám odoslať na adresu uvedenú v žiadosti. Zároveň Vás chcem poprosiť o potvrdenie e-mailom, že žiadosť bola prijatá a spracovaná. " + decodeURIComponent("%0D%0A%0D%0A") + "V prílohe zasielam podpísanú žiadosť. " + decodeURIComponent("%0D%0A%0D%0A") + "Ďakujem," + decodeURIComponent("%0D%0A%0D%0A") + " " + meno;
      } else if (App.request_form === "ziadostOPreukaPreSplnomocnenca"){
        subj = "Žiadosť o hlasovací preukaz";
        textemailu = "Dobrý deň, " + decodeURIComponent("%0D%0A%0D%0A") + "podľa § 46 zákona č. 180/2014 Z. z. o podmienkach výkonu volebného práva a o zmene a doplnení niektorých zákonov žiadam o vydanie hlasovacieho preukazu pre voľby do Národnej rady Slovenskej republiky v roku 2016. Hlasovací preukaz za mňa preberie splnomocnenec. Zároveň Vás chcem poprosiť o potvrdenie e-mailom, že žiadosť bola prijatá a spracovaná. " + decodeURIComponent("%0D%0A%0D%0A") + "V prílohe zasielam podpísanú žiadosť. " + decodeURIComponent("%0D%0A%0D%0A") + "Ďakujem," + decodeURIComponent("%0D%0A%0D%0A") + " " + meno;
      }

      $("#emailsubject").html(subj);
      $("#emailbody").html(textemailu);
      if (jQuery.data( document.body, "psc-locked")){} else {
        //$("#addressslovakia-zip").val(data[4]);
      }
      $("#send").attr("href", "mailto:" + $("#sendto").html() + "?subject=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(textemailu));

    }
  }
}

function getAdressFormat(id){
  var format = $('#' + id + '-format').val();
  if (!format) {
    format = "sk";
  }
  return format;
}

function isPosRes(format){
  return ( format.indexOf('poste-restante') !== -1 );
}

function nastavPosteRestante(){
  App.poste_res = isPosRes( getAdressFormat('addressforeign') );

  if ( App.poste_res ) {
    $('.field-addressforeign-street label:first').html('Poste Restante');
    $('#addressforeign-street').val('Poste Restante');
    $('.field-addressforeign-streetno label:first').html('Adresa Pošty');
    $('.field-addressforeign-city label:first').html('Město');
    $('.field-addressforeign-zip label:first').html('PSČ Pošty');
  } else {
    $('.field-addressforeign-street label:first').html('Ulice');
    $('#addressforeign-street').val('');
    $('.field-addressforeign-streetno label:first').html('Číslo domu');
    $('.field-addressforeign-city label:first').html('Město');
    $('.field-addressforeign-zip label:first').html('PSČ');
  }
}
