import { LSXRoot } from 'https://erixweb.github.io/lsx/lib/lsxdom-build@1.js'
import { ToBin } from './Components/Form.js'

LSXRoot("span#root")
    .put(
        ToBin(),
        `<footer>Escrito en LSX pore erixweb con <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><path fill="#EA5A47" d="M59.5 25c0-6.9036-5.5964-12.5-12.5-12.5-4.7533 0-8.8861 2.6536-11 6.5598C33.8861 15.1536 29.7533 12.5 25 12.5c-6.9036 0-12.5 5.5964-12.5 12.5 0 2.9699 1.0403 5.6942 2.7703 7.8387l-.0043.0034L36 58.5397l20.7339-25.6975-.0043-.0034C58.4597 30.6942 59.5 27.9699 59.5 25z"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M59.5 25c0-6.9036-5.5964-12.5-12.5-12.5-4.7533 0-8.8861 2.6536-11 6.5598C33.8861 15.1536 29.7533 12.5 25 12.5c-6.9036 0-12.5 5.5964-12.5 12.5 0 2.9699 1.0403 5.6942 2.7703 7.8387l-.0043.0034L36 58.5397l20.7339-25.6975-.0043-.0034C58.4597 30.6942 59.5 27.9699 59.5 25z"></path>
        </svg></footer>`,
    )