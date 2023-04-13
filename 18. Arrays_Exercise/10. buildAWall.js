function buildingWallExpences(parameters) {
  let crews = parameters.slice().map(Number);
  let concreteCostPerFoot = 195;
  let neededHeight = 30;
  let totalCost = 0;
  let dailyCostArr = [];
  let isBuild = false;

  while (!isBuild) {
    let dailyCost = 0;

    for (let i = 0; i < crews.length; i++) {
      if (crews[i] === neededHeight) {
        let index = crews.indexOf(crews[i]);
        crews.splice(index, 1);

        if (crews.length === 0) {
          isBuild = true;
          break;
        }

        i --;
      } else {
        crews[i] ++;
        dailyCost ++;
      }
    }

    if (isBuild) {
      break;
    }

    dailyCostArr.push(dailyCost * concreteCostPerFoot);
    totalCost += dailyCost * concreteCostPerFoot * 1900;
  }

  console.log(dailyCostArr.join(' '));
  console.log(`${totalCost} pesos`);
}
buildingWallExpences([21, 25, 28]);
buildingWallExpences([17]);
buildingWallExpences([17, 22, 17, 19, 17]);
