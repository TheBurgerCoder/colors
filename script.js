let x = [];
for (let i = 0; i < 16777215; i++) {
	const newDiv = document.createElement("div");
	newDiv.innerHTML = "Hello, World!";
	newDiv.style.background = dec2hex(i);
	x.push(newDiv);
	const parent = document.querySelector("body");
	parent.appendChild(newDiv);
}
function dec2hex(i)
{
	var result = "000000";
	if      (i >= 0       && i <= 15)       { result = "00000" + i.toString(16); }
	else if (i >= 16      && i <= 255)      { result = "0000"  + i.toString(16); }
	else if (i >= 256     && i <= 4095)     { result = "000"   + i.toString(16); }
	else if (i >= 4096    && i <= 65535)    { result = "00"    + i.toString(16); }
	else if (i >= 65535   && i <= 1048576)  { result = "0"     + i.toString(16); }
	else if (i >= 1048576 && i <= 16777216) { result =           i.toString(16); }
	return result;
}