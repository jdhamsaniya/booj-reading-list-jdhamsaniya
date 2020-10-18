<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Book extends JsonResource
{
    /**
     * Transform the resource into an array.
     * Represents a single model that needs to be transformed into a JSON structure.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'            => $this->id,
            'isbn'          => $this->isbn,
            'title'         => $this->title,
            'coverPath'     => $this->coverPath,
            'author'        => $this->author,
            'publisher'     => $this->publisher,
            'publishDate'   => $this->publishDate,
            'created_at'    => $this->created_at,
            'updated_at'    => $this->updated_at,
        ];
    }
}
