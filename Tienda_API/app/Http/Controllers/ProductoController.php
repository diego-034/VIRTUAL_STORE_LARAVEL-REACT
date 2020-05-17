<?php

namespace App\Http\Controllers;

use App\Producto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $product = Producto::all();
        $data['product'] = $product;
        if ($data['product'] == null) {
            return $this->SendError("error al consultar los productos");
        }
        return $this->SendResponse($data, "productos existentes");
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
            'SKU' => 'required|integer',
            'Nombre' => 'required|string',
            'Descripcion' => 'required|string',
            'Valor' => 'required|numeric',
            'Imagen' => 'required',
            'IdTienda' => 'required|integer',
        ]);
        if ($validator->fails()) {
            return $this->SendError("error de validación", $validator->errors(), 422);
        }
        $input = $request->all();
        $data = Producto::create($input);
       
        if ($request->file('Imagen')) {
           $path = Storage::disk('public')->put('image',$request->file('Imagen'));
           $data->fill(['Imagen' => asset('storage/'.$path)])->save();
        }

        return $this->SendResponse($input, "ingreso exitoso de producto");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function consultProduct($productId)
    {
        $product = Producto::find($productId);
        if ($product == null) {
            return $this->SendError("no existe el producto", ["no hay productos en esta tienda"], 422);
        }
        return $this->SendResponse($product, "Producto");
    }
    public function show($storeId)
    {
        $products = DB::table('productos')->where('IdTienda', '=', $storeId)->get();
        if ($products->count() == 0) {
            return $this->SendError("no hay productos", ["no hay productos en esta tienda"], 422);
        }
        return $this->SendResponse($products, "Productos de la tienda");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $productoId)
    {
        $product = Producto::find($productoId);
        if ($product == null) {
            return $this->SendError("error en los datos", ["el producto no existe"], 422);
        }
        $validator = Validator::make($request->all(), [
            'Nombre' => 'required|string',
            'Descripcion' => 'required|string',
            'Valor' => 'required|numeric'
        ]);
        if ($validator->fails()) {
            return $this->SendError("error de validación", $validator->errors(), 422);
        }
        if ($request->file('Imagen')) {
            $path = Storage::disk('public')->put('image',$request->file('Imagen'));
            $product->fill(['Imagen' => asset($path)])->save();
         }
        $product->Nombre = $request->get("Nombre");
        $product->Descripcion = $request->get("Descripcion");
        $product->Valor = $request->get("Valor");        
        $product->save();
        return $this->SendResponse($product, "actualización exitosa");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function destroy($productoId)
    {
        $product = Producto::find($productoId);
        if ($product == null) {
            return $this->SendError("error en los datos", ["el producto no existe"], 422);
        }
        $product->delete();
        return $this->SendResponse($product, "producto eliminado exitosamente");
    }
}
