<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tienda extends Model
{
    protected $primaryKey = 'ID';
    protected $fillable  = ['Nombre','FechaApertura'];
}
