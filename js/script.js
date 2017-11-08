google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
  var data = google.visualization.arrayToDataTable([
         ['Habilidade', 'Nível', { role: 'annotation' } ],
         ['Java', 5, 'Java' ],
         ['JEE', 4, 'JEE' ],
         ['Hibernate', 4, 'Hibernate' ],
         ['EJB', 4, 'EJB' ],
         ['JSF', 4, 'JSF' ],
         ['Primefaces', 4, 'Primefaces' ],
         ['Web Services', 4, 'Web Services' ],
         ['Rest', 4, 'Rest' ],
         ['Soap', 3, 'Soap' ],
         ['SQL', 4, 'SQL' ],
         ['Oracle', 3, 'Oracle' ],
         ['MySql', 3, 'MySql' ],
         ['MS Sql Server', 3, 'MS Sql Server' ],
         ['Jboss', 3, 'Jboss' ],
         ['TomCat', 3, 'TomCat' ],
         ['Websphere', 3, 'Websphere' ],
         ['Spring', 4.5, 'Spring' ],
         ['Spring MVC', 4, 'Spring MVC' ],
         ['Spring Batch', 4, 'Spring Batch' ],
         ['Spring Boot', 3, 'Spring Boot' ],
         ['Struts', 3, 'Struts' ],
         ['HTML5', 4, 'HTML5' ],
         ['CSS3', 4, 'CSS3' ],
         ['Java Script', 4, 'Java Script' ],
         ['Jquery', 4, 'Jquery' ],
         ['Bootstrap', 4, 'Bootstrap' ],
         ['Node JS', 2, 'Node JS' ],
         ['Angular JS', 2, 'Angular JS' ],
         ['Electron', 3, 'Electron' ],
      ]);

      var options = {
        title: 'Habilidades', vAxis: {title: 'Nível'},
        title: 'Habilidades',
        chartArea: {width: '100%'},
        annotations: {
          alwaysOutside: false,
          textStyle: {
            fontSize: 15,
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