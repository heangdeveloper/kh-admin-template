<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    use HasFactory;

    protected $fillable = [
        'username',
        'password',
        'plain_password',
        'name',
        'phone',
        'line_id',
        'bank_type',
        'bank_number',
        'balance',
        'register_ip',
        'avatar',
        'status'
    ];

    public function roles() {
        return $this->belongsToMany('App\Models\Role');
    }
}
