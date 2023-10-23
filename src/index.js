console.log("blank");

import './styles.css';

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  } 

const tabs = document.createElement('div');
element.classList.add('tab');
const homeBtn = document.createElement('button');
homeBtn.classList.add("tablinks");

const menuBtn = document.createElement('button');
menuBtn.classList.add("tablinks");

const contactBtn = document.createElement('button');
contactBtn.classList.add("tablinks");


homeBtn.textContent="Home";
menuBtn.textContent="Menu";
contactBtn.textContent="Contact";

homeBtn.setAttribute('onclick',openTab(evt,"Home"));
menuBtn.setAttribute('onclick',openTab(evt,"Menu"));
contactBtn.setAttribute('onclick',openTab(evt,"Contact"));

/*default click*/
homeBtn.setAttribute('id','default-click');

/* Tab content */

const homeTab = document.createElement('div');
homeTab.classList.add("tabcontent");
homeTab.setAttribute("id","Home");
contactTab.textContent="Home tab welcoming customers";

const menuTab = document.createElement('div');
menuTab.classList.add("tabcontent");
menuTab.setAttribute("id","Menu");
contactTab.textContent="Here is the menu";

const contactTab = document.createElement('div');
contactTab.classList.add("tabcontent");
contactTab.setAttribute("id","Contact");
contactTab.textContent="This is the contact tab";

tabs.appendChild(homeBtn);
tabs.appendChild(menuBtn);
tabs.appendChild(contactBtn);

document.body.appendChild(tabs);
document.body.appendChild(homeTab);
document.body.appendChild(menuTab);
document.body.appendChild(contactTab);

document.getElementById('default-click').click();
