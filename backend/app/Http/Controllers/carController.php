<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Car;

class CarController extends Controller
{
    // Get a list of all cars
    public function index()
    {
        $cars = Car::all();
        return response()->json($cars); // Return JSON data
    }

    // Show form for creating a new car (if needed for a web interface)
    public function create()
    {
        return view('cars.create');
    }

    // Store a newly created car
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'num' => 'required',
        ]);
        $newCar = Car::create($data);
        return response()->json($newCar, 201); // Return JSON with created status
    }

    // Show form for editing the specified car (if needed for a web interface)
    public function edit(Car $car)
    {
        return view('cars.edit', ['car' => $car]);
    }

    // Update the specified car
    public function update(Request $request, Car $car)
    {
        $data = $request->validate([
            'name' => 'required',
            'num' => 'required',
        ]);
        $car->update($data);
        return response()->json($car); // Return updated car data
    }

    // Remove the specified car
    public function destroy(Car $car)
    {
        $car->delete();
        return response()->json(null, 204); // Return empty response with no content status
    }
}

