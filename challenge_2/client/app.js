

let = saveFile = () => {
  // Get the data from input element on the form
  const data = document.getElementById('inputID');
  console.log('data from client: ', data);

  // This variable stores all the data.
  let csvData = flatten(data);
  console.log('data after csv: ', csvData);

  // Convert the text to BLOB.
  const textToBLOB = new Blob([csvData], { type: 'text/plain' });
  const sFileName = 'formData.txt'; // The file to save the data.

  // create a link and assign the text file as the link's download property
  let newLink = document.createElement("a");
  newLink.download = sFileName;

  // Once the linked is created, assign the BLOG object as the href(or as the URL) to the newly created Link tag
  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    console.log (newLink);
  }
  else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  // call the click event of the <a> tag, the browser downloads the file
  newLink.click();
};

$(document).ready(function () {


  $('#form').submit((e) => {

  });




});


// document.getElementById('btn').onclick = function submit() {
//   console.log(document.getElementById('input').value);
// }

// var encodedUri = encodeURI(flatten);
// window.open(encodedUri);

// $("#btnID").click(function() {
// console.log('hi');

//   var json_pre = document.getElementById('input').value;
//   var json = $.parseJSON(json_pre);

//   var csv = flatten(json);
//   var downloadLink = document.createElement("a");
//   var blob = new Blob(["\ufeff", csv]);
//   var url = URL.createObjectURL(blob);
//   downloadLink.href = url;
//   downloadLink.download = "data.csv";

//   document.body.appendChild(downloadLink);
//   downloadLink.click();
//   document.body.removeChild(downloadLink);
//   });

  // https://www.codegrepper.com/code-examples/javascript/convert+data+to+csv+file+in+javascript


