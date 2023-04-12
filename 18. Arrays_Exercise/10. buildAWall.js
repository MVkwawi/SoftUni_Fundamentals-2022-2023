function buildingWallExpences(parameters) {
    //30ft wall
    //input.lenght = sections of the wall
    //input.length alos represents the miles of the wall
    //each section represents the haight in ft
    //each section has crew
    //the crew adds 1ft a day (haight)
    //they use 195cb yards of concrete per 1ft
    //when they complete they section, they leave

    // how much concrete is used daily?
    // what is the final cost for concrete?
    // one cb. yard = 1900pesos

    let wallCost = 0;
    let oneCubicYardPrice = 1900

    let sectionsNumber = parameters.length;
    //cycle for each of the workers -> then count the daily cost - some kind of cycle in cycle
    while (all < 30) {
        let dailyCost = 0;
        for (const crew of parameters) {
            dailyCost += oneCubicYardPrice;
            
        }
    }
}
buildingWallExpences([21, 25, 28]);
buildingWallExpences([17]);
buildingWallExpences([17, 22, 17, 19, 17]);