<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PlayerController extends Controller
{
    public function getPlayerList()
    {
        $curl = curl_init();
        $time = round(microtime(true) * 1000);
        $username = env('APP_USERNAME');
        $authcode = env('APP_AUTH_CODE');
        $secretkey = env('APP_SECRET_KEY');
        $encode = strtolower($authcode . $username . $time . $secretkey);
        $sign = strtoupper(md5($encode));

        $data = array(
            'action' => 'playerList',
            'userName' => env('APP_USERNAME'),
            'pageIndex' => 1,
            'time' => $time,
            'authcode' => $authcode,
            'sign' => $sign
        );

        curl_setopt($curl, CURLOPT_URL, env('APP_API_URL') . 'getData/AccountList.ashx?userName=' . $username . '&action=playerList&pageIndex=1');
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($curl);
        curl_close($curl);
        return response($result);
    }

    public function getRandomUser()
    {
        $curl = curl_init();
        $time = round(microtime(true) * 1000);
        $username = env('APP_USERNAME');
        $authcode = env('APP_AUTH_CODE');
        $secretkey = env('APP_SECRET_KEY');
        $encode = strtolower($authcode . $username . $time . $secretkey);
        $sign = strtoupper(md5($encode));

        $randomUser = array(
            'action' => 'RandomUserName',
            'userName' => env('APP_USERNAME'),
            'UserAreaId' => 3,
            'time' => $time,
            'authcode' => $authcode,
            'sign' => $sign
        );

        curl_setopt($curl, CURLOPT_URL, env('APP_API_URL') . 'account/account.ashx');
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_HEADER, 0);
        curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($randomUser));
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($curl);
        curl_close($curl);
        return response($result);
    }

    public function addPlayer(Request $request)
    {
        $curl = curl_init();
        $time = round(microtime(true) * 1000);
        $uname = $request->username;
        $authcode = env('APP_AUTH_CODE');
        $secretkey = env('APP_SECRET_KEY');
        $encode = strtolower($authcode . $uname . $time . $secretkey);
        $sign = strtoupper(md5($encode));

        $addPlayer = array(
            'action' => 'AddUser',
            'agent' => env('APP_USERNAME'),
            'PassWd' => $request->password,
            'userName' => $uname,
            'Name' => $request->name,
            'Tel' => '0',
            'Memo' => 'N/A',
            'UserAreaId' => 3,
            'pwdtype' => '1',
            'UserType' => '1',
            'time' => $time,
            'authcode' => $authcode,
            'sign' => $sign
        );

        $data = DB::table('players')->insert([
            [
                'username' => $request->username,
                'name' => $request->name,
                'tel' => $request->tel,
                'bname' => $request->bname,
                'baccount' => $request->baccount,
                'status' => 'enable'
            ]
        ]);

        curl_setopt($curl, CURLOPT_URL, env('APP_API_URL') . 'account/account.ashx?action=addUser');
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($addPlayer));
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($curl);
        return response()->json([
            'result' => $result,
            'data' => $data
        ]);
    }

    public function getUserInfo(Request $request, $username)
    {
        $curl = curl_init();
        $time = round(microtime(true) * 1000);
        $uname = $request->username;
        $authcode = env('APP_AUTH_CODE');
        $secretkey = env('APP_SECRET_KEY');
        $encode = strtolower($authcode . $username . $time . $secretkey);
        $sign = strtoupper(md5($encode));

        $data = array(
            'action' => 'getUserInfo',
            'userName' => $request->username,
            'time' => $time,
            'authcode' => $authcode,
            'sign' => $sign
        );

        curl_setopt($curl, CURLOPT_URL, env('APP_API_URL') . 'account/account.ashx?action=getUserInfo&userName=' . $uname);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($curl);
        curl_close($curl);
        return response($result);
    }
}
