// karena Navbar akan dipakai di setiap page
// oleh karena itu saya membuat template component Header / Navbar yang reusable
// tujuannya agar meminimalisir repeat / perulangan kode yang sama
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav>
                    <a href='./index.html' class='brand-logo'>
                        <img src='./assets/brand-logo.svg' />
                    </a>
                    <div class='anchor'>
                        <a href='./index.html'>Home<a/>
                        <a href='./about.html'>About Us<a/>
                        <a href='./rooms.html'>Our Rooms<a/>
                        <a href='./facilities.html'>Facilities<a/>
                        <a href='./reservation.html'>Reservation<a/>
                    </div>
                </nav>
            </header>
        `
    }
}

// template atau custom element akan di definisikan sebagai custom-header
// contoh penggunaaan di HTML --> <custom-header> </custom-header>
customElements.define('custom-header', Header)