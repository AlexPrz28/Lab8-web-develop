export default interface Sku {
    id?: number,
    color: string,
    size: string,
    listPrice: number,
    salePrice: number,
    quantityOnHand: number,
    smallImageUrl: string,
    mediumImageUrl: string,
    largeImageUrl: string
}