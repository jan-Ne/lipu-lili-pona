var lang;
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/"){
  lang = "English";
  $("#pdf-icon").attr("href", "lipu_lili_pona_en.pdf");
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/id/"){
  lang = "Bahasa Indonesia";
  $("#pdf-icon").attr("href", "lipu_lili_pona_id.pdf");
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/cs/"){
  lang = "Čeština";
  $("#pdf-icon").attr("href", "lipu_lili_pona_cs.pdf");
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/de/"){
  lang = "Deutsch";
  $("#pdf-icon").attr("href", "lipu_lili_pona_de.pdf");
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/es/"){
  lang = "Español";
  $("#pdf-icon").attr("href", "lipu_lili_pona_es.pdf");
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/eo/"){
  lang = "Esperanto";
  $("#pdf-icon").attr("href", "lipu_lili_pona_eo.pdf");
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/fr/"){
  lang = "Français";
  $("#pdf-icon").attr("href", "lipu_lili_pona_fr.pdf");
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/it/"){
  lang = "Italiano";
  $("#pdf-icon").attr("href", "lipu_lili_pona_it.pdf");
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/nl/"){
  lang = "Nederlands";
  $("#pdf-icon").attr("href", "lipu_lili_pona_nl.pdf");
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/pl/"){
  lang = "Polski";
  $("#pdf-icon").attr("href", "lipu_lili_pona_pl.pdf");
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/pt/"){
  lang = "Português";
  $("#pdf-icon").attr("href", "lipu_lili_pona_pt.pdf");
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/ru/"){
  lang = "Русский";
  $("#pdf-icon").attr("href", "lipu_lili_pona_ru.pdf");
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/sk/"){
  lang = "Slovenčina";
  $("#pdf-icon").attr("href", "lipu_lili_pona_sk.pdf");
}  
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/tr/"){
  lang = "Türkçe";
  $("#pdf-icon").attr("href", "lipu_lili_pona_tr.pdf");
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/zh/"){
  lang = "中文";
  $("#pdf-icon").attr("href", "lipu_lili_pona_zh.pdf");
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/lipu-ante"){
  lang = "lipu ante";
}

$(document).ready(function() {
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/id/'>Bahasa Indonesia</option>")
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/cs/'>Čeština</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/de/'>Deutsch</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/'>English</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/es/'>Español</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/eo/'>Esperanto</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/fr/'>Français</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/it/'>Italiano</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/nl/'>Nederlands</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/pl/'>Polski</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/pt/'>Português</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/ru/'>Русский</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/sk/'>Slovenčina</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/tr/'>Türkçe</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/zh/'>中文</option>");
  $("[value='"+window.location.href+"']").remove();
  $("#lang-select").prepend("<option value='"+window.location.href+"' selected>"+lang+"</option>");
});
  
