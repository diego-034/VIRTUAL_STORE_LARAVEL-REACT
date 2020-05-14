<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $primaryKey = 'SKU';
    protected $fillable  = ['Nombre','Descripcion','Valor','Imagen','IdTienda   '];
}
