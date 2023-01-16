function triangleArea(sideOne, sideTwo, sideThree) {
    let s = (sideOne + sideTwo + sideThree) / 2;
    let area = Math.sqrt(s * ((s - sideOne) * (s - sideTwo) * (s - sideThree)));

    console.log(area);
}
triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);