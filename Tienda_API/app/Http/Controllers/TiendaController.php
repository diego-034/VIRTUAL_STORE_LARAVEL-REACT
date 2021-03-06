<?php

namespace App\Http\Controllers;

use App\Tienda;
use App\log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class TiendaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $stores = Tienda::all();
        $data['stores'] = $stores;
        if ($data['stores'] == null) {
            return $this->SendError("error al consultar tiendas");
        }
        log::create(['Nombre' => 'GET']);
        return $this->SendResponse($data, "tiendas existentes");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Nombre' => 'required|string',
            'FechaApertura' => 'required|date'
        ]);
        if ($validator->fails()) {
            return $this->SendError("error de validación", $validator->errors(), 422);
        }
        log::create(['Nombre' => 'POST']);
        $input = $request->all();
        $data = Tienda::create($input);
        return $this->SendResponse($data, "ingreso exitoso de tienda");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tienda  $tienda
     * @return \Illuminate\Http\Response
     */
    public function show($storeId)
    {
        $store = Tienda::find($storeId);
        if($store == null){
            return $this->SendError("error al buscar tienda",["Error de busquedad 
            , tienda no encontrada"],422);
        }
        log::create(['Nombre' => 'GET']);
        return $this->SendResponse($store,"tienda encontrada");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tienda  $tienda
     * @return \Illuminate\Http\Response
     */
    public function update( Request $request, $tiendaId)
    {
        $store = Tienda::find($tiendaId);
        if ($store == null) {
            return $this->SendError("error en los datos", ["la tienda no existe"], 422);
        }
        $validator = Validator::make($request->all(), [
            'Nombre' => 'required|string',
            'FechaApertura' => 'required|date'
        ]);
        if ($validator->fails()) {
            return $this->SendError("error de validación", $validator->errors(), 422);
        }
        log::create(['Nombre' => 'PUT']);
        $store->Nombre = $request->get("Nombre");
        $store->FechaApertura = $request->get("FechaApertura");
        $store->save();
        return $this->SendResponse($store, "actualización exitosa");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tienda  $tienda
     * @return \Illuminate\Http\Response
     */
    public function destroy($tiendaId)
    {
        $store = Tienda::find($tiendaId);
        if ($store == null) {
            return $this->SendError("error en los datos", ["la tienda no existe"], 422);
        }
        log::create(['Nombre' => 'DElETE']);
        DB::table('productos')->where('IdTienda','=',$tiendaId)->delete();
        $store->delete();
        return $this->SendResponse($store, "eliminación exitosa de la tienda");
    }
}
