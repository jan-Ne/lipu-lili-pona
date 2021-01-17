var lang;
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/"){
  lang = "English";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/id/"){
  lang = "Bahasa Indonesia";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/cs/"){
  lang = "Čeština";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/de/"){
  lang = "Deutsch";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/es/"){
  lang = "Español";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/eo/"){
  lang = "Esperanto";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/fr/"){
  lang = "Français";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/pl/"){
  lang = "Polski";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/pt/"){
  lang = "Português";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/ru/"){
  lang = "Русский";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/sk/"){
  lang = "Slovenčina";
}  
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/tr/"){
  lang = "Türkçe";  
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/zh/"){
  lang = "中文";
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
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/pl/'>Polski</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/pt/'>Português</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/ru/'>Русский</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/sk/'>Slovenčina</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/tr/'>Türkçe</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/zh/'>中文</option>");
  $("[value='"+window.location.href+"']").remove();
  $("#lang-select").prepend("<option value='"+window.location.href+"' selected>"+lang+"</option>");
});
  
