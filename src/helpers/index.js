export const priceFormat = (x) => {
    return "UGX "+x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}