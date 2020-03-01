export const priceFormat = price => {
    return "UGX "+price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const cleanPhone = phoneNumber => {
    return phoneNumber.substring(1)
}