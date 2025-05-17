let فلتر_الشركة = "الكل";

function فلترة(الشركة) {
  فلتر_الشركة = الشركة;
  تحديث_العرض();
}

function تحديث_العرض() {
  const كل_السيارات = document.querySelectorAll(".سيارة");

  كل_السيارات.forEach((سيارة) => {
    const تطابق_شركة = (فلتر_الشركة === "الكل" || سيارة.dataset.company === فلتر_الشركة);

    if (تطابق_شركة) {
      سيارة.style.display = "block";
    } else {
      سيارة.style.display = "none";
    }
    
  });
}
