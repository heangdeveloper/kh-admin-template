<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Role;
use App\Models\Player;

class PlayerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $customerRole = Role::where('name', 'customer')->first();

        Player::truncate();

        $customer = Player::create([
            'name' => 'Sokly Ly',
            'username' => 'SK3880988330813',
            'email' => 'sokly_ly@hotmail.com',
            'phone' => '0988330813',
            'password' => Hash::make('password'),
            'plain_password' => 'password'
        ]);

        $customer->roles()->attach($customerRole);
    }
}
