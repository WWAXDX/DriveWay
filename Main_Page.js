function openWindowImportant() {
      document.getElementById("WindowImportant").style.display = "flex";
    }

    function closeWindowImportant() {
      document.getElementById("WindowImportant").style.display = "none";
    }

    function ClickOutImportant(event) {
      if (event.target.id === "WindowImportant") {
        closeWindowImportant();
      }
    }


    function openWindowCall() {
      document.getElementById("WindowCall").style.display = "flex";
    }

    function closeWindowCall() {
      document.getElementById("WindowCall").style.display = "none";
    }

    function ClickOutCall(event) {
      if (event.target.id === "WindowCall") {
        closeWindowCall();
      }
    }


    function openWindowUs() {
      document.getElementById("WindowUs").style.display = "flex";
    }

    function closeWindowUs() {
      document.getElementById("WindowUs").style.display = "none";
    }

    function ClickOutUs(event) {
      if (event.target.id === "WindowUs") {
        closeWindowUs();
      }
    }

     window.onload = function () {
    const authDiv = document.querySelector('.auth');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username') || 'زائر';

    if (isLoggedIn) {
      authDiv.innerHTML = `
        <span>مرحبًا، ${username}</span>
        <a onclick="logout()">تسجيل الخروج</a>
      `;
    }
  };

  function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    location.reload();
  }

   const messages = [
    "أهلاً بك في موقعنا!",
    "موقع DriveWay لتأجير السيارات",
    "استمتع بأفضل العروض",
    "خدمة تأجير سيارات عالية الجودة",
    "لكن ليست حقيقية",
    "لذا لن تحصل على السيارة فعلاً",
    "تواصل معنا لأي استفسار"
    
  ];

  let index = 0;

  function showMessage() {
    const container = document.getElementById("text-container");
    container.innerHTML = '';

    const text = document.createElement("div");
    text.className = "text-slide";
    text.textContent = messages[index];
    container.appendChild(text);

    index = (index + 1) % messages.length;
  }

  showMessage();

  setInterval(showMessage, 4000);
