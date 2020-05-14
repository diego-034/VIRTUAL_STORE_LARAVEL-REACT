<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $primaryKey = 'SKU';
    public $incrementing = false;
    protected $fillable  = ['SKU','Nombre','Descripcion','Valor','Imagen','IdTienda'];
}
