<?php

namespace App\Controllers;

use CodeIgniter\HTTP\Response;

class Home extends BaseController
{
    public function index()
    {
        return view('index');
    }

    public function root($path = '')
    {
        if ($path !== '' && $path !== '/') {
            if (@file_exists(APPPATH . 'Views/' . $path . '.php')) {
                return view($path);
            } else {
                throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
            }
        } else if ($path === '/') {
            return view('index');
        } else {
            echo 'Path Not Found.';
        }
    }

}
