// karena Footer akan dipakai di setiap page
// oleh karena itu saya membuat template component Footer yang reusable
// tujuannya agar meminimalisir repeat / perulangan kode yang sama
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class='left-side'>
                    <h3>If you have any question,<br>Let us help you!</h3>
                    <p>Contact Us</p>
                    <form>
                        <input type='text' placeholder='Input your email here' />
                        <button type='submit'>
                            <img src='./assets/send-logo.svg' />
                        </button>
                    </form>
                </div>
                <div class='right-side'>
                    <div>
                        <p>Discover unparalleled hospitality at Vhotel, Jakarta’s premier hotel</p>
                    </div>
                    <div class="footer-link">
                        <div>
                            <a href='/'>Home<a/>
                            <a href='#'facilities'>Room & Suites<a/>
                            <a href='#'>Packages<a/>
                            <a href='#'>Voucher<a/>
                            <a href='#'>Promo<a/>
                        </div>
                        <div>
                            <a href='./about'>About Us<a/>
                            <a href='#'>Restaurant & Bar<a/>
                            <a href='#'>Events<a/>
                            <a href='#'>Gallery<a/>
                        </div>
                        <div>
                            <a href='#'>Our Team<a/>
                            <a href='#'>Blog<a/>
                            <a href='#'>Contact Us<a/>
                            <a href='#'>Careers<a/>
                        </div>
                    </div>
                </div>
            </footer>
        `
    }
}

// template atau custom element akan di definisikan sebagai custom-footer
// contoh penggunaaan di HTML --> <custom-footer> </custom-footer>
customElements.define('custom-footer', Footer)