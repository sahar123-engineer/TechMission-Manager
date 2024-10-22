<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\carController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/car', [carController::class, 'index'])->name('car.index');
Route::get('/car/create', [carController::class, 'create'])->name('car.create');
Route::post('/car/create', [carController::class, 'store'])->name('car.store');
Route::get('/car/{car}/edit', [carController::class,'edit'])->name('car.edit');
Route::put('/car/{car}/update', [carController::class,'update'])->name('car.update');
Route::delete('/car/{car}/destroy', [carController::class,'destroy'])->name('car.destroy');