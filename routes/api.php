<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\PlayerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/list_player', [PlayerController::class, 'getPlayerList']);
Route::get('/user_random', [PlayerController::class, 'getRandomUser']);
Route::post('/add_player', [PlayerController::class, 'addPlayer']);
Route::get('/get_user_info/{username}', [PlayerController::class, 'getUserInfo']);

Route::group(['as' => 'api.', 'namespace' => 'App\Http\Controllers\api'], function() {
    Route::resources([
        'bank' => BankController::class,
    ]);
});