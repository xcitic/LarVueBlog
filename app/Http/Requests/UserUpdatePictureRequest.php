<?php

namespace App\Http\Requests;

use App\Rules\Base64ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UserUpdatePictureRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        // Check that the image passed is a valid Base64 encoded
        if(isset($this->id)) {
          return [
            'image' => [new Base64ValidationRule],
            'id' => 'integer'
          ];
        }
        
        return [
          'image' => [new Base64ValidationRule]
        ];

    }


}
