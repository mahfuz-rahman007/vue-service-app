<?php

namespace App\Http\Controllers;

use App\Models\WeatherData;
use Carbon\Carbon;
use Illuminate\Http\Request;

class WeatherReportController extends Controller
{
    public function weatherReport(Request $request)
    {
        $city_id = $request->city_id;
        $date = Carbon::parse($request->date);

        $weather_report = WeatherData::where('city_id', $city_id)
        ->whereDate('date', $date)
        ->get()
        ->toArray();

        return response()->json([
            'reports' => $weather_report
        ]);
    }
}
