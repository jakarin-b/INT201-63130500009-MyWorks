import { product } from "./product";
import { CookieUtil } from "./cookie";

export function checkCookie(cart) {
    product.forEach((p) => {
        if (CookieUtil.get(p.nameEng) != null) {
            cart.items.push({ product: p, qty: CookieUtil.get(p.name) })
        }
    })
}