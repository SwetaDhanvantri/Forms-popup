
var fullAddress = {

    "Andhra Pradesh": {
        "Anantapur": ["Anantapur", "Dharmavaram", "Guntakal", "Hindupur", 	"Tadipatri"],
        "Chittoor": ["Akkarampalle", "Avilala", "Chittoor", "Tirupati" , "Madanapalle"],
        "East Godavari":["Amalapuram", "Arempudi", "Rajahmundry" , "Kakinada"],
        "Guntur": ["Amaravati","Guntur", "Narasaraopet",'Tenali', ],
        "Krishna": ["Chilakaluripet", "Gudivada", "Kakinada" , "Machilipatnam", "Mangalagiri", "Machilipatnam" , "Vijayawada", ],
        "Kurnool": ["Adoni", "Kurnool", "Nandyal"],
        "Kadapa" :["Kadapa", "Proddatur"],
        "Nellore" : ["Kavali", "Nellore"],
        "Prakasam": ["Ongole" ],
        "Srikakulam":["Amadalavalasa", "Srikakulam"],
        "Sri Potti Sriramulu Nellore" : ["Nellore"],
        "Visakhapatnam": ["Anakapalle", "Visakhapatnam"],
        "Vizianagaram" : ["Vizianagaram"],
        "West Godavari" : ["Bhimavaram", "Tadepalligudem" , "Eluru"],
        "YSR": ["Kadapa", "	Proddatur"],

},
"Arunachal Pradesh":{

},
"Assam":{

},
"Bihar":{

},
"Chhattisgarh":{

},
"Goa":{

},
"Gujarat":{

},
"Haryana":{

},
"Himachal Pradesh":{

},
"Jharkhand":{

},
"karnataka":{

},
"Kerala":{

},
"Madhya Pradesh":{

},
"Maharashtra":{

},
"Manipur":{

},
"Meghalaya":{

},
"Mizoram":{

},
"Nagaland":{

},
"Odisha":{

},
"Punjab":{

},
"Rajasthan":{

},
"Sikkim":{

},
"Tamil Nadu":{

},
"Telangana":{

},
"Tripura":{

},
"Uttrakhand":{

},
"Uttar Pradesh":{

},
"West Bangal":{

}
}



window.onload = function() {
var stateSel= document.getElementById("state");
var districtSel= document.getElementById("district");
var citySel= document.getElementById("city");
var pinSel=  document.getElementById("pin");
 for(var x in fullAddress){
    stateSel.options[stateSel.options.length]= new Option(x, x);
 }
  stateSel.onchange = function(){
    citySel.length = 1;
    pinSel.length = 1; 
    districtSel.length = 1;
    for (var y in fullAddress[this.value]) {
         districtSel.options[districtSel.options.length] = new Option(y, y);
        }

  }
  districtSel.onchange = function(){
  
    citySel.length = 1;   
    var z = fullAddress[stateSel.value][this.value];

    for (var i = 0; i < z.length; i++) {
         citySel.options[citySel.options.length] = new Option(z[i], z[i]);
        }
  }
 
};


    $(document).ready(function(){
      var date_input=$('input[name="date"]'); //our date input has the name "date"
      var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
      var options={
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
      };
      date_input.datepicker(options);
    })
