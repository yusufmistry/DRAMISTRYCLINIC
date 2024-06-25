header.innerHTML =

  `
<div class="text-center bg-light">
  <nav
    class="navbar navbar-expand-lg bg-light sticky-top"
    data-bs-theme="light"
  >
    <div class="container-fluid">
      <!-- Navbar Collapsible Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Mini Header Img -->
      <img
        id="mini-header"
        width="130"
        style="display: none"
        class="img-fluid"
        src="./media/Mini Header pic.png"
        alt="Dr A Mistry's Clinic, Plastic and Reconstructive Surgery, Head and Neck Cancer, Oral and Maxillofacial Surgery"
      />
      <!-- Collapsible Navbar -->
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="index.html"
              >Home
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >About Your Doctor</a
            >
            <div class="dropdown-menu">
              <a class="dropdown-item" href="./AboutAbbas.html"
                >Dr Abbas Mistry</a
              >
              <a class="dropdown-item" href="./AboutYusuf.html"
                >Dr Yusuf Mistry</a
              >
              <a class="dropdown-item" href="./AboutTaher.html"
                >Dr Taher Mistry</a
              >
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Excerpts from Our Practice</a
            >
            <div class="dropdown-menu">
              <a class="dropdown-item" href="./HNCongenital.html"
                >Head, Face Neck - Congenital</a
              >
              <a class="dropdown-item" href="./AboutYusuf.html"
                >Dr Yusuf Mistry</a
              >
              <a class="dropdown-item" href="./AboutTaher.html"
                >Dr Taher Mistry</a
              >
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Community Work</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Awards and Achievements</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Book an Appointment</a>
          </li>
        </ul>
      </div>
      <!-- Social Media Buttons -->
      <div style="visibility: visible">
        <a
          style="color: black"
          onMouseOver="this.style.color='purple'"
          onMouseOut="this.style.color='black'"
          href="https://www.instagram.com/w3schools.com_official/"
          target="_blank"
          title="W3Schools on Instagram"
          ><span class="fa fa-instagram fa-2x ga-right instagram"></span
        ></a>
        <a
          style="color: black"
          onMouseOver="this.style.color='blue'"
          onMouseOut="this.style.color='black'"
          href="https://www.linkedin.com/company/w3schools.com/"
          target="_blank"
          title="W3Schools on LinkedIn"
          ><span class="fa fa-linkedin-square fa-2x ga-right linkedin"></span
        ></a>
        <a
          style="color: black"
          onMouseOver="this.style.color='lightblue'"
          onMouseOut="this.style.color='black'"
          href="https://www.facebook.com/w3schoolscom/"
          target="_blank"
          title="W3Schools on Facebook"
          ><span class="fa fa-facebook-square fa-2x ga-right facebook"></span
        ></a>
        <a
          style="color: black"
          onMouseOver="this.style.color='green'"
          onMouseOut="this.style.color='black'"
          href="https://wa.me/918850115982"
          target="_blank"
          title="WhatsApp"
          ><span class="fa fa-whatsapp fa-2x ga-right whatsapp"></span
        ></a>
      </div>
    </div>
  </nav>
</div>
`;
