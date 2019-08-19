<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommentUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        $this->sanitize();

        return [
            'text' => 'required|string|max:255',
            'id' => 'required'
        ];
    }

    /**
     * Sanitize input
     * @return Array
     */
    protected function sanitize() {
      $input = $this->all();

      $input['text'] = trim(filter_var($input['text'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW | FILTER_FLAG_STRIP_HIGH));
      $input['id'] = trim(filter_var($input['id'], FILTER_SANITIZE_NUMBER_INT));

      $this->replace($input);

    }

}
