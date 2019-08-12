<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
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
   * Sanitize then Validate the user input
   *
   * @return array
   */
  public function rules()
  {

      $this->sanitize();

      return [
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:6|max:150|confirmed'
      ];

  }

  /**
   * Sanitizing input
   * @return
   */
  private function sanitize() {
    $input = $this->all();

    $input['name'] = trim(filter_var($input['name'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW));
    $input['email'] = trim(filter_var($input['email'], FILTER_SANITIZE_EMAIL));

    $this->replace($input);

  }

  public function messages() {
    return [
      'message.required' => 'Message is required',
    ];
  }
}
