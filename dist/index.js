"use strict";
let employee = {
    id: 1,
    name: 'Osman',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2;
    }
    else {
        return parseInt(weight) * 2;
    }
}
kgToLbs(30);
kgToLbs('10kq');
//# sourceMappingURL=index.js.map