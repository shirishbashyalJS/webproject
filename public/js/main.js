const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const data_hide = document.querySelector('.data_hide');

const getInfo =  async(event)=>{
  event.preventDefault();
  let cityVal = cityName.value;
  if(cityVal === ''){
    city_name.innerHTML = `Search something`;
    data_hide.classList.add('data_hide');
  }
  

  else{
    try{

    
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=6b0bdf87e76f070a98a8d0ef1fe3f2a8`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerText = `${Math.round(arrData[0].main.temp-273)}°C`;

      
      const tempMood = arrData[0].weather[0].main;
      //condition to check sunny or cloudy
      if (tempMood == "Clear") {
      temp_status.innerHTML ='<i class="fas fa-sun" style=`color: #ffdf22`></i>';
      } else if (tempMood =="Clouds") {
      temp_status.innerHTML
      "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
      cityVal = ""
      } else if (tempMood == "Rain") {
      temp_status.innerHTML ="<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
      temp_status.innerHTML="<i class=`fas fa-sun` style='color:#ffdf22'></i>";
      
    }
    data_hide.classList.remove('data_hide');
  }catch{
      city_name.innerHTML = `Enter proper name`;
      data_hide.classList.add('data_hide');
    }
  }

}
submitBtn.addEventListener('click',getInfo);




const day = document.getElementById('day');
const todayDate = document.getElementById('today-date');
const getDate = ()=>{
  const date = new Date();
      const dayNumber = date.getDay();
      const days = ['Sunday','Monday','Tuesday','Wednesday','Thusday','Friday','Saturday'];
      const dayStr = days[dayNumber];
      day.innerHTML = dayStr;

      
      const dateNumber = date.getDate();
      const monthNumber = date.getMonth();
      const months = ['JAN','FEB','MAR','APR','MAY','JUNE','JULY','AUG','SEPT','NOV','DEC'];
      const month = months[monthNumber];
      const dateMonth = `${dateNumber} ${month}`;
      todayDate.innerHTML = dateMonth;
      

}
getDate();