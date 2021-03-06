<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Pelicula;

class Home extends Controller
{
    public function home(){
        $pelicula = new Pelicula;
        return view('peliculas', ['pelicula' => $pelicula]);
    }
    public function nuevapeli(Request $request){
        dd($request->all());
    }
    
    public function login(){ 
        return view('login');
    }

    public function profile(){
        $user = \Auth::user()->name;
        return view('profile', ['user'=>$user]);
    }
    
    public function debug(Request $request){
        dd($request->all());
    }

    public function upload(Request $request)
    {
        $user = \Auth::user()->name;
        $extension = $request->avatar->getClientOriginalExtension();
        
        $filepath = 'users/'. $user;
        $filename = $request->nombre . '.' . $extension;
        
        $path = $request->file('avatar')->storeAs($filepath, $filename);

        return redirect('/home');
    }

}
