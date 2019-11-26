<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateNoteRequest;
use App\Http\Requests\CreateNoteRequest;
use App\Http\Resources\NoteResource;
use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NoteController extends Controller
{
    public function index()
    {
        $notes = Auth::user()->notes()->latestFirst()->paginate(10);
        return NoteResource::collection($notes);
    }

    public function search(Request $request)
    {
        $q = $request->get('q');
        $notes =  Auth::user()->notes()
            ->where('title', 'like', '%' . $q . '%')
            ->orWhere('body', 'like', '%' . $q . '%')
            ->get();
        return NoteResource::collection($notes);

    }

    public function listNotes()
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
