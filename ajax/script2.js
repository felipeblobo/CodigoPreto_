const httpRequest;
if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 8 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

httpRequest.onreadystatechange = () => {
  httpRequest.open('GET', 'https://www.icmbio.gov.br/ran/images/stories/Downloads/Tutorial_para_utiliza%C3%A7%C3%A3o_do_Script.docx', true);
  httpRequest.send(null);
};

