function cone(radius, height) {
    let volume = Math.PI * radius ** 2 * height / 3;

    let slantHeight = Math.sqrt(radius ** 2 + height ** 2);
    let surfaceArea = (Math.PI * radius * slantHeight) + (Math.PI * radius ** 2);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}
cone(3, 5);
cone(3.3, 7.8);
