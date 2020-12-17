var lang;
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/"){
  lang = "English";
}
if (window.location.href == "https://jan-ne.github.io/lipu-lili-pona/id/"){
  lang = "Bahasa Indonesia";
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

$(document).ready(function() {
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/id/'>Bahasa Indonesia</option>")
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/'>English</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/es/'>Español</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/eo/'>Esperanto</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/fr/'>Français</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/pl/'>Polski</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/pt/'>Português</option>");
  $("#lang-select").append("<option value='https://jan-ne.github.io/lipu-lili-pona/ru/'>Русский</option>");
  $("[value='"+window.location.href+"']").remove();
  $("#lang-select").prepend("<option value='"+window.location.href+"' selected>"+lang+"</option>");
});
  
