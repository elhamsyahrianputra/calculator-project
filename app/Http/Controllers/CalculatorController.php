<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\History;

class CalculatorController extends Controller
{
    public function saveHistory(Request $request)
    {
        $history = new History;
        $history->expression = $request->expression;
        $history->save();

        return response()->json(['message' => 'History saved successfully']);
    }

    public function getHistory()
    {
        $histories = History::orderBy('created_at', 'desc')->get();
        return response()->json($histories);
    }
}
