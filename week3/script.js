let bodyTag = document.body;
console.log(bodyTag);
// section 태그를 찾는다.
let hongikFestival = {
    name: "축제 라인업",
    date: "2025.05.14 - 2025.05.16",
    location: "서울특별시 마포구 홍익대학교",
    lineup: {
    day1: "KiiiKiii",
    day2: "MADEIN",
    day3: "AESPA",
    }
}
let sectionTag = document.getElementsByTagName("section");
// h2 태그를 만든다.
let h2Tag = document.createElement("h2");
// h2 태그에 텍스트를 추가한다.
h2Tag.innerText = hongikFestival.name;
sectionTag.appendChild(h2Tag);
let KiiiKiiiTag = document.createElement("p");
KiiiKiiiTag.innerText = hongikFestival.lineup.day1;
sectionTag.appendChild(KiiiKiiiTag);
let MADEINTag = document.createElement("p");
MADEINTag.innerText = hongikFestival.lineup.day2;
sectionTag.appendChild(MADEINTag);
let AESPATag = document.createElement("p");
AESPATag.innerText = hongikFestival.lineup.day3;
sectionTag.appendChild(AESPATag);
let dateTag = document.createElement("p");
dateTag.innerText = hongikFestival.date;
sectionTag.appendChild(dateTag);
let locationTag = document.createElement("p");
locationTag.innerText = hongikFestival.location;
sectionTag.appendChild(locationTag);