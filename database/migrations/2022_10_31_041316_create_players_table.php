<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('players', function (Blueprint $table) {
            $table->id();
            $table->integer('role_id');
            $table->integer('refer_id')->nullable();
            $table->string('username');
            $table->string('password');
            $table->string('plain_password');
            $table->string('email')->nullable();
            $table->string('name');
            $table->string('surname')->nullable();
            $table->string('phone');
            $table->string('line_id')->nullable();
            $table->integer('bank_name')->nullable();
            $table->string('bank_number')->nullable();
            $table->double('balance', 8, 2)->default(0);
            $table->string('register_ip')->nullable();
            $table->string('avatar', 2048)->default('default.png');
            $table->enum('status', ['active', 'banned'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('players');
    }
};
