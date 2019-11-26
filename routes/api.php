<?php

Route::post('auth/register', 'AuthController@register');
Route::post('auth/login', 'AuthController@login');

Route::group(['middleware' => 'jwt.auth'], function(){
  Route::get('auth/user', 'AuthController@user');
  Route::post('auth/logout', 'AuthController@logout');

    Route::group(['prefix'=> 'notes'],function(){
        Route::get('/','NoteController@index');
        Route::post('/', 'NoteController@store');
        Route::patch('/{id}','NoteController@update');
        Route::delete('/{id}','NoteController@delete');
        Route::get('/notes-list','NoteController@listNotes');
        Route::get('/search','NoteController@search');
    });
});

Route::group(['middleware' => 'jwt.refresh'], function(){
  Route::get('auth/refresh', 'AuthController@refresh');
});
