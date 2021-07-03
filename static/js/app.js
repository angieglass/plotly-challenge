// Dropdown IDs 
function optionChanged (){
d3.json("samples.json").then((data) => {
  var subjectId = d3.select("#selDataset"); 
  var allIds = data.names; 

  allIds.map(id => {
      subjectId.append("option").text(id);
  }); 
})
}
optionChanged(); 