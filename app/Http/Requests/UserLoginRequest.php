<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserLoginRequest extends FormRequest
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
          'email' => 'required|string|email|max:150',
          'password' => 'required|string|min:6|max:150'
        ];
    }

    // Sanitize the email before using it to query the database.
    private function sanitize() {
      $input = $this->all();
      $input['email'] = filter_var($input['email'], FILTER_SANITIZE_EMAIL);

      $this->replace($input);

    }
}
