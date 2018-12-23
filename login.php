<?php  
$host = 'localhost';
$user = "root";
$password = "";
$db = 'db_project';

mysql_connect($host, $user, $password);
mysql_select_db($db);
if(isset($_POST['username'])){
	$usern = $_POST['username'];
	$passwordd = $_POST['password'];
	$sql = "select * from users where username='".$usern."' AND password= '".$passwordd."' limit 1 ";
	$result =msql_query($sql);
	if(mysql_num_rows($result)==1){
		echo "you successfully logged";
		exit();
	}
	else{
		echo "You have incorrect conneton";
	}
}
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="logins_style.css" defer>
</head>
<body>

<form>
<div class="login-container">
	
	<span class="login-span">
		Log-in to your account
	</span>
	<form method="post">
		<input type="text" class="input" name="username" placeholder="username">
		<input type="password" class="input" name="password" placeholder="password">
		<button class="login-btn">LOG IN</button>
		<div class="extra-login-container">
			
		<input type="button" name="create account" value="create account" onclick="window.location.href='sign_up_page.html'">
	</form>
		<button>forgot password</button>

	</div>
</form>
</div>
</body>
</html>
