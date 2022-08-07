<?php
require_once('car.php');
require_once('uberX.php');
require_once('account.php');

$uberX = new UberX("SGFGSGSF", new Account("David PHP", "PHPDoc"), "Chevrolet", "Spark");
$uberX->printDataCar();

?>