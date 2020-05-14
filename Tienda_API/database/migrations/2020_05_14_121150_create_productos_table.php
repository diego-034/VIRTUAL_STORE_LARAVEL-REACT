<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->bigInteger('SKU')->unique();
            $table->string('Nombre',50);
            $table->string('Descripcion',300);
            $table->decimal('Valor',11,2);
            $table->string('Imagen',100);
            $table->unsignedBigInteger('IdTienda');
            $table->foreign('IdTienda')->references('ID')->on('users');
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
        Schema::dropIfExists('productos');
    }
}
