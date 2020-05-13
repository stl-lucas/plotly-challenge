var ids = ["940"];
var metaData = {"id": 940, "ethnicity": "Caucasian", "gender": "F", "age": 24.0, "location": "Beaufort/NC", "bbtype": "I", "wfreq": 2.0};

// Populate Dropdown menu
var idDrop = d3.select("#selDataset");
ids.forEach(id => {
    var option = idDrop.append("option")
    option.text(id);
})

// Populate Sample Metadata
var id = metaData.id;
var ethnicity = metaData.ethnicity;
var gender = metaData.gender;
var age = metaData.age;
var location = metaData.location;
var bbtype = metaData.bbtype;
var wfreq = metaData.wfreq;
var metaData = d3.select("#sample-metadata");
metaData.append("div").text(`id: ${id}`)


// Build Bar Chart
var trace = {
    x: ["OTU 1167", "OTU 2859", "OTU 482", "OTU 41", "OTU 352", "OTU 2318", "OTU 189"],
    y: [150, 115, 102, 98, 80, 51, 42],
    type: "bar",
  };

var data = [trace];

Plotly.newPlot("bar", data);

// Plotly.newPlot("gauge", data);

// Plotly.newPlot("bubble", data);