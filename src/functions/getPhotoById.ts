export default function getSrcImage(id: number) {
    const images = [
        "/assets/images/big.png",
        "/assets/images/Image (1).png",
        "/assets/images/Image (2).png",
        "/assets/images/Image (3).png",
        "/assets/images/Image (4).png",
    ];
    return images[id % images.length];
}
