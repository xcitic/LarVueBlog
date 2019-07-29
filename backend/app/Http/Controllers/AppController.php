<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AppController extends Controller
{
    public function main() {
        return view('mainView');
    }

    public function dashboard() {
        $user = Auth::user();
        if ($user) {
          return view('mainView');
        }
    }
}
