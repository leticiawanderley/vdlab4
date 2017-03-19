var
	width = 400,
  height = 600;

var svg = d3.select("#chart")
	.append("svg")
	.attr('version', '1.1')
	.attr('viewBox', '0 0 '+width+' '+height)
	.attr('width', '100%')
	.attr('class', 'map-chart');

var projection = d3.geoAlbers()
  .center([-29.855833, -11.303889])
  .rotate([0, 0])
  .parallels([0, 0])
  .scale(1500);

var path = d3.geoPath().projection(projection);

d3.json("data/municipios_sab.json", function(error, pb) {
  if (error) throw error;
		  
  var municipios = topojson.feature(pb, pb.objects.municipios_sab);

  svg.selectAll(".municipio")
    .data(municipios.features)
    .enter().append("path")
      .attr("id", function(d) { return "municipio_" + d.properties.ID; })
      .attr("d", path);

  d3.csv("data/municipios_sab.csv", function(error, dados) {
    if (error) throw error;
      	
    for (var i in dados) {
      var municipio = dados[i];
      		
      if (municipio.GEOCODIGO) {
      	svg.select("#municipio_"+municipio.GEOCODIGO)
          .attr("class", function() { return "municipio_"+municipio.GEOCODIGO1; });
      }
    };
    showPopulacaoTotal();    
  })
});