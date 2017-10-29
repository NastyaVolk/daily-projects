<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
	if($form_errors = validate_form()) {
		show_form($form_errors);
	}
	else {
		process_form();
	}
}
else {
	show_form($form_errors);
}
//форма передана на обработку
function process_form() {
	print "Hello, " . $_POST['my_name'];
}
//отобразить форму
function show_form($errors) {
	if($errors) {
	print 'Please correct these errors: <ul><li>';
	print implode('</li><li>', $errors);
	print '</li></ul>';
	}
print<<<_HTML_
<form method="post" action="$_SERVER[PHP_SELF]">
Your name : <input type="text" name="my_name">
<br> 
<input type="submit" value="Say Hello">
</form>
_HTML_;
}
//проверить данные из формы
function validate_form() {
	//пустой массив сообщений об ошибках
	$errors = array();
	//сообщение об ошибке, если введено слишком короткое имя
	if(strlen($_POST['my_name']) < 3) {
		$errors[] = 'Your name must be at least 3 letters long.';
	}
	//возвратить массив ошибок, который может быть пустым
	return $errors;
}
?>
