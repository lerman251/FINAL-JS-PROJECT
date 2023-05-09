"use strict";
window.addEventListener("load", function() {
    var shoeType = document.select.model;
    var insure = document.select.insurance;
    var total = document.div.tCost;
    total.elements.totalCost.value = formatNumber(shoeType + insure, 2);
});


