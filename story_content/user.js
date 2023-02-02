function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6eyK6HyYrLj":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzlLtNxeJ_60U0EBbaQU8tUsftmQoLaayg2sssNp8rPnWx_nmyTjfRsiAf8fHklYZpS4w/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

