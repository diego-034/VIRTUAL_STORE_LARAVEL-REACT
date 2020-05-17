<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class log extends Model
{
    protected $primaryKey = 'logId';
    protected $fillable  = ['Nombre'];
}
