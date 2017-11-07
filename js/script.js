google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
      var data = google.visualization.arrayToDataTable([
        ['Habilidade', 'Nível'],
        ['Java', 5],
        ['JEE', 4],
        ['Hibernate', 4],
        ['EJB', 4],
        ['Spring', 4.5],
        ['Java Script', 4],
        ['HTML5', 4],
        ['CSS3', 4],
        ['JSF', 4],
        ['Struts', 3],
        ['Jasper', 4],
        ['Angular JS', 3],
        ['Node JS', 3],
        ['Electron', 3],
        ['SQL', 4],
        ['Oracle', 3],
        ['MySql', 3],
        ['SqlServer', 3],
        ['Jboss 7', 3],
        ['Websphere', 3],
        ['JUnit', 4],
        ['Mokito', 4],
        ['Web Services', 4],
        ['Rest', 4],
        ['Soap', 3]
      ]);

      var options = {
        title: 'Habilidades', vAxis: {title: 'Nível'},
        title: 'Habilidades',
        chartArea: {width: '85%'},
        annotations: {
          alwaysOutside: false,
          textStyle: {
            fontSize: 15,
            auraColor: 'red',
            color: '#555'
          },
          boxStyle: {
            stroke: '#ccc',
            strokeWidth: 2,
            gradient: {
              color1: '#f3e5f5',
            }
          }
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }


$(document).ready(function(){
    $('#myFixed').scrollToFixed();
});

  //  $(function () {
  //      //incluso essa variavel para setar atributos do css depois
  //      var elemento = $('.myFixed');

  //      $(window).scroll(function () {
  //          //distancia que o scroll devera rolar para aparecer o box da div
  //          if ($(this).scrollTop() > 200) {
  //              //bloco incluso para setar o css
  //              elemento.css({
  //                  'position': 'fixed',
  //                      'top': '0%',
  //                      'width':'97.6%',
  //                      'height':'100%'
  //              });

  //              $('.element').fadeIn();
  //          } else {
  //             //bloco incluso para setar o css
  //              elemento.css({
  //                  'position': 'relative',
  //                      'width':'100%',
  //                      'height':'100%'
  //              });
  //              $('.element').fadeIn();
  //          }
  //      });
  //  });
    