// karena facilities akan dipakai di setiap page
// oleh karena itu saya membuat template component facilities yang reusable
// tujuannya agar meminimalisir repeat / perulangan kode yang sama
class Facilities extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="facility-list">
            <ul>
                <li>
                    <img src="./assets/bullet-list.png" alt="bullet list">
                    <p>Insurance</p>
                </li>
                <li>
                    <img src="./assets/bullet-list.png" alt="bullet list">
                    <p>Wifi</p>
                </li>
                <li>
                    <img src="./assets/bullet-list.png" alt="bullet list">
                    <p>24 Hours Front Desk</p>
                </li>
                <li>
                    <img src="./assets/bullet-list.png" alt="bullet list">
                    <p>AC</p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="./assets/bullet-list.png" alt="bullet list">
                    <p>Cleaning Services</p>
                </li>
                <li>
                    <img src="./assets/bullet-list.png" alt="bullet list">
                    <p>Parking Area</p>
                </li>
                <li>
                    <img src="./assets/bullet-list.png" alt="bullet list">
                    <p>Spa</p>
                </li>
                <li>
                    <img src="./assets/bullet-list.png" alt="bullet list">
                    <p>Wheelchair Access</p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="./assets/bullet-list.png" alt="bullet list">
                    <p>Swimming Pool</p>
                </li>
                <li>
                    <img src="./assets/bullet-list.png" alt="bullet list">
                    <p>Restaurant</p>
                </li>
                <li>
                    <img src="./assets/bullet-list.png" alt="bullet list">
                    <p>Elevator</p>
                </li>
                <li>
                    <img src="./assets/bullet-list.png" alt="bullet list">
                    <p>Meeting Facilities</p>
                </li>
            </ul>
        </div>
        `
    }
}

// template atau custom element akan di definisikan sebagai custom-facilities
// contoh penggunaaan di HTML --> <custom-facilities> </custom-facilities>
customElements.define('custom-facilities', Facilities)