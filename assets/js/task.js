const data = [
    { name: "Apple iPhone 16 Plus", price: "Rs. 419,499", detail: "IOS 18,Colors:	Black, White, Pink, Teal, Ultramarine,Size:	6.7 Inches,HDR (photo/panorama)Battery	Capacity: 4674 mAh, Fast battery Wired, Storage:256GB.", image:"image/Apple.jpg "},
    { name: "Infinix Smart 9", price: "Rs. 28,999", detail: "XOS 14,Colors:	Metallic Black, Neo Titanium, Mint Green, Sandstone Gold,Size:	6.7 Inches,Battery	Capacity: 5000 mAh, Storage: 64GB (expendable up to 256GB).", image:"image/InfinixSmart9-s.jpg"},
    { name: "Itel P65c", price: "Rs. 24,999", detail: "Android 14 OS,Colors:	Brilliant Gold, Aurora Blue, Starry purple, Moonlight Black,Size:	6.6 Inches,Battery Capacity: 5000 mAh 18W wired, Storage: 32GB(expendable up to 128GB).", image:"image/itelP65c-s.jpg"},
    { name: "Vivo-Y19", price: "Rs. 38,999", detail: "	Android 14 OS,Colors:	Pearl Silver, Glossy Black, Glacier Blue,	Size:	6.68 Inches,Battery	Capacity: 5500 mAh, Battery charging: 15W wired, Storage:  128GB (expandable up to 256GB).", image:"image/VivoY19s-s.jpg"},
    { name: "Realme-13Plus", price: "Rs. 89,999", detail: "Android 14 OS,Colors:	Victory Gold, Dark Purple, Size:	6.67 Inches, Battery	Capacity: 5000 mAh, Fast battery 80W wired, 50% in 19 min,Storage:	256GB.", image:"image/Realme13Plus-s.jpg"},
    { name: "Techno-Spark30", price: "Rs. 39,999", detail: "Android 14 OS,Colors:	Stellar Shadow, Astral Ice, Magic Skin 3.0, Bumblebee Edition, Size:	6.8 Inches,Battery	Capacity: 5000 mAh, 18W wired	Storage:	128GB.  ", image:"image/TecnoSpark30-s.jpg"},
    { name: "Vivo-V40", price: "Rs. 99,999", detail: "Android 14 OS, Colors:	Royal Bronze, Mint Green, Size:	6.77 Inches,Battery	Capacity: 5500 mAh, Fast battery 80W wired, Storage: 256GB.", image:"image/VivoV40e-s.jpg"},
    { name: "Sparx-Neo-6Plus", price: "Rs. 19,499", detail: "Android 13 OS,Colors:	Blue, Orange, Size:	6.52 Inches,Battery	Capacity: 5000 mAh, Battery charging 10W, Storage: 64GB.   ", image:"image/SparxNeo6Plus-b.jpg"},
    { name: "Xiaomi-Poco-C75", price: "Rs. 36,999", detail: "	Android 14 OS,Colors:	Black, Green, Silver, Size:	6.88 Inches,Battery	Capacity: 5160 mAh, 18W wired, Storage:	256GB.", image:"image/XiaomiPocoC75-s.jpg"},
    { name: "Oppo-A3", price: "Rs. 49,999", detail: "Android 14 OS,Size:	6.67 Inches,Colors:	Starlight White, Sparkle Black Battery	Capacity:	(Non removable), 5100 mAh Fast battery 445W wired,", image:"image/OppoA3-s.jpg"}
  ];
  const tableBody = document.querySelector("#table tbody");
  for (let i = 0; i < data.length; i++) {
    const row = document.createElement("tr");
    const cellName = document.createElement("td");
    cellName.textContent = data[i].name;
    row.appendChild(cellName);
    const cellPrice = document.createElement("td");
    cellPrice.textContent = data[i].price;
    row.appendChild(cellPrice);
    const celldetail = document.createElement("td");
    celldetail.textContent = data[i].detail;
    row.appendChild(celldetail);
    const cellImage = document.createElement("td");
    const img = document.createElement("img");
    img.src = data[i].image;
    img.style.height='160px';
    img.style.display='block';
    img.style.margin='auto';
    cellImage.appendChild(img);
    row.appendChild(cellImage)
  tableBody.appendChild(row);
  }