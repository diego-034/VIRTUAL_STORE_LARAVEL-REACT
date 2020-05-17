<?php

namespace App\Http\Controllers;

use App\log;
use Illuminate\Http\Request;

class LogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $product = log::all();
        if ($product== null) {
            return $this->SendError("error al consultar los logs");
        }
        log::create(['Nombre' => 'GET']);
        return $this->SendResponse($product, "productos logs");
    }

}
