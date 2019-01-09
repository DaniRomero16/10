@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                   
                    {{ 'Welcome ' .  $user . ', upload Files:' }}
                    
                    <form enctype="multipart/form-data" action="{{ url('/upload') }}" method="post">
                        {{ csrf_field() }}
                        <input type="text" name="nombre" id="nombre">
                        <input type="file" name="avatar" id="avatar">
                        <input type="submit" value ="Enviar">
                        <br>
                        <br>
                    </form>
                    <?php
                        $directorio = storage_path('app/users/' . $user);
                        $dir = @dir($directorio) or die("getFileList: Error abriendo el directorio $directorio para leerlo");
                        while(($archivo = $dir->read()) !== false) {
                            if($archivo[0] == ".") continue;
                            echo  $archivo ;
                            echo '<br>';
                        }
                        $dir->close();
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection