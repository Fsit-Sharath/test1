

//map click functionalities

$(document).ready(function(){

    var element=$('.country-list li');
    $(element).click(function(){
        $(element).removeClass('active'); 
        $(this).addClass('active');
        $('#location').text($(this).text());
    });

    $('.card-header .btn-link').click(function(e){
        e.preventDefault();
        var e1=$(this).closest('.card').find('.collapse');
        if(!$(e1).hasClass('in')){
            $(e1).addClass('in');
        }
        else{
            $(e1).removeClass('in');
        }
    });



});

     var lists = {
    africa: ["AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "DJ", "DZ", "EG", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "KE", "LR", "LS", "LY", "MA", "MU", "MG", "ML", "MR", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SD", "SL", "SN", "SO", "SS", "SZ", "TD", "TG", "TN", "TZ", "UG", "ZA", "ZM", "ZW", "EH", "KM", "GO", "JU", "SH", "ST", "YT", "BV", "CV", "SC"],
    asia: ["AE", "AF", "BD", "BN", "IO", "BT", "CN", "ID", "IL", "IN", "IQ", "IR", "JO", "JP", "KG", "KH", "KP", "KR", "KW", "KZ", "LA", "LB", "LK", "MO", "MM", "MN", "MY", "NP", "OM", "PH", "PK", "PS", "QA", "SA", "SY", "TH", "TJ", "TL", "TM", "TW", "UZ", "VN", "YE", "HK", "MV", "BH", "SG"],
    europe: ["AL", "AM", "AT", "AZ", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "JE", "FI", "FR", "GB", "GE", "GR", "HR", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MD", "ME", "MK", "NL", "NO", "PL", "PT", "RO", "RS", "SE", "SI", "SJ", "SK", "TR", "UA", "RU", "VA", "MT", "MC", "XK", "LI", "IM", "GI", "FO", "AD", "AX", "GG", "SM"],
    northAmerica: ["BS", "BZ", "CA", "CR", "CU", "DO", "GL", "GT", "HN", "HT", "JM", "MX", "NI", "PA", "PR", "SV", "US", "AG", "AW", "BB", "BL", "GD", "KN", "LC", "MQ", "TC", "VG", "AI", "BM", "DM", "PM", "GP", "KY", "MF", "MS", "SX", "TT", "VC", "VI", "BQ", "CW"],
    southAmerica: ["AR", "BO", "BR", "CL", "CO", "EC", "FK", "GF", "GY", "PE", "PY", "SR", "UY", "VE", "GS"],
    oceania: ["AS", "AU", "UM-FQ", "CC", "CX", "FJ", "FM", "GU", "HM", "UM-HQ", "UM-DQ", "UM-JQ", "KI", "MH", "UM-MQ", "MP", "NC", "NF", "NR", "NU", "NZ", "PG", "PW", "SB", "TF", "TK", "TL", "TO", "TV", "VU", "UM-WQ", "WF", "WS", "CK", "PF", "PN"]
  };

// svg path for target icon

var targetSVG = "M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16.125c-3.383 0-6.125-2.742-6.125-6.125s2.742-6.125 6.125-6.125 6.125 2.742 6.125 6.125-2.742 6.125-6.125 6.125zM12.125 10c0-2.14 1.735-3.875 3.875-3.875s3.875 1.735 3.875 3.875c0 2.14-1.735 3.875-3.875 3.875s-3.875-1.735-3.875-3.875z";



var zoomLevel;

var map = AmCharts.makeChart( "chartdiv", {

  "type": "map",

  "theme": "light",

  "backgroundColor":"#f2f2f2",

  "color":"#999999",


  "zoomControl": {

    "zoomControlEnabled": false,

    "homeButtonEnabled": false

  },
  
  "dataProvider": {

    "map": "worldLow",

    "getAreasFromMap": true,

    "areas":[],

    "images": [	{
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Mexico",
        "color": "#CC0000",
        "title": "Mexico",
        "latitude": 22.605797,
        "longitude":-102.021401,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
    },
    {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Colombia",
        "color": "#CC0000",
        "title": "Colombia",
        "latitude": 4.105813,
        "longitude": -73.324114,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
    },
    {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "bolovia",
        "color": "#CC0000",
        "title": "Bolivia",
        "latitude": -17.412155,
        "longitude": -64.519026,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
    },

    {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "chile",
        "color": "#CC0000",
        "title": "Chile",
        "latitude": -32.232677,
        "longitude": -70.992880,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
    },
    {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Dominican",
        "color": "#CC0000",
        "title": "Dominican Republic",
        "latitude": 18.968398, 
        "longitude": -70.542779,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
    },
    {

    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "ecuador",
        "color": "#CC0000",
        "title": "Ecuador",
        "latitude": -1.708649,
        "longitude": -78.732270,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
    },

    {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Guatemala",
        "color": "#CC0000",
        "title": "Guatemala",
        "latitude": 15.510344,
        "longitude": -90.215904,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
    },
    {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "panama",
        "color": "#CC0000",
        "title": "Panama",
        "latitude": 8.363277,
        "longitude": -81.118513,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
    },

    {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "peru",
        "color": "#CC0000",
        "title": "Peru",
        "latitude": -9.520870, 
        "longitude": -75.405454,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
    },

    {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Mexico",
        "color": "#CC0000",
        "title": "USA",
        "latitude": 41.083045,
        "longitude":-101.579442,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker3.png",
         "width":44,
         "height":61
    },
   

    

     {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "italy",
        "color": "#CC0000",
        "title": "Italy",
        "latitude": 42.868032,
        "longitude":12.529558,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
    },
    {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "russia",
        "color": "#CC0000",
        "title": "Russia and CIS countries",
        "latitude": 61.287421,
        "longitude":89.011541,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker3.png",
         "width":44,
         "height":61
    },

    {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "china",
        "color": "#CC0000",
        "title": "People's Republic of China",
        "latitude": 35.496967, 
        "longitude":97.399759,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
    },
   {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "southkorea",
        "color": "#CC0000",
        "title": "South Korea",
        "latitude": 36.490200,
        "longitude":127.937020,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
    },
   {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Philippines",
        "color": "#CC0000",
        "title": "Philippines",
        "latitude": 12.354545,
        "longitude":123.408630,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
    },
    {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Indonesia",
        "color": "#CC0000",
        "title": "Indonesia",
        "latitude": -3.250442,
        "longitude":121.697319,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
    },
   
   {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "japan",
        "color": "#CC0000",
        "title": "Japan",
        "latitude": 35.870954,
        "longitude":137.684908,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
    }, 

    {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Malasya",
        "color": "#CC0000",
        "title": "Malasya",
        "latitude": 3.488652,
        "longitude":102.178747,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
    },
    {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Thailand",
        "color": "#CC0000",
        "title": "Thailand",
        "latitude":15.689145,
        "longitude":100.665463,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
    }, 
   
   {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Taiwan",
        "color": "#CC0000",
        "title": "Taiwan",
        "latitude": 23.731441,
        "longitude":120.960402,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
    },
   {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Turkey",
        "color": "#CC0000",
        "title": "Turkey",
        "latitude": 39.669302, 
        "longitude":34.805561,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
    },
    {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Vietnam",
        "color": "#CC0000",
        "title": "Vietnam",
        "latitude": 13.852186,
        "longitude":108.192510,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
    },
        {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Morocco",
        "color": "#CC0000",
        "title": "Morocco",
        "latitude": 32.169403,
        "longitude":-6.150027,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
    },
    {
    "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Greece",
        "color": "#CC0000",
        "title": "Greece",
        "latitude": 39.200757,
        "longitude":21.957158,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker3.png",
         "width":44,
         "height":61
    },

    {
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Spain",
        "color": "#CC0000",
        "title": "Spain",
        "latitude": 40.541672,
        "longitude":-4.163107,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Algeria",
        "color": "#CC0000",
        "title": "Algeria",
        "latitude":27.640436,
        "longitude":2.897152,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Poland",
        "color": "#CC0000",
        "title": "Poland",
        "latitude":52.111979,
        "longitude":19.219473,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Congo",
        "color": "#CC0000",
        "title": "Democratic Republic of Congo",
        "latitude":-2.009921,
        "longitude":23.613203,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Albania",
        "color": "#CC0000",
        "title": "Albania",
        "latitude":41.225462,
        "longitude":20.033624,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Egypt",
        "color": "#CC0000",
        "title": "Egypt",
        "latitude":26.490927,
        "longitude":29.773288,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},
{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Germany",
        "color": "#CC0000",
        "title": "Germany",
        "latitude":50.840847,
        "longitude":10.187353,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
},
{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Austria",
        "color": "#CC0000",
        "title": "Austria",
        "latitude":47.467821,
        "longitude":14.370709,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Iran",
        "color": "#CC0000",
        "title": "Iran",
        "latitude":32.427908,
        "longitude":53.688046,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Ireland",
        "color": "#CC0000",
        "title": "Ireland",
        "latitude":53.142367,
        "longitude":-7.692054,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Belarus",
        "color": "#CC0000",
        "title": "Belarus",
        "latitude":53.709807,
        "longitude":27.953389,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Bulgaria",
        "color": "#CC0000",
        "title": "Bulgaria",
        "latitude":42.733883,
        "longitude":25.485830,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Kingdom of Saudi Arabia",
        "color": "#CC0000",
        "title": "Kingdom of Saudi Arabia",
        "latitude":23.885942,
        "longitude":45.079162,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Croatia",
        "color": "#CC0000",
        "title": "Croatia",
        "latitude":45.100000,
        "longitude":15.200000,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Lebanese Republic",
        "color": "#CC0000",
        "title": "Lebanese Republic",
        "latitude":33.854721,
        "longitude":35.862285,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Slovakia",
        "color": "#CC0000",
        "title": "Slovakia",
        "latitude":48.669026,
        "longitude":19.699024,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},


{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Slovenia",
        "color": "#CC0000",
        "title": "Slovenia",
        "latitude":46.151241,
        "longitude":14.995463,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Brazil",
        "color": "#CC0000",
        "title": "Brazil",
        "latitude":-9.572259,
        "longitude":-52.453234,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Estonia",
        "color": "#CC0000",
        "title": "Estonia",
        "latitude":58.595272,
        "longitude":25.013607,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},


{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Latvia",
        "color": "#CC0000",
        "title": "Latvia",
        "latitude":56.879635,
        "longitude":24.603189,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Lithuania",
        "color": "#CC0000",
        "title": "Lithuania",
        "latitude":55.169438,
        "longitude":23.881275,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Finland",
        "color": "#CC0000",
        "title": "Finland",
        "latitude":61.924110,
        "longitude":25.748151,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "France",
        "color": "#CC0000",
        "title": "France",
        "latitude":46.227638,
        "longitude":2.213749,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Hungary",
        "color": "#CC0000",
        "title": "Hungary",
        "latitude":47.162494,
        "longitude":19.503304,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Republic of Cameroon",
        "color": "#CC0000",
        "title": "Republic of Cameroon",
        "latitude":7.369722,
        "longitude":12.354722,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Republic of Congo",
        "color": "#CC0000",
        "title": "Republic of Congo",
        "latitude":-0.228021,
        "longitude":15.827659,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Republic of C“te d'Ivoire",
        "color": "#CC0000",
        "title": "Republic of C“te d'Ivoire",
        "latitude":7.539989,
        "longitude":-5.547080,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Republic of Guinea",
        "color": "#CC0000",
        "title": "Republic of Guinea",
        "latitude":9.945587,
        "longitude":-9.696645,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Republic of Iraq",
        "color": "#CC0000",
        "title": "Republic of Iraq",
        "latitude":33.223191,
        "longitude":43.679291,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Republic of Senegal",
        "color": "#CC0000",
        "title": "Republic of Senegal",
        "latitude":14.497401,
        "longitude":-14.452362,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Macedonia",
        "color": "#CC0000",
        "title": "Macedonia",
        "latitude":41.608635,
        "longitude":21.745275,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Serbia",
        "color": "#CC0000",
        "title": "Serbia",
        "latitude":44.016521,
        "longitude":21.005859,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Moldova",
        "color": "#CC0000",
        "title": "Moldova",
        "latitude":47.411631,
        "longitude":28.369885,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Montenegro",
        "color": "#CC0000",
        "title": "Montenegro",
        "latitude":42.708678,
        "longitude":19.374390,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Norway",
        "color": "#CC0000",
        "title": "Norway",
        "latitude":60.472024,
        "longitude":8.468946,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Portugal",
        "color": "#CC0000",
        "title": "Portugal",
        "latitude":39.399872,
        "longitude":-8.224454,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "State of Kuwait",
        "color": "#CC0000",
        "title": "State of Kuwait",
        "latitude":29.311660,
        "longitude":47.481766,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Czech Republic",
        "color": "#CC0000",
        "title": "Czech Republic",
        "latitude":49.817492,
        "longitude":15.472962,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Romania",
        "color": "#CC0000",
        "title": "Romania",
        "latitude":45.943161,
        "longitude":24.966760,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Switzerland",
        "color": "#CC0000",
        "title": "Switzerland",
        "latitude":46.818188,
        "longitude":8.227512,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Syrian Arab Republic",
        "color": "#CC0000",
        "title": "Syrian Arab Republic",
        "latitude":34.802075,
        "longitude":38.996815,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "United Arab Emirates",
        "color": "#CC0000",
        "title": "United Arab Emirates",
        "latitude":23.424076,
        "longitude":53.847818,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Sweden",
        "color": "#CC0000",
        "title": "Sweden",
        "latitude":60.128161,
        "longitude":18.643501,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Tunisia",
        "color": "#CC0000",
        "title": "Tunisia",
        "latitude":33.886917,
        "longitude":9.537499,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker2.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "United Kingdom",
        "color": "#CC0000",
        "title": "United Kingdom",
        "latitude":55.378051,
        "longitude":-3.435973,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},

{
        "groupId": "conti_mark",
        "zoomLevel": 14,
        "scale": 1,
        "id": "Ukraine",
        "color": "#CC0000",
        "title": "Ukraine",
        "latitude":48.379433,
        "longitude":31.165580,   
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/marker1.png",
         "width":44,
         "height":61
},
     {
        "groupId": "companies_spain",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-white.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Company",
        "latitude": 40.435516,
        "longitude": -3.686133,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Spain</span>"+
                        "<h2>Lucta S.A.-Headquarters-</h2>"+
                        "<p><span>Company</span>"+
                        "Feed Additives / Fragrance / Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Registered office & tax address:<br>"+
                        "Calle Serrano,<br> 110, 1ª (Despacho 2)<br>"+
                        "28006 Madrid. Spain"+
                        "<p>Mailing Address:<br>"+
                        "Carrer de Can Parellada, 28<br>"+
                        "08170 Montornès del Vallès.<br> Barcelona. Spain"+
                        "Phone: <span> +34 93 845 88 88</span><br> "+
                        "Fax: <span> +34 93 845 98 12</span><br>"+
                        "Email: <span>info@lucta.com</span></p>"+
                        "<a href='https://maps.google.es/maps?q=Lucta,+Carrer+de+Can+Parellada,+Montorn%C3%A8s+del+Vall%C3%A8s&hl=ca&ie=UTF8&ll=41.563525,2.278912&spn=0.009472,0.019934&sll=41.692248,1.745868&sspn=2.42004,5.103149&oq=Lucta&t=h&hq=Lucta,&hnear=Carrer+de+Can+Parellada,+Montorn%C3%A8s+del+Vall%C3%A8s,+Barcelona&z=16&iwloc=A' class='Get-Directions'>Get Directions</a></div></div>"

},
{
        "groupId": "companies_usa",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-white.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Company",
        "latitude": 42.291252,
        "longitude": -87.984285,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>USA</span>"+
                        "<h2>Lucta USA Inc.-</h2>"+
                        "<p><span>Company</span>"+
                        "Feed Additives / Fragrance / Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Pine Meadow Corporate Center, 950<br>"+
                        "Technology Way, Suite 110<br>"+
                        "60048 Libertyville, IL<br>"+
                        "Phone: <span> + 1 847 996 34 00</span><br> "+
                        "Fax: <span>+ 1 847 996 34 01</span><br>"+
                        "Email: <span>usa@lucta.com</span></p>"+
                        "<a href='http://maps.google.es/maps?q=Lucta+USA+Inc,+Libertyville,+IL,+United+States&hl=es&sll=42.22445,-87.797241&sspn=1.018962,2.705383&oq=LUCTA+USA&vpsrc=0&hq=Lucta+USA+Inc,&hnear=Libertyville,+Condado+de+Lake,+Illinois,+Estados+Unidos&t=m&z=13' class='Get-Directions'>Get Directions</a></div></div>"

},

{
        "groupId": "companies_usa",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-white.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Company", 
        "latitude": 41.097427,
        "longitude": -74.143063,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>USA</span>"+
                        "<h2>Flavor & Fragrance Specialties Inc.</h2>"+
                        "<p><span>Company</span>"+
                        "Fragrance / Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>3 Industrial Avenue <br>"+
                        "Mahwah ,<br>"+
                        "New Jersey 07430<br>"+
                        "Phone: <span> +1 201 825 2025</span><br> "+
                        "Fax: <span> +1 201 825 4275</span><br>"+
                        "Email: <span>www.ffs.com</span></p>"+
                        "<a href='' class='Get-Directions'>Get Directions</a></div></div>"

},

{
        "groupId": "companies_usa",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-white.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Company", 
        "latitude": 39.335293,
        "longitude": -76.475845,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>USA</span>"+
                        "<h2>Flavor & Fragrance Specialties Inc. -Manufacturing facilities-</h2>"+
                        "<p><span>Company</span>"+
                        "Fragrance / Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>8800 Kelso Drive, Suite P<br>"+
                        "Baltimore,<br>"+
                        "Maryland 21221<br>"+
                        "Phone: <span> +1 410 574 4101</span><br> "+
                        "Fax: <span>  +1 201 825 4276</span><br>"+
                        "Email: <span>www.ffs.com</span></p>"+
                        "<a href='' class='Get-Directions'>Get Directions</a></div></div>"
},

{
        "groupId": "companies_mexico",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-white.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Company", 
        "latitude": 19.487959,
        "longitude": -99.162931,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Mexico</span>"+
                        "<h2>Lucta Mexicana S.A. de C.V.</h2>"+
                        "<p><span>Company</span>"+
                        "Feed Additives / Fragrance / Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Poniente 122, nº 673<br>"+
                        "Col. Las Salinas - Deleg. Azcapotzalco,<br>"+
                        "02360 México D.F.<br>"+
                        "Phone: <span>+ (52.55) 53 33 60 03</span><br> "+
                        "Fax: <span>+(52.55) 53 68 55 29</span><br>"+
                        "Email: <span>mex@lucta.com</span></p>"+
                        "<a href='http://maps.google.es/maps?q=Lucta+Mexicana,+S.A.+De+C.V.,+Poniente+122,+Las+Salinas,+Azcapotzalco,+Ciudad+de+M%C3%A9xico,+M%C3%A9xico&daddr=Poniente+122+673,+Las+Salinas,+Azcapotzalco,+02300+Ciudad+De+Mexico,+Distrito+Federal,+M%C3%A9xico+(Lucta+Mexicana,+S.A.+De+C.V.)&hl=es&ie=UTF8&ll=19.487995,-99.162769&spn=0.010134,0.021136&view=map&geocode=CeFr9hRWYo46FftcKQEdbeUW-iFdia1z-aXsQA&t=m&z=16&vpsrc=0' class='Get-Directions'>Get Directions</a></div></div>"
},

{
        "groupId": "companies_colombia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-white.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Company", 
        "latitude": 4.964895,
        "longitude": -73.952584,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Colombia</span>"+
                        "<h2>Lucta Grancolombiana, S. A. S.</h2>"+
                        "<p><span>Company</span>"+
                        "Feed Additives / Fragrance / Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Carretera Autódromo Termoeléctrica Km.2<br>"+
                        "Tocancipá, Cundinamarca<br>"+
                        "Phone: <span> + (57.1) 593 4700</span><br> "+
                        "Fax: <span> +(57.1) 593 4710</span><br>"+
                        "Email: <span>col@lucta.com</span></p>"+
                        "<a href='http://maps.google.es/maps?q=Tocancip%C3%A1,+Departamento+de+Cundinamarca,+Colombia&hl=es&ie=UTF8&ll=4.971244,-73.916702&spn=0.171358,0.338173&sll=4.966667,-73.916667&sspn=0.171359,0.338173&vpsrc=0&hnear=Tocancip%C3%A1,+Colombia&t=m&z=12' class='Get-Directions'>Get Directions</a></div></div>"
},

{
        "groupId": "companies_brazil",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-white.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Company", 
        "latitude": -23.174651,
        "longitude": -46.989667,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Brazil</span>"+
                        "<h2>Lucta do Brasil Comercial Ltda.</h2>"+
                        "<p><span>Company</span>"+
                        "Feed Additives / Fragrance / Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Avenida Juvenal Arantes 2.500 - Galpao 10<br>"+
                        "Bairro Medeiros<br>"+
                        "13212-370 Jundiai, Sao Paolo<br>"+
                        "Phone: <span> +(55.11) 4525 1696</span><br> "+
                        "Fax: <span> +(55.11) 4525 1708</span><br>"+
                        "Email: <span>brazil@lucta.com</span></p>"+
                        "<a href='http://maps.google.es/maps?q=Lucta+do+Brasil+Com+Ltda+-+Avenida+Juvenal+Arantes,+Jundia%C3%AD+-+S%C3%A3o+Paulo,+Brasil&daddr=Avenida+Juvenal+Arantes,+2500+-+Jundia%C3%AD,+13212-354,+Brasil+(Lucta+Brasil+Com)&hl=es&ie=UTF8&view=map&geocode=CW8AzQnwGNcKFf1Inv4dI0Yz_SES-o34r-1Vpg&t=m&z=16&vpsrc=0' class='Get-Directions'>Get Directions</a></div></div>"
},

{
        "groupId": "companies_poland",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-white.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Company", 
        "latitude": 50.222201,
        "longitude": 18.990311,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Poland</span>"+
                        "<h2>Lucta Polska sp. z.o.o.</h2>"+
                        "<p><span>Company</span>"+
                        "Feed Additives / Fragrance / Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>ul. Kolejowa 57<br>"+
                        "40-602 Katowice<br>"+
                        "Poland<br>"+
                        "Phone: <span>  +(48.32) 78 69 251</span><br> "+
                        "Fax: <span> </span><br>"+
                        "Email: <span>pol@lucta.com</span></p>"+
                        "<a href='http://maps.google.es/maps?q=Lucta+Polska+sp.+z.o.o.+ul.+Kolejowa+57+40-602+Katowice&daddr=Kolejowa+57,+Katowice,+Polonia+(Lucta+Polska+Sp.+z+o.o.+Dodatki+paszowe)&hl=es&view=map&geocode=CcEW9jR63QncFRVU_gIdLsUhASHiQmLHPQgB9w&t=m&z=16&vpsrc=0' class='Get-Directions'>Get Directions</a></div></div>"
},

{
        "groupId": "companies_china",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-white.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Company", 
        "latitude": 23.174764,
        "longitude": 113.538030,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>People's Republic of China</span>"+
                        "<h2>Lucta (Guangzhou) Flavours Co. Ltd.</h2>"+
                        "<p><span>Company</span>"+
                        "Feed Additives / Fragrance / Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>173 – 175 Youyi Road<br>"+
                        "Guangzhou Economic & Technological Development District (GETDD)<br>"+
                        "Guangzhou, People's Republic of China<br>"+
                        "Phone: <span> +(86.20) 82 21 05 46, 62746886</span><br> "+
                        "Fax: <span> +(86.20) 82 21 05 47 </span><br>"+
                        "Email: <span>china@lucta.com</span></p>"+
                        "<a href='http://maps.google.es/maps?q=173+%E2%80%93+175+Youyi+Road+Guangzhou&hl=es&ie=UTF8&sll=21.514407,115.004883&sspn=7.620012,13.820801&vpsrc=0&hnear=175%E5%8F%B7+You+Yi+Lu,+Luo+Gang+Qu,+Guangzhou,+Guangdong,+Rep%C3%BAblica+Popular+China&t=m&z=17' class='Get-Directions'>Get Directions</a></div></div>"
},

{
        "groupId": "companies_china",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-white.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Company", 
        "latitude": 23.176306,
        "longitude": 113.535086,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>People's Republic of China</span>"+
                        "<h2>Lucta (Guangzhou) Flavours Co. Ltd.</h2>"+
                        "<p><span>Company</span>"+
                        "Feed Additives / Fragrance / Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>No. 20, Suida Street<br>"+
                        "Guangzhou Economic & Technological Development District (GETDD)<br>"+
                        "Guangzhou, People's Republic of China<br>"+
                        "Phone: <span> +(86.20) 82 21 05 46, 62746886</span><br> "+
                        "Fax: <span> +(86.20) 82 21 05 47 </span><br>"+
                        "Email: <span>china@lucta.com</span></p>"+
                        "<a href='http://www.google.es/maps/place/23°10'35.0%22N+113°32'11.0%22E/@23.1748355,113.5346723,16z/data=!4m2!3m1!1s0x0:0x0?hl=es' class='Get-Directions'>Get Directions</a></div></div>"
},

{
        "groupId": "distributor_algeria",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 27.210796,
        "longitude": 2.495901, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Algeria</span>"+
                        "<h2>Mr. Nasreddine Nasri </h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>33 Andrije Hebranga<br>"+
                        "10000 Zagreb<br>"+
                        "Croatia<br>"+
                        "Mobile: <span> + 34 632397495 / +33 618757799</span><br> "+
                        "Fax: <span> </span><br>"+
                        "Email: <span>nacernasri13@yahoo.fr</span></p>"+
                        "</div></div>"
},


{
        "groupId": "distributor_guinea",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 11.102676,
        "longitude": -11.155522,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Guinea</span>"+
                        "<h2>Mr. Nasreddine Nasri </h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>33 Andrije Hebranga<br>"+
                        "10000 Zagreb<br>"+
                        "Croatia<br>"+
                        "Mobile: <span> + 34 632397495 / +33 618757799</span><br> "+
                        "Fax: <span> </span><br>"+
                        "Email: <span>nacernasri13@yahoo.fr</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_congo",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": -4.044374, 
        "longitude": 15.363174, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Democratic Republic of Congo</span>"+
                        "<h2>Mr. Nasreddine Nasri </h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>33 Andrije Hebranga<br>"+
                        "10000 Zagreb<br>"+
                        "Croatia<br>"+
                        "Mobile: <span> + 34 632397495 / +33 618757799</span><br> "+
                        "Fax: <span> </span><br>"+
                        "Email: <span>nacernasri13@yahoo.fr</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_albania",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 41.114079,
        "longitude": 20.091407,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Albania</span>"+
                        "<h2>Mr. Gianluca Poma</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Via G. Sidoli nº 59 scala B<br>"+
                        "43122 Parma<br>"+
                        "Italy<br>"+
                        "Mobile: <span>  +(39.335) 606 48 89</span><br> "+
                        "Phone: <span> +(39.521) 24 22 58</span><br> "+
                        "Fax: <span>   +(39.521) 24 50 28</span><br>"+
                        "Email: <span>poma-it@lucta.es</span></p>"+
                        "</div></div>"
},


{
        "groupId": "contact_slovenia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 46.053835,
        "longitude": 14.495645,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Slovenia</span>"+
                        "<h2>Mr. Gianluca Poma</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Via G. Sidoli nº 59 scala B<br>"+
                        "43122 Parma<br>"+
                        "Italy<br>"+
                        "Mobile: <span>  +(39.335) 606 48 89</span><br> "+
                        "Phone: <span> +(39.521) 24 22 58</span><br> "+
                        "Fax: <span>   +(39.521) 24 50 28</span><br>"+
                        "Email: <span>poma-it@lucta.es</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_germany",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 53.684149,
        "longitude": 9.727715,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>North Germany</span>"+
                        "<h2>Mr. Bernd Kirchner</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Riedweg, 15 <br>"+
                        "D-25436 Tornesh<br>"+
                        "Germany<br>"+
                        "Mobile: <span>+ (49.171) 737 32 69</span><br> "+
                        "Phone: <span> + (49.4122) 97 96 18</span><br> "+
                        "Fax: <span> +(49.4122) 97 96 19</span><br>"+
                        "Email: <span>bernd.kirchner@lucta.es</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_germany",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 52.378350,
        "longitude": 9.738332,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>South Germany</span>"+
                        "<h2>Dr. Kristina Leurs</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p><br>"+
                        "D-25436 Tornesh<br>"+
                        "Germany<br>"+
                        "Mobile: <span>+49 (0)163-6137874</span><br> "+
                        "Phone: <span>+49 (0) 211-20910274</span><br> "+
                        "Fax: <span>+49 (0) 211-20910273</span><br>"+
                        "Email: <span>feedadd@lucta.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_algeria",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 35.233695,
        "longitude": 10.486383,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Algeria</span>"+
                        "<h2>Mr. François Denieul</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>BP 59513 Vallet<br>"+
                        "44195 Clisson<br>"+
                        "France<br>"+
                        "Mobile: <span> +33 (0) 673 00 54 95</span><br> "+
                        "Phone: <span> +33 (0) 2 40 92 12 87</span><br> "+
                        "Fax: <span> +33 (0) 970 60 32 17</span><br>"+
                        "Email: <span>francois.denieul@lucta.es</span></p>"+
                        "</div></div>"
},


{
        "groupId": "distributor_greece",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 38.494346,
        "longitude": 23.729176, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Greece</span>"+
                        "<h2>Amon Trading Import Export, S.A. - Mr. Akis Georgalakis</h2>"+
                        "<p><span>Distributor</span>"+
                        "Fragrance"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>95-97 Aristotelous St.<br>"+
                        "Athens 10434<br>"+
                        "Greece<br>"+
                        "Phone: <span> +(30.210) 883 21 50</span><br> "+
                        "Fax: <span> +(30.210) 883 08 67 </span><br>"+
                        "Email: <span></span></p>"+
                        "</div></div>"
},


{
        "groupId": "distributor_greece",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 37.971219,
        "longitude": 22.689039, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Greece</span>"+
                        "<h2>G.Kolettis & Co - Mr. Kostas Kolettis</h2>"+
                        "<p><span>Distributor</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>8 Iras Str.<br>"+
                        "17778 Tavros / Athens<br>"+
                        "Greece<br>"+
                        "Phone: <span>+30 2103468304</span><br> "+
                        "Fax: <span> +30 2103457039</span><br>"+
                        "Email: <span>copharm@otenet.gr</span></p>"+
                        "</div></div>"
},


{
        "groupId": "contact_austria",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 47.341907,
        "longitude": 15.005714,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Austria</span>"+
                        "<h2>Dr. Kristina Leurs</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p><br>"+
                        "<br>"+
                        "<br>"+
                        "Mobile: <span>+49 (0)163-6137874</span><br> "+
                        "Phone: <span>+49 (0) 211-20910274</span><br> "+
                        "Fax: <span>+49 (0) 211-20910273</span><br>"+
                        "Email: <span>feedadd@lucta.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_slovakia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 49.004598,
        "longitude": 21.238529,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Slovakia</span>"+
                        "<h2>Dr. Kristina Leurs</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Riedweg, 15 <br>"+
                        "D-25436 Tornesh<br>"+
                        "Germany<br>"+
                        "Mobile: <span>+49 (0)163-6137874</span><br> "+
                        "Phone: <span>+49 (0) 211-20910274</span><br> "+
                        "Fax: <span>+49 (0) 211-20910273</span><br>"+
                        "Email: <span>feedadd@lucta.com</span></p>"+
                        "</div></div>"
},


{
        "groupId": "distributor_iran",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 35.734994,
        "longitude": 51.500264, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Iran</span>"+
                        "<h2>Taravat Afza Tehran Co. Ltd. - Mr. Raymond Avasapian</h2>"+
                        "<p><span>Distributor</span>"+
                        "Fragrance / Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>3rd floor, N. 45-Mir Ali Akbari Str Sh. Homaye Str. (16 Metri Aval)<br>"+
                        "1633767161 Resalat Highway<br>"+
                        "Tehran, Iran<br>"+
                        "Phone: <span> +982 188 412 462</span><br> "+
                        "Fax: <span> +982 188 412 648</span><br>"+
                        "Email: <span>r.avasapian@taravat-afza.com / info@taravat-afza.com</span></p>"+
                        "</div></div>"
},


{
        "groupId": "contact_benelux",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 52.213945,
        "longitude": 4.601864,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Benelux</span>"+
                        "<h2>Mr. Willem van der Kolk</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Stad en Landschap, 50<br>"+
                        "2923 BN. Krimpen a/d Ijssel<br>"+
                        "Netherlands<br>"+
                        "Mobile: <span>+31 (0) 653720365</span><br> "+
                        "Phone: <span> +31 (0) 180-553035</span><br> "+
                        "Fax: <span>+49 (0) 211-20910273</span><br>"+
                        "Email: <span>kolk@lucta.es</span></p>"+
                        "</div></div>"
},


{
        "groupId": "distributor_ireland",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 54.707308,
        "longitude": -5.977824, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Ireland</span>"+
                        "<h2>Agri-Research (Ireland) Ltd - Sr. Russell Jennings</h2>"+
                        "<p><span>Distributor</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Unit 1, Doagh Business Park<br>"+
                        "11 Kilbride Road, Doagh<br>"+
                        "Co. Antrim BT39 0QA – Ireland<br>"+
                        "Phone: <span>  +(028) 93343900</span><br> "+
                        "Fax: <span> +(028) 93342132</span><br>"+
                        "Email: <span>russell@lfaceltic.ie</span></p>"+
                        "</div></div>"
},


{
        "groupId": "contact_bosnia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 44.770069,
        "longitude": 17.203162,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Bosnia</span>"+
                        "<h2>Mr. Gianluca Poma</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Via G. Sidoli nº 59 scala B<br>"+
                        "43122 Parma<br>"+
                        "Italy<br>"+
                        "Mobile: <span> +(39.335) 606 48 89</span><br> "+
                        "Phone: <span>  +(39.521) 24 22 58</span><br> "+
                        "Fax: <span>  +(39.521) 24 50 28</span><br>"+
                        "Email: <span>poma-it@lucta.es</span></p>"+
                        "</div></div>"
},


{
        "groupId": "contact_bulgaria",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 42.133839,
        "longitude": 24.736157,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Bulgaria</span>"+
                        "<h2>Mr. Gianluca Poma</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Fragrance / Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>ul. Kolejowa 57<br>"+
                        "40-602 Katowice<br>"+
                        "Poland<br>"+
                        "Mobile: <span> </span><br> "+
                        "Phone: <span>  +(48.32) 78 69 251</span><br> "+
                        "Fax: <span>  +(39.521) 24 50 28</span><br>"+
                        "Email: <span>pol@lucta.com</span></p>"+
                        "</div></div>"
},


{
        "groupId": "contact_belarus",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 53.012305,
        "longitude": 27.559722,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Belarus</span>"+
                        "<h2>Mr. Gianluca Poma</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Flavors / Fragrance / Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>ul. Kolejowa 57<br>"+
                        "40-602 Katowice<br>"+
                        "Poland<br>"+
                        "Mobile: <span> </span><br> "+
                        "Phone: <span>  +(48.32) 78 69 251</span><br> "+
                        "Fax: <span>  +(39.521) 24 50 28</span><br>"+
                        "Email: <span>pol@lucta.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_saudi",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 24.699269,
        "longitude": 46.726613, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Kingdom of Saudi Arabia</span>"+
                        "<h2>Jewel Oceans Company Ltd. - Mr.Abdallah Ahmad</h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Salma Building 60/23, Near the National Hospital of Bāniyās<br>"+
                        "Bāniyās SY 1002<br>"+
                        "Siria<br>"+
                        "Mobile: <span> +963 992698877</span><br> "+
                        "Mobile: <span> +963 43 726 232</span><br> "+
                        "Fax: <span> +963 43 726 297</span><br>"+
                        "Email: <span>jeweloceans.co@gmail.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_southkorea",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 36.371425,
        "longitude": 127.41915,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>South Korea</span>"+
                        "<h2>Lucta (Guangzhou) Flavours Co. Ltd.</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>No. 20, Suida Street<br>"+
                        "Guangzhou Economic & Technological Development District (GETDD)<br>"+
                        "Guangzhou, People's Republic of China<br>"+
                        "Phone: <span>  +(86.20) 82 21 05 46, 62746886</span><br> "+
                        "Fax: <span>  +(86.20) 82 21 05 47</span><br>"+
                        "Email: <span>china@lucta.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_croatia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 45.020598,
        "longitude": 14.578228,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Croatia</span>"+
                        "<h2>Mr. Gianluca Poma</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Via G. Sidoli nº 59 scala B<br>"+
                        "43122 Parma<br>"+
                        "Italy<br>"+
                        "Mobile: <span> +(39.335) 606 48 89</span><br> "+
                        "Phone: <span>  +(39.521) 24 22 58</span><br> "+
                        "Fax: <span>  +(39.521) 24 50 28</span><br>"+
                        "Email: <span>poma-it@lucta.es</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_lebanese",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 34.11539,
        "longitude": 35.754279, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Lebanese Republic</span>"+
                         "<h2>Jewel Oceans Company Ltd. - Mr.Abdallah Ahmad</h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Salma Building 60/23, Near the National Hospital of Bāniyās<br>"+
                        "Bāniyās SY 1002<br>"+
                        "Siria<br>"+
                        "Mobile: <span> +963 992698877</span><br> "+
                        "Mobile: <span> +963 43 726 232</span><br> "+
                        "Fax: <span> +963 43 726 297</span><br>"+
                        "Email: <span>jeweloceans.co@gmail.com</span></p>"+
                        "</div></div>"
},


{
        "groupId": "contact_denmark",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 55.576983,
        "longitude": 9.75441,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Denmark</span>"+
                         "<h2>Mr. Bernd Kirchner</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Riedweg, 15 <br>"+
                        "D-25436 Tornesh<br>"+
                        "Germany<br>"+
                        "Mobile: <span>+ (49.171) 737 32 69</span><br> "+
                        "Phone: <span> + (49.4122) 97 96 18</span><br> "+
                        "Fax: <span> +(49.4122) 97 96 19</span><br>"+
                        "Email: <span>bernd.kirchner@lucta.es</span></p>"+
                        "</div></div>"
},
/*{
        "groupId": "contact_finland",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 64.227805,
        "longitude":27.725755,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Finland</span>"+
                         "<h2>Mr. Bernd Kirchner</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Riedweg, 15 <br>"+
                        "D-25436 Tornesh<br>"+
                        "Germany<br>"+
                        "Mobile: <span>+ (49.171) 737 32 69</span><br> "+
                        "Phone: <span> + (49.4122) 97 96 18</span><br> "+
                        "Fax: <span> +(49.4122) 97 96 19</span><br>"+
                        "Email: <span>bernd.kirchner@lucta.es</span></p>"+
                        "</div></div>"
},*/

{
        "groupId": "contact_estonia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 58.736471,
        "longitude": 25.784717,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Estonia</span>"+
                        "<h2>Lucta Polska sp. z.o.o.</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Fragrance / Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>ul. Kolejowa 57<br>"+
                        "40-602 Katowice<br>"+
                        "Poland<br>"+
                        "Mobile: <span> </span><br> "+
                        "Phone: <span>  +(48.32) 78 69 251</span><br> "+
                        "Fax: <span>  +(39.521) 24 50 28</span><br>"+
                        "Email: <span>pol@lucta.com</span></p>"+
                        "</div></div>"
},
{
        "groupId": "contact_latvia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 56.84991,
        "longitude": 26.230633,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Latvia</span>"+
                        "<h2>Lucta Polska sp. z.o.o.</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Fragrance / Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>ul. Kolejowa 57<br>"+
                        "40-602 Katowice<br>"+
                        "Poland<br>"+
                        "Mobile: <span> </span><br> "+
                        "Phone: <span>  +(48.32) 78 69 251</span><br> "+
                        "Fax: <span>  +(39.521) 24 50 28</span><br>"+
                        "Email: <span>pol@lucta.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_lithuania",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 55.742812,
        "longitude": 23.758651,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Lithuania</span>"+
                        "<h2>Lucta Polska sp. z.o.o.</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Fragrance / Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>ul. Kolejowa 57<br>"+
                        "40-602 Katowice<br>"+
                        "Poland<br>"+
                        "Mobile: <span> </span><br> "+
                        "Phone: <span>  +(48.32) 78 69 251</span><br> "+
                        "Fax: <span>  +(39.521) 24 50 28</span><br>"+
                        "Email: <span>pol@lucta.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_philippines",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        // "latitude": -86.283479,
        // "longitude": 44.283113,
        "latitude": 12.425492,
        "longitude":123.393471,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Philippines</span>"+
                        "<h2>Lucta (Guangzhou) Flavours Co. Ltd.</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>No. 20, Suida Street<br>"+
                        "Guangzhou Economic & Technological Development District (GETDD)<br>"+
                        "Guangzhou, People's Republic of China<br>"+
                        "Phone: <span>  +(86.20) 82 21 05 46, 62746886</span><br> "+
                        "Fax: <span>  +(86.20) 82 21 05 47</span><br>"+
                        "Email: <span>china@lucta.com</span></p>"+
                        "</div></div>"
},


{
        "groupId": "contact_france",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 47.668076,
        "longitude": -1.303221,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>France</span>"+
                        "<h2>Mr. François Denieul</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>BP 59513 Vallet<br>"+
                        "44195 Clisson<br>"+
                        "France<br>"+
                        "Mobile: <span> +33 (0) 673 00 54 95</span><br> "+
                        "Phone: <span> +33 (0) 2 40 92 12 87</span><br> "+
                        "Fax: <span> +33 (0) 970 60 32 17</span><br>"+
                        "Email: <span>francois.denieul@lucta.es</span></p>"+
                        "</div></div>"
},


{
        "groupId": "contact_hungary",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 47.497837,
        "longitude": 19.036361, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Hungary</span>"+
                        "<h2>Dr. Kristina Leurs</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p><br>"+
                        "<br>"+
                        "<br>"+
                        "Mobile: <span> +33 (0) 673 00 54 95</span><br> "+
                        "Phone: <span> +33 (0) 2 40 92 12 87</span><br> "+
                        "Fax: <span> +33 (0) 970 60 32 17</span><br>"+
                        "Email: <span>francois.denieul@lucta.es</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_morocco",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 33.601124, 
        "longitude": -7.535427,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Morocco</span>"+
                        "<h2>PANACOM Société Panafricaine de Commerce - Mr. Hicham El Haid</h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Naziha 6 – Lot Jawad Quartier Ind. Ain-Sebaa (Face COLGATE) <br>"+
                        "20252 Zenata -Casablanca<br>"+
                        "Morocco<br>"+
                        "Mobile: <span> + +212 661 367 593</span><br> "+
                        "Phone: <span>  +212 (0) 5 22 66 04 80/82/87</span><br> "+
                        "Fax: <span></span><br>"+
                        "Email: <span>elhaid.h@panacom.ma / wadghiri.m@panacom.ma / benkirane.n@panacom.ma</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_morocco",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 32.332864,
        "longitude": -7.509452, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Morocco</span>"+
                        "<h2>Planet Health - Sr. Omar Benabdallah</h2>"+
                        "<p><span>Distributor</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>94, Rue Annesrine<br>"+
                        "Hay Arraha (Beauséjour)<br>"+
                        "Casablanca – Marruecos<br>"+
                        "Phone: <span>  +(212.5) 22369456</span><br> "+
                        "Fax: <span>  +(212.5) 22948659</span><br>"+
                        "Email: <span>wadghiri.m@panacom.ma</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_cameroon",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 5.518164,
        "longitude": 12.379924, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Republic of Cameroon</span>"+
                        "<h2>Mr. Nasreddine Nasri</h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>33 Andrije Hebranga<br>"+
                        "10000 Zagreb<br>"+
                        "Croatia<br>"+
                        "Mobile: <span> + 34 632397495 / +33 618757799</span><br> "+
                        "Fax: <span> </span><br>"+
                        "Email: <span>nacernasri13@yahoo.fr</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_congo",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor",      
        "latitude": -1.030445,
        "longitude": 15.343347,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Republic of Congo</span>"+
                        "<h2>Mr. Nasreddine Nasri</h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>33 Andrije Hebranga<br>"+
                        "10000 Zagreb<br>"+
                        "Croatia<br>"+
                        "Mobile: <span> + 34 632397495 / +33 618757799</span><br> "+
                        "Fax: <span> </span><br>"+
                        "Email: <span>nacernasri13@yahoo.fr</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_cote",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor",  
        "latitude": 7.45537,
        "longitude": -5.841903, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Republic of Côte d'Ivoire</span>"+
                        "<h2>Mr. Nasreddine Nasri</h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>33 Andrije Hebranga<br>"+
                        "10000 Zagreb<br>"+
                        "Croatia<br>"+
                        "Mobile: <span> + 34 632397495 / +33 618757799</span><br> "+
                        "Fax: <span> </span><br>"+
                        "Email: <span>nacernasri13@yahoo.fr</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_sengal",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 14.427382,
        "longitude": -14.501413, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Republic of Senegal</span>"+
                        "<h2>Mr. Nasreddine Nasri</h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>33 Andrije Hebranga<br>"+
                        "10000 Zagreb<br>"+
                        "Croatia<br>"+
                        "Mobile: <span> + 34 632397495 / +33 618757799</span><br> "+
                        "Fax: <span> </span><br>"+
                        "Email: <span>nacernasri13@yahoo.fr</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_iraq",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 33.30164,
        "longitude": 44.353518, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Republic of Iraq</span>"+
                        "<h2>Jewel Oceans Company Ltd. - Mr.Abdallah Ahmad</h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Salma Building 60/23, Near the National Hospital of Bāniyās<br>"+
                        "Bāniyās SY 1002<br>"+
                        "Siria<br>"+
                        "Mobile: <span> +963 992698877</span><br> "+
                        "Mobile: <span> +963 43 726 232</span><br> "+
                        "Fax: <span> +963 43 726 297</span><br>"+
                        "Email: <span>jeweloceans.co@gmail.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_ireland",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        
        "latitude": 53.331403,
        "longitude": -8.23763,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Ireland</span>"+
                        "<h2>Mr. Willem van der Kolk</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Stad en Landschap, 50<br>"+
                        "2923 BN. Krimpen a/d Ijssel<br>"+
                        "Netherlands<br>"+
                        "Mobile: <span>+31 (0) 653720365</span><br> "+
                        "Phone: <span> +31 (0) 180-553035</span><br> "+
                        "Fax: <span>+49 (0) 211-20910273</span><br>"+
                        "Email: <span>kolk@lucta.es</span></p>"+
                        "</div></div>"
},
{
        "groupId": "contact_italy",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 44.285005,
        "longitude": 10.962190,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Italy</span>"+
                         "<h2>Mr. Gianluca Poma</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Via G. Sidoli nº 59 scala B<br>"+
                        "43122 Parma<br>"+
                        "Italy<br>"+
                        "Mobile: <span> +(39.335) 606 48 89</span><br> "+
                        "Phone: <span>  +(39.521) 24 22 58</span><br> "+
                        "Fax: <span>  +(39.521) 24 50 28</span><br>"+
                        "Email: <span>poma-it@lucta.es</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_italy",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 45.142668,
        "longitude": 10.298095,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Italy</span>"+
                        "<h2>Mr. Giovanni Bonanno</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Fragrance"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Via Volturno Portici 1, 80<br>"+
                        "20861 Brugherio MB<br>"+
                        "Italy<br>"+
                        "Mobile: <span> +(39) 346 891 39 51</span><br> "+
                        "Phone: <span></span><br> "+
                        "Fax: <span> </span><br>"+
                        "Email: <span>fragrances@lucta.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_macedonia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 44.785005,
        "longitude": 10.362190,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Macedonia</span>"+
                        "<h2>Mr. Gianluca Poma</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Via G. Sidoli nº 59 scala B<br>"+
                        "43122 Parma<br>"+
                        "Italy<br>"+
                        "Mobile: <span> +(39.335) 606 48 89</span><br> "+
                        "Phone: <span>  +(39.521) 24 22 58</span><br> "+
                        "Fax: <span>  +(39.521) 24 50 28</span><br>"+
                        "Email: <span>poma-it@lucta.es</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_russia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 55.963563,
        "longitude": 36.605257, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Russia and CIS countries</span>"+
                        "<h2>Feedland Group - Mr. Igor Melnik</h2>"+
                        "<p><span>Distributor</span>"+
                        "Feed Additives "+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Gnezdnikovskiy Bolshoy lane 7<br>"+
                        "Russian Federation<br>"+
                        "Phone: <span> +7 (495) 663 71 56</span><br> "+
                        "Fax: <span> +7 (495) 628 08 63</span><br>"+
                        "Email: <span>i.melnik@feedland.ru</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_morocco",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 32.322814,
        "longitude": -6.364472,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Morocco</span>"+
                        "<h2>Mr. François Denieul</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>BP 59513 Vallet<br>"+
                        "44195 Clisson<br>"+
                        "France<br>"+
                        "Mobile: <span> +33 (0) 673 00 54 95</span><br> "+
                        "Phone: <span> +33 (0) 2 40 92 12 87</span><br> "+
                        "Fax: <span> +33 (0) 970 60 32 17</span><br>"+
                        "Email: <span>francois.denieul@lucta.es</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_serbia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 45.763563,
        "longitude": 20.605257, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Serbia</span>"+
                        "<h2>DSM Nutritional Products SRB doo Ruma - Mr. Nemanja Makevic</h2>"+
                        "<p><span>Distributor</span>"+
                        "Feed Additives "+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Istocna Radna Zona - bb Kraljevacka Str. Blok IX/3<br>"+
                        "22400 Ruma<br>"+
                        "Serbia<br>"+
                        "Phone: <span>  + 38169/509-70-81</span><br> "+
                        "Fax: <span>  + 38122/215-05-61</span><br>"+
                        "Email: <span></span></p>"+
                        "</div></div>"
},


{
        "groupId": "contact_moldova",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 47.638122,
        "longitude": 28.145959,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Moldova</span>"+
                        "<h2>Lucta Polska sp. z.o.o.</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Fragrance / Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>ul. Kolejowa 57<br>"+
                        "40-602 Katowice<br>"+
                        "Poland<br>"+
                        "Mobile: <span> </span><br> "+
                        "Phone: <span>  +(48.32) 78 69 251</span><br> "+
                        "Fax: <span>  +(39.521) 24 50 28</span><br>"+
                        "Email: <span>pol@lucta.com</span></p>"+
                        "</div></div>"
},


{
        "groupId": "contact_montenegro",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 42.940076,
        "longitude": 19.211532,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Montenegro</span>"+
                         "<h2>Mr. Gianluca Poma</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Via G. Sidoli nº 59 scala B<br>"+
                        "43122 Parma<br>"+
                        "Italy<br>"+
                        "Mobile: <span> +(39.335) 606 48 89</span><br> "+
                        "Phone: <span>  +(39.521) 24 22 58</span><br> "+
                        "Fax: <span>  +(39.521) 24 50 28</span><br>"+
                        "Email: <span>poma-it@lucta.es</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_norway",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 61.76964,
        "longitude": 9.500508,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Norway</span>"+
                       "<h2>Mr. Bernd Kirchner</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Riedweg, 15 <br>"+
                        "D-25436 Tornesh<br>"+
                        "Germany<br>"+
                        "Mobile: <span>+ (49.171) 737 32 69</span><br> "+
                        "Phone: <span> + (49.4122) 97 96 18</span><br> "+
                        "Fax: <span> +(49.4122) 97 96 19</span><br>"+
                        "Email: <span>bernd.kirchner@lucta.es</span></p>"+
                        "</div></div>"
},
{
        "groupId": "contact_portugal",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 0.0,
        "longitude": 0.0,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Portugal</span>"+
                       "<h2>Mr. Manuel Fialho</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "Mobile: <span> +(351)966 09 60 26</span><br> "+
                        "Email: <span>manuel.fialho@lucta.es</span></p>"+
                        "</div></div>"
},


{
        "groupId": "distributor_kuwait",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 29.311888,
        "longitude": 47.581278, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>State of Kuwait</span>"+
                         "<h2>Jewel Oceans Company Ltd. - Mr.Abdallah Ahmad</h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Salma Building 60/23, Near the National Hospital of Bāniyās<br>"+
                        "Bāniyās SY 1002<br>"+
                        "Siria<br>"+
                        "Mobile: <span> +963 992698877</span><br> "+
                        "Mobile: <span> +963 43 726 232</span><br> "+
                        "Fax: <span> +963 43 726 297</span><br>"+
                        "Email: <span>jeweloceans.co@gmail.com</span></p>"+
                        "</div></div>"
},


{
        "groupId": "contact_czechrepublic",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 49.201143,
        "longitude": 16.611944,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Czech Republic</span>"+
                        "<h2>Dr. Kristina Leurs</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p><br>"+
                        "<br>"+
                        "<br>"+
                        "Mobile: <span> +33 (0) 673 00 54 95</span><br> "+
                        "Phone: <span> +33 (0) 2 40 92 12 87</span><br> "+
                        "Fax: <span> +33 (0) 970 60 32 17</span><br>"+
                        "Email: <span>francois.denieul@lucta.es</span></p>"+
                        "</div></div>"
},
{
        "groupId": "contact_romania",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 46.058013,
        "longitude": 25.23733,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Romania</span>"+
                        "<h2>Lucta Polska sp. z.o.o.</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Fragrance / Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>ul. Kolejowa 57<br>"+
                        "40-602 Katowice<br>"+
                        "Poland<br>"+
                        "Mobile: <span> </span><br> "+
                        "Phone: <span>  +(48.32) 78 69 251</span><br> "+
                        "Fax: <span>  +(39.521) 24 50 28</span><br>"+
                        "Email: <span>pol@lucta.com</span></p>"+
                        "</div></div>"
},



{
        "groupId": "distributor_switzerland",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 47.069907, 
        "longitude": 7.589158, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Switzerland</span>"+
                         "<h2>Provet AG - Dr. Markus Moser</h2>"+
                        "<p><span>Distributor</span>"+
                        "Feed Additives "+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Gewerbestrasse 1<br>"+
                        "CH- 3421 Lyssach b. Burgdorf<br>"+
                        "Switzerland<br>"+
                        "Phone: <span> +41 34 448 11 33</span><br> "+
                        "Fax: <span> +41 34 445 20 93</span><br>"+
                        "Email: <span>markus.moser@henryschein.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_syrian",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 35.145117, 
        "longitude": 36.693675, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Syrian Arab Republic</span>"+
                         "<h2>Jewel Oceans Company Ltd. - Mr.Abdallah Ahmad</h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Salma Building 60/23, Near the National Hospital of Bāniyās<br>"+
                        "Bāniyās SY 1002<br>"+
                        "Siria<br>"+
                        "Mobile: <span> +963 992698877</span><br> "+
                        "Mobile: <span> +963 43 726 232</span><br> "+
                        "Fax: <span> +963 43 726 297</span><br>"+
                        "Email: <span>jeweloceans.co@gmail.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_russia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 62.579521,
        "longitude": 114.006253,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Russia and CIS countries</span>"+
                        "<h2>Mrs. Elena Seregina</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Fragrance / Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "Phone: <span> +7 (965)2812706</span><br> "+
                        "Fax: <span>  +(39.521) 24 50 28</span><br>"+
                        "Email: <span>elena.seregina@lucta.com</span></p>"+
                        "</div></div>"
},


{
        "groupId": "contact_russia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 65.579521,
        "longitude": 117.006253,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Russia and CIS countries</span>"+
                        "<h2>Ms. Vera Agrinskaya</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Fragrance"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "Representación AO Lucta, S.A.<br>"+
                        "Email: <span>vera.agrinskaya@lucta.es</span></p>"+
                        "</div></div>"
},



{
        "groupId": "distributor_uae",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 23.71079,
        "longitude": 53.70121, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>United Arab Emirates</span>"+
                         "<h2>Jewel Oceans Company Ltd. - Mr.Abdallah Ahmad</h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Salma Building 60/23, Near the National Hospital of Bāniyās<br>"+
                        "Bāniyās SY 1002<br>"+
                        "Siria<br>"+
                        "Mobile: <span> +963 992698877</span><br> "+
                        "Mobile: <span> +963 43 726 232</span><br> "+
                        "Fax: <span> +963 43 726 297</span><br>"+
                        "Email: <span>jeweloceans.co@gmail.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_serbia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 43.948059,
        "longitude": 20.968957,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Serbia</span>"+
                         "<h2>Mr. Gianluca Poma</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Via G. Sidoli nº 59 scala B<br>"+
                        "43122 Parma<br>"+
                        "Italy<br>"+
                        "Mobile: <span> +(39.335) 606 48 89</span><br> "+
                        "Phone: <span>  +(39.521) 24 22 58</span><br> "+
                        "Fax: <span>  +(39.521) 24 50 28</span><br>"+
                        "Email: <span>poma-it@lucta.es</span></p>"+
                        "</div></div>"
},



{
        "groupId": "distributor_indonesia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": -6.359825,
        "longitude":106.921104, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Indonesia</span>"+
                         "<h2>PT Agrotech Veterinda Jaya -Drh. Ing. Yappi Sussanto</h2>"+
                        "<p><span>Distributor</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Rukan Kranggan Permai Blok RT 7 nº12 Jakasampurna<br>"+
                        "17433 Bekasi, Indonesia<br>"+
                        "Phone: <span> +(62.21) 845 994 28</span><br> "+
                        "Fax: <span>  +(62.21) 845 994 27</span><br>"+
                        "Email: <span>yappisusanto@cbn.net.id</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_japan",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 35.694003,
        "longitude": 139.753595, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Japan</span>"+
                         "<h2>Edelmann A.G. - Mr. Kozoh Kimura</h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>NO. 1-15-11, Chome Uchikanda<br>"+
                        "Chiyoda-ku, Tokyo 101<br>"+
                        "Japan<br>"+
                        "Phone: <span>  +(81.7) 822.22.313</span><br> "+
                        "Fax: <span>  +(81.7) 822.22.312</span><br>"+
                        "Email: <span></span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_malayasia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 3.066336,
        "longitude": 101.603217, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Malayasia</span>"+
                        "<h2>Yau Enterprise Sdn. Bhd. - Mr. Yau Leong Fatt</h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Nº1, Jalan PJS 11/18<br>"+
                        "Sunway Technology Park, Bandar Sunway Selangor Darul Ehsan<br>"+
                        "46150 Petaling Jaya, Malaysia<br>"+
                        "Japan<br>"+
                        "Mobile: <span>  (6011) 35 36 34</span><br> "+
                        "Phone: <span>  +(60.3) 733 00 71</span><br> "+
                        "Fax: <span>  +(60.3) 734 52 59</span><br>"+
                        "Email: <span>yauent@yahoo.com</span></p>"+
                        "</div></div>"
},


{
        "groupId": "contact_sweden",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 63.148594,
        "longitude": 16.409448,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Sweden</span>"+
                        "<h2>Mr. Bernd Kirchner</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Riedweg, 15 <br>"+
                        "D-25436 Tornesh<br>"+
                        "Germany<br>"+
                        "Mobile: <span>+ (49.171) 737 32 69</span><br> "+
                        "Phone: <span> + (49.4122) 97 96 18</span><br> "+
                        "Fax: <span> +(49.4122) 97 96 19</span><br>"+
                        "Email: <span>bernd.kirchner@lucta.es</span></p>"+
                        "</div></div>"
},
{
        "groupId": "contact_switzerland",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 46.947709,
        "longitude": 7.433866,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Switzerland</span>"+
                         "<h2>Dr. Kristina Leurs</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p><br>"+
                        "<br>"+
                        "<br>"+
                        "Mobile: <span> +33 (0) 673 00 54 95</span><br> "+
                        "Phone: <span> +33 (0) 2 40 92 12 87</span><br> "+
                        "Fax: <span> +33 (0) 970 60 32 17</span><br>"+
                        "Email: <span>francois.denieul@lucta.es</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_tunisia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 34.262009,
        "longitude": 9.576135,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Tunisia</span>"+
                       "<h2>Mr. François Denieul</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>BP 59513 Vallet<br>"+
                        "44195 Clisson<br>"+
                        "France<br>"+
                        "Mobile: <span> +33 (0) 673 00 54 95</span><br> "+
                        "Phone: <span> +33 (0) 2 40 92 12 87</span><br> "+
                        "Fax: <span> +33 (0) 970 60 32 17</span><br>"+
                        "Email: <span>francois.denieul@lucta.es</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_philippines",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 14.609006,
        "longitude": 121.037192, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Philippines</span>"+
                        "<h2>Vet Specialists INC. - Ms. Vicky de Mui</h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Sampaguita Pictures Compound 27<br>"+
                        "Granada St.-Quezon City<br>"+
                        "Metro Manila, Philippines<br>"+
                        "Phone: <span> +(63.2) 723 90 28</span><br> "+
                        "Fax: <span> +(63.2) 725 61 75</span><br>"+
                        "Email: <span>vickymui_vsi@pldtdsl.net</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_tunisia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 37.685093,
        "longitude": 10.095150,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Tunisia</span>"+
                       "<h2>Mr. Mohamed Ali Debbabi</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>P.O. Box 828<br>"+
                        "9, Rue Imen Sahnoun<br>"+
                        "2040 Rades<br>"+
                        "Phone: <span> +(216.71) 44 01 20</span><br> "+
                        "Fax: <span> +(216.71) 46 04 93</span><br>"+
                        "Email: <span>ma.dali@planet.tn</span></p>"+
                        "</div></div>"
},


{
        "groupId": "distributor_taiwan",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 22.999729,
        "longitude": 120.227028, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Taiwan</span>"+
                        "<h2>Farmtech Enterprise Co. Ltd. - Sr Michael Chang</h2>"+
                        "<p><span>Distributor</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Nº32 Alley 22 Lane 619- Chung Hua Road<br>"+
                        "710 Jung Kang City<br>"+
                        "Tainan Hsien, Taiwan<br>"+
                        "Phone: <span> +(886.6) 201 46 03</span><br> "+
                        "Fax: <span> +(886.6) 201 46 11</span><br>"+
                        "Email: <span>ab012345@ms9.hinet.net</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_thailand",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 13.867976,
        "longitude": 100.560368, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Thailand</span>"+
                        "<h2>Protech Animal Health Co. Ltd. - Mr. Panitan Suwannapetch</h2>"+
                        "<p><span>Distributor</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>323 Vibphadavi Rangsit Rd., Betagro Tower (North Park)<br>"+
                        "Don Muank Bangkok, 10210<br>"+
                        "Thailand<br>"+
                        "Phone: <span>  +(66.2) 9550555</span><br> "+
                        "Fax: <span> +(66.2) 955 03 12</span><br>"+
                        "Email: <span>panitan@betagro.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_turkey",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 40.798922,
        "longitude": 29.434365, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Turkey</span>"+
                        "<h2>Novakim Ilac Ve Kimya San. Tic. A.S. Plastikciler Organize San. Bol. - Dr. Ali Tas</h2>"+
                        "<p><span>Distributor</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Cumhuriyet Cad. No: 1<br>"+
                        "Gebze-Kocaeli<br>"+
                        "Turkey - 41400<br>"+
                        "Phone: <span> +(90.262) 648 53 75</span><br> "+
                        "Fax: <span>  +(90.262) 751 06 73</span><br>"+
                        "Email: <span>atas@novakim.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_turkey",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 38.428150,
        "longitude": 27.133162, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Turkey</span>"+
                        "<h2>Agritrade & Agrilink - Işinsu Kestelli / Beliz Yerguz Birder</h2>"+
                        "<p><span>Distributor</span>"+
                        "Fragrance / Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Akdeniz Mahallesi - Atatürk Caddesi No:152 <br>"+
                        "Körfez İş Hanı Kat 7 Daire 706<br>"+
                        "Konak, İzmir, Turkey<br>"+
                        "Mobile: <span> +90-532 401 80 01</span><br> "+
                        "Phone: <span> +90-232 484 58 63</span><br> "+
                        "Fax: <span> +90-232 425 15 97</span><br>"+
                        "Email: <span>isinsu.kestelli@agrilink.com.tr / beliz.yerguz@agrilink.com.tr / gizem.iblar@agrilink.com.tr</span></p>"+
                        "</div></div>"
},


{
        "groupId": "distributor_vietnam",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 10.799468,
        "longitude": 106.682601,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Vietnam</span>"+
                        "<h2>C-Pharmachem Co, Ltd. - Ms. Do Ha</h2>"+
                        "<p><span>Distributor</span>"+
                        "Fragrance / Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>4th Floor, Nam Giao Building, 261-263 Phan Xich Long Str.<br>"+
                        "Phu Nhuan Dist., HCMC<br>"+
                        "Konak, İzmir, Turkey<br>"+
                        "Mobile: <span> +90-532 401 80 01</span><br> "+
                        "Phone: <span>  +(848) 39959956</span><br> "+
                        "Fax: <span> +(848) 39959957</span><br>"+
                        "Email: <span>doha@c-pharmachem.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_ukraine",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 48.482457,
        "longitude": 31.253167,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Ukraine</span>"+
                       "<h2>Mr. Willem van der Kolk</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Feed Additives / Fragrance / Flavors "+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Stad en Landschap, 50<br>"+
                        "2923 BN. Krimpen a/d Ijssel<br>"+
                        "Netherlands<br>"+
                        "Mobile: <span>+31 (0) 653720365</span><br> "+
                        "Phone: <span> +31 (0) 180-553035</span><br> "+
                        "Email: <span>kolk@lucta.es</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_uk",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 54.993938,
        "longitude": -2.929922,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>United Kingdom</span>"+
                       "<h2>Lucta Polska sp. z.o.o.</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Fragrance / Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>ul. Kolejowa 57<br>"+
                        "40-602 Katowice<br>"+
                        "Poland<br>"+
                        "Mobile: <span> </span><br> "+
                        "Phone: <span>  +(48.32) 78 69 251</span><br> "+
                        "Fax: <span>  +(39.521) 24 50 28</span><br>"+
                        "Email: <span>pol@lucta.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_bulgaria",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 42.551761,
        "longitude": 26.124468,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Bulgaria</span>"+
                        "<h2>Raúl Galí Kelonen</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Maria Jotunin Katu 20B<br>"+
                        "06100 Porvoo<br>"+
                        "Finland<br>"+
                        "Mobile: <span>+358 405297755 / +34 659 118934</span><br> "+
                        "Email: <span>raul.gali@lucta.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_latvia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 57.992747,
        "longitude": 25.128330,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Latvia</span>"+
                        "<h2>Raúl Galí Kelonen</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Maria Jotunin Katu 20B<br>"+
                        "06100 Porvoo<br>"+
                        "Finland<br>"+
                        "Mobile: <span>+358 405297755 / +34 659 118934</span><br> "+
                        "Email: <span>raul.gali@lucta.com</span></p>"+
                        "</div></div>"
},

{
        "groupId": "contact_lithuania",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 54.906596,
        "longitude": 23.916349,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Lithuania</span>"+
                        "<h2>Raúl Galí Kelonen</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Maria Jotunin Katu 20B<br>"+
                        "06100 Porvoo<br>"+
                        "Finland<br>"+
                        "Mobile: <span>+358 405297755 / +34 659 118934</span><br> "+
                        "Email: <span>raul.gali@lucta.com</span></p>"+
                        "</div></div>"
},
{
        "groupId": "contact_romania",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 44.429510, 
        "longitude": 26.036770,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Romania</span>"+
                        "<h2>Raúl Galí Kelonen</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Maria Jotunin Katu 20B<br>"+
                        "06100 Porvoo<br>"+
                        "Finland<br>"+
                        "Mobile: <span>+358 405297755 / +34 659 118934</span><br> "+
                        "Email: <span>raul.gali@lucta.com</span></p>"+
                        "</div></div>"
},
{
        "groupId": "contact_italy",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-man-icon.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Commercial Contact", 
        "latitude": 45.561527,
        "longitude": 12.247683,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Italy</span>"+
                        "<h2>VICTA FOOD SRL - Sr. Moreno Cappelletto</h2>"+
                        "<p><span>Commercial Contact</span>"+
                        "Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Via G. Parini, 30 <br>"+
                        "31021 Mogliano Veneto (TV)<br>"+
                        "Italy<br>"+
                        "Phone: <span> +(39) 041 5936375</span><br> "+
                        "Fax: <span> +39 041 4566498</span><br> "+
                        "Email: <span>info@victa.it</span></p>"+
                        "</div></div>"
},


{
        "groupId": "distributor_bolivia",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": -17.836435, 
        "longitude": -63.236327, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Bolivia</span>"+
                        "<h2>Ilender-Bolivia - Sr. Rodni Ayllon G</h2>"+
                        "<p><span>Distributor</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Calle Eucaliptos N°2-35<br>"+
                        "Zona doble vía a la Guardia<br>"+
                        "Santa Cruz – Bolivia<br>"+
                        "Mobile: <span></span><br> "+
                        "Phone: <span> +(59.1)  33 58 19 60 / (59.1)  33 58 19 61</span><br> "+
                        "Email: <span>rayllon@ilendercorp.com</span></p>"+
                        "</div></div>"
},


{
        "groupId": "distributor_chile",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": -33.462604,
        "longitude": -70.568388, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Chile</span>"+
                        "<h2>Jofran SpA - Ms. Susan Lucero Droguett</h2>"+
                        "<p><span>Distributor</span>"+
                        "Fragrance"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Pedro Rico 6160<br>"+
                        "Peñalolen, Santiago, Chile<br>"+
                        "Phone: <span>  +(56.2) 2778334</span><br> "+
                        "Email: <span>susan.lucero@jofran.cl</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_chile",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": -33.397774,
        "longitude": -70.623240, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Chile</span>"+
                        "<h2>Nutrimel - Sr. Gerardo Alamos M.</h2>"+
                        "<p><span>Distributor</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Cuba 3390 – Recoleta<br>"+
                        "Santiago - Chile<br>"+
                        "Phone: <span>  +(56-9) .1)  262 281 20 / +(56-9) .1)  262 944 10</span><br> "+
                        "Email: <span>galamos@nutrimel.cl / sclaveria@nutrimel.cl</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_costarica",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 9.979964,
        "longitude": -84.185318, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Costa Rica</span>"+
                        "<h2>Camago Corp - Ing. Mauricio Avendaño</h2>"+
                        "<p><span>Distributor</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Costado sur del cementerio de Belen<br>"+
                        "San Antonio de Belen<br>"+
                        "San José, Costa Rica<br>"+
                        "Phone: <span> +(506) 22390781 / +(506) 22390249</span><br> "+
                        "Email: <span>conintec@racsa.co.cr </span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_dominican",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 18.966841,
        "longitude": -69.948811, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Dominican Republic</span>"+
                        "<h2>Sociedad Nacional Pecuaria S.A - Ing. Ruben Rodríguez</h2>"+
                        "<p><span>Distributor</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Calle Bohechio No 37<br>"+
                        "Ensanche Quisqueya, Santo Domingo<br>"+
                        "Dominican Republic<br>"+
                        "Phone: <span> +(809) 566-1188</span><br> "+
                        "Email: <span>sonapec@claro.net.do / sonapec2@claro.net.do</span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_ecuador",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": -0.204542,
        "longitude": -78.377936, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Ecuador</span>"+
                        "<h2>Agroal - Ing. Alfonso Baquero Moreno</h2>"+
                        "<p><span>Distributor</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Tumbaco. Sector el Arenal.<br>"+
                        "Quito, Ecuador<br>"+
                        "Phone: <span> +(593-2)-2044780</span><br> "+
                        "Email: <span>abaquero@agroal.com.ec/span></p>"+
                        "</div></div>"
},

{
        "groupId": "distributor_ecuador",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": -0.278383,
        "longitude": -78.540906, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Ecuador</span>"+
                        "<h2>Fragaromas Cia Ltda - Mr. Jaime Salvador / Mr. Javier Herrera</h2>"+
                        "<p><span>Distributor</span>"+
                        "Fragrance / Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Av. de los Volcanes N12-79 y Cholanes<br>"+
                        "Quito, Valle de los Chillos, Ecuador<br>"+
                        "Mobile: <span> +990 488 881</span><br> "+
                        "Phone: <span>  +022 875 116</span><br> "+
                        "</div></div>"
},

{
        "groupId": "distributor_guatemala",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 14.6591391, 
        "longitude": -90.4442274, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Guatemala</span>"+
                        "<h2>Productos y Servicios Agropecuarios S.A - MVZ Hugo Girón</h2>"+
                        "<p><span>Distributor</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>19 Avenida Casa 19 Zona 16<br>"+
                        "Colonia Montesano<br>"+
                        "Phone: <span> +502 22610397</span><br> "+
                        "Email: <span> prospecsa@gmail.com</span><br> "+
                        "</div></div>"
},

{
        "groupId": "distributor_panama",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 9.030288,
        "longitude": -79.477543, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Panama</span>"+
                        "<h2>Grupo Artasa - Ing. Rodolfo Arosemena.</h2>"+
                        "<p><span>Distributor</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Calle Matias Hernández Via Marcasa, Rio Abajo.<br>"+
                        "Ciudad de Panamá, Panama<br>"+
                        "Phone: <span> +(507) 2246782</span><br> "+
                        "Email: <span> benkirane.n@panacom.ma</span><br> "+
                        "</div></div>"
},

{
        "groupId": "distributor_peru",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": -12.0962625,
        "longitude": -77.0345983, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Peru</span>"+
                        "<h2>Ilender Perú - Mr. Guido Coronado</h2>"+
                        "<p><span>Distributor</span>"+
                        "Feed Additives"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Calle Dos, 199<br>"+
                        "Urbanización Corpac, San Isidro<br>"+
                        "Lima 27, Peru<br>"+
                        "Phone: <span> +(51.1) 212 60 22</span><br> "+
                        "Fax: <span>  +(51.1) 212 60 13</span><br> "+
                        "Email: <span> gcoronado@ilendercorp.com</span><br> "+
                        "</div></div>"
},

{
        "groupId": "distributor_peru",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": -12.533356, 
        "longitude": -76.297935,
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Peru</span>"+
                        "<h2>SIGONSA SAC - Mr. Isaac Silva Gonzales</h2>"+
                        "<p><span>Distributor</span>"+
                        "Fragrance"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Av. Nicolás Arriola 467 Of 502 La Victoria<br>"+
                        "Lima, Perú<br>"+
                        "Phone: <span>  +(511) 328 - 5417 / +(511) 328 - 1664</span><br> "+
                        "Email: <span>sigonsa@sigonsa.com</span><br> "+
                        "</div></div>"
},

{
        "groupId": "distributor_venezuela",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 10.481984,
        "longitude": -66.907216, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Venezuela</span>"+
                        "<h2>Fabras Chemical S.A. - Mr. Arturo Rodríguez</h2>"+
                        "<p><span>Distributor</span>"+
                        "Fragrance / Flavors"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Av Roosvelt Galpon No. 5<br>"+
                        "Prado de Maria<br>"+
                        "Venezuela<br>"+
                        "Phone: <span> +(212) 631 55 43 - 631 92 89</span><br> "+
                        "</div></div>"
},

{
        "groupId": "distributor_dominican",
        // "svgPath": targetSVG,
        "imageURL": "/lucta_wp/wp-content/uploads/2018/04/pin-marker-red.png",
        "width":30,
        "height":40,
        "scale": 1,
        "title": "Distributor", 
        "latitude": 18.442602,
        "longitude": -69.979604, 
        "description": "<div class='map-popup-details popup_active'>"+
                        "<div class='img-section'>"+
                        "<img src='/lucta_wp/wp-content/uploads/2018/04/popup-img.jpg' alt=''>"+
                        "<div class='close-btn'><img src='images/close-icon.png' alt=''> </div></div>"+
                        "<div class='title-section'>"+
                        "<span class=''>Dominican Republic</span>"+
                        "<h2>ATIVA MATERIAS PRIMAS, S.R.L</h2>"+
                        "<p><span>Distributor</span>"+
                        "Fragrance"+
                        "</p></div>"+
                        "<div class='info-section'>"+
                        "<p>Calle Pedro Abreu No. 20<br>"+
                        "Bayona, Santo Domingo<br>"+
                        "Dominican Republic<br>"+
                        "Phone: <span>  +(809) 531-8482 / +(809) 539-8482</span><br> "+
                        "Email: <span>  info@ativa.com.do</span><br> "+
                        "</div></div>"
}
 ]

  },



  "areasSettings": {
    // "selectedColor": "#E12726",
    "selectedColor": "#999999",
    "selectable": true

  },
   "listeners": [{
    "event": "clickMapObject",
    "method": function(e) {
      
      // Ignore any click not on area
      if (e.mapObject.objectType !== "MapArea")
        return;
    console.log('inhere');
    document.getElementById("initial-loc").style.display = 'none';

    document.getElementById("inner-loc").style.display = 'block';

    if(!navigator.userAgent.match(/(Android)/) || !navigator.userAgent.match(/(iPhone)/)){
    document.getElementById("filter-options").classList.add("option_active");
    }
   
    }
  }]



} );


function isInArray(value, array) {
  return array.indexOf(value) > -1;
}



function updateSelection(continent) {
    
    var areas = [];
    $(continent).each(function(id,value) {
      var CC = value;

      areas.push({
        id: CC,
        showAsSelected: true
      });
    });
    console.log(areas);
    map.dataProvider.areas = areas;
    map.validateData();
    return areas;
  }



map.addListener( "rendered", function() {

  revealMapImages();

  map.addListener( "zoomCompleted", revealMapImages );

} );



function revealMapImages( event ) {
   zoomLevel = map.zoomLevel();

  if ( zoomLevel < 12) {

  /*  map.hideGroup( "distributor" );

    map.hideGroup( "commercial" );

    map.hideGroup( "flavours" );

    map.hideGroup( "companies" );

    map.hideGroup( "feed" );

    map.hideGroup( "fragrances" );*/

    hide_companies();
    hide_distributors();
    hide_contacts();
    hide_feeds();
    hide_flavors();
    hide_fragrances();



    map.hideGroup( "conti_mark" );

    if(zoomLevel >= 2){

    	map.showGroup( "conti_mark" );

    }

  } else {

    // map.showGroup( "companies" );

    // map.showGroup( "commercial" );

    // map.showGroup( "distributor" );

    // map.showGroup( "feed" );

    // map.showGroup( "flavours" );

    // map.showGroup( "fragrances" );


    show_companies();
    show_distributors();
    show_contacts();
    show_feeds();
    show_flavors();
    show_fragrances();



    map.hideGroup( "conti_mark" );

  } 





  if (document.getElementById("checkboxG1").checked == true && zoomLevel >= 14) {
    show_companies();
    // map.showGroup( "companies" );

  } else {
    hide_companies();
  	 // map.hideGroup( "companies" );

  }

  if (document.getElementById("checkboxG2").checked == true && zoomLevel >= 14) {
    show_distributors()
    // map.showGroup( "distributor" );

  } else {
    hide_distributors();
  	 // map.hideGroup( "distributor" );

  }

  if (document.getElementById("checkboxG3").checked == true && zoomLevel >= 14) {

    show_contacts();
    // map.showGroup( "commercial" );

  } else {

    hide_contacts();
     // map.hideGroup( "commercial" );

  }

  if (document.getElementById("checkboxG4").checked == true && zoomLevel >= 14) {

    show_feeds();
    // map.showGroup( "feed" );

  } else {

    hide_feeds();
  	 // map.hideGroup( "feed" );

  }

  if (document.getElementById("checkboxG5").checked == true && zoomLevel >= 14) {
    show_flavors();
    // map.showGroup( "flavours" );
  } else {
    hide_flavors();
  	 // map.hideGroup( "flavours" );
  }

  if (document.getElementById("checkboxG6").checked == true && zoomLevel >= 14) {
    show_fragrances();
    // map.showGroup( "fragrances" );
  } else {

    hide_fragrances();
  	 // map.hideGroup( "fragrances" );

  }

  

}



function show_companies(){

map.showGroup('companies_spain');
map.showGroup('companies_usa');
map.showGroup('companies_mexico');
map.showGroup('companies_colombia');
map.showGroup('companies_brazil');
map.showGroup('companies_poland');
map.showGroup('companies_china');
}

function show_distributors(){
  map.showGroup('distributor_algeria');
  map.showGroup('distributor_guinea');

map.showGroup('distributor_congo');
map.showGroup('distributor_greece');
map.showGroup('distributor_iran');
map.showGroup('distributor_ireland');
map.showGroup('distributor_saudi');
map.showGroup('distributor_lebanese');
map.showGroup('distributor_morocco');
map.showGroup('distributor_cameroon');
map.showGroup('distributor_cote');
map.showGroup('distributor_sengal');
map.showGroup('distributor_iraq');
map.showGroup('distributor_russia');
map.showGroup('distributor_serbia');
map.showGroup('distributor_kuwait');
map.showGroup('distributor_switzerland');
map.showGroup('distributor_syrian');
map.showGroup('distributor_uae');
map.showGroup('distributor_indonesia');
map.showGroup('distributor_japan');
map.showGroup('distributor_malayasia');
map.showGroup('distributor_philippines');
map.showGroup('distributor_taiwan');
map.showGroup('distributor_thailand');
map.showGroup('distributor_turkey');
map.showGroup('distributor_vietnam');
map.showGroup('distributor_bolivia');
map.showGroup('distributor_chile');
map.showGroup('distributor_costarica');
map.showGroup('distributor_ecuador');
map.showGroup('distributor_guatemala');
map.showGroup('distributor_panama');
map.showGroup('distributor_peru');
map.showGroup('distributor_venezuela');
map.showGroup('distributor_dominican');
}

function show_contacts(){
  map.showGroup('contact_albania');
map.showGroup('contact_slovenia');
map.showGroup('contact_germany');
map.showGroup('contact_algeria');
map.showGroup('contact_austria');
map.showGroup('contact_slovakia');
map.showGroup('contact_benelux');
map.showGroup('contact_bosnia');
map.showGroup('contact_bulgaria');
map.showGroup('contact_belarus');
map.showGroup('contact_southkorea');
map.showGroup('contact_croatia');
map.showGroup('contact_denmark');
map.showGroup('contact_estonia');
map.showGroup('contact_latvia');
map.showGroup('contact_lithuania');
map.showGroup('contact_philippines');
map.showGroup('contact_france');
map.showGroup('contact_hungary');
map.showGroup('contact_ireland');
map.showGroup('contact_italy');
map.showGroup('contact_macedonia');
map.showGroup('contact_morocco');
map.showGroup('contact_moldova');
map.showGroup('contact_montenegro');
map.showGroup('contact_norway');
map.showGroup('contact_portugal');
map.showGroup('contact_czechrepublic');
map.showGroup('contact_russia');
map.showGroup('contact_serbia');
map.showGroup('contact_sweden');
map.showGroup('contact_switzerland');
map.showGroup('contact_tunisia');
map.showGroup('contact_ukraine');
map.showGroup('contact_uk');
map.showGroup('contact_bulgaria');
map.showGroup('contact_latvia');
map.showGroup('contact_lithuania');
map.showGroup('contact_romania');
map.showGroup('contact_italy');
}

function show_flavors(){

    if (document.getElementById("checkboxG1").checked == true && zoomLevel >= 14) {
        map.showGroup('companies_spain');
        map.showGroup('companies_usa');
        map.showGroup('companies_mexico');
        map.showGroup('companies_colombia');
        map.showGroup('companies_brazil');
        map.showGroup('companies_poland');
        map.showGroup('companies_china');
    }
    if (document.getElementById("checkboxG2").checked == true && zoomLevel >= 14) {
        map.showGroup('distributor_algeria');
        map.showGroup('distributor_congo');
        map.showGroup('distributor_iran');
        map.showGroup('distributor_saudi');
        map.showGroup('distributor_lebanese');
        map.showGroup('distributor_morocco');
        map.showGroup('distributor_guinea');
        map.showGroup('distributor_cameroon');
        map.showGroup('distributor_cote');
        map.showGroup('distributor_sengal');
        map.showGroup('distributor_iraq');
        map.showGroup('distributor_kuwait');
        map.showGroup('distributor_syrian');
        map.showGroup('distributor_uae');
        map.showGroup('distributor_japan');
        map.showGroup('distributor_malayasia');
        map.showGroup('distributor_philippines');
        map.showGroup('distributor_taiwan');
        map.showGroup('distributor_turkey');
        map.showGroup('distributor_vietnam');
        map.showGroup('distributor_ecuador');
        map.showGroup('distributor_venezuela');
    }
    if (document.getElementById("checkboxG3").checked == true && zoomLevel >= 14) {
        map.showGroup('contact_belarus');
        map.showGroup('contact_tunisia');
        map.showGroup('contact_ukraine');
        map.showGroup('contact_bulgaria');
        map.showGroup('contact_latvia');
        map.showGroup('contact_lithuania');
        map.showGroup('contact_romania');
        map.showGroup('contact_italy');
    }

        
}

function show_fragrances(){
    if (document.getElementById("checkboxG1").checked == true && zoomLevel >= 14) {
        map.showGroup('companies_spain');
        map.showGroup('companies_usa');
        map.showGroup('companies_mexico');
        map.showGroup('companies_colombia');
        map.showGroup('companies_brazil');
        map.showGroup('companies_poland');
        map.showGroup('companies_china');
    }
    if (document.getElementById("checkboxG2").checked == true && zoomLevel >= 14) {
        map.showGroup('distributor_greece');
        map.showGroup('distributor_iran');
        map.showGroup('distributor_turkey');
        map.showGroup('distributor_vietnam');
        map.showGroup('distributor_chile');
        map.showGroup('distributor_ecuador');
        map.showGroup('distributor_peru');
        map.showGroup('distributor_venezuela');
        map.showGroup('distributor_dominica');
    }
    if (document.getElementById("checkboxG3").checked == true && zoomLevel >= 14) {
        map.showGroup('contact_bulgaria');
        map.showGroup('contact_belarus');
        map.showGroup('contact_estonia');
        map.showGroup('contact_latvia');
        map.showGroup('contact_lithuania');
        map.showGroup('contact_italy');
        map.showGroup('contact_moldova');
        map.showGroup('contact_romania');
        map.showGroup('contact_russia');
        map.showGroup('contact_ukraine');
        map.showGroup('contact_uk');
    }
        
}

function show_feeds(){
    if (document.getElementById("checkboxG1").checked == true && zoomLevel >= 14) {
        map.showGroup('companies_spain');
        map.showGroup('companies_usa');
        map.showGroup('companies_mexico');
        map.showGroup('companies_colombia');
        map.showGroup('companies_brazil');
        map.showGroup('companies_poland');
        map.showGroup('companies_china');
    }
    if (document.getElementById("checkboxG2").checked == true && zoomLevel >= 14) {
        map.showGroup('distributor_greece');
        map.showGroup('distributor_ireland');
        map.showGroup('distributor_morocco');
        map.showGroup('distributor_russia');
        map.showGroup('distributor_serbia');
        map.showGroup('distributor_switzerland');
        map.showGroup('distributor_indonesia');
        map.showGroup('distributor_thailand');
        map.showGroup('distributor_turkey');
        map.showGroup('distributor_bolivia');
        map.showGroup('distributor_chile');
        map.showGroup('distributor_costarica');
        map.showGroup('distributor_dominican');
        map.showGroup('distributor_ecuador');
        map.showGroup('distributor_guatemala');
        map.showGroup('distributor_panama');
        map.showGroup('distributor_peru');
    }
    if (document.getElementById("checkboxG3").checked == true && zoomLevel >= 14) {
        map.showGroup('contact_albania');
        map.showGroup('contact_slovenia');
        map.showGroup('contact_germany');
        map.showGroup('contact_algeria');
        map.showGroup('contact_austria');
        map.showGroup('contact_slovakia');
        map.showGroup('contact_finland');
        map.showGroup('contact_benelux');
        map.showGroup('contact_bosnia');
        map.showGroup('contact_bulgaria');
        map.showGroup('contact_belarus');
        map.showGroup('contact_southkorea');
        map.showGroup('contact_croatia');
        map.showGroup('contact_denmark');
        map.showGroup('contact_estonia');
        map.showGroup('contact_latvia');
        map.showGroup('contact_lithuania');
        map.showGroup('contact_philippines');
        map.showGroup('contact_france');
        map.showGroup('contact_hungary');
        map.showGroup('contact_ireland');
        map.showGroup('contact_italy');
        map.showGroup('contact_macedonia');
        map.showGroup('contact_morocco');
        map.showGroup('contact_moldova');
        map.showGroup('contact_montenegro');
        map.showGroup('contact_norway');
        map.showGroup('contact_portugal');
        map.showGroup('contact_czechrepublic');
        map.showGroup('contact_romania');
        map.showGroup('contact_russia');
        map.showGroup('contact_serbia');
        map.showGroup('contact_sweden');
        map.showGroup('contact_switzerland');
        map.showGroup('contact_tunisia');
        map.showGroup('contact_ukraine');
        map.showGroup('contact_uk');
    }
}

function hide_companies(){
map.hideGroup('companies_spain');
map.hideGroup('companies_usa');
map.hideGroup('companies_mexico');
map.hideGroup('companies_colombia');
map.hideGroup('companies_brazil');
map.hideGroup('companies_poland');
map.hideGroup('companies_china');
}

function hide_distributors(){
  map.hideGroup('distributor_algeria');
map.hideGroup('distributor_congo');
map.hideGroup('distributor_greece');
map.hideGroup('distributor_iran');
map.hideGroup('distributor_ireland');
map.hideGroup('distributor_saudi');
map.hideGroup('distributor_lebanese');
map.hideGroup('distributor_guinea');
map.hideGroup('distributor_morocco');
map.hideGroup('distributor_cameroon');
map.hideGroup('distributor_cote');
map.hideGroup('distributor_sengal');
map.hideGroup('distributor_iraq');
map.hideGroup('distributor_russia');
map.hideGroup('distributor_serbia');
map.hideGroup('distributor_kuwait');
map.hideGroup('distributor_switzerland');
map.hideGroup('distributor_syrian');
map.hideGroup('distributor_uae');
map.hideGroup('distributor_indonesia');
map.hideGroup('distributor_japan');
map.hideGroup('distributor_malayasia');
map.hideGroup('distributor_philippines');
map.hideGroup('distributor_taiwan');
map.hideGroup('distributor_thailand');
map.hideGroup('distributor_turkey');
map.hideGroup('distributor_vietnam');
map.hideGroup('distributor_bolivia');
map.hideGroup('distributor_chile');
map.hideGroup('distributor_costarica');
map.hideGroup('distributor_ecuador');
map.hideGroup('distributor_guatemala');
map.hideGroup('distributor_panama');
map.hideGroup('distributor_peru');
map.hideGroup('distributor_venezuela');
map.hideGroup('distributor_dominican');
}

function hide_contacts(){
  map.hideGroup('contact_albania');
map.hideGroup('contact_slovenia');
map.hideGroup('contact_germany');
map.hideGroup('contact_algeria');
map.hideGroup('contact_austria');
map.hideGroup('contact_slovakia');
map.hideGroup('contact_benelux');
map.hideGroup('contact_bosnia');
map.hideGroup('contact_bulgaria');
map.hideGroup('contact_belarus');
map.hideGroup('contact_southkorea');
map.hideGroup('contact_croatia');
map.hideGroup('contact_denmark');
map.hideGroup('contact_estonia');
map.hideGroup('contact_latvia');
map.hideGroup('contact_lithuania');
map.hideGroup('contact_philippines');
map.hideGroup('contact_france');
map.hideGroup('contact_hungary');
map.hideGroup('contact_ireland');
map.hideGroup('contact_italy');
map.hideGroup('contact_macedonia');
map.hideGroup('contact_morocco');
map.hideGroup('contact_moldova');
map.hideGroup('contact_montenegro');
map.hideGroup('contact_norway');
map.hideGroup('contact_portugal');
map.hideGroup('contact_czechrepublic');
map.hideGroup('contact_russia');
map.hideGroup('contact_serbia');
map.hideGroup('contact_sweden');
map.hideGroup('contact_switzerland');
map.hideGroup('contact_tunisia');
map.hideGroup('contact_ukraine');
map.hideGroup('contact_uk');
map.hideGroup('contact_bulgaria');
map.hideGroup('contact_latvia');
map.hideGroup('contact_lithuania');
map.hideGroup('contact_romania');
map.hideGroup('contact_italy');
}

function hide_flavors(){

    if (document.getElementById("checkboxG1").checked == false || zoomLevel >= 14) {
        map.hideGroup('companies_spain');
        map.hideGroup('companies_usa');
        map.hideGroup('companies_mexico');
        map.hideGroup('companies_colombia');
        map.hideGroup('companies_brazil');
        map.hideGroup('companies_poland');
        map.hideGroup('companies_china');
    }
    if (document.getElementById("checkboxG2").checked == false || zoomLevel >= 14) {
        map.hideGroup('distributor_taiwan');
        map.hideGroup('distributor_turkey');
        map.hideGroup('distributor_vietnam');
        map.hideGroup('distributor_algeria');
        map.hideGroup('distributor_congo');
        map.hideGroup('distributor_guinea');
        map.hideGroup('distributor_iran');
        map.hideGroup('distributor_saudi');
        map.hideGroup('distributor_lebanese');
        map.hideGroup('distributor_morocco');
        map.hideGroup('distributor_cameroon');
        map.hideGroup('distributor_cote');
        map.hideGroup('distributor_sengal');
        map.hideGroup('distributor_iraq');
        map.hideGroup('distributor_kuwait');
        map.hideGroup('distributor_syrian');
        map.hideGroup('distributor_uae');
        map.hideGroup('distributor_japan');
        map.hideGroup('distributor_malayasia');
        map.hideGroup('distributor_philippines');
        map.hideGroup('distributor_ecuador');
        map.hideGroup('distributor_venezuela');
    }
    if (document.getElementById("checkboxG3").checked == false || zoomLevel >= 14) {
        map.hideGroup('contact_belarus');
        map.hideGroup('contact_tunisia');
        map.hideGroup('contact_ukraine');
        map.hideGroup('contact_bulgaria');
        map.hideGroup('contact_latvia');
        map.hideGroup('contact_lithuania');
        map.hideGroup('contact_romania');
        map.hideGroup('contact_italy');
    }
}

function hide_fragrances(){
    if (document.getElementById("checkboxG1").checked == false || zoomLevel >= 14) {
        map.hideGroup('companies_spain');
        map.hideGroup('companies_usa');
        map.hideGroup('companies_mexico');
        map.hideGroup('companies_colombia');
        map.hideGroup('companies_brazil');
        map.hideGroup('companies_poland');
        map.hideGroup('companies_china');
    }
    if (document.getElementById("checkboxG2").checked == false || zoomLevel >= 14) {
        map.hideGroup('distributor_greece');
        map.hideGroup('distributor_iran');
        map.hideGroup('distributor_turkey');
        map.hideGroup('distributor_vietnam');
        map.hideGroup('distributor_chile');
        map.hideGroup('distributor_ecuador');
        map.hideGroup('distributor_peru');
        map.hideGroup('distributor_venezuela');
        map.hideGroup('distributor_dominica');
    }
    if (document.getElementById("checkboxG3").checked == false || zoomLevel >= 14) {
        map.hideGroup('contact_bulgaria');
        map.hideGroup('contact_belarus');
        map.hideGroup('contact_estonia');
        map.hideGroup('contact_latvia');
        map.hideGroup('contact_lithuania');
        map.hideGroup('contact_italy');
        map.hideGroup('contact_moldova');
        map.hideGroup('contact_romania');
        map.hideGroup('contact_russia');
        map.hideGroup('contact_ukraine');
        map.hideGroup('contact_uk');
    }
}

function hide_feeds(){
    if (document.getElementById("checkboxG1").checked == false || zoomLevel >= 14) {
        map.hideGroup('companies_spain');
        map.hideGroup('companies_usa');
        map.hideGroup('companies_mexico');
        map.hideGroup('companies_colombia');
        map.hideGroup('contact_finland');
        map.hideGroup('companies_brazil');
        map.hideGroup('companies_poland');
        map.hideGroup('companies_china');
    }
    if (document.getElementById("checkboxG2").checked == false || zoomLevel >= 14) {
        map.hideGroup('distributor_greece');
        map.hideGroup('distributor_morocco');
        map.hideGroup('distributor_russia');
        map.hideGroup('distributor_serbia');
        map.hideGroup('distributor_switzerland');
        map.hideGroup('distributor_indonesia');
        map.hideGroup('distributor_thailand');
        map.hideGroup('distributor_turkey');
        map.hideGroup('distributor_bolivia');
        map.hideGroup('distributor_chile');
        map.hideGroup('distributor_costarica');
        map.hideGroup('distributor_dominican');
        map.hideGroup('distributor_ecuador');
        map.hideGroup('distributor_guatemala');
        map.hideGroup('distributor_panama');
        map.hideGroup('distributor_peru');
    }
    if (document.getElementById("checkboxG3").checked == false || zoomLevel >= 14) {
        map.hideGroup('contact_albania');
        map.hideGroup('contact_slovenia');
        map.hideGroup('contact_germany');
        map.hideGroup('contact_algeria');
        map.hideGroup('contact_austria');
        map.hideGroup('contact_slovakia');
        map.hideGroup('contact_benelux');
        map.hideGroup('contact_bosnia');
        map.hideGroup('contact_bulgaria');
        map.hideGroup('contact_belarus');
        map.hideGroup('contact_southkorea');
        map.hideGroup('contact_croatia');
        map.hideGroup('contact_denmark');
        map.hideGroup('contact_estonia');
        map.hideGroup('contact_latvia');
        map.hideGroup('contact_lithuania');
        map.hideGroup('contact_philippines');
        map.hideGroup('contact_france');
        map.hideGroup('contact_hungary');
        map.hideGroup('contact_ireland');
        map.hideGroup('contact_italy');
        map.hideGroup('contact_macedonia');
        map.hideGroup('contact_morocco');
        map.hideGroup('contact_moldova');
        map.hideGroup('contact_montenegro');
        map.hideGroup('contact_norway');
        map.hideGroup('contact_portugal');
        map.hideGroup('contact_czechrepublic');
        map.hideGroup('contact_romania');
        map.hideGroup('contact_russia');
        map.hideGroup('contact_serbia');
        map.hideGroup('contact_sweden');
        map.hideGroup('contact_switzerland');
        map.hideGroup('contact_tunisia');
        map.hideGroup('contact_ukraine');
        map.hideGroup('contact_uk');
    }
}



function check_box_click(){

	var zoomLevel = map.zoomLevel();

	if (document.getElementById("checkboxG1").checked == true && zoomLevel >= 14) {

    // map.showGroup( "companies" );
    show_companies();

  } else {

  	 // map.hideGroup( "companies" );
     hide_companies();

  }

  if (document.getElementById("checkboxG2").checked == true && zoomLevel >= 14) {

    // map.showGroup( "distributor" );
    show_distributors();

  } else {

  	 // map.hideGroup( "distributor" );
     hide_distributors();

  }

  if (document.getElementById("checkboxG3").checked == true && zoomLevel >= 14) {

    // map.showGroup( "commercial" );
    show_contacts();

  } else {

  	 // map.hideGroup( "commercial" );
     hide_contacts();

  }

  if (document.getElementById("checkboxG4").checked == true && zoomLevel >= 14) {

    // map.showGroup( "feed" );
    show_feeds();

  } else {

  	 // map.hideGroup( "feed" );
     hide_feeds();

  }

  if (document.getElementById("checkboxG5").checked == true && zoomLevel >= 14) {

    // map.showGroup( "flavours" );
    show_flavors();

  } else {

  	 // map.hideGroup( "flavours" );
     hide_flavors();

  }

  if (document.getElementById("checkboxG6").checked == true && zoomLevel >= 14) {

    // map.showGroup( "fragrances" );
    show_fragrances();

  } else {

  	 // map.hideGroup( "fragrances" );
     hide_fragrances();

  }

}





function goto_home(){

	document.getElementById("initial-loc").style.display = 'block';

	document.getElementById("inner-loc").style.display = 'none';

    resetMap(lists.asia);
    resetMap(lists.europe);
    resetMap(lists.northAmerica);
    resetMap(lists.southAmerica);
    resetMap(lists.africa);

	map.selectObject();

	var element = document.getElementById("loc-list-home");

    element.classList.remove("list_active");


}



function resetMap(continent){

    var areas = [];
    $(continent).each(function(id,value) {
      var CC = value;

      areas.push({
        id: CC,
        showAsSelected: false
      });
    });
    map.dataProvider.areas = areas;
    map.validateData();
    return areas;

}





function goto_cont(id){



	var section = document.getElementById(id);

	var lat = section.getAttribute('data-lat');

	var lon = section.getAttribute('data-lon');

	//alert(lat_lon);

	document.getElementById("initial-loc").style.display = 'none';

	document.getElementById("inner-loc").style.display = 'block';

	document.getElementById("filter-options").classList.add("option_active");

	document.getElementById("location").innerText = document.getElementById(id).innerText;

	var element = document.getElementById("loc-list");

    element.classList.remove("list_active");

	map.zoomToLongLat(2, lon, lat);



	if(id == 'north-america')

		document.getElementById("collapseSix").setAttribute("aria-expanded", "true");

	else if(id == 'south-america')

		document.getElementById("collapseSeven").setAttribute("aria-expanded", "true");

	else if(id == 'africa')

		document.getElementById("collapseEight").setAttribute("aria-expanded", "true");

	else if(id == 'asia')

		document.getElementById("collapseNine").setAttribute("aria-expanded", "true");

}



$('body').on('click', function() {

	setTimeout(function() 

  {

    $(document).find('.ammapDescriptionWindow').parent().addClass('map_popup_main');

  }, 2000);

	

});



// changes made successfully
