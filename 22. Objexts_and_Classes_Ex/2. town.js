function townInfo(info) {

    let townIFO = {}

    for (const row of info) {
        let [town, latitude, longitude] = row.split(' | ');
   
        townIFO.town = town;
        townIFO.latitude = Number(latitude).toFixed(2);
        townIFO.longitude = Number(longitude).toFixed(2);

        console.log(townIFO);
    }
    
}
townInfo(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);

townInfo(['Plovdiv | 136.45 | 812.575']);