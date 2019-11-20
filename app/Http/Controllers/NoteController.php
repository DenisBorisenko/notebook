<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateNoteRequest;
use App\Http\Requests\CreateNoteRequest;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function store(CreateNoteRequest $request)
    {
        $note = auth()->user()->notes()->create($request->all());
        return response()->json($note);
    }
}
