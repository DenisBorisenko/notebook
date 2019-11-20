<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    protected $quarded = [];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
