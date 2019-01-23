<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'Home@home');

Route::get('/login', 'Home@login');

Route::get('/debug', 'Home@debug');
Route::post('/debug', 'Home@debug');

Route::get('/home', 'Home@profile');

Auth::routes();


Route::any('/upload', 'Home@upload');

Route::post('/nuevapelicula', 'Home@nuevapeli')->name("nuevapelicula");
