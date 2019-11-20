<?php

namespace App\Models;

use App\Traits\Orderable;
use App\User;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    use Orderable;
    protected $guarded = [];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
