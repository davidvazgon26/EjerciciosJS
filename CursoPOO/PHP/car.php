<?php
require_once('account.php');

class Car {
    public $id;
    public $license;
    public $driver;
    public $passenger;


    public function __construct($license, $driver){
        $this->license = $license;
        $this->driver = $driver;
    }

   
}
?>