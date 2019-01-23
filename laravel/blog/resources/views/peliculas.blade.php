<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body>

    {!! Form::model($pelicula, ['url' => 'nuevapelicula']) !!}

    
    {!! Form::close() !!}

    {!! Form::open(['url' => 'nuevapelicula']) !!}
        
        {!! Form::label('name','Nombre de Película: '); !!}
        {!! Form::text('name'); !!}
        
        {!! Form::label('year','Año: '); !!}
        {!! Form::text('year'); !!}
        
        {!! Form::submit('Enviar'); !!}
    
    {!! Form::close() !!}
</body>
</html>