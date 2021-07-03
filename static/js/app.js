// Dropdown IDs list with the json key-values "names". This array has all the ID's. 
// I used .map function to append all the ids to the "option" on the dropwdown. 
// This is on a function called "optionChanged", its on the index.html already. 

function optionChanged (){
d3.json("samples.json").then((data) => {
  var subjectId = d3.select("#selDataset"); 
  var allIds = data.names; 
  allIds.map(id => {subjectId.append("option").text(id);
}); 
})
}

// The dropdown needs an event handler. 
// This event handler will invoque the function to getData and show all the charts. 
var subjectId = d3.select("#selDataset");
// subjectId.on("change",getData); 

// This getData function will obtain all the data from the JSON and will show all the charts. 

function getData() {
  var subjectId = d3.select("#selDataset");
  var dataset = subjectId.property("value");

  d3.json("samples.json").then((data) => {
    console.log(data);
    // var sample_values = data.samples[0].sample_values;
    // var otu_ids = data.samples[0].otu_ids;
    // var otu_labels = data.samples[0].otu_labels;
 

  })
}


// Run function 
getData();
optionChanged(); 