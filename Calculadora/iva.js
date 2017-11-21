var $ = function(id) { // Simulación de JQuery
	return document.getElementById(id);
}

var calculadora = function () {
	var subtotal = parseFloat($("subtotal").value);
	var porcentaje_iva = parseFloat($("porcentaje_iva").value);
	$("iva_venta").value = "";
	$("total").value = "";
	if(isNaN(subtotal) || subtotal<0) {
		alert("El subtotal tiene que ser un número igual o mayor que cero");
	} 
	else if(isNaN(porcentaje_iva) || porcentaje_iva<0) {
		alert("El porcentaje de IVA debe ser un número igual o mayor que cero");
	}
	else {
		var iva_venta = subtotal*(porcentaje_iva/100);
		iva_venta = parseFloat(iva_venta.toFixed(2));
		var total = subtotal+iva_venta;
		$("total").value = total.toFixed(2);
		$("iva_venta").value = iva_venta;
	}
}

window.onload = function() {
	$("calcular").onclick = calculadora;
}