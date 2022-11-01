let ally = ["Ally Bank", 2.35, "https://www.ally.com/bank/view-rates", 2.35];
let first = ["First Foundation", 3.10,
'https://www.firstfoundationinc.com/personal-banking/bank/online-savings', 3.10]
let dollar = [
  "Dollar Savings",
  3.5,
  "https://www.dollarsavingsdirect.com/securebanking/login.do?_flowExecutionKey=_c077CE5EA-886D-2F0E-21C5-980BA4D81FAD_k4BB05347-87A7-374D-BB70-CB66A2BBB052",
  3.5
];
let citizens = [
  "Citizens",
  3.0,
  "https://www.secure.citizensaccess.com/Citizens/savings",
  3.0
];
let american = [
  "American Express",
  2.35,
  "https://www.americanexpress.com/en-us/banking/online-savings/high-yield-savings",
  2.35
];
let capital = [
  "Capital One 360",
  3.0,
  "https://www.capitalone.com/bank/savings-accounts/online-performance-savings-account/?external_id=360B_MM_SEM_71700000092215977_GOOGLE_58700007739987663_43700070265456923&06167_SE001492_AlwaysOn=&gclid=CjwKCAjw2OiaBhBSEiwAh2ZSP0AUx_o87ULwbk3UAtXPRFySEYO2kpiNMg8Q0Fowp4KCoBahlZYeBxoCkBoQAvD_BwE&gclsrc=aw.ds",
  2.35
];
let cit = [
  "CIT Bank",
  3.0,
  "https://www.cit.com/cit-bank/savings-connect?gclid=CjwKCAjw2OiaBhBSEiwAh2ZSP9lH5FshuRhKv3J0K4zB1Mthg67x7l6-InDdEeHi_yfeHV_Ebp73hxoCrkAQAvD_BwE&ef_id=CjwKCAjw2OiaBhBSEiwAh2ZSP9lH5FshuRhKv3J0K4zB1Mthg67x7l6-InDdEeHi_yfeHV_Ebp73hxoCrkAQAvD_BwE:G:s&s_kwcid=AL!5243!3!590126087033!b!!g!!cit%20bank&utm_medium=cpc&utm_source=google&utm_term=cit%20bank&utm_content=mma_45_text_cit&utm_campaign=3Q_ggl_s_hysa_brand_alpha",
  3.0
];
let sofi = [
  "Sofi",
  2.5,
  "https://support.sofi.com/hc/en-us/articles/4421758127245-What-s-my-interest-rate-for-SoFi-Checking-and-Savings-",
  2.5
];
let marcus = [
  "Marcus Goldman",
  2.5,
  "https://www.marcus.com/us/en/savings/high-yield-savings",
  2.35
];
let vio = [
  "VioBank",
  3.02,
  "https://www.viobank.com/cornerstone-money-market-savings",
  3.02
];
let emigrant = [
  "Emigrant",
  2.50,
  "https://www.emigrantdirect.com/securebanking/login.do?_flowExecutionKey=_cCE3C5419-B8E5-B3D5-7261-4CF367A45B07_k41CBC918-3EA4-849C-3407-7743F02575EF",
  2.0
];
let etrade = [
  'Etrade',
  2.75,
  'https://us.etrade.com/bank/premium-savings-account',
  2.75
]
let ibond = [
  "Ibond",
  9.62,
  "https://treasurydirect.gov/savings-bonds/i-bonds/i-bonds-interest-rates/#:~:text=The%20composite%20rate%20for%20I,through%20October%202022%20is%209.62%25.",
];

let banksAndRates = [
  ally,
  dollar,
  citizens,
  american,
  capital,
  cit,
  sofi,
  marcus,
  etrade,
  vio,
  first,
  emigrant,
];
const table = document.querySelector("#table");
const iBondContainer = document.querySelector("#ibond");

const lastUpdated = document.querySelector("#last-updated");
let currentDate = new Date();
currentDate = String(currentDate);
let month = currentDate.split(" ")[1];
let day = currentDate.split(" ")[2];
let year = currentDate.split(" ")[3];
currentDate = `${month} ${day}, ${year}`;
lastUpdated.textContent = `Last Updated: ${currentDate}`;

function sortRate() {
  banksAndRates.sort((a, b) => {
    return a[1] > b[1] ? -1 : 1;
  });
  banksAndRates[0].push("best");
  banksAndRates[banksAndRates.length - 1].push("worst");
  return banksAndRates;
}

banksAndRates = sortRate();

function displayTable() {
  table.textContent = "";
  banksAndRates.map((pair) => {
    let row = document.createElement("tr");
    let cellOne = document.createElement("td");
    let link = document.createElement("a");
    link.href = pair[2];
    link.textContent = pair[0];
    cellOne.appendChild(link);
    let cellTwo = document.createElement("td");
    cellTwo.textContent = `${pair[1].toFixed(2)}%`;
    let cellThree = document.createElement("td");
    cellThree.textContent = `${pair[3].toFixed(2)}%`;
    if (pair[4] && pair[4] == "best") {
      cellTwo.classList.add("best");
    }
    if (pair[4] && pair[4] == "worst") {
      cellTwo.classList.add("worst");
    }
    row.appendChild(cellOne);
    row.appendChild(cellTwo);
    row.appendChild(cellThree);
    table.appendChild(row);
  });
}

let iBondLink = document.createElement("a");
iBondLink.href = ibond[2];
iBondLink.textContent = `Ibond Rate: ${ibond[1]}% || Prior Rate: 9.62%`;

iBondContainer.appendChild(iBondLink);

displayTable();

function sortTable(column, direction) {
  if (column == "name") {
    if (direction == "up") {
      banksAndRates.sort((a, b) => {
        return a[0] > b[0] ? -1 : 1;
      });
    } else {
      banksAndRates.sort((a, b) => {
        return a[0] > b[0] ? 1 : -1;
      });
    }
  }
  if (column == "rate") {
    if (direction == "up") {
      banksAndRates.sort((a, b) => {
        return a[1] > b[1] ? -1 : 1;
      });
    } else {
      banksAndRates.sort((a, b) => {
        return a[1] > b[1] ? 1 : -1;
      });
    }
  }
}

let nameButton = document.querySelector("#name");
let rate = document.querySelector("#rate");

nameButton.onclick = () => {
  if (nameButton.classList.contains("up")) {
    sortTable("name", "up");
    nameButton.classList.remove("up");
    nameButton.classList.add("down");
    displayTable();
  } else {
    sortTable("name", "down");
    nameButton.classList.remove("down");
    nameButton.classList.add("up");
    displayTable();
  }
};

rate.onclick = () => {
  if (rate.classList.contains("up")) {
    sortTable("rate", "up");
    rate.classList.remove("up");
    rate.classList.add("down");
    displayTable();
  } else {
    sortTable("rate", "down");
    rate.classList.remove("down");
    rate.classList.add("up");
    displayTable();
  }
};
