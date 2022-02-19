var lang;
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/"){
  lang = "English";
  document.getElementById("icon").href="lipu_lili_pona_en.pdf";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/id/"){
  lang = "Bahasa Indonesia";
  document.getElementById("icon").href="lipu_lili_pona_id.pdf";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/cs/"){
  lang = "Čeština";
  document.getElementById("icon").href="lipu_lili_pona_cs.pdf";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/de/"){
  lang = "Deutsch";
  document.getElementById("icon").href="lipu_lili_pona_de.pdf";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/es/"){
  lang = "Español";
  document.getElementById("icon").href="lipu_lili_pona_es.pdf";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/eo/"){
  lang = "Esperanto";
  document.getElementById("icon").href="lipu_lili_pona_eo.pdf";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/fr/"){
  lang = "Français";
  document.getElementById("icon").href="lipu_lili_pona_fr.pdf";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/it/"){
  lang = "Italiano";
  document.getElementById("icon").href="lipu_lili_pona_it.pdf";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/nl/"){
  lang = "Nederlands";
  document.getElementById("icon").href="lipu_lili_pona_nl.pdf";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/pl/"){
  lang = "Polski";
  document.getElementById("icon").href="lipu_lili_pona_pl.pdf";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/pt/"){
  lang = "Português";
  document.getElementById("icon").href="lipu_lili_pona_pt.pdf";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/ru/"){
  lang = "Русский";
  document.getElementById("icon").href="lipu_lili_pona_ru.pdf";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/sk/"){
  lang = "Slovenčina";
  document.getElementById("icon").href="lipu_lili_pona_sk.pdf";
}  
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/tr/"){
  lang = "Türkçe";
  document.getElementById("icon").href="lipu_lili_pona_tr.pdf";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/zh/"){
  lang = "中文";
  document.getElementById("icon").href="lipu_lili_pona_zh.pdf";
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
  
