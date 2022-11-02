<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();

        $admin = User::create([
            'name' => 'Kimheang Sim',
            'username' => 'admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('password'),
            'plain_password' => 'password',
            'role_id' => '1',
        ]);

        $staff = User::create([
            'name' => 'Staff',
            'username' => 'staff',
            'email' => 'staff@staff.com',
            'password' => Hash::make('password'),
            'plain_password' => 'password',
            'role_id' => '2',
        ]);
    }
}
