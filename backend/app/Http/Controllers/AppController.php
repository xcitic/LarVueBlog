<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AppController extends Controller
{

    /**
     * Main App
     * @return HTML generated from Blade view
     */
    public function main() {
        return view('mainView');
    }

}
