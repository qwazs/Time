function odliczanie()
		{
			var dzisiaj = new Date();
			// podgrupy -->
			var godzina = dzisiaj.getHours();
			var minuta = dzisiaj.getMinutes();
			var sekunda = dzisiaj.getSeconds();
			//0 na początku-->
			if (minuta < 10)
			minuta = '0' + minuta;
			if (sekunda < 10)
			sekunda = '0' + sekunda;
			// dodanie zegara -->
			document.getElementById("zegar").innerHTML =
			godzina+":"+minuta+":"+sekunda;
			// co 1 sec -->
			setTimeout("odliczanie()",1000);
		}
