import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

let selectedFile;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  // name = 'This is XLSX TO JSON CONVERTER';
  // willDownload = false;

  constructor() {}

  // onFileChange(ev) {
  //   let workBook = null;
  //   let jsonData = null;
  //   const reader = new FileReader();
  //   const file = ev.target.files[0];
  //   reader.onload = (event) => {
  //     const data = reader.result;
  //     workBook = XLSX.read(data, { type: 'binary' });
  //     jsonData = workBook.SheetNames.reduce((initial, name) => {
  //       const sheet = workBook.Sheets[name];
  //       initial[name] = XLSX.utils.sheet_to_json(sheet);
  //       return initial;
  //     }, {});
  //     const dataString = JSON.stringify(jsonData);
  //     document.getElementById('output').innerHTML = dataString.slice(0, 300).concat("...");
  //     this.setDownload(dataString);
  //     console.log(dataString);
      
  //   }
  //   reader.readAsBinaryString(file);
  // }


  // setDownload(data) {
  //   this.willDownload = true;
  //   setTimeout(() => {
  //     const el = document.querySelector("#download");
  //     el.setAttribute("href", `data:text/json;charset=utf-8,${encodeURIComponent(data)}`);
  //     el.setAttribute("download", 'xlsxtojson.json');
  //   }, 1000)
  // }


    onFileChange(even) {
      selectedFile = even.target.files[0]
  }

  onClick(){
    console.log('click');
    if(selectedFile){
      let fileReader = new FileReader();
      fileReader.readAsBinaryString(selectedFile);
      fileReader.onload = (event) => {
        let data = event.target.result;
        let workbook = XLSX.read(data, { type: 'binary' });
        console.log(workbook);
        workbook.SheetNames.forEach ( sheet => {     
          let rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
          console.log('array: ',rowObject);
          document.getElementById('jsondata').innerHTML = JSON.stringify(rowObject,undefined,4)
          
        })
        
        
      }
    }
    
  }


}
