<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommentStoreRequest extends FormRequest
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

        $this->sanitize();

        return [
          'message' => 'required|string|max:255',
          'postId' => 'required|integer'
        ];

    }

    /**
     * Sanitizing input
     * @return
     */
    private function sanitize() {
      $input = $this->all();
      
      $input['message'] = trim(strip_tags($input['message']));
      $input['postId'] = trim(filter_var($input['postId'], FILTER_SANITIZE_NUMBER_INT));

      $this->replace($input);

    }

    public function messages() {
      return [
        'message.required' => 'Message is required',
      ];
    }


}
