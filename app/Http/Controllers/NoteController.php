<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateNoteRequest;
use App\Http\Requests\CreateNoteRequest;
use App\Http\Resources\NoteResource;
use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function index()
    {
        return NoteResource::collection(Note::all());
    }

    public function store(CreateNoteRequest $request)
    {
        $note = auth()->user()->notes()->create($request->all());
        return new NoteResource($note);
    }

    public function delete(Request $request,$id)
    {
        Note::findOrFail($id)->delete();
    }

    public function update(UpdateNoteRequest $request, $id){
        $note = Note::findOrFail($id);
        $note->update($request->all());
        $note->save();

        return new NoteResource($note);
    }

}
