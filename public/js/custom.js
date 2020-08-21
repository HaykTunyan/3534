// Custom Style JS.

 // Animations initialization
 new WOW().init();
 
     // Line in dashbord html
     var ctx = document.getElementById("myChart").getContext('2d');
     var myChart = new Chart(ctx, {
       type: 'bar',
       data: {
         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
         datasets: [{
           label: '# of Votes',
           data: [12, 19, 3, 5, 2, 3],
           backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 64, 0.2)'
           ],
           borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)',
             'rgba(255, 159, 64, 1)'
           ],
           borderWidth: 1
         }]
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
  
 
