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
    var userId = data.samples[0].id;
    var sample_values = data.samples[0].sample_values.slice(0,10).reverse();
    var otu_ids = data.samples[0].otu_ids.slice(0,10);
    var otu_labels = data.samples[0].otu_labels.slice(0,10);
    var otuIds = otu_ids.map(d => "OTU " + d)

  
    // Checking data 
    // console.log(userId);
    // console.log(sample_values);
    // console.log(otu_ids);
    console.log(otu_labels);
    // console.log(data);

// Create the Trace for the Bar Chart 
    var trace = {
      x: sample_values,
      y: otuIds,
      type: "bar",
      orientation: 'h',
      text: otu_labels
    };
    var dataBar = [trace];

// Define the plot layout
var layoutBar = {
  title: "Top 10 Bacteria Cultures Found",
};

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar", dataBar, layoutBar);

// Create the Trace for the Bubble Chart 
var trace1 = {
  x: data.samples[0].otu_ids,
  y: data.samples[0].sample_values,
  text: data.samples[0].otu_labels.toString(),
  mode: 'markers',
  marker: {
    color: data.samples[0].otu_ids,
    colorscale: 'Portland',
    size: data.samples[0].sample_values
  }
};
var dataBubble = [trace1];

// Define the plot layout
var layoutBubble = {
title: "Bacteria Cultures Per Samble",

};

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bubble", dataBubble, layoutBubble);


  })
}


// Run function 
getData();
optionChanged(); 