// Custom Style JS.

 // Animations initialization
 new WOW().init();
 
     // Line in dashbord html
     var ctx = document.getElementById("TransfersChart").getContext('2d');
     var TransfersChart = new Chart(ctx, {
       type: 'bar',
       data: {
         datasets: [
         {
           label: 'Name Blue ',
           data : [ 
             1100 
            ],
           backgroundColor: '#007BFF'           
         },
         {
          label: 'Name Red',
          data : [ 
            900 
          ],
          backgroundColor: '#FF4169'
         }
        ]
       },
       options: {
         scales: {
           yAxes: [{
             ticks: {
               beginAtZero: true
             }
           }]
         }
       }
     });

// 
var ctxBc = document.getElementById('bubbleChart').getContext('2d');
var bubbleChart = new Chart(ctxBc, {
  type: 'bubble',
  data: {
    datasets: [{
      label: 'John',
      data: [{
        x: 3,
        y: 7,
        r: 10
      }],
      backgroundColor: "#ff6384",
      hoverBackgroundColor: "#ff6384"
    }, {
      label: 'Peter',
      data: [{
        x: 5,
        y: 7,
        r: 10
      }],
      backgroundColor: "#44e4ee",
      hoverBackgroundColor: "#44e4ee"
    }, {
      label: 'Donald',
      data: [{
        x: 7,
        y: 7,
        r: 10
      }],
      backgroundColor: "#62088A",
      hoverBackgroundColor: "#62088A"
    }]
  }
})

// 



     // Regular map in contactus.html
    function regular_map() {
        var var_location = new google.maps.LatLng(40.725118, -73.997699);
  
        var var_mapoptions = {
          center: var_location,
          zoom: 14
        };
  
        var var_map = new google.maps.Map(document.getElementById("map-container"),
          var_mapoptions);
  
        var var_marker = new google.maps.Marker({
          position: var_location,
          map: var_map,
          title: "New York"
        });
    }
 
 
