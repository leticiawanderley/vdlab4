function showPopulacaoAtendida() {
  document.getElementById("abstTotal").className += " abstButtonSel";
  document.getElementById("abstUrbana").className = document.getElementById("abstUrbana").className.replace(' abstButtonSel', '');
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
  document.getElementById("abstUrbana").className += " abstButtonSel";
  document.getElementById("abstTotal").className = document.getElementById("abstTotal").className.replace(' abstButtonSel', '');
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
  document.getElementById("popTotal").className += " popButtonSel";
  document.getElementById("popUrbana").className = document.getElementById("popUrbana").className.replace(' popButtonSel', '');
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
  document.getElementById("popUrbana").className += " popButtonSel";
  document.getElementById("popTotal").className = document.getElementById("popTotal").className.replace(' popButtonSel', '');
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