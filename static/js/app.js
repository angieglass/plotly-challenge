// Dropdown IDs 
function optionChanged (){
d3.json("samples.json").then((data) => {
  var subjectId = d3.select("#selDataset"); 
  var allIds = data.names; 
  allIds.map(id => {subjectId.append("option").text(id);
}); 
})
}

// The event handler, its the dropdown 
var subjectId = d3.select("#selDataset");
// subjectId.on("change",getData); 

// getData function. It will hold all the charts 
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