$(() => {

    const KEY = '36aab2b5';

    $('#buscador').on('change', function () {
        let buscar = $('#buscador').val();
        let parametros = {
            'apikey': KEY,
            's': buscar
        }
        $.ajax({
            type: 'GET',
            url: 'http://www.omdbapi.com/',
            data: parametros,
            success: res => {
                console.log(res)
                res.Search.forEach(e => {
                    if (e.Title == undefined || e.Poster == 'N/A') {
                    
                    } else {
                        
                        let row = $('<div class="row bg-light text-dark d-flex align-items-center mt-4 pelicula"></div>');
                        let colImagen = $('<div class=" col-3"></div>');
                        let colTitulo = $('<div class="col-5"></div>');
                        let colBoton = $('<div class=" col-4" id="divBoton"></div>');
                        let boton = $('<input type="button" class="btn btn-info my-3" id="details" value="Detalles">');
                        let imagen = $('<img class="responsive" src="' + e.Poster + '"> ');
                        let titulo = $('<h2>' + e.Title + '</h2>');
                        let plot = $('<h5>' + e.Year + '</h5>');
                        colImagen.append(imagen);
                        colTitulo.append(titulo);
                        colTitulo.append(plot);
                        colBoton.append(boton);
                        row.append(colImagen);
                        row.append(colTitulo);
                        row.append(colBoton);
                        $('#main').append(row);
                    }
                    $('#details').on('click', function () {
                        $('#divBoton h5').remove();
                        let info = $('<h5>' + e.Director + ' (' + e.Year + ')</h5>');
                        let info2 = $('<h5>' + e.Genre + '</h5>');
                        let info3 = $('<h5>' + e.Awards + '</h5>');
                        let colboton = $('#divBoton');
                        colboton.append(info);
                        colboton.append(info2);
                        colboton.append(info3);
    
                    })
                });
                

            }
        })
    })




});
