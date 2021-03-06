<?php

namespace App\Http\Requests;

use App\Rules\Base64ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class PostStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->isAdmin();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

      $this->sanitize();
      // If a new image is in the payload validate it, passes boolean false value into image if validation fails.
      if (is_string($this->image)) {
        return [
          'title' => 'required|string|max:255',
          'description' => 'required|string|max:255',
          'content' => 'required|max:1000',
          'image' => [new Base64ValidationRule]
        ];
      }

      return [
        'title' => 'required|string|max:255',
        'description' => 'required|string|max:255',
        'content' => 'required|max:1000',
      ];



    }

    /**
     * Sanitize input
     * @return Array [Sanitized input]
     */
    private function sanitize() {

      $input = $this->all();
      // Strip all tags, then sanitize the string and finally trim spaces in start and end.
      $input['title'] = trim( strip_tags($input['title']) );
      $input['description'] = trim( strip_tags($input['description']) );

      // strip php and html tags
      // encode everything in the db as htmlentities
      // trim the start and end
      $allowedTags = "<br><strong><h1><h2><h3><h4><h5><p><i><ul><li><ol>";
      $content = $input['content'];

      $content_filtered = filter_var($content, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW | FILTER_FLAG_STRIP_HIGH);
      // $content_stripped = strip_tags($content_filtered, $allowedTags);
      // $content_html = htmlentities($content_filtered);
      $input['content'] = $content_filtered;

      $this->replace($input);

    }
}
