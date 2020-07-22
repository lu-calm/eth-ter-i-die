var Intro, DappsSumm, End, FetchAddress, FileSumm;
//var totalDapps = document.querySelectorAll('input[type="checkbox"]:checked').length + document.querySelectorAll('input[type="checkbox"]:unchecked').length;

fetch('/SetData/intro.txt')
  .then(response => response.text())
  .then((data) => {
    Intro = data;
  })

  fetch('/SetData/end.txt')
    .then(response => response.text())
    .then((data) => {
      End = data;
    })

function fetchDappData(value){
FetchAddress = value;
fetch(FetchAddress)
 .then(response => response.text())
 .then((data) => {
 DappsSumm += data;
 })
 }

function getSelectedCheckboxValues(){
  DappsSumm = ""
 const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
     var values = [];
     checkboxes.forEach((checkbox) => {
         values.push(checkbox.value);
     });
    values.forEach(fetchDappData);
    }

function Gather(){
return FileSumm = Intro + DappsSumm + End;
}

//Code for appending blobs (1 - 10 blobs being appended)
//var blob = new Blob([],  {type: "text/plain"});
//for (var i=0; i<10; i++){
//    blob = new Blob([blob," "+i], {type: "text/plain"});
//}


//below uses gather() to retrieve FileSum

    function download_file(name, contents, mime_type) {
        mime_type = mime_type || "text/plain";

        var blob = new Blob([contents], {type: mime_type});

        var dlink = document.createElement('a');
        dlink.download = name;
        dlink.href = window.URL.createObjectURL(blob);
        dlink.onclick = function(e) {
            // revokeObjectURL needs a delay to work properly
            var that = this;
            setTimeout(function() {
                window.URL.revokeObjectURL(that.href);
            }, 1500);
        };

        dlink.click();
        dlink.remove();
    }
