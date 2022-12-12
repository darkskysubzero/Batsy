
//=======================Tabs==================================
const allTabsBody = document.querySelectorAll('.tab-body-single');
const allTabsHead = document.querySelectorAll('.tab-head-single');
const activateTab = function(pos){
    allTabsHead.forEach(t=>{
        t.classList.remove("active-tab");
    })
    allTabsHead[pos-1].classList.add("active-tab");
} 
const activateBody = function(pos){
    allTabsBody.forEach(body=>body.classList.remove("show-tab"));
    allTabsBody[pos-1].classList.add("show-tab");
}  
activateTab(1);
activateBody(1);

allTabsHead.forEach(head=>{
    head.addEventListener("click",()=>{
        activateTab(head.dataset.id);
        activateBody(head.dataset.id);
    })
})


//================Search List==================================
const searchForm = document.querySelector(".app-header-search");
let searchList = document.getElementById("search-list");

const getInputValue = (e)=>{
    e.preventDefault();
    let searchText = searchForm.search.value;
    console.log(searchText);
    fetchAllSuperHero(searchText);
}

//form submission
searchForm.addEventListener("submit",getInputValue);

//API key = 107956248830559
let apiKey = 107956248830559;
let allData;
const fetchAllSuperHero = async(searchText)=>{
    let url = `https://superheroapi.com/api/${apiKey}/search/${searchText}`
    try{
        const response = await fetch(url);
        console.log(response);
    }catch (e){
        console.log(e);
    }
}