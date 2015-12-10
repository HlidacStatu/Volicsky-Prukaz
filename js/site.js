/* STEP 0 */
var krok = 0;

$('a.btn-step').click(function () {
  if ($(this).is('#krokomer a')) {
    krok--;
  } else {
    krok++;
  }
  updateStep();
  $('.row').hide();
  $.when($($(this).attr('href')).show()).done(resizeCanvas())
});

function updateStep() {
  $('#krokomer li').hide();
  $('#krokomer li:nth-child(' + krok + ')').show();
  $('#krokomer h6 span').text(krok);
}

function clearForm() {
  $('#ziadost h2').hide();
  $('#ziadost form').hide();
}

function updateMenu(i) {
  if (i) {
    $('#krokomer li:nth-child(3) a').attr('href', '#ziadost');
    $('#krokomer li:nth-child(4) a').attr('href', '#pdf');
    $('#krokomer li:nth-child(5) a').attr('href', '#sign');
    $('#krokomer li:nth-child(6) a').attr('href', '#photo');
  } else {
    $('#krokomer li:nth-child(3) a').attr('href', '#preukaz-zahranicie');
    $('#krokomer li:nth-child(4) a').attr('href', '#ziadost');
    $('#krokomer li:nth-child(5) a').attr('href', '#pdf');
    $('#krokomer li:nth-child(6) a').attr('href', '#sign');
  }
}

function nemamTP() {
  // update back button
  clearForm();
  updateMenu(true);
  $('.nemam-tp').show();
  $('#photo-link').show();
  /*$('#preview-button').attr('onclick','createDocument(true,"noTP")');
   $('#download-button').attr('onclick','createDocument(false,"noTP")');
   $('#sign-button').attr('onclick','createDocument(true,"noTP",signaturePad.toDataURL())');*/
  $('#tpFlag').val('volbaPostouBezTrvalehoPobytu')
}

function postaTP() {
  clearForm();
  updateMenu(false);
  $('.posta-tp').show();
  $('#photo-link').hide();
  $('#tpFlag').val('volbaPostouSTrvalymPobytom')
}

function preukazTP() {
  clearForm();
  updateMenu(0);
  $('.preukaz-tp').show();
  $('#photo-link').hide();
  $('#tpFlag').val('ziadostOPreukazPostou')
}

function preukazPS() {
  clearForm();
  updateMenu(0);
  $('.preukaz-ps').show();
  $('#photo-link').hide();
  $('#tpFlag').val('ziadostOPreukaPreSplnomocnenca')
}

/*
 function preukazPoslat(){
 $('#address-slovakia').show();
 $('#address-foreign').show();
 $('#tpFlag').val('pp');
 $('#photo-link').hide();
 $('#addressforeign-country').val('Slovensko');
 $('#foreign-header').hide();
 $('#local-header').show();
 $('#proxy').hide();
 }

 function preukazSplnomocnenec(){
 $('#address-slovakia').show();
 $('#address-foreign').hide();
 $('#tpFlag').val('ps');
 $('#photo-link').hide();
 $('#local-header').show();
 $('#proxy').show();

 }

 */


function getAddressOneLine(id) {
  var ret = "";
  if ($('#' + id + '-street').val()) {
    ret += $('#' + id + '-street').val() + " " + $('#' + id + '-streetno').val();
  } else {
    ret += $('#' + id + '-city').val() + " " + $('#' + id + '-streetno').val();
  }
  if (ret != " ") ret += ", ";

  ret += $('#' + id + '-zip').val() + " " + $('#' + id + '-city').val();

  if (ret != " ") ret += ", ";

  if (id == "addressslovakia") {
    ret += "Slovenská republika";
  } else {
    ret += $('#' + id + '-country').val();
  }
  return ret;
}

function nastavObec() {
  var o = [];
  o['mvsr'] = ['Ministerstvo vnútra Slovenskej republiky', 'odbor volieb, referenda a politických strán', 'Drieňová', '22', '826 86', 'Bratislava 29', 'volby@minv.sk'];
  o['00307726'] = ['Obecný úrad', '', 'Alekšince', '389/395', '951 22', 'Alekšince', 'obec@aleksince.sk'];
  o['00592099'] = ['Obecný úrad', '', 'Abovce', '99', '980 44', 'Lenartovce', 'obec.abovce@centrum.sk'];
  o['00316555'] = ['Obecný úrad', '', 'Abramová', '8', '038 22', 'Slovenské Pravno', 'uobecny5@gaya.sk'];
  o['00315940'] = ['Obecný úrad', '', 'Ábelová', '95', '985 13', 'Ábelová', 'korosi.abelova@zoznam.sk'];
  o['00305855'] = ['Obecný úrad', '', 'Abrahám', '52', '925 45', 'Abrahám', 'urad@abraham.sk'];
  o['00690619'] = ['Obecný úrad', '', '', '25', '082 52', 'Kokošovce', 'obecabranovce@zoznam.sk'];
  o['00311405'] = ['Obecný úrad', '', 'Adamovské Kochanovce', '268', '913 05', 'Melčice-Lieskové', 'obec@adamovskekochanovce.sk'];
  o['00322792'] = ['Obecný úrad', '', '', '', '067 32', 'Vyšný Hrušov', 'obec.adidovce@gmail.com'];
  o['00326101'] = ['Obecný úrad', '', '', '56', '059 72', 'Vrbov', 'abrahamovce@aminet.sk'];
  o['00321826'] = ['Obecný úrad', '', '', '26', '086 41', 'Raslavice', ''];
  o['00308749'] = ['Obecný úrad', '', 'Andovce', '157', '941 23', 'Andovce', 'ocuandovce@konfer.sk'];
  o['00321834'] = ['Obecný úrad', '', '', '39', '086 37', 'Šarišské Čierne', 'obecandrejova@gmail.com'];
  o['00699110'] = ['Obecný úrad', '', 'Ardanovce', '11', '956 06', 'Šalgovce', 'ouardanovce@wircom.sk'];
  o['00328090'] = ['Obecný úrad', '', '', '34', '049 55', 'Dlhá Ves', 'obecardovo@mail.t-com.sk'];
  o['00328928'] = ['Obecný úrad', '', '', '64', '053 13', 'Letanovce', 'arnutovce@gmail.com'];
  o['00307742'] = ['Obecný úrad', '', 'Báb', '465', '951 34', 'Báb', 'obecbab@obecbab.sk'];
  o['00314382'] = ['Obecný úrad', '', 'Babín', '50', '029 52', 'Hruštín', 'obecbabin@orava.sk'];
  o['00332241'] = ['Obecný úrad', '', '', '9', '094 31', 'Hanušovce nad Topľou', 'ocubabie@slovanet.sk'];
  o['35626348'] = ['Obecný úrad', '', 'Babindol', '140', '951 53', 'Klasov', 'obec@babindol.sk'];
  o['00319732'] = ['Obecný úrad', '', 'Horná', '97/2', '962 61', 'Dobrá Niva', 'podatelna@babina.sk'];
  o['00649678'] = ['Obecný úrad', '', 'Babinec', '', '980 26', 'Lukovištia', 'ocu@babinec.info'];
  o['37869540'] = ['Obecný úrad', '', 'Obchodná', '137', '951 46', 'Podhorany', 'obecbadice@azet.sk'];
  o['00650587'] = ['Obecný úrad', '', 'Bacúrov', '75', '962 61', 'Dobrá Niva', 'obecbacurov@stonline.sk'];
  o['00313254'] = ['Obecný úrad', '', 'Hlavná', '279', '976 65', 'Bacúch', 'obecnyurad@bacuch.sk'];
  o['00313262'] = ['Obecný úrad', '', 'Sládkovičova', '4', '976 32', 'Badín', 'badin@obecbadin.sk'];
  o['00305251'] = ['Obecný úrad', '', 'Báč', '124', '930 30', 'Rohovce', 'urad@obecbac.sk'];
  o['00331287'] = ['Obecný úrad', '', 'Hlavná', '201', '076 61', 'Bačkov', 'obecbackov@centrum.sk'];
  o['00331279'] = ['Obecný úrad', '', 'Hlavná', '130', '076 84', 'Leles', 'obecbacka@stonline.sk'];
  o['00304654'] = ['Obecný úrad', '', 'SNP', '65', '900 84', 'Báhoň', 'starosta@bahon.sk'];
  o['00323934'] = ['Obecný úrad', '', '', '41', '044 45', 'Bidovce', 'obecbackovik@stonline.sk'];
  o['00324990'] = ['Obecný úrad', '', 'Bajany', '161', '072 54', 'Lekárovce', 'oubajany@zoznam.sk'];
  o['00320480'] = ['Obecný úrad', '', 'Baďan', '11', '969 75', 'Baďan', 'obec.badan@gmail.com'];
  o['00800309'] = ['Obecný úrad', '', 'Bajka', '15', '935 51', 'Tekovský Hrádok', 'obecbajka@gmail.com'];
  o['00306363'] = ['Obecný úrad', '', 'Bajč', '130', '946 54', 'Bajč', 'ocubajc@stonline.sk'];
  o['00326801'] = ['Obecný úrad', '', '', '', '082 41', 'Bajerov', 'obecbajerov@centrum.sk'];
  o['00305260'] = ['Obecný úrad', '', 'Baka', '262', '930 04', 'Baka', 'obecbaka@stonline.sk'];
  o['00326810'] = ['Obecný úrad', '', '', '114', '082 73', 'Šarišské Dravce', 'obec@bajerovce.sk'];
  o['00308757'] = ['Obecný úrad', '', 'Bajtava', '86', '943 65', 'Kamenica nad Hronom', 'oubajtava@mail.t-com.sk'];
  o['00313297'] = ['Obecný úrad', '', 'Baláže', '11', '976 11', 'Selce', 'starosta@balaze.sk'];
  o['00328936'] = ['Obecný úrad', '', '', '46', '053 04', 'Spišské Podhradie', 'obec.baldovce@spisnet.sk'];
  o['00319228'] = ['Obecný úrad', '', 'Hlavná', '75', '991 11', 'Balog nad Ipľom', 'info@balognadiplom.sk'];
  o['00305278'] = ['Obecný úrad', '', 'Baloň', '22', '930 08', 'Čiližská Radvaň', 'obecbalon@mail.t-com.sk'];
  o['35594233'] = ['Obecný úrad', '', 'Topoľčianska cesta', '23', '921 01', 'Banka', 'info@obecbanka.sk'];
  o['00308765'] = ['Obecný úrad', '', 'Hviezdoslavova', '34', '941 01', 'Bánov', 'oubanov@banov.sk'];
  o['00310182'] = ['Mestský úrad', '', 'Nám. Ľ. Štúra', '1/1', '957 01', 'Bánovce nad Bebravou', 'podatelna@banovce.sk'];
  o['00320498'] = ['Obecný úrad', '', 'Banská Belá', '298', '966 15', 'Banská Belá', 'ou-b.bela@mail.t-com.sk'];
  o['00313271'] = ['Mestský úrad', '', 'ČSA', '26', '975 39', 'Banská Bystrica', 'sekretariatmsu@banskabystrica.sk'];
  o['00325015'] = ['Obecný úrad', '', 'Bánovce nad Ondavou', '191', '072 04', 'Trhovište', 'ocu.banovce@mail.t-com.sk'];
  o['00320501'] = ['Mestský úrad', '', 'Radničné námestie', '1', '969 24', 'Banská Štiavnica 1', 'msu@banskastiavnica.sk'];
  o['00320510'] = ['Obecný úrad', '', 'Banský Studenec', '60', '969 01', 'Banský Studenec', 'sekretariat@banskystudenec.sk'];
  o['00332259'] = ['Obecný úrad', '', '', '320', '094 12', 'Vranov nad Topľou', 'obecbanske@wmx.sk'];
  o['00321842'] = ['Mestský úrad', '', 'Radničné námestie', '16', '085 01', 'Bardejov', 'primator@bardejov.sk'];
  o['00330281'] = ['Obecný úrad', '', '', '47', '091 01', 'Stropkov', 'ocubana@capur.net'];
  o['00331295'] = ['Obecný úrad', '', '', '7', '076 32', 'Borša', 'obecbara@kid.sk'];
  o['00649520'] = ['Obecný úrad', '', 'Barca', '24', '982 51', 'Figa', 'oubarca@post.sk'];
  o['00308773'] = ['Obecný úrad', '', 'Bardoňovo', '124', '941 49', 'Bardoňovo', 'podatelna@obecbardonovo.sk'];
  o['00320528'] = ['Obecný úrad', '', 'Bartošova Lehôtka', '80', '967 01', 'Kremnica', 'obecbartosovalehotka@stonline.sk'];
  o['00321851'] = ['Obecný úrad', '', '', '148', '086 42', 'Hertník', 'obec.bartosovce@wi-net.sk'];
  o['00326119'] = ['Obecný úrad', '', 'Štúrova', '29/2', '059 35', 'Batizovce', 'oubatizovce@stonline.sk'];
  o['00318604'] = ['Obecný úrad', '', 'Bátka', '161', '980 21', 'Bátka', 'ocu.batka@rsnet.sk'];
  o['00306711'] = ['Obecný úrad', '', 'Bátorove Kosihy', '873', '946 34', 'Bátorové Kosihy', 'batorovekosihy@batorovekosihy.sk'];
  o['00649333'] = ['Obecný úrad', '', 'Bátorová', '88', '991 26', 'Nenince', 'sekretariat@batorova.sk'];
  o['00306771'] = ['Obecný úrad', '', 'Bátovce', '2', '935 03', 'Bátovce', 'ocubatovce@stonline.sk'];
  o['00323942'] = ['Obecný úrad', '', 'Baška', '71', '040 16', 'Košice 16', 'urad@baska-obec.sk'];
  o['00325007'] = ['Obecný úrad', '', 'Baškovce', '29', '073 01', 'Baškovce pri Sobranciach', 'obecbaskovce@szm.sk'];
  o['00322806'] = ['Obecný úrad', '', '', '37', '067 23', 'Baškovce', 'baskovce@stonline.sk'];
  o['31827802'] = ['Obecný úrad', '', 'Bašovce', '160', '922 01', 'Ostrov', 'obecnyurad@basovce.sk'];
  o['00321869'] = ['Obecný úrad', '', '', '135', '086 35', 'Becherov', 'becherov@pobox.sk'];
  o['00321168'] = ['Obecný úrad', '', 'Oslobodenia', '183', '013 05', 'Belá', 'sekretariat@bela.sk'];
  o['00311413'] = ['Obecný úrad', '', 'Beckov', '180', '916 38', 'Beckov', 'beckov@obec-beckov.sk'];
  o['00308781'] = ['Obecný úrad', '', 'Belá', '32', '943 53', 'Ľubá', 'oubela@mail.viapvt.sk'];
  o['00328944'] = ['Obecný úrad', '', '', '57', '053 05', 'Beharovce', 'igor.polomsky@centrum.sk'];
  o['00307769'] = ['Obecný úrad', '', 'Gaštanová', '167', '951 75', 'Beladice', 'beladice1@stonline.sk'];
  o['00316563'] = ['Obecný úrad', '', 'Belá - Dulice', '86', '038 11', 'Belá pri Martine', 'obec@beladulice.sk'];
  o['00322814'] = ['Obecný úrad', '', 'Osloboditeľov', '652/23', '067 81', 'Belá nad Cirochou', 'obecbelanadcirochou@gmail.com'];
  o['00330299'] = ['Obecný úrad', '', '', '', '089 01', 'Svidník', 'sopoliga@pobox.sk'];
  o['00318612'] = ['Obecný úrad', '', 'Belín', '32', '980 01', 'Rimavské Janovce', 'obecnyuradbelin@gmail.com'];
  o['00800180'] = ['Obecný úrad', '', 'Bellova Ves', '75', '930 52', 'Blahová', 'obecbellova@stonline.sk'];
  o['00320536'] = ['Obecný úrad', '', 'Beluj', '43', '969 01', 'Banská Štiavnica', 'obecnyuradbeluj43@gmail.com'];
  o['00315958'] = ['Obecný úrad', '', 'Belina', '194', '986 01', 'Fiľakovo', 'obecbelina@centrum.sk'];
  o['00699128'] = ['Obecný úrad', '', 'Belince', '49', '956 12', 'Preseľany', 'obecbelince@stonline.sk'];
  o['00321877'] = ['Obecný úrad', '', 'Beloveža', '94', '086 14', 'Hažlín', 'beloveza@gmail.com'];
  o['00317063'] = ['Obecný úrad', '', 'Farská', '1045/6', '018 61', 'Beluša', 'sekretariat@belusa.sk'];
  o['00323951'] = ['Obecný úrad', '', '', '80', '044 58', 'Seňa', 'obecbelza@mail.t-com.sk'];
  o['00691224'] = ['Obecný úrad', '', '', '44', '044 42', 'Rozhanovce', 'sekretariat@obecbeniakovce.sk'];
  o['00314391'] = ['Obecný úrad', '', 'Beňadovo', '66', '029 63', 'Mútne', 'benadovo@gmail.com'];
  o['00332267'] = ['Obecný úrad', '', '', '22', '094 02', 'Slovenská Kajňa', 'ocubenkovce@watel.sk'];
  o['00647373'] = ['Obecný úrad', '', 'Benice', '69', '038 42', 'Príbovce', 'oubenice@gaya.sk'];
  o['00315079'] = ['Obecný úrad', '', 'Beňadiková', '17', '032 04', 'Liptovský Ondrej', 'oubenadikova@alconet.sk'];
  o['00330302'] = ['Obecný úrad', '', '', '74', '090 42', 'Okrúhle', 'ladislav.dzogan@gmail.com'];
  o['00325023'] = ['Obecný úrad', '', '', '10', '072 64', 'Podhoroď', 'benatina@lekosonline.sk'];
  o['00313289'] = ['Obecný úrad', '', 'Beňuš', '355', '976 64', 'Beňuš', 'obecbenus@mail.t-com.sk'];
  o['00304662'] = ['Obecný úrad', '', 'Hlavná', '111', '900 27', 'Bernolákovo', 'obec@bernolakovo.sk'];
  o['00326828'] = ['Obecný úrad', '', '', '', '082 35', 'Hendrichovce', 'obecbertotovce@stonline.sk'];
  o['00328952'] = ['Obecný úrad', '', '', '23', '053 15', 'Hrabušice', 'obecbetlanovce@stonline.sk'];
  o['00306789'] = ['Obecný úrad', '', 'Beša', '306', '935 36', 'Beša', 'obecbesa@stonline.sk'];
  o['00328103'] = ['Obecný úrad', '', 'Šafárikova', '67', '049 21', 'Betliar', 'obec.betliar@stonline.sk'];
  o['00331309'] = ['Obecný úrad', '', 'Beša', '107', '076 72', 'Vojany', 'obec.besa@zoznam.sk'];
  o['00308790'] = ['Obecný úrad', '', 'Bešeňov', '33', '941 41', 'Bešeňov', 'obec.besenov@stonline.sk'];
  o['00315095'] = ['Obecný úrad', '', 'Jánska', '25', '034 83', 'Liptovská Teplá', 'besenova@besenova.sk'];
  o['00325031'] = ['Obecný úrad', '', '', '184', '072 53', 'Bežovce', 'oubezovce@lekosonline.sk'];
  o['00323977'] = ['Obecný úrad', '', '', '210', '044 45', 'Bidovce', 'obecbidovce@netkosice.sk'];
  o['00331317'] = ['Obecný úrad', '', 'Hlavná', '48', '076 41', 'Biel', 'ocubiel@gmail.com'];
  o['00587494'] = ['Obecný úrad', '', 'Bielovce', '98', '935 74', 'Pastovce', 'bielovce@mail.t-com.sk'];
  o['31871461'] = ['Obecný úrad', '', 'Pionierske námestie', '18', '919 34', 'Biely Kostol', 'oub.kostol@apo.sk'];
  o['00328961'] = ['Obecný úrad', '', '', '7', '053 06', 'Bijacovce', 'obecbijacovce@stonline.sk'];
  o['00308803'] = ['Obecný úrad', '', 'Bíňa', '107', '943 56', 'Bíňa', 'obecbina@obecbina.sk'];
  o['00312258'] = ['Obecný úrad', '', 'Bíňovce', '134', '919 07', 'Bíňovce', 'ocu@binovce.sk'];
  o['00647985'] = ['Obecný úrad', '', 'Biskupická', '61/132', '986 01', 'Fiľakovo', 'obecbiskupice@gmail.com'];
  o['00654825'] = ['Obecný úrad', '', 'Biskupová', '62', '956 07', 'Veľké Ripňany', 'ocubiskupova@stonline.sk'];
  o['00648957'] = ['Obecný úrad', '', 'Bitarová', '94', '010 04', 'Žilina 4', 'podatelna@obecbitarova.sk'];
  o['00305294'] = ['Obecný úrad', '', 'Blahová', '136', '930 52', 'Blahová', 'obecblahova@centrum.sk'];
  o['00305308'] = ['Obecný úrad', '', 'Blatná na Ostrove', '203', '930 32', 'Blatná na Ostrove', 'obec@blatnanaostrove.sk'];
  o['00325058'] = ['Obecný úrad', '', '', '26', '072 44', 'Blatné Remety', 'bremety@gmail.com'];
  o['00325040'] = ['Obecný úrad', '', '', '94', '072 44', 'Blatné Remety', 'blatnapolianka@lekosonline.sk'];
  o['00304671'] = ['Obecný úrad', '', 'Šarfická', '300/37', '900 82', 'Blatné', 'starosta@blatne.sk'];
  o['00690198'] = ['Obecný úrad', '', '', '53', '044 16', 'Bohdanovce', 'blazice@azet.sk'];
  o['00325066'] = ['Obecný úrad', '', '', '86', '072 43', 'Veľké Revištia', 'bl.revistia@minet.sk'];
  o['00316571'] = ['Obecný úrad', '', 'Blatnica', '1', '038 15', 'Blatnica', 'oublatnica@gaya.sk'];
  o['00649201'] = ['Obecný úrad', '', 'Blažovce', '22', '038 44', 'Jazernica', 'obecblazovce@gmail.com'];
  o['00310221'] = ['Obecný úrad', '', 'Blesovce', '117', '956 01', 'Bojná', 'oublesovce@wircom.sk'];
  o['00311421'] = ['Obecný úrad', '', 'Bobot', '56', '913 25', 'Bobot', 'ou@bobot.sk'];
  o['00318621'] = ['Obecný úrad', '', 'Blhovce', '157', '980 32', 'Blhovce', 'obec@blhovce.sk'];
  o['00314404'] = ['Obecný úrad', '', 'Vyšný koniec', '173', '029 42', 'Bobrov', 'obecbobrov@obecbobrov.sk'];
  o['00315117'] = ['Obecný úrad', '', 'Bobrovec', '90', '032 21', 'Bobrovec', 'bobrovec@bobrovec.eu'];
  o['00315109'] = ['Obecný úrad', '', 'Bobrovček', '26', '032 21', 'Bobrovec', 'obec@bobrovcek.sk'];
  o['00315125'] = ['Obecný úrad', '', 'Bobrovník', '37', '032 23', 'Liptovská Sielnica', 'obec.bobrovnik@stonline.sk'];
  o['00648809'] = ['Obecný úrad', '', 'Bodorová', '59', '038 45', 'Malý Čepčín', 'bodorova@gaya.sk'];
  o['00513296'] = ['Obecný úrad', '', 'Bodíky', '174', '930 31', 'Vojka nad Dunajom', 'obecbodiky@zoznam.sk'];
  o['00692522'] = ['Obecný úrad', '', 'Bodiná', '102', '018 15', 'Prečín', 'podatelna@bodina.eu'];
  o['00690422'] = ['Obecný úrad', '', '', '55', '082 66', 'Uzovce', 'obecbodovce@wicom.sk'];
  o['00330311'] = ['Obecný úrad', '', '', '', '090 05', 'Krajná Poľana', 'ZeliP@zoznam.sk'];
  o['00611298'] = ['Obecný úrad', '', 'Bodzianske Lúky', '1', '946 14', 'Zemianska Olča', 'bodzianskeluky@gutanet.sk'];
  o['00312266'] = ['Obecný úrad', '', 'Bohdanovce nad Trnavou', '268', '919 09', 'Bohdanovce nad Trnavou', 'podatelna@bohdanovce.sk'];
  o['00306371'] = ['Obecný úrad', '', 'Bodza', '108', '946 16', 'Bodza', 'bodza@real-net.sk'];
  o['00690171'] = ['Obecný úrad', '', 'Hlavná', '23', '044 56', 'Bočiar', 'oubociar@eccenet.sk'];
  o['00321885'] = ['Obecný úrad', '', '', '33', '086 04', 'Kružlov', ''];
  o['00323985'] = ['Obecný úrad', '', '', '142', '044 16', 'Bohdanovce', 'bohdanovce@stonline.sk'];
  o['00305316'] = ['Obecný úrad', '', 'Boheľov', '12', '929 01', 'Dunajská Streda', 'sekretariat@bohelov.sk'];
  o['00328111'] = ['Obecný úrad', '', '', '72', '049 12', 'Gemerská Hôrka', 'obecbohunovo@gmail.com'];
  o['34009035'] = ['Obecný úrad', '', 'Bohunice', '48', '935 05', 'Bohunice', 'podatelna@bohunice.eu'];
  o['36115622'] = ['Obecný úrad', '', 'Bohunice', '103', '018 52', 'Pruské', 'info@obecbohunice.sk'];
  o['00305863'] = ['Obecný úrad', '', 'Boldog', '89', '925 26', 'Boldog', 'starosta@boldog.sk'];
  o['00310239'] = ['Obecný úrad', '', 'Bojná', '201', '956 01', 'Bojná', 'ocu@bojna.sk'];
  o['00318001'] = ['Mestský úrad', '', 'Sládkovičová', '1/176', '972 01', 'Bojnice', 'sekretariat@bojnice.sk'];
  o['00312274'] = ['Obecný úrad', '', 'Bojničky', '90', '920 55', 'Bojničky', 'obecbojnicky@mail.t-com.sk'];
  o['00312282'] = ['Obecný úrad', '', 'Boleráz', '586', '919 08', 'Boleráz', 'obec.boleraz@stonline.sk'];
  o['00317080'] = ['Obecný úrad', '', 'Bolešov', '78', '018 53', 'Bolešov', 'obecbolesov@stonline.sk'];
  o['00323993'] = ['Obecný úrad', '', '', '25', '044 47', 'Kecerovce', 'obec@boliarov.sk'];
  o['00648043'] = ['Obecný úrad', '', 'Borcová', '45', '038 44', 'Jazernica', ''];
  o['31823050'] = ['Obecný úrad', '', 'Borčany', '77', '956 36', 'Borčany', 'obec@borcany.sk'];
  o['00696412'] = ['Obecný úrad', '', '', '5', '049 42', 'Drnava', 'obecborka@gmail.com'];
  o['00692310'] = ['Obecný úrad', '', 'Borčice', '73', '018 53', 'Bolešov', 'obec-borcice@stonline.sk'];
  o['00304689'] = ['Obecný úrad', '', 'Borinka', '110', '900 32', 'Borinka', 'obecny-urad-borinka@slovanet.sk'];
  o['00312291'] = ['Obecný úrad', '', 'Borová', '56', '919 61', 'Ružindol', 'obecborova@mail.t-com.sk'];
  o['00312304'] = ['Obecný úrad', '', 'Borovce', '168', '922 09', 'Borovce', 'obec.borovce@mail.telekom.sk'];
  o['00587656'] = ['Obecný úrad', '', 'Bory', '84', '935 87', 'Santovka', 'podatelna@bory.sk'];
  o['00331341'] = ['Obecný úrad', '', 'Ružová', '188/2', '076 32', 'Borša', 'obecborsa@dornet.sk'];
  o['00318639'] = ['Obecný úrad', '', 'Bottovo', '66', '980 41', 'Dubovec', 'bottovo@zoznam.sk'];
  o['00311430'] = ['Obecný úrad', '', 'Bošáca', '257', '913 07', 'Bošáca', 'bosaca@bosaca.eu'];
  o['00331350'] = ['Obecný úrad', '', 'Kvetná', '243/1', '076 43', 'Čierna nad Tisou', 'obecbotany@gmail.com'];
  o['00331333'] = ['Obecný úrad', '', 'Hlavná', '216/42', '076 53', 'Boľ', 'ocu.bol@gmail.com'];
  o['00310255'] = ['Obecný úrad', '', 'SNP', '112', '956 18', 'Bošany', 'bosany@bosany.sk'];
  o['00315966'] = ['Obecný úrad', '', 'Boľkovce', '80', '984 01', 'Lučenec', 'bolkovce@slovanet.sk'];
  o['00325074'] = ['Obecný úrad', '', 'Bracovce', '275', '072 05', 'Bracovce', 'obecbracovce@centrum.sk'];
  o['00307777'] = ['Obecný úrad', '', 'Hlavné námestie', '1', '951 13', 'Branč', 'starosta@obec-branc.sk'];
  o['00308811'] = ['Obecný úrad', '', 'Branovo', '46', '941 31', 'Dvory nad Žitavou', 'obecbranovo@konfer.eu'];
  o['00603422'] = ['Miestny úrad', '', 'Kremeľská', '39', '841 10', 'Bratislava 46', 'starostka@devin.sk'];
  o['00603392'] = ['Miestny úrad', '', 'Novoveská', '17/A', '843 10', 'Bratislava 49', 'mudnv@mudnv.sk'];
  o['00641243'] = ['Miestny úrad', '', 'Hrnčiarska', '144', '851 10', 'Bratislava 5', 'miestnyurad@mc-cunovo.sk'];
  o['00603406'] = ['Miestny úrad', '', 'Žatevná', '2', '841 02', 'Bratislava 4', 'info@dubravka.sk'];
  o['00603481'] = ['Magistrát hlavného mesta SR', '', 'Primaciálne námestie', '1', '814 99', 'Bratislava', 'sluzbyobcanom@bratislava.sk'];
  o['00304603'] = ['Miestny úrad', '', 'Palmová', '1', '851 10', 'Bratislava 5', 'info@jarovce.sk'];
  o['00603520'] = ['Miestny úrad', '', 'Námestie sv. Františka', '8', '842 62', 'Bratislava 4', 'starostka@karlovaves.sk'];
  o['00603317'] = ['Miestny úrad', '', 'Junácka', '1', '832 91', 'Bratislava 3', 'sekretariat@banm.sk'];
  o['00603201'] = ['Miestny úrad', '', 'Kutlíková', '17', '852 12', 'Bratislava 5', 'podatelna@petrzalka.sk'];
  o['00603414'] = ['Miestny úrad', '', 'Malokarpatské námestie', '9', '841 03', 'Bratislava', 'sekretariat@lamac.sk'];
  o['00641383'] = ['Miestny úrad', '', 'Trojičné námestie', '11', '825 61', 'Bratislava 2', 'sekretariat@mupb.sk'];
  o['00304557'] = ['Miestny úrad', '', 'Kubačova', '21', '831 06', 'Bratislava 3', 'info@raca.sk'];
  o['00304611'] = ['Miestny úrad', '', 'Vývojová', '8', '851 10', 'Bratislava-Rusovce', 'sekretariat@bratislava-rusovce.sk'];
  o['00603155'] = ['Miestny úrad', '', 'Mierová', '21', '827 05', 'Bratislava 2', 'ruzinov@ruzinov.sk'];
  o['00603147'] = ['Mestský úrad', '', 'Vajanského nábrežie', '3', '814 21', 'Bratislava 1', 'podatelna@staremesto.sk'];
  o['00304565'] = ['Miestny úrad', '', 'Roľnícka', '109', '831 07', 'Bratislava 36', 'sekretariat@vajnory.sk'];
  o['00603295'] = ['Miestny úrad', '', 'Šíravská', '7', '821 07', 'Bratislava 214', 'sekretariat@vrakuna.sk'];
  o['17078512'] = ['Obecný úrad', '', '', '35', '049 34', 'Brdárka', 'obec.brdarka@gmail.com'];
  o['00604887'] = ['Miestny úrad', '', 'Námestie Rodiny', '1', '843 57', 'Bratislava 48', 'sekretariat@zahorskabystrica.sk'];
  o['00313301'] = ['Obecný úrad', '', 'Braväcovo', '196', '976 64', 'Beňuš', 'obecbravacovo@slovanet.sk'];
  o['00331376'] = ['Obecný úrad', '', 'Hlavná', '1/57', '076 05', 'Brehov', 'obecbrehov@trenet.sk'];
  o['35659599'] = ['Obecný úrad', '', 'Brehy', '117', '968 01', 'Nová Baňa', 'brehy@brehy.sk'];
  o['00322831'] = ['Obecný úrad', '', '', '226', '066 01', 'Humenné', 'obec@brekov.sk'];
  o['00322849'] = ['Obecný úrad', '', '', '170', '066 01', 'Humenné', 'obecbrestov@minet.sk'];
  o['00312312'] = ['Obecný úrad', '', 'J. Nižňanského', '6', '919 27', 'Brestovany', 'oubrestovany@westcom.sk'];
  o['00326844'] = ['Obecný úrad', '', '', '99', '082 05', 'Šarišské Bohdanovce', 'ocubrestov@msprofi.sk'];
  o['00322857'] = ['Obecný úrad', '', 'Brestov nad Laborcom', '21', '067 01', 'Radvaň nad Laborcom', 'ou.brestovnadlaborcom@zoznam.sk'];
  o['00306380'] = ['Obecný úrad', '', 'Hlavná', '86', '946 17', 'Soklovce na Ostrove', 'obec@brestovec.eu'];
  o['00309435'] = ['Obecný úrad', '', 'Brestovec', '273', '907 01', 'Myjava', 'obecbrestovec@stonline.sk'];
  o['00326852'] = ['Obecný úrad', '', '', '84', '082 03', 'Lemešany', 'bretejovce@centrum.sk'];
  o['00590754'] = ['Obecný úrad', '', '', '33', '980 46', 'Gemerská Panica', 'podatelna@obec-bretka.eu'];
  o['00314412'] = ['Obecný úrad', '', 'Grúnik', '56', '029 53', 'Breza', 'breza@orava.sk'];
  o['00648973'] = ['Obecný úrad', '', 'Brezany', '64', '010 04', 'Brezany', 'obec.brezany@mail.t-com.sk'];
  o['00331384'] = ['Obecný úrad', '', 'Brezová', '151', '076 12', 'Kuzmice', 'brezina@oubrezina.sk'];
  o['00319741'] = ['Obecný úrad', '', 'Horné Breziny', '141', '962 61', 'Dobrá Niva', 'obecbreziny@centrum.sk'];
  o['00330329'] = ['Obecný úrad', '', '', '100', '091 01', 'Stropkov', 'obecbreznica@mail.t-com.sk'];
  o['00315991'] = ['Obecný úrad', '', 'Breznička', '206', '985 02', 'Breznička', 'breznicka1@stonline.sk'];
  o['00330337'] = ['Obecný úrad', '', '', '35', '091 01', 'Stropkov', ''];
  o['00313319'] = ['Mestský úrad', '', 'Nám. M.R.Štefánika', '1', '977 01', 'Brezno', 'podatelna@brezno.sk'];
  o['00310263'] = ['Obecný úrad', '', 'Brezolupy', '63', '957 01', 'Bánovce nad Bebravou 1', 'brezolupyocu@pobox.sk;brezolupyocu@centrum.sk'];
  o['00321893'] = ['Obecný úrad', '', '', '21', '087 01', 'Giraltovce', 'obecbrezov@stonline.sk'];
  o['00309443'] = ['Mestský úrad', '', 'Námestie gen. M. R. Štefánika', '1', '906 13', 'Brezová pod Bradlom', 'mesto@brezova.sk'];
  o['00690139'] = ['Obecný úrad', '', '', '13', '067 73', 'Ubľa', 'obecbrezovec@gmail.com'];
  o['00326861'] = ['Obecný úrad', '', '', '59', '082 74', 'Brezovica', 'oubrezovica@stonline.sk'];
  o['00314421'] = ['Obecný úrad', '', 'Osloboditeľov', '346', '028 01', 'Trstená', 'oubrezovica@orava.sk'];
  o['00326879'] = ['Obecný úrad', '', '', '8', '082 74', 'Brezovica nad Torysou', 'brezovicka@livenet.sk'];
  o['00326887'] = ['Obecný úrad', '', '', '20', '082 41', 'Bajerov', 'obecbrezany@mail.t-com.sk'];
  o['00321907'] = ['Obecný úrad', '', '', '20', '086 11', 'Hrabovec', 'obec.brezovka@centrum.sk'];
  o['00306827'] = ['Obecný úrad', '', 'Brhlovce', '156', '935 02', 'Žemberovce', 'obec@brhlovce.sk'];
  o['00316580'] = ['Obecný úrad', '', 'Brieštie', '76', '038 22', 'Slovenské Pravno', 'uobecny9@gaya.sk'];
  o['00309451'] = ['Obecný úrad', '', 'Školská ulica', '1030/2', '908 85', 'Brodské', 'starosta@brodske.sk'];
  o['31872611'] = ['Obecný úrad', '', 'Brodzany', '154', '958 42', 'Brodzany', 'oubrodzany@stonline.sk'];
  o['00311448'] = ['Obecný úrad', '', 'Brunovce', '106', '916 25', 'Potvorice', 'obecbrunovce@stonline.sk'];
  o['00330345'] = ['Obecný úrad', '', '', '44', '090 31', 'Kolbovce', 'obecbrusnica@zoznam.sk'];
  o['00649392'] = ['Obecný úrad', '', 'Brusník', '45', '991 01', 'Senné', ''];
  o['00328979'] = ['Obecný úrad', '', '', '95', '053 73', 'Brutovce', 'obecbrutovce@stonline.sk'];
  o['00308820'] = ['Obecný úrad', '', 'Bruty', '111', '943 55', 'Bruty', 'obec@bruty.sk'];
  o['00313491'] = ['Obecný úrad', '', 'Ondrej nad Hronom', '360', '976 62', 'Brusno', 'obecbrusno@stonline.sk'];
  o['00317101'] = ['Obecný úrad', '', 'Brvnište', '390', '018 12', 'Brvnište', 'viera.jurdikova@brvniste.sk;andrea.nemcikova@brvniste.sk;dagmar.mikudikova@brvniste.sk;ekonomka@brvniste.sk;brvniste@brvniste.sk'];
  o['00594768'] = ['Obecný úrad', '', 'Mariássyho námestie', '167', '049 51', 'Brzotín', 'oubrzotin@stonline.sk'];
  o['00321915'] = ['Obecný úrad', '', '', '19', '086 43', 'Koprivnica', 'obecbuclovany@stonline.sk'];
  o['00319759'] = ['Obecný úrad', '', 'Lhenická', '33', '962 33', 'Budča', 'obec@budca.sk'];
  o['00649961'] = ['Obecný úrad', '', 'Budikovany', '51', '980 23', 'Teplý Vrch', 'ocubudikovany@gmail.com'];
  o['00324001'] = ['Obecný úrad', '', '', '19', '044 43', 'Budimír', 'obecbudimir@netkosice.sk'];
  o['00315974'] = ['Obecný úrad', '', 'Budiná', '96', '985 12', 'Tuhár', 'obecbudina@tuhar.net'];
  o['00316598'] = ['Obecný úrad', '', 'Budiš', '82', '038 23', 'Dubové', 'uobecny@gaya.sk'];
  o['00689742'] = ['Obecný úrad', '', 'Budince', '25', '076 77', 'Ruská', 'obecbudince@centrum.sk'];
  o['00325082'] = ['Obecný úrad', '', 'Budkovce', '244', '072 15', 'Budkovce', 'uhrina@centrum.sk;obecbudkovce@centrum.sk'];
  o['00306398'] = ['Obecný úrad', '', 'Tesárska ulička', '91', '946 35', 'Búč', 'info@obecbuc.sk'];
  o['00304697'] = ['Obecný úrad', '', 'J. Rašu', '534', '900 86', 'Budmerice', 'podatelna@budmerice.sk'];
  o['00312321'] = ['Obecný úrad', '', 'Bučany', '269', '919 28', 'Bučany', 'obec.bucany@gmail.com'];
  o['00328987'] = ['Obecný úrad', '', 'Buglovce', '56', '053 04', 'Spišské Podhradie', 'obecbuglovce@gmail.com'];
  o['00312339'] = ['Obecný úrad', '', 'Buková', '50', '919 10', 'Buková', 'obec@bukova.sk'];
  o['00330353'] = ['Obecný úrad', '', '', '79', '090 22', 'Bukovce', 'obecbukovce@gmail.com'];
  o['00324027'] = ['Obecný úrad', '', '', '83', '044 20', 'Malá Ida', 'ocu@bukovec.sk'];
  o['00309460'] = ['Obecný úrad', '', 'Bukovec', '50', '906 14', 'Bukovec', 'obecnyurad.bukovec@mail.t-com.sk'];
  o['30233143'] = ['Obecný úrad', '', 'Bulhary', '96', '986 01', 'Fiľakovo', 'bulhary@hotmail.com'];
  o['00315141'] = ['Obecný úrad', '', 'Bukovina', '56', '032 23', 'Liptovská Sielnica', 'bukovina@citycom.sk'];
  o['00690201'] = ['Obecný úrad', '', '', '5', '044 47', 'Kecerovce', 'obecbunetice@centrum.sk'];
  o['00325091'] = ['Obecný úrad', '', '', '103', '072 44', 'Bunkovce', 'oubunkovce@stonline.sk'];
  o['00324035'] = ['Obecný úrad', '', '', '130', '044 73', 'Buzica', 'oubuzicastarosta@mail.t-com.sk'];
  o['00319236'] = ['Obecný úrad', '', 'Železničná', '4/320', '991 22', 'Bušince', 'oubusince@gonet.sk'];
  o['00315982'] = ['Obecný úrad', '', 'Buzitka', '126', '985 41', 'Šávoľ', 'obecbuzitka@gmail.com'];
  o['00326127'] = ['Obecný úrad', '', '', '119', '059 93', 'Bušovce', 'obec.busovce@neton.sk'];
  o['00647853'] = ['Obecný úrad', '', 'Bystrá', '62', '977 01', 'Brezno', 'obecbystra@stonline.sk'];
  o['00328995'] = ['Obecný úrad', '', '', '121', '053 62', 'Bystrany', 'bystrany121@gmail.com'];
  o['00330361'] = ['Obecný úrad', '', '', '14', '090 23', 'Havaj', ''];
  o['00332275'] = ['Obecný úrad', '', '', '98', '094 34', 'Bystré nad Topľou', 'ocu.bystre@slovanet.sk'];
  o['00318019'] = ['Obecný úrad', '', 'Mirka Nešpora', '1/17', '972 45', 'Bystričany', 'obec.bystricany@stonline.sk'];
  o['00316601'] = ['Obecný úrad', '', 'Bystrička', '260', '038 04', 'Bystrička', 'podatelna@bystricka.sk'];
  o['00321192'] = ['Mestský úrad', '', 'Námestie SR', '1/1', '014 01', 'Bytča', 'sekretariat@bytca.sk'];
  o['00331392'] = ['Obecný úrad', '', 'Okružná', '9', '076 13', 'Kazimír', 'obecbysta@centrum.sk'];
  o['00320552'] = ['Obecný úrad', '', 'Bzenica', '74', '966 01', 'Hliník nad Hronom', 'bzenica@slovanet.sk'];
  o['00326895'] = ['Obecný úrad', '', '', '38', '082 42', 'Bzenov', 'bzenov@onlinenet.sk'];
  o['00311456'] = ['Obecný úrad', '', 'Bzince pod Javorinou', '348', '916 11', 'Bzince pod Javorinou', 'starosta@obecbzince.sk'];
  o['00307785'] = ['Obecný úrad', '', 'Cabaj - Čápor', '543', '951 17', 'Cabaj - Čápor', 'obec-cabaj-capor@stonline.sk'];
  o['00319767'] = ['Obecný úrad', '', 'Bzovík', '299', '962 41', 'Bzovík', 'obecbzovik@stonline.sk'];
  o['00628883'] = ['Obecný úrad', '', 'Brezovecká', '96/8', '026 01', 'Dolný Kubín', 'bziny@ocu.sk;durajova.viera@gmail.com;benusjan1@gmail.com;bziny@zoznam.sk'];
  o['00648485'] = ['Obecný úrad', '', 'Bzovská Lehôtka', '26', '962 62', 'Sása', 'hospodarka.bzovska@gmail.com;bzovskalehotka@zoznam.sk'];
  o['00330370'] = ['Obecný úrad', '', '', '46', '090 33', 'Turany nad Ondavou', 'bzany@bzany.sk;obecbzany@gmail.com'];
  o['00332283'] = ['Obecný úrad', '', '', '126', '094 14', 'Sečovská Polianka', 'obeccabov@stonline.sk'];
  o['00318647'] = ['Obecný úrad', '', 'Cakov', '73', '980 42', 'Rimavská Seč', 'cakov@zoznam.sk'];
  o['00331406'] = ['Obecný úrad', '', 'Cejkov', '334', '076 05', 'Cejkov', 'obec.cejkov@trenet.sk'];
  o['00330388'] = ['Obecný úrad', '', '', '65', '090 16', 'Cernina', 'cerninask@gmail.com'];
  o['00319775'] = ['Obecný úrad', '', 'Cerovo', '259', '962 52', 'Cerovo', 'cerovo@zoznam.sk'];
  o['00309478'] = ['Obecný úrad', '', 'Cerová', '104', '906 33', 'Cerová', 'obeccerova@stonline.sk'];
  o['00324043'] = ['Obecný úrad', '', '', '89', '044 71', 'Cestice', 'ocu-cestice@stonline.sk'];
  o['00318825'] = ['Obecný úrad', '', 'M. Tompu', '139', '980 44', 'Lenártovce', 'ocu.chanava@centrum.sk'];
  o['00314510'] = ['Obecný úrad', '', 'Chlebnice', '186', '027 55', 'Dlhá nad Oravou', 'ouchlebnice@orava.sk'];
  o['00329916'] = ['Obecný úrad', '', '', '103', '064 01', 'Stará Ľubovňa', 'obecchmelnica@slnet.sk'];
  o['00323047'] = ['Obecný úrad', '', '', '83', '067 41', 'Chlmec', 'ouchlmec@minet.sk'];
  o['00322075'] = ['Obecný úrad', '', '', '145', '086 35', 'Becherov', 'obec.chmelova@centrum.sk'];
  o['00327115'] = ['Obecný úrad', '', '', '89', '082 15', 'Chmeľov', 'obec.chmelov@stonline.sk'];
  o['00327131'] = ['Obecný úrad', '', '', '39', '082 33', 'Chminianska Nová Ves', 'obecchminany@stonline.sk'];
  o['00327123'] = ['Obecný úrad', '', '', '98', '082 12', 'Kapušany', 'chmelovec@pobox.sk'];
  o['00327140'] = ['Obecný úrad', '', 'Školská', '30', '082 33', 'Chminianska Nová Ves', 'obecchmin.n.ves@stonline.sk'];
  o['00327158'] = ['Obecný úrad', '', '', '82', '082 33', 'Chminianska Nová Ves', 'obecchjakubovany@mail.t-com.sk'];
  o['00311642'] = ['Obecný úrad', '', 'Chocholná-Velčice', '312', '913 04', 'Chocholná-Velčice', 'obec@chocholna-velcice.sk'];
  o['00308021'] = ['Obecný úrad', '', 'Choča', '55', '951 76', 'Tesárske Mlyňany', 'obecchoca@stonline.sk'];
  o['00325210'] = ['Obecný úrad', '', '', '180', '072 63', 'Choňkovce', 'ouchonkovce@minet.sk'];
  o['00304760'] = ['Obecný úrad', '', 'Námestie Josipa Andriča', '17', '900 25', 'Chorvátsky Grob', 'info@chorvatskygrob.sk'];
  o['00618969'] = ['Obecný úrad', '', '', '57', '044 02', 'Turňa nad Bodvou', 'obecchorvaty@centrum.sk'];
  o['00330507'] = ['Obecný úrad', '', '', '3', '090 21', 'Chotča', 'radac@centrum.sk'];
  o['00306461'] = ['Obecný úrad', '', 'Chotín', '486', '946 31', 'Chotín', 'ocu.chotin@pnet.sk'];
  o['00699187'] = ['Obecný úrad', '', 'Mlynská', '326/3', '955 01', 'Chrabrany', 'obecchrabrany@obecchrabrany.sk'];
  o['00649872'] = ['Obecný úrad', '', 'Chrámec', '38', '980 42', 'Rimavská Seč', 'chramec@gemernet.sk'];
  o['00647411'] = ['Obecný úrad', '', 'Chrastince', '18', '991 08', 'Lesenice', 'chrasince@chrastince.sk;chrastince@gmail.com'];
  o['00324248'] = ['Obecný úrad', '', '', '86', '044 44', 'Kráľovce', 'obecchrastne@netkosice.sk'];
  o['00318124'] = ['Obecný úrad', '', 'Chrenovec - Brusno', '1', '972 32', 'Chrenovec - Brusno', 'podatelna@chrenovec.sk'];
  o['00329177'] = ['Obecný úrad', '', '', '165', '053 63', 'Spišský Hrušov', 'ocuchrast@chrastnadhornadom.sk'];
  o['00309567'] = ['Obecný úrad', '', 'Chropov', '132', '908 64', 'Chropov', 'obec.chropov@mail.t-com.sk'];
  o['00312584'] = ['Obecný úrad', '', 'Námestie 1. mája', '495/52', '922 05', 'Chtelnica', 'chtelnica@chtelnica.sk'];
  o['00633283'] = ['Obecný úrad', '', 'Chrťany', '101', '991 21', 'Závada', 'obecchrtany@post.sk'];
  o['00699195'] = ['Obecný úrad', '', 'Chudá Lehota', '21', '956 38', 'Šišov', 'obecchudalehota@stonline.sk'];
  o['00650188'] = ['Obecný úrad', '', 'Chválová', '10', '982 62', 'Gemerská Ves', 'obec.chvalova@pobox.sk'];
  o['00309575'] = ['Obecný úrad', '', 'Chvojnica', '1', '906 06', 'Vrbovce', 'obec@chvojnica.sk'];
  o['00310506'] = ['Obecný úrad', '', 'Cintorínska', '45/1', '956 33', 'Chynorany', 'podatelna@chynorany.sk'];
  o['00649040'] = ['Obecný úrad', '', 'Chvojnica', '24', '972 13', 'Nitrianské Pravno', 'starostka@chvojnica.eu'];
  o['00618071'] = ['Obecný úrad', '', 'Chyžné', '106', '049 18', 'Lubeník', 'obecchyzne@revnet.sk'];
  o['00312347'] = ['Obecný úrad', '', 'Námestie A. Hlinku', '31', '919 43', 'Cífer', 'cifer@cifer.sk'];
  o['00318027'] = ['Obecný úrad', '', 'Cigeľ', '192', '971 01', 'Prievidza', 'podatelna@cigel.sk'];
  o['00308927'] = ['Obecný úrad', '', 'Chľaba', '197', '943 66', 'Chľaba', 'chlaba@atlas.sk'];
  o['00321923'] = ['Obecný úrad', '', '', '33', '086 02', 'Gaboltov', 'obeccigelka@mail.t-com.sk'];
  o['00330396'] = ['Obecný úrad', '', '', '17', '086 37', 'Šarišské Čierne', 'obeccigla@gmail.com'];
  o['00699136'] = ['Obecný úrad', '', 'Cimenná', '33', '956 37', 'Zlatníky', '0918425791@orangemail.sk'];
  o['00319279'] = ['Obecný úrad', '', 'Dačov Lom', '262', '991 35', 'Dačov Lom', 'ocudacovlom@zoznam.sk'];
  o['00316008'] = ['Obecný úrad', '', 'Cinobaňa', '299', '985 22', 'Cinobaňa', 'ocucinobana@cinobana.sk'];
  o['00690546'] = ['Obecný úrad', '', '', '', '082 63', 'Jarovnice', ''];
  o['00689556'] = ['Obecný úrad', '', '', '33', '053 22', 'Odorín', 'obecdanisovce@stonline.sk'];
  o['00331481'] = ['Obecný úrad', '', 'Dubčekova', '227', '076 61', 'Bačkov', 'dargov@trenet.sk'];
  o['00332330'] = ['Obecný úrad', '', '', '182', '093 03', 'Vranov nad Topľou 3', 'ocudavidov@dknet.sk'];
  o['00324094'] = ['Obecný úrad', '', '', '147', '045 01', 'Moldava nad Bodvou', 'ocudebrad@stonline.sk'];
  o['00312363'] = ['Obecný úrad', '', 'Dechtice', '488', '919 53', 'Dechtice', 'obec@dechtice.sk'];
  o['00322920'] = ['Obecný úrad', '', '', '28', '067 12', 'Koškovce', 'dedacov@pobox.sk'];
  o['00306428'] = ['Obecný úrad', '', 'Nám. 4. apríla', '7/8', '946 03', 'Kolárovo', 'sekretariat@obecdedinamladeze.sk'];
  o['00308854'] = ['Obecný úrad', '', 'Dedinka', '97', '941 50', 'Dedinka', 'ocudedinka@zoznam.sk'];
  o['00320561'] = ['Obecný úrad', '', 'SNP', '39', '969 01', 'Banská Štiavnica', 'ocudekys@stonline.sk'];
  o['00328171'] = ['Obecný úrad', '', '', '79', '049 73', 'Dedinky', 'ocu.dedinky@gmail.com'];
  o['00306878'] = ['Obecný úrad', '', 'Demandice', '236', '935 85', 'Demandice', 'aktiv@demandice.sk;referentka@demandice.sk'];
  o['00326950'] = ['Obecný úrad', '', '', '129', '082 13', 'Tulčík', 'obecdemjata@stonline.sk'];
  o['00315168'] = ['Obecný úrad', '', 'Demänovská Dolina', '258', '032 51', 'Demänovská Dolina', 'urad@demanovskadolina.info'];
  o['00332348'] = ['Obecný úrad', '', '', '1', '094 31', 'Hanušovce nad Topľou', 'obec@detrik.gityposta.sk'];
  o['00319805'] = ['Mestský úrad', '', 'J. G. Tajovského', '7', '962 12', 'Detva', 'sekretariat@detva.sk'];
  o['00319813'] = ['Obecný úrad', '', 'Detvianska Huta', '102', '962 06', 'Detvianska Huta', 'obec.dh@gmail.com'];
  o['00587508'] = ['Obecný úrad', '', 'Devičany', '75', '935 04', 'Devičany', 'oudevicany@gmail.com'];
  o['00649384'] = ['Obecný úrad', '', 'Devičie', '13', '962 65', 'Hontianske Nemce', 'ocudevicie@gmail.com'];
  o['00310336'] = ['Obecný úrad', '', 'Dežerice', '193', '957 03', 'Bánovce nad Bebravou 3', 'obecdezerice@post.sk'];
  o['00648370'] = ['Obecný úrad', '', 'Diaková', '18', '038 02', 'Dražkovce pri Martine', 'podatelna@diakova.sk'];
  o['00305898'] = ['Obecný úrad', '', 'Hlavná', '1', '925 81', 'Diakovce', 'starosta@diakovce.sk'];
  o['00318051'] = ['Obecný úrad', '', 'Diviacka Nová Ves', '1', '972 24', 'Diviacká Nová Ves', 'ocu@diviacka.sk'];
  o['00318060'] = ['Obecný úrad', '', 'Diviaky nad Nitricou', '167', '972 25', 'Diviaky nad Nitricou', 'obec@diviaky.sk'];
  o['00316041'] = ['Obecný úrad', '', 'Námestie Mieru', '654/3', '985 52', 'Divín', 'obecdivin@zoznam.sk'];
  o['00321222'] = ['Obecný úrad', '', 'Divinka', '142', '013 31', 'Divinka', 'obec@divinka-lalinok.sk;obecdivinka@gmail.com'];
  o['00321214'] = ['Obecný úrad', '', 'Divina', '50', '013 31', 'Divina', 'financie@divina.sk;kancelaria.divina@gmail.com'];
  o['00682195'] = ['Obecný úrad', '', 'Dlhá', '1', '919 01', 'Suchá nad Parnou', 'ocudlha@stonline.sk'];
  o['00313998'] = ['Obecný úrad', '', 'Dlhá nad Kysucou', '258', '023 54', 'Turzovka', 'obec.dnk@gmail.com'];
  o['00314447'] = ['Obecný úrad', '', 'Dlhá nad Oravou', '250', '027 55', 'Dlhá nad Oravou', 'dlhanadoravou@dlhanadoravou.sk'];
  o['00328189'] = ['Obecný úrad', '', 'Hlavná', '47', '049 55', 'Dlhá Ves', 'obec.dlhaves@gmail.com'];
  o['00305901'] = ['Obecný úrad', '', 'Dlhá nad Váhom', '225', '927 05', 'Šaľa 5', 'obec@dlhanadvahom.sk'];
  o['00322938'] = ['Obecný úrad', '', '', '187', '067 82', 'Dlhé nad Cirochou', 'obecdlhe@stonline.sk'];
  o['00332356'] = ['Obecný úrad', '', 'Dlhá', '173/84', '094 13', 'Sačurov', 'obec@dlheklcovo.sk'];
  o['00321231'] = ['Obecný úrad', '', 'Dlhé Pole', '249', '013 32', 'Dlhé Pole', 'ou.dp@stonline.sk'];
  o['00330400'] = ['Obecný úrad', '', 'Dlhoňa', '6', '090 02', 'Kružlová', 'obec_dlhona@centrum.sk'];
  o['00329011'] = ['Obecný úrad', '', '', '13', '054 01', 'Levoča', 'obec@dlhestraze.sk'];
  o['00648221'] = ['Obecný úrad', '', 'Dlžín', '70', '972 26', 'Nitrianské Rudno', 'uctovnicka.dlzin@mail.t-com.sk;obecdlzin@mail.t-com.sk;obecddlzin@mail.t-com.sk'];
  o['00331490'] = ['Obecný úrad', '', 'Hlavná', '151/9', '076 41', 'Bieľ', 'obecdobra@gmail.com'];
  o['00319830'] = ['Obecný úrad', '', 'Námestie SNP', '47/9', '962 61', 'Dobrá Niva', 'martina.kolenyova@obecdobraniva.sk'];
  o['00305359'] = ['Obecný úrad', '', 'Dobrohošť', '99', '930 31', 'Vojka nad Dunajom', 'dobrohost@dobrohost.sk;obec@dobrohost.sk'];
  o['00316059'] = ['Obecný úrad', '', 'Dobroč', '140', '985 53', 'Mýtna', 'dobroc@mail.t-com.sk'];
  o['00312380'] = ['Obecný úrad', '', 'Dobrá Voda', '121', '919 54', 'Dobrá Voda', 'dobravoda.ekonomka@gmail.com'];
  o['00330418'] = ['Obecný úrad', '', '', '', '090 01', 'Kapišová', 'obec.dobroslava@slovanet.sk'];
  o['00328197'] = ['Mestský úrad', '', 'SNP', '554', '049 25', 'Dobšiná', 'dobsina@dobsina.sk'];
  o['00317136'] = ['Obecný úrad', '', 'Dohňany', '68', '020 51', 'Dohňany', 'sekretariat@dohnany.sk'];
  o['00319287'] = ['Obecný úrad', '', 'Dolinka', '211', '991 28', 'Vinica', 'nagy.jozsef@dolinka.org;dolinka@dolinka.org'];
  o['00309508'] = ['Obecný úrad', '', 'Dojč', '125', '906 02', 'Dojč', 'obec@dojc.sk'];
  o['00317144'] = ['Obecný úrad', '', 'Dolná Breznica', '62', '020 61', 'Lednické Rovne', 'dolnabreznica@stonline.sk'];
  o['00312398'] = ['Obecný úrad', '', 'L. van Beethovena', '139/1', '919 65', 'Dolná Krupá', 'obec.dolna.krupa@stonline.sk'];
  o['00313351'] = ['Obecný úrad', '', 'Dolná Lehota', '162', '976 98', 'Lopej', 'dolnalehota@zoznam.sk'];
  o['00313360'] = ['Obecný úrad', '', 'Dolná Mičiná', '1', '974 01', 'Banská Bystrica', 'obecdolna.micina@mail.t-com.sk;info@dolnamicina.sk'];
  o['00317152'] = ['Obecný úrad', '', 'Dolná Mariková', '150', '018 02', 'Dolná Mariková', 'obecdolnamarikova@playmax.sk'];
  o['00311499'] = ['Obecný úrad', '', 'Dolná Poruba', '61', '914 44', 'Omšenie', 'obecdporuba@mail.t-com.sk'];
  o['00611638'] = ['Obecný úrad', '', 'J. Majku', '650', '925 63', 'Dolná Streda', 'dolnastreda@seznam.cz'];
  o['00306894'] = ['Obecný úrad', '', 'Dolná Seč', '22', '935 31', 'Dolná Seč', 'urad@dolnasec.sk'];
  o['00319295'] = ['Obecný úrad', '', 'Hlavná', '52/75', '991 02', 'Dolná Strehová', 'obec@dolnastrehova.sk'];
  o['00311502'] = ['Obecný úrad', '', 'Dolná Súča', '2', '913 32', 'Dolná Súča', 'obec.dolnasuca@stonline.sk'];
  o['00321249'] = ['Obecný úrad', '', 'Dolná Tižina', '333', '013 04', 'Dolná Tižina', 'oudolnatizina@stonline.sk'];
  o['00320587'] = ['Obecný úrad', '', 'Dolná Ves', '81', '967 01', 'Kremnica', 'dolnaves@stonline.sk'];
  o['00320595'] = ['Obecný úrad', '', 'Dolná Ždaňa', '46', '966 11', 'Hliník nad Hronom', 'podatelna@dolnazdana.sk'];
  o['00320579'] = ['Obecný úrad', '', 'Dolná Trnávka', '66', '966 21', 'Lovča', 'sekretariat@dolnatrnavka.sk'];
  o['00312401'] = ['Obecný úrad', '', 'Dolné Dubové', '1', '919 52', 'Dolné Dubové', 'obec@dolnedubove.sk'];
  o['00692328'] = ['Obecný úrad', '', 'Školská', '136', '020 01', 'Púchov', 'ekonomka@obecdolnekockovce.sk;obec_dk@slovanet.sk'];
  o['00686301'] = ['Obecný úrad', '', 'SNP', '69', '919 27', 'Dolné Lovčice', 'podatelna@lovcice.sk'];
  o['00648141'] = ['Obecný úrad', '', 'Dolné Mladonice', '3', '962 41', 'Bzovík', 'ocudm@stonline.sk'];
  o['37869051'] = ['Obecný úrad', '', 'Nitrianska', '36', '951 45', 'Horné Lefantovce', 'lefantovce@stonline.sk;dolne.lefantovce@stonline.sk'];
  o['00310352'] = ['Obecný úrad', '', 'Dolné Naštice', '36', '957 01', 'Bánovce nad Bebravou 1', 'obecdolnenastice@stonline.sk;obecdnastice@centrum.sk'];
  o['00307891'] = ['Obecný úrad', '', 'Dolné Obdokovce', '103', '951 02', 'Pohranice', 'dolneobdokovce@mail.t-com.sk'];
  o['00312410'] = ['Obecný úrad', '', 'Dolné Orešany', '210', '919 02', 'Dolné Orešany', 'ou@dolneoresany.sk'];
  o['00305910'] = ['Obecný úrad', '', 'Dolné Saliby', '355', '925 02', 'Dolné Saliby', 'alsoszeli@dolnesaliby.sk;dolnesaliby@dolnesaliby.sk'];
  o['00319309'] = ['Obecný úrad', '', 'Dolné Plachtince', '95', '991 24', 'Dolné Plachtince', 'obecdp@gmail.com;obecdp@stonline.sk'];
  o['00306908'] = ['Obecný úrad', '', 'Dolné Semerovce', '163', '935 85', 'Demandice', 'd.semerovce@stonline.sk'];
  o['00312428'] = ['Obecný úrad', '', 'Dolné Otrokovce', '44', '920 61', 'Dolné Trhovište', 'ocudotrokovce@wircom.sk'];
  o['00311511'] = ['Obecný úrad', '', 'Dolné Srnie', '242', '916 41', 'Dolné Srnie', 'sekretariat@dolnesrnie.sk'];
  o['00319317'] = ['Obecný úrad', '', 'Dolné Strháre', '126', '991 03', 'Pôtor', 'dolnestrhare@procomp.sk'];
  o['00312436'] = ['Obecný úrad', '', 'Dolné Trhovište', '152', '920 61', 'Dolné Trhovište', 'oud.trhoviste@wircom.sk'];
  o['00318086'] = ['Obecný úrad', '', 'Záhumenská', '154/74', '972 23', 'Dolné Vestenice', 'obec@dolnevestenice.sk'];
  o['00649643'] = ['Obecný úrad', '', 'Dolné Zahorany', '96', '985 42', 'Velké Dravce', 'obecdolnezahorany@gmail.com'];
  o['00653942'] = ['Obecný úrad', '', 'Dolné Zelenice', '107', '920 52', 'Siladice', 'dolnezelenice@gmail.com'];
  o['00305367'] = ['Obecný úrad', '', 'Dolný Bar', '30', '930 14', 'Dolný Bar', 'obec.dolnybar@stonline.sk'];
  o['00648451'] = ['Obecný úrad', '', 'Dolný Badín', '16', '962 51', 'Čabradský Vrbovok', 'obecdolnybadin@zvnet.net'];
  o['00313378'] = ['Obecný úrad', '', 'Dolný Harmanec', '61', '976 03', 'Harmanec', 'obec.dolnyharmanec@mail.t-com.sk'];
  o['00613941'] = ['Obecný úrad', '', 'Dolný Chotár', '45', '925 41', 'Kráľov Brod', 'oudchotar@gmail.com'];
  o['00321257'] = ['Obecný úrad', '', 'Osloboditeľov', '131/35', '013 41', 'Dolný Hričov', 'obecdolnyhricov@stonline.sk'];
  o['00314436'] = ['Mestský úrad', '', 'Hviezdoslavove námestie', '1651/2', '026 01', 'Dolný Kubín', 'sekr1@dolnykubin.sk'];
  o['00648361'] = ['Obecný úrad', '', 'Dolný Kalník', '16', '038 02', 'Dražkovce pri Martine', 'ou@dolnykalnik.sk'];
  o['00317179'] = ['Obecný úrad', '', 'Dolný Lieskov', '193', '018 21', 'Dolný Lieskov', 'oulieskov3@playmax.sk'];
  o['00312452'] = ['Obecný úrad', '', 'Dolný Lopašov', '79', '922 04', 'Dolný Lopašov', 'starosta@obecdlopasov.sk'];
  o['00308871'] = ['Obecný úrad', '', 'Dolný Ohaj', '109', '941 43', 'Dolný Ohaj', 'obecnyurad@obecdolnyohaj.sk'];
  o['00314005'] = ['Obecný úrad', '', 'Dolný Vadičov', '123', '023 45', 'Horný Vadičov', 'mirka.ondreasova@gmail.com;obec@dolny-vadicov.sk'];
  o['00306916'] = ['Obecný úrad', '', 'Hlavná', '34', '935 37', 'Dolný Pial', 'podatelna@dolnypial.sk'];
  o['00305430'] = ['Obecný úrad', '', 'M. Korvína', '676', '930 10', 'Dolný Štál', 'alistal1@alistal.sk'];
  o['00587516'] = ['Obecný úrad', '', 'Domadice', '23', '935 87', 'Santovka', 'domadice@domadice.sk'];
  o['00648086'] = ['Obecný úrad', '', 'Domaníky', '78', '962 65', 'Hontianske Nemce', 'obecdomaniky@gmail.com'];
  o['00317195'] = ['Obecný úrad', '', 'Domaniža', '426', '018 16', 'Domaniža', 'obec@domaniza.sk'];
  o['00329037'] = ['Obecný úrad', '', '', '92', '053 02', 'Spišský Hrhov', 'domanovce@stonline.sk'];
  o['00313386'] = ['Obecný úrad', '', 'Námestie sv. Antona Paduánskeho', '3', '976 39', 'Donovaly', 'obec@donovaly.sk'];
  o['00304727'] = ['Obecný úrad', '', 'Doľany', '169', '900 88', 'Doľany', 'oudolany@dolany.sk'];
  o['00649198'] = ['Obecný úrad', '', 'Drábsko', '10', '976 53', 'Lom nad Rimavicou', 'obecdrabsko@gmail.com'];
  o['00650196'] = ['Obecný úrad', '', 'Dražice', '32', '980 23', 'Teplý Vrch', 'ocu@drazice.sk'];
  o['00331503'] = ['Obecný úrad', '', 'Drahňov', '154', '076 74', 'Drahňov', 'obec.drahnov@gmail.com'];
  o['00329029'] = ['Obecný úrad', '', '', '2', '053 02', 'Spišský Hrhov', 'ou.dolany@levonetmail.sk'];
  o['00312461'] = ['Obecný úrad', '', 'Hlavná', '429/127', '922 41', 'Drahovce', 'ou@drahovce.com'];
  o['00316628'] = ['Obecný úrad', '', 'Dražkovce', '45', '038 02', 'Dražkovce', 'oudrazkovce@stonline.sk'];
  o['00329045'] = ['Obecný úrad', '', '', '27', '053 14', 'Dravce', 'obecdravce@stonline.sk'];
  o['00649295'] = ['Obecný úrad', '', 'Drážovce', '43', '962 68', 'Hontianske Tesáre', 'obecdrazovce@zoznam.sk'];
  o['00649953'] = ['Obecný úrad', '', 'Drienčany', '10', '980 23', 'Teplý Vrch', 'ocu@driencany.sk'];
  o['00326968'] = ['Obecný úrad', '', '', '168', '083 01', 'Sabinov', 'obec@drienica.sk;drienica@drienica.sk'];
  o['00326984'] = ['Obecný úrad', '', 'Mierová', '1', '082 04', 'Drienov', 'ocu@drienov.sk'];
  o['00324108'] = ['Obecný úrad', '', '', '368', '044 01', 'Drienovec', 'podatelna@obecdrienovec.sk'];
  o['00648230'] = ['Obecný úrad', '', 'Drienovo', '55', '962 51', 'Čabradský Vrbovok', 'obecdrienovo@gmail.com'];
  o['00326976'] = ['Obecný úrad', '', '', '83', '082 01', 'Kendice', 'starosta.dnv@stonline.sk'];
  o['00311529'] = ['Obecný úrad', '', 'Drietoma', '29', '913 03', 'Drietoma', 'obec@drietoma.sk'];
  o['00328201'] = ['Obecný úrad', '', '', '149', '049 42', 'Drnava', 'obec.drnava@centrum.sk'];
  o['00649911'] = ['Obecný úrad', '', 'Drňa', '50', '980 03', 'Šimonovce', 'obec.drna@gmail.com'];
  o['00324116'] = ['Obecný úrad', '', 'Hlavná', '38', '044 31', 'Družstevná pri Hornáde', 'obec.druzstevna@gmail.com'];
  o['00590533'] = ['Obecný úrad', '', 'Držkovce', '76', '982 62', 'Gemerská Ves', 'obecdrzkovce@zoznam.sk;obec@obec-drzkovce.sk'];
  o['00306932'] = ['Obecný úrad', '', 'Drženice', '83', '935 03', 'Bátovce', 'obec.drzenice@pobox.sk'];
  o['00321931'] = ['Obecný úrad', '', '', '9', '086 12', 'Kurima', 'obecdubinne@stonline.sk'];
  o['00654868'] = ['Obecný úrad', '', 'Dubnička', '62', '957 03', 'Bánovce nad Bebravou 3', 'jozef.petrek@slovanet.sk'];
  o['00317209'] = ['Mestský úrad', '', 'Bratislavská', '434/9', '018 41', 'Dubnica nad Váhom', 'primator@dubnica.eu'];
  o['00308889'] = ['Obecný úrad', '', 'Dubník', '244', '941 35', 'Dubník', 'obec.dubnik@konfer.eu'];
  o['00649546'] = ['Obecný úrad', '', 'Dubno', '40', '980 35', 'Gemerský Jablonec', 'obecdubno@gmail.com'];
  o['00311537'] = ['Obecný úrad', '', 'Dubodiel', '33', '913 23', 'Dubodiel', 'obecnyurad@dubodiel.sk'];
  o['00304735'] = ['Obecný úrad', '', 'Hlavná ulica', '39', '900 90', 'Dubová', 'podatelna@dubova.sk'];
  o['00330426'] = ['Obecný úrad', '', '', '12', '090 14', 'Dubová', ''];
  o['00309516'] = ['Obecný úrad', '', 'Dubovce', '175', '908 62', 'Dubovce pri Skalici', 'oudubovce@dubovce.sk'];
  o['00319881'] = ['Obecný úrad', '', 'Dubové', '82', '962 61', 'Dobrá Niva', 'dubove@stonline.sk'];
  o['00312479'] = ['Obecný úrad', '', 'Dubovany', '200', '922 08', 'Veselé pri Piešťanoch', 'podatelna@dubovany.sk'];
  o['00316636'] = ['Obecný úrad', '', 'Dubové                                        Dubové 50      Dubové', '50', '038 23', 'Dubové', 'oudubove@gaya.sk'];
  o['00318663'] = ['Obecný úrad', '', 'Dubovec', '23', '980 41', 'Dubovec', 'ou.dubovec@azet.sk'];
  o['00326992'] = ['Obecný úrad', '', '', '190', '082 71', 'Lipany', 'ocudubovica@stonline.sk'];
  o['00329053'] = ['Obecný úrad', '', '', '54', '053 05', 'Beharovce', 'obecdubrava@spisnet.sk'];
  o['00322946'] = ['Obecný úrad', '', '', '46', '067 73', 'Ubľa', 'ou.dubrava@gmail.com'];
  o['00315176'] = ['Obecný úrad', '', 'Dúbrava', '191', '032 12', 'Dúbrava pri Liptovskom Mikuláši', 'podatelna@obecdubrava.sk'];
  o['00313408'] = ['Obecný úrad', '', 'Dúbravica', '29', '976 33', 'Poniky', 'obec@dubravica.sk'];
  o['00325112'] = ['Obecný úrad', '', 'Dúbravka', '88', '072 15', 'Budkovce', 'obecdubravka@minet.sk'];
  o['00319899'] = ['Obecný úrad', '', 'Dúbravy', '196', '962 24', 'Dúbravy', 'obec@dubravy.sk'];
  o['31302955'] = ['Obecný úrad', '', 'Dukovce', '27', '086 44', 'Kuková', 'obecdukovce@gmail.com;obecdukovce@wi-net.sk'];
  o['31826270'] = ['Obecný úrad', '', 'Ducové', '121', '922 21', 'Moravany nad Váhom', 'kolarikova@ducove.sk;ducove@ducove.sk'];
  o['00319902'] = ['Mestský úrad', '', 'Okružná', '212', '962 71', 'Dudince', 'msu@dudince-mesto.sk'];
  o['00317217'] = ['Obecný úrad', '', 'Dulov', '168', '018 52', 'Pruské', 'obecdulov@stonline.sk'];
  o['00327000'] = ['Obecný úrad', '', '', '18', '082 52', 'Kokošovce', 'dulovaves@szm.sk'];
  o['00306444'] = ['Obecný úrad', '', 'Hlavná', '33', '946 56', 'Dulovce', 'starosta@dulovce.eu'];
  o['00649481'] = ['Obecný úrad', '', 'Dulovo', '244', '980 21', 'Bátka', 'oudulovo@centrum.sk'];
  o['00314013'] = ['Obecný úrad', '', 'Dunajov', '222', '023 02', 'Krásno nad Kysucou', 'obecdunajov@mail.t-com.sk;obec@dunajov.sk'];
  o['00310387'] = ['Obecný úrad', '', 'Dvorec', '69', '956 55', 'Veľké Chlievany', 'obecdvorec@stonline.sk'];
  o['00400009'] = ['Obecný úrad', '', 'Jánošíkova', '466/7', '900 42', 'Dunajská Lužná', 'info@dunajskaluzna.sk'];
  o['00305383'] = ['Mestský úrad', '', 'Hlavná', '50/16', '929 01', 'Dunajská Streda', 'primator@dunstreda.eu'];
  o['00800198'] = ['Obecný úrad', '', 'Kondého ulica', '20', '930 21', 'Jahodná pri Dunajskej Strede', 'ocudunklatov@stonline.sk'];
  o['00330434'] = ['Obecný úrad', '', '', '66', '091 01', 'Stropkov', 'obecdupl@stonline.sk'];
  o['00699161'] = ['Obecný úrad', '', 'Dvorany nad Nitrou', '13', '956 11', 'Ludanice', 'dvoranynadnitrou@stonline.sk'];
  o['00331511'] = ['Obecný úrad', '', 'Lipová', '79/1', '076 62', 'Parchovany', 'obecdvorianky@centrum.sk'];
  o['00312495'] = ['Obecný úrad', '', 'Dvorníky', '428', '920 56', 'Dvorníky', 'obecdvorniky@stonline.sk'];
  o['00691429'] = ['Obecný úrad', '', '', '4', '044 02', 'Turňa nad Bodvou', 'obecdvorniky@gmail.com'];
  o['36105724'] = ['Obecný úrad', '', 'Čab', '1', '951 24', 'Nové Sady', 'obecnyuradcab@stonline.sk'];
  o['00319783'] = ['Obecný úrad', '', 'Čabradský Vrbovok', '59', '962 51', 'Čabradský Vrbovok', 'cabrad@post.sk'];
  o['00308897'] = ['Obecný úrad', '', 'Hlavné námestie', '6', '941 31', 'Dvory nad Žitavou', 'zastupca@dvory.sk'];
  o['00322865'] = ['Obecný úrad', '', '', '74', '067 17', 'Čabalovce', 'obeccabalovce@centrum.sk'];
  o['00322873'] = ['Obecný úrad', '', 'Čabiny', '141', '067 02', 'Čabiny', 'starostacabiny1@centrum.sk'];
  o['00311454'] = ['Obecný úrad', '', 'Malinovského', '769', '916 21', 'Čachtice', 'sekretariat@cachtice.sk'];
  o['00313971'] = ['Mestský úrad', '', 'Námestie Slobody', '30', '022 01', 'Čadca', 'sekretariat@mestocadca.sk'];
  o['00306835'] = ['Obecný úrad', '', 'Čajkov', '210', '935 24', 'Čajkov', 'podatelna@obec-cajkov.sk'];
  o['00307807'] = ['Obecný úrad', '', 'Čakajovce', '58', '951 43', 'Jelšovce', 'info@cakajovce.sk'];
  o['00306843'] = ['Obecný úrad', '', 'Čaka', '112', '935 68', 'Čaka', 'caka@caka.eu'];
  o['00316016'] = ['Obecný úrad', '', 'Čakanovce', '312', '985 58', 'Radzovce', 'sekretariat@obeccakanovce.sk'];
  o['00324051'] = ['Obecný úrad', '', '', '79', '044 45', 'Bidovce', 'obec@cakanovce.eu'];
  o['00305324'] = ['Obecný úrad', '', 'Čakany', '115', '930 40', 'Štvrtok na Ostrove', 'ocucakany@stonline.sk'];
  o['00332291'] = ['Obecný úrad', '', '', '116', '094 35', 'Soľ', 'ocu.caklov@gmail.com'];
  o['00316024'] = ['Obecný úrad', '', 'Čamovce', '69', '986 01', 'Fiľakovo', 'oucamovce@mail.t-com.sk'];
  o['00306401'] = ['Obecný úrad', '', 'Staničná', '170', '946 02', 'Čalovec', 'ocucalovec@gutanet.sk'];
  o['00324060'] = ['Obecný úrad', '', 'Osloboditeľov', '22', '044 14', 'Čaňa', 'obeccana@centrum.sk'];
  o['00309486'] = ['Obecný úrad', '', 'M. Kollára', '53', '908 43', 'Čáry', 'obeccary@mail.t-com.sk;obeccary@cary.sk'];
  o['00307823'] = ['Obecný úrad', '', 'Čaradice', '157', '953 01', 'Zlaté Moravce', 'obeccaradice@stonline.sk'];
  o['00304701'] = ['Obecný úrad', '', 'Hlavná', '168', '900 89', 'Častá', 'podatelna@obec-casta.sk'];
  o['00309494'] = ['Obecný úrad', '', 'Častkov', '35', '906 04', 'Rohov', 'obeccastkov@centrum.sk'];
  o['00311472'] = ['Obecný úrad', '', 'Častkovce', '399', '916 27', 'Častkovce', 'obec@castkovce.eu'];
  o['00587672'] = ['Obecný úrad', '', 'Hlavná', '80', '935 63', 'Čata', 'cata@nextra.sk'];
  o['00319244'] = ['Obecný úrad', '', 'Szedera Fabiána', '320/162', '991 25', 'Čebovce', 'obec@cebovce.sk'];
  o['00304719'] = ['Obecný úrad', '', 'Hlavná', '333', '900 83', 'Čataj', 'sekretariat@cataj.sk'];
  o['00318035'] = ['Obecný úrad Čavoj', '', 'Čavoj', '86', '972 29', 'Čavoj', 'obec.cavoj@centrum.sk'];
  o['00308315'] = ['Obecný úrad', '', 'Hlavná', '112/74', '951 07', 'Čechynce', 'obec.cechynce@slovanet.sk'];
  o['00308838'] = ['Obecný úrad', '', 'Čechy', '135', '941 32', 'Semerovo', 'ocu@obeccechy.sk'];
  o['00324078'] = ['Obecný úrad', '', 'Buzická', '55', '044 71', 'Čečejovce', 'obec@cecejovce.sk'];
  o['00325104'] = ['Obecný úrad', '', 'Čečehov', '74', '072 11', 'Čečehov', 'cecehov@cecehov.sk'];
  o['00319791'] = ['Obecný úrad', '', 'Čekovce', '19', '962 41', 'Bzovík', 'obeccekovce@zvnet.net'];
  o['00692409'] = ['Obecný úrad', '', 'Čelkova Lehota', '23', '018 16', 'Domaniža', 'obeccelkovalehota@azet.sk'];
  o['00319252'] = ['Obecný úrad', '', 'Čeláre', '120', '991 22', 'Bušince', 'obec.celare@gmail.com'];
  o['00319261'] = ['Obecný úrad', '', 'Čelovce', '113', '991 41', 'Čelovce', 'janpetroch@centrum.sk;obeccelovce@gmail.com'];
  o['00690597'] = ['Obecný úrad', '', '', '49', '082 14', 'Pušovce', 'celovce@nextra.sk;celovce@gtsmail.sk'];
  o['31871224'] = ['Obecný úrad', '', 'Čenkovce', '2', '930 39', 'Zlaté Klasy', 'ocucenkovce@stonline.sk'];
  o['00649988'] = ['Obecný úrad', '', 'S. Kollára', '33', '979 01', 'Rimavská Sobota', 'obec.cerencany@stonline.sk'];
  o['00318043'] = ['Obecný úrad', '', 'Pálenická', '491/4', '972 46', 'Čereňany', 'ocu@cerenany.sk'];
  o['00331422'] = ['Obecný úrad', '', 'Dlhá', '100', '076 81', 'Čerhov', 'obeccerhov@zoznam.sk'];
  o['00313335'] = ['Obecný úrad', '', 'Čerín', '11', '974 01', 'Banská Bystrica', 'obeccerin@stonline.sk'];
  o['00308846'] = ['Obecný úrad', '', 'Černík', '145', '941 05', 'Černík', 'obec.cernik@datagate.sk'];
  o['00699152'] = ['Obecný úrad', '', 'Čermany', '6', '956 08', 'Horné Obdokovce', 'obeccermany@zoznam.sk'];
  o['00322881'] = ['Obecný úrad', '', '', '', '067 23', 'Baškovce pri Humennom', 'oucernina@gmail.com'];
  o['00331431'] = ['Obecný úrad', '', 'Lesná', '40/12', '076 32', 'Borša', 'starostkacernochov@gmail.com'];
  o['00326917'] = ['Obecný úrad', '', '', '41', '082 07', 'Tuhrina', 'cervenica@centrum.sk;cervenica@gmail.com'];
  o['00326909'] = ['Obecný úrad', '', 'Červená voda', '28', '083 01', 'Sabinov', 'obec@cervenavoda.sk'];
  o['00322890'] = ['Obecný úrad', '', 'Čertižné', '57', '067 52', 'Habura', 'ocu.certizne57@gmail.com'];
  o['00656127'] = ['Obecný úrad', '', 'Červený Hrádok', '193', '951 82', 'Malé Vozokany', 'cervenyhradok@gmail.com'];
  o['00312355'] = ['Obecný úrad', '', 'Kalinčiakova', '26', '920 42', 'Červeník', 'stefankova@cervenik.sk;cervenik@cervenik.sk'];
  o['00326925'] = ['Obecný úrad', '', '', '122', '082 56', 'Pečovská Nová Ves', 'cervenica.s@centrum.sk'];
  o['00326135'] = ['Obecný úrad', '', '', '65', '059 06', 'Červený Kláštor', 'obecck@orangemail.sk;obecck@sinet.sk'];
  o['00317128'] = ['Obecný úrad', '', 'Červený Kameň', '226', '018 56', 'Červený Kameň', 'ocuck@centrum.sk'];
  o['00634964'] = ['Obecný úrad', '', 'Červeňany', '29', '991 01', 'Senné', 'obeccervenany@azet.sk'];
  o['00316032'] = ['Obecný úrad', '', 'České Brezovo', '97', '985 03', 'České Brezovo', 'ceske.brezovo@zoznam.sk;info@ceskebrezovo.sk;ceske.brezovo@zoznam.sk'];
  o['00307831'] = ['Obecný úrad', '', 'Čeľadice', '143', '951 03', 'Čeľadice', 'obecceladice@stonline.sk'];
  o['00699144'] = ['Obecný úrad', '', 'Čeľadince', '3', '956 16', 'Nitrianska Streda', 'celadince@stonline.sk'];
  o['00331414'] = ['Obecný úrad', '', 'Hlavná', '72/49', '076 17', 'Čeľovce', 'ocu@celovce.sk'];
  o['00331520'] = ['Obecný úrad', '', 'Hlavná', '78', '075 01', 'Trebišov 1', 'obecegres@kid.sk'];
  o['00331449'] = ['Obecný úrad', '', 'Čičarovce', '90', '076 71', 'Čičarovce', 'cicarovce@sivinet.sk'];
  o['00306410'] = ['Obecný úrad', '', 'Dunajská', '41', '946 19', 'Číčov', 'ocucicov@stonline.sk'];
  o['00332305'] = ['Obecný úrad', '', '', '26', '093 01', 'Vranov nad Topľou', 'obec@cicava.sk'];
  o['00321206'] = ['Obecný úrad', '', 'Čičmany', '166', '013 15', 'Rajecká Lesná', 'obec@obeccicmany.info'];
  o['00328154'] = ['Obecný úrad', '', '', '68', '049 36', 'Slavošovce', 'obec.ciernalehota@stonline.sk'];
  o['00331457'] = ['Obecný úrad', '', 'Hlavná', '24/17', '076 43', 'Čierna nad Tisou', 'oucierna@cierna.eu'];
  o['00310310'] = ['Obecný úrad', '', 'Čierna Lehota', '154', '956 53', 'Slatina nad Bebravou', 'obecnzwr@stonline.sk'];
  o['00305871'] = ['Obecný úrad', '', 'Čierna Voda', '102', '925 06', 'Čierna Voda', 'z.csadyova@gmail.com;ciernavoda@ciernavoda-nyek.sk'];
  o['00331465'] = ['Mestský úrad', '', 'Nám. pionierov', '151/1', '076 43', 'Ćierna nad Tisou', 'mesto@ciernanadtisou.sk'];
  o['00313980'] = ['Obecný úrad', '', 'Čierne', '189', '023 13', 'Čierne', 'obeccierne@stonline.sk'];
  o['00307858'] = ['Obecný úrad', '', 'Mlynská', '2', '953 05', 'Čierne Kľačany', 'cierne-klacany@in.slovanet.sk'];
  o['00332313'] = ['Obecný úrad', '', '', '232', '094 34', 'Bystré nad Topľou', 'ocu.ciernent@stonline.sk'];
  o['00331473'] = ['Obecný úrad', '', 'Čierne Pole', '16', '079 01', 'Veľké Kapušany', 'ciernepole@centrum.sk'];
  o['00313343'] = ['Obecný úrad', '', 'Závodie', '2/2', '976 52', 'Čierny Balog', 'ciernybalog@ciernybalog.sk'];
  o['00305880'] = ['Obecný úrad', '', 'Čierny Brod', '', '925 08', 'Čierny Brod', 'obecciernybrod@stonline.sk'];
  o['00650005'] = ['Obecný úrad', '', 'Čierny Potok', '', '980 31', 'Hodejov', 'obec.ciernypotok@mail.t-com.sk'];
  o['00634956'] = ['Obecný úrad', '', 'Čimhová', '20', '027 12', 'Liesek', 'ocucimhova@stonline.sk'];
  o['00305341'] = ['Obecný úrad', '', 'Čiližská Radvaň', '285', '930 08', 'Čiližská Radvaň', 'obec.radvan@gmail.com'];
  o['00307866'] = ['Obecný úrad', '', 'Čifáre', '111', '951 61', 'Čifáre', 'gabriela.jakabova@cifare.sk;silvia.halnandova@cifare.sk;maria.foltanova@cifare.sk'];
  o['00329835'] = ['Obecný úrad', '', 'Čirč', '208', '065 42', 'Čirč', 'mike.didik@gmail.com;obeccirc@stonline.sk'];
  o['00318655'] = ['Obecný úrad', '', 'Číž', '48', '980 43', 'Číž', 'obec.ciz@gemernet.sk'];
  o['00324086'] = ['Obecný úrad', '', 'Čižatice', '65', '044 47', 'Kecerovce', 'obec@cizatice.sk;obeccizatice@centrum.sk'];
  o['00328162'] = ['Obecný úrad', '', '', '77', '049 12', 'Gemerská Hôrka', 'coltovo@gmail.com'];
  o['00648426'] = ['Obecný úrad', '', 'Čremošné', '4', '039 01', 'Turčianské Teplice', 'obec.cremosne@gmail.com'];
  o['00594831'] = ['Obecný úrad', '', '', '47', '048 01', 'Rožňava', 'podatelna@obeccucma.sk'];
  o['00322903'] = ['Obecný úrad', '', 'Čukalovce', '59', '067 35', 'Pčoliné', 'obeccukalovce@azet.sk'];
  o['00321265'] = ['Obecný úrad', '', 'Fačkov', '69', '013 15', 'Rajecká Lesná', 'urad@obecfackov.sk'];
  o['00325121'] = ['Obecný úrad', '', 'Falkušovce', '179', '072 05', 'Bracovce', 'ocufalkusovce@centrum.sk'];
  o['00306941'] = ['Obecný úrad', '', 'Farná', '462', '935 66', 'Farná', 'csomorova@farna.sk;farna@nextra.sk'];
  o['00325139'] = ['Obecný úrad', '', '', '26', '072 33', 'Hnojné', 'obec.fekisovce@szm.sk'];
  o['00318671'] = ['Obecný úrad', '', 'Figa', '11', '982 51', 'Figa', 'obecfiga@post.sk'];
  o['00330442'] = ['Obecný úrad', '', '', '', '087 01', 'Giraltovce', 'fijas@post.sk'];
  o['00327018'] = ['Obecný úrad', '', 'Grofske nádvorie', '210/1', '082 16', 'Fintice', 'oufintice@hotmail.com'];
  o['00316075'] = ['Mestský úrad', '', 'Radničná', '25', '986 01', 'Fiľakovo', 'mesto@filakovo.sk'];
  o['00316083'] = ['Obecný úrad', '', 'Fiľakovské Kováče', '275', '986 01', 'Fiľakovo', 'filkovace@post.sk'];
  o['00321940'] = ['Obecný úrad', '', '', '43', '086 02', 'Gaboltov', 'obecfricka@zoznam.sk'];
  o['00316652'] = ['Obecný úrad', '', 'Folkušová', '11', '038 42', 'Príbovce', 'obecfolkusova@gmail.com'];
  o['00329851'] = ['Obecný úrad', '', '', '40', '065 01', 'Hniezdne', 'ouforbasy@slnet.sk'];
  o['00327026'] = ['Obecný úrad', '', '', '34', '082 37', 'Široké', 'sekretariat@obecfricovce.sk'];
  o['00321958'] = ['Obecný úrad', '', '', '103', '086 42', 'Hertník', 'obecfrickovce@szm.sk'];
  o['00327034'] = ['Obecný úrad', '', '', '3', '082 12', 'Kapušany', 'obec@fulianka.sk'];
  o['00305391'] = ['Obecný úrad', '', 'Hlavná', '1039/21', '930 05', 'Gabčíkovo', 'gabcikovobcsorgo@nextra.sk;gabcikovo@nextra.sk'];
  o['00304743'] = ['Obecný úrad', '', 'Gajary', '67', '900 61', 'Gajary', 'peter.tydlitat@gajary.sk'];
  o['00321966'] = ['Obecný úrad', '', '', '87', '086 02', 'Gaboltov', 'obec_gaboltov@mail.t-com.sk'];
  o['00305936'] = ['Mestský úrad', '', 'Mierové Námestie', '940/1', '924 18', 'Galanta', 'info@galanta.sk;galanta@galanta.sk'];
  o['00315184'] = ['Obecný úrad', '', 'Galovany', '67', '032 11', 'Svätý Kríž', 'ougalovany@alconet.sk'];
  o['00326143'] = ['Obecný úrad', '', 'Gánovská', '184', '058 01', 'Poprad', 'obecganovce1@sinet.sk'];
  o['00305944'] = ['Obecný úrad', '', 'Gáň', '27', '925 31', 'Gáň', 'gan@gan.sk'];
  o['00308901'] = ['Obecný úrad', '', 'J. Stampayho', '1', '943 42', 'Gbelce', 'sekretariat@gbelce.sk'];
  o['00309524'] = ['Mestský úrad', '', 'Námestie slobody', '1261', '908 45', 'Gbely', 'sekretariat@gbely.sk'];
  o['00690236'] = ['Obecný úrad', '', '', '382/8', '044 10', 'Geča', 'ougeca@obecgeca.sk'];
  o['00321273'] = ['Obecný úrad', '', 'Urbárska', '366/3', '013 02', 'Gbeľany', 'gbelany@gbelany.eu'];
  o['00329061'] = ['Mestský úrad', '', 'Banícke námestie', '4', '056 01', 'Gelnica', 'sekretariat@gelnica.sk'];
  o['00318680'] = ['Obecný úrad', '', 'Gemer', '274', '982 61', 'Gemer', 'podatelna@obecgemer.sk'];
  o['00649562'] = ['Obecný úrad', '', 'Gemerček', '64', '980 31', 'Hodejov', 'obec@obec-gemercek.sk'];
  o['00328227'] = ['Obecný úrad', '', 'Námestie SNP', '211', '049 22', 'Gemerská Poloma', 'obec@gemerskapoloma.sk'];
  o['00328219'] = ['Obecný úrad', '', '', '151', '049 12', 'Gemerská Hôrka', 'gemhorka@nextra.sk'];
  o['00318701'] = ['Obecný úrad', '', 'Gemerská Ves', '109', '982 62', 'Gemerská Ves', 'gemves@stonline.sk;obec@obec-gemerskaves.sk'];
  o['00318698'] = ['Obecný úrad', '', '', '260', '980 46', 'Gemerská Panica', 'gemerska.panica@gmail.com'];
  o['00649571'] = ['Obecný úrad', '', 'Hlavná', '170', '980 04', 'Hostice', 'zagyis@mail.t-com.sk;gm.dechtare@mail.t-com.sk;gm.dechtare@stonline.sk'];
  o['00650021'] = ['Obecný úrad', '', 'Gemerské Michalovce', '2', '982 52', 'Nižná Kaloša', 'gemerske.michalovceobec@zoznam.sk'];
  o['00328235'] = ['Obecný úrad', '', 'Gemerské Teplice', '46', '049 16', 'Jelšava', 'ou@gemerske-teplice.sk'];
  o['00318710'] = ['Obecný úrad', '', 'Hlavná', '277', '980 35', 'Gemerský Jablonec', 'gemerskyjablonec@stonline.sk'];
  o['00321974'] = ['Obecný úrad', '', 'Gerlachov', '56', '086 04', 'Kružlov', 'sevcovondrej@gmail.com;obecgerlachov@stonline.sk'];
  o['00328243'] = ['Obecný úrad', '', 'Mikolčany', '1', '049 13', 'Hucín', 'obecgemsad@stonline.sk'];
  o['00327042'] = ['Obecný úrad', '', '', '35', '082 67', 'Terňa', 'geraltov@zoznam.sk'];
  o['00326151'] = ['Obecný úrad', '', 'Hlavná', '110', '059 42', 'Gerlachov', 'ocu@obecgerlachov.sk'];
  o['00332372'] = ['Obecný úrad', '', '', '50', '094 05', 'Holčíkovce', 'ocugiglovce@stonline.sk'];
  o['00321982'] = ['Mestský úrad', '', 'Dukelská', '75', '087 01', 'Giraltovce', 'msugiraltovce@stonline.sk'];
  o['00332381'] = ['Obecný úrad', '', '', '13', '094 06', 'Košarovce', 'obecgirovce@mail.t-com.sk'];
  o['00650307'] = ['Obecný úrad', '', 'Glabušovce', '24', '991 22', 'Bušince', 'ocuglabusovce@gonet.sk'];
  o['00328260'] = ['Obecný úrad', '', 'Gočovo', '92', '049 24', 'Vlachovo', 'obec@gocovo.sk'];
  o['00307939'] = ['Obecný úrad', '', 'Golianovo', '400', '951 08', 'Golianovo', 'obec.golianovo@gmail.com'];
  o['00328251'] = ['Obecný úrad', '', 'Gočaltovo', '47', '049 32', 'Štítnik', 'obec.gocaltovo@mail.t-com.sk'];
  o['00318728'] = ['Obecný úrad', '', 'Gortva', '138', '980 02', 'Jesenské', 'ougortva@stonline.sk'];
  o['00329070'] = ['Obecný úrad', '', '', '107', '053 05', 'Behárovce', 'obec@grancpetrovce.sk'];
  o['00315192'] = ['Obecný úrad', '', 'Gôtovany', '45', '032 14', 'Ľubeľa', 'ougotovany@alconet.sk'];
  o['00650315'] = ['Obecný úrad', '', 'Gregorova Vieska', '39', '985 56', 'Tomášovce', 'ou.gregorovavieska@stonline.sk'];
  o['00327051'] = ['Obecný úrad', '', '', '88', '082 66', 'Uzovce', 'gregorovceobec@gmail.com'];
  o['00330451'] = ['Obecný úrad', '', '', '56', '090 22', 'Bukovce', 'obecgribov@gmail.com'];
  o['00690091'] = ['Obecný úrad', '', '', '1', '067 22', 'Ohradzany', 'gruzovce@zoznam.sk'];
  o['00314471'] = ['Obecný úrad', '', 'Habovka', '266', '027 32', 'Habovka', 'obec@habovka.sk'];
  o['00324159'] = ['Obecný úrad', '', 'Čanianska', '3', '044 14', 'Čaňa', 'gynov@stonline.sk'];
  o['00322954'] = ['Obecný úrad', '', '', '63', '067 52', 'Habura', 'ocuhabura@centrum.sk'];
  o['00324167'] = ['Obecný úrad', '', 'Hačava', '47', '044 02', 'Turňa nad Bodvou', 'ocuhacava@stonline.sk'];
  o['00690279'] = ['Obecný úrad', '', 'Háj', '112', '044 02', 'Turňa nad Bodvou', 'obechaj@kid.sk'];
  o['00316661'] = ['Obecný úrad', '', 'Háj', '176', '039 01', 'Turčianské Teplice', 'obecnyurad01@stonline.sk'];
  o['00310395'] = ['Obecný úrad', '', 'Hajná Nová Ves', '76', '956 03', 'Hajná Nová Ves', 'obechajnanovaves@mail.t-com.sk'];
  o['00307947'] = ['Obecný úrad', '', 'Hájske', '410', '951 33', 'Hájske', 'obec@hajske.sk'];
  o['00318736'] = ['Obecný úrad', '', 'Hlavné námestie', '484', '980 33', 'Hajnáčka', 'hajnacka@stonline.sk'];
  o['00316091'] = ['Obecný úrad', '', 'Ulica mieru', '66', '985 11', 'Halič', 'podatelna@halic.sk'];
  o['00329860'] = ['Obecný úrad', '', '', '24', '065 45', 'Plavnica', 'pnosek@azet.sk'];
  o['00310409'] = ['Obecný úrad', '', 'Haláčovce', '48', '956 55', 'Veľké Chlievany', 'obec.halacovce@gmail.com'];
  o['00329878'] = ['Obecný úrad', '', '', '124', '065 34', 'Veľká Lesná', 'obechaligovce@slnet.sk'];
  o['00687235'] = ['Obecný úrad', '', 'Haluzice', '703', '913 07', 'Bošáca', 'obec.haluzice@centrum.sk'];
  o['00304751'] = ['Obecný úrad', '', 'Hamuliakovo', '127', '900 43', 'Hamuliakovo', 'info@obechamuliakovo.sk'];
  o['00318094'] = ['Mestský úrad', '', 'Námestie baníkov', '7', '972 51', 'Handlová', 'sekretariat@handlova.sk'];
  o['00327069'] = ['Obecný úrad', '', '', '12', '082 56', 'Pečovská Nová Ves', 'obecnyurad@hanigovce.sk'];
  o['00324175'] = ['Obecný úrad', '', '', '248', '044 57', 'Haniska', 'haniska@haniska-ke.sk'];
  o['00595187'] = ['Obecný úrad', '', 'Hanková', '35', '049 34', 'Markuška', 'obechankova@gmail.com'];
  o['00690520'] = ['Obecný úrad', '', 'Bajzová', '14', '080 01', 'Prešov', 'obechaniska@stonline.sk'];
  o['00321991'] = ['Obecný úrad', '', 'Hankovce', '1', '086 46', 'Hankovce', 'obechankovce@gmail.com'];
  o['00322962'] = ['Obecný úrad', '', '', '117', '067 12', 'Koškovce', 'obec.hankovce@stonline.sk'];
  o['17083087'] = ['Obecný úrad', '', 'Harakovce', '13', '053 05', 'Behárovce', ''];
  o['00313416'] = ['Obecný úrad', '', 'Harmanec', '6', '976 03', 'Harmanec', 'harmanecobecny@mail.t-com.sk'];
  o['00332399'] = ['Mestský úrad', '', 'Mierová', '333/3', '094 31', 'Hanušovce nad Topľou', 'msu.hanusovce@stonline.sk;msu.hanusovce@slovanet.sk'];
  o['00329096'] = ['Obecný úrad', '', '1. mája', '25', '053 01', 'Harichovce', 'obecharichovce@stonline.sk'];
  o['00322008'] = ['Obecný úrad', '', '', '35', '086 45', 'Marhaň', 'obecharhaj@stonline.sk'];
  o['00696048'] = ['Obecný úrad', '', '', '21', '061 01', 'Spišská Stará Ves', ''];
  o['00325147'] = ['Obecný úrad', '', 'Hatalov', '185', '072 16', 'Hatalov', 'obec.hatalov@gmail.com'];
  o['00692484'] = ['Obecný úrad', '', 'Hatné', '46', '018 02', 'Dolná Maríková', 'obechatne@stonline.sk'];
  o['00330469'] = ['Obecný úrad', '', '', '13', '090 23', 'Havaj', 'podatelna@obechavaj.sk'];
  o['00330477'] = ['Obecný úrad', '', '', '', '090 02', 'Kružlová', 'milan.scerba@gmail.com'];
  o['00325155'] = ['Obecný úrad', '', 'Hažín', '122', '072 34', 'Zalužice', 'hazin@lekosonline.sk;obechazin@gmail.com'];
  o['00690082'] = ['Obecný úrad', '', '', '45', '067 83', 'Kamenica nad Cirochou', 'ocuhazin_nadcir@in.slovanet.sk'];
  o['00322016'] = ['Obecný úrad', '', '', '200', '086 14', 'Hažlín', 'obechazlin@pobox.sk;hazlin@mail.t-com.sk'];
  o['00328278'] = ['Obecný úrad', '', '', '60', '049 23', 'Nižná Slaná', 'ocuhenckovce@stonline.sk'];
  o['00329100'] = ['Obecný úrad', '', 'Helcmanovce', '161', '055 63', 'Helcmanovce', 'ttheis@helcmanovce.sk;helcmanovce@helcmanovce.sk'];
  o['00329118'] = ['Obecný úrad', '', '', '50', '053 33', 'Nálepkovo', 'obechenclova@demax.sk'];
  o['00327077'] = ['Obecný úrad', '', 'Hendrichovce', '72', '082 35', 'Hendrichovce', 'obec@hendrichovce.sk'];
  o['35532319'] = ['Obecný úrad', '', 'Sládkovičová', '1995', '093 02', 'Vranov nad Topľou', 'hencovce@mail.t-com.sk'];
  o['00327085'] = ['Obecný úrad', '', '', '59', '082 35', 'Hendrichovce', 'hermanovce@zoznam.sk'];
  o['00332402'] = ['Obecný úrad', '', '', '195', '094 34', 'Bystré', 'ocu.hermanovcent@gmail.com'];
  o['00322024'] = ['Obecný úrad', '', 'Hertník', '162', '086 42', 'Hertník', 'obechertnik@centrum.sk'];
  o['00322032'] = ['Obecný úrad', '', '', '84', '086 22', 'Kľušov', 'obec.hervartov@post.sk'];
  o['00324183'] = ['Obecný úrad', '', '', '54', '044 46', 'Herľany', 'obecherlany@netkosice.sk'];
  o['00313424'] = ['Obecný úrad', '', 'Farská', '588/2', '976 68', 'Heľpa', 'ouhelpa@stonline.sk'];
  o['00313432'] = ['Obecný úrad', '', 'Hiadeľ', '68', '976 61', 'Lučatín', 'ouhiadel@stonline.sk'];
  o['00329126'] = ['Obecný úrad', '', '', '28', '053 63', 'Spišský Hrušov', 'obec.hincovce@centrum.sk'];
  o['00320609'] = ['Obecný úrad', '', 'Železničná', '320', '966 01', 'Hliník nad Hronom', 'hlinikobec@stonline.sk;obec@hliniknadhronom.sk'];
  o['00314480'] = ['Obecný úrad', '', 'Hladovka', '45', '027 13', 'Suchá Hora', 'ocuhladovka@orava.sk'];
  o['00309532'] = ['Obecný úrad', '', 'Hlboké', '114', '906 31', 'Hlboké pri Senici nad Myjavou', 'obechlboke@obechlboke.sk'];
  o['00361423'] = ['Obecný úrad', '', 'Hlboké nad Váhom', '218', '014 01', 'Hlboké nad Váhom', 'obec.hlboke@stonline.sk'];
  o['00332411'] = ['Obecný úrad', '', '', '74', '094 35', 'Soľ', 'ocu.hlinne@slovanet.sk'];
  o['00325163'] = ['Obecný úrad', '', '', '73', '073 01', 'Sobrance', 'hlivistia@lekosonline.sk'];
  o['00329886'] = ['Obecný úrad', '', '', '1', '065 01', 'Hniezdne', 'obechniezdne@stonline.sk'];
  o['00312509'] = ['Mestský úrad', '', 'M. R. Štefánika', '1', '920 01', 'Hlohovec', 'msu@hlohovec.sk'];
  o['00329134'] = ['Obecný úrad', '', '', '38', '053 32', 'Hnilčík', 'vfabian1@stonline.sk;hnilcik@stonline.sk'];
  o['00329142'] = ['Obecný úrad', '', 'Huta', '77/6', '053 75', 'Hnilec', 'hnilec@t-zones.sk'];
  o['00325171'] = ['Obecný úrad', '', 'Hnojné', '20', '072 33', 'Hnojné', 'ocuhnojne@mail.t-com.sk'];
  o['00318744'] = ['Mestský úrad', '', 'Námestie Francisciho', '74', '981 01', 'Hnúšťa', 'podatelna@hnusta.sk'];
  o['00318752'] = ['Obecný úrad', '', 'Hodejov', '141', '980 31', 'Hodejov', 'ocuhodejov@mail.t-com.sk'];
  o['00649554'] = ['Obecný úrad', '', 'Hodejovec', '95', '980 02', 'Jesenské', 'hodejovec@gmail.com;obu@hodejovec.sk'];
  o['00691241'] = ['Obecný úrad', '', '', '2', '044 21', 'Šemša', 'hodkovce@amber.sk'];
  o['00320617'] = ['Obecný úrad', '', 'Hodruša -  Hámre', '185', '966 61', 'Hodruša -  Hámre', 'sekretariat@hodrusa-hamre.sk'];
  o['00306967'] = ['Obecný úrad', '', 'Hokovce', '151', '935 84', 'Horné Semerovce', 'obec@hokovce.eu'];
  o['00316105'] = ['Obecný úrad', '', 'Holiša', '61', '985 57', 'Holiša', 'ocuholisa@zoznam.sk'];
  o['00332429'] = ['Obecný úrad', '', '', '40', '094 05', 'Holčíkovce', 'ocu@holcikovce.sk'];
  o['00305405'] = ['Obecný úrad', '', 'Póšfa', '151', '930 34', 'Holice', 'ocu@obecholice.sk'];
  o['34006613'] = ['Obecný úrad', '', 'Holiare', '93', '946 16', 'Bodza', 'obec-holiare@real-net.sk'];
  o['00309541'] = ['Mestský úrad', '', 'Bratislavská', '5', '908 51', 'Holíč', 'sekretariat@holic.sk'];
  o['00326186'] = ['Obecný úrad', '', '', '32', '059 94', 'Holumnica', 'obec.holumnica@neton.sk'];
  o['00328286'] = ['Obecný úrad', '', '', '54', '049 32', 'Štítnik', 'obec.honce@gmail.com'];
  o['00319937'] = ['Obecný úrad', '', 'Hontianske Tesáre', '66', '962 68', 'Hontianske Tesáre', 'ekonomika@honttesare.sk;kultura@honttesare.sk;obec@honttesare.sk'];
  o['00306975'] = ['Obecný úrad', '', 'Hontianska Vrbica', '267', '935 55', 'Hontianska Vrbica', 'obecnyurad@hontianskavrbica.sk'];
  o['00319911'] = ['Obecný úrad', '', 'Hontianska', '255/29', '962 71', 'Hontianske Moravce', 'urad@moravce.sk'];
  o['00319929'] = ['Obecný úrad', '', 'Hontianske Nemce', '500', '962 65', 'Hontianske Nemce', 'obec@hontianskenemce.sk'];
  o['00307556'] = ['Obecný úrad', '', 'Hontianske Trsťany', '27', '935 86', 'Hontianske Trsťany', 'hont.trstany@mail.t-com.sk'];
  o['00326194'] = ['Obecný úrad', '', '', '141', '059 12', 'Hôrka', 'obechorka@obechorka.sk'];
  o['00321303'] = ['Obecný úrad', '', 'Hôrky', '111', '010 04', 'Žilina 4', 'obec.horky@stonline.sk'];
  o['00311596'] = ['Obecný úrad', '', 'Hôrka nad Váhom', '168', '916 32', 'Hôrka nad Váhom', 'obec@horkanadvahom.sk'];
  o['00692352'] = ['Obecný úrad', '', 'Horná Breznica', '78', '020 61', 'Lednické Rovne', 'hornabreznica@playmax.sk'];
  o['00312517'] = ['Obecný úrad', '', 'Horná Krupá', '186', '919 65', 'Horná Krupá', 'ou@hornakrupa.sk'];
  o['00800368'] = ['Obecný úrad', '', 'Hlavná', '17', '951 32', 'Horná Kráľová', 'sekretariat@hornakralova.sk'];
  o['00314498'] = ['Obecný úrad', '', 'Horná Lehota', '210', '027 41', 'Oravský Podzámok', 'ouhornalehota@orava.sk'];
  o['00313441'] = ['Obecný úrad', '', 'Horná Lehota', '99', '976 51', 'Horná Lehota', 'hornalehota@brnet.sk'];
  o['00317276'] = ['Obecný úrad', '', 'Modlatín', '357', '018 03', 'Horná Maríková', 'obechornamarikova@stonline.sk'];
  o['00317284'] = ['Obecný úrad', '', 'Horná Poruba', '39', '018 35', 'Horná Poruba', 'obechp@gmail.com'];
  o['00313459'] = ['Obecný úrad', '', 'Horná Mičiná', '79', '974 01', 'Banská Bystrica', 'hornamicina@gmail.com;info@hornamicina.eu'];
  o['00587524'] = ['Obecný úrad', '', 'Hlavná', '19/16', '935 31', 'Dolná Seč', 'obec.hornasec@stonline.sk'];
  o['00305413'] = ['Obecný úrad', '', 'Benkova', '1', '930 36', 'Horná Potôň', 'obec@hornapoton.sk'];
  o['00319333'] = ['Obecný úrad', '', 'Horná Strehová', '26', '991 02', 'Dolná Strehová', 'hornastrehova@procomp.sk'];
  o['00311553'] = ['Obecný úrad', '', 'Horná Streda', '407', '916 24', 'Horná Streda', 'obec@hornastreda.sk'];
  o['31095933'] = ['Obecný úrad', '', 'Horná Ves', '17', '967 01', 'Kremnica', 'ocu@obechornaves.sk'];
  o['00311561'] = ['Obecný úrad', '', 'Horná Súča', '233', '913 33', 'Horná Súča', 'hornasuca@hornasuca.sk'];
  o['00320633'] = ['Obecný úrad', '', 'Horná Ždaňa', '167', '966 04', 'Horná Ždaňa', 'podatelna@hornazdana.sk'];
  o['00316695'] = ['Obecný úrad', '', 'Horná Štubňa', '455', '038 46', 'Horná Štubňa', 'obecnyurad@hornastubna.sk'];
  o['00318108'] = ['Obecný úrad', '', 'Horná Ves', '191', '972 48', 'Horná Ves', 'obechornaves@atlas.sk'];
  o['00312525'] = ['Obecný úrad', '', 'Horné Dubové', '97', '919 06', 'Naháč', 'obec@hornedubove.sk'];
  o['00655163'] = ['Obecný úrad', '', 'Horné Chlebany', '6', '956 31', 'Krušovce', 'ocu.hornechlebany@mail.t-com.sk'];
  o['00320641'] = ['Obecný úrad', '', 'Horné Hámre', '45', '966 71', 'Horné Hámre', 'starosta@hornehamre.sk'];
  o['00399418'] = ['Obecný úrad', '', 'Farská', '25', '951 45', 'Horné Lefantovce', 'obec@hornelefantovce.sk'];
  o['00655449'] = ['Obecný úrad', '', 'Hlavná ulica', '97', '930 13', 'Horné Mýto', 'vamos@intermail.sk;hornemyto@intermail.sk'];
  o['00649236'] = ['Obecný úrad', '', 'Horné Mladonice', '40', '962 43', 'Senohrad', 'obechornemladonice@centrum.sk'];
  o['00312533'] = ['Obecný úrad', '', 'Horné Orešany', '190', '919 03', 'Horné Orešany', 'ocuhoresany@stonline.sk'];
  o['00310433'] = ['Obecný úrad', '', 'Horné Naštice', '75', '956 41', 'Uhrovec', 'ocu@obechornenastice.sk'];
  o['00310441'] = ['Obecný úrad', '', 'Horné Obdokovce', '389', '956 08', 'Horne Obdokovce', 'obec.h.obdokovce@wircom.sk'];
  o['00312541'] = ['Obecný úrad', '', 'Horné Otrokovce', '146', '920 62', 'Horné Otrokovce', 'ocu.h.otrokovce@stonline.sk'];
  o['00649325'] = ['Obecný úrad', '', 'Horné Plachtince', '75', '991 24', 'Dolné Plachtince', 'obec.hplachtince@post.sk'];
  o['00305952'] = ['Obecný úrad', '', 'Hlavná', '297', '925 03', 'Horné Saliby', 'hornesaliby@hornesaliby.sk'];
  o['00313467'] = ['Obecný úrad', '', 'Horné Pršany', '11', '974 05', 'Banská Bystrica', 'amiartusova@netlink.sk;obechorneprsany@netlink.sk'];
  o['00306990'] = ['Obecný úrad', '', 'Horné Semerovce', '100', '935 84', 'Horné Semerovce', 'hornesemerovce@hornesemerovce.sk'];
  o['00311588'] = ['Obecný úrad', '', 'Družstevná', '430/1', '914 42', 'Horné Srnie', 'ucto@hornesrnie.sk;urad@hornesrnie.sk'];
  o['00648205'] = ['Obecný úrad', '', 'Horné Strháre', '29', '991 04', 'Dolné Strháre', 'hornestrhare@gmail.com'];
  o['00682152'] = ['Obecný úrad', '', 'Horné Trhovište', '73', '920 66', 'Horné Trhovište', 'ouhtrhoviste@wircom.sk'];
  o['00307009'] = ['Obecný úrad', '', 'Horné Turovce', '108', '935 81', 'Horné Turovce', 'hturovce@horneturovce.sk'];
  o['00649686'] = ['Obecný úrad', '', 'Horné Zahorany', '78', '980 26', 'Lukovištia', 'ocu.hornezahorany@centrum.sk'];
  o['00318116'] = ['Obecný úrad', '', 'Horné Vestenice', '257', '972 22', 'Nitrica', 'ocuhornevestenice@centrum.sk'];
  o['00312568'] = ['Obecný úrad', '', 'Horné Zelenice', '14', '920 52', 'Siladice', 'hzhornezelenice@gmail.com'];
  o['00310450'] = ['Obecný úrad', '', 'Horné Štitáre', '75', '956 03', 'Hajná Nová Ves', 'obec.horne.stitare@wircom.sk'];
  o['00647632'] = ['Obecný úrad', '', 'Horný Badín', '38', '962 51', 'Čabradský Vrbovok', 'obechornybadin@gmail.com'];
  o['00305421'] = ['Obecný úrad', '', 'Horný Bar', '184', '930 33', 'Horný bar', 'ouhornybar@stonline.sk'];
  o['00329290'] = ['Obecný úrad', '', 'Horný Hričov', '191', '013 42', 'Horný Hričov', 'obecnyurad@obechornyhricov.sk'];
  o['00623695'] = ['Obecný úrad', '', 'Horný Lieskov', '155', '018 21', 'Dolný Lieskov', 'kontrolor@lieskov.sk;info@lieskov.sk'];
  o['00316687'] = ['Obecný úrad', '', 'Horný Kalník', '39', '038 02', 'Dražkovce', 'obechornykalnik@pobox.sk'];
  o['00307017'] = ['Obecný úrad', '', 'Horný Pial', '52', '935 37', 'Dolný Pial', 'sekretariat@hornypial.sk'];
  o['00319953'] = ['Obecný úrad', '', 'Horný Tisovník', '77', '962 75', 'Horný Tisovník', 'htisovnik@podpolanou.sk'];
  o['00325180'] = ['Obecný úrad', '', '', '145', '073 01', 'Sobrance', 'horna@interdum.sk'];
  o['00314030'] = ['Obecný úrad', '', 'Horný Vadičov', '160', '023 45', 'Horný Vadičov', 'vladimir.kacerik@hornyvadicov.sk;urad@hornyvadicov.sk'];
  o['00317306'] = ['Obecný úrad', '', 'Horovce', '94', '020 62', 'Horovce', 'ocuhorovce@stonline.sk'];
  o['00311570'] = ['Obecný úrad', '', 'Horňany', '21', '913 24', 'Svinná', 'podatelna@hornany.sk'];
  o['00325198'] = ['Obecný úrad', '', 'Horovce', '25', '072 02', 'Tušická Nová Ves', 'ou.horovce@stonline.sk'];
  o['00305961'] = ['Obecný úrad', '', 'Hoste', '93', '925 45', 'Hoste', 'ouhoste@stonline.sk'];
  o['00318761'] = ['Obecný úrad', '', 'Hlavná', '158', '980 04', 'Hostice', 'obec.hostice@stonline.sk'];
  o['00322971'] = ['Obecný úrad', '', '', '171', '067 35', 'Pčoliné', 'obec.hostovice@centrum.sk'];
  o['00307980'] = ['Obecný úrad', '', 'Hostie', '1', '951 94', 'Hostie', 'obecnyurad@hostie.sk'];
  o['00649945'] = ['Obecný úrad', '', 'Hostišovce', '15', '980 23', 'Teplý Vrch', 'ocu.hostisovce@azet.sk'];
  o['00656143'] = ['Obecný úrad', '', 'Hosťová', '120', '951 02', 'Pohranice', 'obec.hostova@stonline.sk'];
  o['00326208'] = ['Obecný úrad', '', 'Hlavná', '58', '059 11', 'Hozelec', 'hozelec.obec@gmail.com;obechozelec@azet.sk'];
  o['00308005'] = ['Obecný úrad', '', 'Hosťovce', '49', '951 91', 'Hosťovce', 'hostovce@centrum.sk'];
  o['00690252'] = ['Obecný úrad', '', '', '101', '044 04', 'Turnianská Nová Ves', 'obechostovce@freemail.hu'];
  o['00320650'] = ['Obecný úrad', '', 'Hrabičov', '188', '966 78', 'Hrabičov', 'obec@hrabicov.sk'];
  o['00327093'] = ['Obecný úrad', '', '', '81', '082 33', 'Chminianska Nová Ves', 'hrabkov@hrabkov.sk'];
  o['00690147'] = ['Obecný úrad', '', '', '29', '067 73', 'Ubľa', 'labanicova@centrum.sk'];
  o['00322041'] = ['Obecný úrad', '', '', '104', '086 11', 'Hrabovec', 'hrabovecou@azet.sk'];
  o['00322997'] = ['Obecný úrad', '', '', '156', '067 01', 'Radvaň nad Laborcom', 'obechrabovec@post.sk'];
  o['00330485'] = ['Obecný úrad', '', '', '126', '089 01', 'Svidník', 'hrabovcik@vl.sk'];
  o['00322059'] = ['Obecný úrad', '', '', '103', '086 06', 'Malcov', 'obec.hrabske@centrum.sk'];
  o['00311600'] = ['Obecný úrad', '', 'Hrabovka', '26', '913 32', 'Dolná Súča', 'obec.hrabovka@atlas.sk'];
  o['00311626'] = ['Obecný úrad', '', 'Hrachovište', '255', '916 15', 'Hrachovište', 'obecnyurad@hrachoviste.sk'];
  o['00329151'] = ['Obecný úrad', '', 'Hlavná', '171/46', '053 15', 'Hrabušice', 'hrabusice@stonline.sk'];
  o['00318779'] = ['Obecný úrad', '', 'Ulica Mieru', '35', '980 52', 'Hrachovo', 'obechrachovo@stonline.sk'];
  o['00326216'] = ['Obecný úrad', '', '', '39', '05971', 'Ľubica', 'obechradisko@gmail.com'];
  o['00648604'] = ['Obecný úrad', '', 'Hradište', '112', '985 25', 'Uhorské', 'obec_hradiste@stonline.sk'];
  o['00311618'] = ['Obecný úrad', '', 'Hrádok', '149', '916 33', 'Hrádok', 'obec.hradok@stonline.sk'];
  o['00310468'] = ['Obecný úrad', '', 'Hradište', '278', '958 54', 'Hradište', 'ocuhrad.starosta@zmail.sk'];
  o['00309559'] = ['Obecný úrad', '', 'Hradište pod Vrátnom', '80', '906 12', 'Hradište pod Vrátnom', 'pirohalukas@hradistepodvratnom.sk;obec@hradistepodvratnom.sk'];
  o['00329894'] = ['Obecný úrad', '', 'Hraničné', '91', '065 21', 'Mníšek nad Popradom', 'pokrivcak@hranicne.sk'];
  o['00326224'] = ['Obecný úrad', '', 'Sládkovičova', '398', '059 16', 'Hranovnica', 'prenosta@lj.sk;obechranovnica@lj.sk'];
  o['00331538'] = ['Obecný úrad', '', 'SNP', '165', '076 03', 'Hraň', 'obechran@trenet.sk'];
  o['00311634'] = ['Obecný úrad', '', 'Hrašné', '3', '916 14', 'Hrašné', 'obec.hrasne@gmail.com'];
  o['00331554'] = ['Obecný úrad', '', 'Hlavná', '43/5', '076 22', 'Hriadky', 'hriadky.referent@slovanet.sk;obechriadky@stonline.sk'];
  o['00691232'] = ['Obecný úrad', '', '', '36', '044 42', 'Rozhanovce', 'obechrasovik@netkosice.sk'];
  o['00328294'] = ['Obecný úrad', '', '', '363', '049 44', 'Hrhov', 'obechrhov@kidrv.sk;obechrhov@mail.t-com.sk'];
  o['00331546'] = ['Obecný úrad', '', 'Hlavná', '200/30', '076 15', 'Veľaty', 'ou.hrcel@trenet.sk'];
  o['00647446'] = ['Obecný úrad', '', 'Hričovské Podhradie', '98', '013 41', 'Dolný Hričov', 'obechr.podhradie@mail.t-com.sk'];
  o['00319961'] = ['Mestský úrad', '', 'Partizánska', '1612', '962 05', 'Hriňová', 'sekretariat@hrinova.sk'];
  o['00329169'] = ['Obecný úrad', '', 'Hrišovce', '67', '053 51', 'Kluknava', 'hrisovce@hrisovce.sk'];
  o['36099091'] = ['Obecný úrad', '', 'Hrkovce', '94', '936 01', 'Šahy', 'obec.hrkovce@gmail.com'];
  o['00650048'] = ['Obecný úrad', '', 'Hrlica', '9', '982 66', 'Ratkovské Bystré', 'obechrlica@centrum.sk'];
  o['34007521'] = ['Obecný úrad', '', 'Farská', '37', '919 35', 'Hrnčiarovce nad Parnou', 'sekretariat@hrnciarovce.sk'];
  o['00318787'] = ['Obecný úrad', '', 'časť Veľká Suchá', '237', '980 13', 'Hrnčiarska Ves', 'sekretariat@hrnciarskaves.sk'];
  o['00318795'] = ['Obecný úrad', '', 'Hlavná', '90', '980 12', 'Hrnčiarske Zalužany', 'ou@hrnciarskezaluzany.sk'];
  o['00313475'] = ['Obecný úrad', '', 'Námestie Andreja Sládkoviča', '343/1', '976 37', 'Hrochoť', 'hrochot@hrochot.sk'];
  o['00629537'] = ['Obecný úrad', '', 'Záhumnie', '26', '976 31', 'Hronsek', 'obec@hronsek.sk'];
  o['00329908'] = ['Obecný úrad', '', '', '114', '065 45', 'Plavnica', 'starosta@hromos.sk'];
  o['00307041'] = ['Obecný úrad', '', 'Levická', '3', '935 61', 'Hronovce', 'hronovce@nextra.sk'];
  o['00313483'] = ['Obecný úrad', '', 'Zlievarenská ulica', '516', '976 45', 'Hronec', 'sekretariat@obechronec.sk'];
  o['00320668'] = ['Obecný úrad', '', 'Hronská Dúbrava', '112', '966 12', 'Hronská Dúbrava', 'hdubrava@nextra.sk'];
  o['00319970'] = ['Obecný úrad', '', 'Hronská Breznica', '100', '966 12', 'Hronská Dúbrava', 'obechb@gmail.com'];
  o['00307068'] = ['Obecný úrad', '', 'Hronské Kosihy', '61', '935 27', 'Hronské Kosihy', 'podatelna@hronskekosihy.sk'];
  o['00307050'] = ['Obecný úrad', '', 'Hronské Kľačany', '572', '935 29', 'Hronské Kľačany', 'klacany@imilsoft.sk'];
  o['00320676'] = ['Obecný úrad', '', 'Mýtne námestie', '445/26', '966 53', 'Hronský Beňadik', 'info@obechronskybenadik.sk'];
  o['00305979'] = ['Obecný úrad', '', 'Hrubá Borša', '73', '925 23', 'Jelka', 'obec@hrubaborsa.eu'];
  o['00323004'] = ['Obecný úrad', '', '', '97', '067 23', 'Baškovce', 'ouhrubov@satlan.sk'];
  o['00308013'] = ['Obecný úrad', '', 'Hruboňovo', '153', '951 25', 'Hruboňovo', 'sekretariat@hrubonovo.sk'];
  o['00305987'] = ['Obecný úrad', '', 'Hrubý Šúr', '205', '903 01', 'Senec', 'ocu@hruby-sur.sk'];
  o['00319341'] = ['Obecný úrad', '', 'Hrušov', '526', '991 42', 'Hrušov', 'podatelna@hrusov.sk'];
  o['00328308'] = ['Obecný úrad', '', '', '5', '049 43', 'Jablonov nad Turňou', 'obechrusov@stonline.sk;obexhrui@mail.t-com.sk'];
  o['00318809'] = ['Obecný úrad', '', 'Hrušovo', '39', '980 25', 'Hrušovo', 'hrusovo.obec@azet.sk'];
  o['00699179'] = ['Obecný úrad', '', 'Hrušovany', '346', '956 13', 'Koniarovce', 'hrusovany@hrusovany.sk'];
  o['00314501'] = ['Obecný úrad', '', 'Kultúrna', '468/2', '029 52', 'Hruštín', 'ocuhrustin@stonline.sk'];
  o['00315214'] = ['Obecný úrad', '', 'Hubová', '70/70', '034 91', 'Hubová', 'obec.hubova@stonline.sk'];
  o['00305448'] = ['Obecný úrad', '', 'Hubice', '28', '930 39', 'Zlaté Klasy', 'obechubice@stonline.sk'];
  o['00682241'] = ['Obecný úrad', '', 'Hubina', '169', '922 21', 'Moravany nad Váhom', 'hubina@hubina.sk'];
  o['00650013'] = ['Obecný úrad', '', 'Hubovo', '24', '980 50', 'Včelince', 'obec.hubovo@gmail.com'];
  o['00327107'] = ['Obecný úrad', '', '', '136', '082 66', 'Uzovce', 'obec.hubosovce@slavconet.sk'];
  o['00328316'] = ['Obecný úrad', '', 'Hucín', '76', '049 13', 'Hucín', 'obechucin@mail.t-com.sk'];
  o['00308919'] = ['Obecný úrad', '', 'Nám. Cyrila Minárika', '435/16', '941 44', 'Hul', 'obechul@hul.sk'];
  o['00323012'] = ['Obecný úrad', '', '', '2', '067 45', 'Topoľovka', 'ou.hudcovce@mail.t-com.sk'];
  o['00330493'] = ['Obecný úrad', '', '', '81', '090 03', 'Ladomirová', 'hunkovce@centrum.sk'];
  o['00323021'] = ['Mestský úrad', '', 'Kukorelliho', '34', '066 28', 'Humenné', 'msu@humenne.sk'];
  o['00326232'] = ['Obecný úrad', '', 'Hlavná', '29', '059 92', 'Huncovce', 'huncovce@huncovce.sk'];
  o['00305995'] = ['Obecný úrad', '', 'Hurbanova Ves', '48', '903 01', 'Senec', 'hurbanova.ves@azet.sk;hurbanova.ves@zoznam.sk'];
  o['00306452'] = ['Mestský úrad', '', 'Komárňanská', '91', '947 01', 'Hurbanovo', 'mesto.hurbanovo@hurbanovo.sk'];
  o['00318817'] = ['Obecný úrad', '', 'Husiná', '157', '985 42', 'Veľké Dravce', 'obechusina@gmail.com'];
  o['00325201'] = ['Obecný úrad', '', '', '25', '072 51', 'Krčava', 'obechusak@lekosonline.sk'];
  o['00322067'] = ['Obecný úrad', '', '', '47', '086 36', 'Nižná Polianka', 'hutka@post.sk'];
  o['00315222'] = ['Obecný úrad', '', 'Huty', '84', '027 32', 'Zuberec', 'info@huty.eu;obechuty@gmail.com;info@huty.sk'];
  o['00305456'] = ['Obecný úrad', '', 'Hviezdoslavov', '8', '930 41', 'Kvetoslavov', 'ocu-hviezdoslavov@stonline.sk'];
  o['00648922'] = ['Obecný úrad', '', 'Hvozdnica', '39', '013 56', 'Hvozdnica', 'ou@hvozdnica.sk'];
  o['00324230'] = ['Obecný úrad', '', '', '21', '044 12', 'Nižný Klátov', 'hylov@centrum.sk'];
  o['00326933'] = ['Obecný úrad', '', '', '106', '082 71', 'Lipany', 'obecdacov@gmail.com'];
  o['00315231'] = ['Obecný úrad', '', 'Hybe', '2', '032 31', 'Hybe', 'hybe@hybe.sk'];
  o['00316644'] = ['Obecný úrad', '', 'Ďanová', '22', '038 42', 'Ďanová', 'danova@danova.sk'];
  o['00332321'] = ['Obecný úrad', '', '', '136', '094 05', 'Holčíkovce', 'obecdapalovce@stonline.sk'];
  o['00800252'] = ['Obecný úrad', '', 'Igram', '217', '900 84', 'Báhoň', 'starosta.igram@gmail.com'];
  o['00320684'] = ['Obecný úrad', '', 'Ihráč', '57', '967 01', 'Kremnica', 'obec@ihrac.sk'];
  o['00317331'] = ['Mestský úrad', '', 'Mierové Námestie', '16/31', '019 01', 'Ilava', 'podatelna@ilava.sk'];
  o['00326241'] = ['Obecný úrad', '', 'časť Majrka', '94', '059 94', 'Holumnica', 'ocuihlany@gmail.com'];
  o['00329185'] = ['Obecný úrad', '', '', '231', '053 11', 'Smižany', 'ocuiliasovce@stonline.sk'];
  o['00306479'] = ['Obecný úrad', '', 'Nám. Jozefa Blaskovicsa', '507/11', '946 52', 'Imeľ', 'starosta@obecimel.sk'];
  o['00325228'] = ['Obecný úrad', '', '', '28', '072 64', 'Podhoroď', 'inovce@inovce.sk'];
  o['00307076'] = ['Obecný úrad', '', 'Iňa', '27', '935 35', 'Tehla', 'obecina@wan1.sk'];
  o['00320692'] = ['Obecný úrad', '', 'Ilija', '150', '969 03', 'Banská Štiavnica 1', 'obec_ilija@stonline.sk'];
  o['00325236'] = ['Obecný úrad', '', 'Iňačovce', '141', '072 11', 'Čečehov', 'obecinacovce@lekosonline.sk'];
  o['00319350'] = ['Obecný úrad', '', 'Ipeľské Predmostie', '133/1', '991 10', 'Veľká Ves nad Ipľom', 'ipelpred@inMail.sk;ipelpred@gmail.com'];
  o['00587532'] = ['Obecný úrad', '', 'Ipeľské Úľany', '98', '935 82', 'Plášťovce', 'ipulany@stonline.sk'];
  o['00307092'] = ['Obecný úrad', '', 'Ipeľský Sokolec', '119', '935 75', 'Ipeľský Sokolec', 'ipsokolec@mail.t-com.sk'];
  o['00314528'] = ['Obecný úrad', '', 'Istebné', '142', '027 53', 'Istebné', 'ocuistebne@dkubin.sk'];
  o['00649112'] = ['Obecný úrad', '', 'Ďubákovo', '45', '985 07', 'Šoltýska', ''];
  o['00632732'] = ['Obecný úrad', '', 'Ďurčiná', '77', '015 01', 'Rajec', 'jcernan@rajec.net;obecdurcina@stonline.sk'];
  o['00332364'] = ['Obecný úrad', '', '', '36', '094 31', 'Hanušovce nad Topľou', 'obecdurdos@stonline.sk'];
  o['00692492'] = ['Obecný úrad', '', 'Ďurďové', '27', '018 22', 'Pružina', 'obec@durdove.eu'];
  o['00324124'] = ['Obecný úrad', '', '', '13', '044 45', 'Bidovce', 'obec.durdosik@post.sk'];
  o['00324132'] = ['Obecný úrad', '', '', '274', '044 19', 'Ruskov', 'obecdurkov@stonline.sk'];
  o['00329843'] = ['Obecný úrad', '', '', '18', '065 41', 'Ľubotín', 'obecdurkova@slnet.sk'];
  o['00316709'] = ['Obecný úrad', '', 'Ivančiná', '35', '038 45', 'Malý Čepčín', ''];
  o['00647608'] = ['Obecný úrad', '', 'Ďurkovce', '76', '991 27', 'Kamenné Kosihy', 'obec.durkovce@gmail.com'];
  o['00590444'] = ['Obecný úrad', '', 'Ivachnová', '7', '034 83', 'Liptovská Teplá', 'ou@ivachnova.sk'];
  o['00649511'] = ['Obecný úrad', '', 'Ivanice', '56', '980 42', 'Rimavská Seč', 'obec.ivanice@gemernet.sk'];
  o['00304786'] = ['Obecný úrad', '', 'Štefánikova', '12', '900 28', 'Ivanka pri Dunaji', 'sekretariat@ivankapridunaji.sk'];
  o['31827004'] = ['Obecný úrad', '', 'Novozámocká', '326', '951 12', 'Ivanka pri Nitre', 'obec@ivankaprinitre.sk'];
  o['00311651'] = ['Obecný úrad', '', 'Ivanovce', '1', '913 05', 'Melčice - Lieskové', 'ekonom@ivanovce.sk;obec@ivanovce.sk'];
  o['00306487'] = ['Obecný úrad', '', 'Ďatelinová', '674', '946 39', 'Iža', 'domin@iza.sk;obeciza@iza.sk'];
  o['30230390'] = ['Obecný úrad', '', 'Ižipovce', '40', '032 23', 'Liptovská Sielnica', 'obec.izipovce@stonline.sk'];
  o['00329193'] = ['Obecný úrad', '', '', '165', '053 03', 'Jablonov pri Levoči', 'obecjablonov@slovanet.sk'];
  o['00331562'] = ['Obecný úrad', '', 'Ižkovce', '56', '076 72', 'Vojany', 'ocu.izkovce@centrum.sk'];
  o['00304794'] = ['Obecný úrad', '', 'Jablonec', '206', '900 86', 'Budmerice', 'jablonec@golemtech.sk'];
  o['00309583'] = ['Obecný úrad', '', 'Trnavská', '801', '906 32', 'Jablonica', 'obec@jablonica.net'];
  o['00309591'] = ['Obecný úrad', '', 'Jablonka', '51', '906 21', 'Jablonka', 'obecjablonka@centrum.sk'];
  o['00304808'] = ['Obecný úrad', '', 'Jablonové', '197', '900 54', 'Jablonové', 'obecjablonove@obecjablonove.sk'];
  o['00328332'] = ['Obecný úrad', '', '', '73', '049 43', 'Jablonov nad Turňou', 'jablonovnt@stonline.sk'];
  o['00321338'] = ['Obecný úrad', '', 'Jablonové', '92', '013 52', 'Súľov', 'jablonove@stonline.sk;jablonove@jablonove.sk'];
  o['00323055'] = ['Obecný úrad', '', '', '75', '067 13', 'Rokytov pri Humennom', 'v.koscelnikstarosta@gmail.com'];
  o['00699209'] = ['Obecný úrad', '', 'Farská', '288/6', '956 21', 'Jacovce', 'sekretariat@obecjacovce.sk'];
  o['00800317'] = ['Obecný úrad', '', 'Jabloňovce', '73', '935 06', 'Jabloňovce', 'obecjablonovce@gmail.com;obecjablonovce@zmail.sk'];
  o['00305472'] = ['Obecný úrad', '', 'Nám. Sv. Trojice', '294/3', '930 21', 'Jahodná', 'sekretariat@obecjahodna.sk'];
  o['00329207'] = ['Obecný úrad', '', 'Nová', '464', '055 61', 'Jaklovce', 'podatelna@jaklovce.sk'];
  o['00327166'] = ['Obecný úrad', '', '', '83', '083 01', 'Sabinov', 'obec@jakovany.sk'];
  o['00329924'] = ['Obecný úrad', '', '', '555', '065 12', 'Jakubany', 'jakubany@jakubany.sk'];
  o['00327174'] = ['Obecný úrad', '', '', '67', '082 56', 'Pečovská Nová Ves', 'obec@jakubovavola.sk'];
  o['00304816'] = ['Obecný úrad', '', 'Jakubov', '191', '900 63', 'Jakubov', 'ocujakubov@zoznam.sk'];
  o['00327182'] = ['Obecný úrad', '', '', '24', '083 01', 'Sabinov', 'obec_jakubovany@stonline.sk'];
  o['00315273'] = ['Obecný úrad', '', 'Jakubovany', '21', '032 04', 'Liptovský Ondrej', 'jakubovany@imafex.sk'];
  o['00647845'] = ['Obecný úrad', '', 'Mlynská', '636/45', '972 31', 'Ráztočno', 'jalovec@stonline.sk'];
  o['00330515'] = ['Obecný úrad', '', '', '', '090 31', 'Kolbovce', ''];
  o['00315281'] = ['Obecný úrad', '', 'Jalovec', '2', '032 21', 'Bobrovec', 'oujalovec@alconet.sk'];
  o['00312592'] = ['Obecný úrad', '', 'Jalšové', '148', '922 31', 'Sokolovce', 'obec.jalsove@mail.t-com.sk'];
  o['00323063'] = ['Obecný úrad', '', '', '38', '067 61', 'Stakčín', 'obecjalova@stonline.sk'];
  o['00647501'] = ['Obecný úrad', '', 'Jalšovík', '23', '962 41', 'Bzovík', 'obecjalsovik@gmail.com'];
  o['00329215'] = ['Obecný úrad', '', '', '101', '053 22', 'Odorin', 'obecjamnik@stonline.sk'];
  o['00315290'] = ['Obecný úrad', '', 'Jamník', '192', '033 01', 'Liptovský Hrádok', 'obecjamnik@magnetcity.sk'];
  o['00305481'] = ['Obecný úrad', '', 'Janíky', '406', '930 39', 'Zlaté Klasy', 'obec@janiky.sk'];
  o['00649864'] = ['Obecný úrad', '', 'Janice', '54', '980 42', 'Rimavská Seč', 'obec.janice@gemernet.sk'];
  o['00324256'] = ['Obecný úrad', '', '', '135', '044 05', 'Janík', 'obecjanik@kid.sk'];
  o['00323071'] = ['Obecný úrad', '', '', '74', '067 24', 'Lukačovce', 'ou_jankovce@mail.t-com.sk'];
  o['00690627'] = ['Obecný úrad', '', '', '1', '082 42', 'Bzenov', 'janov@onlinenet.sk'];
  o['00322083'] = ['Obecný úrad', '', '', '62', '086 41', 'Raslavice', 'podatelna@janovcebj.sk'];
  o['00320706'] = ['Obecný úrad', '', 'Janova Lehota', '38', '966 24', 'Janova Lehota', 'janovalehota@janovalehota.sk'];
  o['00326259'] = ['Obecný úrad', '', '', '248', '059 13', 'Jánovce', 'janovce@obec-janovce.sk'];
  o['00306002'] = ['Obecný úrad', '', 'Hlavná', '24', '925 22', 'Veľké Úľany', 'obecjanovce@gmail.com'];
  o['00327204'] = ['Obecný úrad', '', '', '83', '082 03', 'Lemešany', 'obecjanovik@post.sk'];
  o['00308056'] = ['Obecný úrad', '', 'Hlavná', '176', '951 48', 'Jarok', 'ocujarok@jarok.sk'];
  o['00313513'] = ['Obecný úrad', '', 'Jarabá', '6', '977 01', 'Brezno', 'obecnyurad@jaraba.sk'];
  o['00329932'] = ['Obecný úrad', '', '', '58', '065 31', 'Jarabina', 'obecjarabina@stonline.sk'];
  o['00327212'] = ['Obecný úrad', '', '', '223', '082 63', 'Jarovnice', 'jarovnice@jarovnice.sk'];
  o['00317349'] = ['Obecný úrad', '', 'Jasenica', '130', '018 17', 'Jasenica', 'jasenica@stonline.sk'];
  o['00313521'] = ['Obecný úrad', '', 'Mlynská', '497', '976 75', 'Jasenie', 'obec.jasenie@stonline.sk'];
  o['00325244'] = ['Obecný úrad', '', '', '47', '072 42', 'Úbrež', 'jasenov1@post.sk'];
  o['00690074'] = ['Obecný úrad', '', '', '337', '066 01', 'Humenné', 'obecnyurad@jasenov.sk'];
  o['00321346'] = ['Obecný úrad', '', 'Jasenové', '50', '013 19', 'Kľače', 'obecjasenove@rajec.net'];
  o['00332437'] = ['Obecný úrad', '', '', '9', '094 05', 'Holčíkovce', 'obecjasenovce@stonline.sk'];
  o['00314536'] = ['Obecný úrad', '', 'Jasenová', '137', '026 01', 'Vyšný Kubín', 'obecjasenova@mail.t-com.sk'];
  o['00316717'] = ['Obecný úrad', '', 'Jasenovo', '99', '038 22', 'Slovenské Pravno', 'uradjasenovo@gaya.sk'];
  o['00312614'] = ['Obecný úrad', '', 'Námestie sv. Michala', '36/10A', '919 30', 'Jaslovské Bohunice', 'obec@jaslovskebohunice.sk'];
  o['00324264'] = ['Obecný úrad', '', 'Hlavná', '259', '044 23', 'Jasov', 'obecjasov@stonline.sk'];
  o['00308935'] = ['Obecný úrad', '', 'Jasová', '303', '941 34', 'Jasová', 'podatelna@jasovaobec.sk'];
  o['00332445'] = ['Obecný úrad', '', '', '113', '094 35', 'Soľ', 'obec@jastrabie.sk'];
  o['00320714'] = ['Obecný úrad', '', 'Jastrabá', '130', '966 32', 'Jastrabá', 'ocu@jastraba.eu'];
  o['00325252'] = ['Obecný úrad', '', 'Jastrabie pri Michalovciach', '53', '072 11', 'Čečehov', 'obecjastrabie@dalnet.sk'];
  o['00308943'] = ['Obecný úrad', '', 'Jatov', '190', '941 09', 'Jatov', 'j.dubovsky@centrum.sk;obecjatov@gmail.com'];
  o['00316725'] = ['Obecný úrad', '', 'Jazernica', '50', '038 44', 'Jazernica', 'jazernica@gaya.sk'];
  o['00322091'] = ['Obecný úrad', '', 'Jedlinka', '34', '086 36', 'Nižná Polianka', ''];
  o['00308072'] = ['Obecný úrad', '', 'Hlavná', '126', '951 73', 'Jelenec', 'obec.jelenec@jelenec.sk'];
  o['00308064'] = ['Obecný úrad', '', 'Jedľové Kostoľany', '297', '951 96', 'Jedľové Kostoľany', 'obec@jedlovekostolany.sk'];
  o['00328341'] = ['Mestský úrad', '', 'Námestie Republiky', '499', '049 16', 'Jelšava', 'primator@jelsava.sk'];
  o['00306011'] = ['Obecný úrad', '', 'Mierová', '959/17', '925 23', 'Jelka', 'obecjelka@stonline.sk'];
  o['00308081'] = ['Obecný úrad', '', 'Jelšovce', '37', '951 43', 'Jeľšovce', 'info@jelsovce.sk'];
  o['00647331'] = ['Obecný úrad', '', 'Jelšovec', '74', '985 32', 'Veľká nad Ipľom', 'obecjelsovec@stonline.sk'];
  o['00325261'] = ['Obecný úrad', '', '', '200', '072 52', 'Jenkovce', 'ou@jenkovce.sk'];
  o['00318833'] = ['Obecný úrad', '', 'Sobotská', '10', '980 02', 'Jesenské', 'obecjesenske@mail.t-com.sk;obec@jesenske.sk'];
  o['31823998'] = ['Obecný úrad', '', 'Jesenské', '28', '935 36', 'Beša', 'obecjesenske@wan1.sk'];
  o['00649589'] = ['Obecný úrad', '', 'Jestice', '27', '980 04', 'Hostice', 'jestice@gemer.org;perikap@szm.sk'];
  o['00696285'] = ['Obecný úrad', '', '', '17', '059 04', 'Spišské Hanušovce', 'obec@jezersko.sk'];
  o['00699207'] = ['Obecný úrad', '', 'Ješkova Ves', '40', '958 45', 'Ješkova Ves', 'ou@jeskovaves.sk'];
  o['00594784'] = ['Obecný úrad', '', 'Hlavná', '50', '049 45', 'Krásnohorská Dlhá Lúka', 'obecjovice@kidrv.sk'];
  o['00325279'] = ['Obecný úrad', '', 'Jovsa', '73', '072 32', 'Jovsa', 'homer22@centrum.sk;jovsa@jovsa.sk'];
  o['00307114'] = ['Obecný úrad', '', 'Jur nad Hronom', '278', '935 57', 'Jur nad Hronom', 'ocu@jur.sk'];
  o['00305499'] = ['Obecný úrad', '', 'Jurová', '85', '930 04', 'Baka', 'obecjurova@stonline.sk'];
  o['00330523'] = ['Obecný úrad', '', '', '22', '089 01', 'Svidník', 'jurkovavola@zmail.sk'];
  o['00326275'] = ['Obecný úrad', '', '', '20', '059 94', 'Holumnica', 'obecjurske@szm.sk'];
  o['00332453'] = ['Obecný úrad', '', '', '82', '094 12', 'Vechec', 'juskovavola@stonline.sk'];
  o['00306029'] = ['Obecný úrad', '', 'Kajal', '20', '925 92', 'Kajal', 'kajal@kajal.sk'];
  o['00325287'] = ['Obecný úrad', '', 'Kačanov', '66', '072 05', 'Kačanov', 'ocu.kacanov@minet.sk'];
  o['00315303'] = ['Obecný úrad', '', 'Kalameny', '70', '034 82', 'Lúčky pri Ružomberku', 'zastupitelstvo@kalameny.sk'];
  o['00307131'] = ['Obecný úrad', '', 'Červenej armády', '55', '935 32', 'Kalná nad Hronom', 'ehn@kalna.eu;obec@kalna.eu'];
  o['00323080'] = ['Obecný úrad', '', '', '81', '068 01', 'Medzilaborce', 'obec_kalinov@orangemail.sk'];
  o['00304841'] = ['Obecný úrad', '', 'Kalinkovo', '211', '900 43', 'Kalinkovo', 'sekretariat@obeckalinkovo.sk'];
  o['00316121'] = ['Obecný úrad', '', 'SNP', '138/14', '985 01', 'Kalinovo', 'obec@kalinovo.sk'];
  o['00323098'] = ['Obecný úrad', '', '', '199', '067 72', 'Klenová', 'kalnaroztoka@lekosonline.sk'];
  o['00311669'] = ['Obecný úrad', '', 'Kálnica', '100', '916 37', 'Kálnica', 'ocu@kalnica.sk'];
  o['00322105'] = ['Obecný úrad', '', '', '30', '087 01', 'Giraltovce', 'kalniste@centrum.sk'];
  o['00649121'] = ['Obecný úrad', '', 'Mierová', '67', '985 31', 'Rapovce', 'obeckalonda@mail.t-com.sk'];
  o['00324272'] = ['Obecný úrad', '', '', '128', '044 18', 'Kalša', 'ocukalsa@mail.t-com.sk'];
  o['00318841'] = ['Obecný úrad', '', 'Kaloša', '62', '982 52', 'Nižná Kaloša', 'kalosa@kalosa.sk'];
  o['00699225'] = ['Obecný úrad', '', 'Kamanová', '127', '956 12', 'Preseľany', 'obeckamanova@stonline.sk'];
  o['00325295'] = ['Obecný úrad', '', 'Kaluža', '4', '072 36', 'Kaluža', 'jan.cuchran@kaluza.sk;urad@kaluza.sk'];
  o['00323101'] = ['Obecný úrad', '', 'Humenská', '555/6', '067 83', 'Kamenica nad Cirochou', 'ocukamenicanc@stonline.sk'];
  o['00327221'] = ['Obecný úrad', '', '', '401', '082 81', 'Lipany', 'kamenica@kamenica.sk'];
  o['00318167'] = ['Obecný úrad', '', 'Dolnokamenčianska', '1/57', '972 44', 'Kamenec pod Vtáčnikom', 'administrativa@kamenec.sk;dane@kamenec.sk;info@kamenec.sk'];
  o['00308751'] = ['Obecný úrad', '', 'Kamenica nad Hronom', '106', '943 65', 'Kamenica nad Hronom', 'obec@kamenicanadhronom.sk'];
  o['00306495'] = ['Obecný úrad', '', 'Mierová', '790', '946 01', 'Kameničná', 'starosta@kamenicna.eu'];
  o['00692298'] = ['Obecný úrad', '', 'Kameničany', '39', '018 54', 'Slávnica', 'obecnyurad@kamenicany.sk'];
  o['00308960'] = ['Obecný úrad', '', 'Kamenín', '641', '943 57', 'Kamenín', 'podatelna@kamenin.sk'];
  o['00319368'] = ['Obecný úrad', '', 'Kamenné Kosihy', '3', '991 27', 'Kamenné Kosihy', 'obeckkosihy@slovanet.sk'];
  o['00332461'] = ['Obecný úrad', '', '', '207', '093 03', 'Vranov nad Topľou', 'ocukporuba@wmx.sk'];
  o['00648906'] = ['Obecný úrad', '', 'Hlavná', '136/159', '013 14', 'Kamenná Poruba', 'obeckamennaporuba@stonline.sk'];
  o['00047244'] = ['Obecný úrad', '', 'Hlavná', '29', '943 58', 'Kamenný Most', 'jarekova@kamenny-most.sk;kamennymost@parkany.sk;magat@parkany.sk'];
  o['00328367'] = ['Obecný úrad', '', 'Kameňany', '6', '049 62', 'Kameňany', 'obec@obec-kamenany.sk'];
  o['00323110'] = ['Obecný úrad', '', '', '143', '067 83', 'Kamenica nad Cirochou', 'info@kamienka.sk'];
  o['00329941'] = ['Obecný úrad', '', '', '123', '065 32', 'Kamienka', 'obeckamienka@obeckamienka.sk;obeckamienka@slnet.sk'];
  o['00518239'] = ['Obecný úrad', '', 'SNP', '583/1', '972 17', 'Kanianka', 'ocu.kanianka@stonline.sk+prednosta@kanianka.sk'];
  o['00330531'] = ['Obecný úrad', '', '', '82', '090 01', 'Kapišová', 'kapisova@kapisova.sk'];
  o['00800376'] = ['Obecný úrad', '', 'Kapince', '47', '951 24', 'Nové Sady', 'oukapince@wircom.sk'];
  o['00331571'] = ['Obecný úrad', '', '', '27', '079 01', 'Veľké Kapušany', 'obeckapklacany@zoznam.sk;obeck.klacany@gmail.com'];
  o['00655627'] = ['Obecný úrad', '', 'Kaplna', '39', '900 84', 'Báhoň', 'ou.kaplna@stonline.sk'];
  o['00649309'] = ['Obecný úrad', '', 'Karlová', '30', '038 15', 'Blatnica pri Martine', 'obeckarlova@karlova.sk;obeckarlova@zoznam.sk'];
  o['00327239'] = ['Obecný úrad', '', 'Hlavná', '104/6', '082 12', '', 'kapusany@kapusany.sk'];
  o['00323128'] = ['Obecný úrad', '', 'Karná', '110', '067 45', 'Topoľovka', 'obec.karna@gmail.com'];
  o['00312622'] = ['Obecný úrad', '', 'Kátlovce', '1', '919 55', 'Kátlovce', 'johanes@katlovce.sk;obeckatlovce@stonline.sk'];
  o['00309605'] = ['Obecný úrad', '', 'Kátov', '41', '908 49', 'Kátov', 'ocu-katov@stonline.sk'];
  o['00331589'] = ['Obecný úrad', '', 'Hlavná', '1/1', '076 02', 'Novosad', 'pkusnirik@zoznam.sk;obeckasov@azet.sk'];
  o['00633909'] = ['Obecný úrad', '', 'Kaľamenová', '11', '038 22', 'Kaľamenová', 'sekretariat@kalamenova.sk'];
  o['00331597'] = ['Obecný úrad', '', 'Hlavná', '138', '076 13', 'Kazimír', 'obeckazimir@stonline.sk'];
  o['00329223'] = ['Obecný úrad', '', '', '63', '053 42', 'Krompachy', 'obeckalava@slovanet.sk'];
  o['00324299'] = ['Obecný úrad', '', '', '92', '044 47', 'Kecerovce', 'ocu_kecerovce@zoznam.sk'];
  o['00690287'] = ['Obecný úrad', '', '', '56', '044 47', 'Kecerovce', 'obec@kecerovskylipovec.sk'];
  o['00690261'] = ['Obecný úrad', '', '', '19', '044 58', 'Kechnec', 'obeckechnec@mail.t-com.sk'];
  o['00330540'] = ['Obecný úrad', '', '', '87', '090 11', 'Vyšný Orlík', 'obec.keckovce@gmail.com'];
  o['00328375'] = ['Obecný úrad', '', '', '78', '049 55', 'Dlhá Ves', 'kecovo.obec@gmail.com'];
  o['00327247'] = ['Obecný úrad', '', '', '274', '082 01', 'Kendice', 'obeckendice@zoznam.sk'];
  o['00650102'] = ['Obecný úrad', '', 'Kesovce', '3', '980 45', 'Štrkovec', 'kesovce@zoznam.sk'];
  o['00307190'] = ['Obecný úrad', '', 'Keť', '34', '935 64', 'Keť', 'obec.ket@mail.t-com.sk'];
  o['00326283'] = ['Mestský úrad', '', 'Hlavné Námestie', '1', '060 01', 'Kežmarok', 'primator@kezmarok.sk'];
  o['00319376'] = ['Obecný úrad', '', 'Kiarov', '25', '991 06', 'Želovce', 'kiarov@gonet.sk;obeckiarov@gonet.sk'];
  o['00332470'] = ['Obecný úrad', '', '', '100', '094 21', 'Nižný Hrabovec', 'obeckladzany@stonline.sk'];
  o['00308102'] = ['Obecný úrad', '', 'Klasov', '108', '951 53', 'Klasov', 'podatelna@klasov.sk'];
  o['00310549'] = ['Obecný úrad', '', 'Klátova Nová Ves', '100', '958 44', 'Klátova Nová Ves', 'podatelna@klatovanovaves.sk'];
  o['00316733'] = ['Obecný úrad', '', 'M. Čulena', '181', '038 43', 'Kláštor pod Znievom', 'obecklastor@obecklastor.sk'];
  o['00323136'] = ['Obecný úrad', '', '', '126', '067 72', 'Klenová', 'obecklenova@lekosonline.sk'];
  o['00327255'] = ['Obecný úrad', '', '', '140', '082 44', 'Klenov', 'obecklenov@gmail.com'];
  o['00318850'] = ['Obecný úrad', '', 'Námestie Karola Salvu', '1', '980 55', 'Klenovec', 'kastanovaz@gmail.com;kastanova.z@klenovec.sk;obec@klenovec.sk'];
  o['00329240'] = ['Obecný úrad', '', '', '112', '053 02', 'Spišský Hrhov', 'obec.klcov@gmail.com'];
  o['00692476'] = ['Obecný úrad', '', 'Klieština', '45', '018 02', 'Dolná Maríková', 'kliestina@pegonet.sk'];
  o['00319384'] = ['Obecný úrad', '', 'Kleňany', '149', '991 10', 'Veľká Ves nad Ipľom', 'klenany@pobox.sk'];
  o['00314544'] = ['Obecný úrad', '', 'Klin', '199', '029 41', 'Klin', 'obecklin@klin.sk'];
  o['00689718'] = ['Obecný úrad', '', 'Hlavná', '34', '076 31', 'Streda nad Bodrogom', 'klinb@stonline.sk'];
  o['00306509'] = ['Obecný úrad', '', 'Hlavná', '52', '946 19', 'Číčov', 'sekretariat@klizskanema.sk'];
  o['00319996'] = ['Obecný úrad', '', 'Klokoč', '1', '962 25', 'Slatinské Lazy', 'obecklokoc@stonline.sk'];
  o['00325309'] = ['Obecný úrad', '', 'Klokočov', '65', '072 36', 'Kaluža', 'obec@klokocovmi.sk'];
  o['00328383'] = ['Obecný úrad', '', '', '78', '049 23', 'Nižná Slaná', 'obec@kobeliarovo.sk'];
  o['00314056'] = ['Obecný úrad', '', 'Klubina', '67', '023 04', 'Stará Bystrica', 'ou.klubina@stonline.sk'];
  o['00314048'] = ['Obecný úrad', '', 'Klokočov', '962', '023 22', 'Klokočov', 'majetok@klokocov.sk;pam@klokocov.sk;uctaren@klokocov.sk;dane@klokocov.sk;kontrola@klokocov.sk;pokladna@klokocov.sk'];
  o['00329274'] = ['Obecný úrad', '', 'Kluknava', '177', '053 51', 'Kluknava', 'obec@kluknava.sk'];
  o['00309028'] = ['Obecný úrad', '', 'Kmeťovo', '77', '941 62', 'Kmeťovo', 'obec.kmetovo@inetnz.sk'];
  o['00322121'] = ['Obecný úrad', '', '', '19', '087 01', 'Giraltovce', ''];
  o['00322130'] = ['Obecný úrad', '', '', '57', '086 22', 'Kľušov', 'obeckobyly@stonline.sk'];
  o['00323144'] = ['Obecný úrad', '', '', '207', '066 01', 'Humenné', 'obeckochanovce@ocu.sk'];
  o['00328391'] = ['Obecný úrad', '', '', '2', '049 35', 'Ochtiná', 'obeckocelovce@azet.sk'];
  o['00322148'] = ['Obecný úrad', '', '', '46', '086 46', 'Hankovce', 'kochanovce@ocu.sk'];
  o['00650030'] = ['Obecný úrad', '', 'Kociha', '27', '980 52', 'Hrachovo', 'obec.kociha@gmail.com'];
  o['00648868'] = ['Obecný úrad', '', 'Kocurany', '105', '972 02', 'Opatovce nad Nitrou', 'obec@kocurany.sk'];
  o['00312657'] = ['Obecný úrad', '', 'Kočín - Lančár', '4', '922 04', 'Dolný Lopašov', 'kocin.lancar@amdsl.sk'];
  o['00311685'] = ['Obecný úrad', '', 'Kočovce', '280', '916 31', 'Kočovce', 'oukocovce@kocovce.sk'];
  o['00327263'] = ['Obecný úrad', '', '', '200', '082 32', 'Svinia', 'obec_kojatice@stonline.sk;obec@kojatice.sk'];
  o['00329258'] = ['Obecný úrad', '', '', '3', '055 52', 'Kojšov', 'oukojsov@stonline.sk'];
  o['00316130'] = ['Obecný úrad', '', 'Nám. 1. mája', '480/1', '985 05', 'Kokava nad Rimavicou', 'obec@kokava.sk'];
  o['00324311'] = ['Obecný úrad', '', '', '178', '044 13', 'Valaliky', 'koksov-baksa@stonline.sk'];
  o['00327271'] = ['Obecný úrad', '', '', '76', '082 52', 'Kokošovce', 'obeckokosovce@presnetsk.net'];
  o['00329959'] = ['Obecný úrad', '', '', '30', '065 11', 'Nová Ľubovňa', 'obeckolackov@slnet.sk'];
  o['00310557'] = ['Obecný úrad', '', 'Kolačno', '164', '958 41', 'Veľké Uherce', 'obeckolacno@stonline.sk'];
  o['00321362'] = ['Obecný úrad', '', 'Kolárovice', '389', '013 54', 'Kolárovice', 'obeckolarovice@compnet.sk;obec@kolarovice.eu'];
  o['00306517'] = ['Mestský úrad', '', 'Kostolné nám.', '1', '946 03', 'Kolárovo', 'info@kolarovo.sk'];
  o['00647390'] = ['Obecný úrad', '', 'Koláre', '19', '991 09', 'Veľká Čalomija', 'kolare@mail.t-com.sk'];
  o['00323152'] = ['Obecný úrad', '', '', '26', '067 66', 'Kolbasov', 'obeckolbasov@stonline.sk'];
  o['00330558'] = ['Obecný úrad', '', '', '44', '090 31', 'Kolbovce', 'kolbovce@centrum.sk'];
  o['00325317'] = ['Obecný úrad', '', '', '49', '072 61', 'Porúbka pri Sobranciach', ''];
  o['00329266'] = ['Obecný úrad', '', '', '129', '053 42', 'Krompachy', 'kolinovce@stonline.sk'];
  o['00308111'] = ['Obecný úrad', '', 'Nám. L. A. Aranya', '528', '951 78', 'Kolíňany', 'info@kolinany.eu'];
  o['00323161'] = ['Obecný úrad', '', '', '118', '067 61', 'Stakčín', 'obeckolonica@gmail.com'];
  o['00332488'] = ['Obecný úrad', '', '', '136', '093 01', 'Vranov nad Topľou 1', 'ocu@komarany.sk'];
  o['00308986'] = ['Obecný úrad', '', 'Kolta', '1', '941 33', 'Kolta', 'ocu@kolta.sk'];
  o['00322156'] = ['Obecný úrad', '', '', '55', '086 11', 'Hrabovec', 'obeckomarov@stonline.sk'];
  o['00324329'] = ['Obecný úrad', '', 'Komárovce', '22', '044 55', 'Veľká Ida', 'obec@komarovce.sk'];
  o['00306525'] = ['Mestský úrad', '', 'Nám. Gen. Klapku', '1', '945 01', 'Komárno', 'info@komarno.sk'];
  o['00315311'] = ['Obecný úrad', '', 'Komjatná', '292', '034 96', 'Valaská Dubová', 'obec.komjatna@gmail.com'];
  o['00308994'] = ['Obecný úrad', '', 'Nádražná', '97/344', '941 06', 'Komjatice', 'info@komjatice.sk'];
  o['00309001'] = ['Obecný úrad', '', 'Komoča', '495', '941 21', 'Komoča', 'komoca@azet.sk'];
  o['00699233'] = ['Obecný úrad', '', 'Koniarovce', '183', '956 13', 'Koniarovce', 'podatelna@obeckoniarovce.sk'];
  o['00318868'] = ['Obecný úrad', '', 'Priemyselná', '108', '980 32', 'Blhovce', 'konradovce@stonline.sk'];
  o['00590657'] = ['Obecný úrad', '', 'Konská', '244', '032 04', 'Liptovský Ondrej', 'obeckonskalm@gmail.com'];
  o['00648876'] = ['Obecný úrad', '', 'Konská', '410', '013 13', 'Rajecké Teplice', 'urad@obeckonska.info;obecny_urad@obeckonska.sk'];
  o['00325333'] = ['Obecný úrad', '', 'Koňuš', '39', '072 63', 'Choňkovce', 'konus@lekosonline.sk'];
  o['00309613'] = ['Obecný úrad', '', 'Kollárova', '318', '908 48', 'Kopčany', 'kopcany@ehs.sk;obec@kopcany.sk'];
  o['00312665'] = ['Obecný úrad', '', 'Koplotovce', '28', '920 01', 'Hlohovec', 'info@koplotovce.sk;koplotovce@koplotovce.sk'];
  o['00322164'] = ['Obecný úrad', '', '', '126', '086 43', 'Koprivnica', 'koprivnica@koprivnica.sk;obeckoprivnica@wi-net.sk'];
  o['00320749'] = ['Obecný úrad', '', 'Kopernica', '1', '967 01', 'Kremnica', 'obeckopernica@stonline.sk'];
  o['00313530'] = ['Obecný úrad', '', 'Kordíky', '59', '976 34', 'Tajov', 'obeckordiky@lifepc.sk'];
  o['00330566'] = ['Obecný úrad', '', '', '35', '090 05', 'Krajná Poľana', 'obec.korejovce@centrum.sk'];
  o['00314064'] = ['Obecný úrad', '', 'Korňa', '517', '023 21', 'Korňa', 'oukorna@stonline.sk'];
  o['00325350'] = ['Obecný úrad', '', 'Koromľa', '172', '072 62', 'Koromľa', 'podatelna@obeckoromla.sk'];
  o['00330574'] = ['Obecný úrad', '', '', '22', '090 31', 'Kolbovce', ''];
  o['17066905'] = ['Obecný úrad', '', 'Korytárky', '215', '962 04', 'Kriváň', 'sekretariat@korytarky.sk'];
  o['00320757'] = ['Obecný úrad', '', 'Kosorín', '117', '966 24', 'Janova Lehota', 'ou.kosorin@gmail.com'];
  o['35529547'] = ['Obecný úrad', '', '', '14', '053 05', 'Beharovce', 'palencar.p@azet.sk;obeckorytne@azet.sk'];
  o['00319406'] = ['Obecný úrad', '', 'Kosihy nad Ipľom', '164', '991 11', 'Balog nad Ipľom', 'kosihynadiplom@zoznam.sk'];
  o['00319392'] = ['Obecný úrad', '', 'Kosihovce', '251', '991 25', 'Čebovce', 'kosihovce@gmail.com'];
  o['00317381'] = ['Obecný úrad', '', 'Kostolec', '42', '017 05', 'Považská Bystrica 5', 'obeckostolec@centrum.sk'];
  o['00311693'] = ['Obecný úrad', '', 'Kostolná - Záriečie', '148', '913 04', 'Chocholná-Velčice', 'obec@kostolnazariecie.sk'];
  o['00304867'] = ['Obecný úrad', '', 'Hlavná', '66', '900 62', 'Kostolište', 'obeckostoliste@stonline.sk'];
  o['00306037'] = ['Obecný úrad', '', 'Kostolná pri Dunaji', '59', '903 01', 'Senec', 'kostolnapd@inmail.sk'];
  o['00318205'] = ['Obecný úrad', '', 'Kostolná Ves', '136', '972 26', 'Nitrianské Rudno', 'ocukostolnaves@mail.t-com.sk'];
  o['00311707'] = ['Obecný úrad', '', 'Kostolné', '1', '916 13', 'Kostolné', 'obec@kostolne.sk'];
  o['00305511'] = ['Obecný úrad', '', 'Kostolné Kračany', '149', '930 03', 'Kráľovičove Kračany', 'kostolnekracany@nextra.sk'];
  o['00321397'] = ['Obecný úrad', '', 'Kotrčiná Lúčka', '64', '013 02', 'Gbelany', 'ocu@kotrcinalucka.sk'];
  o['35550091'] = ['Obecný úrad', '', 'Košická ulica', '34', '044 31', 'Kostoľany nad Hornádom', 'ocu.kostolany@stonline.sk'];
  o['00308129'] = ['Obecný úrad', '', 'Kostoľany pod Tríbečom', '70', '951 77', 'Ladice', 'starosta.kostolany@gmail.com'];
  o['00321389'] = ['Obecný úrad', '', 'Kotešová', '325', '013 61', 'Kotešová', 'ocukotesova@mail.t-com.sk'];
  o['00316067'] = ['Obecný úrad', '', 'Kotmanová', '122', '985 53', 'Mýtna', 'obec@kotmanova.sk'];
  o['00320005'] = ['Obecný úrad', '', 'Kúpeľná', '12', '962 37', 'Kováčová', 'brachna@kovacova.sk;izrael@kovacova.sk;obec@kovacova.sk'];
  o['00696684'] = ['Obecný úrad', '', '', '28', '049 42', 'Drnava', 'obec@kovacova.net'];
  o['00319414'] = ['Obecný úrad', '', 'Kováčovce', '52', '991 06', 'Želovce', 'kovacovce@gonet.sk'];
  o['00309630'] = ['Obecný úrad', '', 'Koválov', '216', '906 03', 'Smrdáky', 'obeckovalov@stonline.sk'];
  o['00309648'] = ['Obecný úrad', '', 'Koválovec', '53', '908 63', 'Koválovec', 'obec@kovalovec.gityposta.sk;obec@kovalovec.sk'];
  o['00310573'] = ['Obecný úrad', '', 'Kovarce', '451', '956 15', 'Kovarce', 'info@obeckovarce.sk'];
  o['00307149'] = ['Obecný úrad', '', 'Hlavná', '685', '935 22', 'Kozárovce', 'obec@kozarovce.sk'];
  o['00647667'] = ['Obecný úrad', '', 'Kozelník', '16', '966 15', 'Banská Belá', 'ocu@kozelnik.sk'];
  o['00648159'] = ['Obecný úrad', '', 'Kozí Vrbovok', '42', '962 41', 'Bzovík', 'obeckozivrbovok@zvnet.net'];
  o['00318213'] = ['Obecný úrad', '', 'Víťazstva', '791/41', '972 41', 'Koš', 'oukos@trinet.sk'];
  o['00309621'] = ['Obecný úrad', '', 'Košariská', '78', '906 15', 'Košariská', 'kosariska@stonline.sk'];
  o['00332496'] = ['Obecný úrad', '', '', '172', '094 06', 'Košarovce', 'ocukosarovce@mail.t-com.sk'];
  o['00317390'] = ['Obecný úrad', '', 'Hlavná', '36/100', '018 64', 'Košeca', 'podatelna@koseca.sk'];
  o['00317870'] = ['Obecný úrad', '', 'Košecké Podhradie', '359', '018 31', 'Košecké Podhradie', 'obec@koseckepodhradie.sk'];
  o['00691003'] = ['Miestny úrad', '', 'Abovská', '32', '040 17', 'Košice', 'mubarca@stonline.sk'];
  o['00691135'] = ['Mestský úrad', '', 'TRIEDA SNP', '48/A', '040 11', 'Košice', 'sekretariatprimatora@kosice.sk'];
  o['00690988'] = ['Miestny úrad', '', 'Dvorkinova', '7', '040 12', 'Košice', 'dudikova@kosice-dh.sk;andrejcak@kosice-dh.sk;m-urad@kosice-dh.sk'];
  o['00691097'] = ['Miestny úrad', '', 'Člnkova', '27', '040 01', 'Košice 1', 'mu.dzungla@post.sk'];
  o['00691046'] = ['Miestny úrad', '', 'Smetanova', '4', '040 79', 'Košice', 'urad@kosicejuh.sk'];
  o['00690902'] = ['Miestny úrad', '', 'Široká', '17/A', '040 01', 'Košice', 'info@kosicekavecany.sk'];
  o['00690996'] = ['Miestny úrad', '', 'Mliečna', '1', '040 14', 'Košice', 'mcknv@netkosice.sk'];
  o['00691119'] = ['Miestny úrad', '', 'Krčméryho', '2', '040 11', 'Košice', 'lunik9@centrum.sk'];
  o['00691020'] = ['Miestny úrad', '', 'Opátska', '18', '040 18', 'Košice - Krásna', 'kosicekrasna@kosicekrasna.sk'];
  o['00690945'] = ['Miestny úrad', '', 'Lorinčík', '15', '040 11', 'Košice', 'mumc_lorincik@stonline.sk;urad@mclorincik.sk'];
  o['00690961'] = ['Miestny úrad', '', 'Pod horu', '22', '040 16', 'Košice', 'myslava@internetkosice.sk'];
  o['00691038'] = ['Miestny úrad', '', 'Poludniková', '7', '040 12', 'Košice 4', 'sekretariat.jazero@netkosice.sk'];
  o['00690953'] = ['Miestny úrad', '', 'Krompašská', '54', '040 11', 'Košice', 'urad@mcperes.sk'];
  o['00691062'] = ['Miestny úrad', '', 'Dolina', '2', '040 15', 'Košice', 'referent1@polov.sk;mcpolov@netkosice.sk'];
  o['00690929'] = ['Miestny úrad', '', 'Festivalové námestie', '2', '040 01', 'Košice 8', 'info@kosicesever.sk;kancelariastarostu@kosicesever.sk'];
  o['00691089'] = ['Miestny úrad', '', 'Trieda KVP', '1', '040 23', 'Košice 23', 'sekret@mckvp.sk'];
  o['00691071'] = ['Miestny úrad', '', 'Americká trieda', '15', '040 13', 'Košice', 'emil.petrvalsky@tahanovce.sk;petrvalsky@tahanovce.sk;mutah@tahanovce.sk'];
  o['00690937'] = ['Mestský úrad', '', 'Hviezdoslavova', '7', '040 01', 'Košice-Staré Mesto', 'starosta@kosice-city.sk'];
  o['00691101'] = ['Miestny úrad', '', 'Nižná úvrať', '25', '040 01', 'Košice 1', 'podatelna.opatske@kosice.sk'];
  o['00690970'] = ['Miestny úrad', '', 'Trieda SNP', '39', '040 11', 'Košice 2', 'miestnyurad@kosicezapad.sk'];
  o['00691054'] = ['Miestny úrad', '', 'Železiarenská', '9', '040 15', 'Košice - Šaca', 'saca@saca.sk'];
  o['00690911'] = ['Miestny úrad', '', 'Ťahanovská', '28', '040 13', 'Košice', 'podatelna@tahanovce.eu'];
  o['00691011'] = ['Miestny úrad', '', 'Podbeľová', '1', '040 17', 'Košice-Barca', 'mcsebastovce@netkosice.sk'];
  o['00324345'] = ['Obecný úrad', '', 'Košická Belá', '54', '044 65', 'Košická Belá', 'obec@obeckosickabela.sk'];
  o['00324353'] = ['Obecný úrad', '', '', '122', '044 41', 'Košická Polianka', 'kosickapolianka@netkosice.sk'];
  o['00324361'] = ['Obecný úrad', '', '', '118', '044 42', 'Rozhanovce', 'obec_kosicke_olsany@stonline.sk'];
  o['00324370'] = ['Obecný úrad', '', '', '9', '044 45', 'Bidovce', 'obec.kosicky.klecenov@atlas.sk'];
  o['00323179'] = ['Obecný úrad', '', '', '11', '067 12', 'Koškovce', 'ocukoskovce@mail.t-com.sk'];
  o['00312673'] = ['Obecný úrad', '', 'Košolná', '44', '919 01', 'Suchá nad Parnou', 'obeckosolna@stonline.sk'];
  o['00306045'] = ['Obecný úrad', '', 'Košúty', '20', '925 09', 'Košúty', 'ou.kosuty@stonline.sk'];
  o['00322172'] = ['Obecný úrad', '', '', '21', '086 12', 'Kurima', 'kozany@centrum.sk;obeckozany@centrum.sk'];
  o['00316741'] = ['Obecný úrad', '', 'Košťany nad Turcom', '64', '038 41', 'Košťany nad Turcom', 'urad@kostanynadturcom.sk'];
  o['00331601'] = ['Obecný úrad', '', 'Hlavná', '62', '076 01', 'Zemplínske Hradište', 'obec.kozuchov@centrum.sk'];
  o['00330582'] = ['Obecný úrad', '', '', '', '090 22', 'Bukovce', ''];
  o['30230365'] = ['Obecný úrad', '', 'Krahule', '26', '967 01', 'Kremnica', 'ou@krahule.eu'];
  o['00322181'] = ['Obecný úrad', '', '', '350', '087 01', 'Giraltovce', 'kracunovce@stonline.sk'];
  o['00330591'] = ['Obecný úrad', '', '', '82', '090 05', 'Krajná Poľana', 'starosta@krajnabystra.sk'];
  o['00330612'] = ['Obecný úrad', '', '', '28', '090 05', 'Krajná Poľana', 'obec.krajnaporubka@centrum.sk'];
  o['00330604'] = ['Obecný úrad', '', '', '24', '090 05', 'Krajná Poľana', 'krajnapolana@centrum.sk'];
  o['00311715'] = ['Obecný úrad', '', 'Krajné', '52', '916 16', 'Krajné', 'sekretariat@krajne.sk'];
  o['00330621'] = ['Obecný úrad', '', '', '8', '090 03', 'Ladomirová', 'krajnecierno@gmail.com'];
  o['00312681'] = ['Obecný úrad', '', 'Námestie sv. Mikuláša', '406/4', '922 02', 'Krakovany', 'krakovany@krakovany.sk'];
  o['00313548'] = ['Obecný úrad', '', 'Králická ulica', '96/48', '976 34', 'Tajov', 'obec@obeckraliky.sk'];
  o['00649694'] = ['Obecný úrad', '', 'Kraskovo', '67', '980 26', 'Lukovištia', 'zdenaocovayova@zoznam.sk'];
  o['00327280'] = ['Obecný úrad', '', '', '138', '082 73', 'Šarišské Dravce', 'oukrasnaluka@centrum.sk'];
  o['00699241'] = ['Obecný úrad', '', 'Krásno', '68', '958 43', 'Krásno', 'obeckrasno@stonline.sk'];
  o['00310581'] = ['Obecný úrad', '', 'Krásna Ves', '142', '956 53', 'Bánovce na Bebravou', 'obec@krasnaves.sk'];
  o['00314072'] = ['Mestský úrad', '', '1. mája', '1255', '023 02', 'Krásno nad Kysucou', 'zastupca@mestokrasno.sk;info@mestokrasno.sk'];
  o['00328413'] = ['Obecný úrad', '', '', '3', '049 45', 'Krásnohorská Dlhá Lúka', 'obeckdl@kidrv.sk'];
  o['00328421'] = ['Obecný úrad', '', 'Hradná', '156', '049 41', 'Krásnohorské Podhradie', 'obec.krasnohorskepodhradie@stonline.sk'];
  o['00325368'] = ['Obecný úrad', '', 'Krásnovce', '131', '072 01', 'Pozdišovce', 'krasnovce@minet.sk'];
  o['00323187'] = ['Obecný úrad', '', '', '69', '067 03', 'Krásny Brod', 'ou.kbrod@stonline.sk'];
  o['00321401'] = ['Obecný úrad', '', 'Krasňany', '22', '013 03', 'Varín', 'krasnany@obeckrasnany.sk'];
  o['00331627'] = ['Obecný úrad', '', 'Potočná', '1/6', '076 61', 'Bačkov', 'ocukravany@minet.sk'];
  o['00326291'] = ['Obecný úrad', '', '', '111', '059 18', 'Spišské Bystré', 'kravany@kravany.sk'];
  o['00306533'] = ['Obecný úrad', '', 'Hlavná', '186', '946 36', 'Kravany nad Dunajom', 'mzdy@kravany.com;ucty@kravany.com;kravany@kravany.com'];
  o['00318876'] = ['Obecný úrad', '', 'Kráľ', '223', '980 45', 'Štrkovec', 'ocukral@zoznam.sk'];
  o['00306053'] = ['Obecný úrad', '', 'Kráľov Brod', '4', '925 41', 'Kráľov Brod', 'kralov.brod@azet.sk;kralov.brod@post.sk'];
  o['00315338'] = ['Obecný úrad', '', 'Kráľova Lehota', '39', '032 33', 'Kraľova Lehota', 'obec.klehota@mag-net.sk'];
  o['00306070'] = ['Obecný úrad', '', 'Kráľová nad Váhom', '71', '925 91', 'Kráľová nad Váhom', 'obeckralovanv@stonline.sk'];
  o['00306061'] = ['Obecný úrad', '', '', '326', '900 50', 'Kráľová pri Senci', 'suvadova.kralova@nextra.sk;vrbovska.kralova@nextra.sk'];
  o['00314561'] = ['Obecný úrad', '', 'Kraľovany', '186', '027 51', 'Kraľovany', 'oukralovany@pobox.sk'];
  o['00324388'] = ['Obecný úrad', '', '', '196', '044 44', 'Kráľovce', 'kralovce@zoznam.sk'];
  o['00320030'] = ['Obecný úrad', '', 'Kráľovce - Krnišov', '38', '962 65', 'Hontianske Nemce', 'juznesitnokk@stonline.sk'];
  o['00305529'] = ['Obecný úrad', '', 'Kráľovičove Kračany', '109', '930 03', 'Kráľovičove Kračany', 'kral.kracany@nextra.sk'];
  o['00331619'] = ['Mestský úrad', '', 'Ľ. Kossutha', '99', '077 01', 'Kráľovský Chlmec', 'mesto@kralovskychlmec.sk'];
  o['00325376'] = ['Obecný úrad', '', '', '17', '072 51', 'Krčava', 'obeckrcava@lekosonline.sk'];
  o['00329967'] = ['Obecný úrad', '', '', '19', '065 21', 'Hraničné', 'obeckremna@livenet.sk'];
  o['30230373'] = ['Obecný úrad', '', 'Kremnické Bane', '1', '967 01', 'Kremnica', 'kremnickebane@stonline.sk'];
  o['00320781'] = ['Mestský úrad', '', 'Štefánikovo námestie', '1/1', '967 01', 'Kremnica', 'zuzana.lanckova@kremnica.sk;zuzana.balazova@kremnica.sk;msu@kremnica.sk'];
  o['00325384'] = ['Obecný úrad', '', '', '83', '072 55', 'Porostov', 'kristy@lekosonline.sk'];
  o['00314587'] = ['Obecný úrad', '', 'Krivá', '180', '027 55', 'Dlhá nad Oravou', 'oukriva@orava.sk'];
  o['00320048'] = ['Obecný úrad', '', 'Kriváň', '441', '962 04', 'Kriváň', 'obecnyuradkrivan@zoznam.sk'];
  o['00327298'] = ['Obecný úrad', '', 'Záhradná', '46', '082 71', 'Lipany nad Torysou', 'obec@krivany.sk'];
  o['00322199'] = ['Obecný úrad', '', 'Krivé', '25', '086 04', 'Kružlov', 'obeckrive@gmail.com'];
  o['00692506'] = ['Obecný úrad', '', 'Krivoklát', '77', '018 52', 'Pruské', 'obec.krivoklat@t-network.sk'];
  o['00311723'] = ['Obecný úrad', '', 'Krivosúd - Bodovka', '88', '913 11', 'Trenčianské Stankovce', 'kmeto@krivosud-bodovka.sk;obec@krivosud-bodovka.sk'];
  o['00331635'] = ['Obecný úrad', '', 'Križany', '145', '079 01', 'Veľké Kapušany', 'krisovskalieskova@atknet.sk'];
  o['00330639'] = ['Obecný úrad', '', 'Krišľovce', '17', '090 31', 'Kolbovce', 'obec.krislovce@centrum.sk'];
  o['00322202'] = ['Obecný úrad', '', '', '8', '086 04', 'Kružlov', 'obeckrize@gmail.com'];
  o['00327301'] = ['Obecný úrad', '', 'Krížovany', '24', '082 33', 'Chminianska Nová Ves', 'obeckrizovany@zoznam.sk'];
  o['00326305'] = ['Obecný úrad', '', '', '51', '059 01', 'Spišská Belá', 'krizovaves@stonline.sk'];
  o['00682187'] = ['Obecný úrad', '', 'Križovany nad Dudváhom', '1', '919 24', 'Križovany nad Dudváhom', 'ekonomika@krizovany.sk;dane@krizovany.sk'];
  o['00648591'] = ['Obecný úrad', '', 'Krná', '49', '985 25', 'Uhorské', 'obec@krna.sk;obeckrna@gmail.com'];
  o['00310603'] = ['Obecný úrad', '', 'Októbrová', '500', '956 19', 'Krnča', 'ocu@krnca.sk'];
  o['00650081'] = ['Obecný úrad', '', 'Krokava', '4', '982 67', 'Rovné', ''];
  o['00316750'] = ['Obecný úrad', '', 'Štefánikova', '138/7', '038 54', 'Krpeľany', 'krpelany@krpelany.sk'];
  o['00329282'] = ['Mestský úrad', '', 'Námestie slobody', '1', '053 42', 'Krompachy', 'podatelna@krompachy.sk'];
  o['00310611'] = ['Obecný úrad', '', 'Krtovce', '2', '956 03', 'Hajná Nová Ves', 'obeckrtovce@azet.sk'];
  o['00330957'] = ['Obecný úrad', '', '', '60', '090 32', 'Miňovce', 'obeckrucov@stonline.sk'];
  o['00320056'] = ['Mestský úrad', '', 'Svätotrojičné námestie', '4/4', '963 01', 'Krupina', 'krupina@krupina.sk'];
  o['00314595'] = ['Obecný úrad', '', 'Krušetnica', '69', '029 54', 'Krušetnica', 'oukrusetnica@orava.sk'];
  o['00330647'] = ['Obecný úrad', '', '', '67', '091 01', 'Stropkov', 'bochinviktor@gmail.com'];
  o['00699250'] = ['Obecný úrad', '', 'Štefánikova', '129', '956 31', 'Krušovce', 'evidencia@krusovce.sk;obec@krusovce.sk'];
  o['00322211'] = ['Obecný úrad', '', '', '141', '086 04', 'Kružlov', 'kruzlov@kruzlov.sk;obeckruzlov@mail.t-com.sk'];
  o['00330655'] = ['Obecný úrad', '', 'Kružlová', '8', '090 02', 'Kružlová', 'adrian.guzo@gmail.com;obeckruzlova@zoznam.sk'];
  o['00594776'] = ['Obecný úrad', '', '', '23', '049 51', 'Brzotín', 'obec.kruzna@kidrv.sk'];
  o['00318884'] = ['Obecný úrad', '', 'Kružno', '38', '979 01', 'Rimavská Sobota 1', 'kruzno.kruzno@gmail.com'];
  o['00307157'] = ['Obecný úrad', '', 'Krškany', '115', '934 01', 'Levice 1', 'obeckrskany@gmail.com'];
  o['00800325'] = ['Obecný úrad', '', 'Kubáňovo', '22', '935 75', 'Ipeľský Sokolec', 'obeckubanovo@mail.t-com.sk'];
  o['00304875'] = ['Obecný úrad', '', 'Kuchyňa', '220', '900 52', 'Kuchyňa', 'kuchyna220@stonline.sk'];
  o['00322229'] = ['Obecný úrad', '', '', '57', '086 12', 'Kurima', 'podatelna@kucin.eu'];
  o['00332500'] = ['Obecný úrad', '', '', '77', '094 21', 'Nižný Hrabovec', 'obeckucin@inmail.sk'];
  o['00322237'] = ['Obecný úrad', '', '', '74', '086 44', 'Kuková', 'obeckukova@stonline.sk'];
  o['00309656'] = ['Obecný úrad', '', 'Kuklov', '203', '908 78', 'Kuklov', 'obeckuklov@stonline.sk'];
  o['00307173'] = ['Obecný úrad', '', 'Kukučínov', '19', '937 01', 'Želiezovce', 'obec.kukucinov@gmail.com'];
  o['00648892'] = ['Obecný úrad', '', 'Kunerad', '60', '013 13', 'Rajecké Teplice', 'oukunerad@rajec.net'];
  o['00320803'] = ['Obecný úrad', '', 'Kunešov', '1', '967 01', 'Kremnica', 'obeckunesov@stonline.sk'];
  o['00328448'] = ['Obecný úrad', '', 'Kunova Teplica', '127', '049 32', 'Kunova Teplica', 'ocukt127@gmail.com'];
  o['00307181'] = ['Obecný úrad', '', 'Kuraľany', '1', '935 64', 'Keť', 'podatelna@kuralany.sk'];
  o['00322245'] = ['Obecný úrad', '', 'Klepár', '1', '086 12', 'Kurima', 'oukurima@stonline.sk'];
  o['00329291'] = ['Obecný úrad', '', '', '56', '054 01', 'Levoča', 'kurimany@obecnyurad.eu'];
  o['00330663'] = ['Obecný úrad', '', '', '12', '090 16', 'Cernina', 'kurimka@kurimka.sk'];
  o['00322253'] = ['Obecný úrad', '', '', '39', '086 04', 'Kružlov', 'obec.kurov@stonline.sk'];
  o['00305537'] = ['Obecný úrad', '', 'Kútniky', '634', '929 01', 'Dunajská Streda', 'ocukutniky@stonline.sk'];
  o['00325392'] = ['Obecný úrad', '', 'Kusín', '130', '072 32', 'Jovsa', 'obeckusin@lekosonline.sk'];
  o['00309672'] = ['Obecný úrad', '', 'Nám. Radlinského', '981', '908 01', 'Kúty', 'obec@kuty.sk'];
  o['00331643'] = ['Obecný úrad', '', 'Hlavná', '286', '076 12', 'Kuzmice', 'obec@kuzmice.eu'];
  o['31196781'] = ['Obecný úrad', '', 'Jacovská', '231', '956 21', 'Jacovce', 'kuzmice@centrum.sk'];
  o['00327310'] = ['Obecný úrad', '', '', '48', '082 41', 'Bajerov', 'obeckvacany@stonline.sk'];
  o['00332518'] = ['Obecný úrad', '', 'Kvakovce', '97', '094 02', 'Slovenská Kajňa', 'obeckvakovce@gmail.com'];
  o['00315346'] = ['Obecný úrad', '', 'Kvačany', '100', '032 24', 'Liptovská Sielnica', 'podatelna@kvacanylm.sk'];
  o['00305545'] = ['Obecný úrad', '', 'Kvetoslavov', '258', '930 41', 'Kvetoslavov', 'moskova@obeckvetoslavov.sk;sojka@obeckvetoslavov.sk;obeckvetoslavov@obeckvetoslavov.sk'];
  o['00692387'] = ['Obecný úrad', '', 'Kvašov', '174', '020 62', 'Horovce', 'obec.kvasov@playmax.sk'];
  o['00649708'] = ['Obecný úrad', '', 'Kyjatice', '3', '980 54', 'Rimavské Brezovo', 'obeckyjatice@gmail.com'];
  o['00329975'] = ['Obecný úrad', '', '', '164', '065 48', 'Šarišské Jastrabie', 'kyjov@centrum.sk'];
  o['00647659'] = ['Obecný úrad', '', 'Kynceľová', '39', '974 01', 'Banská Bystrica', 'kyncelova@kyncelova.sk'];
  o['00324400'] = ['Obecný úrad', '', '', '146', '044 81', 'Kysak', 'kysak@kysak.sk;info@kysak.sk'];
  o['34000658'] = ['Obecný úrad', '', 'Kyselica', '60', '930 30', 'Rohovce', 'hidegheti.pal@mail.t-com.sk;obeckyselica@gmail.com'];
  o['00331651'] = ['Obecný úrad', '', 'Kvetná', '73', '076 02', 'Novosad', 'kysta@kysta.sk'];
  o['00314099'] = ['Mestský úrad', '', 'Námestie Slobody', '94', '024 01', 'Kysucké Nové Mesto', 'informacie@kysuckenovemesto.sk'];
  o['00314081'] = ['Obecný úrad', '', 'Kysucký Lieskovec', '29', '023 34', 'Kysucký Lieskovec', 'obecnyurad@kysuckylieskovec.sk'];
  o['00310638'] = ['Obecný úrad', '', 'Kšinná', '102', '956 43', 'Kšinná', 'obec.ksinna@post.sk'];
  o['00312631'] = ['Obecný úrad', '', 'Kľačany', '211', '920 64', 'Kľačany', 'ouklacany@stonline.sk'];
  o['00648914'] = ['Obecný úrad', '', 'Kľače', '1', '013 19', 'Kľače', 'ocuklace@rajec.net'];
  o['00320722'] = ['Obecný úrad', '', 'Kľak', '9', '966 77', 'Ostrý Grúň', 'obecklak@mail.t-com.sk'];
  o['00318183'] = ['Obecný úrad', '', 'Kľačno', '326', '972 15', 'Kľačno', 'obec@klacno.eu;klacno@prievidzanet.sk'];
  o['00305502'] = ['Obecný úrad', '', 'Kľúčovec', '38', '930 07', 'Medveďov', 'ouklucovec@panelnet.sk'];
  o['00322113'] = ['Obecný úrad', '', '', '175', '086 22', 'Kľušov', 'ocuklusov@gmail.com'];
  o['00304883'] = ['Obecný úrad', '', 'Láb', '503', '900 67', 'Láb', 'starosta@obeclab.sk'];
  o['00649228'] = ['Obecný úrad', '', 'Lackov', '20', '962 44', 'Litava', 'obeclackov@hotmail.sk'];
  o['00329983'] = ['Obecný úrad', '', '', '51', '065 01', 'Hniezdne', 'lackova.obec@azet.sk'];
  o['37791699'] = ['Obecný úrad', '', '', '37', '066 01', 'Humenné', 'obeclackovce@stonline.sk'];
  o['00327336'] = ['Obecný úrad', '', '', '240', '082 12', 'Kapušany', 'obeclada@gmail.com'];
  o['00317428'] = ['Obecný úrad', '', 'Hviezdoslavova', '599', '018 63', 'Ladce', 'starosta@ladce.sk'];
  o['00331660'] = ['Obecný úrad', '', 'Hlavná', '46', '076 34', 'Ladmovce', 'obecladmovce@zoznam.sk'];
  o['00038440'] = ['Obecný úrad', '', 'Hlavná', '219', '951 77', 'Ladice', 'sekretariat@ladice.sk'];
  o['00652199'] = ['Obecný úrad', '', 'Ladomerská Vieska', '132', '965 01', 'Žiar nad Hronom', 'obec@ladomerska-vieska.sk'];
  o['00330671'] = ['Obecný úrad', '', 'Ladomirová', '33', '090 03', 'Ladomirová', 'obecladomirova@stonline.sk'];
  o['00320072'] = ['Obecný úrad', '', 'Ladzany', '109', '962 67', 'Ladzany', 'oculadzany@mail.t-com.sk'];
  o['00309681'] = ['Obecný úrad', '', 'Lakšárska Nová Ves', '90', '908 76', 'Lakšárska Nová Ves', 'laksar@stonline.sk'];
  o['00323195'] = ['Obecný úrad', '', '', '93', '067 71', 'Ladomirov', 'oculad@centrum.sk'];
  o['00322261'] = ['Obecný úrad', '', '', '11', '086 45', 'Marhaň', 'obec.lascov@zoznam.sk'];
  o['00649341'] = ['Obecný úrad', '', 'Laskár', '26', '038 43', 'Kláštor pod Znievom', 'laskar@gaya.sk'];
  o['00325406'] = ['Obecný úrad', '', 'Lastomír', '322', '072 37', 'Lastomír', 'obeclastomir@minet.sk'];
  o['00331678'] = ['Obecný úrad', '', 'Hlavná', '306', '076 14', 'Michaľany pri Trebišove', 'obeclastovce@mail.t-com.sk'];
  o['00316148'] = ['Obecný úrad', '', 'Látky', '36', '985 45', 'Látky', 'obeclatky@latky.sk'];
  o['00318221'] = ['Obecný úrad', '', 'Hlavná', '59/56', '972 11', 'Lazany', 'podatelna@lazany.sk'];
  o['00315354'] = ['Obecný úrad', '', 'Lazisko', '140', '032 11', 'Svätý Kríž', 'oulazisko@alconet.sk'];
  o['00317446'] = ['Obecný úrad', '', 'Lazy pod Makytou', '157', '020 55', 'Lazy pod Makytou', 'info@lazypodmakytou.sk;obeclazypodmakytou@stonline.sk'];
  o['00325414'] = ['Obecný úrad', '', 'Laškovce', '36', '072 01', 'Pozdišovce', 'ocu.laskovce@post.sk'];
  o['00696293'] = ['Obecný úrad', '', '', '92', '059 06', 'Červený Kláštor', 'lechnica@slnet.sk'];
  o['00690481'] = ['Obecný úrad', '', '', '31', '082 32', 'Lažany', 'obec_lazany@inmail.sk'];
  o['00317462'] = ['Obecný úrad', '', 'Námestie slobody', '32', '020 61', 'Lednické Rovne', 'podatelna@lednickerovne.sk'];
  o['00317454'] = ['Obecný úrad', '', 'Lednica', '232', '020 63', 'Lednica', 'obec.lednica@stonline.sk'];
  o['00329991'] = ['Obecný úrad', '', 'Legnava', '77', '065 46', 'Malý Lipník', 'obec.legnava@gmail.com'];
  o['00305553'] = ['Obecný úrad', '', 'Lehnice', '89', '930 37', 'Lehnice', 'lehnice@lehnice.sk'];
  o['00308153'] = ['Obecný úrad', '', 'Lehota', '16', '951 36', 'Lehota', 'obeclehota@lehota.sk'];
  o['00649848'] = ['Obecný úrad', '', 'Lehota nad Rimavicou', '134', '980 53', 'Rimavská Baňa', 'oulehotanr@stonline.sk'];
  o['00318256'] = ['Obecný úrad', '', 'Nám. SNP', '33/1', '972 42', 'Lehota pod Vtáčnikom', 'podatelna@lehotapodvtacnikom.sk'];
  o['00316156'] = ['Obecný úrad', '', 'Lehôtka', '23', '985 11', 'Halič', 'oculehotka@stonline.sk'];
  o['00320811'] = ['Obecný úrad', '', 'Lehôtka pod Brehmi', '22', '966 01', 'Hliník nad Hronom', 'obeclehotka@post.sk'];
  o['00331686'] = ['Obecný úrad', '', '', '62', '076 84', 'Leles', 'leles62@hotmail.com'];
  o['00325422'] = ['Obecný úrad', '', '', '505', '072 54', 'Lekárovce', 'obeclekarovce@lekosonline.sk'];
  o['00327344'] = ['Obecný úrad', '', '', '186', '082 03', 'Lemešany', 'obec@lemesany.sk'];
  o['00322270'] = ['Obecný úrad', '', '', '37', '086 06', 'Malcov', 'obeclenartov@lenartov.sk'];
  o['00318892'] = ['Obecný úrad', '', 'Hlavná', '97', '980 44', 'Lenartovce', 'obec.lenartovce@gemernet.sk'];
  o['00316164'] = ['Obecný úrad', '', 'Lentvora', '61', '985 13', 'Ábelová', 'obeclentvora@centrum.sk'];
  o['00326321'] = ['Obecný úrad', '', 'Kostolná', '14', '059 07', 'Lendak', 'obeclendak@lendak.sk'];
  o['00649601'] = ['Obecný úrad', '', 'Lenka', '11', '980 50', 'Včelince', 'obeclenka@gmail.com'];
  o['00312703'] = ['Mestský úrad', '', 'Hlohovecká cesta', '104/2', '920 41', 'Leopoldov', 'sekretariat@leopoldov.sk'];
  o['00647420'] = ['Obecný úrad', '', 'Lesenice', '221', '991 08', 'Lesenice', 'lesenice@mail.t-com.sk'];
  o['00649759'] = ['Obecný úrad', '', 'Levkuška', '31', '982 62', 'Gemerská Ves', 'obec@obec-levkuska.sk'];
  o['00327352'] = ['Obecný úrad', '', '', '55', '082 07', 'Tuhrina', ''];
  o['00330001'] = ['Obecný úrad', '', '', '26', '065 33', 'Veľký Lipník', 'info@lesnica.sk'];
  o['00325431'] = ['Obecný úrad', '', 'Lesné', '81', '071 01', 'Michalovce', 'obeclesne@gmail.com'];
  o['00309699'] = ['Obecný úrad', '', 'Letničie', '35', '908 44', 'Petrova Ves', 'sekretariat@letnicie.sk'];
  o['00649490'] = ['Obecný úrad', '', 'Leváre', '56', '982 62', 'Gemerská Ves', 'obec.levare@azet.sk'];
  o['00307203'] = ['Mestský úrad', '', 'Nám. hrdinov', '1', '934 32', 'Levice', 'sekretariat.predn@levice.sk'];
  o['00328456'] = ['Obecný úrad', '', 'Licince', '40', '049 14', 'Licince', 'obeclicince@azet.sk'];
  o['00329321'] = ['Mestský úrad', '', 'Námestie Majstra Pavla', '4', '054 01', 'Levoča', 'podatelna@levoca.sk'];
  o['00314609'] = ['Obecný úrad', '', 'Leštiny', '22', '026 01', 'Dolný Kubín', 'obec@lestiny.sk;lestiny.ocu@gmail.com;obec@lestiny.gityposta.sk'];
  o['00647357'] = ['Obecný úrad', '', 'Ležiachov', '70', '038 42', 'Príbovce', 'leziachov@gaya.sk'];
  o['00699268'] = ['Obecný úrad', '', 'Libichava', '7', '956 38', 'Šišov', 'oculibichava@gmail.com'];
  o['00309036'] = ['Obecný úrad', '', 'Leľa', '154', '943 65', 'Kamenica nad Hronom', 'ocu.lela@mail.t-com.sk'];
  o['00327361'] = ['Obecný úrad', '', 'Ličartovce', '239', '082 03', 'Lemešany', 'obec.licartovce@stonline.sk'];
  o['00314617'] = ['Obecný úrad', '', 'Michalská časť', '442', '027 12', 'Liesek', 'martin.drevenak@liesek.eu.sk;obec@liesek.eu.sk'];
  o['00695386'] = ['Obecný úrad', '', '', '50', '053 21', 'Markušovce', 'info@lieskovany.sk;lieskovany@stonline.sk'];
  o['00647861'] = ['Obecný úrad', '', 'Na Barinách', '2699/2', '962 21', 'Lieskovec', 'obeclieskovec@obeclieskovec.sk'];
  o['00323209'] = ['Obecný úrad', '', '', '122', '067 45', 'Topoľovka', 'obeclies@stonline.sk;obexlies@gmail.com'];
  o['00648981'] = ['Obecný úrad', '', 'Cementárenská', '3', '013 11', 'Lietavská Lúčka', 'podatelna@lietavskalucka.sk'];
  o['00321427'] = ['Obecný úrad', '', 'Lietava', '146', '013 18', 'Lietava', 'oulietava@mail.t-com.sk'];
  o['00321443'] = ['Obecný úrad', '', 'Lietavská Svinná - Babkov', '160', '013 11', 'Lietavská Lúčka', 'obeclietsvinnababkov@stonline.sk'];
  o['00650471'] = ['Obecný úrad', '', 'Liešno', '40', '038 22', 'Slovenské Pravno', 'obecny@gaya.sk'];
  o['00318230'] = ['Obecný úrad', '', 'Liešťany', '1', '972 27', 'Liešťany', 'ocu@liestany.sk'];
  o['00315362'] = ['Obecný úrad', '', 'Jánovčíkova', '815', '034 95', 'Likavka', 'obec@likavka.sk'];
  o['00304891'] = ['Obecný úrad', '', 'SNP', '55', '900 91', 'Limbach', 'anna.hrusticova@post.sk;limbach@post.sk'];
  o['00327379'] = ['Mestský úrad', '', 'Krivianska', '1', '082 71', 'Lipany', 'sekretariat@lipany.sk'];
  o['00648833'] = ['Obecný úrad', '', 'Lipník', '36', '972 32', 'Chrenovec - Brusno', 'obec.lipnik@stonline.sk'];
  o['00690490'] = ['Obecný úrad', '', '', '100', '082 12', 'Kapušany', 'obeclipniky@gmail.com;obeclipniky@zoznam.sk'];
  o['00322288'] = ['Obecný úrad', '', '', '30', '086 12', 'Kurima', ''];
  o['00309044'] = ['Obecný úrad', '', 'Lipová', '203', '941 02', 'Lipová pri Nových Zámkoch', 'obecnyurad.lipova@gmail.com'];
  o['00648272'] = ['Obecný úrad', '', 'Lipovany', '46', '985 31', 'Rapovce', 'lipovany@dkn.sk'];
  o['00327387'] = ['Obecný úrad', '', 'Lipovce', '92', '082 36', 'Lipovce', 'peter.mizenko@ou.sk;lipovce@ou.sk'];
  o['00306541'] = ['Obecný úrad', '', 'Lipové', '59', '946 14', 'Zemianska Olča', 'obec@lipove.sk'];
  o['00649937'] = ['Obecný úrad', '', 'Lipovec', '32', '980 23', 'Teplý Vrch', 'starosta@obeclipovec.sk'];
  o['00316776'] = ['Obecný úrad', '', 'Hrabiny', '290', '038 61', 'Vrútky', 'ucty@lipovec.sk;dane@lipovec.sk;obec@lipovec.sk'];
  o['00328464'] = ['Obecný úrad', '', '', '164', '049 42', 'Drnava', 'sekretariat@obeclipovnik.sk'];
  o['00310662'] = ['Obecný úrad', '', 'Lipovník', '113', '956 01', 'Bojná', 'obeclipovnik@wircom.sk'];
  o['00315371'] = ['Obecný úrad', '', 'Liptovská Anna', '20', '032 23', 'Liptovská Sielnica', 'obecliptovskaanna@post.sk;liptovskaanna@citycom.sk'];
  o['00315389'] = ['Obecný úrad', '', 'Stará', '390', '032 44', 'Liptovská Kokava', 'obec.lk@stonline.sk'];
  o['00315397'] = ['Obecný úrad', '', 'Liptovská Lúžna', '629', '034 72', 'Liptovská Lúžna', 'starosta@liptovskaluzna.sk'];
  o['00315401'] = ['Obecný úrad', '', 'Liptovská Osada', '369', '034 73', 'Liptovská Osada', 'l.osada@stonline.sk'];
  o['17061229'] = ['Obecný úrad', '', 'Liptovská Porúbka', '149', '033 01', 'Liptovský Hrádok', 'obec.lporubka@gmail.com'];
  o['00315435'] = ['Obecný úrad', '', 'Liptovská Teplá', '142', '034 83', 'Liptovská Teplá', 'obecliptovskatepla@stonline.sk'];
  o['00326330'] = ['Obecný úrad', '', 'Štefana Garaja', '398/16', '059 4O', 'Liptovská Teplička', 'sekretariat@liptovskateplicka.sk'];
  o['00315419'] = ['Obecný úrad', '', 'Liptovská Sielnica', '75', '032 23', 'Liptovská Sielnica', 'ouls@liptsielnica.sk'];
  o['00315443'] = ['Obecný úrad', '', 'Liptovské Beharovce', '9', '032 21', 'Bobrovec', 'obecncdr@mail.t-com.sk;obec@liptovskebeharovce.sk'];
  o['00315427'] = ['Obecný úrad', '', 'Stará ulica', '39/53', '034 01', 'Ružomberok', 'obec@liptovskastiavnica.sk'];
  o['00315460'] = ['Obecný úrad', '', 'Liptovské Matiašovce', '79', '032 23', 'Liptovská Sielnica', 'lmatiasovce@citycom.sk'];
  o['00315451'] = ['Obecný úrad', '', 'Liptovské Kľačany', '72', '032 14', 'Ľubeľa', 'liptovske.klacany@zoznam.sk'];
  o['00315745'] = ['Obecný úrad', '', 'Liptovské Sliače', '635/2', '034 84', 'Liptovské Sliače', 'urad@liptovskesliace.sk'];
  o['00315494'] = ['Mestský úrad', '', 'Hviezdoslavova', '170', '033 01', 'Liptovský Hrádok', 'sekretariat@lhr.sk'];
  o['00315478'] = ['Obecný úrad', '', 'Stredná', '386', '034 74', 'Liptovské Revúce', 'obec@liptovskerevuce.sk'];
  o['00315524'] = ['Mestský úrad', '', 'Štúrova', '1989/41', '031 42', 'Liptovský Mikuláš', 'sekretariat@mikulas.sk'];
  o['00315486'] = ['Obecný úrad', '', 'Jána Kalinčiaka', '39', '032 03', 'Liptovský Ján', 'ic@liptovskyjan.sk'];
  o['00315541'] = ['Obecný úrad', '', 'Liptovský Trnovec', '160', '031 01', 'Liptovský Trnovec', 'trnovec@alconet.sk'];
  o['00315516'] = ['Obecný úrad', '', 'Liptovský Michal', '17', '034 83', 'Liptovská Teplá', 'obecliptovskymichal@gmail.com;'];
  o['00315532'] = ['Obecný úrad', '', 'Liptovský Ondrej', '84', '032 04', 'Liptovský Ondrej', 'obeclondrej@imafex.sk'];
  o['00620581'] = ['Obecný úrad', '', 'Liptovský Peter', '100', '033 01', 'Liptovský Hrádok', 'liptovsky.peter@mag-net.sk'];
  o['00330019'] = ['Obecný úrad', '', '', '79', '065 31', 'Jarabina', 'obeclitmanova@litmanova.sk'];
  o['00315559'] = ['Obecný úrad', '', 'Ulica pod Chočom', '113', '034 81', 'Lisková', 'ouliskova@stonline.sk'];
  o['00320102'] = ['Obecný úrad', '', 'Litava', '5', '962 44', 'Litava', 'obec.litava@pobox.sk'];
  o['00699276'] = ['Obecný úrad', '', 'Livina', '42', '956 32', 'Nadlice', 'oculivina@szm.sk'];
  o['00320099'] = ['Obecný úrad', '', 'Lišov', '42', '962 71', 'Dudince', 'lisov@lisov.sk'];
  o['00699284'] = ['Obecný úrad', '', 'Livinské Opatovce', '86', '956 32', 'Nadlice', 'obecliv.opatovce@stonline.sk'];
  o['00322300'] = ['Obecný úrad', '', '', '33', '086 05', 'Lukov', ''];
  o['00322296'] = ['Obecný úrad', '', '', '30', '086 05', 'Lukov', 'obeclivov@gmail.com'];
  o['00314102'] = ['Obecný úrad', '', 'Lodno', '228', '023 34', 'Kysucký Lieskovec', 'dane@obec-lodno.sk;uctaren@obec-lodno.sk;zastupcastarostky@obec-lodno.sk'];
  o['00307211'] = ['Obecný úrad', '', 'Poštová', '23', '935 38', 'Lok', 'obec.lok@nextra.sk'];
  o['00314625'] = ['Obecný úrad', '', 'Lokca', '3', '029 51', 'Lokca', 'oculokca@stonline.sk'];
  o['00313556'] = ['Obecný úrad', '', 'Lom nad Rimavicou', '13', '976 53', 'Lom nad Rimavicou', 'lom.nad.rimavicou.obec@zoznam.sk'];
  o['00309702'] = ['Obecný úrad', '', 'Lopašov', '80', '908 63', 'Radošovce', 'obeclopasov@stonline.sk'];
  o['00314633'] = ['Obecný úrad', '', 'Lomná', '22', '029 54', 'Krušetnica', 'obeclomna@orava.sk'];
  o['00330680'] = ['Obecný úrad', '', '', '81', '090 33', 'Turany nad Ondavou', 'obeclomne@stonline.sk'];
  o['00330027'] = ['Obecný úrad', '', '', '66', '065 03', 'Podolínec', 'oulomnicka@mail.t-com.sk'];
  o['00587541'] = ['Obecný úrad', '', 'Lontov', '67', '935 75', 'Ipeľský Sokolec', 'obeclontov@slovanet.sk'];
  o['00322318'] = ['Obecný úrad', '', '', '85', '086 41', 'Raslavice', 'lopuchov@stonline.sk'];
  o['00308161'] = ['Obecný úrad', '', 'Lovce', '222', '951 92', 'Lovce', 'lovce.obecnyurad@gmail.com'];
  o['00314111'] = ['Obecný úrad', '', 'Lopušné Pažite', '102', '023 36', 'Radoľa', 'obeclopusnepazite@mail.t-com.sk'];
  o['00320820'] = ['Obecný úrad', '', 'Geromettova', '95', '966 21', 'Lovča', 'lovca@lovca.sk'];
  o['00320838'] = ['Obecný úrad', '', 'Lovčica - Trubín', '116', '966 23', 'Lovčica-Trubín', 'obecnyuradlt@stonline.sk'];
  o['00304905'] = ['Obecný úrad', '', 'Hlavná', '1', '900 55', 'Lozorno', 'obec@lozorno.sk'];
  o['00316172'] = ['Obecný úrad', '', 'SNP', '356/1', '985 54', 'Lovinobaňa', 'podatelna@lovinobana.sk'];
  o['00682292'] = ['Obecný úrad', '', 'Hlavná', '62', '919 04', 'Smolenice', 'losonec@gmail.com'];
  o['00311731'] = ['Obecný úrad', '', 'Lubina', '56', '916 12', 'Lubina', 'sekretariat@obeclubina.sk'];
  o['00325449'] = ['Obecný úrad', '', 'Ložín', '31', '072 05', 'Bracovce', 'obeclozin@stonline.sk'];
  o['00328472'] = ['Obecný úrad', '', 'Lubeník', '222', '049 18', 'Lubeník', 'bajusova@revnet.sk;kubejova@revnet.sk;kankulova@revnet.sk;kisel@revnet.sk;obeclubenik@revnet.sk'];
  o['00310689'] = ['Obecný úrad', '', 'SNP', '448/69', '956 11', 'Ludanice', 'obecludanice@obecludanice.sk'];
  o['00315591'] = ['Obecný úrad', '', 'Ludrová', '239', '034 71', 'Ludrová', 'ludrova@ludrova.sk'];
  o['00305561'] = ['Obecný úrad', '', 'Veľká Lúč', '20', '930 03', 'Kráľovičove Kračany', 'sekretariat@lucnaostrove.sk'];
  o['00327409'] = ['Obecný úrad', '', '', '8', '082 07', 'Tuhrina', 'starosta@lucina.sk'];
  o['00313572'] = ['Obecný úrad', '', 'Lučatín', '40', '976 61', 'Lučatín', 'obeclucatin@stonline.sk'];
  o['00326356'] = ['Obecný úrad', '', '', '208', '059 31', 'Lučivná', 'oculucivna@sinet.sk'];
  o['00316181'] = ['Mestský úrad', '', 'Novohradská', '1', '984 01', 'Lučenec', 'podatelna@lucenec.sk'];
  o['00328481'] = ['Obecný úrad', '', '', '39', '049 42', 'Drnava', 'obeclucka@gmail.com'];
  o['00327417'] = ['Obecný úrad', '', '', '77', '082 71', 'Lipany', 'obec@obeclucka.sk'];
  o['17080371'] = ['Obecný úrad', '', '', '32', '053 03', 'Jablonov pri Levoči', 'obeclucka@centrum.sk'];
  o['30230381'] = ['Obecný úrad', '', 'Lúčky', '18', '967 01', 'Kremnica', 'obec.lucky@stonline.sk'];
  o['00595764'] = ['Obecný úrad', '', '', '59', '087 01', 'Giraltovce', 'topl.lucka@stonline.sk'];
  o['00325457'] = ['Obecný úrad', '', 'Lúčky', '114', '072 34', 'Zalužice', 'oculucky@pobox.sk'];
  o['00315583'] = ['Obecný úrad', '', 'Lúčky', '141', '034 82', 'Lúčky', 'obeclucky@stonline.sk'];
  o['00308170'] = ['Obecný úrad', '', 'Lúčnica nad Žitavou', '230', '951 88', 'Lúčnica nad Žitavou', 'obeclucnica@zoznam.sk'];
  o['00331694'] = ['Obecný úrad', '', 'Hlavná', '40', '076 14', 'Michaľany', 'obecluhyna@orangemail.sk;obecluhyna@zoznam.sk'];
  o['00311758'] = ['Obecný úrad', '', 'Lúka', '205', '916 33', 'Hrádok', 'obecluka@stonline.sk'];
  o['00322334'] = ['Obecný úrad', '', '', '63', '086 21', 'Lukavica', 'oulukavica@proxisnet.sk'];
  o['00308188'] = ['Obecný úrad', '', 'Na Tŕnie', '2', '951 23', 'Lukáčovce', 'obecnyurad@lukacovce.sk'];
  o['00323217'] = ['Obecný úrad', '', '', '101', '067 24', 'Lukačovce pri Humennom', 'lukacovce@zoznam.sk'];
  o['00648418'] = ['Obecný úrad', '', 'Lipová', '1', '962 31', 'Sliač', 'lukavica@zoznam.sk'];
  o['00322342'] = ['Obecný úrad', '', '', '60', '086 05', 'Lukov', 'jkramarova@atlas.sk;obeclukov@gmail.com'];
  o['00318906'] = ['Obecný úrad', '', 'Lukovištia', '26', '980 26', 'Lukovištia', 'lukovistia@lukovistia.sk'];
  o['00317489'] = ['Obecný úrad', '', 'Lúky', '105', '020 53', 'Lúky', 'podatelna@obecluky.sk'];
  o['00587559'] = ['Obecný úrad', '', 'Lula', '55', '935 35', 'Tehla', 'obeclula@stonline.sk'];
  o['00310701'] = ['Obecný úrad', '', 'Lužany', '33', '956 07', 'Veľké Ripňany', 'obec.luzany@mail.t-com.sk'];
  o['00652113'] = ['Obecný úrad', '', 'Štefánikova', '48/84', '966 22', 'Lutila', 'lutila@lutila.sk'];
  o['00316199'] = ['Obecný úrad', '', 'Lupoč', '102', '985 11', 'Halič', 'obeclupoc@gmail.com'];
  o['00321451'] = ['Obecný úrad', '', 'Lutiše', '66', '013 05', 'Belá', 'obeclutise@lutise.sk'];
  o['00322351'] = ['Obecný úrad', '', '', '26', '087 01', 'Giraltovce', 'obecluzanypritopli@gmail.com'];
  o['34003517'] = ['Obecný úrad', '', 'Rastislavova', '266', '951 41', 'Lužianky', 'obecluzianky@stonline.sk'];
  o['00317471'] = ['Obecný úrad', '', 'Centrum', '1', '020 54', 'Lysá pod Makytou', 'obec@lysapodmakytou.sk'];
  o['00321460'] = ['Obecný úrad', '', 'Lysica', '138', '013 05', 'Belá', 'obeclysica@stonline.sk'];
  o['00308234'] = ['Obecný úrad', '', 'Hlavná', '115', '951 93', 'Topoľčianky', 'machulince@mail.t-com.sk'];
  o['00800171'] = ['Obecný úrad', '', 'Macov', '42', '930 32', 'Blatná na Ostrove', 'ocumacov@mail.t-com.sk'];
  o['00312738'] = ['Obecný úrad', '', 'P. O. Hviezdoslava', '8/368', '922 42', 'Madunice', 'madunice@madunice.sk'];
  o['00800201'] = ['Obecný úrad', '', 'Mad', '200', '930 14', 'Dolný Bar', 'obecnyuradmad@mail.t-com.sk'];
  o['00328511'] = ['Obecný úrad', '', 'Magnezitovce', '59', '049 16', 'Jelšava', 'obec.magnezitovce@gmail.com'];
  o['00332526'] = ['Obecný úrad', '', '', '2', '094 09', 'Sedliská', 'obecmajerovce@centrum.sk'];
  o['00312746'] = ['Obecný úrad', '', 'Majcichov', '606', '919 22', 'Majcichov', 'obec.majcichov@gmail.com'];
  o['00696030'] = ['Obecný úrad', '', '', '24', '061 01', 'Spišská Stará Ves', 'velicka@pltnictvo.sk;obecmajere@slnet.sk'];
  o['00330698'] = ['Obecný úrad', '', 'Makovce', '13', '090 23', 'Havaj', 'obecmakovce@centrum.sk'];
  o['00314129'] = ['Obecný úrad', '', 'Makov', '60', '023 56', 'Makov', 'makov@makov.sk'];
  o['00332534'] = ['Obecný úrad', '', '', '106', '094 02', 'Slovenská Kajňa', 'jaro.makatura@gmail.com;mdomasa@gmail.com'];
  o['00647403'] = ['Obecný úrad', '', 'Malá Čalomija', '46', '991 08', 'Lesenice', 'm.hlacok@mail.t-com.sk'];
  o['00318272'] = ['Obecný úrad', '', 'Malá Čausa', '175', '971 01', 'Prievidza', 'info@malacausa.sk'];
  o['00632716'] = ['Obecný úrad', '', 'Malá Čierna', '55', '015 01', 'Rajec', 'malaciernaobec@azet.sk'];
  o['00696277'] = ['Obecný úrad', '', '', '35', '059 78', 'Veľká Franková', 'oumf@pobox.sk'];
  o['00310719'] = ['Obecný úrad', '', 'Malá Hradná', '150', '956 54', 'Veľké Držkovce', 'obecmhradna@centrum.sk'];
  o['00324426'] = ['Obecný úrad', '', 'Hlavná', '11', '044 20', 'Malá Ida', 'obecmalaida@stonline.sk'];
  o['00324434'] = ['Obecný úrad', '', '', '98', '044 81', 'Kysak', 'malalodina@post.sk'];
  o['00320862'] = ['Obecný úrad', '', 'Malá Lehota', '383', '966 42', 'Malá Lehota', 'obecmalalehota@nbsiet.sk'];
  o['37842358'] = ['Obecný úrad', '', 'Hlavná ulica', '127/46', '925 21', 'Sládkovičovo', 'obecmalamaca@mail.t-com.sk'];
  o['00330701'] = ['Obecný úrad', '', '', '72', '090 24', 'Miková', 'obecmalapolana@gmail.com'];
  o['00309079'] = ['Obecný úrad', '', 'Malá nad Hronom', '2', '943 65', 'Kamenica nad Hronom', 'oumala@mail.viapvt.sk'];
  o['00689726'] = ['Obecný úrad', '', 'Tokajská', '113', '076 82', 'Veľká Tŕňa', 'malatrna@gmail.com;obecmalatrna@mail.t-com.sk'];
  o['00620891'] = ['Obecný úrad', '', 'Ortútska cesta', '145', '974 05', 'Banská Bystrica', 'ou@malachov.sk'];
  o['00314641'] = ['Obecný úrad', '', 'Malatiná', '148', '027 01', 'Vyšný Kubín', 'obecny.urad@malatina.sk'];
  o['00304913'] = ['Mestský úrad', '', 'Radlinského', '2751/1', '901 01', 'Malacky', 'msu@malacky.sk'];
  o['00315605'] = ['Obecný úrad', '', 'Malatíny', '9', '032 15', 'Partizánska Ľupča', 'obec.malatiny@gmail.com'];
  o['00307246'] = ['Obecný úrad', '', 'Málaš', '14', '935 67', 'Málaš', 'oumalas@stonline.sk'];
  o['00322369'] = ['Obecný úrad', '', 'Hlavná', '130', '086 06', 'Malcov', 'obecmalcov@mail.t-com.sk'];
  o['00315613'] = ['Obecný úrad', '', 'Malé Borové', '34', '027 46', 'Zuberec', 'obecmaleborove@stonline.sk'];
  o['00399434'] = ['Obecný úrad', '', 'Malé Chyndice', '41', '951 54', 'Malé Chyndice', 'ocumalechyndice@gmail.com'];
  o['00310751'] = ['Obecný úrad', '', 'Malé Hoste', '191', '956 37', 'Zlatníky', 'obec.malehoste@gmail.com'];
  o['00800210'] = ['Obecný úrad', '', 'Dunajskostredská ul.', '153', '929 01', 'Malé Dvorníky', 'obecmaledvorniky@post.sk'];
  o['00309087'] = ['Obecný úrad', '', 'Malé Kosihy', '3', '943 61', 'Salka', 'obecmkosihy@mail.t-com.sk;obecmkosihy@stonline.sk;malekosihy@poiplie.sk'];
  o['34076751'] = ['Obecný úrad', '', 'Malé Kozmálovce', '1', '935 21', 'Tlmače 1', 'ocu.malekozmalovce@mail.t-com.sk'];
  o['00310735'] = ['Obecný úrad', '', 'Malé Kršteňany', '105', '958 03', 'Malé Kršteňany', 'malekrstenany@gmail.com'];
  o['00692395'] = ['Obecný úrad', '', 'Malé Lednice', '101', '018 16', 'Domaniža', 'male.lednice@mail.t-com.sk'];
  o['00309711'] = ['Obecný úrad', '', 'Malé Leváre', '177', '908 74', 'Malé Leváre', 'obecmalelevare@gmail.com'];
  o['00587567'] = ['Obecný úrad', '', 'Malé Ludince', '82', '937 01', 'Želiezovce', 'maleludince@gmail.com'];
  o['00331708'] = ['Obecný úrad', '', 'Hlavná', '108', '078 01', 'Sečovce', 'podatelna@maleozorovce.sk'];
  o['00325473'] = ['Obecný úrad', '', 'Malé Raškovce', '58', '072 17', 'Zemplínske Kopčany', 'obecmaleraskovce@centrum.sk'];
  o['00310743'] = ['Obecný úrad', '', 'Malé Ripňany', '87', '956 07', 'Veľké Ripňany', 'mripnany@gmail.com'];
  o['17061750'] = ['Obecný úrad', '', 'Malé Straciny', '86', '990 01', 'Veľký Krtíš', 'tatianakassayova@gmail.com'];
  o['00331716'] = ['Obecný úrad', '', '', '325', '076 42', 'Veľké Trakany', 'obec.maletrakany@post.sk'];
  o['34006737'] = ['Obecný úrad', '', 'Uherecká', '110/96', '958 03', 'Malé Uherce', 'ocu.maleuherce@slovanet.sk'];
  o['00399426'] = ['Obecný úrad', '', 'Malé Vozokany', '46', '951 82', 'Malé Vozokany', 'ou-malevozokany@slovanet.sk'];
  o['00656160'] = ['Obecný úrad', '', 'Malé Zálužie', '63', '951 24', 'Nové Sady', 'oumalezaluzie@gmail.com'];
  o['00647870'] = ['Obecný úrad', '', 'Malé Zlievce', '75', '991 22', 'Bušince', 'obecmzl@post.sk;obecmalezlievce@gmail.com'];
  o['00325465'] = ['Obecný úrad', '', 'Hlavná', '176', '072 06', 'Malčice', 'oumalcice@minet.sk'];
  o['00316211'] = ['Obecný úrad', '', 'Málinec', '474', '985 26', 'Málinec', 'malinec@stonline.sk'];
  o['00318281'] = ['Obecný úrad', '', 'Malinová', '115', '972 13', 'Nitrianské Pravno', 'podatelna@malinova.sk'];
  o['00304921'] = ['Obecný úrad', '', 'L. Svobodu', '17', '900 45', 'Malinovo', 'sekretariat@malinovo.sk'];
  o['00315621'] = ['Obecný úrad', '', 'Malužiná', '53', '032 34', 'Malužiná', 'obecmaluzina@stonline.sk'];
  o['00611166'] = ['Obecný úrad', '', 'Malý Cetín', '105', '951 07', 'Čechynce', 'obecmalycetin@gmail.com'];
  o['00331724'] = ['Obecný úrad', '', 'Družstevná', '233', '076 52', 'Veľký Horeš', 'malyhores@dornet.sk'];
  o['00316784'] = ['Obecný úrad', '', 'Malý Čepčín', '14', '038 45', 'Malý Čepčín', 'omc@gaya.sk'];
  o['00331732'] = ['Obecný úrad', '', '', '147', '076 36', 'Veľký Kamenec', 'obec.m.kamenec@stonline.sk'];
  o['00611174'] = ['Obecný úrad', '', 'Malý Lapáš', '87', '951 04', 'Veľký Lapáš', 'obecnyurad@malylapas.sk'];
  o['17061733'] = ['Obecný úrad', '', 'Družstevná', '2', '990 01', 'Veľký Krtíš', 'malykrtis@stonline.sk'];
  o['00330043'] = ['Obecný úrad', '', '', '64', '065 46', 'Malý Lipník', 'obecmalylipnik@livenet.sk'];
  o['31984673'] = ['Obecný úrad', '', 'Gerlachovská', '52', '060 01', 'Kežmarok', 'obec.malyslavkov@hgzone.sk'];
  o['00327433'] = ['Obecný úrad', '', '', '48', '082 67', 'Terňa', 'obecmalyslivnik@juko.sk'];
  o['00327441'] = ['Obecný úrad', '', '', '104', '080 01', 'Prešov', 'obecmalysaris@mail.t-com.sk;malysaris@stonline.sk'];
  o['00312762'] = ['Obecný úrad', '', 'Malženice', '294', '919 29', 'Malženice', 'obec@malzenice.sk'];
  o['00309061'] = ['Obecný úrad', '', 'M. R. Štefánika', '1', '941 45', 'Maňa', 'matrika@obecmana.sk'];
  o['00308242'] = ['Obecný úrad', '', 'Mankovce', '101', '951 91', 'Hosťovce', 'mankovce@gmail.com;mankovce@centrum.sk'];
  o['00325481'] = ['Obecný úrad', '', 'Markovce', '63', '072 06', 'Malčice', 'ocumarkovce@minet.sk'];
  o['00322377'] = ['Obecný úrad', '', '', '36', '086 45', 'Marhaň', 'obecmarhan@azet.sk'];
  o['00306550'] = ['Obecný úrad', '', 'Nám. Slobody', '1199', '946 32', 'Marcelová', 'obec.marcelova@marcelova.sk'];
  o['00304930'] = ['Obecný úrad', '', 'Školská ulica', '32', '900 33', 'Marianka', 'obec@marianka.sk'];
  o['00329347'] = ['Obecný úrad', '', 'Obchodná', '7', '055 01', 'Margecany', 'margecany@stonline.sk'];
  o['00308471'] = ['Obecný úrad', '', 'Martin nad Žitavou', '130', '953 01', 'Zlaté Moravce', 'ocu@martinnadzitavou.sk'];
  o['00328499'] = ['Obecný úrad', '', '', '18', '049 34', 'Markuška', 'obec.markuska@centrum.sk'];
  o['00329355'] = ['Obecný úrad', '', 'Michalská', '51', '053 21', 'Markušovce', 'obec@markusovce.sk;obecmarkusovce@markusovce.sk'];
  o['00316792'] = ['Mestský úrad', '', 'Vajanského námestie', '1', '036 01', 'Martin', 'msu@martin.sk'];
  o['00315630'] = ['Obecný úrad', '', 'Martinček', '83', '034 95', 'Likavka', 'ou@martincek.sk'];
  o['00306568'] = ['Obecný úrad', '', 'Martovce', '14', '947 01', 'Hurbanovo 1', 'ocu@martovce.sk'];
  o['00318914'] = ['Obecný úrad', '', 'Martinová', '3', '980 41', 'Dubovec', 'ocu.martinova@gmail.com'];
  o['00648213'] = ['Obecný úrad', '', 'Maršova - Rašov', '2', '013 51', 'Predmier', 'obec.marsova.rasov@stonline.sk'];
  o['00332542'] = ['Obecný úrad', '', 'Matiaška', '56', '094 31', 'Hanušovce nad Topľou', 'oumatiaska@gmail.com'];
  o['00329363'] = ['Obecný úrad', '', '', '97', '053 21', 'Markušovce', 'matejovcenh@levonetmail.sk'];
  o['00326399'] = ['Obecný úrad', '', '', '74/43', '059 05', 'Matiašovce', 'matiasovce@compnet.sk'];
  o['00330710'] = ['Obecný úrad', '', '', '38', '090 42', 'Okrúhle', 'matovce@post.sk'];
  o['00800287'] = ['Obecný úrad', '', 'Matúškovo', '138', '925 01', 'Matúškovo', 'obecmatuskovo@stonline.sk'];
  o['00330051'] = ['Obecný úrad', '', 'Matysová', '27', '065 46', 'Malý Lipník', 'matysova@matysova.sk'];
  o['00690121'] = ['Obecný úrad', '', '', '2', '067 32', 'Vyšný Hrušov', 'maskovce@centrum.sk'];
  o['00316229'] = ['Obecný úrad', '', 'Mašková', '76', '985 11', 'Halič', 'obec.maskova@gmail.com'];
  o['00331741'] = ['Obecný úrad', '', 'Maťovské Vojkovce', '155', '079 01', 'Veľké Kapušany', 'obecmatovskevojkove@stonline.sk'];
  o['00305588'] = ['Obecný úrad', '', 'Medveďov', '90', '930 07', 'Medveďov', 'judit@medvedov.sk;ibolya@medvedov.sk;info@medvedov.sk'];
  o['00648990'] = ['Obecný úrad', '', 'Medovarce', '59', '962 65', 'Hontianske Nemce', 'olgasvarcova@zoznam.sk;obecmedovarce@gmail.com'];
  o['00330728'] = ['Obecný úrad', '', '', '', '090 05', 'Krajná Poľana', 'dalnik@centrum.sk'];
  o['17149002'] = ['Obecný úrad', '', 'Medzany', '152', '082 21', 'Veľký Šariš', 'medzany@obecmedzany.sk'];
  o['00324442'] = ['Mestský úrad', '', 'Štóska', '6', '044 25', 'Medzev', 'mesto@medzev.sk'];
  o['00332551'] = ['Obecný úrad', '', '', '86', '094 31', 'Hanušovce nad Topľou', 'obecmedzianky@gmail.com'];
  o['00313581'] = ['Obecný úrad', '', 'Nám. hrdinov SNP', '1', '976 96', 'Medzibrod', 'oumedzibrod@stonline.sk'];
  o['00314650'] = ['Obecný úrad', '', 'Medzibrodie nad Oravou', '122', '026 01', 'Dolný Kubín', 'janota.medzibrodie@gmail.com'];
  o['00323233'] = ['Mestský úrad', '', 'Mierová', '326/4', '068 01', 'Medzilaborce', 'info@medzilaborce-urad.sk;medzilaborce@stonline.sk'];
  o['00311766'] = ['Obecný úrad', '', 'Melčice-Lieskové', '119', '913 05', 'Melčice-Lieskové', 'obec@melcice-lieskove.sk'];
  o['00328502'] = ['Obecný úrad', '', '', '100', '049 12', 'Gemerská Hôrka', 'obec@meliata.sk'];
  o['00308251'] = ['Obecný úrad', '', 'Melek', '250', '952 01', 'Vráble', 'dusanbako@pobox.sk'];
  o['00326402'] = ['Obecný úrad', '', '', '123', '059 36', 'Mengusovce', 'mengusovce@stonline.sk'];
  o['00312771'] = ['Obecný úrad', '', 'Merašice', '183', '920 61', 'Dolné Trhovište', 'oumerasice@wircom.sk'];
  o['00332569'] = ['Obecný úrad', '', '', '164', '094 23', 'Merník', 'ocu.mernik@watel.sk'];
  o['00317519'] = ['Obecný úrad', '', 'Mestečko', '118', '020 52', 'Mestečko', 'obecmestecko@obecmestecko.sk'];
  o['00330736'] = ['Obecný úrad', '', '', '6', '090 41', 'Mestisko', 'mestisko@vl.sk'];
  o['00323241'] = ['Obecný úrad', '', '', '56', '067 73', 'Ubľa', 'ou.michajlov@lekosonline.sk'];
  o['00305600'] = ['Obecný úrad', '', 'Michal na Ostrove', '132', '930 35', 'Michal na Ostrove', 'ocumichal@mail.t-com.sk'];
  o['00309095'] = ['Obecný úrad', '', 'Michal nad Žitavou', '160', '941 61', 'Michal nad Žitavou', 'ou.michal@gmail.com'];
  o['00332577'] = ['Obecný úrad', '', '', '62', '094 23', 'Michalok', 'obecmichalok@orangemail.sk'];
  o['00649163'] = ['Obecný úrad', '', 'Michalková', '7', '962 61', 'Dobrá Niva', 'obecmichalkova@zoznam.sk'];
  o['00325490'] = ['Mestský úrad', '', 'Námestie Osloboditeľov', '30', '071 01', 'Michalovce', 'msumi@msumi.sk'];
  o['00322385'] = ['Obecný úrad', '', '', '36', '087 01', 'Giraltovce', 'obecmicakovce@gmail.com'];
  o['00313599'] = ['Obecný úrad', '', 'Trosky', '1', '976 57', 'Michalová', 'oumichalova@stonline.sk'];
  o['00331759'] = ['Obecný úrad', '', 'Hlavná', '108', '076 14', 'Michaľany', 'obecmichalany@stonline.sk'];
  o['00305596'] = ['Obecný úrad', '', 'Mierovo', '59', '930 41', 'Kvetoslavov', 'mierovo@zmail.sk'];
  o['00310760'] = ['Obecný úrad', '', 'Miezgovce', '64', '957 01', 'Bánovce nad Bebravou', 'obecmiezgovce@stonline.sk'];
  o['00330744'] = ['Obecný úrad', '', 'Miková', '126', '090 24', 'Miková', 'obecmikova@gmail.com'];
  o['00327468'] = ['Obecný úrad', '', '', '61', '082 44', 'Klenov', 'obecmiklusovce@mail.t-com.sk'];
  o['00322393'] = ['Obecný úrad', '', '', '50', '086 36', 'Nižná polianka', 'obecmikulasova@gmail.com'];
  o['17067944'] = ['Obecný úrad', '', 'Mikušovce', '14', '984 01', 'Lučenec', 'mikusovce@centrum.sk'];
  o['31947034'] = ['Obecný úrad', '', '', '6', '044 58', 'Seňa', 'obec.milhost@stonline.sk'];
  o['00317527'] = ['Obecný úrad', '', 'Mikušovce', '22', '018 57', 'Mikušovce', 'obecnyurad@mikusovce.sk'];
  o['00327476'] = ['Obecný úrad', '', '', '140', '082 71', 'Lipany', 'obec@milpos.sk;milpos@milpos.sk'];
  o['00304948'] = ['Obecný úrad', '', 'Alžbetin Dvor', '181', '900 42', 'Miloslavov', 'podatelna@miloslavov.sk'];
  o['00330752'] = ['Obecný úrad', '', '', '61', '090 32', 'Miňovce', 'ou.minovce@centrum.sk'];
  o['00327484'] = ['Obecný úrad', '', '', '65', '082 06', 'Žehňa', 'ocu@obecmirkovce.sk'];
  o['00330761'] = ['Obecný úrad', '', '', '', '090 05', 'Krajná Poľana', ''];
  o['00316237'] = ['Obecný úrad', '', 'Mládzovo', '60', '985 02', 'Breznička', 'obecmladzovo@mail.t-com.sk'];
  o['00326411'] = ['Obecný úrad', '', '', '99', '059 76', 'Mlynčeky', 'mlynceky@mlynceky.sk'];
  o['00330787'] = ['Obecný úrad', '', '', '102', '090 16', 'Cernina', 'kidala.peter@post.sk;obecmlynarovce@gmail.com'];
  o['00326429'] = ['Obecný úrad', '', '', '75', '059 91', 'Velký Slavkov', 'mlynica@popnet.sk'];
  o['00311774'] = ['Obecný úrad', '', 'Mníchova Lehota', '90', '913 21', 'Trenčianska Turná', 'mnichovalehota@stonline.sk'];
  o['00329371'] = ['Obecný úrad', '', '', '324', '053 76', 'Mlynky', 'obecmlynky@fz.sk'];
  o['00329380'] = ['Obecný úrad', '', '', '292', '055 64', 'Mnišek nad Hnilcom', 'obec@mnisek.sk'];
  o['00330060'] = ['Obecný úrad', '', '', '126', '065 22', 'Mníšek nad Popradom', 'obecmnp@stonline.sk'];
  o['00304956'] = ['Mestský úrad', '', 'Dukelská', '38', '900 01', 'Modra', 'primator@modra.sk'];
  o['00311782'] = ['Obecný úrad', '', 'Modrová', '187', '916 35', 'Modrová', 'modrova@modrova.eu.sk'];
  o['00323250'] = ['Obecný úrad', '', '', '111', '067 82', 'Dlhé nad Cirochou', 'info@modranadcirochou.sk;modranc@stonline.sk'];
  o['00306584'] = ['Obecný úrad', '', 'Hlavná', '337', '946 33', 'Modrany', 'obecmodrany@inmail.sk'];
  o['00687243'] = ['Obecný úrad', '', 'Modrovka', '35', '916 35', 'Modrová', 'obec@modrovka.sk'];
  o['00319457'] = ['Mestský úrad', '', 'Marianské námestie', '1', '992 01', 'Modrý Kameň', 'sekretariat@modrykamen.sk'];
  o['00320871'] = ['Obecný úrad', '', 'Močiar', '97', '969 82', 'Podhorie', 'obecmociar@gmail.com'];
  o['00306576'] = ['Obecný úrad', '', 'Moča', '168', '946 37', 'Moča', 'moca@slovanet.sk'];
  o['00308439'] = ['Obecný úrad', '', 'Sv. Gorazda', '626/82', '951 31', 'Močenok', 'sekretariat@mocenok.sk'];
  o['00308269'] = ['Obecný úrad', '', 'Nám. sv. Ladislava', '931/7', '951 15', 'Mojmírovce', 'kultura@mojmirovce.sk'];
  o['00309117'] = ['Obecný úrad', '', 'Mojzesovo', '494', '941 04', 'Mojzesovo', 'starosta.mojzesovo@gmail.com'];
  o['00317543'] = ['Obecný úrad', '', 'Mojtín', '242', '020 72', 'Mojtín', 'podatelna@obecmojtin.sk'];
  o['00321494'] = ['Obecný úrad', '', 'Mojš', '147', '010 01', 'Žilina', 'ocumojs@mail.t-com.sk'];
  o['31949347'] = ['Obecný úrad', '', 'Mokrá lúka', '2', '050 01', 'Revúca', 'obmokraluka@stonline.sk'];
  o['00322407'] = ['Obecný úrad', '', '', '135', '086 01', 'Rokytov', 'obec@mokroluh.sk'];
  o['00309729'] = ['Obecný úrad', '', 'Mokrý Háj', '6', '908 65', 'Mokrý Háj', 'ocu.mokry.haj@stonline.sk'];
  o['00690295'] = ['Obecný úrad', '', '', '38', '044 58', 'Moldava nad Bodvou', 'obecmokrance@stonline.sk'];
  o['00324451'] = ['Mestský úrad', '', 'Školská', '2', '045 01', 'Moldava nad Bodvou', 'borovsky.slavomir@moldava.sk;msu@moldava.sk'];
  o['00313611'] = ['Obecný úrad', '', 'Prostredná Môlča', '61', '974 01', 'Môlča', 'molca@molca.sk'];
  o['00325503'] = ['Obecný úrad', '', 'Moravany', '98', '072 03', 'Rakovec nad Ondavou', 'moravany@obecmoravany.sk'];
  o['00312789'] = ['Obecný úrad', '', 'Kostolecká', '175/4', '922 21', 'Moravany nad Váhom', 'moravany@moravany.sk'];
  o['00311791'] = ['Obecný úrad', '', 'Moravské Lieskové', '657', '916 42', 'Moravské Lieskové', 'ocuml@stonline.sk'];
  o['00309737'] = ['Obecný úrad', '', 'Moravský Svätý Ján', '803', '908 71', 'Moravský Svätý Ján', 'obecmsjan@obecmsjan.sk'];
  o['00304964'] = ['Obecný úrad', '', 'Bratislavská', '96', '900 46', 'Most pri Bratislave', 'starosta@mostpribratislave.sk'];
  o['00311804'] = ['Obecný úrad', '', 'Machnáčska', '288', '913 26', 'Motešice', 'obec@motesice.sk'];
  o['00306096'] = ['Obecný úrad', '', 'Mostová', '120', '925 07', 'Mostová', 'mostova@mostova-kurt.sk'];
  o['00313629'] = ['Obecný úrad', '', 'Motyčky', '14', '976 02', 'Staré Hory', 'motyckyobec@orangemail.sk'];
  o['00648035'] = ['Obecný úrad', '', 'Moškovec', '18', '038 44', 'Jazernica', 'pddrazkovce@gaya.sk'];
  o['00690562'] = ['Obecný úrad', '', '', '15', '082 67', 'Terňa', 'mosurov@gmail.com'];
  o['00313602'] = ['Obecný úrad', '', 'Moštenica', '73', '976 13', 'Slovenská Ľupča', 'ocumostenica@orangemail.sk'];
  o['00316806'] = ['Obecný úrad', '', 'Kolárovo námestie', '314/10', '038 21', 'Mošovce', 'podatelna@mosovce.sk'];
  o['00330779'] = ['Obecný úrad', '', '', '20', '090 34', 'Tokajík', ''];
  o['00328545'] = ['Obecný úrad', '', 'Muránska Dlhá Lúka', '111', '050 01', 'Muránska Dlhá Lúka', 'obecmdl@centrum.sk'];
  o['00306592'] = ['Obecný úrad', '', 'Hlavná', '65', '946 32', 'Marcelová', 'obecmudronovo@pobox.sk'];
  o['00316245'] = ['Obecný úrad', '', 'Bernolákova', '1', '985 31', 'Rapovce', 'urad.mucin@mail.t-com.sk'];
  o['00690309'] = ['Obecný úrad', '', '', '28', '044 47', 'Kecerovce', 'obec@mudrovce.sk;obecmudrovce@gmail.com'];
  o['00328553'] = ['Obecný úrad', '', 'Muránska Huta', '2', '049 02', 'Muráň', 'sevcik@ferdonet.sk;muranskahuta@stonline.sk'];
  o['00328561'] = ['Obecný úrad', '', 'Muránska Lehota', '83', '049 01', 'Muráň 1', 'sekretariat@muranskalehota.sk'];
  o['00328570'] = ['Obecný úrad', '', 'Muránska Zdychava', '83', '050 01', 'Revúca', 'info@muranskazdychava.sk;poliakjan@post.sk;muranska.zdychava@post.sk'];
  o['00328537'] = ['Obecný úrad', '', 'Muráň', '329', '049 01', 'Muráň', 'obec.muran@mail.t-com.sk'];
  o['00314668'] = ['Obecný úrad', '', 'Mútne', '194', '029 63', 'Mútne', 'obec@mutne.sk;obecmutne@gmail.com'];
  o['00650757'] = ['Obecný úrad', '', 'Muľa', '20', '991 22', 'Bušince', 'obec.mula@mail.t-com.sk'];
  o['00309125'] = ['Obecný úrad', '', 'Mužla', '711', '943 52', 'Mužla', 'sekretariat@muzla.sk'];
  o['00309745'] = ['Mestský úrad', '', 'Nám. M. R. Štefánika', '560/4', '907 14', 'Myjava', 'podatelna@myjava.sk'];
  o['00316253'] = ['Obecný úrad', '', 'Mýtna', '47', '985 53', 'Mýtna', 'obec@mytna.sk'];
  o['00323268'] = ['Obecný úrad', '', '', '19', '066 01', 'Humenné', 'ocumyslina@centrum.sk'];
  o['00307297'] = ['Obecný úrad', '', 'Kalvinské námestie', '6/1', '935 56', 'Mýtne Ludany', 'mytneludany@wmx.sk;mytneludany@gmail.com'];
  o['00313637'] = ['Obecný úrad', '', 'Mýto pod Ďumbierom', '64', '976 44', 'Mýto pod Ďumbierom', 'ou@mytopoddumbierom.sk'];
  o['00325511'] = ['Obecný úrad', '', 'Nacina Ves', '229', '072 21', 'Nacina Ves', 'ocu-nacinaves@dalnet.sk'];
  o['00310786'] = ['Obecný úrad', '', 'Nadlice', '39', '956 32', 'Nadlice', 'ocunadlice@atlas.sk'];
  o['00314676'] = ['Mestský úrad', '', 'ul. Cyrila a Metoda', '329/6', '029 01', 'Námestovo', 'sekretariat@namestovo.sk'];
  o['00312797'] = ['Obecný úrad', '', 'Naháč', '84', '919 06', 'Naháč', 'obec.nahac@stonline.sk'];
  o['00329398'] = ['Obecný úrad', '', 'Stredný riadok', '384/1', '053 33', 'Nálepkovo', 'ocu.nalepkovo@stonline.sk'];
  o['00800279'] = ['Obecný úrad', '', 'Madáchova', '2532/32', '943 60', 'Nána', 'starosta.ounana@stonline.sk'];
  o['00328588'] = ['Obecný úrad', '', 'Nandraž', '23', '049 61', 'Rákoš', 'obecnandraz@centrum.sk'];
  o['00316814'] = ['Obecný úrad', '', 'Necpaly', '168', '038 12', 'Necpaly', 'necpaly@inmail.sk;necpaly@gaya.sk'];
  o['00323284'] = ['Obecný úrad', '', '', '12', '067 33', 'Papín', ''];
  o['00310794'] = ['Obecný úrad', '', 'Nedanovce', '62', '958 43', 'Krásno', 'ounedanovce@stonline.sk'];
  o['00310808'] = ['Obecný úrad', '', 'Nedašovce', '66', '956 35', 'Bánovce nad Bebravou', 'ocunedasovce@centrum.sk'];
  o['00306100'] = ['Obecný úrad', '', 'Hlavná', '844', '925 85', 'Neded', 'obecneded@stonline.sk'];
  o['00321516'] = ['Obecný úrad', '', 'Hlavná', '1/1', '013 02', 'Nededza', 'sekretariat@nededza.eu'];
  o['00318302'] = ['Obecný úrad', '', 'Družstevná', '367/1', '972 12', 'Nedožery - Brezany', 'info@nedozery-brezany.sk'];
  o['00647438'] = ['Obecný úrad', '', 'Lúčna', '52', '974 01', 'Banská Bystrica', 'obec.nemce@stonline.sk'];
  o['00322415'] = ['Obecný úrad', '', '', '27', '086 12', 'Kurima', 'nemcovce@nemcovce.sk;nemcovce@post.sk'];
  o['00327506'] = ['Obecný úrad', '', '', '93', '082 12', 'Kapušany', 'obecnemcovce@zoznam.sk'];
  o['00313645'] = ['Obecný úrad', '', 'Hronská', '37', '976 97', 'Nemecká', 'ou@nemecka.info'];
  o['34075429'] = ['Obecný úrad', '', 'Hlohovská cesta', '376', '955 01', 'Topoľčany', 'nemcice@nemcice.sk'];
  o['00655015'] = ['Obecný úrad', '', 'Nemečky', '70', '956 22', 'Prašice', 'uhlarova@centrum.sk'];
  o['00308277'] = ['Obecný úrad', '', 'Nemčiňany', '128', '951 81', 'Nemčiňany', 'obec@nemcinany.eu'];
  o['00329401'] = ['Obecný úrad', '', 'Nemešany', '62', '053 02', 'Spišský Hrhov', 'obec.nemesany@steelnet.sk'];
  o['00319465'] = ['Obecný úrad', '', 'Hlavná', '238', '991 26', 'Nenince', 'ocunenince@centrum.sk'];
  o['00311812'] = ['Mestský úrad', '', 'Janka Pálu', '2/3', '914 41', 'Nemšová', 'sekretariatprimatora@nemsova.sk'];
  o['00314137'] = ['Obecný úrad', '', 'Nesluša', '978', '023 41', 'Nesluša', 'ou.neslusa@neslusa.sk'];
  o['00311821'] = ['Obecný úrad', '', 'Neporadza', '108', '913 26', 'Motešice', 'ocuneporadza@stonline.sk'];
  o['00650099'] = ['Obecný úrad', '', 'Neporadza', '79', '980 45', 'Štrkovec', 'obec.neporadza2015@gmail.com'];
  o['00306606'] = ['Obecný úrad', '', 'Obchodná', '23/76', '946 51', 'Nesvady', 'ocu@nesvady.sk'];
  o['00308285'] = ['Obecný úrad', '', 'Hlavná', '119', '951 72', 'Neverice', 'starosta@neverice.sk'];
  o['00648345'] = ['Obecný úrad', '', 'Nevidzany', '49', '972 27', 'Liešťany', 'obecnevidzanypd@centrum.sk'];
  o['00320889'] = ['Obecný úrad', '', 'Nevoľné', '33', '967 01', 'Kremnica', 'stefanhenzel@mail.t-com.sk;obecnevolne@stonline.sk'];
  o['00308293'] = ['Obecný úrad', '', 'Nevidzany', '106', '951 62', 'Nevidzany', 'nevidzany@slovanet.sk'];
  o['00648256'] = ['Obecný úrad', '', 'Nezbudská Lúčka', '130', '013 24', '', 'nezbudskalucka130@gmail.com'];
  o['00692344'] = ['Obecný úrad', '', 'Nimnica', '115', '020 71', 'Nimnica', 'obec.nimnica@dcnet.sk'];
  o['00648388'] = ['Obecný úrad', '', 'Nitra nad Ipľom', '96', '985 57', 'Holiša', 'obecnitranadiplom@post.sk'];
  o['00308307'] = ['Mestský úrad', '', 'Štefánikova trieda', '60', '950 06', 'Nitra', 'msunitra@msunitra.sk'];
  o['00310832'] = ['Obecný úrad', '', 'Nitrianska Streda', '1', '956 16', 'Nitrianska Streda', 'obecns@gmail.com;obecns@orangemail.sk'];
  o['00310824'] = ['Obecný úrad', '', 'Nitrianska Blatnica', '6', '956 05', 'Nitrianska Blatnica', 'podatelna@nitrianskablatnica.sk'];
  o['00611182'] = ['Obecný úrad', '', 'Jelenecká', '74', '951 01', 'Nitrianske Hrnčiarovce', 'ounh@stonline.sk'];
  o['00318337'] = ['Obecný úrad', '', 'Námestie  SNP', '1/1', '972 13', 'Nitrianske Pravno', 'ocu@nitrianskepravno.sk'];
  o['00318353'] = ['Obecný úrad', '', 'Nitrianske Sučany', '242', '972 21', 'Nitrianske Sučany', 'kusag@atlas.sk;obec@nitrianskesucany.sk'];
  o['00318345'] = ['Obecný úrad', '', 'Hlavná', '1', '972 26', 'Nitrianske Rudno', 'ocu.nitrianskerudno@stonline.sk'];
  o['00318329'] = ['Obecný úrad', '', 'Nitrica', '489', '972 22', 'Nitrica', 'obec@nitrica.sk'];
  o['00314684'] = ['Obecný úrad', '', 'Nová Doba', '506', '027 43', 'Nižná', 'obec@nizna.sk'];
  o['00312801'] = ['Obecný úrad', '', '', '80', '922 06', 'Nižná', 'ocunizna@gmail.com'];
  o['00315648'] = ['Obecný úrad', '', 'Nižná Boca', '3', '032 34', 'Malužiná', 'niznaboca@boca.sk'];
  o['00690317'] = ['Obecný úrad', '', 'Ortášska', '85', '040 18', 'Košice', 'obecniznahutka@netkosice.sk'];
  o['00330795'] = ['Obecný úrad', '', '', '38', '089 01', 'Svidník', 'alena.dzupinova@centrum.sk;obecnjedlova@mail.t-com.sk'];
  o['00324485'] = ['Obecný úrad', '', '', '60', '044 45', 'Bidovce', 'obecniznakamenica@netkosice.sk'];
  o['00323292'] = ['Obecný úrad', '', '', '36', '067 34', 'Nižná Jablonka', 'niznajablonka@mail.t-com.sk'];
  o['00330809'] = ['Obecný úrad', '', '', '100', '090 32', 'Miňovce', 'nizna.olsava@centrum.sk;obecniznaolsava@gmail.com'];
  o['00324493'] = ['Obecný úrad', '', 'Obchodná', '104', '044 15', 'Nižná Myšľa', 'ocu@niznamysla.sk'];
  o['00330817'] = ['Obecný úrad', '', 'Nižná Písaná', '29', '090 01', 'Kapišová', 'niznapisana.obec@gmail.com'];
  o['00322423'] = ['Obecný úrad', '', '', '47', '086 36', 'Nižná Polianka', 'cundra.jan@post.sk'];
  o['00325520'] = ['Obecný úrad', '', '', '126', '073 01', 'Sobrance', 'oun.rybnica@stonline.sk'];
  o['00332585'] = ['Obecný úrad', '', '', '105', '094 07', 'Nižná Sitnica', 'niznasitnica@gmail.com'];
  o['00328596'] = ['Obecný úrad', '', 'Námestie SNP', '54', '049 23', 'Nižná Slaná', 'obecnizna.slana@stonline.sk'];
  o['00322431'] = ['Obecný úrad', '', '', '30', '086 21', 'Lukavica', 'obecniznavola@centrum.sk'];
  o['00325538'] = ['Obecný úrad', '', '', '100', '072 52', 'Jenkovce', 'nizne.nemecke@centrum.sk'];
  o['00323306'] = ['Obecný úrad', '', '', '55', '067 11', 'Ľubiša', 'obecnladickovce@stonline.sk'];
  o['00329410'] = ['Obecný úrad', '', '', '97', '053 71', 'Vyšné Repaše', 'ocuniznerepase@mail.t-com.sk'];
  o['00690325'] = ['Obecný úrad', '', '', '42', '044 16', 'Bohdanovce', 'niznycaj@netkosice.sk'];
  o['00330078'] = ['Obecný úrad', '', '', '135', '065 02', 'Vyšné Ružbachy', 'nizneruzbachy@slnet.sk'];
  o['00332593'] = ['Obecný úrad', '', '', '407', '094 21', 'Nižný Hrabovec', 'ocu.niznyhrabovec@mail.t-com.sk'];
  o['00332607'] = ['Obecný úrad', '', '', '520', '094 22', 'Nižný Hrušov', 'ocu.nizny.hrusov@slovanet.sk'];
  o['00324507'] = ['Obecný úrad', '', 'Hlavná', '1', '044 12', 'Nižný Klátov', 'obec.n.klatov@netkosice.sk'];
  o['00330825'] = ['Obecný úrad', '', '', '', '090 05', 'Krajná Poľana', 'obecniznykomarnik@zoznam.sk'];
  o['00332615'] = ['Obecný úrad', '', '', '48', '093 01', 'Vranov nad Topľou', 'niznykrucov@gmail.com'];
  o['00324515'] = ['Obecný úrad', '', '', '54', '044 73', 'Buzica', 'obecniznylanec@centrum.sk'];
  o['00330833'] = ['Obecný úrad', '', '', '100', '090 11', 'Vyšný Orlík', 'obecniznymirosov@centrum.sk'];
  o['00330841'] = ['Obecný úrad', '', 'Nižný Orlík', '58', '090 11', 'Vyšný Orlík', 'obecniznyorlik@stonline.sk'];
  o['00650129'] = ['Obecný úrad', '', 'Nižný Skálnik', '77', '980 52', 'Hrachovo', 'obec.niznyskalnik@mail.t-com.sk'];
  o['00327514'] = ['Obecný úrad', '', '', '102', '082 75', 'Nižný Slavkov', 'niznyslavkov@niznyslavkov.sk'];
  o['00322440'] = ['Obecný úrad', '', '', '34', '086 02', 'Gaboltov', 'ocuntvarozec@zoznam.sk'];
  o['00331775'] = ['Obecný úrad', '', 'Hlavná', '177/5', '076 17', 'Nižný Žipov', 'obec-niznyzipov@stonline.sk'];
  o['00316822'] = ['Obecný úrad', '', 'Nolčovo', '79', '038 54', 'Krpeľany', 'podatelna@nolcovo.sk'];
  o['00310841'] = ['Obecný úrad', '', 'Norovce', '140', '956 39', 'Norovce', 'ounorovce@mail.t-com.sk'];
  o['00320897'] = ['Mestský úrad', '', 'Námestie Slobody', '1', '968 01', 'Nová Baňa', 'msu@novabana.sk'];
  o['00318931'] = ['Obecný úrad', '', 'Nová Bašta', '54', '980 34', 'Nová Bašta', 'nova.basta@stonline.sk'];
  o['00311839'] = ['Obecný úrad', '', 'Nová Bošáca', '79', '913 08', 'Nová Bošáca', 'nova.bosaca@stonline.sk'];
  o['00307301'] = ['Obecný úrad', '', 'Nová Dedina', '125', '935 25', 'Nová Dedina', 'podatelna@novadedina.sk'];
  o['00314145'] = ['Obecný úrad', '', 'Nová Bystrica', '657', '023 05', 'Nová Bystrica', 'jozef.balacin@novabystrica.sk;info@novabystrica.sk;'];
  o['00304981'] = ['Obecný úrad', '', 'Mierová', '11', '900 29', 'Nová Dedinka', 'novadedinka@stonline.sk'];
  o['00317586'] = ['Mestský úrad', '', 'Trenčianska', '45/41', '018 51', 'Nová Dubnica', 'msu@novadubnica.sk'];
  o['00311847'] = ['Obecný úrad', '', 'Nová Lehota', '50', '916 35', 'Modrová', 'obecnovalehota@zoznam.sk'];
  o['00332623'] = ['Obecný úrad', '', '', '72', '094 04', 'Nová Kelča', 'novakelca@centrum.sk'];
  o['00326445'] = ['Obecný úrad', '', 'Jána Stilla', '75', '059 86', 'Nová Lesná', 'obec@novalesna.sk'];
  o['00324540'] = ['Obecný úrad', '', '', '95', '044 44', 'Kráľovce', 'obecnovapolhora@netkosice.sk'];
  o['00330850'] = ['Obecný úrad', '', '', '', '089 01', 'Svidník', ''];
  o['00323314'] = ['Obecný úrad', '', '', '23', '067 68', 'Zboj', 'obec.novasedlica@makoba.sk'];
  o['00650200'] = ['Obecný úrad', '', 'Nová Ves', '200', '991 05', 'Sklabiná', 'obec.novaves@gost.sk'];
  o['00699080'] = ['Obecný úrad', '', 'Nová Ves nad Váhom', '160', '916 31', 'Kočovce', 'obec@novavesnadvahom.sk'];
  o['00308331'] = ['Obecný úrad', '', 'Nová Ves nad Žitavou', '76', '951 51', 'Nová Ves nad Žitavou', 'ou-novavesnzitavou@stonline.sk'];
  o['00330086'] = ['Obecný úrad', '', '', '102', '065 11', 'Nová Ľubovňa', 'obec@novalubovna.sk'];
  o['00309141'] = ['Obecný úrad', '', 'Nová Vieska', '294', '943 41', 'Nová Vieska', 'obec@novavieska.sk'];
  o['00324523'] = ['Obecný úrad', '', '', '144', '044 21', 'Semša', 'novacanyocu@gmail.com;novacanyocu@eposta.sk'];
  o['00318361'] = ['Mestský úrad', '', 'Nám. SNP', '349/10', '972 71', 'Nováky', 'munovaky@novaky.sk'];
  o['00316270'] = ['Obecný úrad', '', 'Nové Hony', '13', '985 42', 'Veľké Dravce', 'podatelna@novehony.sk'];
  o['00311863'] = ['Mestský úrad', '', 'Čsl. armády', '1', '915 01', 'Nové Mesto nad Váhom', 'msu@nove-mesto.sk'];
  o['00308340'] = ['Obecný úrad', '', 'Nové Sady', '177', '951 24', 'Nové Sady', 'obecnyurad@novesady.sk'];
  o['00309150'] = ['Mestský úrad', '', 'Hlavné námestie', '10', '940 35', 'Nové Zámky', 'info@novezamky.sk'];
  o['00331783'] = ['Obecný úrad', '', 'Hlavná', '144/47', '076 02', 'Novosad', 'ocunovosad@gmail.com'];
  o['00314692'] = ['Obecný úrad', '', 'Novoť', '285', '029 55', 'Novoť', 'ounovot@bb.telecom.sk'];
  o['00331791'] = ['Obecný úrad', '', 'Sv. Cyrila a Metoda', '155/113', '075 01', 'Nový Ruskov', 'novyruskov@mail.viapvt.sk'];
  o['00307319'] = ['Obecný úrad', '', 'Nový Tekov', '226', '935 33', 'Nový Tekov', 'obec@novytekov.sk'];
  o['00691283'] = ['Obecný úrad', '', '', '75', '044 17', 'Slanec', 'obecnovysalas@gmail.com'];
  o['37998447'] = ['Obecný úrad', '', 'Nový Svet', '24', '903 01', 'Senec', ''];
  o['00305626'] = ['Obecný úrad', '', 'Eliášovce', '55', '930 38', 'Nový Život', 'ou.novyzivot@stonline.sk'];
  o['00307327'] = ['Obecný úrad', '', 'Nýrovce', '53', '935 67', 'Málaš', 'ocunyrovce@stonline.sk'];
  o['00323276'] = ['Obecný úrad', '', '', '49', '068 01', 'Medzilaborce', 'obecnagov@centrum.sk'];
  o['00305758'] = ['Obecný úrad', '', 'Ňárad', '78', '930 06', 'Sap', 'obec.narad@gmail.com'];
  o['00648582'] = ['Obecný úrad', '', 'Obeckov', '165', '991 05', 'Sklabiná', 'obeckov@gmail.com'];
  o['00331805'] = ['Obecný úrad', '', 'Oborín', '125', '076 75', 'Oborín', 'oborin@oborin.eu.sk;oborin@oborin.eu'];
  o['36105058'] = ['Obecný úrad', '', 'Kráľa Štefana', '57', '943 04', 'Štúrovo 4', 'admin@obid.sk;ekonom@obid.sk'];
  o['00324566'] = ['Obecný úrad', '', '', '133', '044 81', 'Kysak', 'obec@obisovce.sk;obisovce@slovanet.sk'];
  o['00330094'] = ['Obecný úrad', '', '', '12', '065 42', 'Čirč', 'obrucne@zoznam.sk'];
  o['00308358'] = ['Obecný úrad', '', 'Cintorínska', '229', '951 95', 'Obyce', 'obec.obyce@stonline.sk'];
  o['00328600'] = ['Obecný úrad', '', '', '52', '049 35', 'Ochtiná', 'ochtina@stonline.sk'];
  o['00314153'] = ['Obecný úrad', '', 'Ochodnica', '121', '023 35', 'Ochodnica', 'obec@ochodnica.sk'];
  o['00329428'] = ['Obecný úrad', '', '', '266', '053 22', 'Odorín', 'obecodorin@stonline.sk'];
  o['00311871'] = ['Obecný úrad', '', 'Očkov', '177', '916 22', 'Podolie', 'obec.ockov@gmail.com'];
  o['00320153'] = ['Obecný úrad', '', 'SNP', '330/110', '962 23', 'Očová', 'podatelna@ocova.sk'];
  o['00305634'] = ['Obecný úrad', '', 'Nový rad', '267/8', '930 12', 'Ohrady', 'ocuohrady@stonline.sk'];
  o['00306622'] = ['Obecný úrad', '', 'Hlavná', '68', '946 13', 'Okoličná na Ostrove', 'okolicna@gmail.com'];
  o['00323322'] = ['Obecný úrad', '', '', '164', '067 22', 'Ohradzany', 'ohradzany@gmail.com'];
  o['00305642'] = ['Obecný úrad', '', 'Hlavná', '833/57', '930 28', 'Okoč', 'info@okoc.sk'];
  o['00330868'] = ['Obecný úrad', '', '', '131', '090 42', 'Okrúhle', 'urad@obecokruhle.sk'];
  o['00327522'] = ['Obecný úrad', '', '', '15', '082 12', 'Kapušany', 'obec.okruzna@gmail.com'];
  o['00329436'] = ['Obecný úrad', '', 'Jarná', '2', '053 61', 'Spišské Vlachy', 'olcnava@stonline.sk'];
  o['00327531'] = ['Obecný úrad', '', '', '44', '082 57', 'Ľutina', 'obecolejnikov@profinet-system.sk'];
  o['00690155'] = ['Obecný úrad', '', '', '9', '067 16', 'Výrava', 'obec.olsinkov@gmail.com'];
  o['00314161'] = ['Obecný úrad', '', 'Olešná', '493', '023 52', 'Olešná', 'urad@obecolesna.sk'];
  o['00329444'] = ['Obecný úrad', '', '', '94', '053 73', 'Brutovce', 'ocuolsavica@gmail.com'];
  o['00319481'] = ['Obecný úrad', '', 'Olováry', '129', '991 22', 'Bušince', 'obecolovary@gmail.com'];
  o['00324574'] = ['Obecný úrad', '', '', '35', '044 19', 'Ruskov', 'obecolsovany@netkosice.sk'];
  o['00699306'] = ['Obecný úrad', '', 'Omastiná', '90', '956 42', 'Uhrovec', 'ouo@post.sk'];
  o['00311880'] = ['Obecný úrad', '', 'Omšenie', '330', '914 43', 'Omšenie', 'ocuoms1@zoznam.sk'];
  o['00322466'] = ['Obecný úrad', '', 'Ondavka', '', '086 36', 'Nižná Polianka', ''];
  o['00332631'] = ['Obecný úrad', '', '', '201', '094 01', 'Vranov nad Topľou', 'o.matiasovce@stonline.sk'];
  o['00650480'] = ['Obecný úrad', '', 'Ondrášová', '25', '038 22', 'Slovenské Pravno', 'obec.ondrasova@centrum.sk'];
  o['00327557'] = ['Obecný úrad', '', '', '', '082 33', 'Chminianska Nová Ves', 'ondrasovce@post.sk'];
  o['00690465'] = ['Obecný úrad', '', '', '17', '044 65', 'Košická Belá', 'obecopatka@gmail.com'];
  o['00587575'] = ['Obecný úrad', '', 'Ondrejovce', '28', '935 51', 'Tekovský Hrádok', 'obecondrejovce@obecondrejovce.sk'];
  o['00311901'] = ['Obecný úrad', '', 'Opatovce', '73', '913 11', 'Trenčianské Stankovce', 'opatovce.ocu@mail.t-com.sk'];
  o['00318388'] = ['Obecný úrad', '', 'Opatovce nad Nitrou', '393', '972 02', 'Opatovce nad Nitrou', 'podatelna@opatovcenadnitrou.sk'];
  o['00319490'] = ['Obecný úrad', '', 'Opatovská Nová Ves', '189', '991 07', 'Slovenské Ďarmoty', 'ocuonves@naex.sk'];
  o['00690333'] = ['Obecný úrad', '', '', '54', '044 47', 'Kecerovce', 'obecopina@centrum.sk'];
  o['00649180'] = ['Obecný úrad', '', 'Opava', '131', '991 25', 'Čebovce', ''];
  o['00682217'] = ['Obecný úrad', '', 'Opoj', '1', '919 32', 'Opoj', 'starosta@opoj.sk'];
  o['00313653'] = ['Obecný úrad', '', 'Oravce', '53', '976 33', 'Poniky', 'obec@oravce.sk'];
  o['00310875'] = ['Obecný úrad', '', 'Oponice', '105', '956 14', 'Oponice', 'oponice@oponice.sk;oponice@gmail.com'];
  o['00318946'] = ['Obecný úrad', '', 'Orávka', '49', '980 42', 'Rimavská Seč', 'obec.oravka@gemernet.sk'];
  o['00314714'] = ['Obecný úrad', '', 'Oravská Jasenica', '148', '029 64', 'Oravská Jasenica', 'dane@oravskajasenica.sk;ekonom@oravskajasenica.sk;obec@oravskajasenica.sk'];
  o['00314722'] = ['Obecný úrad', '', 'Ústredie', '291', '029 57', 'Oravská Lesná', 'obecnyurad@oravskalesna.sk'];
  o['00314757'] = ['Obecný úrad', '', 'Oravská Poruba', '290', '027 54', 'Veličná', 'poplatky@oravskaporuba.sk;ekonom@oravskaporuba.sk;oravskaporuba@oravskaporuba.sk'];
  o['00314749'] = ['Obecný úrad', '', 'Oravská Polhora', '454', '029 47', 'Oravská Polhora', 'starosta@oravskapolhora.sk'];
  o['00650498'] = ['Obecný úrad', '', 'Oravské Veselé', '374', '029 62', 'Oravské Veselé', 'starosta.patron@oravskevesele.sk'];
  o['00314731'] = ['Obecný úrad', '', 'Oravský Podzámok', '61', '027 41', 'Oravský Podzámok', 'obec-orpodzamok@mail.t-com.sk'];
  o['00314706'] = ['Obecný úrad', '', 'Oravský Biely Potok', '132', '027 42', 'Podbiel', 'oravskybielypotok@bsk.sk'];
  o['00329461'] = ['Obecný úrad', '', 'Ordzovany', '66', '053 06', 'Bijacovce', 'obec.ordzovany@levonetmail.sk'];
  o['00305669'] = ['Obecný úrad', '', 'Orechová Potôň', '281', '930 02', 'Orechová Potôň', 'obec@orechovapoton.sk'];
  o['00325546'] = ['Obecný úrad', '', '', '57', '072 51', 'Krčava', 'obecorechova@lekosonline.sk'];
  o['00325554'] = ['Obecný úrad', '', 'Oreské', '129', '072 23', 'Staré', 'oreske@3gpsnet.sk'];
  o['00800007'] = ['Obecný úrad', '', 'Orešany', '79', '956 06', 'Šalgovce', 'oresany@wircom.sk'];
  o['00309753'] = ['Obecný úrad', '', 'Oreské', '7', '908 63', 'Radošovce', 'obec.oreske@gmail.com'];
  o['00330108'] = ['Obecný úrad', '', '', '119', '065 43', 'Orlov', 'obecorlov@slnet.sk'];
  o['17067707'] = ['Obecný úrad', '', 'Orovnica', '96', '966 52', 'Tekovská Breznica', 'ocuorovnica@stonline.sk'];
  o['00322474'] = ['Obecný úrad', '', '', '51', '086 12', 'Kurima', 'obec.ortutova@gmail.com'];
  o['00323357'] = ['Obecný úrad', '', '', '100', '067 34', 'Nižná Jablonka', 'obec.osadne@azet.sk'];
  o['00314773'] = ['Obecný úrad', '', 'Osádka', '47', '027 01', 'Dolný Kubín', 'osadka.ocu@gmail.com'];
  o['00322482'] = ['Obecný úrad', '', '', '57', '086 42', 'Hertník', 'obecosikov@szm.sk'];
  o['00318396'] = ['Obecný úrad', '', 'Nám. Slobody', '2/3', '972 47', 'Oslany', 'podatelna@oslany.sk'];
  o['00313661'] = ['Obecný úrad', '', 'Stredná', '230', '976 45', 'Hronec', 'obec.osrblie@sanynet.sk'];
  o['00320161'] = ['Obecný úrad', '', 'Ostrá Lúka', '58', '962 61', 'Dobrá Niva', 'obec@ostraluka.sk'];
  o['00325562'] = ['Obecný úrad', '', '', '106', '072 55', 'Porostov', 'ocuostrov@stonline.sk'];
  o['00310891'] = ['Obecný úrad', '', 'Ostratice', '200', '956 34', 'Ostratice', 'ocu_ostratice@centrum.sk'];
  o['00312827'] = ['Obecný úrad', '', 'Ostrov', '315', '922 01', 'Ostrov', 'borovska@obecostrov.sk;obecostrov@obecostrov.sk'];
  o['00690554'] = ['Obecný úrad', '', '', '60', '082 22', 'Šarišské Michaľany', 'obecostrovany@obecostrovany.sk'];
  o['00320901'] = ['Obecný úrad', '', 'Ostrý Grúň', '193', '966 77', 'Ostrý Grúň', 'obec@ostrygrun.sk'];
  o['00800015'] = ['Obecný úrad', '', 'Otrhánky', '8', '956 55', 'Veľké Chlievany', 'obec@otrhanky.sk'];
  o['00326453'] = ['Obecný úrad', '', '', '153', '059 79', 'Osturňa', 'obecosturna@neton.sk'];
  o['00309761'] = ['Obecný úrad', '', 'E. Lehotského', '38', '906 12', 'Hradište pod Vrátnom', 'obec.osuske@gmail.com'];
  o['00316288'] = ['Obecný úrad', '', 'Ozdín', '52', '985 24', 'Rovňany', 'obec.ozdin@gmail.com'];
  o['00318957'] = ['Obecný úrad', '', 'Otročok', '35', '982 62', 'Gemerská Ves', 'obec@obec-otrocok.sk'];
  o['00648965'] = ['Obecný úrad', '', 'Hričovská cesta', '16', '010 04', 'Žilina 4', 'obecovciarsko@gmail.com'];
  o['00327581'] = ['Obecný úrad', '', '', '32', '082 38', 'Víťaz', 'obecovcie@mail.telekom.sk'];
  o['00314170'] = ['Obecný úrad', '', 'Námestie Martina Bernáta', '745', '023 01', 'Oščadnica', 'oscadnicavelkaraca@bb.telecom.sk;oscadnica@velka-raca.sk'];
  o['00318965'] = ['Obecný úrad', '', 'Ožďany', '160', '980 11', 'Ožďany', 'obecozdany@obecozdany.sk'];
  o['00322458'] = ['Obecný úrad', '', '', '9', '086 46', 'Hankovce pri Giraltovciach', 'obecolsavce@centrum.sk'];
  o['00305651'] = ['Obecný úrad', '', 'Oľdza', '16', '930 39', 'Zlaté Klasy', 'ou.oldza@stonline.sk'];
  o['00323331'] = ['Obecný úrad', '', '', '174', '067 04', 'Oľka', 'obecolka@satlan.sk'];
  o['17083958'] = ['Obecný úrad', '', '', '39', '053 61', 'Spišské Vlachy', 'olsavka@zoznam.sk'];
  o['00327549'] = ['Obecný úrad', '', '', '29', '082 76', 'Torysa', 'obecolsov@profinet-system.sk'];
  o['00305685'] = ['Obecný úrad', '', 'Padáň', '289', '929 01', 'Dunajská Streda', 'oupadanstarosta@panelnet.sk'];
  o['00649996'] = ['Obecný úrad', '', 'Padarovce', '4', '980 23', 'Teplý Vrch', 'ocu.padarovce@rsnet.sk'];
  o['00330876'] = ['Obecný úrad', '', '', '53', '090 22', 'Bukovce', 'obec@obecolsavka.sk'];
  o['00328618'] = ['Obecný úrad', '', 'Hlavná', '18', '049 41', 'Krásnohorské Podhradie', 'obec.paca@centrum.sk'];
  o['00309176'] = ['Obecný úrad', '', 'Hlavná ulica', '82', '941 11', 'Palárikovo', 'ocupal@post.sk'];
  o['00325571'] = ['Obecný úrad', '', 'Palín', '233', '072 13', 'Palín', 'oupalin@minet.sk'];
  o['00332640'] = ['Obecný úrad', '', '', '24', '094 07', 'Nižná Sitnica', 'obecpakostov@gmail.com;pakostov24@gmail.com'];
  o['00308366'] = ['Obecný úrad', '', 'Paňa', '26', '951 05', 'Veľký Cetín', 'obec.pana@gmail.com'];
  o['00323373'] = ['Obecný úrad', '', 'Palota', '45', '068 01', 'Medzilaborce', 'obecpalota@zoznam.sk'];
  o['00316296'] = ['Obecný úrad', '', 'Panické Dravce', '51', '985 32', 'Veľká nad Ipľom', 'oupdravce@stonline.sk'];
  o['00331813'] = ['Obecný úrad', '', 'Hlavná', '470', '076 62', 'Parchovany', 'ocu@parchovany.sk'];
  o['00324591'] = ['Obecný úrad', '', '', '95', '044 71', 'Čečejovce', 'obecpanovce@kid.sk'];
  o['00323390'] = ['Obecný úrad', '', 'Parihuzovce', '46', '067 35', 'Parihuzovce', 'Parihuzovce@gmail.com'];
  o['00323381'] = ['Obecný úrad', '', '', '148', '067 33', 'Papín', 'ou.papin@stonline.sk'];
  o['00317594'] = ['Obecný úrad', '', 'Papradno', '315', '018 13', 'Papradno', 'juraj.palko@papradno.sk;roman.spanihel@papradno.sk;papradno@papradno.sk'];
  o['00314781'] = ['Obecný úrad', '', 'Párnica', '116', '027 52', 'Párnica', 'ocuparnica@dkubin.sk'];
  o['00315656'] = ['Obecný úrad', '', 'Partizánska Ľupča', '417', '032 15', 'Partizánska Ľupča', 'ou@partizanskalupca.com'];
  o['00312851'] = ['Obecný úrad', '', 'Pastuchov', '247', '920 63', 'Pastuchov', 'pastuchovOU@zoznam.sk'];
  o['00310905'] = ['Mestský úrad', '', 'Námestie SNP', '212/4', '958 01', 'Partizánske', 'sekretariat@partizanske.sk'];
  o['00587583'] = ['Obecný úrad', '', 'Pastovce', '51', '935 74', 'Pastovce', 'meszaroso@pastovce.sk;pastovce@pastovce.sk'];
  o['00306126'] = ['Obecný úrad', '', 'Hlohovecká', '103', '925 53', 'Pata', 'starosta@obecpata.sk'];
  o['00305707'] = ['Obecný úrad', '', 'Pataš', '87', '929 01', 'Dunajská Streda', 'obecpatas@real-net.sk;Oupatas@stonline.sk'];
  o['00306631'] = ['Obecný úrad', '', 'Lipová', '233', '946 39', 'Iža', 'obecpatince@mail.t-com.sk'];
  o['00315664'] = ['Obecný úrad', '', 'Pavčina Lehota', '71', '031 01', 'Liptovský Mikuláš', 'obec@pavcina-lehota.sk'];
  o['00682144'] = ['Obecný úrad', '', 'Pavlice', '146', '919 42', 'Voderady', 'obecpavlice@golemtech.sk'];
  o['00315672'] = ['Obecný úrad', '', 'Pavlova Ves', '26', '032 21', 'Bobrovec', 'info@pavlovaves.sk'];
  o['00649881'] = ['Obecný úrad', '', 'Pavlovce', '37', '980 01', 'Rimavské Janovce', 'pavlovce@mail.t-com.sk'];
  o['00613711'] = ['Obecný úrad', '', 'Pavlová', '153', '943 59', 'Sikenička', 'obec.pavlova@zoznam.sk'];
  o['00332658'] = ['Obecný úrad', '', '', '143', '094 31', 'Hanušovce nad Topľou', 'obecpavlovce@gmail.com'];
  o['00325589'] = ['Obecný úrad', '', 'Kostolné námestie', '1', '072 14', 'Pavlovce nad Uhom', 'pavlovce@pavlovce.sk'];
  o['00329479'] = ['Obecný úrad', '', '', '56', '053 71', 'Vyšné Repaše', 'obec.pavlany@gmail.com'];
  o['00328626'] = ['Obecný úrad', '', '', '66', '049 32', 'Štítnik', 'obec.paskova@mail.t-com.sk'];
  o['00648353'] = ['Obecný úrad', '', 'Paština Závada', '57', '013 41', 'Dolný Hričov', 'obec.pz@centrum.sk'];
  o['00655902'] = ['Obecný úrad', '', 'Pečenice', '64', '935 03', 'Bátovce', 'obec.pecenice@stonline.sk'];
  o['00310913'] = ['Obecný úrad', '', 'Pažiť', '78', '958 03', 'Partizánske', 'pazit.starosta@gmail.com'];
  o['00324604'] = ['Obecný úrad', '', '', '119', '044 05', 'Janík', 'ocupeder@post.sk'];
  o['00312878'] = ['Obecný úrad', '', 'Pečeňady', '93', '922 07', 'Veľké Kostoľany', 'podatelna@pecenady.sk'];
  o['00327590'] = ['Obecný úrad', '', 'Hlavná', '33', '082 56', 'Pečovská Nová Ves', 'sekretariat@pecovska.sk'];
  o['00310921'] = ['Obecný úrad', '', 'Pečeňany', '105', '956 36', 'Rybany', 'ocu.pecenany@mail.t-com.sk'];
  o['00324612'] = ['Obecný úrad', '', '', '180', '044 74', 'Perín - Chym', 'obecperin@gmail.com'];
  o['00323403'] = ['Obecný úrad', '', '', '', '067 35', 'Pčoliné', 'obecpcoline@azet.sk'];
  o['00305014'] = ['Obecný úrad', '', 'Pernek', '48', '900 53', 'Pernek', 'starosta@pernek.sk'];
  o['00332666'] = ['Obecný úrad', '', '', '35', '094 33', 'Vyšný Žipov', 'ou_petkovce@stonline.sk'];
  o['00322491'] = ['Obecný úrad', '', '', '30', '086 02', 'Gaboltov', 'petrova2@post.sk'];
  o['00325597'] = ['Obecný úrad', '', 'Petrikovce', '71', '072 06', 'Malčice', 'oupetrikovce@stonline.sk'];
  o['35590017'] = ['Obecný úrad', '', 'Petrova Lehota', '51', '913 26', 'Motešice', 'info@petrovalehota.sk;ekonom@petrovalehota.sk'];
  o['00309770'] = ['Obecný úrad', '', 'Petrova Ves', '53', '908 44', 'Petrova Ves', 'petrovaves@ehs.sk;obecpetrovaves@stonline.sk;petrovaves@petrovaves.sk'];
  o['00327603'] = ['Obecný úrad', '', '', '317', '082 53', 'Petrovany', 'petrovany@petrovany.sk'];
  o['00318973'] = ['Obecný úrad', '', 'Petrovce', '19', '980 35', 'Gemerský Jablonec', 'petrovce@stonline.sk'];
  o['00325601'] = ['Obecný úrad', '', 'Petrovce', '2', '072 62', 'Koromľa', ''];
  o['00323411'] = ['Obecný úrad', '', '', '27', '069 01', 'Snina', 'obecpichne@gmail.com;obecpichne@stonline.sk'];
  o['00332674'] = ['Obecný úrad', '', '', '89', '094 31', 'Hanušovce nad Topľou', 'obecpetrovce@stonline.sk'];
  o['00321541'] = ['Obecný úrad', '', 'Petrovice', '80', '013 53', 'Petrovice', 'obecpetrovice@stonline.sk'];
  o['00305022'] = ['Mestský úrad', '', 'Radničné námestie', '7', '902 14', 'Pezinok', 'informacie@msupezinok.sk'];
  o['00328634'] = ['Obecný úrad', '', '', '29', '049 35', 'Ochtiná', 'obecpetrovo@centrum.sk'];
  o['00325619'] = ['Obecný úrad', '', 'Petrovce nad Laborcom', '238', '072 21', 'Nacina Ves', 'ocu-petrovce@dalnet.sk'];
  o['00612031'] = ['Mestský úrad', '', 'Námestie SNP', '3', '921 01', 'Piešťany', 'sekretariat@piestany.sk'];
  o['00316300'] = ['Obecný úrad', '', 'Píla', '174', '985 53', 'Mýtna', 'ingmido@post.sk'];
  o['00648051'] = ['Obecný úrad', '', 'Píla', '27', '966 81', 'Žarnovica', 'oupila@stonline.sk'];
  o['00305031'] = ['Obecný úrad', '', 'Hlavná', '68', '900 89', 'Píla', 'ou@obecpila.sk'];
  o['00649023'] = ['Obecný úrad', '', 'Pinciná', '12', '984 01', 'Lučenec', 'oupincina@stonline.sk'];
  o['00325627'] = ['Obecný úrad', '', 'Pinkovce', '29', '072 54', 'Lekárovce', 'ocupinkovce@vknet.sk'];
  o['00332682'] = ['Obecný úrad', '', '', '31', '094 05', 'Holčíkovce', 'opiskorovce@gmail.com'];
  o['00320919'] = ['Obecný úrad', '', 'Pitelová', '79', '966 11', 'Trnavá Hora', 'ocupitelova@stonline.sk'];
  o['00307378'] = ['Obecný úrad', '', 'Plavé Vozokany', '115', '935 69', 'Plavé Vozokany', 'plavevozokany@stonline.sk;plave.vozokany@nextra.sk'];
  o['00309788'] = ['Obecný úrad', '', 'Plavecké Podhradie', '34', '906 36', 'Plavecké Podhradie', 'starosta@ppodhradie.sk'];
  o['00309800'] = ['Obecný úrad', '', 'Plavecký Peter', '137', '906 35', 'Plavecký Peter', 'ouplav.peter@senicanet.sk'];
  o['00305049'] = ['Obecný úrad', '', 'Plavecký Štvrtok', '172', '900 68', 'Plavecký Štvrtok', 'urad@obecplaveckystvrtok.sk'];
  o['00309796'] = ['Obecný úrad', '', 'Plavecký Mikuláš', '307', '906 35', 'Plavecký Mikuláš', 'obec@pmikulas.sk'];
  o['00330116'] = ['Obecný úrad', '', 'Hviezdoslavova', '101/4', '065 44', 'Plaveč', 'ocuplavec@slnet.sk'];
  o['00330124'] = ['Obecný úrad', '', '', '121', '065 45', 'Plavnica', 'obec@obecplavnica.sk'];
  o['00307360'] = ['Obecný úrad', '', 'Plášťovce', '345', '935 82', 'Plášťovce', 'plastovce@gmail.com;plastovce@plastovce.sk'];
  o['00331821'] = ['Obecný úrad', '', 'Hlavná', '39/70', '076 11', 'Plechotice', 'ocu@plechotice.sk'];
  o['00648299'] = ['Obecný úrad', '', 'Pleš', '7', '985 31', 'Rapovce', 'obecnyurad.ples@centrum.sk'];
  o['00317608'] = ['Obecný úrad', '', 'Plevník- Drienové', '255', '018 26', 'Plevník - Drienové', 'obecplevnik@stonline.sk'];
  o['00328642'] = ['Obecný úrad', '', 'Čsl. armády', '1', '049 11', 'Plešivec', 'obec_plesivec@stonline.sk'];
  o['00320170'] = ['Obecný úrad', '', 'Hviezdoslava', '1', '962 63', 'Pliešovce', 'obec@pliesovce.sk'];
  o['00324621'] = ['Obecný úrad', '', '', '74', '044 44', 'Kráľovce', 'obecploske@netkosice.sk;obecploske@msprofi.sk'];
  o['00649597'] = ['Obecný úrad', '', 'Ploské', '39', '982 65', 'Ratková', 'obecploske@centrum.sk'];
  o['00311910'] = ['Obecný úrad', '', 'Pobedim', '435', '916 23', 'Pobedim', 'obec.pobedim@pobedim.sk'];
  o['00314790'] = ['Obecný úrad', '', 'Podbiel', '210', '027 42', 'Podbiel', 'podbiel@orava.sk'];
  o['00800031'] = ['Obecný úrad', '', 'Pochabany', '24', '956 38', 'Šišov', 'obecpochabany@gmail.com'];
  o['00309818'] = ['Obecný úrad', '', 'Podbranč', '219', '906 41', 'Podbranč', 'oupodbranc@stonline.sk'];
  o['00313688'] = ['Obecný úrad', '', 'Sládkovičova', '76/6', '976 81', 'Podbrezová', 'podbrezova@stonline.sk'];
  o['00309192'] = ['Obecný úrad', '', 'Zdravotnícka', '322/2', '941 48', 'Podhájska', 'obecnyurad@obecpodhajska.sk'];
  o['00308374'] = ['Obecný úrad', '', 'Mechenice', '2/51', '951 46', 'Podhorany', 'obecpodhorany@wircom.sk'];
  o['00326461'] = ['Obecný úrad', '', '', '114', '059 93', 'Bušovce', 'maldur@stonline.sk'];
  o['00327611'] = ['Obecný úrad', '', '', '106', '082 12', 'Kapušany', 'ocupodhorany@orangemail.sk'];
  o['00320935'] = ['Obecný úrad', '', 'Podhorie', '84', '969 82', 'Podhorie', 'obecnyurad@podhorie.sk'];
  o['00321559'] = ['Obecný úrad', '', 'Podhorie', '50', '013 18', 'Lietava', 'podhorie@stonline.sk'];
  o['00325635'] = ['Obecný úrad', '', '', '112', '072 64', 'Podhoroď', 'podhorod@podhorod.sk;podhorod@lekosonline.sk'];
  o['00800023'] = ['Obecný úrad', '', 'Podhradie', '91', '955 01', 'Topoľčany', 'obecpodhradie@obecpodhradie.sk;obecpodhradie@topolcany.net'];
  o['00327620'] = ['Obecný úrad', '', '', '82', '080 06', 'Šarišské Lúky', 'obecpodhradik@post.sk'];
  o['00318400'] = ['Obecný úrad', '', 'Podhradie', '92', '972 42', 'Prievidza', 'ruzena.bobok@gmail.com;podhradie@prievidzanet.sk'];
  o['00316831'] = ['Obecný úrad', '', 'Ulica 1.mája', '194/61', '038 52', 'Sučany', 'obecpod@stonline.sk'];
  o['00313670'] = ['Obecný úrad', '', 'Podkonice', '178', '976 41', 'Podkonice', 'podkonice@podkonice.sk'];
  o['00316318'] = ['Obecný úrad', '', 'Podkriváň', '87', '985 51', 'Podkriváň', 'obecpodkrivan@zoznam.sk;'];
  o['00654639'] = ['Obecný úrad', '', 'Podkylava', '6', '916 16', 'Krajné', 'podkylava@mail.t-com.sk'];
  o['00307386'] = ['Obecný úrad', '', 'Podlužany', '165', '935 27', 'Hronské Kosihy', 'podluzany@imilsoft.sk'];
  o['00310930'] = ['Obecný úrad', '', 'Podlužany', '72', '956 52', 'Podlužany', 'ocupodluzany@slovanet.sk'];
  o['00311928'] = ['Obecný úrad', '', 'Štefánikova', '566', '916 22', 'Podolie', 'podolie@podolie.sk'];
  o['00330132'] = ['Mestský úrad', '', 'Nám. Mariánske', '3', '065 03', 'Podolínec', 'mupodolinec@podolinec.eu'];
  o['00628476'] = ['Obecný úrad', '', 'Podskalie', '62', '018 22', 'Pružina', 'podskalie@mail.t-com.sk'];
  o['00316326'] = ['Obecný úrad', '', 'Podrečany', '190', '985 55', 'Podrečany', 'obec@podrecany.sk'];
  o['00315699'] = ['Obecný úrad', '', 'Hlavná', '164', '033 01', 'Liptovský Hrádok', 'obec.podturen@imafex.sk'];
  o['00314196'] = ['Obecný úrad', '', 'Podvysoká', '26', '023 57', 'Podvysoká', 'podvysoka@ocu.sk'];
  o['00648400'] = ['Obecný úrad', '', 'Podzámčok', '23', '962 61', 'Dobrá Niva', 'obec@podzamcok.sk'];
  o['00320927'] = ['Obecný úrad', '', 'Počúvadlo', '59', '969 01', 'Banska Štiavnica', 'obec.pocuvadlo@gmail.com'];
  o['00313696'] = ['Obecný úrad', '', 'Nová ulica', '392', '976 69', 'Pohorelá', 'obec@pohorela.sk'];
  o['00313700'] = ['Obecný úrad', '', 'Hlavná', '62', '976 56', 'Pohronská Polhora', 'ppolhora@ppolhora.sk'];
  o['00308382'] = ['Obecný úrad', '', 'Pohranice', '185', '951 02', 'Pohranice', 'st.pohranice@mail.t-com.sk'];
  o['00313718'] = ['Obecný úrad', '', 'Pohronský Bukovec', '40', '976 62', 'Brusno', 'obec.pohronskybukovec@zoznam.sk'];
  o['00307394'] = ['Obecný úrad', '', 'Hlavná', '74', '935 62', 'Pohronský Ruskov', 'obecpohr.ruskov@stonline.sk'];
  o['00314803'] = ['Obecný úrad', '', 'Pokryváč', '59', '026 01', 'Dolný Kubín', 'urad@obec-pokryvac.sk'];
  o['00322504'] = ['Obecný úrad', '', '', '20', '086 11', 'Hrabovec', 'poliakovce@stonline.sk'];
  o['00309826'] = ['Obecný úrad', '', 'Polianka', '91', '907 01', 'Myjava', 'obecpolianka@mail.xxnet.sk'];
  o['00316334'] = ['Obecný úrad', '', 'Polichno', '4', '985 13', 'Lučenec', 'kysel@polichno.sk;polichno@polichno.sk'];
  o['00650170'] = ['Obecný úrad', '', 'Polina', '', '982 63', 'Skerešovo', 'obec@obec-polina.sk;obecpolina@gmail.com'];
  o['00327638'] = ['Obecný úrad', '', '', '120', '082 73', 'Šarišské Dravce', 'ocupoloma@stonline.sk'];
  o['00313726'] = ['Obecný úrad', '', 'Osloboditeľov', '12', '976 66', 'Polomka', 'sekretariat@polomka.sk'];
  o['00318418'] = ['Obecný úrad', '', 'Poluvsie', '251', '972 16', 'Pravenec', 'poluvsie@poluvsie.sk'];
  o['00316342'] = ['Mestský úrad', '', 'Železničná', '489/1', '987 01', 'Poltár', 'mesto@poltar.sk'];
  o['00329495'] = ['Obecný úrad', '', 'Pongrácovce', '30', '053 05', 'Beharovce', 'maria.matlochova@gmail.com'];
  o['00313734'] = ['Obecný úrad', '', 'Malá Stráňa', '32', '976 33', 'Poniky', 'poniky@poniky.sk'];
  o['00326470'] = ['Mestský úrad', '', 'Nábrežie Jána Pavla II.', '2082/3', '058 01', 'Poprad', 'mestskyurad@poprad.sk'];
  o['00324639'] = ['Obecný úrad', '', 'Školská', '2', '044 24', 'Poproč', 'sekretariat@poproc.sk'];
  o['00649899'] = ['Obecný úrad', '', 'Poproč', '12', '982 67', 'Rovné', ''];
  o['00329509'] = ['Obecný úrad', '', 'Poráč', '61', '053 23', 'Rudňany', 'obecporac@demax.sk'];
  o['00309834'] = ['Obecný úrad', '', 'Popudinské Močidlany', '56', '908 61', 'Popudinské Močidľany', 'sekretariat@popudinskemocidlany.sk'];
  o['00309842'] = ['Obecný úrad', '', 'Poriadie', '114', '906 22', 'Poriadie', 'ocuporiadie@stonline.sk'];
  o['00325643'] = ['Obecný úrad', '', '', '86', '072 55', 'Porostov', 'porostov@lekosonline.sk'];
  o['00325651'] = ['Obecný úrad', '', 'Poruba pod Vihorlatom', '175', '072 32', 'Jovsa', 'ocu-porubap.v@minet.sk'];
  o['00318426'] = ['Obecný úrad', '', 'Poruba', '95', '972 11', 'Lazany', 'obecporuba@stonline.sk'];
  o['00322512'] = ['Obecný úrad', '', '', '67', '086 46', 'Hankovce pri Giraltovciach', 'obecporubka@gmail.com'];
  o['00325660'] = ['Obecný úrad', '', '151', '151', '072 61', 'Porúbka', 'obec@porubka.sk'];
  o['00323420'] = ['Obecný úrad', '', '', '90', '067 41', 'Chlmec', 'porubka.humenne@gmail.com'];
  o['00695866'] = ['Obecný úrad', '', '', '', '091 01', 'Stropkov', ''];
  o['00649210'] = ['Obecný úrad', '', 'Rajecká cesta', '29', '013 11', 'Lietavská Lúčka', 'ouporubka@stonline.sk'];
  o['00649902'] = ['Obecný úrad', '', 'Potok', '36', '982 67', 'Rovné', ''];
  o['00315702'] = ['Obecný úrad', '', 'Potok', '24', '034 83', 'Liptovská Teplá', 'starostapotok@zoznam.sk'];
  o['00330884'] = ['Obecný úrad', '', '', '36', '091 01', 'Stropkov', ''];
  o['37842846'] = ['Obecný úrad', '', 'Potônske Lúky', '41', '930 52', 'Blahová', 'alajosrostas@centrum.sk;potluky@post.sk'];
  o['00319511'] = ['Obecný úrad', '', 'Pôtor', '75', '991 03', 'Pôtor', 'obecpotor@centrum.sk'];
  o['00311936'] = ['Obecný úrad', '', 'Potvorice', '2', '916 25', 'Potvorice', 'obecpotvorice@stonline.sk'];
  o['00311944'] = ['Obecný úrad', '', 'Kríž nad Váhom', '187', '916 26', 'Považany', 'ocu.povazany@stonline.sk'];
  o['00317667'] = ['Mestský úrad', '', 'Centrum', '2/3', '017 13', 'Považská Bystrica', 'primator@povazska-bystrica.sk'];
  o['00314200'] = ['Obecný úrad', '', 'Povina', '155', '023 33', 'Povina', 'stanislava.tomascova@obec-povina.sk;milusa.bendova@obec-povina.sk;margita.splhakova@obec-povina.sk;obecpovina@stonline.sk'];
  o['00800228'] = ['Obecný úrad', '', 'Povoda', '87', '929 01', 'Dunajská Streda', 'oupovoda@obecpovoda.sk'];
  o['00313742'] = ['Obecný úrad', '', 'Povrazník', '22', '976 55', 'Ľubietová', 'povraznik@povraznik.sk'];
  o['00309206'] = ['Obecný úrad', '', 'Pozba', '225', '941 51', 'Pozba', 'ocupozba@itaxnet.sk'];
  o['00325678'] = ['Obecný úrad', '', 'Pozdišovce', '144', '072 01', 'Pozdišovce', 'ocu.pozdisovce@inmail.sk'];
  o['00331848'] = ['Obecný úrad', '', 'Hlavná', '35', '076 84', 'Leles', 'polany@inmail.sk'];
  o['00332691'] = ['Obecný úrad', '', '', '241', '094 21', 'Nižný Hrabovec', 'ocu.posa@slovanet.sk'];
  o['00329487'] = ['Obecný úrad', '', '', '7', '053 05', 'Beharovce', 'obecpolanovce@stonline.sk;obu@polanovce.sk'];
  o['00308391'] = ['Obecný úrad', '', 'Poľný Kesov', '68', '951 15', 'Mojmírovce', 'obec@polnykesov.sk'];
  o['00633127'] = ['Obecný úrad', '', 'Praha', '37', '985 11', 'Halič', 'obec@praha.gityposta.sk;obecpraha@azet.sk'];
  o['00318434'] = ['Obecný úrad', '', 'Pravenec', '208', '972 16', 'Pravenec', 'ocupravenec@stonline.sk'];
  o['00329517'] = ['Obecný úrad', '', '', '333', '055 62', 'Prakovce', 'podatelna@prakovce.sk'];
  o['00651842'] = ['Obecný úrad', '', 'Pravica', '32', '991 21', 'Závada', ''];
  o['00310972'] = ['Obecný úrad', '', 'Pravotice', '44', '956 35', 'Nedošovce', 'ocu@obecpravotice.sk'];
  o['35626526'] = ['Obecný úrad', '', 'M. Nešpora', '146/4', '955 01', 'Práznovce', 'ocu.praznovce@mail.t-com.sk'];
  o['00312894'] = ['Obecný úrad', '', 'Prašník', '93', '922 11', 'Prašník', 'obecprasnik@prasnik.sk'];
  o['00310964'] = ['Obecný úrad', '', '1. mája', '142/142', '956 22', 'Prašice', 'obec.prasice@stonline.sk'];
  o['00313751'] = ['Obecný úrad', '', 'Námestie Juraja Pejku', '67', '976 63', 'Predajná', 'obecpredajna@stonline.sk'];
  o['00321567'] = ['Obecný úrad', '', 'Bajzova', '55', '013 51', 'Predmier', 'obecnyurad@predmier.sk'];
  o['00317691'] = ['Obecný úrad', '', 'Prečín', '304', '018 15', 'Prečín', 'obecprecin@precin.eu'];
  o['00320943'] = ['Obecný úrad', '', '', '300', '969 73', 'Prenčov', 'lelekova.ocu@prencov.sk'];
  o['00310999'] = ['Obecný úrad', '', 'Preseľany', '77', '956 12', 'Preseľany', 'obecpreselany@obecpreselany.sk;obecpreselany@stonline.sk'];
  o['00320951'] = ['Obecný úrad', '', 'Prestavlky', '226', '966 01', 'Hliník nad hronom', 'sekretariat@prestavlky.sk'];
  o['00331856'] = ['Obecný úrad', '', 'Petőfiho', '276', '076 51', 'Pribeník', 'obecpribenik@stonline.sk'];
  o['00327646'] = ['Mestský úrad', '', 'Hlavná', '73', '080 68', 'Prešov 1', 'primator@presov.sk'];
  o['00319520'] = ['Obecný úrad', '', 'Príbelce', '234', '991 25', 'Čebovce', 'pribelce@stonline.sk;pribelce@gmail.com'];
  o['00316849'] = ['Obecný úrad', '', 'Príbovce', '184', '038 42', 'Príbovce', 'ocu@obecpribovce.sk'];
  o['00306649'] = ['Obecný úrad', '', 'Hlavná', '113', '946 55', 'Pribeta', 'obec@pribeta.sk'];
  o['00314811'] = ['Obecný úrad', '', 'Pribiš', '141', '027 41', 'Oravský Podzámok', 'ocupribis@pribis.sk'];
  o['00315711'] = ['Obecný úrad', '', 'Pribylina', '384', '032 42', 'Pribylina', 'pribylina@pribylina.sk'];
  o['00313769'] = ['Obecný úrad', '', 'Priechod', '157', '976 11', 'Selce', 'sekretariat@priechod.sk'];
  o['00309869'] = ['Obecný úrad', '', 'Prietrž', '126', '906 11', 'Prietrž', 'obecprietrz@obecprietrz.sk'];
  o['00325686'] = ['Obecný úrad', '', '', '100', '072 61', 'Porúbka pri Sobranciach', 'ocupriekopa@lekosonline.sk'];
  o['00309851'] = ['Obecný úrad', '', 'Priepasné', '109', '906 15', 'Košariská', 'peter.czere@priepasne.sk;kancelaria@priepasne.sk'];
  o['00309877'] = ['Obecný úrad', '', 'Prietržka', '57', '908 49', 'Prietržka', 'obec.prietrzka@ltcnet.sk'];
  o['00309885'] = ['Obecný úrad', '', 'Prievaly', '189', '906 34', 'Prievaly', 'prievaly@nextra.sk'];
  o['00328651'] = ['Obecný úrad', '', 'Prihradzany', '7', '049 14', 'Licince', ''];
  o['00318442'] = ['Mestský úrad', '', 'Nám. slobody', '14', '971 01', 'Prievidza', 'msu.sekprim@prievidza.sk'];
  o['00330892'] = ['Obecný úrad', '', '', '', '090 05', 'Krajná Poľana', 'jan.brenisin@upsvar.sk'];
  o['00323438'] = ['Obecný úrad', '', '', '41', '067 66', 'Kolbasov', 'obecprislop@stonline.sk'];
  o['00332704'] = ['Obecný úrad', '', '', '15', '094 08', 'Ruská Poruba', 'obecpritulany@zoznam.sk'];
  o['00320960'] = ['Obecný úrad', '', 'Prochot', '39', '966 04', 'Horná Ždaňa', 'obecnyuradprochot@stonline.sk'];
  o['00690601'] = ['Obecný úrad', '', '', '103', '082 14', 'Pušovce', 'obec.proc@gmail.com'];
  o['00332712'] = ['Obecný úrad', '', '', '16', '094 31', 'Hanušovce nad Topľou', 'prosacov@centrum.sk'];
  o['00311006'] = ['Obecný úrad', '', 'Prusy', '111', '957 03', 'Bánovce nad Bebravou', 'podatelna@prusy.sk'];
  o['00315729'] = ['Obecný úrad', '', 'Prosiek', '57', '032 23', 'Liptovská Sielnica', 'prosiek@stonline.sk;obec@prosiek.sk'];
  o['00317721'] = ['Obecný úrad', '', 'Pod kostolom', '1', '018 52', 'Pruské', 'obec.pruske@stonline.sk'];
  o['00317730'] = ['Obecný úrad', '', 'Pružina', '415', '018 22', 'Pružina', 'starosta@pruzina.eu'];
  o['00330906'] = ['Obecný úrad', '', '', '', '090 05', 'Krajná Poľana', 'mihalikovahanka@centrum.sk'];
  o['00316351'] = ['Obecný úrad', '', 'Prša', '79', '985 41', 'Šávoľ', 'ocu.prsa@centrum.sk'];
  o['00323446'] = ['Obecný úrad', '', '', '97', '067 41', 'Chlmec', 'info@pticie.sk'];
  o['00331864'] = ['Obecný úrad', '', 'Hlavná', '170', '076 77', 'Ruská', 'ptruksa@pobox.sk'];
  o['00317748'] = ['Mestský úrad', '', 'Štefánikova', '821/21', '020 01', 'Púchov', 'sekretariat@puchov.sk'];
  o['00314820'] = ['Obecný úrad', '', 'Pucov', '214', '026 01', 'Dolný Kubín', 'obecnyurad-pucov@stonline.sk'];
  o['00307416'] = ['Obecný úrad', '', 'Námestie Mieru', '11', '935 05', 'Pukanec', 'podatelna@pukanec.sk'];
  o['00325694'] = ['Obecný úrad', '', 'Pusté Čemerné', '4', '072 22', 'Strážske', 'pustecemerne@minet.sk'];
  o['00330141'] = ['Obecný úrad', '', '', '66', '065 41', 'Ľubotín', 'obecpustepole@slnet.sk'];
  o['00800295'] = ['Obecný úrad', '', 'Hlavná ulica', '131', '925 54', 'Zemianske Sady', 'obecpustesady@mail.t-com.sk'];
  o['00306134'] = ['Obecný úrad', '', 'Hlavná', '91/208', '925 28', 'Pusté Úľany', 'ou@pusteulany.sk'];
  o['00327654'] = ['Obecný úrad', '', '', '14', '082 14', 'Pušovce', 'ocupusovce@pobox.sk'];
  o['00314838'] = ['Obecný úrad', '', 'Hlavná', '426', '029 44', 'Rabča', 'podatelna@rabca.sk'];
  o['00314846'] = ['Obecný úrad', '', 'Rabčice', '196', '029 45', 'Rabčice', 'ocu@rabcice.sk'];
  o['00331872'] = ['Obecný úrad', '', 'Hlavná', '95/10', '07637', 'Rad', 'ocurad@centrum.sk'];
  o['00327662'] = ['Obecný úrad', '', '', '105', '082 42', 'Radatice', 'obecradatice@onlinenet.sk'];
  o['00309214'] = ['Obecný úrad', '', 'Radava', '444', '941 47', 'Radava', 'radava@stonline.sk'];
  o['00309893'] = ['Obecný úrad', '', 'Radimov', '44', '908 47', 'Radimov', 'obec@radimov.sk'];
  o['00318451'] = ['Obecný úrad', '', 'Radobica', '124', '972 47', 'Horná Ves', 'podatelna@radobica.sk'];
  o['00318981'] = ['Obecný úrad', '', 'Radnovce', '81', '980 42', 'Rimavská Seč', 'radnovce@gemernet.sk;radnovce@radnovce.eu'];
  o['00311014'] = ['Obecný úrad', '', 'Školská', '416', '956 05', 'Radošina', 'ou@radosina.sk'];
  o['00330914'] = ['Obecný úrad', '', '', '45', '090 42', 'Okrúhle', 'radoma@vl.sk'];
  o['00314226'] = ['Obecný úrad', '', 'Radôstka', '51', '023 04', 'Stará Bystrica', 'ou_radostka@stonline.sk'];
  o['00309907'] = ['Obecný úrad', '', 'Radošovce', '188', '908 63', 'Radošovce', 'radosovce@radosovce.sk'];
  o['00682233'] = ['Obecný úrad', '', 'Radošovce', '70', '919 30', 'Jaslovské Bohunice', 'ouradosovce@mail.t-com.sk'];
  o['00623814'] = ['Obecný úrad', '', 'Vadičovská cesta', '4', '023 36', 'Radoľa', 'podatelna@radola.sk'];
  o['00332721'] = ['Obecný úrad', '', '', '5', '094 31', 'Hanušovce nad Topľou', 'obecradvanovce@mail.t-com.sk;obecradvanovce@stonline.sk'];
  o['00306657'] = ['Obecný úrad', '', 'Radvaň nad Dunajom', '58', '946 38', 'Radvaň nad Dunajom', 'obecradvan@pnet.sk'];
  o['00323454'] = ['Obecný úrad', '', '', '76', '067 01', 'Radvaň', 'obecradovan@stonline.sk'];
  o['00332739'] = ['Obecný úrad', '', '', '1', '094 05', 'Holčíkovce', 'rafajovce-ocu@post.sk'];
  o['00316369'] = ['Obecný úrad', '', 'Radzovce', '506', '985 58', 'Radzovce', 'obecradzovce@mail.t-com.sk'];
  o['00321575'] = ['Mestský úrad', '', 'Nám. SNP', '2//2', '015 22', 'Rajec', 'podatelna@rajec.sk'];
  o['00311022'] = ['Obecný úrad', '', 'Rajčany', '129', '956 32', 'Nadlice', 'ocu.rajcany@stonline.sk'];
  o['00321583'] = ['Obecný úrad', '', 'Marianské námestie', '82', '013 15', 'Rajecká Lesná', 'info@rajeckalesna.info'];
  o['00321591'] = ['Mestský úrad', '', 'Námestie SNP', '1/29', '013 13', 'Rajecké Teplice', 'sekretariat@rajecke-teplice.sk'];
  o['00314234'] = ['Obecný úrad', '', 'Ústredie', '140', '023 51', 'Raková', 'miroslav.marecek@rakova.sk;anton.heglas@rakova.sk;rakova@rakova.sk'];
  o['00325708'] = ['Obecný úrad', '', 'Rakovec nad Ondavou', '209', '072 03', 'Rakovec nad Ondavou', 'ocurakovec@stonline.sk'];
  o['00330922'] = ['Obecný úrad', '', '', '47', '089 01', 'Svidník', 'obec.rakovcik@orangemail.sk'];
  o['00312916'] = ['Obecný úrad', '', 'Rakovice', '42', '922 08', 'Veselé', 'rakovice@stonline.sk'];
  o['00328677'] = ['Obecný úrad', '', '', '150', '049 31', 'Rožňavské Bystré', 'obec.rakovnica@stonline.sk'];
  o['00647365'] = ['Obecný úrad', '', 'Rakovo', '8', '038 42', 'Príbovce', 'obec@rakovo.sk'];
  o['00328669'] = ['Obecný úrad', '', 'Rákoš', '130', '049 61', 'Rákoš', 'obecrakos@centrum.sk'];
  o['00691275'] = ['Obecný úrad', '', '', '95', '044 16', 'Bohdanovce', 'obecrakos@gmail.com'];
  o['00326488'] = ['Obecný úrad', '', '', '35', '059 76', 'Mlynčeky', 'obec.rakusy@mail.t-com.sk'];
  o['00649970'] = ['Obecný úrad', '', 'Rakytník', '15', '980 21', 'Rakytník', 'ourakytnik@rsnet.sk'];
  o['00316857'] = ['Obecný úrad', '', 'Rakša', '81', '039 01', 'Turčianske Teplice', 'sekretariat@raksa.sk'];
  o['00691267'] = ['Obecný úrad', '', '', '10', '044 45', 'Bidovce', 'obecrankovce@netkosice.sk'];
  o['00322521'] = ['Obecný úrad', '', 'Hlavná', '154', '086 41', 'Raslavice', 'info@raslavice.sk;obec@raslavice.sk'];
  o['00316377'] = ['Obecný úrad', '', 'Hlavná', '99', '985 31', 'Rapovce', 'rapovce@dkn.sk'];
  o['00318990'] = ['Obecný úrad', '', 'Ratková', '1', '982 65', 'Ratková', 'obecratkova@ferdonet.sk'];
  o['00309222'] = ['Obecný úrad', '', 'Rastislavice', '27', '94 108', 'Rastislavice', 'ou.rastislavice@stonline.sk'];
  o['00682250'] = ['Obecný úrad', '', 'Ratkovce', '97', '920 42', 'Červeník', 'ouratkovce@ratkovce.sk'];
  o['00316385'] = ['Obecný úrad', '', 'Ratka', '109', '986 01', 'Fiľakovo', 'milan.spodniak@azet.sk'];
  o['00316865'] = ['Obecný úrad', '', 'Ratkovo', '63', '038 54', 'Krpeľany', 'obec@ratkovo.gityposta.sk'];
  o['00319007'] = ['Obecný úrad', '', 'Ratkovské Bystré', '82', '982 66', 'Ratkovské Bystré', 'ratkovskebystre@stonline.sk'];
  o['00649805'] = ['Obecný úrad', '', 'Ratkovská Lehota', '21', '982 64', 'Rybník pri Ratkovej', 'obecratkovskalehota@zoznam.sk'];
  o['00650064'] = ['Obecný úrad', '', 'Ratkovská Suchá', '40', '982 67', 'Rovné', 'ratkovskasucha@post.sk'];
  o['00327671'] = ['Obecný úrad', '', 'Ratvaj', '33', '082 66', 'Uzovce', 'obecratvaj@centrum.sk'];
  o['00318469'] = ['Obecný úrad', '', 'Morovnianska', '464/1', '972 31', 'Ráztočno', 'podatelna@obecraztocno.sk'];
  o['00011002'] = ['Obecný úrad', '', 'Ratnovce', '152', '922 31', 'Sokolovce', 'ou@obec-ratnovce.sk'];
  o['00313777'] = ['Obecný úrad', '', 'Ráztoka', '124', '976 97', 'Nemecká', 'obec@raztoka.sk;raztoka@slovanet.sk'];
  o['00327689'] = ['Obecný úrad', '', '', '235', '082 61', 'Ražňany', 'raznany@raznany.sk'];
  o['00649767'] = ['Obecný úrad', '', 'Rašice', '62', '982 62', 'Gemerská Ves', 'rasice@post.sk'];
  o['00306142'] = ['Obecný úrad', '', 'Reca', '24', '925 26', 'Reca', 'reca@nextra.sk'];
  o['17081939'] = ['Obecný úrad', '', '', '25', '086 33', 'Zborov', 'obecregetovka@centrum.sk'];
  o['00323462'] = ['Obecný úrad', '', '', '32', '067 04', 'Oľka', 'urad@repejov.sk'];
  o['00328685'] = ['Obecný úrad', '', '', '47', '049 26', 'Rejdová', 'starosta@rejdova.sk'];
  o['00325716'] = ['Obecný úrad', '', '', '82', '072 41', 'Remetské Hámre', 'urad@remetskehamre.sk'];
  o['00332747'] = ['Obecný úrad', '', '', '11', '094 31', 'Hanušovce nad Topľou', 'obecremeniny@stonline.sk'];
  o['00327697'] = ['Obecný úrad', '', '', '11', '082 62', 'Uzovské Pekľany', 'obec.rencisov@post.sk'];
  o['00320978'] = ['Obecný úrad', '', 'Repište', '158', '966 03', 'Sklené Teplice', 'obecrepiste1@stonline.sk'];
  o['00328693'] = ['Mestský úrad', '', 'Námestie Slobody', '13/17', '050 01', 'Revúca', 'msu@revuca.sk'];
  o['00324647'] = ['Obecný úrad', '', 'Rešica', '119', '044 73', 'Buzica', 'obecnyuradresica@gmail.com'];
  o['00328715'] = ['Obecný úrad', '', 'Revúcka Lehota', '80', '049 18', 'Lubeník', 'revuckalehota@ferdonet.sk'];
  o['00322547'] = ['Obecný úrad', '', '', '36', '086 21', 'Lukavica', 'ouresov@gmail.com'];
  o['00326496'] = ['Obecný úrad', '', '', '19', '059 04', 'Spišské Hanušovce', 'obecrelov@compnet.sk'];
  o['00322555'] = ['Obecný úrad', '', '', '179', '085 01', 'Bardejov', 'richvald@centrum.sk;richvaldocu@stonline.sk'];
  o['00313785'] = ['Obecný úrad', '', 'Riečka', '125', '974 01', 'Banská Bystrica', 'spisiak@riecka.sk;obecriecka@mail.t-com.sk'];
  o['00329525'] = ['Obecný úrad', '', '', '261', '053 51', 'Richnava', 'richnava@richnava.sk'];
  o['00649651'] = ['Obecný úrad', '', 'Riečka', '57', '980 45', 'Štrkovec', 'obec.riecka@gemernet.sk'];
  o['00319015'] = ['Obecný úrad', '', 'Hlavná', '168', '980 53', 'Rimavská Baňa', 'obecrimavskabana@stonline.sk'];
  o['00319031'] = ['Mestský úrad', '', 'Svätopluková', '9', '979 01', 'Rimavská Sobota', 'mesto@rimavskasobota.sk'];
  o['00319023'] = ['Obecný úrad', '', 'Malý rad', '294', '980 42', 'Rimavská Seč', 'rimsec@gemernet.sk'];
  o['00328723'] = ['Obecný úrad', '', '', '150', '049 36', 'Slavošovce', 'levrinc.stanislav@gmail.com;rochovce@gmail.com'];
  o['00319058'] = ['Obecný úrad', '', 'Rimavské Janovce', '301', '980 01', 'Rimavské Janovce', 'ou.rimjanovce@rsnet.sk'];
  o['00319040'] = ['Obecný úrad', '', 'Rimavské Brezovo', '67', '980 54', 'Rimavské Brezovo', 'r.brezovo@pmxmail.sk'];
  o['00649830'] = ['Obecný úrad', '', 'Rimavské Zalužany', '1', '980 53', 'Rimavská Baňa', 'obecrimzaluzany@mail.t-com.sk'];
  o['00308404'] = ['Obecný úrad', '', 'Rišňovce', '259', '951 21', 'Rišňovce', 'obecrisnovce@gmail.com'];
  o['00611573'] = ['Obecný úrad', '', 'Rohov', '75', '906 04', 'Rohov', 'rohov@rohov.sk'];
  o['00305715'] = ['Obecný úrad', '', 'Rohovce', '164', '930 30', 'Rohovce', 'ocurohovce@stonline.sk'];
  o['00309923'] = ['Obecný úrad', '', 'Školské námestie', '406/1', '906 38', 'Rohožník', 'starosta@rohoznik.sk'];
  o['00332755'] = ['Obecný úrad', '', '', '1', '094 07', 'Nižná Sitnica', 'ocurohoznik@stonline.sk'];
  o['00327701'] = ['Obecný úrad', '', '', '45', '082 41', 'Rokycany', 'obecrokycany@gmail.com'];
  o['00322563'] = ['Obecný úrad', '', '', '115', '086 01', 'Rokytov', 'obec@rokytov.sk'];
  o['00410683'] = ['Obecný úrad', '', '', '151', '067 13', 'Rokytov pri Humennom', 'ocurokytov@netrox.sk'];
  o['00309931'] = ['Obecný úrad', '', 'Rovensko', '146', '905 01', 'Rovensko', 'rovensko@rovensko.sk'];
  o['00690112'] = ['Obecný úrad', '', '', '75', '067 03', 'Krásny Brod', 'obec.rokytovce@gmail.com'];
  o['00647519'] = ['Obecný úrad', '', 'Rosina', '167', '013 22', 'Rosina', 'rosina@rosina.sk'];
  o['00305057'] = ['Obecný úrad', '', 'Hlavná', '350', '900 41', 'Rovinka', 'somolaniova@obecrovinka.sk;bombala@obecrovinka.sk;obecrovinka@obecrovinka.sk'];
  o['00319066'] = ['Obecný úrad', '', 'Rovné', '32', '982 67', 'Rovné', 'rovneobec@zoznam.sk'];
  o['00323489'] = ['Obecný úrad', '', '', '154', '067 32', 'Vyšný Hrušov', 'ou.rovne.he@netrox.sk'];
  o['00648612'] = ['Obecný úrad', '', 'Rovňany', '98', '985 24', 'Rovňany', 'ocurovnany@ma-net.sk'];
  o['00330931'] = ['Obecný úrad', '', '', '37', '090 16', 'Cernina', 'obecrovne@centrum.sk'];
  o['00324655'] = ['Obecný úrad', '', 'SNP', '48', '044 42', 'Rozhanovce', 'ocurozhanovce@zoznam.sk'];
  o['00328740'] = ['Obecný úrad', '', '', '81', '049 32', 'Štítnik', ''];
  o['00330949'] = ['Obecný úrad', '', '', '84', '090 11', 'Vyšný Orlík', 'ouroztoky@stonline.sk'];
  o['00323471'] = ['Obecný úrad', '', '', '49', '067 02', 'Čabiny', 'roskovce@zoznam.sk'];
  o['00327719'] = ['Obecný úrad', '', '', '106', '082 71', 'Lipany', 'obec@rozkovany.sk'];
  o['00328731'] = ['Obecný úrad', '', '', '101', '049 35', 'Ochtiná', 'obecrostar@gmail.com'];
  o['00328758'] = ['Mestský úrad', '', 'Šafárikova', '29', '048 01', 'Rožňava', 'erika.mihalikovaa@roznava.sk;pavol.burdiga@roznava.sk'];
  o['00309231'] = ['Obecný úrad', '', 'Rúbaň', '27', '941 36', 'Rúbaň', 'obecruban@gmail.com'];
  o['00328766'] = ['Obecný úrad', '', '', '163', '049 31', 'Rožňavské Bystré', 'obec@roznavskebystre.sk'];
  o['00314269'] = ['Obecný úrad', '', 'Rudinka', '118', '023 31', 'Rudina', 'obecrudinka@webnet.sk;rudinka@naex.sk;rudinka.obec@gmail.com'];
  o['00314251'] = ['Obecný úrad', '', 'Rudina', '442', '023 31', 'Rudina', 'sekretariat@rudina.sk'];
  o['00314277'] = ['Obecný úrad', '', 'Rudinská', '125', '023 31', 'Rudina', 'rudinska@rudinska.sk'];
  o['00332763'] = ['Obecný úrad', '', '', '146', '094 35', 'Soľ', 'obecrudlov@stonline.sk'];
  o['00648566'] = ['Obecný úrad', '', 'Rudnianska Lehota', '225', '972 26', 'Nitrianske Rudno', 'ourlehota@mail.t-com.sk'];
  o['00328774'] = ['Obecný úrad', '', '', '69', '048 01', 'Rožňava', 'obec.rudna@stonline.sk'];
  o['00324663'] = ['Obecný úrad', '', '', '205', '044 23', 'Jasov', 'obec.rudnik@eposta.sk'];
  o['00309958'] = ['Obecný úrad', '', 'Rudník', '1', '906 23', 'Rudník', 'obec@rudnik.sk'];
  o['00316873'] = ['Obecný úrad', '', 'Rudno', '94', '038 22', 'Slovenské Pravno', 'uradrudno@gaya.sk'];
  o['00320986'] = ['Obecný úrad', '', 'Rudno nad Hronom', '16', '966 51', 'Rudno nad Hronom', 'rudnonadhronom@rudnonadhronom.sk'];
  o['00329533'] = ['Obecný úrad', '', '', '234', '053 23', 'Rudňany', 'obec@rudnany.sk;rudnany@rudnany.sk'];
  o['00308412'] = ['Obecný úrad', '', 'Rumanová', '1', '951 37', 'Rumanová', 'rumanova@rumanova.sk'];
  o['00590746'] = ['Obecný úrad', '', 'Rumince', '111', '980 50', 'Včelince', 'obecrumince@centrum.sk'];
  o['00323497'] = ['Obecný úrad', '', '', '54', '067 65', 'Topoľa', 'obecrunina@stonline.sk'];
  o['00331881'] = ['Obecný úrad', '', 'Ruská', '61', '076 77', 'Ruská', 'idoboruszka@gmail.com;imrich.lakatos73@gmail.com'];
  o['00325724'] = ['Obecný úrad', '', '', '19', '072 64', 'Ruská Bystrá', 'ruskabystra@lekosonline.sk'];
  o['00332798'] = ['Obecný úrad', '', '', '1', '094 31', 'Hanušovce nad Topľou', ''];
  o['00327727'] = ['Obecný úrad', '', '', '168', '080 05', 'Prešov - Solivar', 'ocurusnv@stonline.sk'];
  o['00332771'] = ['Obecný úrad', '', '', '4', '094 07', 'Nižná Sitnica', 'ruskakajna@centrum.sk'];
  o['00332780'] = ['Obecný úrad', '', '', '93', '094 08', 'Ruská Poruba', 'ruskaporuba@gmail.com'];
  o['00323501'] = ['Obecný úrad', '', '', '89', '067 72', 'Klenová', 'obecruskavolova@mail.t-com.sk'];
  o['00330159'] = ['Obecný úrad', '', '', '2', '065 42', 'Čirč', 'miroslavtomco@gmail.com'];
  o['00324671'] = ['Obecný úrad', '', 'Slančícka', '94', '044 19', 'Ruskov', 'ocu@obecruskov.sk'];
  o['00325741'] = ['Obecný úrad', '', '', '47', '072 42', 'Úbrež', 'ruskovce@post.sk'];
  o['00325732'] = ['Obecný úrad', '', '', '51', '072 64', 'Podhoroď', 'ocuruskyhrabovec@centrum.sk'];
  o['00323527'] = ['Obecný úrad', '', '', '5', '067 66', 'Kolbasov', 'obecruskypotok@mail.t-com.sk'];
  o['00311031'] = ['Obecný úrad', '', 'Ruskovce', '1', '956 54', 'Veľké Držkovce', 'obecruskovce@pbi.sk'];
  o['00316393'] = ['Obecný úrad', '', 'Ružiná', '102', '985 52', 'Divín', 'starosta.ruzina@gmail.com'];
  o['00315737'] = ['Mestský úrad', '', 'Námestie Andreja Hlinku', '1', '034 01', 'Ružomberok', 'podatelna@ruzomberok.sk'];
  o['00312941'] = ['Obecný úrad', '', 'Ružindol', '130', '919 61', 'Ružindol', 'obec@ruzindol.sk'];
  o['00311049'] = ['Obecný úrad', '', 'Rybany', '415', '956 36', 'Rybany', 'obec@rybany.sk'];
  o['00309915'] = ['Obecný úrad', '', 'Rybky', '110', '906 04', 'Rybky', 'obecrybky@stonline.sk'];
  o['00649813'] = ['Obecný úrad', '', 'Rybník', '20', '982 64', 'Rybník', 'obecrybnik@zoznam.sk'];
  o['00307424'] = ['Obecný úrad', '', 'Hlavná', '2', '935 23', 'Rybník nad Hronom', 'podatelna@obecrybnik.sk'];
  o['00320196'] = ['Obecný úrad', '', 'Rykynčice', '60', '962 55', 'Rykynčice', 'obecrykyncice@gmail.com'];
  o['00692417'] = ['Obecný úrad', '', 'Sádočné', '59', '018 16', 'Domaniža', 'obec.sadocne@centrum.sk'];
  o['00327735'] = ['Mestský úrad', '', 'Námestie slobody', '57', '083 01', 'Sabinov', 'msu@sabinov.sk'];
  o['00324680'] = ['Obecný úrad', '', '', '189', '044 41', 'Sady nad Torysou', 'ocusady@gmail.com'];
  o['00332810'] = ['Obecný úrad', '', 'Osloboditeľov', '385', '094 13', 'Sačurov', 'ocu.sacurov.starosta@zoznam.sk'];
  o['00309249'] = ['Obecný úrad', '', 'Hlavná', '61', '943 61', 'Salka', 'obecsalka@stonline.sk'];
  o['00307432'] = ['Obecný úrad', '', 'Parková', '2', '935 87', 'Santovka', 'obec.santovka@zoznam.sk'];
  o['00305693'] = ['Obecný úrad', '', 'Sap', '48', '930 06', 'Sap', 'obecsap@obecsap.eu'];
  o['00649821'] = ['Obecný úrad', '', 'Sása', '1', '982 64', 'Rybník', 'obec.sasa@pobox.sk'];
  o['00312959'] = ['Obecný úrad', '', 'Sasinkovo', '3', '920 65', 'Sasinkovo', 'ou.sasinkovo@stonline.sk'];
  o['00320218'] = ['Obecný úrad', '', 'Námestie SNP', '329/1', '962 62', 'Sása', 'sasa@slovanet.sk'];
  o['00307441'] = ['Obecný úrad', '', 'Sazdice', '80', '935 85', 'Demandice', 'obecsazdice@mail.t-com.sk'];
  o['00320226'] = ['Obecný úrad', '', 'Sebechleby', '1', '962 66', 'Sebechleby', 'obecsebechleby@gmail.com'];
  o['00313793'] = ['Obecný úrad', '', 'Sebedín - Bečov', '37', '974 01', 'Banská Bystrica', 'podatelna@sebedinbecov.sk'];
  o['00318485'] = ['Obecný úrad', '', 'Hlavná', '471/8', '972 05', 'Sebedražie', 'sekretariat@sebedrazie.sk'];
  o['00314854'] = ['Obecný úrad', '', 'Sedliacka Dubová', '157', '027 55', 'Dlhá nad Oravou', 'ladislavtoman@sedliackadubova.sk;obec@sedliackadubova.sk'];
  o['00327743'] = ['Obecný úrad', '', '', '176', '082 43', 'Sedlice pri Prešove', 'obecsedlice@stonline.sk'];
  o['00332836'] = ['Obecný úrad', '', '', '85', '094 09', 'Sedliská', 'ocu.sedliska@slovanet.sk'];
  o['00692301'] = ['Obecný úrad', '', 'Sedmerovec', '58', '018 54', 'Slávnica', 'obecnyurad@sedmerovec.sk'];
  o['00649074'] = ['Obecný úrad', '', 'Seč', '133', '972 26', 'Nitrianske Rudno', 'ousec@stonline.sk'];
  o['00648574'] = ['Obecný úrad', '', 'Sečianky', '89', '991 10', 'Veľká Ves nad Ipľom', 'ocusecianky@gmail.com'];
  o['00331899'] = ['Mestský úrad', '', 'Námestie sv. Cyrila a Metoda', '43/27', '078 01', 'Sečovce', 'podatelna@secovce.sk'];
  o['00332828'] = ['Obecný úrad', '', 'Hlavná', '132/135', '094 14', 'Sečovská Polianka', 'ousp@he.psg.sk'];
  o['00313807'] = ['Obecný úrad', '', 'Selčianska cesta', '132', '976 11', 'Selce', 'ouselce@selce.sk'];
  o['00325759'] = ['Obecný úrad', '', '', '80', '072 51', 'Krčava', 'sejkov@lekosonline.sk'];
  o['00682101'] = ['Obecný úrad', '', 'Sekule', '570', '908 80', 'Sekule', 'obecnyurad@obecsekule.sk'];
  o['00306151'] = ['Obecný úrad', '', 'Sovietskej armády', '1131', '925 72', 'Selice', 'obecselice@salamon.sk'];
  o['00647641'] = ['Obecný úrad', '', 'Selce', '1', '962 51', 'Čabradský Vrbovok', ''];
  o['00649627'] = ['Obecný úrad', '', 'Selce', '1', '980 13', 'Hrnčiarska Ves', ''];
  o['00311952'] = ['Obecný úrad', '', 'Selec', '73', '913 36', 'Selec', 'ocuselec@nextra.sk'];
  o['00309257'] = ['Obecný úrad', '', 'Semerovo', '345', '941 32', 'Semerovo', 'obec.semerovo@azet.sk'];
  o['00305065'] = ['Mestský úrad', '', 'Mierové námestie', '8', '903 01', 'Senec', 'musenec@senec.sk'];
  o['00327751'] = ['Obecný úrad', '', '', '31', '082 03', 'Lemešany', 'obec.seniakovce@zoznam.sk'];
  o['00319546'] = ['Obecný úrad', '', 'Senné', '81', '991 01', 'Senné', 'obec.senne@gmail.com'];
  o['00309974'] = ['Mestský úrad', '', 'Štefánikova', '1408/56', '905 25', 'Senica', 'spravca@msu.senica.sk'];
  o['00325767'] = ['Obecný úrad', '', 'Športová', '230', '072 13', 'Palín', 'podatelna@obecsenne.sk'];
  o['00320234'] = ['Obecný úrad', '', 'Senohrad', '151', '962 43', 'Senohrad', 'info@senohrad.sk'];
  o['00324698'] = ['Obecný úrad', '', '', '200', '044 58', 'Seňa', 'obecsena@obecsena.sk'];
  o['00306169'] = ['Mestský úrad', '', 'Námestie Republiky', '1176/10', '926 01', 'Sereď', 'mu@sered.sk'];
  o['00647586'] = ['Obecný úrad', '', 'Seľany', '39', '991 27', 'Kamenné Kosihy', 'obecselany@mail.t-com.sk;obecselany@stonline.sk'];
  o['00320242'] = ['Obecný úrad', '', 'Sielnica', '210', '962 31', 'Sliač', 'obec@sielnica.sk'];
  o['00649287'] = ['Obecný úrad', '', 'Sihla', '73', '976 53', 'Lom nad Rimavicou', 'obecsihla@gmail.com'];
  o['00314862'] = ['Obecný úrad', '', 'Sihelné', '217', '029 46', 'Sihelné', 'ousihelne@orava.sk'];
  o['31824587'] = ['Obecný úrad', '', 'Veľký Pesek', '232', '937 01', 'Sikenica', 'podatelna@sikenica.sk'];
  o['00309265'] = ['Obecný úrad', '', 'Sikenička', '210', '943 59', 'Sikenička', 'ocu.sikenicka@gmail.com'];
  o['00312967'] = ['Obecný úrad', '', 'Siladice', '232', '920 52', 'Siladice', 'obecnyuradsiladice@stonline.sk'];
  o['00328782'] = ['Obecný úrad', '', '', '43', '049 52', 'Silica', 'obec.silica@mail.t-com.sk'];
  o['00328791'] = ['Obecný úrad', '', '', '70', '049 11', 'Plešivec', 'obecsb@gmail.com'];
  o['17078270'] = ['Obecný úrad', '', '', '64', '049 43', 'Jablonov nad Turňou', 'obec.silickajablonica@mail.t-com.sk'];
  o['00328812'] = ['Obecný úrad', '', 'Sirk', '71', '049 64', 'Sirk', 'ocusirk@mail.t-com.sk'];
  o['00331902'] = ['Obecný úrad', '', 'Hlavná', '152/21', '076 03', 'Hraň', 'obecsirnik@trenet.sk'];
  o['00311057'] = ['Obecný úrad', '', 'Námestie SNP', '451', '958 53', 'Skačany', 'podatelna@skacany.sk'];
  o['00309982'] = ['Mestský úrad', '', 'Námestie slobody', '10', '909 01', 'Skalica', 'mesto@mesto.skalica.sk;mesto@skalica.sk'];
  o['00311961'] = ['Obecný úrad', '', 'Skala', '103', '913 31', 'Skalka nad Váhom', 'sekretariat@skalkanadvahom.sk'];
  o['00314285'] = ['Obecný úrad', '', 'Skalité', '598', '023 14', 'Skalité', 'obec@skalite.sk'];
  o['00324701'] = ['Obecný úrad', '', 'Skároš', '91', '044 11', 'Ždaňa', 'ocu.skaros@stonline.sk'];
  o['00319074'] = ['Obecný úrad', '', 'Skerešovo', '23', '982 63', 'Skerešovo', 'obec.skeresovo@gmail.com'];
  o['00650773'] = ['Obecný úrad', '', 'Sklabinský Podzámok', '45', '038 03', 'Sklabiňa pri Martine', 'obec@sklabinskypodzamok.sk'];
  o['00319554'] = ['Obecný úrad', '', 'Sklabiná', '211', '991 05', 'Sklabiná', 'ousklabina@zoznam.sk'];
  o['00316890'] = ['Obecný úrad', '', 'Sklené', '97', '038 47', 'Sklené', 'obecnyurad@obec-sklene.sk'];
  o['00316881'] = ['Obecný úrad', '', 'Sklabiňa', '108', '038 03', 'Sklabiňa', 'obecsklabina@gaya.sk'];
  o['00321001'] = ['Obecný úrad', '', 'Sklené Teplice', '161', '966 03', 'Sklené Teplice', 'ocuskleneteplice@stonline.sk'];
  o['00324728'] = ['Obecný úrad', '', 'Hlavná', '55/114', '044 17', 'Slanec', 'obec@slanec.sk'];
  o['00332844'] = ['Obecný úrad', '', '', '78', '094 33', 'Vyšný Žipov', 'ocuskrabske@stonline.sk'];
  o['00306177'] = ['Mestský úrad', '', 'Fučíkova', '329', '925 21', 'Sládkovičovo', 'sekretariat@sladkovicovo.sk'];
  o['00308421'] = ['Obecný úrad', '', 'Školská', '294', '951 85', 'Skýcov', 'obecskycov@gmail.com'];
  o['00691259'] = ['Obecný úrad', '', '', '89', '044 17', 'Slanec', 'obec.slancik@stonline.sk'];
  o['00691330'] = ['Obecný úrad', '', 'Slanská Huta', '68', '044 17', 'Slanec', 'starosta@slanskahuta.sk'];
  o['00320994'] = ['Obecný úrad', '', 'Slaská', '17', '966 22', 'Lutila', 'starosta@slaska.sk'];
  o['00324744'] = ['Obecný úrad', '', '', '54', '044 18', 'Kalša', 'slanome@stonline.sk'];
  o['00587591'] = ['Obecný úrad', '', 'Slatina', '135', '935 84', 'Horné Semerovce', 'ocuslatina@gmail.com'];
  o['00311073'] = ['Obecný úrad', '', 'Slatina nad Bebravou', '17', '956 53', 'Slatina nad Bebravou', 'obecslatinanadbeb@gmail.com'];
  o['00320269'] = ['Obecný úrad', '', 'Slatinské Lazy', '111', '962 25', 'Slatinské Lazy', 'slatinske@lazy.sk'];
  o['00800058'] = ['Obecný úrad', '', 'Slatinka nad Bebravou', '103', '956 53', 'Slatinka nad Bebravou', 'ocu.slatinka.nb@mail.t-com.sk'];
  o['00325775'] = ['Obecný úrad', '', 'Slavkovce', '115', '072 17', 'Zemplínske Kopčany', 'slavkovce@minet.sk'];
  o['00329541'] = ['Obecný úrad', '', '', '63', '053 61', 'Spišské Vlachy', 'obecslatvina@mail.t-com.sk;obecslatvina@stonline.sk'];
  o['00328821'] = ['Obecný úrad', '', '', '109', '049 11', 'Plešivec', 'obec.slavec@stonline.sk'];
  o['00692280'] = ['Obecný úrad', '', 'Slavnica', '209', '018 54', 'Slavnica', 'starosta@slavnica.sk'];
  o['00328847'] = ['Obecný úrad', '', '', '113', '049 36', 'Slavošovce', 'ou@slavosovce.sk'];
  o['00308455'] = ['Obecný úrad', '', 'Slepčany', '241', '951 52', 'Slepčany', 'info@slepcany.sk'];
  o['00595179'] = ['Obecný úrad', '', '', '27', '049 34', 'Markuška', 'obec.slavoska@gmail.com'];
  o['00320277'] = ['Mestský úrad', '', 'Letecká', '1', '962 31', 'Sliač', 'msu@sliac.sk'];
  o['00325783'] = ['Obecný úrad', '', 'Sliepkovce', '163', '072 37', 'Lastomír', 'ou.sliepkovce@gecom.sk'];
  o['00316903'] = ['Obecný úrad', '', 'Slovany', '102', '038 43', 'Kláštor pod Znievom', 'obecslovany@etelmail.sk'];
  o['00331911'] = ['Obecný úrad', '', 'Hlavná', '9', '076 12', 'Kuzmice', 'kralovv1@wmx.sk;kralovsky@slivnik.sk;slivnik@slivnik.sk'];
  o['00649929'] = ['Obecný úrad', '', 'Slizké', '45', '980 23', 'Teplý Vrch', 'ocu@slizke.sk'];
  o['00332852'] = ['Obecný úrad', '', '', '4', '094 02', 'Slovenská Kajňa', 'sl.kajna@watel.sk'];
  o['00692361'] = ['Obecný úrad', '', 'Slopná', '159', '018 21', 'Dolný Lieskov', 'sekretariat@slopna.sk'];
  o['00682136'] = ['Obecný úrad', '', 'Slovenská Nová Ves', '30', '919 42', 'Voderady', 'ousnves@stonline.sk'];
  o['00326500'] = ['Obecný úrad', '', '', '45', '059 02', 'Slovenská Ves', 'ocu.slovenska.ves@mail.t-com.sk'];
  o['00323535'] = ['Obecný úrad', '', '', '36', '067 22', 'Ohradzany', 'obec.slov.volova@centrum.sk'];
  o['00313823'] = ['Obecný úrad', '', 'Námestie SNP', '13', '976 13', 'Slovenská Ľupča', 'sekretariat@slovenskalupca.sk'];
  o['00319562'] = ['Obecný úrad', '', 'Slovenské Ďarmoty', '99', '991 07', 'Slovenské Ďarmoty', 'obecslov.darmoty@stonline.sk;obecslov.darmoty@mail.t-com.sk'];
  o['00323543'] = ['Obecný úrad', '', '', '52', '067 13', 'Rokytov pri Humennom', 'lpm.mezdej@netrox.sk'];
  o['00649406'] = ['Obecný úrad', '', 'Slovenské Kľačany', '66', '991 02', 'Dolná Strehová', 'slovenskeklacany@zoznam.sk'];
  o['00331929'] = ['Obecný úrad', '', 'Hlavná', '79/128', '076 33', 'Slovenské Nové Mesto', 'slovnovemesto@szm.sk;obecslov.n.m@stonline.sk'];
  o['00316911'] = ['Obecný úrad', '', 'Slovenské Pravno', '123', '038 22', 'Slovenské Pravno', 'ekonomicke@obecslovenskepravno.sk;obecslpravno@gaya.sk'];
  o['00305073'] = ['Obecný úrad', '', 'Hlavná', '132', '900 26', 'Slovenský Grob', 'juran@slovensky-grob.sk;obec@slovensky-grob.sk'];
  o['00329550'] = ['Obecný úrad', '', '', '58', '053 40', 'Sovinky', 'slovinky@stonline.sk;slovinky@obecslovinky.sk'];
  o['00322571'] = ['Obecný úrad', '', 'Smilno', '194', '086 33', 'Zborov', 'ou@smilno.sk'];
  o['00691721'] = ['Obecný úrad', '', 'Námestie Matúša Pajdušáka', '1341/50', '053 11', 'Smižany', 'smizany@smizany.sk'];
  o['00312983'] = ['Obecný úrad', '', 'SNP', '52', '919 04', 'Smolenice', 'podatelna@smolenice.com'];
  o['00309991'] = ['Obecný úrad', '', 'Smolinské', '334', '908 42', 'Smolinské', 'obecsmolinske@smolinske.sk'];
  o['00329584'] = ['Obecný úrad', '', '', '1', '055 65', 'Smolnícka Huta', 'obecsmolhuta@trixnet.sk'];
  o['00329576'] = ['Obecný úrad', '', '', '1', '055 66', 'Smolník', 'obecnyuradsmolnik@stonline.sk'];
  o['00315753'] = ['Obecný úrad', '', 'Smrečany', '48', '032 05', 'Smrečany', 'smrecany@smrecany.sk'];
  o['00310000'] = ['Obecný úrad', '', 'Smrdáky', '181', '906 03', 'Smrdáky', 'ousmrdaky@stonline.sk'];
  o['00322580'] = ['Obecný úrad', '', '', '44', '086 06', 'Malcov', 'snakov@ocu.sk'];
  o['00314315'] = ['Obecný úrad', '', 'Snežnica', '17', '023 32', 'Snežnica', 'sneznica@sneznica.sk'];
  o['00323560'] = ['Mestský úrad', '', 'Strojárska', '2060/95', '069 01', 'Snina', 'podatelna@snina.sk'];
  o['00311987'] = ['Obecný úrad', '', 'Soblahov', '366', '913 38', 'Soblahov', 'soblahov@soblahov.sk'];
  o['00310018'] = ['Obecný úrad', '', 'Sobotište', '11', '906 05', 'Sobotište', 'obecsobohornak@mail.t-com.sk;obecsobotiste@stonline.sk'];
  o['00330965'] = ['Obecný úrad', '', 'Soboš', '12', '090 42', 'Okruhlé', 'iivancova@gmail.com;obecsobos@centrum.sk;'];
  o['00306665'] = ['Obecný úrad', '', 'Hlavná', '63', '946 17', 'Sokolce', 'obecsokolce@stonline.sk'];
  o['00316920'] = ['Obecný úrad', '', 'Socovce', '33', '038 43', 'Kláštor pod Znievom', 'obecnyurad@socovce.sk'];
  o['00312991'] = ['Obecný úrad', '', 'Piešťanská', '234/84', '922 31', 'Sokolovce', 'starosta@sokolovce.sk'];
  o['00324752'] = ['Obecný úrad', '', 'Kostolianska', '159/10', '044 31', 'Sokoľ', 'starosta.sokol@gmail.com'];
  o['00311081'] = ['Obecný úrad', '', 'Hviezdoslavova', '50', '956 17', 'Solčany', 'ocu@obecsolcany.sk'];
  o['00690741'] = ['Obecný úrad', '', 'Sokoľany', '193', '044 57', 'Haniska', 'sokolany@post.sk'];
  o['00800040'] = ['Obecný úrad', '', 'Solčianky', '58', '956 38', 'Solčianky', 'solcianky@mail.t-com.sk'];
  o['00310026'] = ['Obecný úrad', '', 'Sološnica', '527', '906 37', 'Sološnica', 'obec@solosnicask.net'];
  o['00331945'] = ['Obecný úrad', '', 'Obchodná', '39/7', '076 35', 'Somotor', 'obecsomotor@gmail.com'];
  o['00690104'] = ['Obecný úrad', '', '', '46', '067 22', 'Ohradzany', 'sopkovce@centrum.sk'];
  o['00331937'] = ['Obecný úrad', '', '', '68', '076 53', 'Boľ', 'solnicka@inmail.sk'];
  o['00332861'] = ['Obecný úrad', '', '', '161', '094 35', 'Soľ', 'ocu.sol@slovanet.sk'];
  o['00330973'] = ['Obecný úrad', '', '', '28', '090 31', 'Kolbovce', ''];
  o['00326518'] = ['Mestský úrad', '', 'Petzvalova', '18', '059 01', 'Spišská Belá', 'jneupauerova@spisskabela.sk'];
  o['00329614'] = ['Mestský úrad', '', 'Radničné nám.', '7', '052 01', 'Spišská Nová Ves', 'jan.volny@mestosnv.sk;radnica@mestosnv.sk'];
  o['00326526'] = ['Mestský úrad', '', 'Štúrová', '228/109', '061 01', 'Spišská Stará Ves', 'sekretar@spisskastaraves.sk;mesto@spisskastaraves.sk'];
  o['00326534'] = ['Obecný úrad', '', 'Obrancov mieru', '454', '059 34', 'Spišská Teplica', 'ouspisskateplica@stonline.sk'];
  o['00329649'] = ['Obecný úrad', '', 'Kostolná', '20/12', '052 01', 'Spišská Nová Ves', 'podatelna@spissketomasovce.sk'];
  o['00326542'] = ['Obecný úrad', '', 'Michalská', '394', '059 18', 'Spišské Bystré', 'sp.bystre@stonline.sk'];
  o['00329657'] = ['Mestský úrad', '', 'SNP', '34', '053 61', 'Spišské Vlachy', 'msuspv@spisskevlachy.sk'];
  o['00326551'] = ['Obecný úrad', '', '', '97', '059 04', 'Spišské Hanušovce', 'spisskehanusovce@compnet.sk'];
  o['00329622'] = ['Mestský úrad', '', 'Mariánske námestie', '37', '053 04', 'Spišské Podhradie', 'info@spisskepodhradie.sk'];
  o['00329592'] = ['Obecný úrad', '', 'SNP', '10', '053 02', 'Spišský Hrhov', 'spissky.hrhov@vmnet.sk'];
  o['00326 569'] = ['Obecný úrad', '', 'Hornádska', '241', '059 14', 'Spišský Štiavnik', 'obec@spisskystiavnik.sk'];
  o['00329606'] = ['Obecný úrad', '', '', '216', '053 63', 'Sp.Hrušov', 'sphrusov@levonetmail.sk'];
  o['00329631'] = ['Obecný úrad', '', 'Tatranská', '4', '053 14', 'Spišský Štvrtok', 'jan.gres@spisskystvrtok.sk;obec@spisskystvrtok.sk'];
  o['00323578'] = ['Obecný úrad', '', 'SNP', '574/6', '067 61', 'Stakčín', 'oustakcin@stonline.sk'];
  o['00689734'] = ['Obecný úrad', '', 'Hlavná', '139/139', '076 16', 'Úpor', 'obecstanca@centrum.sk'];
  o['00315761'] = ['Obecný úrad', '', 'Stankovany', '133', '034 92', 'Stankovany', 'oustank@stonline.sk'];
  o['00331953'] = ['Obecný úrad', '', 'Hlavná', '1', '076 61', 'Bačkov', 'stankovce@minet.sk'];
  o['00314307'] = ['Obecný úrad', '', 'Stará Bystrica', '537', '023 04', 'Stará Bystrica', 'ou_stara_bystrica@stonline.sk'];
  o['00316407'] = ['Obecný úrad', '', 'Stará Halič', '116', '985 11', 'Halič', 'starahalic@mail.t-com.sk'];
  o['00649716'] = ['Obecný úrad', '', 'Stará Bašta', '97', '980 34', 'Nová Bašta', 'obec.starabasta@gmail.com'];
  o['00320285'] = ['Obecný úrad', '', 'Stará Huta', '54', '962 25', 'Stará Huta', 'starosta@obecstarahuta.sk'];
  o['00321010'] = ['Obecný úrad', '', 'Stará Kremnička', '198', '965 01', 'Stará Kremnička', 'obec@starakremnicka.sk'];
  o['00311995'] = ['Obecný úrad', '', 'Stará Lehota', '35', '916 35', 'Modrová', 'staralehota@nextra.sk'];
  o['00326577'] = ['Obecný úrad', '', 'Hlavná', '29', '059 52', 'Velká Lomnica', 'ocu@staralesna.sk'];
  o['00310034'] = ['Obecný úrad', '', 'Stará Myjava', '145', '907 01', 'Myjava', 'obec@staramyjava.sk'];
  o['00312002'] = ['Mestský úrad', '', 'Ulica SNP', '1/2', '916 01', 'Stará Turá', 'msu@staratura.sk'];
  o['00329665'] = ['Obecný úrad', '', '', '15', '053 34', 'Švedlár', 'obec.staravoda@stonline.sk'];
  o['00330167'] = ['Mestský úrad', '', 'Obchodná', '1', '064 01', 'Stará Ľubovňa', 'mesto@staralubovna.sk'];
  o['00325805'] = ['Obecný úrad', '', 'Staré', '208', '072 23', 'Staré', 'obec.stare@minet.sk'];
  o['00313831'] = ['Obecný úrad', '', 'Staré Hory', '317', '976 02', 'Staré Hory', 'oustarehory@stonline.sk'];
  o['00330175'] = ['Obecný úrad', '', '', '39', '065 46', 'Malý Lipník', 'starosta@starina.sk'];
  o['00307483'] = ['Obecný úrad', '', 'Tekovská', '1', '935 26', 'Starý Tekov', 'starytekov1111@stonline.sk'];
  o['00587605'] = ['Obecný úrad', '', 'Starý Hrádok', '29', '935 56', 'Mýtne Ludany', 'staryhradok@dolnepohronie.sk'];
  o['00314293'] = ['Obecný úrad', '', 'Jozefa Kronera', '588', '023 53', 'Staškov', 'podatelna@staskov.sk'];
  o['00330981'] = ['Obecný úrad', '', 'Staškovce', '74', '090 23', 'Havaj', 'varcholik@nextra.sk;obecstaskovce@azet.sk'];
  o['00322598'] = ['Obecný úrad', '', '', '70', '086 33', 'Zborov', 'obec@stebnickahuta.sk;ludmilasosnakova@centrum.sk'];
  o['00322601'] = ['Obecný úrad', '', '', '11', '086 33', 'Zborov', 'starosta@stebnik.sk'];
  o['00326593'] = ['Obecný úrad', '', 'Stráne pod Tatrami', '2', '059 76', 'Mlynčeky', 'obecstrane@stonline.sk'];
  o['00320293'] = ['Obecný úrad', '', 'Stožok', '47', '962 12', 'Detva', 'stozok@stozok.sk'];
  o['00649538'] = ['Obecný úrad', '', 'Stránska', '66', '982 51', 'Figa', 'oustranska@gmail.com'];
  o['00648884'] = ['Obecný úrad', '', 'Pod Stráň', '168', '013 13', 'Rajecké Teplice', 'ocustranske@stonline.sk'];
  o['00330183'] = ['Obecný úrad', '', '', '17', '065 33', 'Veľký Lipník', 'obecstranany@slnet.sk'];
  o['00321613'] = ['Obecný úrad', '', 'Májová', '336', '013 25', 'Stráňavy', 'info@stranavy.sk;stranavy@stranavy.sk'];
  o['00328855'] = ['Obecný úrad', '', '', '46', '049 71', 'Stratená', 'erikaoravcova@zoznam.sk;stratena@stratena.net'];
  o['00321630'] = ['Obecný úrad', '', 'Stráža', '243', '013 04', 'Dolná Tižiná', 'oustraza@gmail.com'];
  o['00331961'] = ['Obecný úrad', '', 'Ružová', '157/21', '07652', 'Velký Horešov', 'ocu.strazne@post.sk'];
  o['00325813'] = ['Mestský úrad', '', 'Námestie Alexandra Dubčeka', '300', '072 22', 'Strážske', 'strazske@strazske.sk'];
  o['00331970'] = ['Obecný úrad', '', 'Hlavná', '174/391', '076 31', 'Streda nad Bodrogom', 'obecstredanb@stonline.sk'];
  o['00319571'] = ['Obecný úrad', '', 'Stredné Plachtince', '110', '991 24', 'Dolné Plachtince', 'obec_str.plachtince@stonline.sk'];
  o['00321648'] = ['Obecný úrad', '', 'Sokolská', '487', '013 24', 'Strečno', 'obec@strecno.sk'];
  o['00309273'] = ['Obecný úrad', '', 'Blatná', '1036', '941 37', 'Strekov', 'ocu@strekov.sk'];
  o['00325821'] = ['Obecný úrad', '', 'Nad Laborcom', '12', '072 13', 'Palín', 'ocustretava@stonline.sk'];
  o['00313840'] = ['Obecný úrad', '', 'Strelníky', '63', '976 55', 'Ľubietová', 'strelniky@post.sk;urad@strelniky.sk'];
  o['00325830'] = ['Obecný úrad', '', 'Stretavka', '7', '072 13', 'Palín', 'stretavka@minet.sk'];
  o['00323608'] = ['Obecný úrad', '', 'Strihovce', '60', '067 73', 'Ubľa', 'obecstrihovce@lekosonline.sk'];
  o['00330990'] = ['Obecný úrad', '', '', '15', '089 01', 'Svidník', 'strocin@pobox.sk'];
  o['00692336'] = ['Obecný úrad', '', 'Školská', '152', '020 01', 'Streženice', 'obec.strezenice@stonline.sk'];
  o['00331007'] = ['Mestský úrad', '', 'Hlavná', '38/2', '091 01', 'Stropkov', 'mesto@stropkov.sk'];
  o['00649724'] = ['Obecný úrad', '', 'Studená', '97', '980 34', 'Nová Bašta', 'obec.studena@azet.sk'];
  o['00329673'] = ['Obecný úrad', '', '', '3', '053 04', 'Spišské Podhradie', 'obecstudenec@gmail.com'];
  o['00310042'] = ['Obecný úrad', '', 'Studienka', '364', '908 75', 'Studienka', 'obecstudienka@zoznam.sk'];
  o['00305081'] = ['Mestský úrad', '', 'Hlavná', '1/24', '900 31', 'Stupava', 'sekretariat@stupava.sk'];
  o['00591611'] = ['Obecný úrad', '', 'Stupné', '216', '018 12', 'Stupné', 'obec.stupne@stonline.sk'];
  o['00322610'] = ['Obecný úrad', '', '', '42', '086 43', 'Koprivnica', 'ou.stulany@zoznam.sk'];
  o['00690635'] = ['Obecný úrad', '', 'Suchá Dolina', '68', '082 43', 'Sedlice pri Prešove', 'obecsdolina@gmail.com'];
  o['00314871'] = ['Obecný úrad', '', 'Suchá Hora', '252', '027 13', 'Suchá Hora', 'obec@suchahora.eu'];
  o['00313009'] = ['Obecný úrad', '', 'Suchá nad Parnou', '68', '919 01', 'Suchá nad Parnou', 'obecsucha@gmail.com;obecsucha@zoznam.sk'];
  o['00319589'] = ['Obecný úrad', '', 'Sucháň', '82', '991 35', 'Dačov Lom', 'obec.suchan@inmail.sk'];
  o['00325848'] = ['Obecný úrad', '', 'Suché', '150', '071 01', 'Michalovce', 'suche@minet.sk'];
  o['00648311'] = ['Obecný úrad', '', 'Suché Brezovo', '66', '991 03', 'Pôtor', 'brezovo@procomp.sk'];
  o['00649082'] = ['Obecný úrad', '', 'Súdovce', '113', '962 71', 'Dudince', 'obecsudovce@zoznam.sk'];
  o['00305090'] = ['Obecný úrad', '', 'Suchohrad', '140', '900 64', 'Suchohrad', 'obec.suchohrad@radiolan.sk'];
  o['00649091'] = ['Obecný úrad', '', 'Sudince', '27', '962 69', 'Lišov', ''];
  o['00316938'] = ['Obecný úrad', '', 'Námestie SNP', '31', '038 52', 'Sučany', 'sekretariat@sucany.sk'];
  o['00323616'] = ['Obecný úrad', '', '', '63', '067 02', 'Čabiny', 'obecnyurad@sukov.sk'];
  o['00330191'] = ['Obecný úrad', '', '', '99', '065 46', 'Malý Lipník', 'obecsulin@livenet.sk'];
  o['00311103'] = ['Obecný úrad', '', 'Súlovce', '177', '956 14', 'Oponice', 'obecsulovce@mail.t-com.sk'];
  o['00319082'] = ['Obecný úrad', '', 'Sútor', '34', '980 01', 'Rimavské Janovce', 'obecsutor@mail.t-com.sk'];
  o['00649635'] = ['Obecný úrad', '', 'Sušany', '87', '980 12', 'Hrnčiarske Zalužany', 'osusany@post.sk'];
  o['00321664'] = ['Obecný úrad', '', 'Svederník', '48', '013 32', 'Dlhé Pole', 'urad@svedernik.info'];
  o['00321656'] = ['Obecný úrad', '', 'Súľov - Hradná', '65', '013 52', 'Súľov - Hradná', 'urad@sulov-hradna.sk;sulov-hradna@stonline.sk'];
  o['00322628'] = ['Obecný úrad', '', '', '29', '086 02', 'Gaboltov', 'sverzov@sverzov.sk'];
  o['00692263'] = ['Obecný úrad', '', 'Sverepec', '215', '017 01', 'Považská Bystrica', 'obecsverepec@petranet.sk'];
  o['00323624'] = ['Obecný úrad', '', '', '60', '067 15', 'Svetlice', 'ousvetlice@in.slovanet.sk'];
  o['00331015'] = ['Obecný úrad', '', '', '19', '090 02', 'Kružlová', 'obec.svidnicka@centrum.sk'];
  o['00327760'] = ['Obecný úrad', '', 'Hlavná', '87/10', '082 32', 'Svinia', 'obecsvinia@stonline.sk'];
  o['00331023'] = ['Mestský úrad', '', 'Sovietskych hrdinov', '200/33', '089 01', 'Svidník', 'primator@svidnik.sk'];
  o['00324761'] = ['Obecný úrad', '', 'Svinica', '282', '044 45', 'Bidovce', 'obecsvinica@stonline.sk'];
  o['00331988'] = ['Obecný úrad', '', 'Hlavná', '75/3', '076 37', 'Rad', 'obec.svinice@pobox.sk'];
  o['00312011'] = ['Obecný úrad', '', 'Svinná', '141', '913 24', 'Svinná', 'podatelna@svinna.sk'];
  o['00326607'] = ['Mestský úrad', '', 'Hviezdoslavova', '269/33', '059 21', 'Svit', 'msu@svit.sk'];
  o['00309281'] = ['Obecný úrad', '', 'Hlavná', '1117/1', '943 54', 'Svodín', 'svodin@svodin.sk'];
  o['00800066'] = ['Obecný úrad', '', 'Svrbice', '25', '956 06', 'Šalgovce', 'ousvrbice@gmail.com'];
  o['00314323'] = ['Obecný úrad', '', 'Ústredie', '858', '023 12', 'Svrčinovec', 'obec@svrcinovec.sk'];
  o['00331325'] = ['Obecný úrad', '', '', '29', '076 35', 'Somotor', 'svata.maria@zoznam.sk;palfolde@inmail.sk'];
  o['00611191'] = ['Obecný úrad', '', 'Hlavná', '76', '951 16', 'Svätoplukovo', 'obecsvatoplukovo@stonline.sk'];
  o['00331830'] = ['Obecný úrad', '', 'Kvetná', '2', '076 83', 'Svätuše', 'obecsvatuse@stonline.sk'];
  o['00325856'] = ['Obecný úrad', '', '', '72', '072 55', 'Porostov', 'starostasvatus@centrum.sk'];
  o['00320471'] = ['Obecný úrad', '', 'Svätý Anton', '34', '969 72', 'Svätý Anton', 'ocu@svatyanton.sk'];
  o['00304832'] = ['Mestský úrad', '', 'Prostredná', '29', '900 21', 'Svätý Jur', 'msu@svatyjur.sk'];
  o['00308501'] = ['Obecný úrad', '', 'Tajná', '3', '952 01', 'Vráble', 'ou-tajna@slovanet.sk'];
  o['00306436'] = ['Obecný úrad', '', 'Hlavná', '2', '964 57', 'Svätý Peter', 'podatelna@svatypeter.eu'];
  o['00315508'] = ['Obecný úrad', '', 'Svätý Kríž', '152', '032 11', 'Svätý Kríž', 'ousvatykriz@alconet.sk'];
  o['00649732'] = ['Obecný úrad', '', 'Tachty', '152', '980 34', 'Nová Bašta', 'obec@tachty.eu;obectachty@post.sk'];
  o['00308447'] = ['Obecný úrad', '', 'Dlhá', '90', '951 71', 'Sľažany', 'obecslazany@stonline.sk'];
  o['00320331'] = ['Obecný úrad', '', 'Tŕnie', '97', '962 34', 'Tŕnie', 'obectrnie@gmail.com;obectrnie@mail.t-com.sk'];
  o['00322661'] = ['Obecný úrad', '', '', '6', '086 01', 'Rokytov', 'ou@tarnov.sk'];
  o['00313882'] = ['Obecný úrad', '', 'Tajov', '79', '976 34', 'Tajov', 'obec.tajov@stonline.sk'];
  o['00325872'] = ['Obecný úrad', '', '', '43', '072 52', 'Jenkovce', 'ocutasula@centrum.sk'];
  o['31946801'] = ['Obecný úrad', '', '', '33', '059 56', 'Tatranská Javorina', 'obecnyurad@tjavorina.eu'];
  o['00682179'] = ['Obecný úrad', '', 'Tekolďany', '30', '920 62', 'Horné Otrokovce', 'obectekoldany@zoznam.sk'];
  o['00587613'] = ['Obecný úrad', '', 'Tehla', '88', '935 35', 'Tehla', 'obectehla@obectehla.sk;obectehla@stonline.sk'];
  o['00321044'] = ['Obecný úrad', '', 'Tekovská', '405', '966 54', 'Tekovské Nemce', 'tnemce@stonline.sk'];
  o['00307548'] = ['Obecný úrad', '', 'SNP', '43', '935 41', 'Tekovské Lužany', 'tekluzany@gmail.com;luzany@nextra.sk'];
  o['00321036'] = ['Obecný úrad', '', 'Tekovská Breznica', '566', '966 52', 'Tekovská Breznica', 'ocutbreznica@stonline.sk'];
  o['00313874'] = ['Obecný úrad', '', 'Telgárt', '70', '976 73', 'Telgárt', 'obec@telgart.eu.sk;obutelgart@stonline.sk'];
  o['00800333'] = ['Obecný úrad', '', 'Tekovský Hrádok', '125', '935 51', 'Tekovský Hrádok', 'sekretariat@tekovskyhradok.sk'];
  o['00611204'] = ['Obecný úrad', '', 'Telince', '105', '951 61', 'Čifáre', 'obec@telince.sk'];
  o['00329690'] = ['Obecný úrad', '', '', '83', '052 01', 'Teplička', 'teplicka@teplicka.sk'];
  o['00318515'] = ['Obecný úrad', '', 'Temeš', '140', '972 29', 'Čavoj', 'obec.temes@centrum.sk'];
  o['00648264'] = ['Obecný úrad', '', 'Nám. sv. Floriána', '290/2', '013 01', 'Teplička nad Váhom', 'sekretariat@teplickanadvahom.sk'];
  o['00682161'] = ['Obecný úrad', '', 'Tepličky', '57', '920 66', 'Horné Trhovište', 'obec.teplicky@stonline.sk'];
  o['00319147'] = ['Obecný úrad', '', 'Teplý Vrch', '80', '980 23', 'Teplý Vrch', 'outv@rsnet.sk'];
  o['00320323'] = ['Obecný úrad', '', 'Terany', '116', '962 68', 'Hontianske Tesáre', 'obecterany@obecterany.sk'];
  o['00321699'] = ['Obecný úrad', '', 'Sv. Cyrila a Metoda', '96', '013 06', 'Terchová', 'terchova@terchova.sk'];
  o['00327859'] = ['Obecný úrad', '', '', '54', '080 05', 'Prešov - Solivar', 'obec@teriakovce.sk'];
  o['00327867'] = ['Obecný úrad', '', 'Hlavná', '119/58', '082 67', 'Terňa', 'obec@terna.sk'];
  o['00311146'] = ['Obecný úrad', '', 'Tesáre', '128', '956 21', 'Jacovce', 'sekretariat@tesare.sk'];
  o['00308528'] = ['Obecný úrad', '', 'Hlavná', '647/96', '951 76', 'Tesárske Mlyňany', 'tesarskemlynany@zoznam.sk'];
  o['00306215'] = ['Obecný úrad', '', 'Žiharecká', '860', '925 82', 'Tešedíkovo', 'tesedikovo@tesedikovo.sk'];
  o['00331082'] = ['Obecný úrad', '', '', '1', '091 01', 'Stropkov', 'obec.tisinec@centrum.sk'];
  o['00325881'] = ['Obecný úrad', '', '', '131', '073 01', 'Sobrance', 'ocu.tibava@lekosonline.sk'];
  o['00327875'] = ['Obecný úrad', '', '', '139', '082 74', 'Brezovica nad Torysou', 'obectp@gmail.com'];
  o['00311154'] = ['Obecný úrad', '', 'Timoradza', '1', '956 52', 'Podlužany pri Bánovciach nad Bebravou', 'ocutimo@gmail.com'];
  o['00319155'] = ['Mestský úrad', '', 'Námestie Dr. Vl. Clementisa', '1', '980 61', 'Tisovec', 'katarina.meskova@tisovec.com;denisa.maniova@tisovec.com;peter.minac@tisovec.com;info@tisovec.com'];
  o['00307581'] = ['Mestský úrad', '', 'Nám. odborárov', '10', '935 21', 'Tlmače', 'podatelna@mestotlmace.sk'];
  o['00316466'] = ['Obecný úrad', '', 'Točnica', '113', '985 22', 'Cinobaňa', 'obec.tocnica@stonline.sk'];
  o['00331091'] = ['Obecný úrad', '', '', '45', '090 34', 'Tokajík', 'obectokajik@post.sk'];
  o['00306223'] = ['Obecný úrad', '', 'Hlavná', '319', '925 04', 'Tomášikovo', 'obec@tomasikovo.sk'];
  o['00305120'] = ['Obecný úrad', '', '1. mája', '5', '900 44', 'Tomášov', 'tomasov@tomasov.sk;obec@tomasov.sk'];
  o['00316474'] = ['Obecný úrad', '', 'Partizánska', '132', '985 56', 'Tomášovce', 'obec@tomasovce.sk'];
  o['00649503'] = ['Obecný úrad', '', 'Tomášovce', '55', '980 21', 'Bátka', 'ou.tomasovce@gmail.com'];
  o['00306690'] = ['Obecný úrad', '', 'Bratislavská cesta', '132/8', '94615', 'Tôň', 'obecton@internet.sk'];
  o['00326631'] = ['Obecný úrad', '', 'Hlavná', '66', '059 95', 'Toporec', 'outoporec@slnet.sk'];
  o['00323641'] = ['Obecný úrad', '', '', '95', '067 65', 'Topoľa', 'obectopola@stonline.sk'];
  o['00306231'] = ['Obecný úrad', '', 'Topoľnica', '13', '925 92', 'Kajal', 'topolnica@topolnica.sk'];
  o['00311162'] = ['Mestský úrad', '', 'Nám. M. R. Štefánika', '1/1', '955 01', 'Topoľčany', 'topolcany@topolcany.sk'];
  o['00308536'] = ['Obecný úrad', '', 'Hlavná', '114', '951 93', 'Topoľčianky', 'topolcianky@topolcianky.sk;obectopolcianky@topolcianky.sk'];
  o['00327883'] = ['Obecný úrad', '', '', '28', '082 76', 'Torysa', 'ou.torysa@stonline.sk'];
  o['00305740'] = ['Obecný úrad', '', 'Hlavná ulica', '126', '930 11', 'Topoľníky', 'bacso@topolniky.sk;web@topolniky.sk'];
  o['00319091'] = ['Mestský úrad', '', 'Mierová', '14', '982 01', 'Tornaľa', 'msutornala@stonline.sk'];
  o['00323659'] = ['Obecný úrad', '', '', '194', '067 45', 'Topoľovka', 'topolovka@wmx.sk;topolovka@in.slovanet.sk'];
  o['00329703'] = ['Obecný úrad', '', '', '20', '053 72', 'Torysky', 'obectorysky@stonline.sk'];
  o['00332895'] = ['Obecný úrad', '', 'Tovarnianska Polianka', '25', '094 01', 'Tovarné', 'info@tovarnianskapolianka.sk'];
  o['00332887'] = ['Obecný úrad', '', '', '4', '094 01', 'Tovarné', 'ocu.tovarne@mail.t-com.sk'];
  o['00313092'] = ['Obecný úrad', '', 'Trakovice', '38', '919 33', 'Trakovice', 'obec@trakovice.sk'];
  o['31872638'] = ['Obecný úrad', '', 'Obrancov mieru', '82/5', '955 01', 'Topoľčany', 'tovarniky@tovarniky.eu'];
  o['00309320'] = ['Obecný úrad', '', 'Trávnica', '37/65', '941 46', 'Trávnica', 'obec.travnica@gmail.com'];
  o['00306681'] = ['Obecný úrad', '', 'Trávnik', '50', '946 19', 'Číčov', 'obec.travnik@stonline.sk'];
  o['00313106'] = ['Obecný úrad', '', 'Trebatice', '247/107', '922 10', 'Trebatice', 'starosta@trebatice.sk'];
  o['00324809'] = ['Obecný úrad', '', 'Trebejov', '68', '044 81', 'Kysak', 'obecnyurad@trebejov.com'];
  o['00316491'] = ['Obecný úrad', '', 'Trebeľovce', '109', '985 31', 'Rapovce', 'obectrebelovce@dkn.sk'];
  o['00331996'] = ['Mestský úrad', '', 'M. R. Štefánika', '862/204', '075 01', 'Trebišov', 'trebisov@trebisov.sk'];
  o['00800082'] = ['Obecný úrad', '', 'Trebichava', '123', '956 53', 'Slatina nad Bebravou', 'trebichava@trebichava.sk'];
  o['00316954'] = ['Obecný úrad', '', 'Trebostovo', '113/2', '038 41', 'Košťany nad Turcom', 'trebostovo@trebostovo.sk'];
  o['00647616'] = ['Obecný úrad', '', 'Trebušovce', '33', '991 27', 'Kamenné Kosihy', 'trebusovce@trebusovce.sk;obectrebusovce@azet.sk'];
  o['00647349'] = ['Obecný úrad', '', 'Trenč', '11', '985 32', 'Veľká nad Ipľom', 'trenc@lucenec.net'];
  o['00312053'] = ['Obecný úrad', '', 'Bánovská', '86', '913 21', 'Trenčianska Turná', 'sekretariat@trencianskaturna.sk'];
  o['00312045'] = ['Obecný úrad', '', 'M. R. Štefánika', '376/30', '914 01', 'Trenčianská Teplá', 'obecnyurad@trencianskatepla.sk'];
  o['00312061'] = ['Obecný úrad', '', 'Trenčianske Bohuslavice', '135', '913 06', 'Trenčianske Bohuslavice', 'obec@trencianskebohuslavice.sk'];
  o['00312070'] = ['Obecný úrad', '', 'Trenčianske Jastrabie', '102', '913 22', 'Trenčianske Jastrabie', 'outjastrab@stonline.sk'];
  o['00312100'] = ['Obecný úrad', '', 'Trenčianske Stankovce', '362', '913 11', 'Trenčianske Stankovce', 'obectrenc.stankovce@stonline.sk;obectrenc.stankovce@stonline.sk'];
  o['00312096'] = ['Obecný úrad', '', 'Trenčianske Mitice', '164', '913 22', 'Trenčianske Jastrabie', 'podatelna@trencianskemitice.sk'];
  o['00312037'] = ['Mestský úrad', '', 'Mierové Námestie', '2', '911 64', 'Trenčín', 'trencin@trencin.sk;msu@trencin.sk'];
  o['00312088'] = ['Mestský úrad', '', 'M.R.Štefánika', '4', '914 51', 'Trenčianske Teplice', 'sekretariat@teplice.sk'];
  o['00305766'] = ['Obecný úrad', '', 'Farský rad', '488/1', '930 13', 'Trhová Hradská', 'ocutrhovahradska@real-net.sk'];
  o['00325899'] = ['Obecný úrad', '', 'Trhovište', '121', '072 04', 'Trhovište', 'obectrhoviste@stonline.sk'];
  o['00321052'] = ['Obecný úrad', '', 'Trnavá Hora', '229', '966 11', 'Trnavá Hora', 'podatelna@trnavahora.sk'];
  o['00313114'] = ['Mestský úrad', '', 'Trhová', '3', '917 71', 'Trnava', 'vladimir.butko@trnava.sk;info@trnava.sk'];
  o['00325902'] = ['Obecný úrad', '', 'Trnava pri Laborci', '163', '072 31', 'Vinné', 'ocu@trnavaprilaborci.sk'];
  o['00332011'] = ['Obecný úrad', '', 'Sečovská', '82/4', '078 01', 'Sečovce', 'obectrnavka@pobox.sk'];
  o['00310085'] = ['Obecný úrad', '', 'Trnovec', '66', '908 51', 'Holíč', 'trnovec@ehs.sk'];
  o['00305774'] = ['Obecný úrad', '', 'Trnávka', '168', '930 32', 'Blatná na Ostrove', 'koleszarova@obectrnavka.sk;herbergerova@obectrnavka.sk;imre.toth@obectrnavka.sk;trnavka.ocu@centrum.sk'];
  o['00327891'] = ['Obecný úrad', '', '', '42', '082 12', 'Kapušany pri Prešove', 'ocu.trnkov@centrum.sk'];
  o['00306240'] = ['Obecný úrad', '', 'Hlavná', '587', '925 71', 'Trnovec nad Váhom', 'obec@trnovecnadvahom.sk'];
  o['00692531'] = ['Obecný úrad', '', 'Trnovo', '37', '038 41', 'Košťany nad Turcom', 'trnovo@stonline.sk'];
  o['00322679'] = ['Obecný úrad', '', '', '22', '086 41', 'Raslavice', 'obectrocany@gmail.com;trocanyobec@centrum.sk'];
  o['00648167'] = ['Obecný úrad', '', 'Trpín', '', '962 44', 'Litava', 'obectrpin@centrum.sk'];
  o['00314897'] = ['Mestský úrad', '', 'Bernolákova', '96/8', '028 01', 'Trstená', 'sekretariat@trstena.sk'];
  o['00305782'] = ['Obecný úrad', '', 'Trstená na Ostrove', '197', '930 04', 'Baka', 'ocutrstenano@stonline.sk'];
  o['00306258'] = ['Obecný úrad', '', 'Trstice', '667', '925 42', 'Trstice', 'obec@trstice.sk'];
  o['00315796'] = ['Obecný úrad', '', 'Trstené', '52', '032 21', 'Bobrovec', 'obectrstene@stonline.sk'];
  o['00324817'] = ['Obecný úrad', '', 'Osloboditeľov', '118', '044 11', 'Ždaňa', 'trstene@mail.t-com.sk'];
  o['00313122'] = ['Obecný úrad', '', 'Trstín', '95', '919 05', 'Trstín', 'dane@trstin.sk;ekonom@trstin.sk'];
  o['00324825'] = ['Obecný úrad', '', '', '20', '044 45', 'Bidovce', 'obectrstany@gmail.com'];
  o['00317837'] = ['Obecný úrad', '', 'Tuchyňa', '205', '018 55', 'Tuchyňa', 'ocu.tuchyna@slovanet.sk'];
  o['00316482'] = ['Obecný úrad', '', 'Tuhár', '56', '985 12', 'Tuhár', 'obecnyurad@tuhar.sk'];
  o['00327905'] = ['Obecný úrad', '', '', '70', '082 07', 'Tuhrina', 'obectuhrina@gmail.com'];
  o['00327913'] = ['Obecný úrad', '', '', '178', '082 13', 'Tulčík', 'obec@tulcik.sk'];
  o['00307599'] = ['Obecný úrad', '', 'Tupá', '113', '935 84', 'Horné Semerovce', 'obec.tupa.starosta@gmail.com'];
  o['00307602'] = ['Obecný úrad', '', 'Turá', '78', '935 51', 'Tekovský Hrádok', 'obectura@mail.t-com.sk'];
  o['00316962'] = ['Obecný úrad', '', 'Ul. Osloboditeľov', '83/91', '038 53', 'Turany', 'obecturany@centrum.sk;obecturany@nextra.sk'];
  o['00331104'] = ['Obecný úrad', '', '', '100', '090 33', 'Turany nad Ondavou', 'obecturany@zoznam.sk'];
  o['00648183'] = ['Obecný úrad', '', 'Turecká', '341', '976 02', 'Staré Hory', 'turcanova@obecturecka.sk;info@obecturecka.sk'];
  o['00323667'] = ['Obecný úrad', '', '', '35', '067 23', 'Baškovce', 'outurcovce@gmail.com'];
  o['00317012'] = ['Obecný úrad', '', 'Turček', '123', '038 48', 'Turček', 'obecnyuradturcek@stonline.sk'];
  o['00800091'] = ['Obecný úrad', '', 'Turčianky', '59', '958 44', 'Klátova Nová Ves', 'turcianky@gmail.com'];
  o['00316679'] = ['Obecný úrad', '', 'Turčianske Jaseno', '24', '038 02', 'Turčianske Jaseno', 'obecjaseno@gaya.sk'];
  o['00316997'] = ['Obecný úrad', '', 'Jána Kostru', '92/76', '038 51', 'Turčianska Štiavnička', 'obecturstiavnicka@stonline.sk'];
  o['00316971'] = ['Obecný úrad', '', 'Turčianske Kľačany', '179', '038 61', 'Vrútky', 'tklacany@centrum.sk'];
  o['00317004'] = ['Mestský úrad', '', 'Partizánska', '413/1', '039 01', 'Turčianske Teplice', 'podatelna@turciansketeplice.sk'];
  o['00649139'] = ['Obecný úrad', '', 'Turčiansky Ďur', '6', '038 43', 'Kláštor pod Znievom', 'obecturcianskydur@centrum.sk'];
  o['00648060'] = ['Obecný úrad', '', 'Hlavná', '214', '013 12', 'Turie', 'obecturie@rajec.net'];
  o['00305138'] = ['Obecný úrad', '', 'Tureň', '36', '903 01', 'Senec', 'obec@turen.sk'];
  o['00316989'] = ['Obecný úrad', '', 'Turčiansky Peter', '2', '038 41', 'Košťany nad Turcom', 'ocu.turc.peter@gaya.sk'];
  o['00328880'] = ['Obecný úrad', '', 'Turčok', '2', '049 18', 'Lubeník', 'obec.turcok@mail.t-com.sk'];
  o['00691313'] = ['Obecný úrad', '', 'Moldavská cesta', '419/49', '044 02', 'Turňa nad Bodvou', 'turna@mail.t-com.sk'];
  o['00590649'] = ['Obecný úrad', '', 'Turík', '19', '034 83', 'Liptovská Teplá', 'turik@centrum.sk'];
  o['00320358'] = ['Obecný úrad', '', 'Turová', '110', '962 36', 'Tŕnie', 'outurova@stonline.sk'];
  o['00324531'] = ['Obecný úrad', '', '', '84', '044 02', 'Turňa nad Bodvou', 'turnianskanovaves@centrum.sk'];
  o['00314331'] = ['Mestský úrad', '', 'Jašíkova', '178', '023 54', 'Turzovka', 'msu@turzovka.sk'];
  o['00318523'] = ['Obecný úrad', '', 'Tužina', '75', '972 14', 'Tužina', 'tuzina@stonline.sk;obec@tuzina.sk'];
  o['00325929'] = ['Obecný úrad', '', 'Tušická Nová Ves', '167', '072 02', 'Tušická Nová Ves', 'starosta@tusickanovaves.sk'];
  o['00325911'] = ['Obecný úrad', '', 'Tušice', '130', '072 02', 'Tušická Nová Ves', 'ocutusice@stonline.sk'];
  o['00314901'] = ['Mestský úrad', '', 'Trojičné námestie', '185/2', '027 44', 'Tvrdošín', 'tvrdosin@tvrdosin.sk'];
  o['00800104'] = ['Obecný úrad', '', 'Tvrdomestice', '42', '956 22', 'Prašice', 'obectvrdomestice@mail.t-com.sk'];
  o['00326640'] = ['Obecný úrad', '', '', '27', '059 71', 'Ľubica', 'obectvarozna@ocu.sk'];
  o['00325937'] = ['Obecný úrad', '', '', '169', '072 42', 'Úbrež', 'obecubrez@minet.sk'];
  o['00309338'] = ['Obecný úrad', '', 'Novozámocka', '56', '941 10', 'Tvrdošovce', 'starosta@tvrdosovce.sk'];
  o['00323675'] = ['Obecný úrad', '', '', '368', '067 73', 'Snina', 'obecubla@lekosonline.sk;obecubla@stonline.sk'];
  o['00323683'] = ['Obecný úrad', '', '', '30', '067 31', 'Udavské', 'obec@udavske.sk'];
  o['00330221'] = ['Obecný úrad', '', 'Údol', '2', '065 45', 'Plavnica', 'info@udol.sk;obecudol@gmail.com'];
  o['00317853'] = ['Obecný úrad', '', 'Udiča', '302', '018 01', 'Udiča', 'obecudica@zoznam.sk'];
  o['00315818'] = ['Obecný úrad', '', 'Stará', '53', '032 03', 'Liptovský Ján', 'ouuhorskaves@alconet.sk'];
  o['00587621'] = ['Obecný úrad', '', 'Uhliská', '104', '935 05', 'Pukanec', 'ocu.uhliska@fayn.sk'];
  o['00329711'] = ['Obecný úrad', '', '', '29', '055 67', 'Úhorná', 'obec@uhorna.sk'];
  o['00316504'] = ['Obecný úrad', '', 'Uhorské', '8', '985 25', 'Uhorské', 'obec.uhorske@ma-net.sk'];
  o['00800121'] = ['Obecný úrad', '', 'Uhrovské Podhradie', '20', '956 42', 'Žitná-Radiša', ''];
  o['00311201'] = ['Obecný úrad', '', 'SNP', '86/7', '956 41', 'Uhrovec', 'sekretariat@uhrovec.sk'];
  o['00323691'] = ['Obecný úrad', '', '', '89', '067 67', 'Ulič', 'obeculic@stonline.sk'];
  o['00323705'] = ['Obecný úrad', '', '', '45', '067 67', 'Uličské Krivé', 'obec.ulickrive@makoba.sk'];
  o['00329720'] = ['Obecný úrad', '', 'Uloža', '76', '053 71', 'Vyšné Repaše', 'uloza@uloza.sk'];
  o['00311227'] = ['Obecný úrad', '', 'Urmince', '493', '956 02', 'Urmince', 'obec@urmince.sk'];
  o['00310107'] = ['Obecný úrad', '', 'Unín', '332', '908 46', 'Unín', 'obuunin@ehs.sk'];
  o['00648949'] = ['Obecný úrad', '', 'Uňatín', '49', '962 41', 'Bzovík', 'obec.unatin@azet.sk'];
  o['17067430'] = ['Obecný úrad', '', 'Utekáč', '848/52', '985 06', 'Utekáč', 'obecutekac@stonline.sk'];
  o['00327921'] = ['Obecný úrad', '', '', '136', '082 66', 'Uzovce', 'ocuuzovce@zoznam.sk'];
  o['00800236'] = ['Obecný úrad', '', 'Hlavná', '51', '941 03', 'Uľany nad Žitavou', 'podatelna@ulanynadzitavou.sk'];
  o['00327948'] = ['Obecný úrad', '', '', '139', '082 61', 'Ražňany', 'uzovskysalgov@pobox.sk;uzovskysalgov@uzovskysalgov.sk'];
  o['00319163'] = ['Obecný úrad', '', 'Uzovská Panica', '95', '980 22', 'Velký Blh', 'ocuuzpanica@rsnet.sk'];
  o['00327930'] = ['Obecný úrad', '', '', '68', '082 62', 'Uzovské Pekľany', 'ocupeklany@gmail.com'];
  o['00325988'] = ['Obecný úrad', '', 'Vrbnica', '25', '072 16', 'Hatalov', 'obecvrbnica@centrum.sk'];
  o['00331112'] = ['Obecný úrad', '', '', '50', '090 03', 'Ladomirová', 'klimp@azet.sk'];
  o['00312126'] = ['Obecný úrad', '', 'Vaďovce', '1', '916 13', 'Kostolné', 'vadovce@stonline.sk'];
  o['00306266'] = ['Obecný úrad', '', 'Váhovce', '329', '925 62', 'Váhovce', 'obecvahovce@rejk-net.sk'];
  o['00324850'] = ['Obecný úrad', '', 'Poľná', '8', '044 13', 'Valaliky', 'petrik.stefan@valaliky.sk;obec@valaliky.sk'];
  o['00324841'] = ['Obecný úrad', '', 'Vajkovce', '84', '044 43', 'Budimír', 'obecvajkovce@netkosice.sk'];
  o['00313904'] = ['Obecný úrad', '', 'Námestie 1. mája', '460/8', '976 46', 'Valaská', 'podatelna@valaska.sk'];
  o['00315826'] = ['Obecný úrad', '', 'Valaská Dubová', '39', '034 96', 'Valaská Dubová', 'starosta@valaskadubova.sk'];
  o['00318531'] = ['Obecný úrad', '', 'Valaská Belá', '1', '972 28', 'Valaská Belá', 'podatelna@valaskabela.sk'];
  o['00317021'] = ['Obecný úrad', '', 'Valča', '375', '038 35', 'Valča', 'ou.valca@centrum.sk'];
  o['00323713'] = ['Obecný úrad', '', '', '17', '067 01', 'Radvaň nad Laborcom', ''];
  o['00331139'] = ['Obecný úrad', '', '', '', '090 02', 'Kružlová', ''];
  o['00318922'] = ['Obecný úrad', '', 'Valice', '6', '982 52', 'Nižná Kaloša', 'obec.valice@gemernet.sk'];
  o['00331121'] = ['Obecný úrad', '', '', '62', '090 42', 'Okrúhle', 'valkovce@gmail.com;valkovce@zoznam.sk'];
  o['00595756'] = ['Obecný úrad', '', '', '38', '086 41', 'Raslavice', 'obecvaniskovce@zmail.sk'];
  o['00327956'] = ['Obecný úrad', '', '', '56', '082 05', 'Šarišské Bohdanovce', 'varhanovce@stonline.sk'];
  o['00322695'] = ['Obecný úrad', '', '', '34', '086 36', 'Nižná Polianka', 'chudikova.sylvia@gmail.com'];
  o['00321711'] = ['Obecný úrad', '', 'Nám. sv. Floriána', '1', '013 03', 'Varín', 'podatelna@varin.sk'];
  o['00331147'] = ['Obecný úrad', '', '', '62', '090 23', 'Havaj', 'hudakmilan@centrum.sk'];
  o['00314943'] = ['Obecný úrad', '', 'Vasiľov', '99', '029 51', 'Lokca', 'ouvasilov@orava.sk'];
  o['00314951'] = ['Obecný úrad', '', 'Vavrečka', '203', '029 01', 'Námestovo', 'ouvavrecka@orava.sk'];
  o['00332909'] = ['Obecný úrad', '', '', '2', '094 31', 'Hanušovce nad Topľou', 'htabakova@fo.pz.sk'];
  o['00315834'] = ['Obecný úrad', '', 'Vavrišovo', '40', '032 42', 'Vavrišovo', 'obec@vavrisovo.sk'];
  o['00315842'] = ['Obecný úrad', '', 'Na Harte', '19', '032 61', 'Važec', 'rastislav.profant@obecvazec.sk;obecvazec@stonline.sk'];
  o['00313912'] = ['Obecný úrad', '', 'Vaľkovňa', '73', '976 69', 'Pohorelá', 'obuvalkovna@stonline.sk'];
  o['00332925'] = ['Obecný úrad', '', 'Hlavná', '133', '094 12', 'Vechec', 'ocuvechec@stonline.sk'];
  o['00319171'] = ['Obecný úrad', '', 'Včelince', '134', '980 50', 'Včelince', 'ocuvcelince@stonline.sk'];
  o['00649741'] = ['Obecný úrad', '', 'Večelkov', '156', '980 34', 'Nová Bašta', 'obecvecelkov@post.sk'];
  o['00314960'] = ['Obecný úrad', '', 'Veličná', '162', '027 54', 'Veličná', 'obec@velicna.sk'];
  o['00326682'] = ['Obecný úrad', '', '', '171/65', '059 17', 'Vernár', 'urad@vernar.sk'];
  o['00800112'] = ['Obecný úrad', '', 'Mokra', '181', '955 01', 'Topoľčany', 'podatelna@velusovce.sk'];
  o['00313165'] = ['Obecný úrad', '', 'Veselé', '346', '922 08', 'Veselé', 'ocuvesele@stonline.sk'];
  o['00315869'] = ['Obecný úrad', '', 'Veterná Poruba', '37', '031 04', 'Liptovský Mikuláš', 'vetporuba@alconet.sk'];
  o['00308552'] = ['Obecný úrad', '', 'Veľká Dolina', '282', '951 15', 'Mojmírovce', 'podatelna.vd@gmail.com'];
  o['00308544'] = ['Obecný úrad', '', 'Hlavná', '73', '951 71', 'Sľažany', 'obecvelcice@stonline.sk'];
  o['00332020'] = ['Obecný úrad', '', 'Staničná', '8/2', '076 15', 'Veľaty', 'ocu@velaty.sk'];
  o['00319619'] = ['Obecný úrad', '', 'Veľká Čalomija', '214', '991 09', 'Veľká Čalomija', 'velkacalomija@velkacalomija.sk'];
  o['00318540'] = ['Obecný úrad', '', 'Veľká Čausa', '83', '971 01', 'Prievidza', 'velka_causa@stonline.sk'];
  o['00632724'] = ['Obecný úrad', '', 'Veľká Čierna', '75', '015 01', 'Rajec', 'obecvelkacierna@gmail.com'];
  o['00076597'] = ['Obecný úrad', '', '', '74', '059 78', 'Veľká Franková', 'obecv.frankova@neton.sk'];
  o['00312134'] = ['Obecný úrad', '', 'Veľká Hradná', '42', '913 24', 'Svinná', 'podatelna@velkahradna.sk'];
  o['00324868'] = ['Obecný úrad', '', '', '42', '044 55', 'Veľká Ida', 'ouvida@stonline.sk'];
  o['00321061'] = ['Obecný úrad', '', 'Veľká Lehota', '52', '966 41', 'Veľká Lehota', 'obecvelkalehota@nbsiet.sk'];
  o['00330230'] = ['Obecný úrad', '', '', '58', '065 34', 'Veľká Lesná', 'obecvelkalesna@slnet.sk'];
  o['00691321'] = ['Obecný úrad', '', '', '48', '044 81', 'Kysak', 'velkalodina@post.sk'];
  o['00326666'] = ['Obecný úrad', '', 'Tatranská', '175/23', '059 52', 'Veľká Lomnica', 'obec@velkalomnica.sk'];
  o['00356600'] = ['Obecný úrad', '', 'Veľkolúcka', '1219/39', '962 31', 'Sliač', 'obecnyurad@velkaluka.sk'];
  o['00306274'] = ['Obecný úrad', '', 'Sereďská', '137', '925 32', 'Veľká Mača', 'ocuvmaca@maxnet.sk'];
  o['00316539'] = ['Obecný úrad', '', 'Veľká nad Ipľom', '86', '985 32', 'Veľká nad Ipľom', 'podatelna@velkanadiplom.sk'];
  o['00305791'] = ['Obecný úrad', '', 'Veľká Paka', '189', '930 51', 'Veľká Paka', 'referent@velkapaka.sk;alexander.hunka@velkapaka.sk'];
  o['00332003'] = ['Obecný úrad', '', 'Hlavná', '122', '076 82', 'Veľká Tŕňa', 'obecvelkatrna@post.sk'];
  o['00312142'] = ['Obecný úrad', '', 'Veľké Bierovce', '24', '913 11', 'Trenčianske Stankovce', 'ocuvelkebierovce@nextra.sk'];
  o['00316521'] = ['Obecný úrad', '', 'Veľká Ves', '53', '985 01', 'Kalinovo', 'velkaves@stonline.sk'];
  o['00319627'] = ['Obecný úrad', '', 'Hlavná', '124', '991 10', 'Veľká Ves nad Ipľom', 'obecvelkavesnadiplom@gmail.com'];
  o['00305804'] = ['Obecný úrad', '', 'Veľké Blahovo', '72', '930 01', 'Veľké Blahovo', 'obec.velkeblahovo@stonline.sk'];
  o['00315851'] = ['Obecný úrad', '', 'Veľké Borové', '88', '027 32', 'Zuberec', 'velkeborove@orangemail.sk'];
  o['00311260'] = ['Obecný úrad', '', 'Veľké Chlievany', '80', '956 55', 'Veľké Chlievany', 'velkechlievany@velkechlievany.com;obecchlievany@slovanet.sk'];
  o['00613983'] = ['Obecný úrad', '', 'Veľké Chyndice', '50', '951 54', 'Malé Chyndice', 'ocu.vchyndice@gmail.com'];
  o['00316512'] = ['Obecný úrad', '', 'Školská', '240', '985 42', 'Veľké Dravce', 'obecvelkedravce@gmail.com'];
  o['00310417'] = ['Obecný úrad', '', 'Veľké Držkovce', '212', '956 54', 'Veľké Držkovce', 'obecvelkedrzkovce@gmail.com;obecdrzkovce@azet.sk'];
  o['00311243'] = ['Obecný úrad', '', 'Veľké Dvorany', '2', '956 01', 'Bojná', 'ouv.dvorany@centrum.sk'];
  o['00305375'] = ['Obecný úrad', '', 'Hlavná ulica', '190', '929 01', 'Veľké Dvorníky', 'jan.urogi@velkedvorniky.sk'];
  o['00311251'] = ['Obecný úrad', '', 'Veľké Hoste', '208', '956 40', 'Veľké Hoste', 'ocuvelkehoste@pbi.sk'];
  o['00332038'] = ['Mestský úrad', '', 'sídl. L. N. Tolstého', '1', '079 01', 'Veľké Kapušany', 'podatelna@vkapusany.sk'];
  o['00306703'] = ['Obecný úrad', '', 'Hlavná', '125', '946 21', 'Veľké Kosihy', 'obecnyurad@velkekosihy.sk'];
  o['00313149'] = ['Obecný úrad', '', 'M. R. Štefánika', '800/1', '922 07', 'Veľké Kostoľany', 'velkekostolany@velkekostolany.sk'];
  o['00311278'] = ['Obecný úrad', '', 'Veľké Kršteňany', '157', '958 03', 'Partizánske 3', 'velkekrstenany@stonline.sk'];
  o['34076743'] = ['Obecný úrad', '', 'Veľké Kozmálovce', '178', '935 21', 'Tlmače', 'podatelna@velkekozmalovce.sk'];
  o['00310115'] = ['Obecný úrad', '', 'Štefánikova', '747', '908 73', 'Veľké Leváre', 'ocuvl@levare.sk'];
  o['00309354'] = ['Obecný úrad', '', 'Veľké Lovce', '99', '941 42', 'Veľké Lovce', 'obecnyurad@velkelovce.sk'];
  o['00307637'] = ['Obecný úrad', '', 'Veľké Ludince', '136', '935 65', 'Veľké Ludince', 'obec@velkeludince.sk'];
  o['00654078'] = ['Obecný úrad', '', 'Hlavná', '17', '922 01', 'Ostrov', 'ou@velkeorviste.sk'];
  o['00332046'] = ['Obecný úrad', '', 'Hlavná', '264', '076 63', 'Veľké Ozorovce', 'ocuvozorovce@slovanet.sk'];
  o['00321079'] = ['Obecný úrad', '', 'Veľké Pole', '1', '966 74', 'Veľké Pole', 'velkepole@mistro.sk'];
  o['00332054'] = ['Obecný úrad', '', 'Veľké Raškovce', '112', '076 75', 'Oborín', 'ou@velkeraskovce.sk'];
  o['00311286'] = ['Obecný úrad', '', 'Poštová', '461', '956 07', 'Veľké Ripňany', 'vripnany@gmail.com;obec@velkeripnany.sk'];
  o['00325945'] = ['Obecný úrad', '', '', '25', '072 43', 'Veľké Revištia', 'velkerevistia@lekosonline.sk'];
  o['00321737'] = ['Obecný úrad', '', 'Veľké Rovné', '1621', '013 62', 'Veľké Rovné', 'rovne@velkerovne.sk'];
  o['00332062'] = ['Obecný úrad', '', 'Veľké Slemence', '106', '076 77', 'Ruská', 'slemence@post.sk'];
  o['17061741'] = ['Obecný úrad', '', 'Veľké Straciny', '13', '990 03', 'Veľký Krtíš', 'obec@velkestraciny.sk'];
  o['00332071'] = ['Obecný úrad', '', 'Rákoczi', '419', '076 42', 'Veľké Trakany', 'ou.vel.tr@stonline.sk'];
  o['00307653'] = ['Obecný úrad', '', 'Veľké Turovce', '321', '935 81', 'Horné Turovce', 'info@velketurovce.sk'];
  o['00319180'] = ['Obecný úrad', '', 'Veľké Teriakovce', '54', '980 51', 'Veľké Teriakovce', 'v.teriakovce@zoznam.sk'];
  o['00311294'] = ['Obecný úrad', '', 'Veľké Uherce', '360', '958 41', 'Veľké Uherce', 'obecvelkeuherce@velkeuherce.sk'];
  o['00308595'] = ['Obecný úrad', '', 'Obecná', '955', '951 35', 'Veľké Zálužie', 'ou@velkezaluzie.eu'];
  o['00305146'] = ['Obecný úrad', '', 'Železničná', '76', '900 24', 'Veľký Biel', 'ouvb@nextra.sk'];
  o['00306282'] = ['Obecný úrad', '', 'Hlavná', '578', '925 22', 'Veľké Úľany', 'ocuvelkeulany@stonline.sk'];
  o['00319643'] = ['Obecný úrad', '', 'Veľké Zlievce', '127', '991 23', 'Veľké Zlievce', 'obecvelkezlievce@mail.t-com.sk'];
  o['00611212'] = ['Obecný úrad', '', 'Veľké Vozokany', '200', '951 82', 'Malé Vozokany', 'ou-velkevozokany@slovanet.sk'];
  o['00331155'] = ['Obecný úrad', '', '', '23', '091 01', 'Stropkov', 'obecvelkrop@gmail.com'];
  o['00319198'] = ['Obecný úrad', '', 'Veľký Blh', '345', '980 22', 'Veľký Blh', 'ouvelkyblh@mail.t-com.sk'];
  o['00308609'] = ['Obecný úrad', '', 'Kostolná', '1', '951 05', 'Veľký Cetín', 'obecnyurad@velkycetin.sk'];
  o['00648817'] = ['Obecný úrad', '', 'Veľký Čepčín', '12', '038 45', 'Malý Čepčín', 'sekretariat@velkycepcin.sk'];
  o['00329738'] = ['Obecný úrad', '', '', '334', '055 51', 'Veľký Folkmar', 'obecvelkyfolkmar@stonline.sk'];
  o['00306291'] = ['Obecný úrad', '', 'Veľký Grob', '272', '925 27', 'Veľký Grob', 'obecnyuradvelkygrob@stonline.sk'];
  o['00311308'] = ['Obecný úrad', '', 'Veľký Klíž', '156', '958 45', 'Veľký Klíž', 'ocu.velkykliz@wircom.sk'];
  o['00332089'] = ['Obecný úrad', '', 'Družstevná', '333/2', '076 52', 'Veľký Horeš', 'zolopal@gmail.com;velkyhores@gmail.com'];
  o['00319651'] = ['Mestský úrad', '', 'J. A. Komenského', '3', '990 01', 'Veľký Krtíš', 'mesto@velky-krtis.sk'];
  o['00307645'] = ['Obecný úrad', '', 'Hlavná', '80', '935 34', 'Veľký Ďur', 'obec.velkydur@stonline.sk'];
  o['00332097'] = ['Obecný úrad', '', '', '255', '076 36', 'Veľký Kamenec', 'kamenec@post.sk'];
  o['00309109'] = ['Obecný úrad', '', 'Námestie Svätého Jána', '1', '941 07', 'Veľký Kýr', 'sekretariat@velkykyr.sk'];
  o['00308145'] = ['Obecný úrad', '', 'Veľký Lapáš', '488', '951 04', 'Veľký Lapáš', 'obecnyurad@velkylapas.sk'];
  o['00326674'] = ['Obecný úrad', '', 'Kapitána Morávku', '118', '059 91', 'Veľký Slavkov', 'obec@velkyslavkov.sk'];
  o['00319660'] = ['Obecný úrad', '', 'Veľký Lom', '42', '991 03', 'Pôtor', 'velkylom@gmail.com'];
  o['00330248'] = ['Obecný úrad', '', '', '283', '065 33', 'Veľký Lipník', 'obec@velkylipnik.sk'];
  o['00305332'] = ['Mestský úrad', '', 'Komárňanská', '207/9', '932 01', 'Veľký Meder', 'msu-sekretariat@velkymeder.sk'];
  o['00690571'] = ['Obecný úrad', '', '', '82', '082 67', 'Terňa', 'velkyslivnik@gmail.com;velkyslivnik@zoznam.sk'];
  o['00327972'] = ['Mestský úrad', '', 'Námestie sv. Jakuba', '1', '082 21', 'Veľký Šariš', 'primator@velkysaris.sk'];
  o['00655481'] = ['Obecný úrad', '', 'Hlavná', '167', '930 02', 'Orechová Potôň', 'obecvieska@stonline.sk'];
  o['00323748'] = ['Obecný úrad', '', '', '78', '067 31', 'Udavské', 'obec.velopolie@stonline.sk'];
  o['00649775'] = ['Obecný úrad', '', 'Vieska nad Blhom', '10', '980 21', 'Bátka', 'vieskanadblhom@centrum.sk'];
  o['00649031'] = ['Obecný úrad', '', 'Športová', '1', '985 59', 'Vidiná', 'obec@vidina.sk'];
  o['00650749'] = ['Obecný úrad', '', 'Vieska', '38', '991 02', 'Dolná Strehová', 'vieska@stonline.sk'];
  o['00320391'] = ['Obecný úrad', '', 'Vígľašská Huta-Kalinka', '73', '962 25', 'Slatinské Lazy', 'obecvhk@celeritas.sk'];
  o['00308617'] = ['Obecný úrad', '', 'Vieska nad Žitavou', '64', '951 52', 'Slepčany', 'vieskanz@zoznam.sk'];
  o['00320382'] = ['Obecný úrad', '', 'Zvolenská', '1', '962 02', 'Vígľaš', 'sekretariat@viglas.net'];
  o['00326691'] = ['Obecný úrad', '', '', '159', '059 19', 'Vikartovce', 'obecvikartovce@lj.sk'];
  o['00305154'] = ['Obecný úrad', '', 'Hlavná', '209/206', '900 23', 'Viničné', 'obecnyurad@vinicne.sk'];
  o['00332101'] = ['Obecný úrad', '', 'Tokajská', '191/5', '076 31', 'Streda nad Bodrogom', 'obecvinicky@kid.sk'];
  o['00319678'] = ['Obecný úrad', '', 'Cesta slobody', '466/44', '991 28', 'Vinica', 'obec@vinica.sk'];
  o['00325953'] = ['Obecný úrad', '', 'Vinné', '508', '072 31', 'Vinné', 'vinne@vinne.sk'];
  o['00308625'] = ['Obecný úrad', '', 'Vinodol', '473/29', '951 06', 'Vinodol', 'obecvinodol@stonline.sk'];
  o['00306304'] = ['Obecný úrad', '', 'Hulácka', '355', '925 55', 'Vinohrady nad Váhom', 'podatelna@vinohradynadvahom.eu'];
  o['00305162'] = ['Obecný úrad', '', 'Pezinská', '95', '902 01', 'Pezinok', 'spravne@vinosady.sk'];
  o['00330256'] = ['Obecný úrad', '', '', '28', '065 41', 'Ľubotín', 'obecvislanka@mail.t-com.sk'];
  o['00612138'] = ['Obecný úrad', '', 'Hlavná', '47', '946 38', 'Radvaň nad Dunajom', 'ouvirt@stonline.sk'];
  o['00331163'] = ['Obecný úrad', '', '', '61', '090 21', 'Chotča', 'vislava@post.sk;vislava@centrum.sk'];
  o['00317888'] = ['Obecný úrad', '', 'Visolaje', '40', '018 61', 'Beluša', 'obec.visolaje@petranet.sk'];
  o['00314978'] = ['Obecný úrad', '', 'Vitanová', '82', '027 12', 'Liesek', 'ouvitanova@orava.sk'];
  o['00329746'] = ['Obecný úrad', '', '', '100', '053 63', 'Spišský Hrušov', 'obecvitkovce@levonetmail.sk'];
  o['00332119'] = ['Obecný úrad', '', 'Hlavná', '71/22', '076 61', 'Bačkov', 'obec.visnov@azet.sk'];
  o['00650161'] = ['Obecný úrad', '', 'Višňové', '33', '982 63', 'Skerešovo', 'obec@obec-visnove.sk;obecvisnove@zoznam.sk'];
  o['00648078'] = ['Obecný úrad', '', 'Višňové', '556', '013 23', 'Višňové', 'marta.brezovska@visnove.sk;urad@visnove.sk'];
  o['00312151'] = ['Obecný úrad', '', 'Višňové', '60', '916 15', 'Hrachovište', 'visnove@slovanet.sk'];
  o['00305171'] = ['Obecný úrad', '', 'Hlavná', '353', '900 85', 'Vištuk', 'vistuk@vistuk.sk'];
  o['00327981'] = ['Obecný úrad', '', '', '111', '082 38', 'Víťaz', 'obecvitaz@szm.sk'];
  o['00323756'] = ['Obecný úrad', '', '', '90', '067 24', 'Lukačovce pri Humennom', 'ouvitazovce@gmail.com'];
  o['00328898'] = ['Obecný úrad', '', 'Letná', '71', '049 24', 'Vlachovo', 'obec@vlachovo.eu'];
  o['00315877'] = ['Obecný úrad', '', 'Vlachy', '126', '032 13', 'Vlašky', 'info@obecvlachy.sk'];
  o['00331171'] = ['Obecný úrad', '', '', '16', '090 23', 'Havaj', ''];
  o['00332917'] = ['Obecný úrad', '', '', '56', '094 31', 'Hanušovce nad Toplou', 'obecvlaca@gmail.com'];
  o['00306312'] = ['Obecný úrad', '', 'Hlavná', '1', '925 84', 'Vlčany', 'obecvlcany@stonline.sk'];
  o['00682209'] = ['Obecný úrad', '', 'Vlčkovce', '15', '919 23', 'Vlčkovce', 'obec.vlckovce@stonline.sk'];
  o['00648469'] = ['Obecný úrad', '', 'Matuškova', '53', '976 31', 'Vlkanová', 'obec@vlkanova.sk'];
  o['00800139'] = ['Obecný úrad', '', 'Vlkas', '157', '941 44', 'Hul', 'vlkas@stonline.sk'];
  o['00326704'] = ['Obecný úrad', '', '', '107', '059 72', 'Vrbov', 'obecvlkova@stonline.sk;obecvlkova@orangemail.sk'];
  o['00326712'] = ['Obecný úrad', '', '', '90', '059 71', 'Ľubica', 'vlkovce@sinet.sk'];
  o['00305189'] = ['Obecný úrad', '', 'Vlky', '83', '900 44', 'Tomášov', 'obecvlky@mail.t-com.sk'];
  o['00649660'] = ['Obecný úrad', '', 'Vlkyňa', '70', '980 44', 'Lenartovce', 'ocuvlkyna@zoznam.sk'];
  o['00313181'] = ['Obecný úrad', '', 'Voderady', '262', '919 42', 'Voderady', 'voderady@voderady.sk'];
  o['00332135'] = ['Obecný úrad', '', 'P. O. Hviezdoslava', '408', '076 22', 'Vojčice', 'vojcice3@gbs.eu.sk;vojcice2@gbs.eu.sk;vojcice1@gbs.eu.sk'];
  o['00332127'] = ['Obecný úrad', '', 'Vojany', '72', '076 72', 'Vojany', 'ouv@centrum.sk'];
  o['00332143'] = ['Obecný úrad', '', 'Hlavná', '84/26', '076 83', 'Svätuše', 'vojka@post.sk'];
  o['00305812'] = ['Obecný úrad', '', 'Vojka nad Dunajom', '150', '930 31', 'Vojka nad Dunajom', 'obecvojka@gmail.com'];
  o['00231088'] = ['Obecný úrad', '', '', '4', '059 02', 'Slovenská Ves', 'obec@vojnany.sk'];
  o['00325961'] = ['Obecný úrad', '', '', '124', '072 61', 'Porúbka', 'ocuvojnatina@minet.sk'];
  o['00329754'] = ['Obecný úrad', '', 'Vojkovce', '37', '053 61', 'Spišské Vlachy', 'obecvojkovce@gmail.com;obecvojkovce@stonline.sk'];
  o['00331180'] = ['Obecný úrad', '', '', '1', '091 01', 'Stropkov', 'obecvojtovce@vojtovce.sk'];
  o['00308633'] = ['Obecný úrad', '', 'Hlavná', '4', '951 87', 'Volkovce', 'volkovce@zoznam.sk;volkovce@gmail.com'];
  o['00323721'] = ['Obecný úrad', '', '', '64', '067 01', 'Radvaň nad Laborcom', 'ouvolica@gmail.com'];
  o['00321087'] = ['Obecný úrad', '', 'Voznica', '135', '966 81', 'Žarnovica', 'sekretariat@voznica.sk'];
  o['00311324'] = ['Obecný úrad', '', 'Vozokany', '100', '956 05', 'Radošina', 'ouvozokany@wircom.sk'];
  o['00306321'] = ['Obecný úrad', '', 'Vozokany', '57', '925 05', 'Vozokany', 'obec@obecvozokany.sk'];
  o['00308641'] = ['Mestský úrad', '', 'Hlavná', '1221', '952 01', 'Vráble', 'sekretariat@vrable.sk'];
  o['00325970'] = ['Obecný úrad', '', 'Voľa', '36', '072 21', 'Nacina Ves', 'ocuvola@dalnet.sk'];
  o['00310131'] = ['Obecný úrad', '', 'Vrádište', '136', '908 49', 'Vrádište', 'vradiste@vradiste.sk'];
  o['00305821'] = ['Obecný úrad', '', 'Námestie sv. Štefana', '474/1', '930 25', 'Vrakúň', 'obecnyurad@vrakun.sk'];
  o['00326721'] = ['Obecný úrad', '', '', '204', '059 72', 'Vrbov', 'obecvrbov@stonline.sk'];
  o['00332933'] = ['Mestský úrad', '', 'Dr. C. Daxnera', '87', '093 16', 'Vranov nad Topľou', 'mesto@vranov.sk'];
  o['00306746'] = ['Obecný úrad', '', 'Vrbová nad Váhom', '91', '946 65', 'Vrbová nad Váhom', 'vrbova@pnet.sk'];
  o['00310140'] = ['Obecný úrad', '', 'Vrbovce', '42', '906 06', 'Vrbovce', 'vrbovce.urad@vrbovce.sk'];
  o['00647209'] = ['Mestský úrad', '', 'Matušovičovský rad', '4', '038 61', 'Vrútky', 'vrutky@vrutky.sk'];
  o['00313190'] = ['Mestský úrad', '', 'Štefánikova', '15/4', '922 03', 'Vrbové', 'primator@vrbove.sk'];
  o['00319686'] = ['Obecný úrad', '', 'Vrbovka', '56', '991 31', 'Veľký Krtíš', 'ipolyvarbo@szm.sk'];
  o['00317896'] = ['Obecný úrad', '', 'Vrchteplá', '15', '017 05', 'Považská Teplá', 'obecvrchtepla@centrum.sk'];
  o['00317039'] = ['Obecný úrad', '', 'Vrícko', '136', '038 31', 'Vrícko', 'obec.vricko@orangemail.sk'];
  o['00692514'] = ['Obecný úrad', '', 'Vršatské Podhradie', '54', '018 52', 'Pruské', 'obec@vrsatskepodhradie.sk'];
  o['00691305'] = ['Obecný úrad', '', 'Vtáčkovce', '15', '044 47', 'Kecerovce', 'ou@vtackovce.sk'];
  o['00326739'] = ['Obecný úrad', '', '', '12', '059 02', 'Slovenská Ves', 'obecvyborna@stonline.sk'];
  o['00315893'] = ['Obecný úrad', '', 'Východná', '616', '032 32', 'Východná', 'ocu.vychodna@stonline.sk'];
  o['00228788'] = ['Obecný úrad', '', 'Vydrany', '71', '930 16', 'Vydrany', 'ocu@vydrany.sk'];
  o['00692379'] = ['Obecný úrad', '', 'Vydrná', '51', '020 53', 'Lúky', 'obecvydrna@centrum.sk'];
  o['00308650'] = ['Obecný úrad', '', 'Výčapy - Opatovce', '467', '951 44', 'Výčapy - Opatovce', 'podatelna@vycapy-opatovce.sk'];
  o['00326747'] = ['Obecný úrad', '', '', '55', '059 14', 'Spišský Štiavnik', 'obec@vydrnik.sk'];
  o['00321109'] = ['Obecný úrad', '', 'Vyhne', '100', '966 02', 'Vyhne', 'vyhne@vyhne.sk'];
  o['00323764'] = ['Obecný úrad', '', '', '100', '067 16', 'Výrava', 'obecvyrava@centrum.sk'];
  o['00311332'] = ['Obecný úrad', '', 'Vysočany', '35', '956 35', 'Nedašovce pri Topoľčanoch', 'obecvysocany@gmail.com'];
  o['00321095'] = ['Obecný úrad', '', 'Vysoká', '2', '969 24', 'Banska Štiavnica', 'ocuvysoka@mail.t-com.sk'];
  o['00314340'] = ['Obecný úrad', '', 'Ústredie', '215', '023 55', 'Vysoká nad Kysucou', 'info@vysokanadkysucou.sk;obec@vysokanadkysucou.sk'];
  o['00327999'] = ['Obecný úrad', '', '', '73', '082 74', 'Brezovica', 'obecvysoka@gmail.com'];
  o['00325996'] = ['Obecný úrad', '', 'Školská', '313', '072 14', 'Pavlovce nad Uhom', 'ocuvysoka@vknet.sk'];
  o['00305197'] = ['Obecný úrad', '', 'Hlavná', '196', '900 66', 'Vysoká pri Morave', 'obecnyurad@vysokaprimorave.sk'];
  o['00326585'] = ['Mestský úrad', '', '', '1', '062 01', 'Starý Smokovec', 'msu@vysoketatry.sk'];
  o['00331198'] = ['Obecný úrad', '', '', '', '090 21', 'Chotča', 'obecvyskovce@zoznam.sk'];
  o['00691291'] = ['Obecný úrad', '', 'Vyšná Hutka', '165', '040 18', 'Košice 18', 'vysnahutka@gtsi.sk'];
  o['00315907'] = ['Obecný úrad', '', 'Vyšná Boca', '50', '032 34', 'Malužiná', 'vboca@stonline.sk'];
  o['00307661'] = ['Obecný úrad', '', 'Vyškovce nad Ipľom', '132', '935 77', 'Vyškovce nad Ipľom', 'info@vyskovcenadiplom.sk'];
  o['00323772'] = ['Obecný úrad', '', '', '90', '067 34', 'Nižná Jablonka', 'v.jablonka@centrum.sk'];
  o['00331201'] = ['Obecný úrad', '', 'Vyšná Jedľová', '33', '089 01', 'Svidník', 'vysna.jedlova@azet.sk'];
  o['00324914'] = ['Obecný úrad', '', 'Hlavná', '60', '044 15', 'Nižná Myšľa', 'podatelna@vysnamysla.sk'];
  o['00324906'] = ['Obecný úrad', '', 'Vyšná Kamenica', '39', '044 45', 'Bidovce', 'obecvysnakamenica@netkosice.sk;obec@vysnakamenica.sk'];
  o['00331210'] = ['Obecný úrad', '', '', '124', '090 32', 'Miňovce', 'jurajkasarda26@gmail.com;obecvo@grkatpo.sk'];
  o['00331228'] = ['Obecný úrad', '', '', '16', '090 01', 'Kapišová', 'vpisana@gmail.com'];
  o['00322709'] = ['Obecný úrad', '', '', '21', '086 36', 'Nižná Polianka', 'spiklubos@azet.sk'];
  o['00326003'] = ['Obecný úrad', '', '', '119', '072 41', 'Remetské Hámre', 'vysnarybnica@lekosonline.sk'];
  o['00332941'] = ['Obecný úrad', '', '', '59', '094 07', 'Nižná Sitnica', 'obecvysnasitnica@centrum.sk'];
  o['00328901'] = ['Obecný úrad', '', 'Vyšná Slaná', '29', '049 26', 'Rejdová', 'info@vysnaslana.sk'];
  o['00322717'] = ['Obecný úrad', '', '', '89', '086 21', 'Lukavica', 'obecvysnavola@stonline.sk'];
  o['00328006'] = ['Obecný úrad', '', '', '157', '080 06', 'Šarišské Lúky', 'info@vysnasebastova.sk;urad@vysnasebastova.sk'];
  o['00323781'] = ['Obecný úrad', '', '', '24', '067 11', 'Ľubiša', 'vysne.ladickovce@satlan.sk'];
  o['00587630'] = ['Obecný úrad', '', 'Vyšné nad Hronom', '57', '935 31', 'Dolná Seč', 'obec.vysnenadhronom@stonline.sk'];
  o['00326011'] = ['Obecný úrad', '', 'Vyšné Nemecké', '55', '072 51', 'Krčava', 'ocu_vn@lekosonline.sk'];
  o['00326020'] = ['Obecný úrad', '', 'Vyšné Remety', '112', '072 41', 'Remetské Hámre', 'vysneremety@lekosonline.sk'];
  o['00329762'] = ['Obecný úrad', '', '', '53', '053 71', 'Vyšné Repaše', 'obec.vysnerepase@mail.t-com.sk'];
  o['00330264'] = ['Obecný úrad', '', '', '243', '065 02', 'Vyšné Ružbachy', 'obec@obecvysneruzbachy.sk'];
  o['00650111'] = ['Obecný úrad', '', 'Vyšné Valice', '244', '982 52', 'Nižná Kaloša', 'obecnyuradvalice@inmail.sk'];
  o['00689297'] = ['Obecný úrad', '', '', '40', '090 34', 'Tokajík', 'juraj.psar@stonline.sk'];
  o['00324922'] = ['Obecný úrad', '', 'Vyšný Čaj', '85', '044 16', 'Bohdanovce pri Košiciach', 'vysny.caj@post.sk'];
  o['00332801'] = ['Obecný úrad', '', '', '57', '094 09', 'Sedliská', 'ocu.vkazimir@stonline.sk'];
  o['00323799'] = ['Obecný úrad', '', '', '128', '067 32', 'Vyšný Hrušov', 'vysnyhrusov@gmail.com'];
  o['00331236'] = ['Obecný úrad', '', '', '', '090 05', 'Krajná Poľana', 'vysnykomarnik@centrum.sk'];
  o['00324931'] = ['Obecný úrad', '', 'Vyšný Klátov', '131', '044 12', 'Nižný Klátov', 'ouvysnyklatov@eccenet.sk'];
  o['00322725'] = ['Obecný úrad', '', '', '26', '086 45', 'Marhaň', 'vysnykrucov@pobox.sk'];
  o['00649058'] = ['Obecný úrad', '', 'Hviezdoslavova ulica', '117/5', '027 01', 'Vyšný Kubín', 'obec@vysnykubin.sk'];
  o['31309411'] = ['Obecný úrad', '', 'Hrdinov SNP', '152', '044 25', 'Medzev', 'obec@vysnymedzev.sk'];
  o['00331244'] = ['Obecný úrad', '', '', '100', '090 11', 'Vyšný Orlík', 'vysnymirosov@post.sk'];
  o['00649619'] = ['Obecný úrad', '', 'Vyšný Skálnik', '43', '980 52', 'Hrachovo', 'starostalabanc@gmail.com'];
  o['00331252'] = ['Obecný úrad', '', '', '14', '090 11', 'Vyšný Orlík', 'obecvysnyorlik@stonline.sk'];
  o['00329771'] = ['Obecný úrad', '', 'Vyšný Slavkov', '30', '053 73', 'Brutovce', 'vysnyslavkov@livenet.sk'];
  o['00322733'] = ['Obecný úrad', '', '', '38', '086 02', 'Gaboltov', 'obecvystvarozec@atlas.sk'];
  o['00332950'] = ['Obecný úrad', '', '', '83', '094 33', 'Vyšný Žipov', 'ocu.vysny.zipov@mail.t-com.sk'];
  o['00314994'] = ['Obecný úrad', '', 'Malá strana', '76/2', '028 01', 'Zábiedovo', 'zabiedovo@oravanet.sk'];
  o['00649473'] = ['Obecný úrad', '', 'Záborie', '21', '038 03', 'Sklabiňa pri Martine', 'vak@centrum.sk'];
  o['00328014'] = ['Obecný úrad', '', '', '39', '082 53', 'Petrovany', 'obeczaborske@mail.t-com.sk'];
  o['00650072'] = ['Obecný úrad', '', 'Zacharovce', '35', '979 01', 'Rimavská Sobota', 'obec.zacharovce@jpnet.sk'];
  o['00691437'] = ['Obecný úrad', '', 'Zádiel', '83', '044 02', 'Turňa nad Bodvou', 'starostaoz@gmail.com'];
  o['00649856'] = ['Obecný úrad', '', 'Zádor', '10', '980 42', 'Rimavská Seč', 'obeczador@gemernet.sk'];
  o['00319694'] = ['Obecný úrad', '', 'Krtíšska', '173/98', '991 06', 'Želovce', 'obec@zahorce.sk'];
  o['00326038'] = ['Obecný úrad', '', 'Záhor', '121', '072 53', 'Bežovce', 'podatelna@obeczahor.sk'];
  o['00305219'] = ['Obecný úrad', '', 'Hlavná', '129', '900 65', 'Záhorská Ves', 'urad@zahorskaves.sk'];
  o['00328022'] = ['Obecný úrad', '', 'Tulčická', '271/2', '082 16', 'Záhradné', 'robert.tkac@obeczahradne.sk'];
  o['00315001'] = ['Obecný úrad', '', 'Zákamenné', '1002', '029 56', 'Zákamenné', 'zakamenne@stonline.sk'];
  o['00696315'] = ['Obecný úrad', '', '', '13', '059 04', 'Spišské Hanušovce', ''];
  o['00314358'] = ['Obecný úrad', '', 'Stred', '824', '023 11', 'Zákopčie', 'obec@zakopcie.sk'];
  o['00682110'] = ['Obecný úrad', '', 'Trojičné námestie', '1', '900 28', 'Zálesie', 'ou@obeczalesie.sk'];
  o['00587648'] = ['Obecný úrad', '', 'Zalaba', '22', '937 01', 'Želiezovce', 'zalaba@dolnepohronie.sk'];
  o['00326046'] = ['Obecný úrad', '', 'Zalužice', '207', '072 34', 'Zalužice', 'podatelna@zaluzice.sk'];
  o['00332968'] = ['Obecný úrad', '', '', '434', '094 15', 'Zámutov', 'zamutov@zamutov.sk'];
  o['00317962'] = ['Obecný úrad', '', 'Záriečie', '190', '020 52', 'Mestečko', 'kollar@zariecie.sk;obec@zariecie.sk'];
  o['00687251'] = ['Obecný úrad', '', 'Zamarovská', '97', '911 05', 'Trenčín', 'zamarovce@stonline.sk'];
  o['00317934'] = ['Obecný úrad', '', 'Záskalie', '33', '017 05', 'Považská Teplá', 'obeczaskalie@damage.sk'];
  o['00332151'] = ['Obecný úrad', '', 'Hlavná', '241/45', '076 53', 'Boľ', 'ocuzatin@centrum.sk'];
  o['00319708'] = ['Obecný úrad', '', 'Závada', '54', '991 21', 'Závada', 'obeczavada@dtnet.sk'];
  o['00311341'] = ['Obecný úrad', '', 'Závada', '152', '955 01', 'Topoľčany', 'ocuzavada@mail.t-com.sk'];
  o['00332976'] = ['Obecný úrad', '', '', '62', '094 08', 'Ruská Poruba', 'obeczavada@gmail.com'];
  o['00329797'] = ['Obecný úrad', '', 'Závadka', '192', '053 33', 'Nálepkovo', 'obeczavadka@demax.sk;obec_zavadka@in.slovanet.sk'];
  o['00326054'] = ['Obecný úrad', '', 'Závadka', '36', '072 33', 'Hnojné', 'ocuzavadka36@stonline.sk'];
  o['00323802'] = ['Obecný úrad', '', '', '126', '066 01', 'Humenné', 'obeczavadka@stonline.sk;obeczavadka@mail.t-com.sk'];
  o['00313947'] = ['Obecný úrad', '', 'Osloboditeľov', '27', '976 67', 'Závadka nad Hronom', 'sekretariat.obuzavadka@mail.t-com.sk'];
  o['00313203'] = ['Obecný úrad', '', 'Viktorínová', '14', '919 26', 'Zavar', 'ocu.zavar@stonline.sk'];
  o['00332160'] = ['Obecný úrad', '', 'Hlavná', '68', '078 01', 'Sečovce', 'obeczbehnov@post.sk'];
  o['00310158'] = ['Obecný úrad', '', 'Sokolská', '243', '908 72', 'Závod', 'sekretariat@obeczavod.sk'];
  o['00315915'] = ['Obecný úrad', '', 'Hlavná', '135', '032 02', 'Závažná Poruba', 'obeczav@stonline.sk'];
  o['00315010'] = ['Obecný úrad', '', 'Stred', '409', '027 05', 'Zázrivá', 'podatelna@zazriva.com'];
  o['00308668'] = ['Obecný úrad', '', 'Zbehy', '69', '951 42', 'Zbehy', 'obec@zbehy.sk'];
  o['00323811'] = ['Obecný úrad', '', '', '98', '067 68', 'Zboj', 'obec.zboj@stonline.sk'];
  o['00323829'] = ['Obecný úrad', '', '', '5', '067 13', 'Rokytov pri Humennom', 'obec.zbojne@post.sk'];
  o['00322741'] = ['Obecný úrad', '', 'Lesná', '10', '086 33', 'Zborov', 'ocuzborov@stonline.sk'];
  o['00314366'] = ['Obecný úrad', '', 'Zborov nad Bystricou', '223', '023 03', 'Zborov nad Bystricou', 'otazky@zborovnadbystricou.sk'];
  o['00307688'] = ['Obecný úrad', '', 'Zbrojníky', '166', '935 55', 'Hontianska Vrbica', 'podatelna@zbrojniky.sk'];
  o['00323837'] = ['Obecný úrad', '', '', '72', '067 01', 'Radvaň nad Laborcom', 'oumatuskazb@centrum.sk'];
  o['00323845'] = ['Obecný úrad', '', '', '90', '067 12', 'Koškovce', 'obec.zb.dlhe@zoznam.sk'];
  o['00326062'] = ['Obecný úrad', '', 'Zbudza', '71', '072 23', 'Staré', 'ocu-zbudza@dalnet.sk'];
  o['00321788'] = ['Obecný úrad', '', 'Hlavná', '19/1', '013 19', 'Kľače', 'obecnyuradzbynov@stonline.sk'];
  o['00313211'] = ['Obecný úrad', '', 'Školská', '224/5', '919 21', 'Zeleneč', 'obec@zelenec.sk'];
  o['00306720'] = ['Obecný úrad', '', 'Hlavná', '26', '946 14', 'Zemianska Olča', 'ocuzolca@stonline.sk'];
  o['00651001'] = ['Obecný úrad', '', '4. apríla', '60/28', '972 43', 'Zemianske Kostoľany', 'podatelna@zemianskekostolany.sk'];
  o['00699098'] = ['Obecný úrad', '', 'Zemianske Podhradie', '138', '913 07', 'Bošáca', 'obec@zemianske-podhradie.sk'];
  o['00306339'] = ['Obecný úrad', '', 'Zemianske Sady', '42', '925 54', 'Zemianske Sady', 'ocuzemianskesady@mail.t-com.sk'];
  o['00309371'] = ['Obecný úrad', '', 'G. Czuczora', '268', '941 22', 'Zemné', 'obecny.urad@zemne.sk'];
  o['00648825'] = ['Obecný úrad', '', 'Zemiansky Vrbovok', '53', '962 41', 'Bzovík', 'obeczemianskyvrbovok@gmail.com'];
  o['00332178'] = ['Obecný úrad', '', 'Zemplín', '49', '076 34', 'Ladmovce', 'obeczemplin@kid.sk'];
  o['00332186'] = ['Obecný úrad', '', 'Hlavná', '182/51', '076 16', 'Úpor', 'ouznves@gmail.com'];
  o['00332194'] = ['Obecný úrad', '', 'Okružná', '340/2', '076 64', 'Zemplínska Teplica', 'ocuzteplica@slovanet.sk'];
  o['00326071'] = ['Obecný úrad', '', 'Zemplínska Široká', '304', '072 12', 'Palín', 'zemplinskasiroka@minet.sk'];
  o['00323853'] = ['Obecný úrad', '', 'Hlavná', '152/183', '067 77', 'Zemplínske Hámre', 'zemplinskehamre@gmail.com'];
  o['00332208'] = ['Obecný úrad', '', 'Obecná', '392', '076 01', 'Zemplínske Hradište', 'obec@zemplinskehradiste.sk;bocianopolis@azet.sk'];
  o['00328031'] = ['Obecný úrad', '', '', '71', '082 52', 'Kokošovce', 'podatelna@zlatabana.sk'];
  o['00325341'] = ['Obecný úrad', '', 'Zemplínske Kopčany', '56', '072 17', 'Zemplínske Kopčany', 'podatelna@zemplinskekopcany.sk'];
  o['00332216'] = ['Obecný úrad', '', 'Hlavná', '27/61', '076 05', 'Zemplínske Jastrabie', 'obeczemplinskejastrabie@kid.sk;obeczjastrabie@centrum.sk'];
  o['00332224'] = ['Obecný úrad', '', 'Kostolná', '42', '076 02', 'Novosad', 'obeczbranc@e-max.sk'];
  o['00324957'] = ['Obecný úrad', '', 'Časť Valál', '114', '044 61', 'Zlatá Idka', 'ocu.zlataidka@zoznam.sk'];
  o['00305839'] = ['Obecný úrad', '', 'Poštová', '550/1', '930 39', 'Zlaté Klasy', 'ocuzlateklasy@stonline.sk'];
  o['00322750'] = ['Obecný úrad', '', '', '17', '086 01', 'Rokytov', 'ocuzlate@centrum.sk'];
  o['00308676'] = ['Mestský úrad', '', 'Ul. 1. mája', '2', '953 01', 'Zlaté Moravce', 'sekretariat@zlatemoravce.eu'];
  o['00311367'] = ['Obecný úrad', '', 'Zlatníky', '42', '956 37', 'Zlatníky', 'obec@zlatniky.sk'];
  o['00332984'] = ['Obecný úrad', '', '', '21', '094 33', 'Vyšný Žipov', 'obec.zlatnik@gmail.com'];
  o['00306738'] = ['Obecný úrad', '', 'Školská', '184', '946 12', 'Zlatná na Ostrove', 'aranyoskh@stonline.sk'];
  o['00308684'] = ['Obecný úrad', '', 'Zlatno', '99', '951 91', 'Hosťovce', 'zlatno@stonline.sk'];
  o['31923402'] = ['Obecný úrad', '', 'Zlatno', '62', '985 04', 'Zlatno', 'margaretamurinova@gmail.com'];
  o['00305235'] = ['Obecný úrad', '', 'Námestie 1. mája', '1', '900 51', 'Zohor', 'obecnyurad@obeczohor.sk'];
  o['00317969'] = ['Obecný úrad', '', 'Zliechov', '233', '018 32', 'Zliechov', 'info@zliechov.sk;obeczliechov@zliechov.sk'];
  o['00648655'] = ['Obecný úrad', '', 'Zombor', '65', '991 22', 'Bušince', ''];
  o['00323861'] = ['Obecný úrad', '', '', '88', '067 33', 'Papín', 'obec.zubne@stonline.sk'];
  o['00317977'] = ['Obecný úrad', '', 'Zubák', '164', '020 64', 'Zubák', 'obeczubak@stonline.sk'];
  o['00315036'] = ['Obecný úrad', '', 'Hlavná', '289', '027 32', 'Zuberec', 'ekonomka@zuberec.sk;obec@zuberec.sk'];
  o['00320447'] = ['Obecný úrad', '', 'SNP', '370/19', '962 01', 'Zvolenská Slatina', 'obuzvslat@mail.t-com.sk'];
  o['00315044'] = ['Obecný úrad', '', 'Plátennícka', '464', '029 43', 'Zubrohlava', 'ocuzubrohlava@stonline.sk'];
  o['00320439'] = ['Mestský úrad', '', 'Námestie Slobody', '22', '960 01', 'Zvolen', 'kpk@zvolen.sk;mesto@zvolen.sk'];
  o['34075836'] = ['Obecný úrad', '', 'Zvončín', '82', '919 01', 'Suchá nad Parnou', 'ouzvoncin@stonline.sk'];
  o['00310051'] = ['Obecný úrad', '', 'Šajdikové Humence', '48', '906 07', 'Šajdikové Humence', 'info@sajdikovehumence.sk'];
  o['00307513'] = ['Mestský úrad', '', 'Hlavné námestie', '1', '936 01', 'Šahy', 'sahy@sahy.sk'];
  o['00613932'] = ['Obecný úrad', '', 'Šalgočka', '135', '925 54', 'Zemlianske Sady', 'obecnyurad@salgocka.sk'];
  o['00311120'] = ['Obecný úrad', '', 'Šalgovce', '26', '956 06', 'Šalgovce', 'ousalgovce@wircom.sk'];
  o['00307505'] = ['Obecný úrad', '', 'Šalov', '16', '935 71', 'Šalov', 'podatelna@salov.sk'];
  o['00330205'] = ['Obecný úrad', '', '', '25', '065 47', 'Plavnica', 'sambron@slnet.sk'];
  o['00305723'] = ['Mestský úrad', '', 'Hlavná', '37', '931 01', 'Šamorín', 'sekretariat@samorin.sk'];
  o['00325864'] = ['Obecný úrad', '', 'Šamudovce', '99', '072 01', 'Pozdišovce', 'samudovce@wmx.sk'];
  o['00331031'] = ['Obecný úrad', '', '', '15', '091 01', 'Stropkov', 'obecsandal@atlas.sk;obecsandal@gmail.com'];
  o['00331040'] = ['Obecný úrad', '', '', '', '090 05', 'Krajná Poľana', 'skasko.stanislav@post.sk'];
  o['00327778'] = ['Obecný úrad', '', '', '34', '082 12', 'Kapušany', 'obec.sarporuba@szm.sk'];
  o['00690589'] = ['Obecný úrad', '', '', '42', '082 14', 'Pušovce', 'obecstrstena@gmail.com;obecstrstena@pobox.sk'];
  o['00327786'] = ['Obecný úrad', '', 'Šarišské Bohdanovce', '87', '082 05', 'Šarišské Bohdanovce', 'obec@sarisskebohdanovce.sk'];
  o['00322636'] = ['Obecný úrad', '', '', '81', '086 37', 'Šarišské Čierne', 'buvalicandrej@gmail.com'];
  o['00327794'] = ['Obecný úrad', '', '', '109', '082 73', 'Šarišské Dravce', 'ocusar.dravce@stonline.sk'];
  o['00330213'] = ['Obecný úrad', '', '', '257', '065 48', 'Šarišské Jastrabie', 'obecsarjastrabie@slnet.sk'];
  o['00327808'] = ['Obecný úrad', '', 'Kapt.Nálepku', '18', '082 22', 'Šarišské Michaľany', 'obec@sarisskemichalany.sk'];
  o['00327816'] = ['Obecný úrad', '', '', '17', '082 66', 'Uzovce', 'info@sarisskesokolovce.sk'];
  o['00331058'] = ['Obecný úrad', '', '', '65', '090 42', 'Okrúhle', 'obecsarisskystiavnik@zoznam.sk'];
  o['00309290'] = ['Obecný úrad', '', 'Šarkan', '38', '943 42', 'Gbelce', 'ou.sarkan@stonline.sk'];
  o['00307521'] = ['Obecný úrad', '', 'Šarovce', '128', '935 52', 'Šarovce', 'sarovce@sarovce.sk'];
  o['00316415'] = ['Obecný úrad', '', 'Šávoľ', '220', '985 41', 'Šávoľ', 'ocu.savol@gmail.com'];
  o['00322644'] = ['Obecný úrad', '', '', '50', '086 12', 'Kurima', 'sasova.bj@centrum.sk'];
  o['00310069'] = ['Mestský úrad', '', 'Alej', '549', '908 41', 'Šaštín - Stráže', 'sekretariat@mestosastinstraze.sk'];
  o['00682225'] = ['Obecný úrad', '', 'Šelpice', '195', '919 09', 'Bohdanovce nad Trnavou', 'ocuselpice@selpice.sk'];
  o['00306185'] = ['Mestský úrad', '', 'Námestie Sv. Trojice', '7', '927 15', 'Šaľa', 'mesto@sala.sk'];
  o['00324787'] = ['Obecný úrad', '', '', '116', '044 21', 'Šemša', 'obecsemsa@mail.t-com.sk'];
  o['00331066'] = ['Obecný úrad', '', '', '51', '090 03', 'Ladomirová', 'semetkovce@azet.sk'];
  o['00316431'] = ['Obecný úrad', '', 'Šiatorská Bukovinka', '41', '985 58', 'Radzovce', 'ocusiat.buk@stonline.sk'];
  o['00305103'] = ['Obecný úrad', '', 'Nám. G. Kolinoviča', '5', '900 81', 'Šenkvice', 'obec.senkvice@szm.sk'];
  o['00322652'] = ['Obecný úrad', '', '', '142', '086 22', 'Kľušov', 'obecsiba@wmx.sk'];
  o['00316423'] = ['Obecný úrad', '', 'Šíd', '37', '986 01', 'Fiľakovo', 'ocusid@stonline.sk'];
  o['00319104'] = ['Obecný úrad', '', 'Šimonovce', '146', '980 03', 'Šimonovce', 'obec.simonovce@stonline.sk'];
  o['00327824'] = ['Obecný úrad', '', '', '144', '082 36', 'Lipovce', 'obec@sindliar.sk'];
  o['00306193'] = ['Obecný úrad', '', 'Šintava', '244', '925 51', 'Šintava', 'obec@sintava.sk'];
  o['31827322'] = ['Obecný úrad', '', 'Šípkové', '113', '922 03', 'Vrbové', 'starosta@sipkove.sk'];
  o['00800074'] = ['Obecný úrad', '', 'Šípkov', '141', '956 53', 'Šípkov', 'obecnyuradsipkov@stonline.sk'];
  o['00647594'] = ['Obecný úrad', '', 'Širákov', '156', '991 27', 'Kamenné Kosihy', ''];
  o['00328863'] = ['Obecný úrad', '', 'Šivetice', '94', '049 14', 'Licince', 'obecsivetice@stonline.sk'];
  o['00319112'] = ['Obecný úrad', '', 'Širkovce', '184', '980 02', 'Jasenské', 'serke@gemernet.sk'];
  o['00327832'] = ['Obecný úrad', '', '', '118', '082 37', 'Široké', 'obec@siroke.sk'];
  o['00311138'] = ['Obecný úrad', '', 'Šišov', '63', '956 38', 'Šišov', 'obecsisov@gmail.com'];
  o['00323632'] = ['Obecný úrad', '', '', '38', '067 74', 'Šmigovec', 'obecsmigovec@gmail.com'];
  o['00306207'] = ['Obecný úrad', '', 'Šoporňa', '1179', '925 52', 'Šoporňa', 'podatelna@soporna.sk'];
  o['00316440'] = ['Obecný úrad', '', 'Šoltýska', '4', '985 07', 'Šoltýska', 'kancelaria@soltyska.sk'];
  o['00313033'] = ['Obecný úrad', '', 'Hlavná', '183/16', '919 51', 'Špačince', 'podatelna@spacince.sk'];
  o['00313858'] = ['Obecný úrad', '', 'Špania Dolina', '132', '974 01', 'Banská Bystrica', 'spania.dolina@stonline.sk;spania.dolina@mail.t-com.sk;spaniadolina@spaniadolina.sk'];
  o['00319121'] = ['Obecný úrad', '', 'Španie Pole', '41', '980 23', 'Teplý Vrch', 'obec.spaniepole@gmail.com'];
  o['00310077'] = ['Obecný úrad', '', 'Štefanov', '347', '906 45', 'Štefanov', 'obecstefanov@stonline.sk'];
  o['00306673'] = ['Obecný úrad', '', 'Školská', '45', '946 32', 'Marcelová', 'obec.srobarova@gmail.com'];
  o['31197566'] = ['Obecný úrad', '', 'Štefanovičová', '75', '951 15', 'Mojmírovce', 'obec@stefanovicova.sk'];
  o['00305111'] = ['Obecný úrad', '', 'Štefanová', '100', '900 86', 'Budmerice', 'oustefanova@slovanet.sk'];
  o['00327841'] = ['Obecný úrad', '', '', '14', '082 35', 'Hendrichovce', 'stefanovce.po@mail.t-com.sk'];
  o['00314889'] = ['Obecný úrad', '', 'Plátenícka', '61', '027 44', 'Tvrdošín', 'obecstefanov@oravanet.sk'];
  o['00332879'] = ['Obecný úrad', '', '', '64', '094 01', 'Tovarné', 'obec.stefanovce@gmail.com'];
  o['00800163'] = ['Obecný úrad', '', 'Šterusy', '117', '922 03', 'Vrbové', 'obecnyurad@sterusy.sk'];
  o['00331074'] = ['Obecný úrad', '', '', '31', '090 42', 'Okrúhle', 'obecstefurov@gmail.com'];
  o['00321028'] = ['Obecný úrad', '', 'Štiavnické Bane', '1', '969 81', 'Štiavnické Bane', 'oustbane@bsnet.sk'];
  o['00315770'] = ['Obecný úrad', '', 'Štiavnička', '78', '034 01', 'Ružomberok', 'oustiavnicka@stonline.sk'];
  o['37869531'] = ['Obecný úrad', '', 'Pri prameni', '14', '951 01', 'Štitáre', 'oustitare@nevernet.sk'];
  o['00321672'] = ['Obecný úrad', '', 'Štiavnik', '764', '013 55', 'Štiavnik', 'ocu@stiavnik.sk'];
  o['00328871'] = ['Obecný úrad', '', 'Námestie 1. mája', '167', '049 32', 'Štítnik', 'obec.stitnik@stonline.sk'];
  o['00691836'] = ['Obecný úrad', '', '', '29', '059 37', 'Štôla', 'obustola@sinet.sk'];
  o['00324795'] = ['Obecný úrad', '', '', '143', '044 26', 'Štós', 'stos1@post.sk'];
  o['00326615'] = ['Obecný úrad', '', 'Hlavná', '188/67', '059 38', 'Štrba', 'strba@strba.sk'];
  o['00319139'] = ['Obecný úrad', '', 'Štrkovec', '10', '980 45', 'Štrkovec', 'obec@obec-strkovec.sk;obecstrkovec@zoznam.sk'];
  o['00312029'] = ['Obecný úrad', '', 'Štvrtok', '1', '913 05', 'Melčice-Lieskové', 'obec.stvrtok@stonline.sk'];
  o['00309303'] = ['Mestský úrad', '', 'Námestie Slobody', '1', '943 01', 'Štúrovo 1', 'sekretariat@sturovo.sk'];
  o['00305731'] = ['Obecný úrad', '', 'Mýtne námestie', '1', '930 40', 'Štvrtok na Ostrove', 'starosta@ocustvrtok.sk'];
  o['36138487'] = ['Obecný úrad', '', 'Šuja', '1', '015 01', 'Rajec', 'obecsuja@centrum.sk'];
  o['00313866'] = ['Obecný úrad', '', 'Jegorovova', '414', '976 71', 'Šumiac', 'obecnyurad@sumiac.sk'];
  o['00326437'] = ['Obecný úrad', '', 'Trojičné námestie', '255/3', '059 39', 'Šuňava', 'obecsunava@stonline.sk'];
  o['00309311'] = ['Mestský úrad', '', 'Námestie Hrdinov', '1', '942 01', 'Šurany', 'msu@surany.sk'];
  o['00308498'] = ['Obecný úrad', '', 'Hlavná', '54', '951 26', 'Šurianky', 'ousurianky@pscomp.sk'];
  o['00316458'] = ['Obecný úrad', '', 'Šurice', '179', '980 33', 'Hájnačka', 'obecsurice@zoznam.sk'];
  o['00313068'] = ['Obecný úrad', '', 'Nová', '5', '919 25', 'Šúrovce', 'starostka@surovce.sk'];
  o['00318507'] = ['Obecný úrad', '', 'Šútovce', '39', '972 01', 'Bojnice', 'obec@sutovce.sk'];
  o['00316946'] = ['Obecný úrad', '', 'Fatranská', '88', '038 54', 'Krpeľany', 'ocusutovo@stonline.sk'];
  o['00650676'] = ['Obecný úrad', '', 'Šuľa', '53', '991 01', 'Senné', ''];
  o['00329681'] = ['Obecný úrad', '', '', '87', '053 34', 'Švedlár', 'obecsvedlar@ke.telecom.sk'];
  o['00326623'] = ['Obecný úrad', '', '', '132', '059 12', 'Švábovce', 'obec.svabovce@stonline.sk'];
  o['00317047'] = ['Obecný úrad', '', 'Žabokreky', '145', '038 40', 'Žabokreky', 'starosta@zabokreky.sk'];
  o['00315788'] = ['Obecný úrad', '', 'Školská', '70/2', '034 91', 'Lubochňa', 'obec@svosov.sk'];
  o['00314919'] = ['Obecný úrad', '', 'Ťapešovo', '83', '029 51', 'Lokca', 'tapesovo@stonline.sk'];
  o['00326771'] = ['Obecný úrad', '', '', '55', '059 73', 'Žakovce', 'obec.zakovce@stonline.sk'];
  o['00311375'] = ['Obecný úrad', '', 'Školská', '216', '958 52', 'Žabokreky nad Nitrou', 'ekonom@zabokrekynadnitrou.sk'];
  o['00329801'] = ['Obecný úrad', '', '', '335', '055 71', 'Žakarovce', 'zakarovce@zakarovce.sk'];
  o['00332992'] = ['Obecný úrad', '', 'Ulica hlavná', '144', '094 01', 'Žalobín', 'ocuzalobin@mail.t-com.sk'];
  o['00324965'] = ['Obecný úrad', '', 'Žarnov', '85', '044 04', 'Turňanská Nová Ves', 'obecnyurad.zarnov@stonline.sk'];
  o['00321117'] = ['Mestský úrad', '', 'Námestie SNP', '33', '966 81', 'Žarnovica', 'info@zarnovica.eu'];
  o['00315052'] = ['Obecný úrad', '', 'Žaškov', '112', '027 21', 'Žaškov', 'obec.zaskov@dkubin.sk'];
  o['00326089'] = ['Obecný úrad', '', 'Žbince', '34', '072 16', 'Hatalov', 'ocu@zbince.sk'];
  o['00324973'] = ['Obecný úrad', '', '', '118', '044 11', 'Ždaňa', 'obec.zdana@mail.t-com.sk'];
  o['00326780'] = ['Obecný úrad', '', '', '202', '059 55', 'Ždiar', 'ocu@zdiar.sk'];
  o['00328057'] = ['Obecný úrad', '', '', '151', '082 06', 'Žehňa', 'obeczehna@atlas.sk'];
  o['00329819'] = ['Obecný úrad', '', 'Žehra', '104', '053 61', 'Spišské Vlachy', 'zehra@ou.sk'];
  o['00320455'] = ['Obecný úrad', '', 'Železná Breznica', '197', '962 34', 'Tŕnie', 'ocuzel.breznica@stonline.sk'];
  o['00322768'] = ['Obecný úrad', '', '', '16', '087 01', 'Giraltovce', 'obeczeleznik@orangemail.sk'];
  o['00307696'] = ['Mestský úrad', '', 'SNP', '2', '937 01', 'Želiezovce', 'mesto@zeliezovce.sk'];
  o['00322776'] = ['Obecný úrad', '', '', '24', '086 44', 'Kuková', 'ocuzelmanovce@azet.sk'];
  o['00319716'] = ['Obecný úrad', '', 'Zdravotnícka', '255', '991 06', 'Želovce', 'obec@zelovce.sk'];
  o['00649783'] = ['Obecný úrad', '', 'Žiar', '42', '982 01', 'Tornaľa', 'zcsizmadia@post.sk'];
  o['00655911'] = ['Obecný úrad', '', 'Žemliare', '44', '935 57', 'Jur n.Hronom', 'ouzemliare@wmx.sk'];
  o['00307700'] = ['Obecný úrad', '', 'SNP', '375/39', '935 02', 'Žemberovce', 'ocu@zemberovce.sk'];
  o['00315923'] = ['Obecný úrad', '', 'Žiar', '102', '032 05', 'Smrečany', 'obecziar@centrum.sk;ziar@obecziar.sk'];
  o['00321125'] = ['Mestský úrad', '', 'Štefana Moyzesa', '46', '965 19', 'Žiar nad Hronom', 'msu@ziar.sk'];
  o['00649317'] = ['Obecný úrad', '', 'Žibritov', '12', '963 01', 'Krupina', ''];
  o['00321796'] = ['Mestský úrad', '', 'Nám. obetí komunizmu', '1', '011 31', 'Žilina', 'sekretariatmsu@zilina.sk'];
  o['00306347'] = ['Obecný úrad', '', 'Žihárec', '599', '925 83', 'Žihárec', 'obecziharec@mail.t-com.sk'];
  o['00308692'] = ['Obecný úrad', '', 'Žikava', '104', '951 92', 'Lovce', 'obeczikava@gmail.com'];
  o['00649791'] = ['Obecný úrad', '', 'Žíp', '17', '980 21', 'Bátka', 'nagy.palova@zoznam.sk;obeczip@rsnet.sk'];
  o['00328065'] = ['Obecný úrad', '', '', '85', '082 41', 'Bajerov', 'obec.zipov@stonline.sk'];
  o['00308706'] = ['Obecný úrad', '', 'Žirany', '194', '951 74', 'Žirany', 'obec.zirany@stonline.sk'];
  o['37869451'] = ['Obecný úrad', '', 'Športová', '5', '951 97', 'Žitavany', 'podatelna@zitavany.sk'];
  o['00308722'] = ['Obecný úrad', '', 'Hlavná', '130', '951 63', 'Žitavce', 'obeczitavce@zoznam.sk starosta@zitavce.sk'];
  o['00311383'] = ['Obecný úrad', '', 'Žitná - Radiša', '105', '956 42', 'Žitná Radiša', 'podatelna@zitna-radisa.sk'];
  o['00313238'] = ['Obecný úrad', '', 'Žlkovce', '158', '920 42', 'Žlkovce', 'obecnyurad@zlkovce.sk'];
  o['00309052'] = ['Obecný úrad', '', 'Ľubá', '79', '943 53', 'Ľubá', 'obecluba@mail.t-com.sk'];
  o['00328073'] = ['Obecný úrad', '', '', '95', '080 01', 'Prešov', 'obeczupcany@zoznam.sk'];
  o['00321133'] = ['Obecný úrad', '', 'Župkov', '12', '966 71', 'Horné Hámre', 'obecnyurad@zupkov.sk'];
  o['00315567'] = ['Obecný úrad', '', 'Ľubeľa', '346', '032 14', 'Ľubeľa', 'obeclubela@imafex.sk'];
  o['31942547'] = ['Obecný úrad', '', 'Generála Svobodu', '248/127', '059 71', 'Ľubica', 'podatelna@obeclubica.sk'];
  o['00313564'] = ['Obecný úrad', '', 'Nám. V. Dunajského', '1/1', '976 55', 'Ľubietová', 'podatelna@lubietova.sk'];
  o['00323225'] = ['Obecný úrad', '', '', '129', '067 11', 'Ľubiša', 'oculubisa@mail.t-com.sk'];
  o['00315575'] = ['Obecný úrad', '', 'Ľubochňa', '143', '034 91', 'Lubochňa', 'obeclubochna@centrum.sk;obec@lubochna.sk'];
  o['00650421'] = ['Obecný úrad', '', 'Ľuboriečka', '91', '991 02', 'Dolná Strehová', 'obecluboriecka@mail.t-com.sk'];
  o['00316202'] = ['Obecný úrad', '', 'Ľuboreč', '138', '985 11', 'Halič', 'obec@luborec.sk'];
  o['00690538'] = ['Obecný úrad', '', 'Čsl. letcov', '2', '080 06', 'Ľubotice', 'urad@lubotice.eu'];
  o['00327395'] = ['Obecný úrad', '', '', '103', '082 42', 'Bzenov', 'obeclubovec@ocu.sk'];
  o['00330035'] = ['Obecný úrad', '', 'Na rovni', '302/12', '065 41', 'Ľubotín', 'obeclubotin@stonline.sk'];
  o['34017402'] = ['Obecný úrad', '', 'Ľudovítová', '21', '951 44', 'Výčapy - Opatovce', 'obecnyuradludovitova@stonline.sk'];
  o['00327425'] = ['Obecný úrad', '', '', '96', '082 57', 'Ľutina', 'obec_lutina@ke.telecom.sk'];
  o['00309401'] = ['Obecný úrad', '', 'Štepničky', '690', '908 79', 'Borský Svätý Jur', 'obecborskysv.jur@stonline.sk'];
  o['00699292'] = ['Obecný úrad', '', 'Ľutov', '26', '957 03', 'Bánovce nad Bebravou 3', 'obeclutov@mail.t-com.sk'];
  o['00309419'] = ['Obecný úrad', '', 'Smuha', '1', '908 77', 'Borský Mikuláš', 'starosta@borskymikulas.sk'];
  o['00309397'] = ['Obecný úrad', '', 'Bílkove Humence', '169', '908 77', 'Borský Mikuláš', 'ou.b.humence@bmservis.sk'];
  o['00325791'] = ['Mestský úrad', '', 'Štefánikova', '23', '073 01', 'Sobrance', 'sekretariat@sobrance.sk'];
  o['00323586'] = ['Obecný úrad', '', '', '23', '067 61', 'Stakčín', 'stakcinska.roztoka@lekosonline.sk'];
  o['00329304'] = ['Obecný úrad', '', 'Slovenského raja', '55', '053 13', 'Letanovce', 'obecletanovce@letanovce.eu'];
  o['30233623'] = ['Obecný úrad', '', 'Počarová', '23', '018 15', 'Prečín', 'pocarova@pocarova.sk'];
  var adresa = "";
  var ico = $("#addressslovakia-city").val();
  if (ico) {
    if (o[ico]) {
      adresa = o[ico][0] + "\n";
      if (o[ico][1] != "") {
        adresa += o[ico][1] + "\n";
      }
      if (o[ico][2] != "" || o[ico][3] != "") {
        if (o[ico][2]) {
          adresa += o[ico][2] + " ";
        }
        if (o[ico][3]) {
          adresa += o[ico][3];
        }
        adresa += "\n";
      }
      adresa += o[ico][4] + " " + o[ico][5] + "\n" + o[ico][6];
    }
    $("#adresa").val(adresa);

    var subj = "Hlasovanie postou alebo ziadost o listky";
    var textemailu = "Toto je text emailu";
    $("#addressslovakia-zip").val(o[ico][4]);
    $("#send").attr("href", "mailto:" + o[ico][6] + "?subject=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(textemailu));
  }
}
$(function () {
  nastavObec();
  $("#addressslovakia-city").select2();
});

function createDocument(preview) {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  var type = $('#tpFlag').val();
  // playground requires you to assign document definition to a variable called dd
  var paragraph, localaddress = [], noTP = [], vyhlasenie = [], signature = [], idPhoto = [];
  var signaturedata = signaturePad.toDataURL();
  if (signaturedata.length > 10) {
    $('#signature').val(signaturedata);
  }

  signature2 = [];
  if ($('#signature').val() != '') {
    signature =
            [
              {text: '', style: 'space'},
              {
                text: ['V ', {text: $('#addressforeign-city').val(), style: 'value'}],
                style: 'footer',
              },
              {
                text: ['Dátum: ', {text: '' + dd + '. ' + mm + '. ' + yyyy, style: 'value'}],
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
        text: ['Dátum: ', {text: '' + dd + '. ' + mm + '. ' + yyyy, style: 'value'}],
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
            ]
  }


  if (type == 'volbaPostouSTrvalymPobytom') {
    paragraph = 'Podľa   § 60 ods. 1   zákona   č. 180/2014 Z. z. o podmienkach výkonu volebného práva a o zmene a doplnení niektorých zákonov žiadam o voľbu poštou pre voľby do Národnej rady Slovenskej republiky v roku 2016.';
    localaddress = [
      {text: '', style: 'spacesmall'},
      {
        text: 'Adresa trvalého pobytu v Slovenskej republike:',
        style: 'line',
        //style: 'header', 
        bold: true
      },
      {
        columns: [
          {text: 'Ulica: ', style: 'line',},
          {text: $('#addressslovakia-street').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: 'Číslo domu: ', style: 'line',},
          {text: $('#addressslovakia-streetno').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: 'Obec: ', style: 'line',},
          {text: $('#addressslovakia-city').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: 'PSČ: ', style: 'line',},
          {text: $('#addressslovakia-zip').val(), style: 'value'},
          {text: ''}
        ]
      },
      {text: '', style: 'spacesmall'},
      {
        text: 'Adresa miesta pobytu v cudzine (pre zaslanie hlasovacích lístkov a obálok):',
        style: 'line',
        //style: 'header', 
        bold: true
      }
    ];
  } else if (type == 'volbaPostouBezTrvalehoPobytu') {
    paragraph = 'Podľa   § 59 ods. 1   zákona   č. 180/2014 Z. z. o podmienkach výkonu volebného práva a o zmene a doplnení niektorých zákonov žiadam o voľbu poštou pre voľby do Národnej rady Slovenskej republiky v roku 2016 a o zaslanie hlasovacích lístkov a obálok na adresu:';
    noTP = [

      {text: '', style: 'spacesmall'},
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
        text: 'Na účely voľby poštou do Národnej rady Slovenskej republiky v roku 2016',
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

  if (type === "volbaPostouSTrvalymPobytom" || type === "volbaPostouBezTrvalehoPobytu") {
    formContent = [
      {
        text: 'Žiadosť',
        style: 'header',
        alignment: 'center'
      },
      {
        text: 'o voľbu poštou',
        style: 'header',
        alignment: 'center'
      },
      {
        text: 'pre voľby do Národnej rady Slovenskej republiky v roku 2016',
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
          {text: 'Meno: ', style: 'line',},
          {text: $('#basicinfo-name').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: 'Priezvisko: ', style: 'line',},
          {text: $('#basicinfo-lastname').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: 'Rodné priezvisko: ', style: 'line',},
          {text: $('#basicinfo-maidenlastname').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: 'Rodné číslo: ', style: 'line',},
          {text: $('#basicinfo-birthno').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      localaddress,
      {
        columns: [
          {text: 'Ulica: ', style: 'line',},
          {text: $('#addressforeign-street').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: 'Číslo domu: ', style: 'line',},
          {text: $('#addressforeign-streetno').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: 'Obec: ', style: 'line',},
          {text: $('#addressforeign-city').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: 'PSČ: ', style: 'line',},
          {text: $('#addressforeign-zip').val(), style: 'value'},
          {text: ''}
        ]
      },
      {
        columns: [
          {text: 'Štát: ', style: 'line',},
          {text: $('#addressforeign-country').val().toUpperCase(), style: 'value'},
          {text: ''}
        ]
      },
      noTP
    ]
  }
  if (type === "ziadostOPreukazPostou") {
    preukazHeader = 'Žiadosť o vydanie hlasovacieho preukazu';
    preukazDelivery = [
      {
        text: 'Hlasovací preukaz žiadam zaslať na adresu:',
        style: 'line',
        alignment: 'left'
      },
      {
        columns: [
          {
            text: ['Meno: ', {text: $('#basicinfo-name').val().toUpperCase(), style: 'value'}],
          },
          {
            text: ['Priezvisko: ', {text: $('#basicinfo-lastname').val().toUpperCase(), style: 'value'}],
          }
        ]
      },
      {
        text: ['Adresa: ', {text: getAddressOneLine('addressforeign').toUpperCase(), style: 'value'}],
        style: 'line'
      }
    ]
  }

  if (type === "ziadostOPreukaPreSplnomocnenca") {
    preukazHeader = 'Žiadosť o vydanie hlasovacieho preukazu a splnomocnenie na jeho prevzatie';
    preukazDelivery = [
      {
        text: 'Na prevzatie hlasovacieho preukazu podľa § 46 ods. 6 zákona  splnomocňujem:',
        style: 'line',
        alignment: 'left'
      },
      {
        columns: [
          {
            text: ['Meno: ', {text: $('#proxy-name').val().toUpperCase(), style: 'value'}],
          },
          {
            text: ['Priezvisko: ', {text: $('#proxy-lastname').val().toUpperCase(), style: 'value'}],
          }
        ]
      },
      {
        text: ['Číslo občianskeho preukazu: ', {text: $('#proxy-idno').val().toUpperCase(), style: 'value'}],
        style: 'line'
      }
    ]
  }

  if (type === "ziadostOPreukazPostou" || type === "ziadostOPreukaPreSplnomocnenca") {
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
            text: ['Meno: ', {text: $('#basicinfo-name').val().toUpperCase(), style: 'value'}],
            style: 'line',
          },
          {
            text: ['Priezvisko: ', {text: $('#basicinfo-lastname').val().toUpperCase(), style: 'value'}],
            style: 'line',
          },
        ]
      },
      {
        columns: [
          {
            text: ['Rodné číslo: ', {text: $('#basicinfo-birthno').val(), style: 'value'}],
            style: 'line',
          },
          {
            text: ['Štátna príslušnosť: ', {text: 'Slovenská republika'.toUpperCase(), style: 'value'}],
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
        text: 'žiadam',
        style: 'header',
        alignment: 'center'
      },
      {text: '', style: 'space'},
      {
        text: [
          {text: 'podľa § 46 zákona č. 180/2014 Z. z. o podmienkach výkonu volebného práva a o zmene a doplnení niektorých zákonov '},
          {text: 'o vydanie hlasovacieho preukazu', bold: true},
          {text: ' pre voľby do Národnej rady Slovenskej republiky v roku 2016.'},
        ]
      },
      {text: '', style: 'space'},
      preukazDelivery
    ]
  }
  var dd = {
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
        margin: [0, 0, 0, 0],
        padding: [0, 0, 0, 0]
      },
      footer: {
        fontSize: 12,
        margin: [0, 0, 0, 0],
        padding: [0, 0, 0, 0]
      },
      space: {
        fontSize: 12,
        margin: [0, 50, 0, 0]
      },
      spacesmall: {
        fontSize: 12,
        margin: [0, 20, 0, 0]
      },
      signatureStyle: {
        margin: [0, -150, 0, 0],
        alignment: 'right'
      },
      signatureTextStyle: {
        decoration: 'overline',
        decorationStyle: 'dotted',
        alignment: 'right',
        margin: [30, 10],
        fontSize: 9
      }
    }
  }
  if (preview === true) {
    pdfMake.createPdf(dd).getDataUrl(function (result) {
      $('#preview').attr('src', result);
      $('#final').attr('src', result);
    });

  } else {
    pdfMake.createPdf(dd).open()
  }
}


canvas = document.querySelector("canvas");
// Adjust canvas coordinate space taking into account pixel ratio,
// to make it look crisp on mobile devices.
// This also causes canvas to be cleared.
function resizeCanvas() {
  // When zoomed out to less than 100%, for some very strange reason,
  // some browsers report devicePixelRatio as less than 1
  // and only part of the canvas is cleared then.
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);
}

window.onresize = resizeCanvas;

$(document).ready(function () {
  resizeCanvas();

  signaturePad = new SignaturePad(canvas);

  $('#clear-button').on("click", function (event) {
    signaturePad.clear();
  });

  $('#sign-button').on("click", function (event) {
    $('#signature').val(signaturePad.toDataURL());
    createDocument(true);
  });

  $('#id-button').on("click", function (event) {
    createDocument(true);
  });

  $('#camera-input').change(function () {
    var reader = new FileReader();
    reader.onloadend = function () {
      $('#camera-preview').attr('src', reader.result)
    }
    reader.readAsDataURL($('#camera-input')[0].files[0]);
  })
  
});
