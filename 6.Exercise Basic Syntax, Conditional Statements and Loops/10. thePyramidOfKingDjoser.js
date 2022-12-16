function thePyramidOfKingDjoser(baseWidthLength, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    
    let currentStep = 1;
    
    
    while (baseWidthLength >= 3) {
        let size = (baseWidthLength - 2) * (baseWidthLength - 2);
        let bulk =  size * increment;
        let outer = (baseWidthLength * baseWidthLength * increment) - bulk;

        if (currentStep % 5 === 0) {
            stone += bulk;
            lapis += outer;
        } else {
            stone += bulk;
            marble += outer;
        }
        baseWidthLength -= 2;
        currentStep ++;
    }
    let pyramidHeight = currentStep * increment;    
    gold = baseWidthLength * baseWidthLength * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);

}
thePyramidOfKingDjoser(11, 1);
    
thePyramidOfKingDjoser(11, 0.75);

thePyramidOfKingDjoser(12, 1);

thePyramidOfKingDjoser(23, 0.5);