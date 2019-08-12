<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class Base64ValidationRule implements Rule
{

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {

      // replace spaces with + sign
      $value = str_replace(' ', '+', $value);

      // Regex to check that this is a valid syntax for base64
      if (!preg_match('/^[a-zA-Z0-9\/\r\n+]*={0,2}$/', $value))
      {
        return false;
      }

      // Decode the string in strict mode
      $decoded = base64_decode($value, true);
      if ($decoded === false) {
        return false;
      }
      // Re-encode the decoded string and check against received input.
      if(base64_encode($decoded) != $value) {
         return false;
      }

      // If all checks have passed, the string is considered as a valid base64 encoded string.
      return $value;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'This is not a valid base64 encoded image.';
    }
}
