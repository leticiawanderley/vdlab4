var
	width = 400,
  height = 600;

var svg2 = d3.select("#chart2")
	.append("svg")
	.attr('version', '1.1')
	.attr('viewBox', '0 0 '+width+' '+height)
	.attr('width', '100%');

var projection = d3.geoAlbers()
  .center([-50.855833, -10.303889])
  .rotate([0, 0])
  .parallels([0, 0])
  .scale(1500);

var path = d3.geoPath().projection(projection);

var color = d3.scaleThreshold();

var no_data = d3.rgb(190, 190, 200, 0.9);

d3.json("data/municipios_sab.json", function(error, pb) {
  if (error) throw error;
		  
  var municipios2 = topojson.feature(pb, pb.objects.municipios_sab);

  svg2.selectAll(".municipio2")
    .data(municipios2.features)
    .enter().append("path")
      .attr("id", function(d) { return "municipio2_" + d.properties.ID; })
      .attr("d", path);

  d3.csv("data/municipios_sab.csv", function(error, dados) {
    if (error) throw error;
      	
    for (var i in dados) {
      var municipio = dados[i];
      		
      if (municipio.GEOCODIGO) {
      	svg2.select("#municipio2_"+municipio.GEOCODIGO)
          .attr("class", function() { return "municipio2_"+municipio.GEOCODIGO1; });
      }
    };

    d3.csv("data/agua.csv", function(error, dados) {
      if (error) throw error;

      color
        .domain([100, 3000, 7000, 14000, 900000])
        .range([d3.rgb(84, 39, 143, 0.2), d3.rgb(84, 39, 143, 0.4), d3.rgb(84, 39, 143, 0.6), d3.rgb(84, 39, 143, 0.8), d3.rgb(84, 39, 143, 1)]);

      for (var i in dados) {
        var municipio = dados[i];

        if (municipio.codigo) {
          if (municipio.populacao_urbana_abst_agua_numhab !== "NA") {
            svg2.select(".municipio2_"+municipio.codigo)
              .attr("fill", color(+municipio.populacao_urbana_abst_agua_numhab));
          } else {
            svg2.select(".municipio2_"+municipio.codigo)
              .attr("fill", no_data);
          }
        }
      };
    })
  })
});
