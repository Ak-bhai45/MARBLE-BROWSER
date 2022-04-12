
   function copy(copyId) {
     let inputElement = document.createElement("input");
     inputElement.type = "text";
     let copyText = document.getElementById(copyId).innerHTML;
     inputElement.value = copyText;
     document.body.appendChild(inputElement);
     inputElement.select();
     document.execCommand('copy');
     document.body.removeChild(inputElement);
   
     document.getElementById("alert").style.display = "block";
     setTimeout(function() {
     document.getElementById("alert").style.display = "none";
     }, 1000);
   };
  
       
       let suggestions = [
           "Channel",
           "free fire news",
           "Pubg new state news",
           "Bgmi news",
           "Cod mobile news",
           "billionaires in india",
           "billionaires in world",
           "Castle of smart gadgets",
           "YouTube",
           "YouTuber",
           "YouTube Channel",
           "Blogger",
           "Bollywood",
           "Vlogger",
           "Vechiles",
           "Facebook",
           "Facebook Page",
           "recipe",
           "www.youtube.com/c/castleofsmartgadgets",
           "dhokla recipe",
           "Designer",
           "Developer",
           "Web Designer",
           "Web Developer",
           "Login Form in HTML & CSS",
           "How to learn HTML & CSS",
           "How to learn JavaScript",
           "How to became Freelancer",
           "How to became Web Designer",
           "How to start Gaming Channel",
           "How to start YouTube Channel",
           "What does HTML stands for?",
           "What does CSS stands for?",
           "amazon.in",
           "flipkart.in",
           "Alibaba.in",
           "jimin",
           "Today's Trending 🔥",
           "Technology #1",
           "Shri Narendra Damodar Das Modi",
           "V",
           
           "j hope",
           "BTS gang",
           "Spotify",
           "Hungama",
           "Ganna",
           "Ambani Net Worth",
           "Adani Net worth",
           "PM-BHAI",
           "AK-BHAI45",
           "Elon musk Net Worth"
       ];
       
     
     
     
     
     
     

       
       // getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e) => {
  let userData = e.target.value; //user enetered data
  let emptyArray = [];
  if (userData) {
    icon.onclick = () => {
      webLink = `https://www.google.com/search?q=${userData}`;
      linkTag.setAttribute("href", webLink);
      linkTag.click();
    }
    emptyArray = suggestions.filter((data) => {
      //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return data = `<li>${data}</li>`;
    });
    searchWrapper.classList.add("active"); //show autocomplete box
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active"); //hide autocomplete box
  }
}

function select(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;
  icon.onclick = () => {
    webLink = `https://www.google.com/search?q=${selectData}`;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
  }
  searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}





function myButton(){
  location.reload()
}






/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)





/*MIC SCRIPT*/



const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input"); // <=> document.querySelector("#search-form input");
const info = document.querySelector(".info");


// The speech recognition interface lives on the browser’s window object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined



if(SpeechRecognition) {
  console.log("Your Browser supports speech Recognition");
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";



searchForm.insertAdjacentHTML("beforeend", '');
  searchFormInput.style.paddingRight = "50px";

  const micBtn = searchForm.querySelector("button");
  const micIcon = micBtn.firstElementChild;


micBtn.addEventListener("click", micBtnClick);

function micBtnClick() {
  if (micIcon.classList.contains("fa-microphone")) { 
    recognition.start();
  }
  else {
    recognition.stop();
  }
}

recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}

  function startSpeechRecognition() {
    
    searchFormInput.focus();
    console.log("Voice activated, SPEAK");
  }


recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
    searchFormInput.focus();
    console.log("Speech recognition service disconnected");
  }


recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
function resultOfSpeechRecognition(event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  
  if (transcript.toLowerCase().trim() === "stop recording") {
    recognition.stop();
  }
  else if (!searchFormInput.value) {
    searchFormInput.value = transcript;
  }
  else{
    if (transcript.toLowerCase().trim() === "go") {
      searchForm.submit();
    }
    else
    
    
    
    if (transcript.toLowerCase().trim() === "reset input") {
      searchFormInput.value = "";
    }
    else {
      searchFormInput.value = transcript;
    }
    }
    
    
      searchFormInput.value = transcript;
     searchFormInput.focus();
      setTimeout(() => {
        searchForm.submit();
     }, 0);
     
     
     }
    
  
    
     }
     
     
     else {
       console.log("Your Browser does not support speech Recognition");
       
       info.textContent = "Your Browser does not support Speech Recognition";
     }

      

