<?php

namespace App\Http\Controllers;

use App\Models\WeatherData;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;

class CsvImportController extends Controller
{
    public function import()
    {
        $csv = base_path('public/weather-report.csv');

        $data = file($csv);

        $updated_data = [];

        foreach ($data as $key => $value) {
            if($key > 4) {
                $splitData = explode(',',$value);
                $dateTime = Carbon::parse($splitData[0]);

                $updated_data[] = [
                    'date' => $dateTime->toDateString(),
                    'time' => $dateTime->toTimeString(),
                    'temperature' => str_replace ("\n" , "" , $splitData[1]),
                ];
            }
        }

        WeatherData::insert($updated_data);
        
    }
}
