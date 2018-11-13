$(function () {

    var numTabla = $("#numTabla");
    var cont = 0;

    $("#cambioT").on('click', function () {
        let input = $("input").val();
        numTabla.text(input);
        $("tbody tr").remove();
        cont = 0;
    });

    $("#calcular").on('click', function () {
        
        let base = numTabla.text();
        let string = "";
        
        string += "<td>"+ base +"</td>";
        string += "<td>X</td>";
        string += "<td>"+ cont +"</td>";
        string += "<td>=</td>";
        string += "<td>"+ (base * cont) +"</td>";
        
        $("table").find('tbody').append("<tr>"+ string +"</tr>");
        cont++;
    });

});