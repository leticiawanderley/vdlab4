function showPopulacaoAtendida() {
  var color = d3.scaleThreshold();
  var no_data = d3.rgb(190, 190, 200, 0.9);
  var svg = d3.select("#chart2");
  
  d3.csv("data/agua.csv", function(error, dados) {
    if (error) throw error;

    color
      .domain([100, 3000, 7000, 14000, 900000])
      .range([d3.rgb(38, 143, 156, 0.2), d3.rgb(38, 143, 156, 0.4), d3.rgb(38, 143, 156, 0.6), d3.rgb(38, 143, 156, 0.8), d3.rgb(38, 143, 156, 1)]);

    for (var i in dados) {
      var municipio = dados[i];
        
      if (municipio.codigo) {
        if (municipio.populacao_atendida_abst_agua_numhab !== "NA") {
          svg.select(".municipio2_"+municipio.codigo)
            .attr("fill", color(+municipio.populacao_atendida_abst_agua_numhab));
        } else {
          svg.select(".municipio2_"+municipio.codigo)
            .attr("fill", no_data);
        }
      }
    };
  })
}

function showPopulacaoUrbanaAtendida() {
  var color = d3.scaleThreshold();
  var no_data = d3.rgb(190, 190, 200, 0.9);
  var svg = d3.select("#chart2");

  d3.csv("data/agua.csv", function(error, dados) {
    if (error) throw error;

    color
      .domain([100, 3000, 7000, 14000, 900000])
      .range([d3.rgb(38, 143, 156, 0.2), d3.rgb(38, 143, 156, 0.4), d3.rgb(38, 143, 156, 0.6), d3.rgb(38, 143, 156, 0.8), d3.rgb(38, 143, 156, 1)]);

    for (var i in dados) {
      var municipio = dados[i];

      if (municipio.codigo) {
        if (municipio.populacao_urbana_abst_agua_numhab !== "NA") {
          svg.select(".municipio2_"+municipio.codigo)
            .attr("fill", color(+municipio.populacao_urbana_abst_agua_numhab));
        } else {
          svg.select(".municipio2_"+municipio.codigo)
            .attr("fill", no_data);
        }
      }
    };
  })
}

function showPopulacaoTotal() {
  var color = d3.scaleThreshold();
  var no_data = d3.rgb(190, 190, 200, 0.9);
  var svg = d3.select("#chart");

  d3.csv("data/geral.csv", function(error, dados) {
    if (error) throw error;

    color
      .domain([100, 3000, 7000, 14000, 900000])
      .range([d3.rgb(222, 100, 21, 0.2), d3.rgb(222, 100, 21, 0.4), d3.rgb(222, 100, 21, 0.6), d3.rgb(222, 100, 21, 0.8), d3.rgb(222, 100, 21, 1)]);

    for (var i in dados) {
      var municipio = dados[i];

      if (municipio.codigo) {
        if (municipio.pop_total_numhab !== "NA") {
          svg.select(".municipio_"+municipio.codigo)
            .attr("fill", color(+municipio.pop_total_numhab));
        } else {
          svg.select(".municipio_"+municipio.codigo)
            .attr("fill", no_data);
        }
      }
    };
  })
}

function showPopulacaoUrbana() {
  var color = d3.scaleThreshold();
  var no_data = d3.rgb(190, 190, 200, 0.9);
  var svg = d3.select("#chart");

  d3.csv("data/geral.csv", function(error, dados) {
    if (error) throw error;

    color
      .domain([100, 3000, 7000, 14000, 900000])
      .range([d3.rgb(222, 100, 21, 0.2), d3.rgb(222, 100, 21, 0.4), d3.rgb(222, 100, 21, 0.6), d3.rgb(222, 100, 21, 0.8), d3.rgb(222, 100, 21, 1)]);

    for (var i in dados) {
      var municipio = dados[i];

      if (municipio.codigo) {
        if (municipio.pop_urbana_numhab !== "NA") {
          svg.select(".municipio_"+municipio.codigo)
            .attr("fill", color(+municipio.pop_urbana_numhab));
        } else {
          svg.select(".municipio_"+municipio.codigo)
            .attr("fill", no_data);
        }
      }
    };
  })
}