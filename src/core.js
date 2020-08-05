var Intro, DappsSumm = "", End, FetchAddress, FileSumm, IntroEndStatus;



export function introAndEndData() {

      fetch('/BaseData/intro.txt')
      .then(response => response.text())
      .then((data) => {
        Intro = data
        IntroEndStatus = "Full";
      })

      fetch('/BaseData/end.txt')
        .then(response => response.text())
        .then((data) => {
          End = data;
        })
}

export function remvoveIntroAndEndData() {
  Intro = ""
  End = ""
  IntroEndStatus = "Empty"
}

export function returnintroEndStatus(){
  return IntroEndStatus
}

export function fetchDappData(value){
   FetchAddress = value;
   fetch(FetchAddress)
    .then(response => response.text())
    .then((data) => {
    DappsSumm += data;
    })
    }

export function getSelectedCheckboxValues(){
     DappsSumm = ""
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
        var values = [];
        checkboxes.forEach((checkbox) => {
            values.push(checkbox.value);
        });
       values.forEach(fetchDappData);
     }

export function gather(){
   return FileSumm = Intro + DappsSumm + End;
 }

export function download_FS(name,contents) {
       var FileSaver = require('file-saver');
       var blob = new Blob([contents], {type: "text/plain;charset=utf-8"});
       FileSaver.saveAs(blob, name);
}
