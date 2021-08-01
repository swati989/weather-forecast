const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo = async(event) =>{
event.preventDefault();
alert=('Hii');

let cityVal = cityName.value;
if(cityVal === ""){
city_name.innerText = `please write the name before search`;

}
else
{
 
try{

let url = `http://api.openweatherthermap.org/dat/2.5/weather?q=${cityVal}&units=metric&appid=0a1c20fb49bd87979f958e8df9c8a791`

  const response = await fetch(url);
console.log(response);
const data = await response.json();
console arrData = [data];

city_name.innerText =`${arrData[0].name}, ${arrData[0].sys.country}`;
temp.innerText = arrData[0].main.temp;
//temp_status.innerText = arrData[0].weather[0].main;

const tempMood =  arrData[0].weather[0].main;

//conditions to check sunny or cloudy
if(tempMood = "Clear") {
temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
}
else if (tempMood = "Clouds")
{
temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #f1f2f6;'></i>";
}

else if (tempMood = "Rainy")
{
temp_status.innerHTML = "<i class='fas fa-rain' style='color: #a4b0be;'></i>";
}


else 
{
temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #a4b0be;'></i>";
}


}
catch
{
  city_name.innerText = `Please enter the city name properly`;
 }
}
}
submitBtn.addEventListener('click', getInfo);



/* <!DOCTYPE html>
<html lang="en">
<head>

{{>headerlinks}}
 
</head>

<body>

{{>navbar}}

<!--main header-->
<div class="container-fluid main-header" >
<div class="row">
<div class="col-md-10 col-12 mx-auto">

<div class="main_content">
<form class="temp_form">
<input type="text" id="cityName" placeholder="Enter your city name" autocomplete="off">
<input type="submit" value="search" id="submitBtn">
</form>
</div>

<div class="tempInformation">
<div class="top_layer">
<p id="day">Sunday</p>
<id id="today_data">25 JUL</p>
</div>
<div class="main_layer">
  <p id="city_name">Get Output Here</p>
  <div class="middle_layer">
  <p id="temp"><span>0</span> <sup>o</sup>C</p>
  <p id="temp_status"> <i class="fa fa-cloud" aria-hidden="true"></i> </p>

</div>
</div>
</div>

</div>
</div>
</div>


<!--footer code-->
{{>footer}}

<script src="js/main.js"></script>


</body>
</html>

*/