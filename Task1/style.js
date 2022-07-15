function showResult() {
  const htmlValue = document.getElementById("htmlValue").value;
  const cssvalue =
    "<style>" + document.getElementById("cssvalue").value + "</style>";
  const scriptValue =
    "<script>" + document.getElementById("scriptValue").value + "</div>script>";
  const frame =
    document.getElementById("compalier_area").contentWindow.document;
  frame.open();
  frame.write(htmlValue + cssvalue + scriptValue);
}
