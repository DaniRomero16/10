<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Home extends Controller
{
    public function home(){
        return view('welcome');
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
