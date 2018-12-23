<?php  
$db_host = 'localhost';
$db_user = 'admin';
$db_pass = '12345';
$db_database = 'db_project';

$link = mysql_connect($db_host, $db_user, $b_pas);

mysql_select_db($db_database, $link) or die(mysql_error());
mysql_query("SET names UTF-8")

?>