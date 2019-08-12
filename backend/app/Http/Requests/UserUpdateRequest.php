<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
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

        // if user has chosen a new email, check that it is unique.
        if ($this->email != $this->user()->email) {
          return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
          ];
        }

        // else drop the email check
        return [
          'name' => 'required|string|max:255'
        ];



    }


    /**
     * Sanitizing input
     * @return Array [sanitized input]
     */
    private function sanitize() {
      $input = $this->all();

      $input['name'] = trim(filter_var($input['name'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW));
      $input['email'] = trim(filter_var($input['email'], FILTER_SANITIZE_EMAIL));



      $this->replace($input);

    }
}
